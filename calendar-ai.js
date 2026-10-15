
I.sparkle = '<path d="M12 3l1.8 4.6 4.7 1.9-4.7 1.8L12 16l-1.8-4.7-4.7-1.8 4.7-1.9z"/><path d="M19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z"/>';
I.trash = '<path d="M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15"/>';
NAV.teacher = [['class','grid'],['feed','feed'],['portfolio','image'],['assignments','clip'],['calendar','cal'],['attendance','check2'],['messages','msg'],['reports','chart'],['ai','sparkle']];
NAV.parent = [['home','home'],['feed','feed'],['calendar','cal'],['portfolio','image'],['messages','msg'],['report','chart']];
NAV.student = [['myday','sun'],['assignments','clip'],['calendar','cal'],['portfolio','image'],['feed','feed']];

Object.assign(T.kk, {
  nav_calendar:'Күнтізбе', nav_ai:'ЖИ көмекші',
  cal_today:'Бүгін', cal_none:'Бүгін іс-шара жоқ', cal_allNote:'Таңдалған айдың барлық іс-шаралары көрсетілген.', cal_create:'Іс-шара құру',
  cal_new:'Сыныптың жаңа іс-шарасы', cal_title:'Атауы', cal_titlePh:'Мысалы: Ата-аналар жиналысы', cal_cover:'Мұқаба',
  cal_start:'Басталуы', cal_end:'Аяқталуы', cal_allDay:'Күні бойы', cal_desc:'Сипаттама (міндетті емес)', cal_descPh:'Кім, не, қашан, қайда',
  cal_reg:'Жазылу орындары', cal_regHint:'Жеке кездесулер, еріп жүретін ата-аналар, ерікті көмекшілер үшін орын ашыңыз.',
  cal_regAiPh:'Сыңғырға қандай орындар керек екенін жазыңыз: мысалы, «18:00-ден бастап 15 минуттан 6 кездесу»',
  cal_preset1:'Жеке кездесулер', cal_preset2:'Еріп жүретін ата-аналар', cal_preset3:'Ерікті көмекшілер', cal_preset4:'Дастарқанға тағам',
  cal_addSlot:'Орын қосу', cal_slotPh:'Орын атауы', cal_cap:'Саны',
  cal_rem:'Еске салғыштар', cal_remHint:'Отбасыларға іс-шара туралы автоматты түрде еске салу',
  rem_now:'Қазір жіберу', rem_5d:'5 күн бұрын', rem_1d:'1 күн бұрын', rem_1h:'1 сағат бұрын',
  cal_feed:'Сынып таспасында жариялау', cal_feedHint:'Іс-шара туралы жазба таспада пайда болады',
  cal_created:'Іс-шара құрылды', cal_deleted:'Іс-шара өшірілді', cal_delete:'Өшіру', cal_deleteSure:'Иә, өшіру',
  cal_signup:'Жазылу', cal_signed:'Сіз жазылдыңыз', cal_cancelSign:'Бас тарту', cal_full:'Орын жоқ', cal_signedToast:'Сіз «{slot}» орнына жазылдыңыз',
  cal_due:'Тапсырма мерзімі', cal_remindMsg:'Еске салу: {title} — {when}.', cal_feedPost:'Жаңа іс-шара: {title}\n{when}',
  cal_needTitle:'Іс-шараның атауын жазыңыз', cal_badTime:'Аяқталу уақыты басталудан кейін болуы керек',
  n_reminder:'Еске салу: «{title}» {when}', n_signup:'{name} «{slot}» орнына жазылды', cal_next:'Алдағы іс-шара', cal_open:'Ашу',
  cov_fest:'Мереке', cov_meet:'Жиналыс', cov_trip:'Саяхат', cov_star:'Жетістік',
  ai_title:'ЖИ көмекші', ai_sub:'Сыңғыр хабарлама жазуға, апталық қорытынды шығаруға және сабаққа тапсырма дайындауға көмектеседі. Нәтижені жібермес бұрын әрқашан тексеріп, түзете аласыз.',
  ai_sec1:'Ата-аналармен байланыс', ai_sec2:'Сабаққа материал', ai_sec3:'Тіл',
  ai_msg:'Ата-анаға хабарлама', ai_msgD:'Оқушының осы аптадағы деректері негізінде хабарлама жобасы',
  ai_week:'Аптаның қорытындысы', ai_weekD:'Әр ата-анаға баласының апталық қысқаша есебі',
  ai_task:'Тақырып бойынша тапсырма', ai_taskD:'Тақырыпты жазыңыз — дайын тапсырма мен тексеру критерийлері',
  ai_quiz:'Тест сұрақтары', ai_quizD:'Тақырып немесе мәтін бойынша жауабы бар тест',
  ai_conv:'Мәтіннен тапсырма', ai_convD:'Оқулықтан үзінді қойыңыз — сұрақтар мен тапсырма шығады',
  ai_tr:'Аудару', ai_trD:'Хабарламаны қазақша, орысша және ағылшынша аудару',
  ai_new:'Жаңа', ai_student:'Оқушы', ai_purpose:'Мақсаты', ai_tone:'Тон', ai_lang:'Тілі', ai_notes:'Қосымша (міндетті емес)', ai_notesPh:'Мысалы: жиналысқа шақыру, бейсенбі 18:00',
  p_praise:'Мақтау', p_hw:'Үй жұмысы туралы', p_absent:'Сабаққа келмеуі', p_meet:'Кездесуге шақыру', p_custom:'Өз тақырыбым',
  tone_warm:'Жылы', tone_formal:'Ресми', lang_kk:'Қазақша', lang_ru:'Орысша', lang_en:'Ағылшынша',
  ai_generate:'Жазу', ai_regen:'Қайта жазу', ai_stop:'Тоқтату', ai_thinking:'Сыңғыр ойланып жатыр…', ai_result:'Нәтиже (түзете аласыз)',
  ai_sendChat:'Ата-анаға жіберу', ai_sentChat:'Хабарлама ата-анаға жіберілді', ai_sendAll:'Барлық ата-анаға жіберу', ai_sentAll:'{n} ата-анаға апталық қорытынды жіберілді',
  ai_topic:'Тақырып', ai_topicPh:'Мысалы: Python-дағы for циклі', ai_grade:'Сынып', ai_count:'Сұрақ саны', ai_source:'Мәтін (оқулықтан үзінді)', ai_sourcePh:'Мәтінді осында қойыңыз…',
  ai_saveAsg:'Тапсырма ретінде сақтау', ai_savedAsg:'Тапсырма «Тапсырмалар» бөліміне қосылды', ai_copy:'Көшіру', ai_copied:'Көшірілді',
  ai_from:'Қай тілден', ai_text:'Мәтін', ai_textPh:'Аударатын мәтін…',
  ai_off:'ЖИ қосылмаған (README-дегі нұсқаулық бойынша server.js-ті API кілтімен іске қосыңыз). Хабарлама мен апталық қорытынды үшін дайын үлгі қолданылды.',
  ai_offShort:'ЖИ қосылмаған: server.js-ті API кілтімен іске қосып, сайтты http://localhost:3000 арқылы ашыңыз.',
  ai_template:'Үлгі бойынша жазылды', ai_draftReply:'Сыңғыр жауап жобасын жазсын',
  e_not_granted:'ЖИ-ге рұқсат берілмеді. Рұқсатты бет параметрлерінен қосуға болады.', e_rate_limited:'Сұраныс көп болды. Сәл кейін қайталап көріңіз.',
  e_refused:'Сыңғыр бұл сұранысқа жауап бере алмады. Сұранысты өзгертіп көріңіз.', e_invalid_json:'Жауап дұрыс пішімде келмеді. «Қайта жазу» батырмасын басыңыз.',
  e_generic:'Байланыс үзілді. Қайталап көріңіз.', e_bad_key:'API кілті дұрыс емес немесе жоқ. .env файлын тексеріп, серверді қайта іске қосыңыз.', ai_answer:'Жауабы', ai_explain:'Түсініктеме', ai_criteria:'Бағалау критерийлері', ai_steps:'Орындау қадамдары'
});
Object.assign(T.ru, {
  nav_calendar:'Календарь', nav_ai:'ИИ-помощник',
  cal_today:'Сегодня', cal_none:'Сегодня событий нет', cal_allNote:'Показаны все события выбранного месяца.', cal_create:'Создать событие',
  cal_new:'Новое событие класса', cal_title:'Название', cal_titlePh:'Например: родительское собрание', cal_cover:'Обложка',
  cal_start:'Начало', cal_end:'Окончание', cal_allDay:'Весь день', cal_desc:'Описание (необязательно)', cal_descPh:'Кто, что, когда, где',
  cal_reg:'Записи', cal_regHint:'Откройте места для встреч, сопровождающих и волонтёров.',
  cal_regAiPh:'Скажите Сыңғыру, какие места нужны: например, «6 встреч по 15 минут с 18:00»',
  cal_preset1:'Индивидуальные встречи', cal_preset2:'Сопровождающие', cal_preset3:'Волонтёры', cal_preset4:'Угощения',
  cal_addSlot:'Добавить место', cal_slotPh:'Название места', cal_cap:'Кол-во',
  cal_rem:'Напоминания', cal_remHint:'Автоматически отправлять напоминания о событии семьям',
  rem_now:'Отправить сейчас', rem_5d:'За 5 дней', rem_1d:'За 1 день', rem_1h:'За 1 час',
  cal_feed:'Опубликовать в ленте класса', cal_feedHint:'Запись о событии появится в ленте',
  cal_created:'Событие создано', cal_deleted:'Событие удалено', cal_delete:'Удалить', cal_deleteSure:'Да, удалить',
  cal_signup:'Записаться', cal_signed:'Вы записаны', cal_cancelSign:'Отменить', cal_full:'Мест нет', cal_signedToast:'Вы записаны: «{slot}»',
  cal_due:'Срок задания', cal_remindMsg:'Напоминание: {title} — {when}.', cal_feedPost:'Новое событие: {title}\n{when}',
  cal_needTitle:'Укажите название события', cal_badTime:'Окончание должно быть позже начала',
  n_reminder:'Напоминание: «{title}» {when}', n_signup:'{name} записался(-ась): «{slot}»', cal_next:'Ближайшее событие', cal_open:'Открыть',
  cov_fest:'Праздник', cov_meet:'Собрание', cov_trip:'Поездка', cov_star:'Успех',
  ai_title:'ИИ-помощник', ai_sub:'Сыңғыр помогает написать сообщение, подготовить итоги недели и задание к уроку. Перед отправкой результат всегда можно проверить и исправить.',
  ai_sec1:'Общение с родителями', ai_sec2:'Материалы к уроку', ai_sec3:'Язык',
  ai_msg:'Сообщение родителю', ai_msgD:'Черновик на основе данных ученика за эту неделю',
  ai_week:'Итоги недели', ai_weekD:'Каждому родителю — короткий отчёт о его ребёнке',
  ai_task:'Задание по теме', ai_taskD:'Напишите тему — получите задание и критерии проверки',
  ai_quiz:'Тестовые вопросы', ai_quizD:'Тест с ответами по теме или тексту',
  ai_conv:'Задание из текста', ai_convD:'Вставьте отрывок из учебника — получите вопросы и задание',
  ai_tr:'Перевод', ai_trD:'Перевести сообщение между казахским, русским и английским',
  ai_new:'Новое', ai_student:'Ученик', ai_purpose:'Цель', ai_tone:'Тон', ai_lang:'Язык', ai_notes:'Дополнительно (необязательно)', ai_notesPh:'Например: пригласить на собрание, четверг 18:00',
  p_praise:'Похвала', p_hw:'О домашнем задании', p_absent:'Пропуск урока', p_meet:'Приглашение на встречу', p_custom:'Своя тема',
  tone_warm:'Тёплый', tone_formal:'Официальный', lang_kk:'Казахский', lang_ru:'Русский', lang_en:'Английский',
  ai_generate:'Написать', ai_regen:'Переписать', ai_stop:'Остановить', ai_thinking:'Сыңғыр думает…', ai_result:'Результат (можно исправить)',
  ai_sendChat:'Отправить родителю', ai_sentChat:'Сообщение отправлено родителю', ai_sendAll:'Отправить всем родителям', ai_sentAll:'Итоги недели отправлены {n} родителям',
  ai_topic:'Тема', ai_topicPh:'Например: цикл for в Python', ai_grade:'Класс', ai_count:'Кол-во вопросов', ai_source:'Текст (отрывок из учебника)', ai_sourcePh:'Вставьте текст сюда…',
  ai_saveAsg:'Сохранить как задание', ai_savedAsg:'Задание добавлено в раздел «Задания»', ai_copy:'Копировать', ai_copied:'Скопировано',
  ai_from:'С какого языка', ai_text:'Текст', ai_textPh:'Текст для перевода…',
  ai_off:'ИИ не подключён (запустите server.js с API-ключом по инструкции в README). Для сообщения и итогов недели использован готовый шаблон.',
  ai_offShort:'ИИ не подключён: запустите server.js с API-ключом и откройте сайт по адресу http://localhost:3000.',
  ai_template:'Составлено по шаблону', ai_draftReply:'Сыңғыр напишет черновик ответа',
  e_not_granted:'Доступ к ИИ не разрешён. Его можно включить в настройках страницы.', e_rate_limited:'Слишком много запросов. Попробуйте чуть позже.',
  e_refused:'Сыңғыр не смог ответить на этот запрос. Попробуйте переформулировать.', e_invalid_json:'Ответ пришёл в неверном формате. Нажмите «Переписать».',
  e_generic:'Связь прервалась. Попробуйте ещё раз.', e_bad_key:'API-ключ неверный или не задан. Проверьте файл .env и перезапустите сервер.', ai_answer:'Ответ', ai_explain:'Пояснение', ai_criteria:'Критерии оценки', ai_steps:'Шаги выполнения'
});

Object.assign(T.en, {
  nav_calendar:'Calendar', nav_ai:'AI assistant',
  cal_today:'Today', cal_none:'No events today', cal_allNote:'All events of the selected month are shown.', cal_create:'Create event',
  cal_new:'New class event', cal_title:'Title', cal_titlePh:'For example: parents’ meeting', cal_cover:'Cover',
  cal_start:'Starts', cal_end:'Ends', cal_allDay:'All day', cal_desc:'Description (optional)', cal_descPh:'Who, what, when, where',
  cal_reg:'Sign-up slots', cal_regHint:'Open slots for one-to-one meetings, parent helpers and volunteers.',
  cal_regAiPh:'Tell Syngyr which slots you need: for example, “6 meetings of 15 minutes from 18:00”',
  cal_preset1:'One-to-one meetings', cal_preset2:'Parent helpers', cal_preset3:'Volunteers', cal_preset4:'Food for the table',
  cal_addSlot:'Add slot', cal_slotPh:'Slot name', cal_cap:'Places',
  cal_rem:'Reminders', cal_remHint:'Remind families about the event automatically',
  rem_now:'Send now', rem_5d:'5 days before', rem_1d:'1 day before', rem_1h:'1 hour before',
  cal_feed:'Post in the class feed', cal_feedHint:'A post about the event will appear in the feed',
  cal_created:'Event created', cal_deleted:'Event deleted', cal_delete:'Delete', cal_deleteSure:'Yes, delete',
  cal_signup:'Sign up', cal_signed:'You signed up', cal_cancelSign:'Cancel', cal_full:'Full', cal_signedToast:'You signed up for “{slot}”',
  cal_due:'Assignment due', cal_remindMsg:'Reminder: {title} — {when}.', cal_feedPost:'New event: {title}\n{when}',
  cal_needTitle:'Write the event title', cal_badTime:'The end time must be after the start time',
  n_reminder:'Reminder: “{title}” {when}', n_signup:'{name} signed up for “{slot}”', cal_next:'Next event', cal_open:'Open',
  cov_fest:'Holiday', cov_meet:'Meeting', cov_trip:'Trip', cov_star:'Success',
  ai_title:'AI assistant', ai_sub:'Syngyr helps you write messages, prepare a weekly summary and create tasks for your lessons. You can always check and edit the result before sending it.',
  ai_sec1:'Talking with parents', ai_sec2:'Lesson materials', ai_sec3:'Language',
  ai_msg:'Message to a parent', ai_msgD:'A draft based on the student’s data for this week',
  ai_week:'Weekly summary', ai_weekD:'A short report about each child for their parent',
  ai_task:'Task on a topic', ai_taskD:'Write a topic — get a ready task and assessment criteria',
  ai_quiz:'Quiz questions', ai_quizD:'A quiz with answers on a topic or a text',
  ai_conv:'Task from a text', ai_convD:'Paste a part of a textbook — get questions and a task',
  ai_tr:'Translate', ai_trD:'Translate a message between Kazakh, Russian and English',
  ai_new:'New', ai_student:'Student', ai_purpose:'Purpose', ai_tone:'Tone', ai_lang:'Language', ai_notes:'Extra details (optional)', ai_notesPh:'For example: invite to the meeting, Thursday 18:00',
  p_praise:'Praise', p_hw:'About homework', p_absent:'Missed lessons', p_meet:'Invite to a meeting', p_custom:'My own topic',
  tone_warm:'Warm', tone_formal:'Formal', lang_kk:'Kazakh', lang_ru:'Russian', lang_en:'English',
  ai_generate:'Write', ai_regen:'Write again', ai_stop:'Stop', ai_thinking:'Syngyr is thinking…', ai_result:'Result (you can edit it)',
  ai_sendChat:'Send to parent', ai_sentChat:'Message sent to the parent', ai_sendAll:'Send to all parents', ai_sentAll:'Weekly summary sent to {n} parents',
  ai_topic:'Topic', ai_topicPh:'For example: the for loop in Python', ai_grade:'Grade', ai_count:'Number of questions', ai_source:'Text (from a textbook)', ai_sourcePh:'Paste the text here…',
  ai_saveAsg:'Save as an assignment', ai_savedAsg:'The task was added to “Assignments”', ai_copy:'Copy', ai_copied:'Copied',
  ai_from:'Translate', ai_text:'Text', ai_textPh:'Text to translate…',
  ai_off:'AI is not connected (start server.js with an API key as described in README). A ready template was used for the message and the weekly summary.',
  ai_offShort:'AI is not connected: start server.js with an API key and open the site at http://localhost:3000.',
  ai_template:'Written from a template', ai_draftReply:'Let Syngyr draft a reply',
  e_not_granted:'Access to AI was not allowed. You can turn it on in the page settings.', e_rate_limited:'Too many requests. Please try again a little later.',
  e_refused:'Syngyr could not answer this request. Try to change it.', e_invalid_json:'The answer came in the wrong format. Press “Write again”.',
  e_generic:'The connection was lost. Please try again.', e_bad_key:'The API key is wrong or missing. Check the .env file and restart the server.', ai_answer:'Answer', ai_explain:'Explanation', ai_criteria:'Assessment criteria', ai_steps:'Steps'
});

/* ---------- calendar data ---------- */
function seedCal(lang){
  if (lang === undefined) lang = isEnContent() ? 'en' : 'kk';
  const now = Date.now(), d = new Date(now); d.setHours(0,0,0,0);
  do { d.setDate(d.getDate()+1); } while (d.getDay()!==4);
  const thu = d.getTime();
  const trip = startOfDay(now + 15*DAY);
  const slots = []; for (let i=0;i<6;i++){ const m = 18*60 + i*15; slots.push({id:uid(), label:`${pad(Math.floor(m/60))}:${pad(m%60)}–${pad(Math.floor((m+15)/60))}:${pad((m+15)%60)}`, cap:1, taken: i===1?['5']:[]}); }
  return [
    {id:uid(), title:{kk:'Ата-аналар жиналысы', ru:'Родительское собрание', en:'Parents’ meeting'}, cover:'meet', start:thu+18*36e5, end:thu+19*36e5, allDay:false,
     desc:{kk:'Информатика кабинеті (214). Тақырып — балалардың цифрлық қауіпсіздігі. Жиналыстан кейін жеке кездесулерге жазылуға болады.', ru:'Кабинет информатики (214). Тема — цифровая безопасность детей. После собрания можно записаться на личную встречу.', en:'Informatics room (214). Topic: children’s digital safety. After the meeting you can sign up for a one-to-one talk.'},
     slots, reminders:['1d','1h'], toFeed:true, created: now - 2*DAY},
    {id:uid(), title:{kk:'Ғылым мұражайына саяхат', ru:'Поездка в музей науки', en:'Trip to the Science Museum'}, cover:'trip', start:trip, end:trip+DAY-1, allDay:true,
     desc:{kk:'Сынып мақсатына жеткенде барамыз! Автобус мектептен 9:00-де шығады.', ru:'Едем, когда класс достигнет цели! Автобус отправляется от школы в 9:00.', en:'We go when the class reaches its goal! The bus leaves the school at 9:00.'},
     slots:[{id:uid(), label:{kk:'Еріп жүретін ата-ана', ru:'Сопровождающий родитель', en:'Parent helper'}, cap:3, taken:['9']}], reminders:['5d','1d'], toFeed:false, created: now - DAY}
  ];
}
const COVERS = ['fest','meet','trip','star'];
function coverHtml(c, title, h=120){
  return `<div class="cov cov-${c}" style="height:${h}px">${c==='meet'?`<span class="cov-m">${mascot('happy',false)}</span>`:''}${title?`<b>${esc(title)}</b>`:''}</div>`;
}
const evWhen = e => e.allDay ? fmt(e.start,{weekday:'long', day:'numeric', month:'long'}) : `${fmt(e.start,{weekday:'long', day:'numeric', month:'long'})}, ${fTime(e.start)}–${fTime(e.end)}`;

VIEWS.calendar = () => {
  if (!ui.calMonth){ const n=new Date(); ui.calMonth={y:n.getFullYear(), m:n.getMonth()}; }
  const {y,m} = ui.calMonth, from = new Date(y,m,1).getTime(), to = new Date(y,m+1,1).getTime();
  const items = [];
  (S.calEvents||[]).forEach(e=>{ if (e.end>=from && e.start<to) items.push({ts:e.start, kind:'ev', e}); });
  S.assignments.forEach(a=>{ if (a.due>=from && a.due<to) items.push({ts:a.due, kind:'due', a}); });
  items.sort((a,b)=>a.ts-b.ts);
  const byDay = new Map(); items.forEach(it=>{ const k=dayKey(it.ts); if(!byDay.has(k)) byDay.set(k,[]); byDay.get(k).push(it); });
  const tk = dayKey(Date.now()); const now = new Date();
  if (now.getFullYear()===y && now.getMonth()===m && !byDay.has(tk)) byDay.set(tk, []);
  const keys = [...byDay.keys()].sort();
  const rows = keys.map(k=>{
    const ts = keyToTs(k), isT = k===tk;
    const list = byDay.get(k);
    const inner = list.length ? list.map(it=> it.kind==='ev'
      ? `<button class="ag-item" data-act="openEv" data-id="${it.e.id}"><span class="ag-time num">${it.e.allDay?t('cal_allDay'):`${fTime(it.e.start)}–${fTime(it.e.end)}`}</span><span class="ag-dot cov-${it.e.cover}"></span><span class="ag-title">${esc(L(it.e.title))}</span>${it.e.slots.length?`<span class="chip info">${it.e.slots.reduce((n,s)=>n+s.taken.length,0)}/${it.e.slots.reduce((n,s)=>n+s.cap,0)}</span>`:''}</button>`
      : `<button class="ag-item" data-act="openAsg" data-id="${it.a.id}"><span class="ag-time num">${fTime(it.a.due)}</span><span class="ag-dot" style="background:var(--primary)"></span><span class="ag-title">${esc(L(it.a.title))}</span><span class="chip mute">${t('cal_due')}</span></button>`).join('')
      : `<span class="muted small" style="padding:10px 0;display:block">${t('cal_none')}</span>`;
    return `<div class="ag-row"><div class="ag-date ${isT?'today':''}"><b class="num">${new Date(ts).getDate()}</b><span>${esc(fmt(ts,{weekday:'short'}))}</span></div><div class="ag-list">${inner}</div></div>`;
  }).join('');
  const head = `<div class="cal-nav"><button class="btn" data-act="calToday">${t('cal_today')}</button><button class="icon-btn" data-act="calMove" data-v="-1" aria-label="prev">${icon('back',16)}</button><button class="icon-btn" data-act="calMove" data-v="1" aria-label="next">${icon('back',16).replace('class="ic"','class="ic" style="transform:rotate(180deg)"')}</button><h2 class="cal-month">${esc(fmt(new Date(y,m,1),{month:'long', year:'numeric'}))}</h2></div>`;
  const tools = S.role==='teacher' ? `<button class="btn primary" data-act="calNew">${icon('plus',16)}${t('cal_create')}</button>` : '';
  return pageHead(t('nav_calendar'), tools) + `<section class="card agenda">${head}${rows || `<p class="empty">${t('cal_none')}</p>`}<p class="ag-foot small muted">${t('cal_allNote')} ${S.role==='teacher'?`<button class="link-btn" style="color:var(--primary);font-size:13px" data-act="calNew">${t('cal_create')}</button>`:''}</p></section>`;
};

function newDraft(){
  const d = new Date(Date.now()+2*DAY);
  return { title:'', cover:'fest', sd:dayKey(d.getTime()), st:'17:00', ed:dayKey(d.getTime()), et:'18:00', allDay:false, desc:'', slots:[], reminders:['5d','1d','1h'], toFeed:true, aiReq:'' };
}
MODALS.calNew = () => {
  const d = ui.calDraft;
  const rem = ['now','5d','1d','1h'].map(r=>`<button type="button" class="rem ${d.reminders.includes(r)?'on':''}" data-act="calRem" data-v="${r}" aria-pressed="${d.reminders.includes(r)}">${d.reminders.includes(r)?icon('check',14):''}${t('rem_'+r)}</button>`).join('');
  const slots = d.slots.map((s,i)=>`<div class="slot-row"><input class="input" data-slot="${i}" data-f="label" value="${esc(L(s.label))}" placeholder="${t('cal_slotPh')}" aria-label="${t('cal_slotPh')}"><input class="input num" type="number" min="1" max="50" data-slot="${i}" data-f="cap" value="${s.cap}" aria-label="${t('cal_cap')}" style="width:80px"><button type="button" class="icon-btn" data-act="slotDel" data-i="${i}" aria-label="${t('cal_delete')}">${icon('x',16)}</button></div>`).join('');
  return shell(t('cal_new'), `
   <div class="cov-pick">${coverHtml(d.cover, d.title || t('cal_titlePh'), 130)}<div class="cov-opts" role="radiogroup" aria-label="${t('cal_cover')}">${COVERS.map(c=>`<button type="button" class="cov-opt cov-${c} ${d.cover===c?'on':''}" data-act="calCover" data-v="${c}" aria-label="${t('cov_'+c)}" aria-pressed="${d.cover===c}"></button>`).join('')}</div></div>
   <div class="field"><label for="cd-title">${t('cal_title')}</label><input class="input" id="cd-title" data-draft="title" value="${esc(d.title)}" placeholder="${t('cal_titlePh')}" autocomplete="off"></div>
   <div class="dt-grid">
     <div class="field"><label for="cd-sd">${t('cal_start')}</label><input class="input" type="date" id="cd-sd" data-draft="sd" value="${d.sd}"></div>
     <div class="field" ${d.allDay?'hidden':''}><label for="cd-st">&nbsp;</label><input class="input" type="time" id="cd-st" data-draft="st" value="${d.st}" aria-label="${t('cal_start')}"></div>
     <div class="field"><label for="cd-ed">${t('cal_end')}</label><input class="input" type="date" id="cd-ed" data-draft="ed" value="${d.ed}"></div>
     <div class="field" ${d.allDay?'hidden':''}><label for="cd-et">&nbsp;</label><input class="input" type="time" id="cd-et" data-draft="et" value="${d.et}" aria-label="${t('cal_end')}"></div>
   </div>
   <label class="switch"><input type="checkbox" id="cd-allday" data-draft="allDay" ${d.allDay?'checked':''}><span class="sw"></span>${t('cal_allDay')}</label>
   <div class="field"><label for="cd-desc">${t('cal_desc')}</label><textarea class="textarea" id="cd-desc" data-draft="desc" placeholder="${t('cal_descPh')}">${esc(d.desc)}</textarea></div>
   <hr class="sep">
   <div class="field"><h3 class="sec-h">${t('cal_reg')}</h3><p class="small muted">${t('cal_regHint')}</p></div>
   <div class="ai-box"><textarea class="textarea" id="cd-ai" data-draft="aiReq" placeholder="${t('cal_regAiPh')}" style="min-height:64px">${esc(d.aiReq)}</textarea><button type="button" class="icon-btn ai-btn" data-act="slotAi" aria-label="${t('ai_generate')}" ${ui.slotBusy?'disabled':''}>${icon('sparkle',18)}</button></div>
   ${ui.slotBusy?`<p class="small muted">${t('ai_thinking')}</p>`:''}${ui.slotErr?`<p class="small" style="color:var(--bad)">${esc(ui.slotErr)}</p>`:''}
   <div class="presets">${[1,2,3,4].map(i=>`<button type="button" class="preset" data-act="slotPreset" data-v="${i}">${t('cal_preset'+i)}</button>`).join('')}</div>
   ${slots?`<div class="slots">${slots}</div>`:''}
   <button type="button" class="btn ghost" style="align-self:center;color:var(--primary)" data-act="slotAdd">${icon('plus',16)}${t('cal_addSlot')}</button>
   <hr class="sep">
   <div class="field"><h3 class="sec-h">${t('cal_rem')}</h3><p class="small muted">${t('cal_remHint')}</p></div>
   <div class="rems">${rem}</div>
   <hr class="sep">
   <label class="switch"><input type="checkbox" id="cd-feed" data-draft="toFeed" ${d.toFeed?'checked':''}><span class="sw"></span><span><b>${t('cal_feed')}</b><span class="small muted" style="display:block">${t('cal_feedHint')}</span></span></label>
   <button class="btn primary" style="width:100%;justify-content:center;padding:13px" data-act="calSave">${icon('check',16)}${t('create')}</button>`, {wide:true});
};

MODALS.calEv = m => {
  const e = (S.calEvents||[]).find(x=>x.id===m.id); if (!e) return '';
  const mine = S.role==='parent' ? S.acting : null;
  const mySlot = mine ? e.slots.find(s=>s.taken.includes(mine)) : null;
  const slots = e.slots.length ? `<div class="field"><h3 class="sec-h">${t('cal_reg')}</h3></div><div class="slots">${e.slots.map(s=>{
      const full = s.taken.length>=s.cap, me_ = mine && s.taken.includes(mine);
      let right='';
      if (S.role==='parent') right = me_ ? `<button class="btn sm bad" data-act="slotUnsign" data-ev="${e.id}" data-id="${s.id}">${t('cal_cancelSign')}</button>` : (full||mySlot) ? `<span class="chip mute">${full?t('cal_full'):''}</span>` : `<button class="btn sm primary" data-act="slotSign" data-ev="${e.id}" data-id="${s.id}">${t('cal_signup')}</button>`;
      if (S.role==='teacher') right = `<span class="small muted">${s.taken.map(id=>esc(stu(id)?.parent||'')).join(', ')}</span>`;
      return `<div class="slot-view ${me_?'mine':''}"><span class="num"><b>${esc(L(s.label))}</b><span class="small muted" style="display:block">${s.taken.length}/${s.cap}${me_?` · ${t('cal_signed')}`:''}</span></span>${right}</div>`; }).join('')}</div>` : '';
  const rems = e.reminders.filter(r=>r!=='now').map(r=>`<span class="chip info">${icon('bell',12)}${t('rem_'+r)}</span>`).join(' ');
  const del = S.role==='teacher' ? (ui.confirmDel===e.id ? `<button class="btn bad" data-act="calDel" data-id="${e.id}">${icon('trash',16)}${t('cal_deleteSure')}</button>` : `<button class="btn" data-act="calDel" data-id="${e.id}">${icon('trash',16)}${t('cal_delete')}</button>`) : '';
  return shell(esc(L(e.title)), `${coverHtml(e.cover,'',110)}
    <p class="ev-when">${icon('cal',18)}<span>${esc(evWhen(e))}</span></p>
    ${L(e.desc)?`<p style="white-space:pre-wrap;max-width:68ch">${esc(L(e.desc))}</p>`:''}
    ${rems?`<div style="display:flex;gap:6px;flex-wrap:wrap">${rems}</div>`:''}
    ${slots}${del?`<div>${del}</div>`:''}`);
};

/* ---------- AI ---------- */
let AI = null;
function aiReady(fn){ AI = fn; if (ui.screen==='app' && (ui.view==='ai' || ui.modal)) render(); }

/* ЖИ-ді өз серверіміз арқылы шақыру (server.js → Claude API).
   Claude ішіндегі «sample» мүмкіндігімен бірдей пішімде жұмыс істейді:
   AI(prompt, options) → {text},  AI.json(prompt, options) → JSON мән */
function makeApiAI(){
  const call = async (input, opts={}) => {
    const messages = typeof input==='string' ? [{role:'user', content:input}] : input;
    let r;
    try {
      r = await fetch('/api/ai', { method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ messages, quick: opts.modelTier==='quick' }), signal: opts.signal });
    } catch(e){ throw { code: e.name==='AbortError' ? 'cancelled' : 'upstream_error', message: e.message }; }
    const data = await r.json().catch(()=>({}));
    if (!r.ok) throw { code: data.code || 'upstream_error', message: data.message || '' };
    opts.onText?.({ text: data.text, delta: data.text });
    return { text: data.text, truncated: !!data.truncated };
  };
  call.json = async (input, opts={}) => {
    const { text } = await call(input, opts);
    const tries = [text, (text.match(/```(?:json)?\s*([\s\S]*?)```/)||[])[1]];
    const a = text.search(/[\[{]/), b = Math.max(text.lastIndexOf('}'), text.lastIndexOf(']'));
    if (a>=0 && b>a) tries.push(text.slice(a, b+1));
    for (const c of tries){ if (!c) continue; try { return JSON.parse(c); } catch(e){} }
    throw { code:'invalid_json', text };
  };
  return call;
}

async function initAI(){
  // 1) Claude ішінде ашылса — Claude-тың өз мүмкіндігі
  try { const s = await window.claude?.use?.('sample'); if (s){ aiReady(s); return; } } catch(e){}
  // 2) server.js арқылы ашылса (http://localhost:3000) — өз API серверіміз
  if (location.protocol.startsWith('http')){
    try { const r = await fetch('/api/health'); const j = await r.json(); if (j.ok) aiReady(makeApiAI()); } catch(e){}
  }
}
initAI();
const aiErr = e => { const c = e?.code; return t({not_granted:'e_not_granted', sampling_disabled:'e_not_granted', bad_key:'e_bad_key', no_key:'e_bad_key', rate_limited:'e_rate_limited', refused:'e_refused', invalid_json:'e_invalid_json'}[c] || 'e_generic'); };

function studentFacts(sid){
  const s = stu(sid), from = startOfDay(Date.now()-6*DAY);
  const ev = S.events.filter(e=>e.sid===sid && e.ts>=from);
  const pos = {}, neg = {};
  ev.forEach(e=>{ const n=L(skill(e.skill)); (e.v>0?pos:neg)[n]=(e.v>0?pos:neg)[n]+1||1; });
  const notes = ev.filter(e=>e.note).map(e=>e.note);
  let present=0, late=0, absent=0;
  for (let i=0;i<7;i++){ const v=attOn(dayKey(Date.now()-i*DAY), sid); if(v==='present')present++; else if(v==='late')late++; else if(v==='absent')absent++; }
  const asg = S.assignments.map(a=>{ const sub=a.subs[sid]; return `${L(a.title)}: ${sub ? (sub.status==='graded' ? `graded ${sub.grade}/10` : 'submitted') : (a.due<Date.now()?'NOT submitted, overdue':'not submitted yet')}`; });
  const works = S.portfolio.filter(p=>p.sid===sid && p.ts>=from).map(p=>`${p.title} (${p.status})`);
  return { s, pts: ev.reduce((n,e)=>n+e.v,0), pos, neg, notes, present, late, absent, asg, works };
}
function factsText(f){
  const list = o => Object.entries(o).map(([k,v])=>`${k} ×${v}`).join(', ') || '—';
  return `Student: ${f.s.first} ${f.s.last}\nParent: ${f.s.parent} (${f.s.rel==='m'?'mother':'father'})\nPoints in last 7 days: ${f.pts}\nPraised for: ${list(f.pos)}\nNeeds work on: ${list(f.neg)}\nTeacher notes: ${f.notes.join('; ')||'—'}\nAttendance last 7 days: present ${f.present}, late ${f.late}, absent ${f.absent}\nAssignments: ${f.asg.join(' | ')}\nNew portfolio work: ${f.works.join(', ')||'—'}`;
}
function templateMsg(f, purpose, lang){
  if (lang==='en') return templateMsgEn(f, purpose);
  const kk = lang==='kk', n = f.s.first, top = Object.keys(f.pos)[0];
  const hi = kk ? `Сәлеметсіз бе, ${f.s.parent}!` : `Здравствуйте, ${f.s.parent}!`;
  const sign = kk ? `\n\nҚұрметпен, ${S.cls.teacher}` : `\n\nС уважением, ${S.cls.teacher}`;
  const body = {
    praise: kk ? `${n} осы аптада ${f.pts>0?'+'+f.pts:f.pts} ұпай жинады${top?`, әсіресе «${top}» үшін мақтау алды`:''}. Үйде де мақтап қойыңызшы!` : `${n} на этой неделе набрал(а) ${f.pts>0?'+'+f.pts:f.pts} баллов${top?`, особенно за «${top}»`:''}. Похвалите, пожалуйста, и дома!`,
    hw: kk ? `${n} бойынша тапсырмалар жағдайы: ${f.asg.join('; ')}. Үйде тексеріп жіберуіңізді сұраймын.` : `Состояние заданий ${n}: ${f.asg.join('; ')}. Прошу проверить дома.`,
    absent: kk ? `${n} осы аптада ${f.absent} рет сабаққа келмеді. Себебін айтып жіберсеңіз, өткен тақырыпты қуып жетуге көмектесемін.` : `${n} на этой неделе пропустил(а) ${f.absent} урок(а). Сообщите, пожалуйста, причину — помогу догнать тему.`,
    meet: kk ? `${n} жайлы қысқаша сөйлесіп алуға уақытыңыз бар ма? Өзіңізге ыңғайлы уақытты жазыңыз.` : `Найдётся ли у вас время коротко поговорить о ${n}? Напишите удобное время.`,
    custom: kk ? `${n} туралы хабарласып отырмын.` : `Пишу по поводу ${n}.`
  }[purpose];
  return `${hi} ${body}${sign}`;
}
function templateWeek(f, lang){
  if (lang==='en') return templateWeekEn(f);
  const kk = lang==='kk', top = Object.keys(f.pos).slice(0,2).join(', ');
  return kk ? `Сәлеметсіз бе, ${f.s.parent}! ${f.s.first} аптасының қорытындысы: ${f.pts>0?'+'+f.pts:f.pts} ұпай${top?` (${top})`:''}, қатысу — ${f.present+f.late} күн, тапсырмалар: ${f.asg.join('; ')}. Рахмет! ${S.cls.teacher}`
    : `Здравствуйте, ${f.s.parent}! Итоги недели ${f.s.first}: ${f.pts>0?'+'+f.pts:f.pts} баллов${top?` (${top})`:''}, посещаемость — ${f.present+f.late} дн., задания: ${f.asg.join('; ')}. Спасибо! ${S.cls.teacher}`;
}
// Ағылшынша үлгілер (ЖИ қосылмаған кезде)
function templateMsgEn(f, purpose){
  const n = f.s.first, top = Object.keys(f.pos)[0], p = f.pts>0 ? '+'+f.pts : f.pts;
  const body = {
    praise: `${n} got ${p} points this week${top?`, especially for “${top}”`:''}. Please praise them at home too!`,
    hw: `Here is how ${n} is doing with assignments: ${f.asg.join('; ')}. Please check at home.`,
    absent: `${n} missed ${f.absent} lesson(s) this week. Please let me know the reason, and I will help them catch up.`,
    meet: `Do you have time for a short talk about ${n}? Please write a time that is good for you.`,
    custom: `I am writing to you about ${n}.`
  }[purpose];
  return `Hello, ${f.s.parent}! ${body}\n\nBest regards, ${S.cls.teacher}`;
}
function templateWeekEn(f){
  const top = Object.keys(f.pos).slice(0,2).join(', '), p = f.pts>0 ? '+'+f.pts : f.pts;
  return `Hello, ${f.s.parent}! ${f.s.first}'s week: ${p} points${top?` (${top})`:''}, attended ${f.present+f.late} day(s), assignments: ${f.asg.join('; ')}. Thank you! ${S.cls.teacher}`;
}
const AI_RULES = `Rules: you help a school informatics teacher in Kazakhstan (class 7 «А»). Be warm, specific and brief. Mention only facts given below; never invent grades, events or diagnoses; never compare the child with classmates; no emojis; no subject line; no quotation marks around the whole text.`;
const langName = l => l==='kk' ? 'Kazakh (Cyrillic)' : l==='en' ? 'English' : 'Russian';

const AI_TOOLS = [
  ['msg','msg','sec1'],['week','cal','sec1'],
  ['task','clip','sec2'],['quiz','check2','sec2'],['conv','file','sec2'],
  ['tr','layers','sec3']
];
VIEWS.ai = () => {
  const off = AI===null;
  const sec = s => `<section class="ai-sec"><h2 class="sec-h">${t('ai_'+s)}</h2><div class="ai-grid">${AI_TOOLS.filter(x=>x[2]===s).map(([k,ic])=>`<button class="card ai-card" data-act="aiOpen" data-v="${k}"><span class="ai-ic ai-${k}">${icon(ic,26)}<i>${icon('sparkle',14)}</i></span><span class="ai-txt"><b>${t('ai_'+k)}</b><span>${t('ai_'+k+'D')}</span></span>${k==='week'?`<span class="chip gold ai-newb">${t('ai_new')}</span>`:''}</button>`).join('')}</div></section>`;
  return `<section class="card hero ai-hero"><span class="ai-masc">${mascot('wink',false)}</span><div style="min-width:0;flex:1"><p class="eyebrow">${icon('sparkle',14).replace('class="ic"','class="ic" style="display:inline;vertical-align:-2px"')} ${t('nav_ai')}</p><h2>${t('ai_title')}</h2><p class="muted" style="margin-top:6px;max-width:62ch">${t('ai_sub')}</p>${off?`<p class="small" style="margin-top:8px;color:var(--warn)">${t('ai_offShort')}</p>`:''}</div></section>`
    + sec('sec1') + sec('sec2') + sec('sec3');
};

function aiForm(k){
  const f = ui.ai.form;
  const sel = (key, opts, label) => `<div class="field"><label for="aif-${key}">${label}</label><select class="select" id="aif-${key}" data-aif="${key}">${opts.map(([v,l])=>`<option value="${v}" ${f[key]===v?'selected':''}>${esc(l)}</option>`).join('')}</select></div>`;
  const stuOpts = (all) => (all?[['all',t('allStudents')]]:[]).concat(S.students.map(s=>[s.id, fullName(s)]));
  const langOpts = [['kk',t('lang_kk')],['ru',t('lang_ru')],['en',t('lang_en')]];
  if (k==='msg') return `<div class="ai-form">${sel('sid', stuOpts(false), t('ai_student'))}${sel('purpose', ['praise','hw','absent','meet','custom'].map(p=>[p,t('p_'+p)]), t('ai_purpose'))}${sel('tone', [['warm',t('tone_warm')],['formal',t('tone_formal')]], t('ai_tone'))}${sel('lang', langOpts, t('ai_lang'))}</div><div class="field"><label for="aif-notes">${t('ai_notes')}</label><input class="input" id="aif-notes" data-aif="notes" value="${esc(f.notes||'')}" placeholder="${t('ai_notesPh')}"></div>`;
  if (k==='week') return `<div class="ai-form">${sel('sid', stuOpts(true), t('ai_student'))}${sel('lang', langOpts, t('ai_lang'))}</div>`;
  if (k==='task') return `<div class="field"><label for="aif-topic">${t('ai_topic')}</label><input class="input" id="aif-topic" data-aif="topic" value="${esc(f.topic||'')}" placeholder="${t('ai_topicPh')}"></div><div class="ai-form">${sel('grade', [5,6,7,8,9,10,11].map(g=>[String(g),String(g)]), t('ai_grade'))}${sel('lang', langOpts, t('ai_lang'))}</div>`;
  if (k==='quiz') return `<div class="field"><label for="aif-topic">${t('ai_topic')}</label><input class="input" id="aif-topic" data-aif="topic" value="${esc(f.topic||'')}" placeholder="${t('ai_topicPh')}"></div><div class="ai-form">${sel('count', ['3','5','8','10'].map(n=>[n,n]), t('ai_count'))}${sel('grade', [5,6,7,8,9,10,11].map(g=>[String(g),String(g)]), t('ai_grade'))}${sel('lang', langOpts, t('ai_lang'))}</div>`;
  if (k==='conv') return `<div class="field"><label for="aif-source">${t('ai_source')}</label><textarea class="textarea" id="aif-source" data-aif="source" placeholder="${t('ai_sourcePh')}" style="min-height:140px">${esc(f.source||'')}</textarea></div><div class="ai-form">${sel('grade', [5,6,7,8,9,10,11].map(g=>[String(g),String(g)]), t('ai_grade'))}${sel('lang', langOpts, t('ai_lang'))}</div>`;
  if (k==='tr') return `<div class="ai-form">${sel('from', [['kk',t('lang_kk')+' → '+t('lang_ru')],['ru',t('lang_ru')+' → '+t('lang_kk')],['kk-en',t('lang_kk')+' → '+t('lang_en')],['en-kk',t('lang_en')+' → '+t('lang_kk')]], t('ai_from'))}</div><div class="field"><label for="aif-text">${t('ai_text')}</label><textarea class="textarea" id="aif-text" data-aif="text" placeholder="${t('ai_textPh')}" style="min-height:110px">${esc(f.text||'')}</textarea></div>`;
  return '';
}
function aiOutput(k){
  const a = ui.ai;
  if (a.err) return `<p class="ai-err">${esc(a.err)}</p>`;
  if (a.busy && !a.out && !a.data) return `<p class="ai-wait"><span class="ai-spin">${mascot('happy',false)}</span>${t('ai_thinking')}</p>`;
  if (k==='week' && a.data){
    return `${a.note?`<p class="small" style="color:var(--warn)">${esc(a.note)}</p>`:''}<div class="week-list">${a.data.map((r,i)=>{ const s=stu(r.id); if(!s) return ''; return `<div class="week-item">${av(s,34)}<div style="flex:1;min-width:0"><b>${esc(fullName(s))}</b><textarea class="textarea" data-week="${i}" style="min-height:90px;margin-top:6px">${esc(r.text)}</textarea></div></div>`; }).join('')}</div>
      ${a.busy?'':`<div class="ai-actions"><button class="btn primary" data-act="aiSendWeek">${icon('send',16)}${t('ai_sendAll')}</button><button class="btn" data-act="aiRun">${icon('sparkle',16)}${t('ai_regen')}</button></div>`}`;
  }
  if (k==='quiz' && a.data){
    return `<ol class="quiz">${a.data.map(q=>`<li><b>${esc(q.q)}</b><ul>${(q.options||[]).map((o,i)=>`<li class="${i===Number(q.answer)?'ok':''}">${String.fromCharCode(65+i)}) ${esc(o)}${i===Number(q.answer)?` ${icon('check',14).replace('class="ic"','class="ic" style="display:inline;vertical-align:-2px"')}`:''}</li>`).join('')}</ul>${q.why?`<p class="small muted">${t('ai_explain')}: ${esc(q.why)}</p>`:''}</li>`).join('')}</ol>
      ${a.busy?'':`<div class="ai-actions"><button class="btn primary" data-act="aiSaveAsg">${icon('clip',16)}${t('ai_saveAsg')}</button><button class="btn" data-act="aiRun">${icon('sparkle',16)}${t('ai_regen')}</button></div>`}`;
  }
  if ((k==='task'||k==='conv') && a.data){
    const d = a.data;
    return `<div class="task-out"><h3>${esc(d.title||'')}</h3><p>${esc(d.desc||'')}</p>${(d.steps||[]).length?`<p class="lbl">${t('ai_steps')}</p><ol>${d.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol>`:''}${(d.questions||[]).length?`<p class="lbl">${t('ai_quiz')}</p><ol>${d.questions.map(s=>`<li>${esc(s)}</li>`).join('')}</ol>`:''}${(d.criteria||[]).length?`<p class="lbl">${t('ai_criteria')}</p><ul>${d.criteria.map(s=>`<li>${esc(s)}</li>`).join('')}</ul>`:''}</div>
      ${a.busy?'':`<div class="ai-actions"><button class="btn primary" data-act="aiSaveAsg">${icon('clip',16)}${t('ai_saveAsg')}</button><button class="btn" data-act="aiRun">${icon('sparkle',16)}${t('ai_regen')}</button></div>`}`;
  }
  if (a.out!=null && (k==='msg'||k==='tr')){
    return `${a.note?`<p class="small" style="color:var(--warn)">${esc(a.note)}</p>`:''}<div class="field"><label for="ai-out">${t('ai_result')}</label><textarea class="textarea" id="ai-out" style="min-height:170px">${esc(a.out)}</textarea></div>
      ${a.busy?'':`<div class="ai-actions">${k==='msg'?`<button class="btn primary" data-act="aiSendMsg">${icon('send',16)}${t('ai_sendChat')}</button>`:''}<button class="btn" data-act="aiCopy">${t('ai_copy')}</button><button class="btn" data-act="aiRun">${icon('sparkle',16)}${t('ai_regen')}</button></div>`}`;
  }
  return '';
}
MODALS.ai = m => {
  const k = m.tool, a = ui.ai;
  const canRun = AI || k==='msg' || k==='week';
  const runBtn = a.busy ? `<button class="btn" data-act="aiStop">${icon('x',16)}${t('ai_stop')}</button>` : `<button class="btn primary" data-act="aiRun" ${canRun?'':'disabled'}>${icon('sparkle',16)}${t('ai_generate')}</button>`;
  return shell(t('ai_'+k), `<p class="muted">${t('ai_'+k+'D')}</p>${aiForm(k)}<div>${runBtn}</div>${!AI?`<p class="small" style="color:var(--warn)">${k==='msg'||k==='week'?t('ai_off'):t('ai_offShort')}</p>`:''}<div id="ai-out-wrap">${aiOutput(k)}</div>`, {wide:true, lead:`<span class="ai-ic ai-${k}" style="width:42px;height:42px">${icon(AI_TOOLS.find(x=>x[0]===k)[1],20)}</span>`});
};

async function aiRun(){
  const k = ui.modal.tool, f = ui.ai.form;
  ui.ai.err=null; ui.ai.out=null; ui.ai.data=null; ui.ai.note=null; ui.ai.busy=true;
  const ctl = new AbortController(); ui.ai.ctl = ctl; renderModal();
  const lang = f.lang || S.lang;
  try {
    if (k==='msg'){
      const fx = studentFacts(f.sid || '1');
      if (!AI){ ui.ai.out = templateMsg(fx, f.purpose||'praise', lang); ui.ai.note = t('ai_template'); }
      else {
        const prompt = `${AI_RULES}\nTask: write a short message (3-5 sentences) from the teacher ${S.cls.teacher} to the parent. Write it in ${langName(lang)}. Tone: ${f.tone==='formal'?'polite and formal':'warm and friendly'}. Purpose: ${t('p_'+(f.purpose||'praise'))}. Extra wishes from the teacher: ${f.notes||'—'}.\nStart with a greeting to the parent by name, end with the teacher's name. Return only the message text.\n\nData:\n${factsText(fx)}`;
        ui.ai.out = '';
        await AI(prompt, { signal: ctl.signal, cache:false, onText: ({text}) => { ui.ai.out = text; const o=document.getElementById('ai-out'); if (o) o.value = text; else renderModal(); } });
      }
    } else if (k==='week'){
      const ids = (f.sid && f.sid!=='all') ? [f.sid] : S.students.map(s=>s.id);
      const facts = ids.map(studentFacts);
      if (!AI){ ui.ai.data = facts.map(fx=>({id:fx.s.id, text:templateWeek(fx, lang)})); ui.ai.note = t('ai_template'); }
      else {
        const prompt = `${AI_RULES}\nTask: for EACH student below write a weekly summary message to their parent in ${langName(lang)}: greeting by the parent's name, 2-3 sentences about the week (points, what they were praised for, attendance, assignments), one gentle suggestion for home if something needs work, signed "${S.cls.teacher}".\nReply with only a JSON array of objects {"id": string, "text": string}, one per student, using the id given.\n\n` + facts.map(fx=>`### id ${fx.s.id}\n${factsText(fx)}`).join('\n\n');
        const res = await AI.json(prompt, { signal: ctl.signal, cache:false });
        ui.ai.data = (Array.isArray(res)?res:[]).filter(r=>r && stu(String(r.id))).map(r=>({id:String(r.id), text:String(r.text||'')}));
      }
    } else if (k==='task' || k==='conv'){
      const src = k==='conv' ? `\nBase the task strictly on this source text:\n"""${(f.source||'').slice(0,6000)}"""` : '';
      const prompt = `You prepare classroom materials for a school informatics teacher in Kazakhstan. Grade ${f.grade||'7'}. Language: ${langName(lang)}. ${k==='task'?`Topic: ${f.topic||''}.`:''}${src}\nCreate one practical assignment students can do in 20-30 minutes.\nReply with only JSON: {"title": string, "desc": string (2-3 sentences, what to do and what to hand in), "steps": string[] (3-6 steps), "questions": string[] (2-4 check questions), "criteria": string[] (3-4 assessment criteria)}`;
      const res = await AI.json(prompt, { signal: ctl.signal, cache:false });
      ui.ai.data = res && typeof res==='object' ? res : null;
      if (!ui.ai.data) throw {code:'invalid_json'};
    } else if (k==='quiz'){
      const prompt = `You prepare a quiz for a school informatics class in Kazakhstan. Grade ${f.grade||'7'}. Language: ${langName(lang)}. Topic: ${f.topic||''}.\nWrite ${f.count||5} multiple-choice questions, each with 4 options and exactly one correct answer; vary the position of the correct answer.\nReply with only a JSON array of {"q": string, "options": [string,string,string,string], "answer": number (0-3), "why": string (one short sentence)}.`;
      const res = await AI.json(prompt, { signal: ctl.signal, cache:false });
      ui.ai.data = Array.isArray(res) ? res.filter(q=>q && q.q && Array.isArray(q.options)) : [];
      if (!ui.ai.data.length) throw {code:'invalid_json'};
    } else if (k==='tr'){
      const to = { kk:'Russian', ru:'Kazakh (Cyrillic)', 'kk-en':'English', 'en-kk':'Kazakh (Cyrillic)' }[f.from||'kk'] || 'Russian';
      const prompt = `Translate this school message for parents into ${to}. Keep the meaning, names and polite tone; natural wording a teacher in Kazakhstan would use. Return only the translation.\n\n${(f.text||'').slice(0,8000)}`;
      ui.ai.out = '';
      await AI(prompt, { signal: ctl.signal, modelTier:'quick', onText: ({text}) => { ui.ai.out = text; const o=document.getElementById('ai-out'); if (o) o.value = text; else renderModal(); } });
    }
  } catch(e){
    if (e?.code==='cancelled'){ if (e.text) ui.ai.out = e.text; }
    else ui.ai.err = aiErr(e);
  }
  ui.ai.busy=false; ui.ai.ctl=null;
  if (ui.modal && ui.modal.type==='ai') renderModal();
}

/* ---------- actions ---------- */
Object.assign(A, {
  calToday(){ const n=new Date(); ui.calMonth={y:n.getFullYear(), m:n.getMonth()}; render(); },
  calMove(el){ const d=new Date(ui.calMonth.y, ui.calMonth.m + Number(el.dataset.v), 1); ui.calMonth={y:d.getFullYear(), m:d.getMonth()}; render(); },
  calNew(){ ui.calDraft = newDraft(); ui.slotErr=null; openModal({type:'calNew'}); },
  calCover(el){ ui.calDraft.cover = el.dataset.v; renderModal(); },
  calRem(el){ const r=el.dataset.v, a=ui.calDraft.reminders; const i=a.indexOf(r); i>=0?a.splice(i,1):a.push(r); renderModal(); },
  slotAdd(){ ui.calDraft.slots.push({id:uid(), label:'', cap:1, taken:[]}); renderModal(); document.querySelector(`[data-slot="${ui.calDraft.slots.length-1}"]`)?.focus(); },
  slotDel(el){ ui.calDraft.slots.splice(Number(el.dataset.i),1); renderModal(); },
  slotPreset(el){
    const d = ui.calDraft, v = el.dataset.v, kk = S.lang==='kk';
    if (v==='1'){ const [h,mm] = (d.st||'17:00').split(':').map(Number); for (let i=0;i<6;i++){ const a=h*60+mm+i*15, b=a+15; d.slots.push({id:uid(), label:`${pad(Math.floor(a/60)%24)}:${pad(a%60)}–${pad(Math.floor(b/60)%24)}:${pad(b%60)}`, cap:1, taken:[]}); } }
    if (v==='2') d.slots.push({id:uid(), label: tx('Еріп жүретін ата-ана','Сопровождающий родитель','Parent helper'), cap:3, taken:[]});
    if (v==='3') d.slots.push({id:uid(), label: tx('Ерікті көмекші','Волонтёр','Volunteer'), cap:4, taken:[]});
    if (v==='4') (S.lang==='en' ? ['Baursak','Tea and sweets','Fruit'] : ['Бауырсақ','Шай мен тәтті','Жеміс']).forEach(x=>d.slots.push({id:uid(), label:x, cap:2, taken:[]}));
    renderModal();
  },
  async slotAi(){
    const d = ui.calDraft; const req = (d.aiReq||'').trim();
    if (!req){ document.getElementById('cd-ai')?.focus(); return; }
    if (!AI){ ui.slotErr = t('ai_offShort'); renderModal(); return; }
    ui.slotBusy = true; ui.slotErr=null; renderModal();
    try {
      const res = await AI.json(`A teacher is creating a class event "${d.title||''}" starting ${d.sd} ${d.allDay?'(all day)':d.st}. Turn the request into sign-up slots. Write slot labels in ${langName(S.lang)}; for time slots use the format HH:MM–HH:MM.\nRequest: ${req}\nReply with only a JSON array of {"label": string, "cap": number} (at most 20 items).`, {modelTier:'quick', cache:false});
      (Array.isArray(res)?res:[]).slice(0,20).forEach(r=>{ if (r && r.label) d.slots.push({id:uid(), label:String(r.label).slice(0,80), cap:Math.max(1,Math.min(50,Number(r.cap)||1)), taken:[]}); });
      d.aiReq = '';
    } catch(e){ ui.slotErr = aiErr(e); }
    ui.slotBusy = false; renderModal();
  },
  calSave(){
    const d = ui.calDraft;
    if (!d.title.trim()){ toast(t('cal_needTitle')); document.getElementById('cd-title')?.focus(); return; }
    let start, end;
    if (d.allDay){ start = keyToTs(d.sd); end = keyToTs(d.ed||d.sd) + DAY - 1; }
    else { const [sh,sm]=d.st.split(':').map(Number), [eh,em]=d.et.split(':').map(Number); start = keyToTs(d.sd)+(sh*60+sm)*6e4; end = keyToTs(d.ed||d.sd)+(eh*60+em)*6e4; }
    if (end <= start){ toast(t('cal_badTime')); return; }
    const ev = {id:uid(), title:d.title.trim(), cover:d.cover, start, end, allDay:d.allDay, desc:d.desc.trim(), slots:d.slots.filter(s=>String(L(s.label)).trim()).map(s=>({...s, cap:Math.max(1,Number(s.cap)||1)})), reminders:[...d.reminders], toFeed:d.toFeed, created:Date.now()};
    (S.calEvents ||= []).push(ev);
    const when = evWhen(ev);
    if (ev.toFeed) S.posts.push({id:uid(), by:'t', ts:Date.now(), text:t('cal_feedPost',{title:ev.title, when}) + (ev.desc?'\n\n'+ev.desc:''), img:null, likes:[], comments:[]});
    if (ev.reminders.includes('now')) S.students.forEach(s=>sendMsg(s.id,'t', t('cal_remindMsg',{title:ev.title, when})));
    save(); ui.calDraft=null; closeModal(); const sd=new Date(start); ui.calMonth={y:sd.getFullYear(), m:sd.getMonth()}; render(); toast(t('cal_created'));
  },
  openEv(el){ ui.confirmDel=null; openModal({type:'calEv', id:el.dataset.id}); },
  calDel(el){ if (ui.confirmDel!==el.dataset.id){ ui.confirmDel=el.dataset.id; renderModal(); return; } S.calEvents = S.calEvents.filter(e=>e.id!==el.dataset.id); ui.confirmDel=null; save(); closeModal(); render(); toast(t('cal_deleted')); },
  slotSign(el){ const e=S.calEvents.find(x=>x.id===el.dataset.ev), s=e.slots.find(x=>x.id===el.dataset.id); if (s.taken.length<s.cap && !e.slots.some(x=>x.taken.includes(S.acting))){ s.taken.push(S.acting); s.sts = {...(s.sts||{}), [S.acting]:Date.now()}; save(); render(); toast(t('cal_signedToast',{slot:esc(L(s.label))})); } },
  slotUnsign(el){ const e=S.calEvents.find(x=>x.id===el.dataset.ev), s=e.slots.find(x=>x.id===el.dataset.id); s.taken=s.taken.filter(x=>x!==S.acting); save(); render(); },
  aiOpen(el){ const k=el.dataset.v; ui.ai = {busy:false, out:null, data:null, err:null, note:null, ctl:null, form:{sid: k==='week'?'all':'1', purpose:'praise', tone:'warm', lang:S.lang, grade:'7', count:'5', from:S.lang, ...(ui.aiForms?.[k]||{})}}; openModal({type:'ai', tool:k}); },
  aiRun(){ if (!ui.ai.busy) aiRun(); },
  aiStop(){ ui.ai.ctl?.abort(); },
  aiSendMsg(){ const txt=(document.getElementById('ai-out')?.value||'').trim(); if(!txt) return; sendMsg(ui.ai.form.sid||'1','t',txt); save(); closeModal(); render(); toast(t('ai_sentChat')); },
  aiSendWeek(){ let n=0; document.querySelectorAll('[data-week]').forEach(ta=>{ const r=ui.ai.data[Number(ta.dataset.week)]; const v=ta.value.trim(); if (r && v){ sendMsg(r.id,'t',v); n++; } }); save(); closeModal(); render(); toast(t('ai_sentAll',{n})); },
  aiCopy(){ const v=document.getElementById('ai-out')?.value||''; navigator.clipboard?.writeText(v).then(()=>toast(t('ai_copied'))).catch(()=>{ const o=document.getElementById('ai-out'); o?.select(); }); },
  aiSaveAsg(){
    const k=ui.modal.tool, d=ui.ai.data; let title, desc;
    if (k==='quiz'){ title = (ui.ai.form.topic||t('ai_quiz')) + ' — ' + t('ai_quiz').toLowerCase(); desc = d.map((q,i)=>`${i+1}. ${q.q}\n${(q.options||[]).map((o,j)=>`   ${String.fromCharCode(65+j)}) ${o}`).join('\n')}`).join('\n\n'); }
    else { title = d.title || ui.ai.form.topic; desc = [d.desc, (d.steps||[]).length?`\n${t('ai_steps')}:\n`+d.steps.map((s,i)=>`${i+1}. ${s}`).join('\n'):'', (d.questions||[]).length?`\n${t('ai_quiz')}:\n`+d.questions.map((s,i)=>`${i+1}. ${s}`).join('\n'):'', (d.criteria||[]).length?`\n${t('ai_criteria')}:\n`+d.criteria.map(s=>`• ${s}`).join('\n'):''].join('\n').trim(); }
    S.assignments.push({id:uid(), title:String(title||'—'), desc, due:startOfDay(Date.now()+7*DAY)+18*36e5, created:Date.now(), subs:{}});
    save(); closeModal(); ui.view='assignments'; render(); toast(t('ai_savedAsg'));
  },
  async aiReply(el){
    const sid = el.dataset.id, ta = document.getElementById('msg-text'); if (!ta) return;
    if (!AI){ ta.value = templateMsg(studentFacts(sid), 'custom', S.lang); return; }
    const th = (S.threads[sid]||[]).slice(-6).map(m=>`${m.from==='t'?'Teacher':'Parent'}: ${m.text}`).join('\n');
    el.disabled = true; ta.placeholder = t('ai_thinking');
    try { await AI(`${AI_RULES}\nTask: draft the teacher's next reply in this chat with a parent, in the language the parent writes in (default ${langName(S.lang)}). 2-4 sentences. Return only the reply text.\n\nChat so far:\n${th||'(empty)'}\n\nData:\n${factsText(studentFacts(sid))}`, {cache:false, onText:({text})=>{ ta.value = text; }}); }
    catch(e){ if (e?.code!=='cancelled') toast(aiErr(e)); }
    el.disabled = false; ta.placeholder = t('msgPh'); ta.focus();
  }
});

/* draft inputs keep their values across modal re-renders */
document.addEventListener('input', e=>{
  const el = e.target;
  if (el.dataset?.draft && ui.calDraft){ ui.calDraft[el.dataset.draft] = el.type==='checkbox' ? el.checked : el.value; if (el.dataset.draft==='title'){ const b=document.querySelector('.cov-pick .cov b'); if (b) b.textContent = el.value || t('cal_titlePh'); } }
  if (el.dataset?.slot!=null && ui.calDraft){ const s=ui.calDraft.slots[Number(el.dataset.slot)]; if (s) s[el.dataset.f] = el.dataset.f==='cap' ? Number(el.value) : el.value; }
  if (el.dataset?.aif && ui.ai){ ui.ai.form[el.dataset.aif] = el.value; (ui.aiForms ||= {})[ui.modal.tool] = {...ui.ai.form}; }
});
document.addEventListener('change', e=>{
  const el = e.target;
  if (el.dataset?.draft==='allDay' && ui.calDraft){ ui.calDraft.allDay = el.checked; renderModal(); }
  if (el.dataset?.draft==='toFeed' && ui.calDraft){ ui.calDraft.toFeed = el.checked; }
  if (el.dataset?.aif && ui.ai){ ui.ai.form[el.dataset.aif] = el.value; (ui.aiForms ||= {})[ui.modal.tool] = {...ui.ai.form}; }
});

/* calendar reminders + sign-ups in notifications */
const _notif = notifications;
notifications = function(){
  const out = _notif(), now = Date.now(), since = now - 7*DAY;
  const offs = {'5d':5*DAY, '1d':DAY, '1h':36e5};
  (S.calEvents||[]).forEach(e=>{
    if (S.role!=='teacher'){
      e.reminders.forEach(r=>{ if (!offs[r]) return; const ts = e.start - offs[r]; if (ts<=now && ts>=e.created && ts>since && e.end>now) out.push({ts, ic:'bell', tone:'gold', text:t('n_reminder',{title:esc(L(e.title)), when:esc(fmt(e.start,{day:'numeric',month:'long'}))}), go:'calendar'}); });
    } else {
      e.slots.forEach(s=>Object.entries(s.sts||{}).forEach(([sid,ts])=>{ if (ts>since && s.taken.includes(sid)) out.push({ts, ic:'cal', tone:'info', text:t('n_signup',{name:esc(stu(sid)?.parent||''), slot:esc(L(s.label))}), go:'calendar'}); }));
    }
  });
  return out.sort((a,b)=>b.ts-a.ts).slice(0,24);
};

/* parent home: next event card */
const _home = VIEWS.home;
VIEWS.home = () => {
  const html = _home();
  const e = (S.calEvents||[]).filter(x=>x.end>Date.now()).sort((a,b)=>a.start-b.start)[0];
  if (!e) return html;
  const bg = {fest:'#7656D6', meet:'#13213C', trip:'#2E8B4F', star:'#E08A00'}[e.cover] || '#0A7DA0';
  const mine = e.slots.find(s=>s.taken.includes(S.acting));
  const card = `<section class="card next-ev"><span class="when" style="background:${bg}">${new Date(e.start).getDate()}<small>${esc(fmt(e.start,{month:'short'}))}</small></span><div style="flex:1;min-width:0"><p class="eyebrow" style="margin-bottom:2px">${t('cal_next')}</p><b>${esc(L(e.title))}</b><span class="small muted" style="display:block">${esc(evWhen(e))}${mine?` · ${t('cal_signed')}: ${esc(L(mine.label))}`:''}</span></div><button class="btn" data-act="openEv" data-id="${e.id}">${t('cal_open')}</button></section>`;
  return html.replace('</section>', '</section>' + card);
};
