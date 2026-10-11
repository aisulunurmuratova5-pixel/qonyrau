/* =========================================================
   Қоңырау — шағын сервер (Node.js 18+, қосымша пакетсіз)
   1) Сайттың файлдарын (index.html, css/, js/) береді
   2) ЖИ сұраныстарын ChatGPT (OpenAI) немесе Claude API-ге жібереді.
      API кілті тек осы серверде сақталады, браузерге ешқашан берілмейді.
   Іске қосу:  node server.js   →   http://localhost:3000
   ========================================================= */
const http = require('http');
const fs = require('fs');
const path = require('path');

// --- .env файлынан баптауларды оқу (ANTHROPIC_API_KEY=...) ---
const envFile = path.join(__dirname, '.env');
if (fs.existsSync(envFile)) {
  for (const line of fs.readFileSync(envFile, 'utf8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
  }
}
const PORT = Number(process.env.PORT) || 3000;

// --- ЖИ провайдері: 'openai' (ChatGPT) немесе 'claude' ---
// .env ішінде AI_PROVIDER жазылмаса, қай кілт бар екеніне қарап өзі таңдайды.
const PROVIDER = (process.env.AI_PROVIDER || (process.env.OPENAI_API_KEY ? 'openai' : 'claude')).toLowerCase();
const CFG = PROVIDER === 'openai' ? {
  key: process.env.OPENAI_API_KEY || '',
  model: process.env.AI_MODEL || 'gpt-6-astra',          // OpenAI флагман моделі
  quick: process.env.AI_QUICK_MODEL || 'gpt-6-luna',     // жылдам әрі арзан модель
  url: (process.env.OPENAI_BASE_URL || 'https://api.openai.com') + '/v1/responses'
} : {
  key: process.env.ANTHROPIC_API_KEY || '',
  model: process.env.AI_MODEL || 'claude-sonnet-5-5',
  quick: process.env.AI_QUICK_MODEL || 'claude-haiku-5-5',
  url: (process.env.ANTHROPIC_BASE_URL || 'https://api.anthropic.com') + '/v1/messages'
};
const API_KEY = CFG.key;
const SYSTEM = 'You are Сыңғыр, the assistant inside Қоңырау, a teacher–parent communication platform for schools in Kazakhstan. Follow the instructions in the user message exactly.';

// Claude API (Anthropic Messages API)
async function callClaude(messages, quick) {
  const r = await fetch(CFG.url, {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-api-key': CFG.key, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model: quick ? CFG.quick : CFG.model, max_tokens: 4000, system: SYSTEM, messages })
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) return { status: r.status, error: data?.error?.message || 'API қатесі' };
  const text = (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('');
  return { text, truncated: data.stop_reason === 'max_tokens' };
}

// OpenAI API (ChatGPT, Responses API)
async function callOpenAI(messages, quick) {
  const r = await fetch(CFG.url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + CFG.key },
    body: JSON.stringify({ model: quick ? CFG.quick : CFG.model, instructions: SYSTEM, input: messages, max_output_tokens: 8000 })
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) return { status: r.status, error: data?.error?.message || 'API қатесі' };
  // Мәтін output[] ішіндегі type:'message' элементтерінде, content[].type === 'output_text'
  const text = (data.output || []).filter(o => o.type === 'message')
    .flatMap(o => o.content || []).filter(c => c.type === 'output_text').map(c => c.text).join('');
  return { text, truncated: data.status === 'incomplete' };
}

const TYPES = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8',
  '.json':'application/json', '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.webp':'image/webp', '.ico':'image/x-icon', '.txt':'text/plain; charset=utf-8' };

// --- қарапайым шектеу: бір IP-ден минутына 20 сұраныс ---
const hits = new Map();
function tooMany(ip) {
  const now = Date.now(), list = (hits.get(ip) || []).filter(t => now - t < 60000);
  list.push(now); hits.set(ip, list);
  return list.length > 20;
}

// --- күндік шектеу: бүкіл сайтқа тәулігіне AI_DAILY_LIMIT сұраныс (әдепкі 200) ---
// Жалпы сілтеме арқылы біреу балансты түгел жұмсап қоймауы үшін.
const DAILY_LIMIT = Number(process.env.AI_DAILY_LIMIT) || 200;
let dayStamp = new Date().toDateString(), dayCount = 0;
function dailyExceeded() {
  const today = new Date().toDateString();
  if (today !== dayStamp) { dayStamp = today; dayCount = 0; }
  dayCount++;
  return dayCount > DAILY_LIMIT;
}

function sendJson(res, status, obj) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(obj));
}

function readBody(req, limit = 300 * 1024) {
  return new Promise((resolve, reject) => {
    let size = 0; const chunks = [];
    req.on('data', c => { size += c.length; if (size > limit) { reject(new Error('too_large')); req.destroy(); } else chunks.push(c); });
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

async function handleAI(req, res) {
  if (!API_KEY) return sendJson(res, 503, { code: 'no_key', message: 'API кілті орнатылмаған (.env файлын тексеріңіз)' });
  if (tooMany((req.headers['x-forwarded-for'] || '').split(',')[0].trim() || req.socket.remoteAddress)) return sendJson(res, 429, { code: 'rate_limited', message: 'Сұраныс тым көп' });
  if (dailyExceeded()) return sendJson(res, 429, { code: 'rate_limited', message: 'Бүгінгі ЖИ лимиті таусылды' });
  let body;
  try { body = JSON.parse(await readBody(req)); } catch (e) { return sendJson(res, 400, { code: 'invalid_request', message: 'Сұраныс дұрыс емес' }); }
  const messages = Array.isArray(body.messages) ? body.messages
    .filter(m => (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string' && m.content.trim())
    .map(m => ({ role: m.role, content: m.content.slice(0, 60000) })) : [];
  if (!messages.length || messages[messages.length - 1].role !== 'user') return sendJson(res, 400, { code: 'invalid_request', message: 'Хабарлама жоқ' });

  try {
    const out = PROVIDER === 'openai' ? await callOpenAI(messages, !!body.quick) : await callClaude(messages, !!body.quick);
    if (out.error) {
      const code = out.status === 429 ? 'rate_limited' : out.status === 401 ? 'bad_key' : 'upstream_error';
      console.error('ЖИ API қатесі:', out.status, out.error);
      return sendJson(res, out.status === 429 ? 429 : 502, { code, message: out.error });
    }
    if (!out.text.trim()) return sendJson(res, 502, { code: 'empty_completion', message: 'Бос жауап' });
    sendJson(res, 200, { text: out.text, truncated: out.truncated });
  } catch (e) {
    console.error('Байланыс қатесі:', e.message);
    sendJson(res, 502, { code: 'upstream_error', message: 'ЖИ API-ге қосылу мүмкін болмады' });
  }
}

function serveStatic(req, res) {
  let urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (urlPath.endsWith('/')) urlPath += 'index.html';
  const file = path.normalize(path.join(__dirname, urlPath));
  // қауіпсіздік: тек жоба қалтасындағы файлдар, .env және server.js берілмейді
  const base = path.basename(file);
  if (!file.startsWith(__dirname + path.sep) || base.startsWith('.') || base === 'server.js') { res.writeHead(404); return res.end('Not found'); }
  fs.readFile(file, (err, buf) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file).toLowerCase()] || 'application/octet-stream' });
    res.end(buf);
  });
}

http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/api/health') return sendJson(res, 200, { ok: !!API_KEY });
  if (req.method === 'POST' && req.url === '/api/ai') return handleAI(req, res);
  if (req.method === 'GET') return serveStatic(req, res);
  res.writeHead(405); res.end();
}).listen(PORT, () => {
  console.log(`Қоңырау іске қосылды: http://localhost:${PORT}`);
  console.log(API_KEY ? `ЖИ қосулы: ${PROVIDER === 'openai' ? 'ChatGPT (OpenAI)' : 'Claude'}, модель ${CFG.model}`
    : `ЖИ өшірулі: .env файлына ${PROVIDER === 'openai' ? 'OPENAI_API_KEY' : 'ANTHROPIC_API_KEY'} жазыңыз`);
});
