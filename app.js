/* =========================================================
   Қоңырау — мектеп пен отбасы байланысы (демо)
   Vanilla JS · бір файл · деректер localStorage-та
   ========================================================= */
const DAY = 864e5;
const LS_KEY = 'qonyrau-demo-v1';

/* ---------- icons ---------- */
const I = {
  bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/>',
  feed:'<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8M15 18h-5M10 6h8v4h-8z"/>',
  image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"/>',
  clip:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
  cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="m9 16 2 2 4-4"/>',
  msg:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  chart:'<path d="M3 3v18h18"/><path d="M18 17V9M13 17V5M8 17v-3"/>',
  home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  zap:'<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
  heart:'<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  check:'<path d="M20 6 9 17l-5-5"/>',
  bulb:'<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6M10 22h4"/>',
  users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  mountain:'<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>',
  phone:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
  clock:'<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  bookx:'<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="m14.5 7-5 5M9.5 7l5 5"/>',
  mega:'<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  x:'<path d="M18 6 6 18M6 6l12 12"/>',
  send:'<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  shuffle:'<path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22"/><path d="m18 2 4 4-4 4"/><path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2"/><path d="M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8"/><path d="m18 14 4 4-4 4"/>',
  link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
  code:'<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',
  file:'<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><path d="M14 2v6h6M16 13H8M16 17H8"/>',
  flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/>',
  back:'<path d="m15 18-6-6 6-6"/>',
  check2:'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/>',
  layers:'<path d="m12 2 10 5-10 5L2 7l10-5z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
  megaphone:'<path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>',
  undo:'<path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>'
};
function icon(n, s=18){ return `<svg class="ic" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n]||''}</svg>`; }

/* ---------- i18n ---------- */
const T = {
 kk:{
  tagline:'Мектеп пен отбасы арасындағы көпір',
  role_teacher:'Мұғалім', role_parent:'Ата-ана', role_student:'Оқушы',
  as_parent:'Бала', as_student:'Оқушы',
  nav_class:'Сынып', nav_feed:'Сынып таспасы', nav_portfolio:'Портфолио', nav_assignments:'Тапсырмалар',
  nav_attendance:'Қатысу', nav_messages:'Хабарламалар', nav_reports:'Есептер', nav_home:'Басты бет',
  nav_myday:'Менің күнім', nav_report:'Үлгерім',
  last7:'соңғы 7 күн', goal:'Сынып мақсаты', goalOf:'{a} / {b} ұпай',
  whole:'Бүкіл сынып', random:'Кездейсоқ оқушы', multi:'Бірнешеуін таңдау', multiDone:'Таңдауды тоқтату',
  selected:'Таңдалды: {n} оқушы', give:'Ұпай беру', tabPos:'Мақтау', tabNeg:'Дамыту керек',
  note:'Түсініктеме (міндетті емес)', notePh:'Мысалы: топқа кодты түсіндіріп берді',
  recent:'Соңғы белгілер', noRecent:'Әзірге белгі жоқ', undo:'Қайтару', undone:'Қайтарылды',
  absentTag:'Жоқ', lateTag:'Кешікті', sortName:'Аты бойынша', sortPts:'Ұпай бойынша',
  again:'Тағы таңдау', close:'Жабу', studentsN:'{n} оқушы', pts:'ұпай', ptsShort:'ұпай',
  awardedToast:'{who}: {v} · {skill}', awardedMany:'{n} оқушыға: {v} · {skill}',
  postPh:'Сыныпта не жаңалық? Ата-аналармен бөлісіңіз…', addPhoto:'Сурет қосу', removePhoto:'Суретті алып тастау',
  publish:'Жариялау', published:'Жазба жарияланды', like:'Ұнайды', commentPh:'Пікір жазу…', send:'Жіберу',
  needText:'Мәтін жазыңыз немесе сурет қосыңыз',
  pending:'Тексеруде', approved:'Жарияланды', returned:'Түзетуге қайтарылды',
  pfPending:'Тексеруді күтуде', pfAll:'Барлық жұмыстар', allStudents:'Барлық оқушылар',
  approve:'Мақұлдау', returnBtn:'Түзетуге қайтару', fbPh:'Оқушыға кері байланыс жазыңыз…', teacherFb:'Мұғалім пікірі',
  approvedToast:'Жұмыс мақұлданды, ата-анаға көрінеді', returnedToast:'Жұмыс түзетуге қайтарылды',
  addWork:'Жұмыс қосу', workTitle:'Атауы', workTitlePh:'Мысалы: Scratch ойыным',
  type_image:'Сурет', type_text:'Мәтін', type_code:'Код', type_link:'Сілтеме',
  chooseFile:'Суретті таңдаңыз', textPh:'Жұмысыңды осында жаз…', codePh:'# Python кодын осында қой', linkPh:'https://scratch.mit.edu/projects/…',
  submitWork:'Мұғалімге жіберу', workSent:'Жұмыс мұғалімге жіберілді', resubmit:'Түзетіп, қайта жіберу',
  emptyPf:'Әзірге жұмыс жоқ', emptyPending:'Барлық жұмыс тексерілді', needTitle:'Атауын жазыңыз', needContent:'Жұмыстың мазмұнын қосыңыз',
  myWorks:'Менің жұмыстарым', childWorks:'{name} жұмыстары', pfHintParent:'Мұғалім мақұлдаған жұмыстар ғана көрінеді.',
  asgNew:'Жаңа тапсырма', asgTitle:'Тақырыбы', asgDesc:'Сипаттамасы', asgDue:'Мерзімі', create:'Құру', asgCreated:'Тапсырма құрылды',
  dueOn:'Мерзімі: {d}', overdue:'Мерзімі өтті', submittedN:'{a}/{b} тапсырды', gradedN:'{n} бағаланды',
  st_none:'Тапсырылмаған', st_submitted:'Тапсырылды', st_graded:'Бағаланды',
  answer:'Жауап', answerPh:'Жауабыңды немесе жоба сілтемесін жаз…', submit:'Тапсыру', submitted:'Тапсырма жіберілді',
  grade:'Баға', save:'Сақтау', gradeSaved:'Баға қойылды', fbShort:'Пікір', student:'Оқушы', status:'Күйі',
  attTitle:'Қатысу журналы', present:'Келді', late:'Кешікті', absent:'Жоқ', allPresent:'Барлығы келді',
  notMarked:'Белгіленбеген', date:'Күні',
  autoAbsent:'Оқушы келмесе, ата-анасына автоматты түрде хабарлама жіберу',
  autoAbsentMsg:'Сәлеметсіз бе! {name} бүгін ({date}) информатика сабағына келмеді. Себебін білсеңіз, жазып жіберіңізші.',
  notifiedParent:'{name} ата-анасына хабарлама жіберілді',
  broadcast:'Барлық ата-анаға', broadcastTitle:'Барлық ата-анаға хабарландыру', broadcastSent:'{n} ата-анаға жіберілді',
  msgPh:'Хабарлама жазу…', noMsgs:'Әлі хабарлама жоқ. Бірінші болып жазыңыз.', pickThread:'Сөйлесуді таңдаңыз',
  back:'Артқа', tpl1:'Бүгін сабақта өте жақсы жұмыс істеді!', tpl2:'Үй тапсырмасын тексеріп жіберіңізші.', tpl3:'Қысқаша сөйлесуге уақытыңыз бар ма?',
  tplP1:'Рахмет, апай!', tplP2:'Бүгін сабаққа келе алмайды.', tplP3:'Қай уақытта хабарласуға болады?',
  teacherRole:'Информатика пәні мұғалімі',
  reportFor:'Кім бойынша', ptsWeek:'Ұпай · 7 күн', posShare:'Оң белгілер', attRate:'Қатысу', asgDone:'Тапсырмалар', avgGrade:'Орташа баға',
  byDay:'Күндер бойынша ұпай', bySkill:'Дағдылар бойынша', studentsTable:'Оқушылар', nameCol:'Аты-жөні',
  posL:'Мақтау', negL:'Дамыту керек', noData:'Деректер жоқ',
  hello:'Сәлеметсіз бе, {name}!', helloStudent:'Сәлем, {name}!',
  todayAtt:'Бүгін сабақта', todayFeed:'Бүгінгі белгілер', noToday:'Бүгін әзірге белгі жоқ',
  upcoming:'Тапсырмалар', latestPost:'Сынып жаңалығы', openFeed:'Таспаны ашу', allWorks:'Барлығын көру',
  myFeedback:'Мұғалімнен соңғы пікірлер', toDo:'Орындау керек', classGoalHint:'Бүкіл сынып бірге жинайды',
  notifs:'Хабарландырулар', noNotifs:'Жаңа хабарландыру жоқ',
  n_post:'Мұғалім таспаға жаңа жазба қосты', n_pfApproved:'«{title}» портфолиода жарияланды', n_pfReturned:'«{title}» түзетуге қайтарылды',
  n_graded:'«{title}»: баға {g}/10', n_msg:'{name}: жаңа хабарлама', n_pfPending:'{name} жаңа жұмыс жіберді', n_sub:'{name} «{title}» тапсырды',
  resetDemo:'Демо деректерді қалпына келтіру', resetConfirm:'Иә, бәрін қалпына келтіру', resetDone:'Демо деректер қалпына келтірілді',
  demoNote:'Демо-нұсқа: деректер тек осы браузерде сақталады. Рөлді ауыстырып, жүйені үш жақтан көріңіз.',
  saveFail:'Сақтау мүмкін болмады: браузер жады толы. Үлкен суреттерді азайтып көріңіз.',
  just:'қазір', minAgo:'{n} мин бұрын', hAgo:'{n} сағ бұрын', yesterday:'кеше',
  mother:'анасы', father:'әкесі', comments:'пікір', you:'Сіз', today:'Бүгін', lang:'Тіл'
 },
 ru:{
  tagline:'Мост между школой и семьёй',
  role_teacher:'Учитель', role_parent:'Родитель', role_student:'Ученик',
  as_parent:'Ребёнок', as_student:'Ученик',
  nav_class:'Класс', nav_feed:'Лента класса', nav_portfolio:'Портфолио', nav_assignments:'Задания',
  nav_attendance:'Посещаемость', nav_messages:'Сообщения', nav_reports:'Отчёты', nav_home:'Главная',
  nav_myday:'Мой день', nav_report:'Успехи',
  last7:'за 7 дней', goal:'Цель класса', goalOf:'{a} / {b} баллов',
  whole:'Весь класс', random:'Случайный ученик', multi:'Выбрать нескольких', multiDone:'Отменить выбор',
  selected:'Выбрано: {n}', give:'Начислить', tabPos:'Похвала', tabNeg:'Над чем работать',
  note:'Комментарий (необязательно)', notePh:'Например: объяснил группе код',
  recent:'Последние отметки', noRecent:'Пока нет отметок', undo:'Отменить', undone:'Отменено',
  absentTag:'Нет', lateTag:'Опоздал', sortName:'По имени', sortPts:'По баллам',
  again:'Выбрать ещё', close:'Закрыть', studentsN:'{n} учеников', pts:'баллов', ptsShort:'б.',
  awardedToast:'{who}: {v} · {skill}', awardedMany:'{n} ученикам: {v} · {skill}',
  postPh:'Что нового в классе? Поделитесь с родителями…', addPhoto:'Добавить фото', removePhoto:'Убрать фото',
  publish:'Опубликовать', published:'Запись опубликована', like:'Нравится', commentPh:'Написать комментарий…', send:'Отправить',
  needText:'Напишите текст или добавьте фото',
  pending:'На проверке', approved:'Опубликовано', returned:'Возвращено на доработку',
  pfPending:'Ждут проверки', pfAll:'Все работы', allStudents:'Все ученики',
  approve:'Одобрить', returnBtn:'Вернуть на доработку', fbPh:'Напишите отзыв ученику…', teacherFb:'Отзыв учителя',
  approvedToast:'Работа одобрена и видна родителям', returnedToast:'Работа возвращена на доработку',
  addWork:'Добавить работу', workTitle:'Название', workTitlePh:'Например: моя игра в Scratch',
  type_image:'Фото', type_text:'Текст', type_code:'Код', type_link:'Ссылка',
  chooseFile:'Выберите изображение', textPh:'Напиши свою работу здесь…', codePh:'# Вставь код Python', linkPh:'https://scratch.mit.edu/projects/…',
  submitWork:'Отправить учителю', workSent:'Работа отправлена учителю', resubmit:'Исправить и отправить снова',
  emptyPf:'Пока нет работ', emptyPending:'Все работы проверены', needTitle:'Укажите название', needContent:'Добавьте содержимое работы',
  myWorks:'Мои работы', childWorks:'Работы: {name}', pfHintParent:'Видны только работы, одобренные учителем.',
  asgNew:'Новое задание', asgTitle:'Тема', asgDesc:'Описание', asgDue:'Срок', create:'Создать', asgCreated:'Задание создано',
  dueOn:'Срок: {d}', overdue:'Просрочено', submittedN:'{a}/{b} сдали', gradedN:'{n} оценено',
  st_none:'Не сдано', st_submitted:'Сдано', st_graded:'Оценено',
  answer:'Ответ', answerPh:'Напиши ответ или ссылку на проект…', submit:'Сдать', submitted:'Задание отправлено',
  grade:'Оценка', save:'Сохранить', gradeSaved:'Оценка выставлена', fbShort:'Отзыв', student:'Ученик', status:'Статус',
  attTitle:'Журнал посещаемости', present:'Был', late:'Опоздал', absent:'Нет', allPresent:'Все присутствуют',
  notMarked:'Не отмечено', date:'Дата',
  autoAbsent:'Автоматически сообщать родителям, если ученика нет',
  autoAbsentMsg:'Здравствуйте! {name} сегодня ({date}) не был(а) на уроке информатики. Если знаете причину, напишите, пожалуйста.',
  notifiedParent:'Родителям ({name}) отправлено сообщение',
  broadcast:'Всем родителям', broadcastTitle:'Объявление всем родителям', broadcastSent:'Отправлено {n} родителям',
  msgPh:'Написать сообщение…', noMsgs:'Сообщений пока нет. Напишите первым.', pickThread:'Выберите диалог',
  back:'Назад', tpl1:'Сегодня отлично работал(а) на уроке!', tpl2:'Проверьте, пожалуйста, домашнее задание.', tpl3:'Найдётся время коротко поговорить?',
  tplP1:'Спасибо!', tplP2:'Сегодня не сможет прийти на урок.', tplP3:'Когда удобно связаться?',
  teacherRole:'Учитель информатики',
  reportFor:'По кому', ptsWeek:'Баллы · 7 дней', posShare:'Положительных', attRate:'Посещаемость', asgDone:'Задания', avgGrade:'Средняя оценка',
  byDay:'Баллы по дням', bySkill:'По навыкам', studentsTable:'Ученики', nameCol:'ФИО',
  posL:'Похвала', negL:'Над чем работать', noData:'Нет данных',
  hello:'Здравствуйте, {name}!', helloStudent:'Привет, {name}!',
  todayAtt:'Сегодня на уроке', todayFeed:'Отметки за сегодня', noToday:'Сегодня пока нет отметок',
  upcoming:'Задания', latestPost:'Новость класса', openFeed:'Открыть ленту', allWorks:'Смотреть все',
  myFeedback:'Последние отзывы учителя', toDo:'Нужно сделать', classGoalHint:'Весь класс собирает вместе',
  notifs:'Уведомления', noNotifs:'Новых уведомлений нет',
  n_post:'Учитель добавил запись в ленту', n_pfApproved:'«{title}» опубликовано в портфолио', n_pfReturned:'«{title}» возвращено на доработку',
  n_graded:'«{title}»: оценка {g}/10', n_msg:'{name}: новое сообщение', n_pfPending:'{name} прислал(а) новую работу', n_sub:'{name} сдал(а) «{title}»',
  resetDemo:'Сбросить демо-данные', resetConfirm:'Да, сбросить всё', resetDone:'Демо-данные сброшены',
  demoNote:'Демо-версия: данные хранятся только в этом браузере. Переключайте роли, чтобы увидеть систему с трёх сторон.',
  saveFail:'Не удалось сохранить: память браузера заполнена. Попробуйте уменьшить фото.',
  just:'только что', minAgo:'{n} мин назад', hAgo:'{n} ч назад', yesterday:'вчера',
  mother:'мама', father:'папа', comments:'комм.', you:'Вы', today:'Сегодня', lang:'Язык'
 }
};

/* ---------- skills (ClassDojo-style feedback cards) ---------- */
const SKILLS = [
  {id:'active', kk:'Белсенділік', ru:'Активность', v:1, ic:'zap'},
  {id:'help', kk:'Досына көмек', ru:'Помог другу', v:1, ic:'heart'},
  {id:'task', kk:'Тапсырманы орындады', ru:'Выполнил задание', v:1, ic:'check'},
  {id:'creative', kk:'Шығармашылық', ru:'Креативность', v:2, ic:'bulb'},
  {id:'team', kk:'Топтық жұмыс', ru:'Работа в команде', v:1, ic:'users'},
  {id:'grit', kk:'Табандылық', ru:'Упорство', v:1, ic:'mountain'},
  {id:'phone', kk:'Сабақта телефон', ru:'Телефон на уроке', v:-1, ic:'phone'},
  {id:'late', kk:'Кешігу', ru:'Опоздание', v:-1, ic:'clock'},
  {id:'nohw', kk:'Үй жұмысы жоқ', ru:'Нет домашки', v:-1, ic:'bookx'},
  {id:'noise', kk:'Сабаққа кедергі', ru:'Мешает уроку', v:-1, ic:'mega'}
];
const skill = id => SKILLS.find(s=>s.id===id) || SKILLS[0];

/* ---------- helpers ---------- */
let S; // persisted state
const ui = { screen:'landing', menuOpen:false, resOpen:false, view:null, modal:null, multi:false, sel:new Set(), sort:'name', tab:'pos', pfFilter:'pending', pfStudent:'all',
  thread:null, reportSid:'all', attDate:null, notifOpen:false, confirmReset:false, postImg:null, lastBatch:null, pickId:null };

const t = (k, vars={}) => { let s = (T[S.lang]||T.kk)[k] ?? T.kk[k] ?? k; for (const [a,b] of Object.entries(vars)) s = s.split('{'+a+'}').join(b); return s; };
const L = x => x==null ? '' : (typeof x==='string' ? x : (x[S.lang] ?? x.kk));
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const uid = () => Math.random().toString(36).slice(2,10);
const locale = () => S.lang==='kk' ? 'kk-KZ' : 'ru-RU';
const pad = n => String(n).padStart(2,'0');
const dayKey = ts => { const d=new Date(ts); return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate()); };
const startOfDay = ts => { const d=new Date(ts); d.setHours(0,0,0,0); return d.getTime(); };
const keyToTs = k => { const [y,m,d]=k.split('-').map(Number); return new Date(y,m-1,d).getTime(); };
function fmt(ts, opts){ try { return new Intl.DateTimeFormat(locale(), opts).format(ts); } catch(e){ return new Date(ts).toLocaleDateString(); } }
const fDate = ts => fmt(ts,{day:'numeric', month:'long'});
const fTime = ts => fmt(ts,{hour:'2-digit', minute:'2-digit'});
function rel(ts){
  const d = Date.now()-ts, m = Math.round(d/6e4);
  if (m < 1) return t('just');
  if (m < 60) return t('minAgo',{n:m});
  if (dayKey(ts)===dayKey(Date.now())) return t('hAgo',{n:Math.round(m/60)});
  if (dayKey(ts)===dayKey(Date.now()-DAY)) return t('yesterday')+', '+fTime(ts);
  return fDate(ts);
}
function rng(seed){ return function(){ seed|=0; seed=seed+0x6D2B79F5|0; let t=Math.imul(seed^seed>>>15,1|seed); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }

/* Kazakh genitive suffix: Әлихан → Әлиханның, Аружан → Аружанның, Арсен → Арсеннің */
function gen(word){
  const back='аоұыяю', front='әөүіеиэ';
  let harm='back';
  for (let i=word.length-1;i>=0;i--){ const c=word[i].toLowerCase(); if (back.includes(c)) { harm='back'; break; } if (front.includes(c)) { harm='front'; break; } }
  const last = word[word.length-1].toLowerCase();
  const vowels='аәеиоөұүыіэюя', mnng='мнң', voiced='жзлрйуw', unvoiced='пткқсшфхцчщбвгғд';
  let c = 'н';
  if (vowels.includes(last) || mnng.includes(last)) c='н';
  else if (voiced.includes(last)) c='д';
  else if (unvoiced.includes(last)) c='т';
  return word + c + (harm==='back'?'ың':'ің');
}

/* ---------- people ---------- */
const stu = id => S.students.find(s=>s.id===id);
const fullName = s => s.first+' '+s.last;
const TEACHER = {first:'Айсұлу', last:'Апай', color:'#C68A00'};
function av(p, size=40){ const ini=((p.first||'?')[0]+((p.last||'')[0]||'')).toUpperCase(); return `<span class="av" style="--c:${p.color};--s:${size}px" aria-hidden="true">${esc(ini)}</span>`; }
function parentObj(s){ return {first:s.parent, last:'', color:s.color}; }
function parentLabel(s){ const r = s.rel==='m' ? t('mother') : t('father'); return S.lang==='kk' ? `${gen(s.first)} ${r}` : `${r} ${s.first}`; }
function userName(id){
  if (id==='t') return S.cls.teacher;
  const s = stu(id.slice(1)); if (!s) return '—';
  if (id[0]==='p') return s.parent;
  return fullName(s);
}
function userAv(id, size){ if (id==='t') return av(TEACHER,size); const s=stu(id.slice(1)); if(!s) return av({first:'?',color:'#888'},size); return id[0]==='p' ? av(parentObj(s),size) : av(s,size); }
const me = () => S.role==='teacher' ? 't' : (S.role==='parent' ? 'p'+S.acting : 's'+S.acting);

/* ---------- sample art (generated, no external files) ---------- */
function mazeSVG(seed){
  const R=rng(seed), W=14, H=9, c=30, g=[...Array(W*H)].map(()=>({v:false,w:[1,1,1,1]})); // top,right,bottom,left
  const st=[0]; g[0].v=true;
  while(st.length){ const i=st[st.length-1], x=i%W, y=(i/W)|0, n=[];
    if(y>0&&!g[i-W].v)n.push([i-W,0,2]); if(x<W-1&&!g[i+1].v)n.push([i+1,1,3]); if(y<H-1&&!g[i+W].v)n.push([i+W,2,0]); if(x>0&&!g[i-1].v)n.push([i-1,3,1]);
    if(!n.length){st.pop();continue;} const [j,a,b]=n[(R()*n.length)|0]; g[i].w[a]=0; g[j].w[b]=0; g[j].v=true; st.push(j); }
  let p=''; g.forEach((cl,i)=>{ const x=(i%W)*c+20, y=((i/W)|0)*c+20;
    if(cl.w[0])p+=`M${x} ${y}h${c}`; if(cl.w[1])p+=`M${x+c} ${y}v${c}`; if(cl.w[2])p+=`M${x} ${y+c}h${c}`; if(cl.w[3])p+=`M${x} ${y}v${c}`; });
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W*c+40} ${H*c+40}"><rect width="100%" height="100%" fill="#2B1E5C"/><path d="${p}" stroke="#7FE3F0" stroke-width="5" stroke-linecap="round" fill="none"/><circle cx="35" cy="35" r="9" fill="#F6BD2C"/><rect x="${(W-1)*c+26}" y="${(H-1)*c+26}" width="18" height="18" rx="4" fill="#5EE08F"/></svg>`;
  return 'data:image/svg+xml;utf8,'+encodeURIComponent(svg);
}
function flowSVG(){
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 300" font-family="Arial, sans-serif" font-size="13"><rect width="100%" height="100%" fill="#FFFDF5"/>
  <defs><marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 10 5 0 10z" fill="#13213C"/></marker></defs>
  <g stroke="#13213C" stroke-width="2" fill="none" marker-end="url(#a)"><path d="M120 46v22"/><path d="M120 108v20"/><path d="M120 190v22"/><path d="M168 159h70"/><path d="M290 140V82H170"/></g>
  <rect x="70" y="14" width="100" height="32" rx="16" fill="#D7F0E3" stroke="#13213C" stroke-width="2"/><text x="120" y="35" text-anchor="middle">Басы</text>
  <rect x="50" y="70" width="140" height="38" fill="#DCEEF7" stroke="#13213C" stroke-width="2"/><text x="120" y="94" text-anchor="middle">Суды қайнату</text>
  <path d="M120 130 168 159 120 188 72 159z" fill="#FFF1C7" stroke="#13213C" stroke-width="2"/><text x="120" y="163" text-anchor="middle">Қайнады ма?</text>
  <rect x="240" y="140" width="100" height="38" fill="#FBE3DF" stroke="#13213C" stroke-width="2"/><text x="290" y="164" text-anchor="middle">1 мин күту</text>
  <text x="200" y="152" fill="#C63A32">жоқ</text><text x="128" y="206" fill="#16855A">иә</text>
  <rect x="50" y="214" width="140" height="38" fill="#DCEEF7" stroke="#13213C" stroke-width="2"/><text x="120" y="238" text-anchor="middle">Шай салып, демдеу</text>
  <path d="M120 252v16" stroke="#13213C" stroke-width="2" marker-end="url(#a)"/><rect x="70" y="270" width="100" height="26" rx="13" fill="#D7F0E3" stroke="#13213C" stroke-width="2"/><text x="120" y="288" text-anchor="middle">Соңы</text></svg>`;
  return 'data:image/svg+xml;utf8,'+encodeURIComponent(svg);
}

/* ---------- seed data ---------- */
function seed(){
  const R = rng(20261011), now = Date.now();
  const names = [
    ['Әлихан','Серікұлы','Гүлнар','m'],['Аружан','Қайратқызы','Ерлан','f'],['Дінмұхаммед','Асқарұлы','Сәуле','m'],['Айым','Нұрланқызы','Динара','m'],
    ['Нұрасыл','Бауыржанұлы','Бауыржан','f'],['Томирис','Ержанқызы','Ләззат','m'],['Ернұр','Маратұлы','Мадина','m'],['Інжу','Саматқызы','Самат','f'],
    ['Арсен','Дәуренұлы','Әсел','m'],['Медина','Талғатқызы','Талғат','f'],['Санжар','Ғалымұлы','Жанар','m'],['Дария','Арманқызы','Арман','f'],
    ['Ақбота','Ерболқызы','Айгүл','m'],['Елдос','Нұрлыбекұлы','Нұрлыбек','f'],['Камила','Ринатқызы','Алия','m'],['Бекзат','Қанатұлы','Қанат','f']
  ];
  const colors = ['#2F6FD0','#0E8F9C','#D9682B','#7656D6','#C8406A','#2E8B4F','#A87212','#4F5FBF'];
  const students = names.map((n,i)=>({id:String(i+1), first:n[0], last:n[1], parent:n[2], rel:n[3], color:colors[i%colors.length]}));

  const events = [];
  const posIds = SKILLS.filter(s=>s.v>0).map(s=>s.id), negIds = SKILLS.filter(s=>s.v<0).map(s=>s.id);
  for (let d=6; d>=0; d--){
    const ds = startOfDay(now - d*DAY);
    students.forEach(s=>{
      const n = d===0 ? (R()<.55?1:0) + (R()<.2?1:0) : (R()*3.2)|0;
      for (let k=0;k<n;k++){
        const neg = R() < .16;
        const sk = neg ? negIds[(R()*negIds.length)|0] : posIds[(R()*posIds.length)|0];
        let ts = ds + (9 + R()*6)*36e5;
        if (ts > now) ts = now - (5 + R()*200)*6e4;
        events.push({id:uid(), sid:s.id, skill:sk, v:skill(sk).v, ts, note:''});
      }
    });
  }
  events.push({id:uid(), sid:'1', skill:'help', v:1, ts:now-80*6e4, note:'Ернұрға циклды түсіндіріп берді'});
  events.push({id:uid(), sid:'1', skill:'creative', v:2, ts:now-50*6e4, note:'Лабиринтке өзі жаңа деңгей ойлап тапты'});

  const attendance = {};
  for (let d=9; d>=0; d--){
    const k = dayKey(now - d*DAY); attendance[k] = {};
    students.forEach(s=>{ const r=R(); attendance[k][s.id] = r<.88?'present':(r<.95?'late':'absent'); });
  }
  const tk = dayKey(now); students.forEach(s=>attendance[tk][s.id]='present'); attendance[tk]['12']='absent'; attendance[tk]['7']='late';

  const mkSubs = (pSub, pGrade, kind) => { const o={}; students.forEach(s=>{ if (R()<pSub){ const g = R()<pGrade; o[s.id]={status:g?'graded':'submitted', text: kind==='scratch' ? 'https://scratch.mit.edu/projects/'+(1040000000+((R()*9e6)|0))+'/' : (kind==='flow' ? 'Блок-схеманы дәптерге салып, суретке түсірдім.' : 'a = int(input())\nb = int(input())\nprint(a + b)'), ts: now - (R()*3+.2)*DAY, grade: g ? 6+((R()*5)|0) : null, fb:''}; } }); return o; };
  const a1 = {id:'a1', title:{kk:'Scratch: лабиринт ойыны', ru:'Scratch: игра-лабиринт'}, desc:{kk:'Кейіпкер көрсеткі пернелерімен қозғалып, қабырғаға тигенде бастапқы орынға оралатын ойын жасаңдар. Жобаның сілтемесін жіберіңдер.', ru:'Сделайте игру, где герой двигается стрелками и возвращается на старт при касании стены. Пришлите ссылку на проект.'}, due: startOfDay(now+3*DAY)+18*36e5, created: now-4*DAY, subs: mkSubs(.62,.35,'scratch')};
  const a2 = {id:'a2', title:{kk:'Блок-схема: шай демдеу алгоритмі', ru:'Блок-схема: алгоритм заваривания чая'}, desc:{kk:'Шай демдеу алгоритмін блок-схема түрінде салыңдар. Кем дегенде бір тармақталу (шарт) болуы керек.', ru:'Нарисуйте алгоритм заваривания чая в виде блок-схемы. Должно быть хотя бы одно ветвление (условие).'}, due: startOfDay(now-2*DAY)+18*36e5, created: now-9*DAY, subs: mkSubs(.9,.85,'flow')};
  const a3 = {id:'a3', title:{kk:'Python: екі санның қосындысы', ru:'Python: сумма двух чисел'}, desc:{kk:'input() арқылы екі сан енгізіп, олардың қосындысын шығаратын бағдарлама жазыңдар.', ru:'Напишите программу, которая вводит два числа через input() и выводит их сумму.'}, due: startOfDay(now+6*DAY)+18*36e5, created: now-1*DAY, subs: mkSubs(.2,0,'py')};
  a1.subs['1'] = {status:'submitted', text:'https://scratch.mit.edu/projects/1048576003/', ts: now-5*36e5, grade:null, fb:''};
  a2.subs['1'] = {status:'graded', text:'Блок-схеманы портфолиоға да салдым.', ts: now-3*DAY, grade:9, fb:'Шарт блогы дұрыс, жарайсың!', gts: now-30*36e5};
  delete a3.subs['1'];
  Object.values(a2.subs).forEach(x=>{ if(x.status==='graded' && !x.gts) x.gts = now - 1.5*DAY; });
  Object.values(a1.subs).forEach(x=>{ if(x.status==='graded' && !x.gts) x.gts = now - 6*36e5; });

  const maze = mazeSVG(7), maze2 = mazeSVG(31);
  const portfolio = [
    {id:uid(), sid:'1', title:'Лабиринт ойыны — 1-деңгей', type:'image', content:maze, ts:now-26*36e5, status:'approved', ats:now-24*36e5, fb:'Қабырғаларды өте мұқият салғансың, ойнау қызық!', likes:['p1'], comments:[{by:'p1', text:'Үйде бәріміз ойнап көрдік 😊', ts:now-20*36e5}]},
    {id:uid(), sid:'1', title:'Шай демдеу блок-схемасы', type:'image', content:flowSVG(), ts:now-3*DAY, status:'approved', ats:now-2.8*DAY, fb:'Шарт блогы дұрыс. Келесіде «Иә/Жоқ» тармақтарын көрсеткімен белгіле.', likes:[], comments:[]},
    {id:uid(), sid:'1', title:'Интернеттегі қауіпсіздік ережелері', type:'text', content:'1. Құпиясөзді ешкімге айтпаймын.\n2. Бейтаныс сілтемелерді ашпаймын.\n3. Жеке суреттерімді бөгде адамдарға жібермеймін.\n4. Бірдеңе қорқытса, ата-анама немесе мұғалімге айтамын.', ts:now-2*36e5, status:'pending', fb:'', likes:[], comments:[]},
    {id:uid(), sid:'2', title:'Сәлемдесу бағдарламасы', type:'code', content:'name = input("Атың кім? ")\nprint("Сәлем,", name + "!")\nprint("Информатика сабағына қош келдің!")', ts:now-2*DAY, status:'approved', ats:now-1.9*DAY, fb:'Тамаша! f-string қолданып көр.', likes:['p2'], comments:[]},
    {id:uid(), sid:'6', title:'Менің Scratch жобам', type:'link', content:'https://scratch.mit.edu/projects/1048576117/', ts:now-5*36e5, status:'pending', fb:'', likes:[], comments:[]},
    {id:uid(), sid:'4', title:'Компьютердің негізгі құрылғылары', type:'text', content:'Компьютердің негізгі құрылғылары: процессор — ақпаратты өңдейді, жедел жады — уақытша сақтайды, қатты диск — ұзақ сақтайды. Енгізу құрылғылары: пернетақта, тінтуір. Шығару құрылғылары: монитор, принтер.', ts:now-7*36e5, status:'pending', fb:'', likes:[], comments:[]},
    {id:uid(), sid:'3', title:'Цикл: 1-ден 10-ға дейін', type:'code', content:'for i in range(1, 10):\n    print(i)', ts:now-30*36e5, status:'returned', ats:now-28*36e5, fb:'Бағдарлама 10 санын шығармай тұр. range() функциясының соңғы шекарасын тексер.', likes:[], comments:[]},
    {id:uid(), sid:'9', title:'Лабиринт: қиын деңгей', type:'image', content:maze2, ts:now-2*DAY, status:'approved', ats:now-1.8*DAY, fb:'Жолдар өте шатасқан, керемет!', likes:['p9'], comments:[]}
  ];

  const posts = [
    {id:uid(), by:'t', ts:now-2*36e5, text:{kk:'Бүгін 7 «А» сыныбы Scratch-та алғашқы лабиринт ойындарын жасады! Әр оқушы өз кейіпкерін бағдарламалап, кедергілер қосты. Жұмыстарды балаңыздың портфолиосынан көре аласыз.', ru:'Сегодня 7 «А» сделал первые игры-лабиринты в Scratch! Каждый ученик запрограммировал своего героя и добавил препятствия. Работы можно посмотреть в портфолио ребёнка.'}, img:maze, likes:['p1','p2','p5','p9'], comments:[{by:'p1', text:'Әлихан үйде де ойынын көрсетті, өте риза болдық!', ts:now-90*6e4},{by:'p9', text:'Рахмет, апай! Арсен кешке дейін лабиринт салды.', ts:now-40*6e4}]},
    {id:uid(), by:'t', ts:now-26*36e5, text:{kk:'Еске саламыз: бейсенбі күні 18:00-де информатика кабинетінде (214) ата-аналар жиналысы өтеді. Тақырып — балалардың цифрлық қауіпсіздігі.', ru:'Напоминаем: в четверг в 18:00 в кабинете информатики (214) пройдёт родительское собрание. Тема — цифровая безопасность детей.'}, img:null, likes:['p3','p4','p12'], comments:[{by:'p4', text:'Міндетті түрде келемін.', ts:now-24*36e5}]},
    {id:uid(), by:'t', ts:now-3*DAY, text:{kk:'Олимпиадаға дайындық үйірмесі сейсенбі мен жұма күндері 15:30-да. Python бойынша қосымша есептер портфолио бөліміне жүктеледі.', ru:'Кружок подготовки к олимпиаде — по вторникам и пятницам в 15:30. Дополнительные задачи по Python будут появляться в разделе портфолио.'}, img:null, likes:['p6'], comments:[]}
  ];

  const threads = {
    '1':[{from:'t', text:'Сәлеметсіз бе, Гүлнар! Әлихан бүгін топтағы досына циклды түсіндіріп, көп көмектесті. Тәрбиеңізге рахмет!', ts:now-26*36e5, read:true},
         {from:'p', text:'Рахмет, Айсұлу апай! Үйде де бағдарламалауға қызығып жүр.', ts:now-25*36e5, read:true},
         {from:'t', text:'Бейсенбідегі жиналысқа келе аласыз ба? Әлиханның жобаларын көрсеткім келеді.', ts:now-3*36e5, read:false}],
    '2':[{from:'p', text:'Айсұлу апай, сәлеметсіз бе. Аружан ертең дәрігерге барады, 2-сабаққа кешігіп келуі мүмкін.', ts:now-50*6e4, read:false}],
    '5':[{from:'t', text:'Нұрасыл үй тапсырмасын екі рет тапсырмады. Қысқаша сөйлесіп алайық па?', ts:now-2*DAY, read:true},
         {from:'p', text:'Иә, әрине. Сәрсенбі күні 16:00 сізге ыңғайлы ма?', ts:now-2*DAY+3*36e5, read:false}]
  };

  return {
    v:1, lang:'kk', role:'teacher', acting:'1',
    cls:{ name:{kk:'7 «А» сынып · Информатика', ru:'7 «А» класс · Информатика'}, teacher:'Айсұлу апай', goal:{kk:'Ғылым мұражайына саяхат', ru:'Поездка в музей науки'}, target:300 },
    students, events, attendance, assignments:[a1,a2,a3], portfolio, posts, threads,
    calEvents: seedCal(), settings:{autoAbsent:true}, absentNotified:{}, seen:{}, seenDefault: now - 8*36e5
  };
}

function load(){ try { const r = localStorage.getItem(LS_KEY); return r ? JSON.parse(r) : null; } catch(e){ return null; } }
function save(){ try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch(e){ toast(t('saveFail')); } }

/* ---------- derived ---------- */
function ptsSince(sid, since){ let n=0; for (const e of S.events) if (e.sid===sid && e.ts>=since) n+=e.v; return n; }
const week = sid => ptsSince(sid, startOfDay(Date.now()-6*DAY));
function goalProgress(){ let n=0; for (const e of S.events) if (e.v>0) n+=e.v; return n; }
function attOn(k, sid){ return (S.attendance[k]||{})[sid] || null; }
function stats(sids){
  const set = new Set(sids), from = startOfDay(Date.now()-6*DAY);
  let pts=0, posN=0, negN=0;
  S.events.forEach(e=>{ if (set.has(e.sid) && e.ts>=from){ pts+=e.v; e.v>0?posN++:negN++; } });
  let att=0, attTot=0;
  Object.values(S.attendance).forEach(day=>sids.forEach(id=>{ const v=day[id]; if(v){ attTot++; if(v!=='absent') att++; } }));
  let done=0, tot=0, gsum=0, gn=0;
  S.assignments.forEach(a=>sids.forEach(id=>{ tot++; const s=a.subs[id]; if(s){ done++; if(s.status==='graded'){ gsum+=s.grade; gn++; } } }));
  return { pts, share: posN+negN ? Math.round(posN/(posN+negN)*100) : null, att: attTot ? Math.round(att/attTot*100) : null, done, tot, avg: gn ? (gsum/gn).toFixed(1) : null };
}
function unreadMsgs(){
  if (S.role==='teacher') return Object.values(S.threads).reduce((n,th)=>n+th.filter(m=>m.from==='p'&&!m.read).length,0);
  if (S.role==='parent') return (S.threads[S.acting]||[]).filter(m=>m.from==='t'&&!m.read).length;
  return 0;
}
function pendingCount(){ return S.portfolio.filter(p=>p.status==='pending').length; }

/* ---------- notifications ---------- */
function notifications(){
  const out=[], since = Date.now()-7*DAY, role=S.role, sid=S.acting;
  const evItem = e => { const s=stu(e.sid), sk=skill(e.skill); return {ts:e.ts, ic:sk.ic, tone:e.v>0?'good':'bad', text:`${esc(s.first)}: ${e.v>0?'+':''}${e.v} · ${esc(L(sk))}`, go: role==='student'?'myday':'home'}; };
  if (role==='teacher'){
    S.portfolio.filter(p=>p.status==='pending').forEach(p=>out.push({ts:p.ts, ic:'image', tone:'info', text:t('n_pfPending',{name:esc(stu(p.sid).first)}), go:'portfolio'}));
    Object.entries(S.threads).forEach(([k,th])=>th.filter(m=>m.from==='p').slice(-2).forEach(m=>out.push({ts:m.ts, ic:'msg', tone:'gold', text:t('n_msg',{name:esc(stu(k).parent)}), go:'messages', thread:k})));
    S.assignments.forEach(a=>Object.entries(a.subs).forEach(([k,s])=>{ if (s.ts>since) out.push({ts:s.ts, ic:'clip', tone:'', text:t('n_sub',{name:esc(stu(k).first), title:esc(L(a.title))}), go:'assignments'}); }));
  } else {
    S.events.filter(e=>e.sid===sid && e.ts>since).forEach(e=>out.push(evItem(e)));
    S.portfolio.filter(p=>p.sid===sid && p.ats && p.status!=='pending').forEach(p=>out.push({ts:p.ats, ic:'image', tone:p.status==='approved'?'info':'bad', text:t(p.status==='approved'?'n_pfApproved':'n_pfReturned',{title:esc(p.title)}), go:'portfolio'}));
    S.assignments.forEach(a=>{ const s=a.subs[sid]; if (s && s.status==='graded') out.push({ts:s.gts||s.ts, ic:'clip', tone:'gold', text:t('n_graded',{title:esc(L(a.title)), g:s.grade}), go: role==='parent'?'report':'assignments'}); });
    if (role==='parent'){
      S.posts.forEach(p=>out.push({ts:p.ts, ic:'feed', tone:'info', text:t('n_post'), go:'feed'}));
      (S.threads[sid]||[]).filter(m=>m.from==='t').slice(-3).forEach(m=>out.push({ts:m.ts, ic:'msg', tone:'gold', text:t('n_msg',{name:esc(S.cls.teacher)}), go:'messages'}));
    }
  }
  return out.filter(x=>x.ts>since).sort((a,b)=>b.ts-a.ts).slice(0,24);
}
const seenTs = () => S.seen[me()] ?? S.seenDefault;
function notifUnread(){ const s=seenTs(); return notifications().filter(n=>n.ts>s).length; }

/* ---------- nav ---------- */
const NAV = {
  teacher:[['class','grid'],['feed','feed'],['portfolio','image'],['assignments','clip'],['attendance','cal'],['messages','msg'],['reports','chart']],
  parent:[['home','home'],['feed','feed'],['portfolio','image'],['messages','msg'],['report','chart']],
  student:[['myday','sun'],['assignments','clip'],['portfolio','image'],['feed','feed']]
};
function curView(){ const list = NAV[S.role].map(x=>x[0]); if (!list.includes(ui.view)) ui.view = list[0]; return ui.view; }

/* =========================================================
   RENDER
   ========================================================= */
function render(){
  if (ui.screen==='landing'){ renderLanding(); return; }
  document.documentElement.lang = S.lang==='kk' ? 'kk' : 'ru';
  const v = curView();
  const msgs = unreadMsgs(), pend = pendingCount(), nUnread = notifUnread();
  const navHtml = NAV[S.role].map(([k,ic])=>{
    let b=''; if (k==='messages' && msgs) b=`<span class="badge">${msgs}</span>`; if (k==='portfolio' && S.role==='teacher' && pend) b=`<span class="badge">${pend}</span>`;
    return `<button class="nav-btn ${v===k?'on':''}" data-act="nav" data-v="${k}" ${v===k?'aria-current="page"':''}>${icon(ic)}<span>${t('nav_'+k)}</span>${b}</button>`;
  }).join('');
  const foot = `<p class="foot-note">${t('demoNote')}</p>${ui.confirmReset ? `<button class="link-btn danger" data-act="reset">${t('resetConfirm')}</button>` : `<button class="link-btn" data-act="reset">${t('resetDemo')}</button>`}`;
  const actingSel = S.role!=='teacher' ? `<label class="small muted" for="acting">${t(S.role==='parent'?'as_parent':'as_student')}</label>
     <select class="select" id="acting" data-change="acting">${S.students.map(s=>`<option value="${s.id}" ${s.id===S.acting?'selected':''}>${esc(fullName(s))}</option>`).join('')}</select>` : '';

  document.getElementById('app').innerHTML = `
  <div class="shell">
    <aside class="rail">
      <button class="brand" data-act="toLanding" aria-label="${t('toSite')}" title="${t('toSite')}"><span class="brand-mark masc">${mascot('happy',false)}</span><span><span class="brand-name" style="display:block">Қоңырау</span><span class="brand-sub" style="display:block">${t('tagline')}</span></span></button>
      <nav class="nav" aria-label="${t('nav_'+v)}">${navHtml}</nav>
      <div class="rail-foot">${foot}</div>
    </aside>
    <div class="main">
      <header class="topbar">
        <div class="class-chip">${icon('users',18)}<span>${esc(L(S.cls.name))}</span></div>
        <div class="spacer"></div>
        <div class="seg" role="group" aria-label="role">${['teacher','parent','student'].map(r=>`<button class="${S.role===r?'on':''}" data-act="role" data-v="${r}" aria-pressed="${S.role===r}">${t('role_'+r)}</button>`).join('')}</div>
        ${actingSel}
        <div class="seg" role="group" aria-label="${t('lang')}"><button class="${S.lang==='kk'?'on':''}" data-act="lang" data-v="kk">ҚАЗ</button><button class="${S.lang==='ru'?'on':''}" data-act="lang" data-v="ru">РУС</button></div>
        <button class="icon-btn" data-act="bell" aria-label="${t('notifs')}" aria-expanded="${ui.notifOpen}">${icon('bell',18)}${nUnread?`<span class="badge dot">${nUnread>9?'9+':nUnread}</span>`:''}</button>
      </header>
      <main class="content" id="content">${VIEWS[v]()}</main>
      <div class="content mobile-only" style="padding-top:0;flex-direction:column;gap:8px">${foot}</div>
    </div>
  </div>
  ${ui.notifOpen ? renderNotif() : ''}`;
  renderModal();
  afterRender();
}

function afterRender(){
  const log = document.querySelector('.chat-log'); if (log) log.scrollTop = log.scrollHeight;
}

function renderNotif(){
  const s = seenTs(), items = notifications();
  return `<div class="notif card" role="dialog" aria-label="${t('notifs')}"><h3>${t('notifs')}</h3>
   ${items.length ? items.map(n=>`<button class="n-item ${n.ts>s?'new':''}" data-act="nav" data-v="${n.go}" ${n.thread?`data-thread="${n.thread}"`:''}><span class="n-ic ${n.tone}">${icon(n.ic,16)}</span><span>${n.text}<time>${rel(n.ts)}</time></span></button>`).join('') : `<p class="empty">${t('noNotifs')}</p>`}</div>`;
}

/* ---------- shared bits ---------- */
function ptsBadge(n){ return `<span class="pts ${n>0?'up':(n<0?'down':'zero')}">${n>0?'+':''}${n}</span>`; }
function pageHead(title, tools='', eyebrow=L(S.cls.name)){ return `<section class="page-head"><div><p class="eyebrow">${esc(eyebrow)}</p><h1>${title}</h1></div>${tools?`<div class="tools">${tools}</div>`:''}</section>`; }
function goalCard(){
  const n = goalProgress(), pc = Math.min(100, Math.round(n/S.cls.target*100));
  return `<div class="card goal"><span class="goal-ic">${icon('flag',22)}</span><div class="goal-body"><div class="goal-top"><span><span class="muted small">${t('goal')}:</span> <b>${esc(L(S.cls.goal))}</b></span><span class="num small muted">${t('goalOf',{a:n,b:S.cls.target})} · ${pc}%</span></div><div class="bar" role="progressbar" aria-valuenow="${pc}" aria-valuemin="0" aria-valuemax="100"><i style="width:${pc}%"></i></div></div></div>`;
}
function evRow(e, showName){
  const sk = skill(e.skill), s = stu(e.sid);
  return `<div class="hist-row"><span class="v ${e.v>0?'up':'down'}">${e.v>0?'+':''}${e.v}</span><span style="min-width:0">${showName?`<b>${esc(s.first)}</b> · `:''}${esc(L(sk))}${e.note?`<span class="muted small" style="display:block">${esc(e.note)}</span>`:''}</span><span class="when">${rel(e.ts)}</span></div>`;
}
function statusChip(st){ return st==='approved' ? `<span class="chip good">${t('approved')}</span>` : st==='returned' ? `<span class="chip bad">${t('returned')}</span>` : `<span class="chip warn">${t('pending')}</span>`; }
function subChip(sub){ if (!sub) return `<span class="chip mute">${t('st_none')}</span>`; if (sub.status==='graded') return `<span class="chip good">${t('st_graded')} · ${sub.grade}/10</span>`; return `<span class="chip info">${t('st_submitted')}</span>`; }

/* =========================================================
   VIEWS
   ========================================================= */
const VIEWS = {};

/* ----- Teacher: class (points) ----- */
VIEWS.class = () => {
  const tk = dayKey(Date.now());
  let list = [...S.students];
  if (ui.sort==='pts') list.sort((a,b)=>week(b.id)-week(a.id)); else list.sort((a,b)=>a.first.localeCompare(b.first, 'kk'));
  const tools = `
    <select class="select" id="sort" data-change="sort" aria-label="${t('sortName')}"><option value="name" ${ui.sort==='name'?'selected':''}>${t('sortName')}</option><option value="pts" ${ui.sort==='pts'?'selected':''}>${t('sortPts')} · ${t('last7')}</option></select>
    <button class="btn" data-act="random">${icon('shuffle',16)}${t('random')}</button>
    <button class="btn ${ui.multi?'primary':''}" data-act="multi">${icon('check2',16)}${ui.multi?t('multiDone'):t('multi')}</button>`;
  const tiles = list.map(s=>{
    const a = attOn(tk, s.id), w = week(s.id);
    return `<button class="tile ${a==='absent'?'is-absent':''} ${ui.sel.has(s.id)?'is-sel':''}" data-act="tile" data-id="${s.id}" aria-label="${esc(fullName(s))}, ${w} ${t('pts')}">
      ${a==='absent'?`<span class="chip bad flag">${t('absentTag')}</span>`:(a==='late'?`<span class="chip warn flag">${t('lateTag')}</span>`:'')}
      ${ptsBadge(w)}${av(s,56)}<span class="tile-name">${esc(s.first)}</span><span class="tile-sub">${esc(s.last)}</span></button>`;
  }).join('');
  const whole = `<button class="tile whole" data-act="giveAll"><span class="wh-ic">${icon('users',26)}</span><span class="tile-name">${t('whole')}</span><span class="tile-sub">${t('studentsN',{n:S.students.length})}</span></button>`;
  return pageHead(t('nav_class'), tools) + goalCard() +
    `<p class="small muted">${t('last7')} · ${fDate(Date.now())}</p>` +
    `<div class="tiles">${ui.multi?'':whole}${tiles}</div>` +
    (ui.multi ? `<div class="action-bar"><b>${t('selected',{n:ui.sel.size})}</b><div class="tools"><button class="btn ghost" style="color:inherit" data-act="multi">${t('multiDone')}</button><button class="btn gold" data-act="multiGive" ${ui.sel.size?'':'disabled'}>${icon('plus',16)}${t('give')}</button></div></div>` : '');
};

/* ----- Feed (all roles) ----- */
VIEWS.feed = () => {
  const composer = S.role==='teacher' ? `
   <form class="card composer" data-form="post">
     <div style="display:flex;gap:11px;align-items:flex-start">${av(TEACHER,38)}<textarea class="textarea" id="post-text" name="text" placeholder="${t('postPh')}" aria-label="${t('postPh')}"></textarea></div>
     ${ui.postImg ? `<div style="display:flex;gap:10px;align-items:flex-start;flex-wrap:wrap"><img class="preview" src="${ui.postImg}" alt=""><button type="button" class="btn sm" data-act="rmPostImg">${icon('x',14)}${t('removePhoto')}</button></div>` : ''}
     <div class="composer-row"><span class="btn file-btn">${icon('image',16)}${t('addPhoto')}<input type="file" accept="image/*" data-change="postImg" aria-label="${t('addPhoto')}"></span><div class="spacer"></div><button class="btn primary" type="submit">${icon('send',16)}${t('publish')}</button></div>
   </form>` : '';
  const posts = [...S.posts].sort((a,b)=>b.ts-a.ts).map(postCard).join('');
  return pageHead(t('nav_feed')) + `<div class="feed">${composer}${posts}</div>`;
};
function postCard(p){
  const liked = p.likes.includes(me());
  const canComment = S.role!=='student';
  return `<article class="card post">
    <div class="post-head">${userAv(p.by,40)}<div><b>${esc(userName(p.by))}</b><span class="small muted">${t('teacherRole')} · ${rel(p.ts)}</span></div></div>
    <p class="post-text">${esc(L(p.text))}</p>
    ${p.img?`<img class="post-img" src="${p.img}" alt="">`:''}
    <div class="post-actions"><button class="like ${liked?'on':''}" data-act="like" data-id="${p.id}" aria-pressed="${liked}">${icon('heart',17)}${p.likes.length}</button><span class="small muted">${icon('msg',15).replace('class="ic"','class="ic" style="display:inline;vertical-align:-3px;margin-right:5px"')}${p.comments.length} ${t('comments')}</span></div>
    ${(p.comments.length||canComment)?`<div class="comments">
      ${p.comments.map(c=>`<div class="cmt">${userAv(c.by,30)}<div class="cmt-bubble"><b>${esc(userName(c.by))}${c.by[0]==='p'?` <span class="muted" style="font-weight:500">· ${esc(parentLabel(stu(c.by.slice(1))))}</span>`:''}</b>${esc(c.text)}</div></div>`).join('')}
      ${canComment?`<form class="cmt-form" data-form="comment" data-id="${p.id}"><input class="input" name="c" placeholder="${t('commentPh')}" aria-label="${t('commentPh')}" autocomplete="off"><button class="btn sm primary" type="submit" aria-label="${t('send')}">${icon('send',15)}</button></form>`:''}
    </div>`:''}
  </article>`;
}

/* ----- Portfolio (Seesaw-style) ----- */
function pfThumb(p){
  let inner='';
  if (p.type==='image') inner = `<img src="${p.content}" alt="">`;
  else if (p.type==='code') inner = `<pre>${esc(p.content.split('\n').slice(0,8).join('\n'))}</pre>`;
  else if (p.type==='text') inner = `<p class="t-text">${esc(p.content)}</p>`;
  else inner = `<span class="t-link">${icon('link',26)}${esc(hostOf(p.content))}</span>`;
  const ic = {image:'image',code:'code',text:'file',link:'link'}[p.type];
  return `<div class="pf-thumb">${inner}<span class="pf-type">${icon(ic,13)}${t('type_'+p.type)}</span></div>`;
}
function hostOf(u){ try { return new URL(u).hostname; } catch(e){ return u; } }
function pfCard(p, showStudent=true){
  const s = stu(p.sid);
  return `<button class="card pf" data-act="openPf" data-id="${p.id}">${pfThumb(p)}<div class="pf-body"><span class="pf-title">${esc(p.title)}</span>
    <span class="pf-meta">${showStudent?`${av(s,22)}<span>${esc(s.first)}</span> · `:''}<span>${rel(p.ts)}</span></span>
    <span class="pf-meta">${statusChip(p.status)}${p.likes.length?`<span>${icon('heart',13).replace('class="ic"','class="ic" style="display:inline;vertical-align:-2px"')} ${p.likes.length}</span>`:''}${p.comments.length?`<span>· ${p.comments.length} ${t('comments')}</span>`:''}</span></div></button>`;
}
VIEWS.portfolio = () => {
  if (S.role==='teacher'){
    let items = [...S.portfolio].sort((a,b)=>b.ts-a.ts);
    if (ui.pfFilter==='pending') items = items.filter(p=>p.status==='pending');
    if (ui.pfStudent!=='all') items = items.filter(p=>p.sid===ui.pfStudent);
    const filters = `<div class="filters"><div class="seg"><button class="${ui.pfFilter==='pending'?'on':''}" data-act="pfFilter" data-v="pending">${t('pfPending')} (${pendingCount()})</button><button class="${ui.pfFilter==='all'?'on':''}" data-act="pfFilter" data-v="all">${t('pfAll')}</button></div>
      <select class="select" data-change="pfStudent" aria-label="${t('student')}"><option value="all">${t('allStudents')}</option>${S.students.map(s=>`<option value="${s.id}" ${ui.pfStudent===s.id?'selected':''}>${esc(fullName(s))}</option>`).join('')}</select></div>`;
    return pageHead(t('nav_portfolio')) + filters + (items.length ? `<div class="pf-grid">${items.map(p=>pfCard(p)).join('')}</div>` : `<div class="card empty">${ui.pfFilter==='pending'?t('emptyPending'):t('emptyPf')}</div>`);
  }
  if (S.role==='student'){
    const items = S.portfolio.filter(p=>p.sid===S.acting).sort((a,b)=>b.ts-a.ts);
    return pageHead(t('myWorks'), `<button class="btn primary" data-act="pfAdd">${icon('plus',16)}${t('addWork')}</button>`) +
      (items.length ? `<div class="pf-grid">${items.map(p=>pfCard(p,false)).join('')}</div>` : `<div class="card empty">${t('emptyPf')}</div>`);
  }
  const s = stu(S.acting), items = S.portfolio.filter(p=>p.sid===S.acting && p.status==='approved').sort((a,b)=>b.ts-a.ts);
  return pageHead(t('childWorks',{name:esc(s.first)})) + `<p class="small muted">${t('pfHintParent')}</p>` +
    (items.length ? `<div class="pf-grid">${items.map(p=>pfCard(p,false)).join('')}</div>` : `<div class="card empty">${t('emptyPf')}</div>`);
};

/* ----- Assignments ----- */
VIEWS.assignments = () => {
  const list = [...S.assignments].sort((a,b)=>b.created-a.created);
  if (S.role==='teacher'){
    const cards = list.map(a=>{
      const subs = Object.values(a.subs), n = subs.length, g = subs.filter(x=>x.status==='graded').length, total=S.students.length, pc=Math.round(n/total*100);
      const over = a.due < Date.now();
      return `<button class="card asg" data-act="openAsg" data-id="${a.id}"><span class="asg-ic">${icon('clip',22)}</span>
        <span class="asg-main"><h3>${esc(L(a.title))}</h3><span class="small muted">${t('dueOn',{d:fDate(a.due)})} ${over?`<span class="chip bad">${t('overdue')}</span>`:''}</span></span>
        <span class="asg-side"><span class="small num"><b>${t('submittedN',{a:n,b:total})}</b> · <span class="muted">${t('gradedN',{n:g})}</span></span><span class="bar primary"><i style="width:${pc}%"></i></span></span></button>`;
    }).join('');
    return pageHead(t('nav_assignments'), `<button class="btn primary" data-act="asgNew">${icon('plus',16)}${t('asgNew')}</button>`) + `<div class="asg-list">${cards}</div>`;
  }
  const cards = list.map(a=>{
    const sub = a.subs[S.acting], over = a.due < Date.now() && !sub;
    return `<button class="card asg" data-act="openAsg" data-id="${a.id}"><span class="asg-ic">${icon('clip',22)}</span>
      <span class="asg-main"><h3>${esc(L(a.title))}</h3><span class="small muted">${t('dueOn',{d:fDate(a.due)})} ${over?`<span class="chip bad">${t('overdue')}</span>`:''}</span></span>
      <span class="asg-side">${subChip(sub)}</span></button>`;
  }).join('');
  return pageHead(t('nav_assignments')) + `<div class="asg-list">${cards}</div>`;
};

/* ----- Attendance ----- */
VIEWS.attendance = () => {
  const k = ui.attDate || dayKey(Date.now()); ui.attDate = k;
  const day = S.attendance[k] || {};
  const c = {present:0, late:0, absent:0, none:0};
  S.students.forEach(s=>{ c[day[s.id]||'none']++; });
  const rows = S.students.map(s=>{
    const v = day[s.id];
    return `<div class="att-row"><span class="who">${av(s,34)}<span>${esc(fullName(s))}</span></span>
      <span class="att-opts" role="group" aria-label="${esc(fullName(s))}">${['present','late','absent'].map(o=>`<button class="${o} ${v===o?'on':''}" data-act="att" data-sid="${s.id}" data-v="${o}" aria-pressed="${v===o}">${t(o)}</button>`).join('')}</span></div>`;
  }).join('');
  const tools = `<label class="lbl" for="att-date">${t('date')}</label><input class="input" style="width:auto" type="date" id="att-date" value="${k}" max="${dayKey(Date.now())}" data-change="attDate"><button class="btn" data-act="attAll">${icon('check',16)}${t('allPresent')}</button>`;
  return pageHead(t('attTitle'), tools) +
   `<div class="att-summary"><div class="card"><span class="small muted">${t('present')}</span><b style="color:var(--good)">${c.present}</b></div><div class="card"><span class="small muted">${t('late')}</span><b style="color:var(--warn)">${c.late}</b></div><div class="card"><span class="small muted">${t('absent')}</span><b style="color:var(--bad)">${c.absent}</b></div><div class="card"><span class="small muted">${t('notMarked')}</span><b class="muted">${c.none}</b></div></div>
    <label class="toggle"><input type="checkbox" id="auto-absent" data-change="autoAbsent" ${S.settings.autoAbsent?'checked':''}>${t('autoAbsent')}</label>
    <div class="card att-list">${rows}</div>`;
};

/* ----- Messages ----- */
VIEWS.messages = () => {
  if (S.role==='parent'){
    return pageHead(t('nav_messages')) + `<div class="card inbox has-thread" style="grid-template-columns:minmax(0,1fr)">${chatPane(S.acting)}</div>`;
  }
  const order = S.students.map(s=>({s, th:S.threads[s.id]||[]})).sort((a,b)=>{ const la=a.th.at(-1)?.ts||0, lb=b.th.at(-1)?.ts||0; return lb-la || a.s.first.localeCompare(b.s.first,'kk'); });
  const list = order.map(({s,th})=>{ const last = th.at(-1), un = th.some(m=>m.from==='p'&&!m.read);
    return `<button class="thread ${ui.thread===s.id?'on':''}" data-act="thread" data-id="${s.id}">${av(parentObj(s),38)}<span class="thread-main"><b>${esc(s.parent)}</b><span>${esc(parentLabel(s))}${last?` · ${esc(last.text)}`:''}</span></span>${un?'<span class="udot" aria-label="new"></span>':''}</button>`; }).join('');
  return pageHead(t('nav_messages'), `<button class="btn" data-act="broadcast">${icon('megaphone',16)}${t('broadcast')}</button>`) +
    `<div class="card inbox ${ui.thread?'has-thread':''}"><div class="threads">${list}</div><div class="chat">${ui.thread?chatPane(ui.thread):`<div class="empty" style="margin:auto">${t('pickThread')}</div>`}</div></div>`;
};
function chatPane(sid){
  const s = stu(sid), th = S.threads[sid] || [], mySide = S.role==='teacher' ? 't' : 'p';
  let changed=false; th.forEach(m=>{ if (m.from!==mySide && !m.read){ m.read=true; changed=true; } }); if (changed) save();
  const head = S.role==='teacher'
    ? `<button class="icon-btn mobile-only" data-act="threadBack" aria-label="${t('back')}">${icon('back',18)}</button>${av(parentObj(s),38)}<div><b>${esc(s.parent)}</b><span class="small muted">${esc(parentLabel(s))}</span></div>`
    : `${av(TEACHER,38)}<div><b>${esc(S.cls.teacher)}</b><span class="small muted">${t('teacherRole')}</span></div>`;
  let lastDay=''; const log = th.map(m=>{ const dk=dayKey(m.ts); let sep=''; if(dk!==lastDay){ lastDay=dk; sep=`<span class="day-sep">${dk===dayKey(Date.now())?t('today'):fDate(m.ts)}</span>`; }
    return sep+`<div class="msg ${m.from===mySide?'me':'them'}">${esc(m.text)}<time>${fTime(m.ts)}</time></div>`; }).join('');
  const tpls = S.role==='teacher' ? ['tpl1','tpl2','tpl3'] : ['tplP1','tplP2','tplP3'];
  return `<div class="chat-head">${head}</div><div class="chat-log">${log || `<p class="empty">${t('noMsgs')}</p>`}</div>
   <div class="chat-foot"><div class="tpls">${tpls.map(k=>`<button type="button" data-act="tpl" data-v="${k}">${t(k)}</button>`).join('')}</div>
   <form class="chat-form" data-form="msg" data-id="${sid}"><textarea class="textarea" id="msg-text" name="m" placeholder="${t('msgPh')}" aria-label="${t('msgPh')}"></textarea>${S.role==='teacher'?`<button type="button" class="btn" data-act="aiReply" data-id="${sid}" title="${t('ai_draftReply')}" aria-label="${t('ai_draftReply')}">${icon('sparkle',16)}</button>`:''}<button class="btn primary" type="submit" aria-label="${t('send')}">${icon('send',16)}</button></form></div>`;
}

/* ----- Reports ----- */
function dayChart(sids){
  const set = new Set(sids), days=[];
  for (let i=6;i>=0;i--){ const ts=startOfDay(Date.now()-i*DAY); days.push({k:dayKey(ts), ts, pos:0, neg:0}); }
  S.events.forEach(e=>{ if(!set.has(e.sid)) return; const d=days.find(x=>x.k===dayKey(e.ts)); if(!d) return; if(e.v>0) d.pos+=e.v; else d.neg-=e.v; });
  const W=560, H=236, L0=12, R0=12, top=22, bottom=190;
  const pmax=Math.max(1,...days.map(d=>d.pos)), nmax=Math.max(0,...days.map(d=>d.neg)), tot=pmax+nmax, unit=(bottom-top)/tot, base=top+pmax*unit;
  const gw=(W-L0-R0)/7, bw=Math.min(36, gw*.46);
  const tk = dayKey(Date.now());
  const g = days.map((d,i)=>{ const cx=L0+gw*i+gw/2, x=cx-bw/2, ph=d.pos*unit, nh=d.neg*unit;
    return `${ph?`<rect class="pos" x="${x}" y="${base-ph}" width="${bw}" height="${ph}" rx="5"/><text class="lbl-v" x="${cx}" y="${base-ph-6}" text-anchor="middle">+${d.pos}</text>`:''}
      ${nh?`<rect class="neg" x="${x}" y="${base}" width="${bw}" height="${nh}" rx="5"/><text class="lbl-v" x="${cx}" y="${base+nh+13}" text-anchor="middle">−${d.neg}</text>`:''}
      <text class="${d.k===tk?'today':''}" x="${cx}" y="${H-8}" text-anchor="middle">${esc(fmt(d.ts,{weekday:'short'}))}</text>`; }).join('');
  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${t('byDay')}"><line class="axis" x1="${L0}" x2="${W-R0}" y1="${base}" y2="${base}"/>${g}</svg>`;
}
function skillBars(sids){
  const set=new Set(sids), from=startOfDay(Date.now()-6*DAY), cnt={};
  S.events.forEach(e=>{ if(set.has(e.sid)&&e.ts>=from) cnt[e.skill]=(cnt[e.skill]||0)+1; });
  const rows = SKILLS.filter(s=>cnt[s.id]).sort((a,b)=>cnt[b.id]-cnt[a.id]);
  if (!rows.length) return `<p class="muted small">${t('noData')}</p>`;
  const mx = Math.max(...rows.map(r=>cnt[r.id]));
  return `<div class="skillbars">${rows.map(s=>`<div class="sb"><span class="sb-ic ${s.v>0?'pos':'neg'}">${icon(s.ic,18)}</span><span class="sb-main"><span>${esc(L(s))}</span><span class="bar ${s.v>0?'good':''}"><i style="width:${cnt[s.id]/mx*100}%;${s.v<0?'background:var(--bad)':''}"></i></span></span><span class="sb-n">${cnt[s.id]}</span></div>`).join('')}</div>`;
}
function statCards(sids){
  const st = stats(sids);
  return `<div class="stats">
    <div class="card stat"><span class="k">${t('ptsWeek')}</span><span class="val" style="color:${st.pts>=0?'var(--ink)':'var(--bad)'}">${st.pts>0?'+':''}${st.pts}</span></div>
    <div class="card stat"><span class="k">${t('posShare')}</span><span class="val">${st.share??'—'}<small>${st.share!=null?'%':''}</small></span><span class="bar good"><i style="width:${st.share||0}%"></i></span></div>
    <div class="card stat"><span class="k">${t('attRate')}</span><span class="val">${st.att??'—'}<small>${st.att!=null?'%':''}</small></span><span class="bar primary"><i style="width:${st.att||0}%"></i></span></div>
    <div class="card stat"><span class="k">${t('asgDone')}</span><span class="val">${st.done}<small>/ ${st.tot}</small></span></div>
    <div class="card stat"><span class="k">${t('avgGrade')}</span><span class="val">${st.avg??'—'}<small>${st.avg?'/ 10':''}</small></span></div></div>`;
}
function reportBody(sids){
  return statCards(sids) + `<div class="two"><section class="card panel"><div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap"><h3>${t('byDay')}</h3><span class="legend"><span><i style="background:var(--good)"></i>${t('posL')}</span><span><i style="background:var(--bad)"></i>${t('negL')}</span></span></div>${dayChart(sids)}</section>
   <section class="card panel"><h3>${t('bySkill')} · ${t('last7')}</h3>${skillBars(sids)}</section></div>`;
}
VIEWS.reports = () => {
  const sel = `<label class="lbl" for="rep-sid">${t('reportFor')}</label><select class="select" id="rep-sid" data-change="reportSid"><option value="all">${t('whole')}</option>${S.students.map(s=>`<option value="${s.id}" ${ui.reportSid===s.id?'selected':''}>${esc(fullName(s))}</option>`).join('')}</select>`;
  const sids = ui.reportSid==='all' ? S.students.map(s=>s.id) : [ui.reportSid];
  let extra = '';
  if (ui.reportSid==='all'){
    extra = `<section class="card"><div class="scroll-x"><table class="table"><thead><tr><th>${t('nameCol')}</th><th>${t('ptsWeek')}</th><th>${t('posShare')}</th><th>${t('attRate')}</th><th>${t('asgDone')}</th><th>${t('avgGrade')}</th></tr></thead><tbody>
      ${S.students.map(s=>{ const st=stats([s.id]); return `<tr data-act="repStudent" data-id="${s.id}"><td><span class="who">${av(s,28)}${esc(fullName(s))}</span></td><td>${ptsBadge(st.pts)}</td><td>${st.share??'—'}${st.share!=null?'%':''}</td><td>${st.att??'—'}${st.att!=null?'%':''}</td><td>${st.done}/${st.tot}</td><td>${st.avg??'—'}</td></tr>`; }).join('')}
    </tbody></table></div></section>`;
  } else {
    const ev = S.events.filter(e=>e.sid===ui.reportSid).sort((a,b)=>b.ts-a.ts).slice(0,8);
    extra = `<section class="card panel"><h3>${t('recent')}</h3><div class="hist">${ev.length?ev.map(e=>evRow(e)).join(''):`<p class="muted">${t('noRecent')}</p>`}</div></section>`;
  }
  return pageHead(t('nav_reports'), sel) + reportBody(sids) + extra;
};
VIEWS.report = () => {
  const s = stu(S.acting);
  return pageHead(`${esc(fullName(s))}`, '', t('nav_report')) + reportBody([s.id]) +
   `<section class="card panel"><h3>${t('nav_assignments')}</h3><div class="list">${S.assignments.map(a=>{ const sub=a.subs[s.id]; return `<div class="li"><span class="asg-ic" style="width:36px;height:36px">${icon('clip',18)}</span><span class="li-main"><b>${esc(L(a.title))}</b><span>${t('dueOn',{d:fDate(a.due)})}${sub&&sub.fb?` · ${esc(sub.fb)}`:''}</span></span>${subChip(sub)}</div>`; }).join('')}</div></section>`;
};

/* ----- Parent home ----- */
VIEWS.home = () => {
  const s = stu(S.acting), tk = dayKey(Date.now()), a = attOn(tk, s.id);
  const todayEv = S.events.filter(e=>e.sid===s.id && dayKey(e.ts)===tk).sort((x,y)=>y.ts-x.ts);
  const todayPts = todayEv.reduce((n,e)=>n+e.v,0);
  const attChip = a==='present' ? `<span class="chip good">${t('present')}</span>` : a==='late' ? `<span class="chip warn">${t('late')}</span>` : a==='absent' ? `<span class="chip bad">${t('absent')}</span>` : `<span class="chip mute">${t('notMarked')}</span>`;
  const post = [...S.posts].sort((x,y)=>y.ts-x.ts)[0];
  const works = S.portfolio.filter(p=>p.sid===s.id && p.status==='approved').sort((x,y)=>y.ts-x.ts).slice(0,2);
  return `<section class="card hero">${av(s,64)}<div style="min-width:0"><p class="eyebrow">${t('hello',{name:esc(s.parent)})}</p><h2>${esc(fullName(s))}</h2><p class="small muted" style="margin-top:4px">${t('todayAtt')}: ${attChip}</p></div>
    <div class="hero-stats"><div class="hero-stat"><span>${t('today')}</span><b>${todayPts>0?'+':''}${todayPts}</b></div><div class="hero-stat"><span>${t('ptsWeek')}</span><b>${week(s.id)>0?'+':''}${week(s.id)}</b></div></div></section>
   <div class="grid-2">
    <section class="card panel"><h3>${t('todayFeed')}</h3><div class="hist">${todayEv.length?todayEv.map(e=>evRow(e)).join(''):`<p class="muted small">${t('noToday')}</p>`}</div></section>
    <section class="card panel"><h3>${t('upcoming')}</h3><div class="list">${S.assignments.map(x=>{ const sub=x.subs[s.id]; return `<div class="li"><span class="li-main"><b>${esc(L(x.title))}</b><span>${t('dueOn',{d:fDate(x.due)})}</span></span>${subChip(sub)}</div>`; }).join('')}</div></section>
   </div>
   <div class="grid-2">
    <section class="card panel"><div style="display:flex;justify-content:space-between;gap:10px;align-items:center"><h3>${t('latestPost')}</h3><button class="btn sm" data-act="nav" data-v="feed">${t('openFeed')}</button></div>
      ${post?`<p style="white-space:pre-wrap">${esc(L(post.text))}</p>${post.img?`<img src="${post.img}" alt="" style="border-radius:12px;max-height:200px;object-fit:cover;width:100%">`:''}<span class="small muted">${rel(post.ts)}</span>`:''}</section>
    <section class="card panel"><div style="display:flex;justify-content:space-between;gap:10px;align-items:center"><h3>${t('nav_portfolio')}</h3><button class="btn sm" data-act="nav" data-v="portfolio">${t('allWorks')}</button></div>
      ${works.length?`<div class="pf-grid" style="grid-template-columns:repeat(auto-fill,minmax(160px,1fr))">${works.map(p=>pfCard(p,false)).join('')}</div>`:`<p class="muted small">${t('emptyPf')}</p>`}</section>
   </div>`;
};

/* ----- Student: my day ----- */
VIEWS.myday = () => {
  const s = stu(S.acting);
  const ev = S.events.filter(e=>e.sid===s.id).sort((a,b)=>b.ts-a.ts).slice(0,7);
  const todo = S.assignments.filter(a=>!a.subs[s.id]);
  const fbs = S.portfolio.filter(p=>p.sid===s.id && p.fb).sort((a,b)=>(b.ats||b.ts)-(a.ats||a.ts)).slice(0,3);
  return `<section class="card hero">${av(s,72)}<div style="min-width:0"><p class="eyebrow">${t('helloStudent',{name:esc(s.first)})}</p><h2>${t('nav_myday')}</h2></div>
     <div class="hero-stats"><div class="hero-stat"><span>${t('ptsWeek')}</span><b>${week(s.id)>0?'+':''}${week(s.id)}</b></div><div class="hero-stat"><span>${t('toDo')}</span><b>${todo.length}</b></div></div></section>
   ${goalCard()}
   <div class="grid-2">
    <section class="card panel"><h3>${t('recent')}</h3><div class="hist">${ev.length?ev.map(e=>evRow(e)).join(''):`<p class="muted small">${t('noRecent')}</p>`}</div></section>
    <section class="card panel"><h3>${t('toDo')}</h3><div class="list">${todo.length?todo.map(a=>`<button class="li-btn" data-act="openAsg" data-id="${a.id}"><span class="asg-ic" style="width:36px;height:36px">${icon('clip',18)}</span><span class="li-main" style="flex:1;min-width:0"><b style="display:block">${esc(L(a.title))}</b><span class="small muted">${t('dueOn',{d:fDate(a.due)})}</span></span>${a.due<Date.now()?`<span class="chip bad">${t('overdue')}</span>`:''}</button>`).join(''):`<p class="muted small">✓</p>`}</div>
      <h3 style="margin-top:8px">${t('myFeedback')}</h3>${fbs.length?fbs.map(p=>`<div class="fb">${av(TEACHER,28)}<div style="min-width:0"><b class="small">«${esc(p.title)}»</b><p class="small">${esc(p.fb)}</p></div></div>`).join(''):`<p class="muted small">${t('noRecent')}</p>`}</section>
   </div>`;
};

/* =========================================================
   MODALS
   ========================================================= */
function openModal(m){ ui.modal = m; renderModal(); setTimeout(()=>{ const f=document.querySelector('.modal [autofocus], .modal input:not([type=hidden]):not([type=radio]), .modal textarea'); if (f && m.type!=='give' && m.type!=='pick') f.focus(); else document.querySelector('.modal')?.focus(); }, 30); }
function closeModal(){ ui.modal = null; renderModal(); }
function shell(title, body, opts={}){ return `<div class="overlay" data-act="overlay"><div class="modal ${opts.wide?'wide':''}" role="dialog" aria-modal="true" aria-label="${esc(opts.label||title)}" tabindex="-1"><div class="modal-head">${opts.lead||''}<h2>${title}</h2><button class="icon-btn" data-act="close" aria-label="${t('close')}">${icon('x',18)}</button></div><div class="modal-body">${body}</div></div></div>`; }
function renderModal(){
  const root = document.getElementById('modal-root'); const m = ui.modal;
  if (!m){ root.innerHTML=''; return; }
  const fn = MODALS[m.type]; root.innerHTML = fn ? fn(m) : '';
}
const MODALS = {};

MODALS.give = m => {
  const ids = m.ids, single = ids.length===1 ? stu(ids[0]) : null;
  const title = single ? esc(fullName(single)) : (ids.length===S.students.length ? t('whole') : t('selected',{n:ids.length}));
  const lead = single ? av(single,44) : `<span class="wh-ic" style="width:44px;height:44px;border-radius:32%;display:grid;place-items:center;background:var(--primary);color:var(--on-primary)">${icon('users',22)}</span>`;
  const list = SKILLS.filter(s=>ui.tab==='pos' ? s.v>0 : s.v<0);
  const hist = single ? S.events.filter(e=>e.sid===single.id).sort((a,b)=>b.ts-a.ts).slice(0,6) : [];
  return shell(title, `
    <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap"><div class="seg"><button class="${ui.tab==='pos'?'on':''}" data-act="tab" data-v="pos">${t('tabPos')}</button><button class="${ui.tab==='neg'?'on':''}" data-act="tab" data-v="neg">${t('tabNeg')}</button></div>
      ${single?`<span class="small muted">${t('ptsWeek')}: ${ptsBadge(week(single.id))}</span>`:''}</div>
    <div class="skills">${list.map(s=>`<button class="skill ${s.v>0?'pos':'neg'}" data-act="award" data-skill="${s.id}"><span class="s-ic">${icon(s.ic,22)}<span class="s-v">${s.v>0?'+':''}${s.v}</span></span>${esc(L(s))}</button>`).join('')}</div>
    <div class="field"><label for="award-note">${t('note')}</label><input class="input" id="award-note" placeholder="${t('notePh')}" autocomplete="off" value="${esc(m.note||'')}"></div>
    ${single?`<div><p class="lbl" style="margin-bottom:6px">${t('recent')}</p><div class="hist">${hist.length?hist.map(e=>evRow(e)).join(''):`<p class="muted small">${t('noRecent')}</p>`}</div></div>`:''}
  `, {lead, label:title});
};

MODALS.pick = m => {
  const s = stu(m.id);
  return shell(t('random'), `<div class="picker ${m.spinning?'spin':''}">${av(s,96)}<p class="picker-name">${esc(fullName(s))}</p></div>
   <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap"><button class="btn" data-act="pickAgain">${icon('shuffle',16)}${t('again')}</button><button class="btn gold" data-act="pickGive" data-id="${s.id}" ${m.spinning?'disabled':''}>${icon('plus',16)}${t('give')}</button></div>`);
};

MODALS.pf = m => {
  const p = S.portfolio.find(x=>x.id===m.id); if (!p) return '';
  const s = stu(p.sid);
  let content='';
  if (p.type==='image') content = `<img src="${p.content}" alt="${esc(p.title)}">`;
  else if (p.type==='code') content = `<pre>${esc(p.content)}</pre>`;
  else if (p.type==='text') content = `<p class="t-full">${esc(p.content)}</p>`;
  else content = `<a class="btn" href="${esc(p.content)}" target="_blank" rel="noopener">${icon('link',16)}${esc(p.content)}</a>`;
  const fb = p.fb ? `<div class="fb">${av(TEACHER,30)}<div style="min-width:0"><b class="small">${t('teacherFb')}</b><p>${esc(p.fb)}</p></div></div>` : '';
  let actions='';
  if (S.role==='teacher'){
    actions = `<div class="field"><label for="pf-fb">${t('teacherFb')}</label><textarea class="textarea" id="pf-fb" placeholder="${t('fbPh')}">${esc(p.fb)}</textarea></div>
      <div style="display:flex;gap:10px;flex-wrap:wrap"><button class="btn good" data-act="pfApprove" data-id="${p.id}">${icon('check',16)}${t('approve')}</button><button class="btn bad" data-act="pfReturn" data-id="${p.id}">${icon('undo',16)}${t('returnBtn')}</button></div>`;
  } else if (S.role==='student' && p.status==='returned'){
    actions = fb + `<div class="field"><label for="pf-edit">${t('type_'+p.type)}</label>${p.type==='image'?'':(p.type==='link'?`<input class="input" id="pf-edit" value="${esc(p.content)}">`:`<textarea class="textarea ${p.type==='code'?'code':''}" id="pf-edit">${esc(p.content)}</textarea>`)}</div><button class="btn primary" data-act="pfResubmit" data-id="${p.id}">${icon('send',16)}${t('resubmit')}</button>`;
  } else actions = fb;
  const liked = p.likes.includes(me());
  const social = p.status==='approved' ? `<div style="display:flex;gap:6px;align-items:center"><button class="like ${liked?'on':''}" data-act="pfLike" data-id="${p.id}" aria-pressed="${liked}">${icon('heart',17)}${p.likes.length}</button></div>
   <div class="comments" style="padding:0">${p.comments.map(c=>`<div class="cmt">${userAv(c.by,30)}<div class="cmt-bubble"><b>${esc(userName(c.by))}</b>${esc(c.text)}</div></div>`).join('')}
   ${S.role!=='student'?`<form class="cmt-form" data-form="pfComment" data-id="${p.id}"><input class="input" name="c" placeholder="${t('commentPh')}" aria-label="${t('commentPh')}" autocomplete="off"><button class="btn sm primary" type="submit" aria-label="${t('send')}">${icon('send',15)}</button></form>`:''}</div>` : '';
  return shell(esc(p.title), `<div class="pf-meta">${av(s,26)}<span>${esc(fullName(s))}</span> · <span>${rel(p.ts)}</span> ${statusChip(p.status)}</div>
    <div class="pf-full">${content}</div>${actions}${social}`, {wide:p.type==='image'});
};

MODALS.pfAdd = () => shell(t('addWork'), `<form data-form="pfAddForm" style="display:flex;flex-direction:column;gap:16px">
   <div class="field"><label for="pf-title">${t('workTitle')}</label><input class="input" id="pf-title" name="title" placeholder="${t('workTitlePh')}" autocomplete="off"></div>
   <div class="type-pick" role="radiogroup">${['image','text','code','link'].map((k,i)=>`<label><input type="radio" name="type" value="${k}" data-change="pfType" ${i===1?'checked':''}>${icon({image:'image',text:'file',code:'code',link:'link'}[k],16)}${t('type_'+k)}</label>`).join('')}</div>
   <div class="field" data-pane="image" hidden><label for="pf-file">${t('chooseFile')}</label><input class="input" type="file" id="pf-file" accept="image/*"></div>
   <div class="field" data-pane="text"><label for="pf-text">${t('type_text')}</label><textarea class="textarea" id="pf-text" placeholder="${t('textPh')}"></textarea></div>
   <div class="field" data-pane="code" hidden><label for="pf-code">${t('type_code')}</label><textarea class="textarea code" id="pf-code" placeholder="${t('codePh')}" spellcheck="false"></textarea></div>
   <div class="field" data-pane="link" hidden><label for="pf-link">${t('type_link')}</label><input class="input" type="url" id="pf-link" placeholder="${t('linkPh')}"></div>
   <button class="btn primary" type="submit" style="align-self:flex-start">${icon('send',16)}${t('submitWork')}</button></form>`);

MODALS.asg = m => {
  const a = S.assignments.find(x=>x.id===m.id); if (!a) return '';
  const head = `<p class="small muted">${t('dueOn',{d:fDate(a.due)})}${a.due<Date.now()?` · <span class="chip bad">${t('overdue')}</span>`:''}</p><p style="max-width:68ch;white-space:pre-wrap">${esc(L(a.desc))}</p>`;
  if (S.role==='teacher'){
    const rows = S.students.map(s=>{ const sub=a.subs[s.id];
      const ans = sub ? (/^https?:\/\//.test(sub.text) ? `<a href="${esc(sub.text)}" target="_blank" rel="noopener">${esc(hostOf(sub.text))}</a>` : esc(sub.text)) : '—';
      const gradeCtl = sub ? `<div class="grade-row"><select class="select" id="g-${s.id}" aria-label="${t('grade')}">${[...Array(10)].map((_,i)=>`<option ${sub.grade===i+1?'selected':''}>${i+1}</option>`).join('')}</select><input class="input" id="f-${s.id}" style="padding:6px 9px;font-size:13px;min-width:120px" placeholder="${t('fbShort')}" value="${esc(sub.fb||'')}"><button class="btn sm" data-act="grade" data-aid="${a.id}" data-sid="${s.id}">${t('save')}</button></div>` : '';
      return `<tr><td><span class="who">${av(s,28)}${esc(fullName(s))}</span></td><td>${subChip(sub)}</td><td class="ans">${ans}</td><td>${gradeCtl}</td></tr>`; }).join('');
    return shell(esc(L(a.title)), head + `<div class="scroll-x"><table class="roster"><thead><tr><th>${t('student')}</th><th>${t('status')}</th><th>${t('answer')}</th><th>${t('grade')}</th></tr></thead><tbody>${rows}</tbody></table></div>`, {wide:true});
  }
  const sub = a.subs[S.acting];
  let body = head + `<div>${subChip(sub)}</div>`;
  if (sub && sub.status==='graded') body += `<div class="fb">${av(TEACHER,30)}<div><b class="small">${t('grade')}: ${sub.grade}/10</b>${sub.fb?`<p>${esc(sub.fb)}</p>`:''}</div></div><div class="field"><span class="lbl">${t('answer')}</span><p style="white-space:pre-wrap;overflow-wrap:anywhere">${esc(sub.text)}</p></div>`;
  else if (S.role==='student') body += `<form data-form="asgSubmit" data-id="${a.id}" style="display:flex;flex-direction:column;gap:12px"><div class="field"><label for="asg-ans">${t('answer')}</label><textarea class="textarea" id="asg-ans" name="ans" placeholder="${t('answerPh')}">${esc(sub?.text||'')}</textarea></div><button class="btn primary" type="submit" style="align-self:flex-start">${icon('send',16)}${t('submit')}</button></form>`;
  else if (sub) body += `<div class="field"><span class="lbl">${t('answer')}</span><p style="white-space:pre-wrap;overflow-wrap:anywhere">${esc(sub.text)}</p></div>`;
  return shell(esc(L(a.title)), body);
};

MODALS.asgNew = () => shell(t('asgNew'), `<form data-form="asgNewForm" style="display:flex;flex-direction:column;gap:14px">
  <div class="field"><label for="an-title">${t('asgTitle')}</label><input class="input" id="an-title" name="title" required autocomplete="off"></div>
  <div class="field"><label for="an-desc">${t('asgDesc')}</label><textarea class="textarea" id="an-desc" name="desc"></textarea></div>
  <div class="field"><label for="an-due">${t('asgDue')}</label><input class="input" type="date" id="an-due" name="due" required value="${dayKey(Date.now()+3*DAY)}" style="width:auto"></div>
  <button class="btn primary" type="submit" style="align-self:flex-start">${icon('plus',16)}${t('create')}</button></form>`);

MODALS.broadcast = () => shell(t('broadcastTitle'), `<form data-form="broadcastForm" style="display:flex;flex-direction:column;gap:14px">
  <textarea class="textarea" id="bc-text" name="m" placeholder="${t('msgPh')}" aria-label="${t('msgPh')}" style="min-height:120px"></textarea>
  <button class="btn primary" type="submit" style="align-self:flex-start">${icon('send',16)}${t('send')}</button></form>`);

/* =========================================================
   ACTIONS
   ========================================================= */
let toastTimer;
function toast(msg, undoFn){
  const root = document.getElementById('toasts');
  root.innerHTML = `<div class="toast"><span class="msg">${msg}</span>${undoFn?`<button data-act="undo">${t('undo')}</button>`:''}</div>`;
  ui.undoFn = undoFn || null;
  clearTimeout(toastTimer); toastTimer = setTimeout(()=>{ root.innerHTML=''; ui.undoFn=null; }, undoFn?6000:3200);
}
function award(ids, skillId, note){
  const sk = skill(skillId), now = Date.now(), batch = [];
  ids.forEach(id=>{ const e={id:uid(), sid:id, skill:skillId, v:sk.v, ts:now, note}; S.events.push(e); batch.push(e.id); });
  save();
  const v = (sk.v>0?'+':'')+sk.v;
  const msg = ids.length===1 ? t('awardedToast',{who:esc(stu(ids[0]).first), v, skill:esc(L(sk))}) : t('awardedMany',{n:ids.length, v, skill:esc(L(sk))});
  toast(msg, ()=>{ S.events = S.events.filter(e=>!batch.includes(e.id)); save(); render(); toast(t('undone')); });
}
function compressImage(file){
  return new Promise((res, rej)=>{
    const r = new FileReader();
    r.onload = () => { const img = new Image(); img.onload = () => { const max=1000, k=Math.min(1, max/Math.max(img.width,img.height)); const c=document.createElement('canvas'); c.width=Math.round(img.width*k); c.height=Math.round(img.height*k); c.getContext('2d').drawImage(img,0,0,c.width,c.height); res(c.toDataURL('image/jpeg',.8)); }; img.onerror=rej; img.src=r.result; };
    r.onerror = rej; r.readAsDataURL(file);
  });
}
function sendMsg(sid, from, text){ (S.threads[sid] ||= []).push({from, text, ts:Date.now(), read:false}); }

const A = {
  nav(el){ ui.view = el.dataset.v; ui.notifOpen=false; if (el.dataset.thread) ui.thread = el.dataset.thread; ui.multi=false; ui.sel.clear(); render(); window.scrollTo({top:0}); },
  role(el){ S.role = el.dataset.v; ui.view=null; ui.modal=null; ui.notifOpen=false; ui.thread=null; ui.multi=false; ui.sel.clear(); save(); render(); },
  lang(el){ S.lang = el.dataset.v; save(); render(); },
  bell(){ if (ui.notifOpen){ ui.notifOpen=false; } else { ui.notifOpen=true; } render(); if (ui.notifOpen){ S.seen[me()] = Date.now(); save(); } },
  tile(el){ const id = el.dataset.id; if (ui.multi){ ui.sel.has(id)?ui.sel.delete(id):ui.sel.add(id); render(); return; } ui.tab='pos'; openModal({type:'give', ids:[id]}); },
  giveAll(){ ui.tab='pos'; openModal({type:'give', ids:S.students.filter(s=>attOn(dayKey(Date.now()),s.id)!=='absent').map(s=>s.id)}); },
  multi(){ ui.multi=!ui.multi; ui.sel.clear(); render(); },
  multiGive(){ if (!ui.sel.size) return; ui.tab='pos'; openModal({type:'give', ids:[...ui.sel]}); },
  tab(el){ ui.tab = el.dataset.v; ui.modal.note = document.getElementById('award-note')?.value || ''; renderModal(); },
  award(el){
    const ids = ui.modal.ids, note = (document.getElementById('award-note')?.value || '').trim();
    award(ids, el.dataset.skill, note);
    el.animate?.([{transform:'scale(1)'},{transform:'scale(1.08)'},{transform:'scale(1)'}],{duration:260});
    if (ids.length===1){ ui.modal.note=''; render(); }
    else { ui.modal=null; ui.multi=false; ui.sel.clear(); render(); }
  },
  undo(){ const f = ui.undoFn; ui.undoFn=null; document.getElementById('toasts').innerHTML=''; f && f(); },
  random(){ spinPick(); },
  pickAgain(){ spinPick(); },
  pickGive(el){ ui.tab='pos'; openModal({type:'give', ids:[el.dataset.id]}); },
  close(){ closeModal(); },
  overlay(el, e){ if (e.target===el) closeModal(); },
  like(el){ const p=S.posts.find(x=>x.id===el.dataset.id), u=me(); const i=p.likes.indexOf(u); i>=0?p.likes.splice(i,1):p.likes.push(u); save(); render(); },
  rmPostImg(){ ui.postImg=null; const txt=document.getElementById('post-text')?.value; render(); if (txt) document.getElementById('post-text').value = txt; },
  pfFilter(el){ ui.pfFilter = el.dataset.v; render(); },
  openPf(el){ openModal({type:'pf', id:el.dataset.id}); },
  pfApprove(el){ const p=S.portfolio.find(x=>x.id===el.dataset.id); p.fb=(document.getElementById('pf-fb')?.value||'').trim(); p.status='approved'; p.ats=Date.now(); save(); closeModal(); render(); toast(t('approvedToast')); },
  pfReturn(el){ const p=S.portfolio.find(x=>x.id===el.dataset.id); p.fb=(document.getElementById('pf-fb')?.value||'').trim(); p.status='returned'; p.ats=Date.now(); save(); closeModal(); render(); toast(t('returnedToast')); },
  pfLike(el){ const p=S.portfolio.find(x=>x.id===el.dataset.id), u=me(); const i=p.likes.indexOf(u); i>=0?p.likes.splice(i,1):p.likes.push(u); save(); render(); },
  pfAdd(){ openModal({type:'pfAdd'}); },
  pfResubmit(el){ const p=S.portfolio.find(x=>x.id===el.dataset.id); const ed=document.getElementById('pf-edit'); if (ed && ed.value.trim()) p.content=ed.value; p.status='pending'; p.ts=Date.now(); p.ats=null; save(); closeModal(); render(); toast(t('workSent')); },
  openAsg(el){ openModal({type:'asg', id:el.dataset.id}); },
  asgNew(){ openModal({type:'asgNew'}); },
  grade(el){ const a=S.assignments.find(x=>x.id===el.dataset.aid), sid=el.dataset.sid, sub=a.subs[sid]; sub.grade=+document.getElementById('g-'+sid).value; sub.fb=document.getElementById('f-'+sid).value.trim(); sub.status='graded'; sub.gts=Date.now(); save(); render(); toast(t('gradeSaved')+': '+esc(stu(sid).first)+' · '+sub.grade+'/10'); },
  att(el){ setAtt(el.dataset.sid, el.dataset.v); render(); },
  attAll(){ S.students.forEach(s=>{ (S.attendance[ui.attDate] ||= {})[s.id]='present'; }); save(); render(); },
  thread(el){ ui.thread = el.dataset.id; render(); },
  threadBack(){ ui.thread=null; render(); },
  tpl(el){ const ta=document.getElementById('msg-text'); if (ta){ ta.value = (ta.value?ta.value+' ':'') + t(el.dataset.v); ta.focus(); } },
  broadcast(){ openModal({type:'broadcast'}); },
  repStudent(el){ ui.reportSid = el.dataset.id; render(); window.scrollTo({top:0}); },
  reset(){ if (!ui.confirmReset){ ui.confirmReset=true; render(); setTimeout(()=>{ if(ui.confirmReset){ ui.confirmReset=false; render(); } }, 5000); return; }
    const lang=S.lang; S = seed(); S.lang=lang; ui.confirmReset=false; ui.view=null; ui.modal=null; ui.thread=null; save(); render(); toast(t('resetDone')); }
};
function setAtt(sid, v){
  const k = ui.attDate; (S.attendance[k] ||= {})[sid] = v;
  if (v==='absent' && S.settings.autoAbsent){
    const done = (S.absentNotified[k] ||= []);
    if (!done.includes(sid)){ done.push(sid); const s=stu(sid); sendMsg(sid, 't', t('autoAbsentMsg',{name:s.first, date:fDate(keyToTs(k))})); toast(t('notifiedParent',{name:esc(s.first)})); }
  }
  save();
}
let spinT;
function spinPick(){
  const pool = S.students.filter(s=>attOn(dayKey(Date.now()),s.id)!=='absent');
  let n = 0; clearInterval(spinT);
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const steps = reduce ? 1 : 14;
  spinT = setInterval(()=>{ n++; const s = pool[(Math.random()*pool.length)|0]; ui.modal = {type:'pick', id:s.id, spinning:n<steps}; renderModal(); if (n>=steps) clearInterval(spinT); }, 80);
}

const F = {
  async post(f){
    const text = f.text.value.trim();
    if (!text && !ui.postImg){ toast(t('needText')); return; }
    S.posts.push({id:uid(), by:'t', ts:Date.now(), text, img:ui.postImg, likes:[], comments:[]});
    ui.postImg=null; save(); render(); toast(t('published'));
  },
  comment(f){ const v=f.c.value.trim(); if(!v) return; S.posts.find(p=>p.id===f.dataset.id).comments.push({by:me(), text:v, ts:Date.now()}); save(); render(); },
  pfComment(f){ const v=f.c.value.trim(); if(!v) return; S.portfolio.find(p=>p.id===f.dataset.id).comments.push({by:me(), text:v, ts:Date.now()}); save(); render(); },
  async pfAddForm(f){
    const title = f.title.value.trim(), type = f.querySelector('input[name=type]:checked').value;
    if (!title){ toast(t('needTitle')); f.title.focus(); return; }
    let content='';
    if (type==='image'){ const file=document.getElementById('pf-file').files[0]; if (file){ try { content = await compressImage(file); } catch(e){ content=''; } } }
    else if (type==='text') content = document.getElementById('pf-text').value.trim();
    else if (type==='code') content = document.getElementById('pf-code').value.replace(/\s+$/,'');
    else content = document.getElementById('pf-link').value.trim();
    if (!content){ toast(t('needContent')); return; }
    S.portfolio.push({id:uid(), sid:S.acting, title, type, content, ts:Date.now(), status:'pending', fb:'', likes:[], comments:[]});
    save(); closeModal(); render(); toast(t('workSent'));
  },
  asgSubmit(f){ const v=f.ans.value.trim(); if(!v){ toast(t('needContent')); return; } const a=S.assignments.find(x=>x.id===f.dataset.id); a.subs[S.acting]={status:'submitted', text:v, ts:Date.now(), grade:null, fb:''}; save(); closeModal(); render(); toast(t('submitted')); },
  asgNewForm(f){ const title=f.title.value.trim(); if(!title){ toast(t('needTitle')); return; } const due=keyToTs(f.due.value)+18*36e5; S.assignments.push({id:uid(), title, desc:f.desc.value.trim(), due, created:Date.now(), subs:{}}); save(); closeModal(); render(); toast(t('asgCreated')); },
  msg(f){ const v=f.m.value.trim(); if(!v) return; sendMsg(f.dataset.id, S.role==='teacher'?'t':'p', v); save(); render(); document.getElementById('msg-text')?.focus(); },
  broadcastForm(f){ const v=f.m.value.trim(); if(!v) return; S.students.forEach(s=>sendMsg(s.id,'t',v)); save(); closeModal(); render(); toast(t('broadcastSent',{n:S.students.length})); }
};

const C = {
  acting(el){ S.acting = el.value; ui.modal=null; save(); render(); },
  sort(el){ ui.sort = el.value; render(); },
  async postImg(el){ const file = el.files[0]; if (!file) return; const txt=document.getElementById('post-text')?.value; try { ui.postImg = await compressImage(file); } catch(e){} render(); if (txt) document.getElementById('post-text').value = txt; },
  pfStudent(el){ ui.pfStudent = el.value; render(); },
  pfType(el){ document.querySelectorAll('[data-pane]').forEach(p=>p.hidden = p.dataset.pane!==el.value); },
  attDate(el){ if (el.value){ ui.attDate = el.value; render(); } },
  autoAbsent(el){ S.settings.autoAbsent = el.checked; save(); },
  reportSid(el){ ui.reportSid = el.value; render(); }
};

document.addEventListener('click', e=>{
  const el = e.target.closest('[data-act]');
  if (ui.notifOpen && !e.target.closest('.notif') && !e.target.closest('[data-act="bell"]')){ ui.notifOpen=false; if (!el) { render(); return; } }
  if (!el) return;
  const fn = A[el.dataset.act]; if (fn) fn(el, e);
});
document.addEventListener('submit', e=>{ const f=e.target; if (!f.dataset.form) return; e.preventDefault(); F[f.dataset.form]?.(f); });
document.addEventListener('change', e=>{ const el=e.target.closest('[data-change]'); if (el) C[el.dataset.change]?.(el); });
document.addEventListener('keydown', e=>{
  if (e.key==='Escape'){ if (ui.modal){ clearInterval(spinT); closeModal(); } else if (ui.notifOpen){ ui.notifOpen=false; render(); } }
  if (e.key==='Enter' && !e.shiftKey && e.target.id==='msg-text'){ e.preventDefault(); e.target.form.requestSubmit(); }
});
