

const MIN = 60 * 1000;        // бір минут (миллисекунд)
const HOUR = 60 * MIN;        // бір сағат
const DAY = 24 * HOUR;        // бір тәулік
const LS_KEY = 'qonyrau-demo-v1';   // localStorage-тағы кілт

// Иконкалар: әр иконканың SVG суреті
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

// icon('bell', 18) → дайын <svg> иконка
function icon(name, size = 18) {
  return `<svg class="ic" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[name] || ''}</svg>`;
}


/* =========================================================
   2. СӨЗДІК: сайттағы барлық жазулар екі тілде
   t('nav_class') функциясы таңдалған тілдегі мәтінді береді
   ========================================================= */

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
  mother:'анасы', father:'әкесі', comments:'пікір', you:'Сіз', today:'Бүгін', lang:'Тіл', brand:'Қоңырау'
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
  mother:'мама', father:'папа', comments:'комм.', you:'Вы', today:'Сегодня', lang:'Язык', brand:'Қоңырау'
 },
 en:{
  tagline:'A bridge between school and family',
  role_teacher:'Teacher', role_parent:'Parent', role_student:'Student',
  as_parent:'Child', as_student:'Student',
  nav_class:'Class', nav_feed:'Class feed', nav_portfolio:'Portfolio', nav_assignments:'Assignments',
  nav_attendance:'Attendance', nav_messages:'Messages', nav_reports:'Reports', nav_home:'Home',
  nav_myday:'My day', nav_report:'Progress',
  last7:'last 7 days', goal:'Class goal', goalOf:'{a} / {b} points',
  whole:'Whole class', random:'Random student', multi:'Select several', multiDone:'Stop selecting',
  selected:'Selected: {n}', give:'Give points', tabPos:'Praise', tabNeg:'Needs work',
  note:'Note (optional)', notePh:'For example: explained the code to the group',
  recent:'Recent points', noRecent:'No points yet', undo:'Undo', undone:'Undone',
  absentTag:'Absent', lateTag:'Late', sortName:'By name', sortPts:'By points',
  again:'Pick again', close:'Close', studentsN:'{n} students', pts:'points', ptsShort:'pts',
  awardedToast:'{who}: {v} · {skill}', awardedMany:'{n} students: {v} · {skill}',
  postPh:'What is new in class? Share with parents…', addPhoto:'Add photo', removePhoto:'Remove photo',
  publish:'Publish', published:'Post published', like:'Like', commentPh:'Write a comment…', send:'Send',
  needText:'Write some text or add a photo',
  pending:'Waiting for review', approved:'Published', returned:'Returned for changes',
  pfPending:'To review', pfAll:'All work', allStudents:'All students',
  approve:'Approve', returnBtn:'Return for changes', fbPh:'Write feedback for the student…', teacherFb:'Teacher feedback',
  approvedToast:'Work approved and visible to parents', returnedToast:'Work returned for changes',
  addWork:'Add work', workTitle:'Title', workTitlePh:'For example: my Scratch game',
  type_image:'Photo', type_text:'Text', type_code:'Code', type_link:'Link',
  chooseFile:'Choose an image', textPh:'Write your work here…', codePh:'# Paste your Python code', linkPh:'https://scratch.mit.edu/projects/…',
  submitWork:'Send to teacher', workSent:'Work sent to the teacher', resubmit:'Fix and send again',
  emptyPf:'No work yet', emptyPending:'All work has been reviewed', needTitle:'Add a title', needContent:'Add the content of your work',
  myWorks:'My work', childWorks:'Work: {name}', pfHintParent:'You only see work approved by the teacher.',
  asgNew:'New assignment', asgTitle:'Topic', asgDesc:'Description', asgDue:'Due date', create:'Create', asgCreated:'Assignment created',
  dueOn:'Due: {d}', overdue:'Overdue', submittedN:'{a}/{b} submitted', gradedN:'{n} graded',
  st_none:'Not submitted', st_submitted:'Submitted', st_graded:'Graded',
  answer:'Answer', answerPh:'Write your answer or a link to your project…', submit:'Submit', submitted:'Assignment submitted',
  grade:'Grade', save:'Save', gradeSaved:'Grade saved', fbShort:'Feedback', student:'Student', status:'Status',
  attTitle:'Attendance', present:'Present', late:'Late', absent:'Absent', allPresent:'Everyone is present',
  notMarked:'Not marked', date:'Date',
  autoAbsent:'Tell parents automatically when a student is absent',
  autoAbsentMsg:'Hello! {name} was not at the informatics lesson today ({date}). If you know the reason, please let me know.',
  notifiedParent:'Message sent to the parents of {name}',
  broadcast:'All parents', broadcastTitle:'Announcement to all parents', broadcastSent:'Sent to {n} parents',
  msgPh:'Write a message…', noMsgs:'No messages yet. Write first.', pickThread:'Choose a conversation',
  back:'Back', tpl1:'Did great work in class today!', tpl2:'Please check the homework.', tpl3:'Do you have time for a short talk?',
  tplP1:'Thank you!', tplP2:'Cannot come to the lesson today.', tplP3:'When is a good time to talk?',
  teacherRole:'Informatics teacher',
  reportFor:'Report for', ptsWeek:'Points · 7 days', posShare:'Positive', attRate:'Attendance', asgDone:'Assignments', avgGrade:'Average grade',
  byDay:'Points by day', bySkill:'By skill', studentsTable:'Students', nameCol:'Name',
  posL:'Praise', negL:'Needs work', noData:'No data',
  hello:'Hello, {name}!', helloStudent:'Hi, {name}!',
  todayAtt:'Today at school', todayFeed:'Points today', noToday:'No points yet today',
  upcoming:'Assignments', latestPost:'Class news', openFeed:'Open feed', allWorks:'See all',
  myFeedback:'Latest teacher feedback', toDo:'To do', classGoalHint:'The whole class collects together',
  notifs:'Notifications', noNotifs:'No new notifications',
  n_post:'The teacher added a post to the feed', n_pfApproved:'“{title}” was published in the portfolio', n_pfReturned:'“{title}” was returned for changes',
  n_graded:'“{title}”: grade {g}/10', n_msg:'{name}: new message', n_pfPending:'{name} sent new work', n_sub:'{name} submitted “{title}”',
  resetDemo:'Reset demo data', resetConfirm:'Yes, reset everything', resetDone:'Demo data has been reset',
  demoNote:'Demo version: data is saved only in this browser. Switch roles to see the system from three sides.',
  saveFail:'Could not save: browser storage is full. Try a smaller photo.',
  just:'just now', minAgo:'{n} min ago', hAgo:'{n} h ago', yesterday:'yesterday',
  mother:'mother', father:'father', comments:'comments', you:'You', today:'Today', lang:'Language', brand:'Qonyrau'
 }
};


/* =========================================================
   3. ДАҒДЫЛАР: v — ұпай саны, ic — иконка
   ========================================================= */

const SKILLS = [
  {id:'active', kk:'Белсенділік', ru:'Активность', en:'Active in class', v:1, ic:'zap'},
  {id:'help', kk:'Досына көмек', ru:'Помог другу', en:'Helped a friend', v:1, ic:'heart'},
  {id:'task', kk:'Тапсырманы орындады', ru:'Выполнил задание', en:'Completed the task', v:1, ic:'check'},
  {id:'creative', kk:'Шығармашылық', ru:'Креативность', en:'Creativity', v:2, ic:'bulb'},
  {id:'team', kk:'Топтық жұмыс', ru:'Работа в команде', en:'Teamwork', v:1, ic:'users'},
  {id:'grit', kk:'Табандылық', ru:'Упорство', en:'Perseverance', v:1, ic:'mountain'},
  {id:'phone', kk:'Сабақта телефон', ru:'Телефон на уроке', en:'Phone in class', v:-1, ic:'phone'},
  {id:'late', kk:'Кешігу', ru:'Опоздание', en:'Late', v:-1, ic:'clock'},
  {id:'nohw', kk:'Үй жұмысы жоқ', ru:'Нет домашки', en:'No homework', v:-1, ic:'bookx'},
  {id:'noise', kk:'Сабаққа кедергі', ru:'Мешает уроку', en:'Disturbed the lesson', v:-1, ic:'mega'}
];

// skill('help') → «Досына көмек» дағдысы
function skill(id) {
  const found = SKILLS.find(s => s.id === id);
  return found || SKILLS[0];
}


/* =========================================================
   4. КӨМЕКШІ ФУНКЦИЯЛАР
   ========================================================= */

// S — барлық деректер (оқушылар, ұпайлар, хабарламалар...). localStorage-қа сақталады.
let S;

// ui — экранның уақытша күйі: қай бет ашық, қай терезе ашық т.б. Сақталмайды.
const ui = {
  screen: 'landing',    // 'landing' — бастапқы бет, 'app' — кабинет
  menuOpen: false,      // телефондағы мәзір
  resOpen: false,       // «Ресурстар» тізімі
  view: null,           // кабинеттің қай бөлімі ашық
  modal: null,          // қай терезе ашық
  multi: false,         // бірнеше оқушыны таңдау режимі
  sel: new Set(),       // таңдалған оқушылар
  sort: 'name',         // оқушыларды сұрыптау
  tab: 'pos',           // ұпай терезесіндегі қойынды: мақтау / дамыту
  pfFilter: 'pending',  // портфолио сүзгісі
  pfStudent: 'all',
  thread: null,         // ашық тұрған чат
  reportSid: 'all',     // есеп кім бойынша
  attDate: null,        // қатысу журналының күні
  notifOpen: false,     // хабарландырулар тізімі ашық па
  confirmReset: false,
  postImg: null         // таспаға қосылатын сурет
};

// Мәтінді таңдалған тілде алу. vars: {name:'Әлихан'} → «{name}» орнына қойылады
function t(key, vars = {}) {
  let text = T[S.lang][key];
  if (text === undefined) text = T.kk[key];
  if (text === undefined) text = key;
  for (const name in vars) {
    text = text.split('{' + name + '}').join(vars[name]);
  }
  return text;
}

// L(x): x жай мәтін болса — сол күйі, {kk:'..', ru:'..'} болса — керек тілдегісі
function L(x) {
  if (x === null || x === undefined) return '';
  if (typeof x === 'string') return x;
  return x[S.lang] || x.kk;
}

// tx('қазақша', 'по-русски', 'in English') — қазіргі тілдегі мәтінді таңдау
function tx(kk, ru, en) {
  if (S.lang === 'en') return en;
  if (S.lang === 'ru') return ru;
  return kk;
}

// Демо деректер (оқушы аттары, хабарламалар) ағылшынша ма?
function isEnContent() {
  return typeof S !== 'undefined' && S !== null && S.content === 'en';
}

// esc(): пайдаланушы жазған мәтінді HTML-ге қауіпсіз қою (< > белгілерін ауыстыру)
function esc(text) {
  if (text === null || text === undefined) return '';
  return String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

// Кездейсоқ id: 'k3j9x0aq'
function uid() {
  return Math.random().toString(36).slice(2, 10);
}

// 5 → '05'
function pad(n) {
  return String(n).padStart(2, '0');
}

// Уақыттан күн кілті: '2026-10-14'
function dayKey(ts) {
  const d = new Date(ts);
  return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
}

// Күннің басы (00:00)
function startOfDay(ts) {
  const d = new Date(ts);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

// '2026-10-14' → уақыт (миллисекунд)
function keyToTs(key) {
  const parts = key.split('-');
  return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2])).getTime();
}

// Күнді таңдалған тілде жазу
// Көп браузерде қазақ тілінің ай/күн атаулары жоқ («M10», «WED» шығады),
// сондықтан қазақша атауларды өзіміз жазамыз.
const KK_MONTHS = ['қаңтар', 'ақпан', 'наурыз', 'сәуір', 'мамыр', 'маусым',
                   'шілде', 'тамыз', 'қыркүйек', 'қазан', 'қараша', 'желтоқсан'];
const KK_DAYS = ['жексенбі', 'дүйсенбі', 'сейсенбі', 'сәрсенбі', 'бейсенбі', 'жұма', 'сенбі'];
const KK_DAYS_SHORT = ['Жс', 'Дс', 'Сс', 'Ср', 'Бс', 'Жм', 'Сб'];

function fmt(ts, options) {
  if (S.lang === 'ru') {
    return new Date(ts).toLocaleString('ru-RU', options);
  }
  if (S.lang === 'en') {
    return new Date(ts).toLocaleString('en-GB', options);
  }
  const d = new Date(ts);
  const month = KK_MONTHS[d.getMonth()];

  if (options.hour) return pad(d.getHours()) + ':' + pad(d.getMinutes());   // 15:30
  if (options.year) return month[0].toUpperCase() + month.slice(1) + ' ' + d.getFullYear(); // Қазан 2026
  if (options.weekday && !options.day) {
    if (options.weekday === 'long') return KK_DAYS[d.getDay()];            // сәрсенбі
    if (options.weekday === 'narrow') return KK_DAYS_SHORT[d.getDay()][0]; // С
    return KK_DAYS_SHORT[d.getDay()];                                      // Ср
  }
  if (!options.day) return options.month === 'short' ? month.slice(0, 3) : month; // қаз
  let text = d.getDate() + ' ' + month;                                    // 14 қазан
  if (options.weekday) text += ', ' + KK_DAYS[d.getDay()];                 // 14 қазан, сәрсенбі
  return text;
}

function fDate(ts) {
  return fmt(ts, { day: 'numeric', month: 'long' });     // «14 қазан»
}

function fTime(ts) {
  return fmt(ts, { hour: '2-digit', minute: '2-digit' }); // «15:30»
}

// Қанша уақыт бұрын: «қазір», «5 мин бұрын», «кеше, 15:30»
function rel(ts) {
  const minutes = Math.round((Date.now() - ts) / MIN);
  if (minutes < 1) return t('just');
  if (minutes < 60) return t('minAgo', { n: minutes });
  if (dayKey(ts) === dayKey(Date.now())) return t('hAgo', { n: Math.round(minutes / 60) });
  if (dayKey(ts) === dayKey(Date.now() - DAY)) return t('yesterday') + ', ' + fTime(ts);
  return fDate(ts);
}

// ---------- Адамдар ----------

// Оқушыны id бойынша табу
function stu(id) {
  return S.students.find(s => s.id === id);
}

function fullName(s) {
  return s.first + ' ' + s.last;
}

const TEACHER = { first: 'Айсұлу', last: 'Апай', color: '#C68A00' };

// Мұғалімнің аты демо деректердің тіліне сәйкес болады
function syncTeacher() {
  TEACHER.first = isEnContent() ? 'Aisulu' : 'Айсұлу';
  TEACHER.last = isEnContent() ? 'Apai' : 'Апай';
}

// Аватар: түсті шаршы ішінде аты-жөнінің бас әріптері
function av(person, size = 40) {
  let letters = (person.first || '?')[0];
  if (person.last) letters += person.last[0];
  return `<span class="av" style="--c:${person.color};--s:${size}px" aria-hidden="true">${esc(letters.toUpperCase())}</span>`;
}

// Ата-ананы аватарға арналған «адам» объектісі ретінде алу
function parentObj(s) {
  return { first: s.parent, last: '', color: s.color };
}

// «Әлихан — анасы»
function parentLabel(s) {
  const who = s.rel === 'm' ? t('mother') : t('father');
  return s.first + ' — ' + who;
}

// Пайдаланушы коды: 't' — мұғалім, 'p1' — 1-оқушының ата-анасы, 's1' — 1-оқушы
function me() {
  if (S.role === 'teacher') return 't';
  if (S.role === 'parent') return 'p' + S.acting;
  return 's' + S.acting;
}

function userName(code) {
  if (code === 't') return S.cls.teacher;
  const s = stu(code.slice(1));
  if (!s) return '—';
  if (code[0] === 'p') return s.parent;
  return fullName(s);
}

function userAv(code, size) {
  if (code === 't') return av(TEACHER, size);
  const s = stu(code.slice(1));
  if (!s) return av({ first: '?', color: '#888' }, size);
  if (code[0] === 'p') return av(parentObj(s), size);
  return av(s, size);
}

// ---------- Демо суреттер (SVG) ----------

// Қарапайым лабиринт суреті
function mazeSVG(variant) {
  const bg = variant === 31 ? '#123A2E' : '#2B1E5C';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 310">
    <rect width="460" height="310" fill="${bg}"/>
    <path d="M20 20H440V290H20Z M80 20V200 M80 200H200 M140 80V140 M140 80H320 M260 80V260 M200 140H260 M200 200V290 M320 140H440 M320 140V230 M320 230H380 M380 80V230"
      stroke="#7FE3F0" stroke-width="6" stroke-linecap="round" fill="none"/>
    <circle cx="50" cy="50" r="12" fill="#F6BD2C"/>
    <rect x="400" y="255" width="22" height="22" rx="5" fill="#5EE08F"/>
  </svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

// Блок-схема суреті: «Шай демдеу алгоритмі»
function flowSVG(en){
  // en === true болса, блок-схемадағы жазулар ағылшынша
  if (en === undefined) en = isEnContent();
  const w = en
    ? ['Start', 'Boil water', 'Is it boiling?', 'Wait 1 min', 'no', 'yes', 'Add tea and brew', 'End']
    : ['Басы', 'Суды қайнату', 'Қайнады ма?', '1 мин күту', 'жоқ', 'иә', 'Шай салып, демдеу', 'Соңы'];
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 300" font-family="Arial, sans-serif" font-size="13"><rect width="100%" height="100%" fill="#FFFDF5"/>
  <defs><marker id="a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 10 5 0 10z" fill="#13213C"/></marker></defs>
  <g stroke="#13213C" stroke-width="2" fill="none" marker-end="url(#a)"><path d="M120 46v22"/><path d="M120 108v20"/><path d="M120 190v22"/><path d="M168 159h70"/><path d="M290 140V82H170"/></g>
  <rect x="70" y="14" width="100" height="32" rx="16" fill="#D7F0E3" stroke="#13213C" stroke-width="2"/><text x="120" y="35" text-anchor="middle">${w[0]}</text>
  <rect x="50" y="70" width="140" height="38" fill="#DCEEF7" stroke="#13213C" stroke-width="2"/><text x="120" y="94" text-anchor="middle">${w[1]}</text>
  <path d="M120 130 168 159 120 188 72 159z" fill="#FFF1C7" stroke="#13213C" stroke-width="2"/><text x="120" y="163" text-anchor="middle">${w[2]}</text>
  <rect x="240" y="140" width="100" height="38" fill="#FBE3DF" stroke="#13213C" stroke-width="2"/><text x="290" y="164" text-anchor="middle">${w[3]}</text>
  <text x="200" y="152" fill="#C63A32">${w[4]}</text><text x="128" y="206" fill="#16855A">${w[5]}</text>
  <rect x="50" y="214" width="140" height="38" fill="#DCEEF7" stroke="#13213C" stroke-width="2"/><text x="120" y="238" text-anchor="middle">${w[6]}</text>
  <path d="M120 252v16" stroke="#13213C" stroke-width="2" marker-end="url(#a)"/><rect x="70" y="270" width="100" height="26" rx="13" fill="#D7F0E3" stroke="#13213C" stroke-width="2"/><text x="120" y="288" text-anchor="middle">${w[7]}</text></svg>`;
  return 'data:image/svg+xml;utf8,'+encodeURIComponent(svg);
}


/* =========================================================
   5. ДЕМО ДЕРЕКТЕР: сайт алғаш ашылғанда қолданылады
   ========================================================= */

// min мен max аралығындағы кездейсоқ бүтін сан
function randomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

// p ықтималдықпен true (мысалы, chance(0.2) — 20%)
function chance(p) {
  return Math.random() < p;
}

function seed(lang) {
  const now = Date.now();
  // Ағылшынша демо ма? (ENG тілі таңдалса)
  const E = lang === 'en';
  // pick('қазақша', 'English') — демо мәтінді тілге қарай таңдау
  const pick = (kk, en) => (E ? en : kk);

  // ----- 1) Оқушылар: [аты, тегі, ата-анасы, m — анасы / f — әкесі] -----
  const namesKk = [
    ['Әлихан', 'Серікұлы', 'Гүлнар', 'm'], ['Аружан', 'Қайратқызы', 'Ерлан', 'f'],
    ['Дінмұхаммед', 'Асқарұлы', 'Сәуле', 'm'], ['Айым', 'Нұрланқызы', 'Динара', 'm'],
    ['Нұрасыл', 'Бауыржанұлы', 'Бауыржан', 'f'], ['Томирис', 'Ержанқызы', 'Ләззат', 'm'],
    ['Ернұр', 'Маратұлы', 'Мадина', 'm'], ['Інжу', 'Саматқызы', 'Самат', 'f'],
    ['Арсен', 'Дәуренұлы', 'Әсел', 'm'], ['Медина', 'Талғатқызы', 'Талғат', 'f'],
    ['Санжар', 'Ғалымұлы', 'Жанар', 'm'], ['Дария', 'Арманқызы', 'Арман', 'f'],
    ['Ақбота', 'Ерболқызы', 'Айгүл', 'm'], ['Елдос', 'Нұрлыбекұлы', 'Нұрлыбек', 'f'],
    ['Камила', 'Ринатқызы', 'Алия', 'm'], ['Бекзат', 'Қанатұлы', 'Қанат', 'f']
  ];
  const namesEn = [
    ['Alikhan', 'Serikuly', 'Gulnar', 'm'], ['Aruzhan', 'Kairatkyzy', 'Erlan', 'f'],
    ['Dinmukhammed', 'Askaruly', 'Saule', 'm'], ['Aiym', 'Nurlankyzy', 'Dinara', 'm'],
    ['Nurasyl', 'Bauyrzhanuly', 'Bauyrzhan', 'f'], ['Tomiris', 'Erzhankyzy', 'Lazzat', 'm'],
    ['Ernur', 'Maratuly', 'Madina', 'm'], ['Inzhu', 'Samatkyzy', 'Samat', 'f'],
    ['Arsen', 'Daurenuly', 'Assel', 'm'], ['Medina', 'Talgatkyzy', 'Talgat', 'f'],
    ['Sanzhar', 'Galymuly', 'Zhanar', 'm'], ['Dariya', 'Armankyzy', 'Arman', 'f'],
    ['Akbota', 'Erbolkyzy', 'Aigul', 'm'], ['Eldos', 'Nurlybekuly', 'Nurlybek', 'f'],
    ['Kamila', 'Rinatkyzy', 'Aliya', 'm'], ['Bekzat', 'Kanatuly', 'Kanat', 'f']
  ];
  const names = E ? namesEn : namesKk;
  const colors = ['#2F6FD0', '#0E8F9C', '#D9682B', '#7656D6', '#C8406A', '#2E8B4F', '#A87212', '#4F5FBF'];

  const students = [];
  names.forEach((n, i) => {
    students.push({
      id: String(i + 1),
      first: n[0], last: n[1], parent: n[2], rel: n[3],
      color: colors[i % colors.length]
    });
  });

  // ----- 2) Соңғы 7 күндегі ұпайлар (кездейсоқ) -----
  const goodSkills = ['active', 'help', 'task', 'creative', 'team', 'grit'];
  const badSkills = ['phone', 'late', 'nohw', 'noise'];
  const events = [];

  for (let d = 6; d >= 0; d--) {
    const dayStart = startOfDay(now - d * DAY);
    students.forEach(s => {
      const count = randomInt(0, 2);           // күніне 0–2 белгі
      for (let k = 0; k < count; k++) {
        const list = chance(0.15) ? badSkills : goodSkills;
        const skillId = list[randomInt(0, list.length - 1)];
        let ts = dayStart + randomInt(9, 15) * HOUR;   // сабақ уақыты 9:00–15:00
        if (ts > now) ts = now - randomInt(5, 200) * MIN;
        events.push({ id: uid(), sid: s.id, skill: skillId, v: skill(skillId).v, ts: ts, note: '' });
      }
    });
  }
  events.push({ id: uid(), sid: '1', skill: 'help', v: 1, ts: now - 80 * MIN, note: pick('Ернұрға циклды түсіндіріп берді', 'Explained loops to Ernur') });
  events.push({ id: uid(), sid: '1', skill: 'creative', v: 2, ts: now - 50 * MIN, note: pick('Лабиринтке өзі жаңа деңгей ойлап тапты', 'Invented a new level for the maze') });

  // ----- 3) Қатысу: соңғы 10 күн -----
  const attendance = {};
  for (let d = 9; d >= 0; d--) {
    const key = dayKey(now - d * DAY);
    attendance[key] = {};
    students.forEach(s => {
      const r = Math.random();
      let status = 'present';
      if (r > 0.95) status = 'absent';
      else if (r > 0.88) status = 'late';
      attendance[key][s.id] = status;
    });
  }
  // бүгін: бәрі келді, тек 12-оқушы жоқ, 7-оқушы кешікті
  const today = dayKey(now);
  students.forEach(s => { attendance[today][s.id] = 'present'; });
  attendance[today]['12'] = 'absent';
  attendance[today]['7'] = 'late';

  // ----- 4) Тапсырмалар -----
  // Оқушылардың жауаптарын кездейсоқ жасау
  function makeSubs(chanceSubmit, chanceGraded, answer) {
    const subs = {};
    students.forEach(s => {
      if (!chance(chanceSubmit)) return;
      const graded = chance(chanceGraded);
      subs[s.id] = {
        status: graded ? 'graded' : 'submitted',
        text: answer,
        ts: now - randomInt(1, 3) * DAY,
        grade: graded ? randomInt(6, 10) : null,
        fb: '',
        gts: graded ? now - DAY : null
      };
    });
    return subs;
  }

  const a1 = {
    id: 'a1',
    title: { kk: 'Scratch: лабиринт ойыны', ru: 'Scratch: игра-лабиринт', en: 'Scratch: maze game' },
    desc: {
      kk: 'Кейіпкер көрсеткі пернелерімен қозғалып, қабырғаға тигенде бастапқы орынға оралатын ойын жасаңдар. Жобаның сілтемесін жіберіңдер.',
      ru: 'Сделайте игру, где герой двигается стрелками и возвращается на старт при касании стены. Пришлите ссылку на проект.',
      en: 'Make a game where the hero moves with the arrow keys and goes back to the start when it touches a wall. Send the link to your project.'
    },
    due: startOfDay(now + 3 * DAY) + 18 * HOUR,
    created: now - 4 * DAY,
    subs: makeSubs(0.6, 0.35, 'https://scratch.mit.edu/projects/1048576000/')
  };
  const a2 = {
    id: 'a2',
    title: { kk: 'Блок-схема: шай демдеу алгоритмі', ru: 'Блок-схема: алгоритм заваривания чая', en: 'Flowchart: how to make tea' },
    desc: {
      kk: 'Шай демдеу алгоритмін блок-схема түрінде салыңдар. Кем дегенде бір тармақталу (шарт) болуы керек.',
      ru: 'Нарисуйте алгоритм заваривания чая в виде блок-схемы. Должно быть хотя бы одно ветвление (условие).',
      en: 'Draw the algorithm for making tea as a flowchart. It must have at least one branch (condition).'
    },
    due: startOfDay(now - 2 * DAY) + 18 * HOUR,
    created: now - 9 * DAY,
    subs: makeSubs(0.9, 0.85, pick('Блок-схеманы дәптерге салып, суретке түсірдім.', 'I drew the flowchart in my notebook and took a photo.'))
  };
  const a3 = {
    id: 'a3',
    title: { kk: 'Python: екі санның қосындысы', ru: 'Python: сумма двух чисел', en: 'Python: sum of two numbers' },
    desc: {
      kk: 'input() арқылы екі сан енгізіп, олардың қосындысын шығаратын бағдарлама жазыңдар.',
      ru: 'Напишите программу, которая вводит два числа через input() и выводит их сумму.',
      en: 'Write a program that reads two numbers with input() and prints their sum.'
    },
    due: startOfDay(now + 6 * DAY) + 18 * HOUR,
    created: now - 1 * DAY,
    subs: makeSubs(0.2, 0, 'a = int(input())\nb = int(input())\nprint(a + b)')
  };
  // 1-оқушының (Әлихан) жауаптары нақты
  a1.subs['1'] = { status: 'submitted', text: 'https://scratch.mit.edu/projects/1048576003/', ts: now - 5 * HOUR, grade: null, fb: '' };
  a2.subs['1'] = { status: 'graded', text: pick('Блок-схеманы портфолиоға да салдым.', 'I also added the flowchart to my portfolio.'), ts: now - 3 * DAY, grade: 9, fb: pick('Шарт блогы дұрыс, жарайсың!', 'The condition block is correct, well done!'), gts: now - 30 * HOUR };
  delete a3.subs['1'];

  // ----- 5) Портфолио -----
  const maze = mazeSVG(7);
  const portfolio = [
    { id: uid(), sid: '1', title: pick('Лабиринт ойыны — 1-деңгей', 'Maze game — level 1'), type: 'image', content: maze,
      ts: now - 26 * HOUR, status: 'approved', ats: now - 24 * HOUR,
      fb: pick('Қабырғаларды өте мұқият салғансың, ойнау қызық!', 'You drew the walls very carefully, it is fun to play!'),
      likes: ['p1'], comments: [{ by: 'p1', text: pick('Үйде бәріміз ойнап көрдік 😊', 'We all played it at home 😊'), ts: now - 20 * HOUR }] },
    { id: uid(), sid: '1', title: pick('Шай демдеу блок-схемасы', 'Flowchart: making tea'), type: 'image', content: flowSVG(E),
      ts: now - 3 * DAY, status: 'approved', ats: now - 2.8 * DAY,
      fb: pick('Шарт блогы дұрыс. Келесіде «Иә/Жоқ» тармақтарын көрсеткімен белгіле.', 'The condition block is correct. Next time, mark the “Yes/No” branches with arrows.'), likes: [], comments: [] },
    { id: uid(), sid: '1', title: pick('Интернеттегі қауіпсіздік ережелері', 'Internet safety rules'), type: 'text',
      content: pick('1. Құпиясөзді ешкімге айтпаймын.\n2. Бейтаныс сілтемелерді ашпаймын.\n3. Жеке суреттерімді бөгде адамдарға жібермеймін.\n4. Бірдеңе қорқытса, ата-анама немесе мұғалімге айтамын.', '1. I never tell anyone my password.\n2. I do not open links from strangers.\n3. I do not send my photos to people I do not know.\n4. If something scares me, I tell my parents or my teacher.'),
      ts: now - 2 * HOUR, status: 'pending', fb: '', likes: [], comments: [] },
    { id: uid(), sid: '2', title: pick('Сәлемдесу бағдарламасы', 'Greeting program'), type: 'code',
      content: pick('name = input("Атың кім? ")\nprint("Сәлем,", name + "!")\nprint("Информатика сабағына қош келдің!")', 'name = input("What is your name? ")\nprint("Hello,", name + "!")\nprint("Welcome to the informatics lesson!")'),
      ts: now - 2 * DAY, status: 'approved', ats: now - 1.9 * DAY, fb: pick('Тамаша! f-string қолданып көр.', 'Great! Try using an f-string.'), likes: ['p2'], comments: [] },
    { id: uid(), sid: '6', title: pick('Менің Scratch жобам', 'My Scratch project'), type: 'link', content: 'https://scratch.mit.edu/projects/1048576117/',
      ts: now - 5 * HOUR, status: 'pending', fb: '', likes: [], comments: [] },
    { id: uid(), sid: '4', title: pick('Компьютердің негізгі құрылғылары', 'The main parts of a computer'), type: 'text',
      content: pick('Компьютердің негізгі құрылғылары: процессор — ақпаратты өңдейді, жедел жады — уақытша сақтайды, қатты диск — ұзақ сақтайды. Енгізу құрылғылары: пернетақта, тінтуір. Шығару құрылғылары: монитор, принтер.', 'The main parts of a computer: the processor works with information, RAM keeps it for a short time, the hard drive keeps it for a long time. Input devices: keyboard, mouse. Output devices: monitor, printer.'),
      ts: now - 7 * HOUR, status: 'pending', fb: '', likes: [], comments: [] },
    { id: uid(), sid: '3', title: pick('Цикл: 1-ден 10-ға дейін', 'Loop: from 1 to 10'), type: 'code', content: 'for i in range(1, 10):\n    print(i)',
      ts: now - 30 * HOUR, status: 'returned', ats: now - 28 * HOUR,
      fb: pick('Бағдарлама 10 санын шығармай тұр. range() функциясының соңғы шекарасын тексер.', 'The program does not print 10. Check the end value of range().'), likes: [], comments: [] },
    { id: uid(), sid: '9', title: pick('Лабиринт: қиын деңгей', 'Maze: hard level'), type: 'image', content: mazeSVG(31),
      ts: now - 2 * DAY, status: 'approved', ats: now - 1.8 * DAY, fb: pick('Жолдар өте шатасқан, керемет!', 'The paths are really tricky, excellent!'), likes: ['p9'], comments: [] }
  ];

  // ----- 6) Сынып таспасы -----
  const posts = [
    { id: uid(), by: 't', ts: now - 2 * HOUR, img: maze,
      text: { kk: 'Бүгін 7 «А» сыныбы Scratch-та алғашқы лабиринт ойындарын жасады! Әр оқушы өз кейіпкерін бағдарламалап, кедергілер қосты. Жұмыстарды балаңыздың портфолиосынан көре аласыз.',
              ru: 'Сегодня 7 «А» сделал первые игры-лабиринты в Scratch! Каждый ученик запрограммировал своего героя и добавил препятствия. Работы можно посмотреть в портфолио ребёнка.',
              en: 'Today class 7 “A” made their first maze games in Scratch! Every student programmed their own hero and added obstacles. You can see the work in your child’s portfolio.' },
      likes: ['p1', 'p2', 'p5', 'p9'],
      comments: [
        { by: 'p1', text: pick('Әлихан үйде де ойынын көрсетті, өте риза болдық!', 'Alikhan showed us his game at home too, we are very happy!'), ts: now - 90 * MIN },
        { by: 'p9', text: pick('Рахмет, апай! Арсен кешке дейін лабиринт салды.', 'Thank you! Arsen was building mazes all evening.'), ts: now - 40 * MIN }
      ] },
    { id: uid(), by: 't', ts: now - 26 * HOUR, img: null,
      text: { kk: 'Еске саламыз: бейсенбі күні 18:00-де информатика кабинетінде (214) ата-аналар жиналысы өтеді. Тақырып — балалардың цифрлық қауіпсіздігі.',
              ru: 'Напоминаем: в четверг в 18:00 в кабинете информатики (214) пройдёт родительское собрание. Тема — цифровая безопасность детей.',
              en: 'A reminder: the parents’ meeting is on Thursday at 18:00 in the informatics room (214). Topic: children’s digital safety.' },
      likes: ['p3', 'p4', 'p12'],
      comments: [{ by: 'p4', text: pick('Міндетті түрде келемін.', 'I will definitely come.'), ts: now - 24 * HOUR }] },
    { id: uid(), by: 't', ts: now - 3 * DAY, img: null,
      text: { kk: 'Олимпиадаға дайындық үйірмесі сейсенбі мен жұма күндері 15:30-да. Python бойынша қосымша есептер портфолио бөліміне жүктеледі.',
              ru: 'Кружок подготовки к олимпиаде — по вторникам и пятницам в 15:30. Дополнительные задачи по Python будут появляться в разделе портфолио.',
              en: 'The olympiad club meets on Tuesdays and Fridays at 15:30. Extra Python tasks will appear in the portfolio section.' },
      likes: ['p6'], comments: [] }
  ];

  // ----- 7) Хабарламалар (кілт — оқушының id) -----
  const threads = {
    '1': [
      { from: 't', text: pick('Сәлеметсіз бе, Гүлнар! Әлихан бүгін топтағы досына циклды түсіндіріп, көп көмектесті. Тәрбиеңізге рахмет!', 'Hello, Gulnar! Today Alikhan explained loops to a friend in his group and helped a lot. Thank you for raising him so well!'), ts: now - 26 * HOUR, read: true },
      { from: 'p', text: pick('Рахмет, Айсұлу апай! Үйде де бағдарламалауға қызығып жүр.', 'Thank you, Ms. Aisulu! He is interested in programming at home too.'), ts: now - 25 * HOUR, read: true },
      { from: 't', text: pick('Бейсенбідегі жиналысқа келе аласыз ба? Әлиханның жобаларын көрсеткім келеді.', 'Can you come to the meeting on Thursday? I would like to show you Alikhan’s projects.'), ts: now - 3 * HOUR, read: false }
    ],
    '2': [
      { from: 'p', text: pick('Айсұлу апай, сәлеметсіз бе. Аружан ертең дәрігерге барады, 2-сабаққа кешігіп келуі мүмкін.', 'Hello, Ms. Aisulu. Aruzhan has a doctor’s appointment tomorrow, so she may be late for the 2nd lesson.'), ts: now - 50 * MIN, read: false }
    ],
    '5': [
      { from: 't', text: pick('Нұрасыл үй тапсырмасын екі рет тапсырмады. Қысқаша сөйлесіп алайық па?', 'Nurasyl has missed his homework twice. Can we have a short talk?'), ts: now - 2 * DAY, read: true },
      { from: 'p', text: pick('Иә, әрине. Сәрсенбі күні 16:00 сізге ыңғайлы ма?', 'Yes, of course. Is Wednesday at 16:00 good for you?'), ts: now - 2 * DAY + 3 * HOUR, read: false }
    ]
  };

  // ----- Барлығын бір объектке жинаймыз -----
  return {
    v: 1,
    lang: E ? 'en' : 'kk',
    content: E ? 'en' : 'kk',   // демо деректердің тілі
    role: 'teacher',
    acting: '1',       // ата-ана / оқушы ретінде кім ашып отыр
    cls: {
      name: { kk: '7 «А» сынып · Информатика', ru: '7 «А» класс · Информатика', en: 'Grade 7 “A” · Informatics' },
      teacher: pick('Айсұлу апай', 'Ms. Aisulu'),
      goal: { kk: 'Ғылым мұражайына саяхат', ru: 'Поездка в музей науки', en: 'Trip to the Science Museum' },
      target: 300
    },
    students: students,
    events: events,
    attendance: attendance,
    assignments: [a1, a2, a3],
    portfolio: portfolio,
    posts: posts,
    threads: threads,
    calEvents: seedCal(lang),            // calendar-ai.js файлындағы функция
    settings: { autoAbsent: true },
    absentNotified: {},
    seen: {},
    seenDefault: now - 8 * HOUR
  };
}


/* =========================================================
   6. САҚТАУ ЖӘНЕ ЖҮКТЕУ (localStorage)
   ========================================================= */

// Қазақша/орысша демо бір жерде, ағылшынша демо бөлек сақталады
function dataKey(lang) {
  return lang === 'en' ? LS_KEY + '-en' : LS_KEY;
}

function load(lang) {
  try {
    const saved = localStorage.getItem(dataKey(lang));
    if (saved) return JSON.parse(saved);
  } catch (e) {
    // localStorage жұмыс істемесе — жаңа деректермен бастаймыз
  }
  return null;
}

function save() {
  try {
    localStorage.setItem(dataKey(S.content === 'en' ? 'en' : 'kk'), JSON.stringify(S));
    localStorage.setItem(LS_KEY + '-lang', S.lang);
  } catch (e) {
    toast(t('saveFail'));
  }
}

// Сайт ашылғанда қай тіл: сілтемедегі ?lang=en → соңғы таңдалған тіл → қазақша
function startLang() {
  const fromUrl = new URLSearchParams(location.search).get('lang');
  if (['kk', 'ru', 'en'].includes(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem(LS_KEY + '-lang');
    if (['kk', 'ru', 'en'].includes(saved)) return saved;
  } catch (e) {}
  return 'kk';
}

// Тілді ауыстыру: ағылшын тіліне өткенде ағылшынша демо сынып ашылады
function switchLang(lang) {
  const wantEn = lang === 'en';
  if ((S.content === 'en') !== wantEn) {
    save();
    S = load(lang) || seed(lang);
    if (!S.calEvents) S.calEvents = seedCal(lang);
  }
  S.lang = lang;
  syncTeacher();
  save();
}


/* =========================================================
   7. ЕСЕПТЕУЛЕР
   ========================================================= */

// Оқушының belgілі уақыттан бергі ұпайы
function ptsSince(sid, since) {
  let total = 0;
  S.events.forEach(e => {
    if (e.sid === sid && e.ts >= since) total += e.v;
  });
  return total;
}

// Соңғы 7 күндегі ұпай
function week(sid) {
  return ptsSince(sid, startOfDay(Date.now() - 6 * DAY));
}

// Сынып мақсатына жиналған ұпай (тек оң ұпайлар)
function goalProgress() {
  let total = 0;
  S.events.forEach(e => {
    if (e.v > 0) total += e.v;
  });
  return total;
}

// Оқушының сол күнгі қатысуы: 'present', 'late', 'absent' немесе null
function attOn(key, sid) {
  const day = S.attendance[key];
  if (!day || !day[sid]) return null;
  return day[sid];
}

// Бір немесе бірнеше оқушы бойынша статистика (есептер беті үшін)
function stats(sids) {
  const from = startOfDay(Date.now() - 6 * DAY);

  // ұпайлар
  let pts = 0, posCount = 0, negCount = 0;
  S.events.forEach(e => {
    if (sids.includes(e.sid) && e.ts >= from) {
      pts += e.v;
      if (e.v > 0) posCount++; else negCount++;
    }
  });

  // қатысу
  let cameDays = 0, markedDays = 0;
  for (const key in S.attendance) {
    sids.forEach(id => {
      const v = S.attendance[key][id];
      if (v) {
        markedDays++;
        if (v !== 'absent') cameDays++;
      }
    });
  }

  // тапсырмалар мен бағалар
  let done = 0, total = 0, gradeSum = 0, gradeCount = 0;
  S.assignments.forEach(a => {
    sids.forEach(id => {
      total++;
      const sub = a.subs[id];
      if (sub) {
        done++;
        if (sub.status === 'graded') {
          gradeSum += sub.grade;
          gradeCount++;
        }
      }
    });
  });

  return {
    pts: pts,
    share: posCount + negCount > 0 ? Math.round(posCount / (posCount + negCount) * 100) : null,
    att: markedDays > 0 ? Math.round(cameDays / markedDays * 100) : null,
    done: done,
    tot: total,
    avg: gradeCount > 0 ? (gradeSum / gradeCount).toFixed(1) : null
  };
}

// Оқылмаған хабарламалар саны
function unreadMsgs() {
  let count = 0;
  if (S.role === 'teacher') {
    for (const id in S.threads) {
      S.threads[id].forEach(m => {
        if (m.from === 'p' && !m.read) count++;
      });
    }
  }
  if (S.role === 'parent') {
    const thread = S.threads[S.acting] || [];
    thread.forEach(m => {
      if (m.from === 't' && !m.read) count++;
    });
  }
  return count;
}

// Тексеруді күтіп тұрған жұмыстар саны
function pendingCount() {
  return S.portfolio.filter(p => p.status === 'pending').length;
}

// Хабарландырулар тізімі (қоңырау белгісі)
function notifications() {
  const list = [];
  const since = Date.now() - 7 * DAY;
  const sid = S.acting;

  if (S.role === 'teacher') {
    // тексеруді күтетін жұмыстар
    S.portfolio.forEach(p => {
      if (p.status === 'pending') {
        list.push({ ts: p.ts, ic: 'image', tone: 'info', text: t('n_pfPending', { name: esc(stu(p.sid).first) }), go: 'portfolio' });
      }
    });
    // ата-аналардан келген соңғы хабарламалар
    for (const id in S.threads) {
      const fromParents = S.threads[id].filter(m => m.from === 'p').slice(-2);
      fromParents.forEach(m => {
        list.push({ ts: m.ts, ic: 'msg', tone: 'gold', text: t('n_msg', { name: esc(stu(id).parent) }), go: 'messages', thread: id });
      });
    }
    // жаңа тапсырылған тапсырмалар
    S.assignments.forEach(a => {
      for (const id in a.subs) {
        const sub = a.subs[id];
        if (sub.ts > since) {
          list.push({ ts: sub.ts, ic: 'clip', tone: '', text: t('n_sub', { name: esc(stu(id).first), title: esc(L(a.title)) }), go: 'assignments' });
        }
      }
    });
  } else {
    // баланың ұпайлары
    S.events.forEach(e => {
      if (e.sid === sid && e.ts > since) {
        const sk = skill(e.skill);
        const sign = e.v > 0 ? '+' : '';
        list.push({
          ts: e.ts, ic: sk.ic, tone: e.v > 0 ? 'good' : 'bad',
          text: esc(stu(e.sid).first) + ': ' + sign + e.v + ' · ' + esc(L(sk)),
          go: S.role === 'student' ? 'myday' : 'home'
        });
      }
    });
    // портфолио: мақұлданды немесе қайтарылды
    S.portfolio.forEach(p => {
      if (p.sid === sid && p.ats && p.status !== 'pending') {
        const approved = p.status === 'approved';
        list.push({ ts: p.ats, ic: 'image', tone: approved ? 'info' : 'bad', text: t(approved ? 'n_pfApproved' : 'n_pfReturned', { title: esc(p.title) }), go: 'portfolio' });
      }
    });
    // бағалар
    S.assignments.forEach(a => {
      const sub = a.subs[sid];
      if (sub && sub.status === 'graded') {
        list.push({ ts: sub.gts || sub.ts, ic: 'clip', tone: 'gold', text: t('n_graded', { title: esc(L(a.title)), g: sub.grade }), go: S.role === 'parent' ? 'report' : 'assignments' });
      }
    });
    // ата-анаға: таспа жазбалары мен мұғалім хабарламалары
    if (S.role === 'parent') {
      S.posts.forEach(p => {
        list.push({ ts: p.ts, ic: 'feed', tone: 'info', text: t('n_post'), go: 'feed' });
      });
      const thread = S.threads[sid] || [];
      thread.filter(m => m.from === 't').slice(-3).forEach(m => {
        list.push({ ts: m.ts, ic: 'msg', tone: 'gold', text: t('n_msg', { name: esc(S.cls.teacher) }), go: 'messages' });
      });
    }
  }

  // соңғы 7 күн, жаңасы жоғарыда, ең көбі 24
  return list
    .filter(n => n.ts > since)
    .sort((a, b) => b.ts - a.ts)
    .slice(0, 24);
}

// Пайдаланушы хабарландыруларды соңғы рет қашан ашты
function seenTs() {
  const ts = S.seen[me()];
  return ts === undefined ? S.seenDefault : ts;
}

// Жаңа хабарландырулар саны
function notifUnread() {
  const seen = seenTs();
  return notifications().filter(n => n.ts > seen).length;
}


/* =========================================================
   8. БЕТТІ САЛУ (render)
   ========================================================= */

// Әр рөлдің мәзірі: [бөлім, иконка]
const NAV = {
  teacher: [['class', 'grid'], ['feed', 'feed'], ['portfolio', 'image'], ['assignments', 'clip'], ['attendance', 'cal'], ['messages', 'msg'], ['reports', 'chart']],
  parent:  [['home', 'home'], ['feed', 'feed'], ['portfolio', 'image'], ['messages', 'msg'], ['report', 'chart']],
  student: [['myday', 'sun'], ['assignments', 'clip'], ['portfolio', 'image'], ['feed', 'feed']]
};

// Қазір қай бөлім ашық. Рөлде ондай бөлім жоқ болса — бірінші бөлім
function curView() {
  const names = NAV[S.role].map(item => item[0]);
  if (!names.includes(ui.view)) ui.view = names[0];
  return ui.view;
}

// Сол жақ мәзірдің батырмалары
function navHtml(current) {
  const msgs = unreadMsgs();
  const pend = pendingCount();
  let html = '';
  NAV[S.role].forEach(item => {
    const name = item[0], ic = item[1];
    let badge = '';
    if (name === 'messages' && msgs > 0) badge = `<span class="badge">${msgs}</span>`;
    if (name === 'portfolio' && S.role === 'teacher' && pend > 0) badge = `<span class="badge">${pend}</span>`;
    const on = name === current ? 'on' : '';
    html += `<button class="nav-btn ${on}" data-act="nav" data-v="${name}">${icon(ic)}<span>${t('nav_' + name)}</span>${badge}</button>`;
  });
  return html;
}

// Мәзір астындағы «демо» жазуы және қалпына келтіру батырмасы
function footHtml() {
  let button = `<button class="link-btn" data-act="reset">${t('resetDemo')}</button>`;
  if (ui.confirmReset) button = `<button class="link-btn danger" data-act="reset">${t('resetConfirm')}</button>`;
  return `<p class="foot-note">${t('demoNote')}</p>` + button;
}

// Жоғарғы панель: рөл, бала, тіл, хабарландыру
function topbarHtml() {
  // рөл ауыстырғыш
  let roles = '';
  ['teacher', 'parent', 'student'].forEach(r => {
    roles += `<button class="${S.role === r ? 'on' : ''}" data-act="role" data-v="${r}">${t('role_' + r)}</button>`;
  });

  // ата-ана / оқушы үшін: қай баланың атынан кіріп отыр
  let acting = '';
  if (S.role !== 'teacher') {
    let options = '';
    S.students.forEach(s => {
      options += `<option value="${s.id}" ${s.id === S.acting ? 'selected' : ''}>${esc(fullName(s))}</option>`;
    });
    acting = `<label class="small muted" for="acting">${t(S.role === 'parent' ? 'as_parent' : 'as_student')}</label>
      <select class="select" id="acting" data-change="acting">${options}</select>`;
  }

  // хабарландыру саны
  const unread = notifUnread();
  let dot = '';
  if (unread > 0) dot = `<span class="badge dot">${unread > 9 ? '9+' : unread}</span>`;

  return `
    <header class="topbar">
      <div class="class-chip">${icon('users', 18)}<span>${esc(L(S.cls.name))}</span></div>
      <div class="spacer"></div>
      <div class="seg">${roles}</div>
      ${acting}
      <div class="seg">
        <button class="${S.lang === 'kk' ? 'on' : ''}" data-act="lang" data-v="kk">ҚАЗ</button>
        <button class="${S.lang === 'ru' ? 'on' : ''}" data-act="lang" data-v="ru">РУС</button>
        <button class="${S.lang === 'en' ? 'on' : ''}" data-act="lang" data-v="en">ENG</button>
      </div>
      <button class="icon-btn" data-act="bell" aria-label="${t('notifs')}">${icon('bell', 18)}${dot}</button>
    </header>`;
}

// Бүкіл бетті қайта салу. Деректер өзгерген сайын шақырылады.
function render() {
  syncTeacher();
  if (ui.screen === 'landing') {
    renderLanding();           // landing.js файлындағы бастапқы бет
    return;
  }
  document.documentElement.lang = S.lang;
  document.title = t('brand') + ' — ' + t('tagline');
  const current = curView();

  document.getElementById('app').innerHTML = `
    <div class="shell">
      <aside class="rail">
        <button class="brand" data-act="toLanding" title="${t('toSite')}">
          <span class="brand-mark masc">${mascot('happy', false)}</span>
          <span>
            <span class="brand-name" style="display:block">${t('brand')}</span>
            <span class="brand-sub" style="display:block">${t('tagline')}</span>
          </span>
        </button>
        <nav class="nav">${navHtml(current)}</nav>
        <div class="rail-foot">${footHtml()}</div>
      </aside>
      <div class="main">
        ${topbarHtml()}
        <main class="content" id="content">${VIEWS[current]()}</main>
        <div class="content mobile-only" style="padding-top:0;flex-direction:column;gap:8px">${footHtml()}</div>
      </div>
    </div>
    ${ui.notifOpen ? renderNotif() : ''}`;

  renderModal();

  // чат ашық болса — ең соңғы хабарламаға түсеміз
  const log = document.querySelector('.chat-log');
  if (log) log.scrollTop = log.scrollHeight;
}

// Хабарландырулар тізімі
function renderNotif() {
  const seen = seenTs();
  const items = notifications();
  let html = '';
  items.forEach(n => {
    const isNew = n.ts > seen ? 'new' : '';
    const thread = n.thread ? `data-thread="${n.thread}"` : '';
    html += `<button class="n-item ${isNew}" data-act="nav" data-v="${n.go}" ${thread}>
      <span class="n-ic ${n.tone}">${icon(n.ic, 16)}</span>
      <span>${n.text}<time>${rel(n.ts)}</time></span>
    </button>`;
  });
  if (html === '') html = `<p class="empty">${t('noNotifs')}</p>`;
  return `<div class="notif card"><h3>${t('notifs')}</h3>${html}</div>`;
}

// ---------- Бірнеше бетте қолданылатын бөліктер ----------

// Ұпай белгісі: +5, 0, -2
function ptsBadge(n) {
  let cls = 'zero';
  if (n > 0) cls = 'up';
  if (n < 0) cls = 'down';
  return `<span class="pts ${cls}">${n > 0 ? '+' : ''}${n}</span>`;
}

// Беттің тақырыбы және оң жақтағы батырмалар
function pageHead(title, tools = '', eyebrow = L(S.cls.name)) {
  let toolsHtml = '';
  if (tools) toolsHtml = `<div class="tools">${tools}</div>`;
  return `<section class="page-head">
      <div><p class="eyebrow">${esc(eyebrow)}</p><h1>${title}</h1></div>
      ${toolsHtml}
    </section>`;
}

// Сынып мақсаты (прогресс жолағы)
function goalCard() {
  const points = goalProgress();
  let percent = Math.round(points / S.cls.target * 100);
  if (percent > 100) percent = 100;
  return `<div class="card goal">
      <span class="goal-ic">${icon('flag', 22)}</span>
      <div class="goal-body">
        <div class="goal-top">
          <span><span class="muted small">${t('goal')}:</span> <b>${esc(L(S.cls.goal))}</b></span>
          <span class="num small muted">${t('goalOf', { a: points, b: S.cls.target })} · ${percent}%</span>
        </div>
        <div class="bar"><i style="width:${percent}%"></i></div>
      </div>
    </div>`;
}

// Ұпай тарихының бір жолы
function evRow(e, showName) {
  const sk = skill(e.skill);
  const name = showName ? `<b>${esc(stu(e.sid).first)}</b> · ` : '';
  const note = e.note ? `<span class="muted small" style="display:block">${esc(e.note)}</span>` : '';
  return `<div class="hist-row">
      <span class="v ${e.v > 0 ? 'up' : 'down'}">${e.v > 0 ? '+' : ''}${e.v}</span>
      <span style="min-width:0">${name}${esc(L(sk))}${note}</span>
      <span class="when">${rel(e.ts)}</span>
    </div>`;
}

// Портфолио жұмысының күйі
function statusChip(status) {
  if (status === 'approved') return `<span class="chip good">${t('approved')}</span>`;
  if (status === 'returned') return `<span class="chip bad">${t('returned')}</span>`;
  return `<span class="chip warn">${t('pending')}</span>`;
}

// Тапсырманың күйі
function subChip(sub) {
  if (!sub) return `<span class="chip mute">${t('st_none')}</span>`;
  if (sub.status === 'graded') return `<span class="chip good">${t('st_graded')} · ${sub.grade}/10</span>`;
  return `<span class="chip info">${t('st_submitted')}</span>`;
}

// <select> тізіміне оқушыларды толтыру
function studentOptions(selectedId, firstOption) {
  let html = firstOption || '';
  S.students.forEach(s => {
    html += `<option value="${s.id}" ${selectedId === s.id ? 'selected' : ''}>${esc(fullName(s))}</option>`;
  });
  return html;
}

// Жаңасы бірінші тұратындай сұрыптау
function newestFirst(list, field = 'ts') {
  return list.slice().sort((a, b) => b[field] - a[field]);
}


/* =========================================================
   9. БЕТТЕР (VIEWS)
   Әр функция HTML мәтінін қайтарады, render() оны экранға қояды
   ========================================================= */

const VIEWS = {};

// ---------- Мұғалім: сынып (оқушылар және ұпайлар) ----------
VIEWS.class = function () {
  const today = dayKey(Date.now());

  // 1) Оқушыларды сұрыптау
  const list = S.students.slice();
  if (ui.sort === 'pts') {
    list.sort((a, b) => week(b.id) - week(a.id));
  } else {
    list.sort((a, b) => a.first.localeCompare(b.first, 'kk'));
  }

  // 2) Жоғарғы батырмалар
  const tools = `
    <select class="select" id="sort" data-change="sort">
      <option value="name" ${ui.sort === 'name' ? 'selected' : ''}>${t('sortName')}</option>
      <option value="pts" ${ui.sort === 'pts' ? 'selected' : ''}>${t('sortPts')} · ${t('last7')}</option>
    </select>
    <button class="btn" data-act="random">${icon('shuffle', 16)}${t('random')}</button>
    <button class="btn ${ui.multi ? 'primary' : ''}" data-act="multi">${icon('check2', 16)}${ui.multi ? t('multiDone') : t('multi')}</button>`;

  // 3) Оқушы карточкалары
  let tiles = '';
  list.forEach(s => {
    const att = attOn(today, s.id);
    let flag = '';
    if (att === 'absent') flag = `<span class="chip bad flag">${t('absentTag')}</span>`;
    if (att === 'late') flag = `<span class="chip warn flag">${t('lateTag')}</span>`;

    let classes = 'tile';
    if (att === 'absent') classes += ' is-absent';
    if (ui.sel.has(s.id)) classes += ' is-sel';

    tiles += `
      <button class="${classes}" data-act="tile" data-id="${s.id}">
        ${flag}${ptsBadge(week(s.id))}${av(s, 56)}
        <span class="tile-name">${esc(s.first)}</span>
        <span class="tile-sub">${esc(s.last)}</span>
      </button>`;
  });

  // 4) «Бүкіл сынып» карточкасы
  let wholeClass = `
    <button class="tile whole" data-act="giveAll">
      <span class="wh-ic">${icon('users', 26)}</span>
      <span class="tile-name">${t('whole')}</span>
      <span class="tile-sub">${t('studentsN', { n: S.students.length })}</span>
    </button>`;
  if (ui.multi) wholeClass = '';

  // 5) Бірнеше оқушы таңдалғанда төменде шығатын панель
  let actionBar = '';
  if (ui.multi) {
    actionBar = `
      <div class="action-bar">
        <b>${t('selected', { n: ui.sel.size })}</b>
        <div class="tools">
          <button class="btn ghost" style="color:inherit" data-act="multi">${t('multiDone')}</button>
          <button class="btn gold" data-act="multiGive" ${ui.sel.size ? '' : 'disabled'}>${icon('plus', 16)}${t('give')}</button>
        </div>
      </div>`;
  }

  return pageHead(t('nav_class'), tools)
    + goalCard()
    + `<p class="small muted">${t('last7')} · ${fDate(Date.now())}</p>`
    + `<div class="tiles">${wholeClass}${tiles}</div>`
    + actionBar;
};

// ---------- Сынып таспасы (барлық рөл) ----------
VIEWS.feed = function () {
  // Жазба қосу формасы — тек мұғалімге
  let composer = '';
  if (S.role === 'teacher') {
    let preview = '';
    if (ui.postImg) {
      preview = `
        <div style="display:flex;gap:10px;align-items:flex-start;flex-wrap:wrap">
          <img class="preview" src="${ui.postImg}" alt="">
          <button type="button" class="btn sm" data-act="rmPostImg">${icon('x', 14)}${t('removePhoto')}</button>
        </div>`;
    }
    composer = `
      <form class="card composer" data-form="post">
        <div style="display:flex;gap:11px;align-items:flex-start">
          ${av(TEACHER, 38)}
          <textarea class="textarea" id="post-text" name="text" placeholder="${t('postPh')}"></textarea>
        </div>
        ${preview}
        <div class="composer-row">
          <span class="btn file-btn">${icon('image', 16)}${t('addPhoto')}<input type="file" accept="image/*" data-change="postImg"></span>
          <div class="spacer"></div>
          <button class="btn primary" type="submit">${icon('send', 16)}${t('publish')}</button>
        </div>
      </form>`;
  }

  let posts = '';
  newestFirst(S.posts).forEach(p => { posts += postCard(p); });

  return pageHead(t('nav_feed')) + `<div class="feed">${composer}${posts}</div>`;
};

// Бір жазбаның карточкасы
function postCard(p) {
  const liked = p.likes.includes(me());
  const canComment = S.role !== 'student';

  const image = p.img ? `<img class="post-img" src="${p.img}" alt="">` : '';

  // пікірлер
  let comments = '';
  p.comments.forEach(c => {
    let who = '';
    if (c.by[0] === 'p') who = ` <span class="muted" style="font-weight:500">· ${esc(parentLabel(stu(c.by.slice(1))))}</span>`;
    comments += `
      <div class="cmt">${userAv(c.by, 30)}
        <div class="cmt-bubble"><b>${esc(userName(c.by))}${who}</b>${esc(c.text)}</div>
      </div>`;
  });

  // пікір жазу формасы
  let commentForm = '';
  if (canComment) {
    commentForm = `
      <form class="cmt-form" data-form="comment" data-id="${p.id}">
        <input class="input" name="c" placeholder="${t('commentPh')}" autocomplete="off">
        <button class="btn sm primary" type="submit">${icon('send', 15)}</button>
      </form>`;
  }

  let commentsBlock = '';
  if (p.comments.length > 0 || canComment) {
    commentsBlock = `<div class="comments">${comments}${commentForm}</div>`;
  }

  return `
    <article class="card post">
      <div class="post-head">
        ${userAv(p.by, 40)}
        <div><b>${esc(userName(p.by))}</b><span class="small muted">${t('teacherRole')} · ${rel(p.ts)}</span></div>
      </div>
      <p class="post-text">${esc(L(p.text))}</p>
      ${image}
      <div class="post-actions">
        <button class="like ${liked ? 'on' : ''}" data-act="like" data-id="${p.id}">${icon('heart', 17)}${p.likes.length}</button>
        <span class="small muted">${p.comments.length} ${t('comments')}</span>
      </div>
      ${commentsBlock}
    </article>`;
}

// ---------- Портфолио (Seesaw сияқты) ----------

// Сілтемеден сайттың атын алу: https://scratch.mit.edu/... → scratch.mit.edu
function hostOf(url) {
  try {
    return new URL(url).hostname;
  } catch (e) {
    return url;
  }
}

// Жұмыстың алдын ала көрінісі
function pfThumb(p) {
  let inner = '';
  let ic = 'link';
  if (p.type === 'image') {
    inner = `<img src="${p.content}" alt="">`;
    ic = 'image';
  } else if (p.type === 'code') {
    const firstLines = p.content.split('\n').slice(0, 8).join('\n');
    inner = `<pre>${esc(firstLines)}</pre>`;
    ic = 'code';
  } else if (p.type === 'text') {
    inner = `<p class="t-text">${esc(p.content)}</p>`;
    ic = 'file';
  } else {
    inner = `<span class="t-link">${icon('link', 26)}${esc(hostOf(p.content))}</span>`;
  }
  return `<div class="pf-thumb">${inner}<span class="pf-type">${icon(ic, 13)}${t('type_' + p.type)}</span></div>`;
}

// Жұмыс карточкасы
function pfCard(p, showStudent = true) {
  const s = stu(p.sid);
  const who = showStudent ? `${av(s, 22)}<span>${esc(s.first)}</span> · ` : '';
  const likes = p.likes.length ? `<span>♥ ${p.likes.length}</span>` : '';
  const comments = p.comments.length ? `<span>· ${p.comments.length} ${t('comments')}</span>` : '';
  return `
    <button class="card pf" data-act="openPf" data-id="${p.id}">
      ${pfThumb(p)}
      <div class="pf-body">
        <span class="pf-title">${esc(p.title)}</span>
        <span class="pf-meta">${who}<span>${rel(p.ts)}</span></span>
        <span class="pf-meta">${statusChip(p.status)}${likes}${comments}</span>
      </div>
    </button>`;
}

// Жұмыстар торы немесе «жұмыс жоқ» жазуы
function pfGrid(items, showStudent, emptyText) {
  if (items.length === 0) return `<div class="card empty">${emptyText}</div>`;
  let html = '';
  items.forEach(p => { html += pfCard(p, showStudent); });
  return `<div class="pf-grid">${html}</div>`;
}

VIEWS.portfolio = function () {
  // Мұғалім: барлық жұмыстар, сүзгілермен
  if (S.role === 'teacher') {
    let items = newestFirst(S.portfolio);
    if (ui.pfFilter === 'pending') items = items.filter(p => p.status === 'pending');
    if (ui.pfStudent !== 'all') items = items.filter(p => p.sid === ui.pfStudent);

    const filters = `
      <div class="filters">
        <div class="seg">
          <button class="${ui.pfFilter === 'pending' ? 'on' : ''}" data-act="pfFilter" data-v="pending">${t('pfPending')} (${pendingCount()})</button>
          <button class="${ui.pfFilter === 'all' ? 'on' : ''}" data-act="pfFilter" data-v="all">${t('pfAll')}</button>
        </div>
        <select class="select" data-change="pfStudent">
          ${studentOptions(ui.pfStudent, `<option value="all">${t('allStudents')}</option>`)}
        </select>
      </div>`;
    const emptyText = ui.pfFilter === 'pending' ? t('emptyPending') : t('emptyPf');
    return pageHead(t('nav_portfolio')) + filters + pfGrid(items, true, emptyText);
  }

  // Оқушы: өз жұмыстары + «Жұмыс қосу» батырмасы
  if (S.role === 'student') {
    const items = newestFirst(S.portfolio.filter(p => p.sid === S.acting));
    const addButton = `<button class="btn primary" data-act="pfAdd">${icon('plus', 16)}${t('addWork')}</button>`;
    return pageHead(t('myWorks'), addButton) + pfGrid(items, false, t('emptyPf'));
  }

  // Ата-ана: баласының мақұлданған жұмыстары
  const child = stu(S.acting);
  const items = newestFirst(S.portfolio.filter(p => p.sid === S.acting && p.status === 'approved'));
  return pageHead(t('childWorks', { name: esc(child.first) }))
    + `<p class="small muted">${t('pfHintParent')}</p>`
    + pfGrid(items, false, t('emptyPf'));
};

// ---------- Тапсырмалар ----------
VIEWS.assignments = function () {
  const list = newestFirst(S.assignments, 'created');
  let cards = '';

  list.forEach(a => {
    const overdueChip = `<span class="chip bad">${t('overdue')}</span>`;
    let side = '';
    let isOverdue = false;

    if (S.role === 'teacher') {
      // мұғалімге: қанша оқушы тапсырды
      const subs = Object.values(a.subs);
      const graded = subs.filter(x => x.status === 'graded').length;
      const total = S.students.length;
      const percent = Math.round(subs.length / total * 100);
      isOverdue = a.due < Date.now();
      side = `
        <span class="small num"><b>${t('submittedN', { a: subs.length, b: total })}</b> · <span class="muted">${t('gradedN', { n: graded })}</span></span>
        <span class="bar primary"><i style="width:${percent}%"></i></span>`;
    } else {
      // оқушы мен ата-анаға: тапсырдым ба
      const sub = a.subs[S.acting];
      isOverdue = a.due < Date.now() && !sub;
      side = subChip(sub);
    }

    cards += `
      <button class="card asg" data-act="openAsg" data-id="${a.id}">
        <span class="asg-ic">${icon('clip', 22)}</span>
        <span class="asg-main">
          <h3>${esc(L(a.title))}</h3>
          <span class="small muted">${t('dueOn', { d: fDate(a.due) })} ${isOverdue ? overdueChip : ''}</span>
        </span>
        <span class="asg-side">${side}</span>
      </button>`;
  });

  let tools = '';
  if (S.role === 'teacher') tools = `<button class="btn primary" data-act="asgNew">${icon('plus', 16)}${t('asgNew')}</button>`;
  return pageHead(t('nav_assignments'), tools) + `<div class="asg-list">${cards}</div>`;
};

// ---------- Қатысу журналы ----------
VIEWS.attendance = function () {
  if (!ui.attDate) ui.attDate = dayKey(Date.now());
  const key = ui.attDate;
  const day = S.attendance[key] || {};

  // санау: қанша келді, кешікті, жоқ
  const count = { present: 0, late: 0, absent: 0, none: 0 };
  S.students.forEach(s => {
    const v = day[s.id] || 'none';
    count[v]++;
  });

  // әр оқушының жолы
  let rows = '';
  S.students.forEach(s => {
    let buttons = '';
    ['present', 'late', 'absent'].forEach(option => {
      const on = day[s.id] === option ? 'on' : '';
      buttons += `<button class="${option} ${on}" data-act="att" data-sid="${s.id}" data-v="${option}">${t(option)}</button>`;
    });
    rows += `
      <div class="att-row">
        <span class="who">${av(s, 34)}<span>${esc(fullName(s))}</span></span>
        <span class="att-opts">${buttons}</span>
      </div>`;
  });

  const tools = `
    <label class="lbl" for="att-date">${t('date')}</label>
    <input class="input" style="width:auto" type="date" id="att-date" value="${key}" max="${dayKey(Date.now())}" data-change="attDate">
    <button class="btn" data-act="attAll">${icon('check', 16)}${t('allPresent')}</button>`;

  return pageHead(t('attTitle'), tools) + `
    <div class="att-summary">
      <div class="card"><span class="small muted">${t('present')}</span><b style="color:var(--good)">${count.present}</b></div>
      <div class="card"><span class="small muted">${t('late')}</span><b style="color:var(--warn)">${count.late}</b></div>
      <div class="card"><span class="small muted">${t('absent')}</span><b style="color:var(--bad)">${count.absent}</b></div>
      <div class="card"><span class="small muted">${t('notMarked')}</span><b class="muted">${count.none}</b></div>
    </div>
    <label class="toggle">
      <input type="checkbox" id="auto-absent" data-change="autoAbsent" ${S.settings.autoAbsent ? 'checked' : ''}>${t('autoAbsent')}
    </label>
    <div class="card att-list">${rows}</div>`;
};

// ---------- Хабарламалар ----------
VIEWS.messages = function () {
  // Ата-ана: тек мұғаліммен бір чат
  if (S.role === 'parent') {
    return pageHead(t('nav_messages'))
      + `<div class="card inbox has-thread" style="grid-template-columns:minmax(0,1fr)">${chatPane(S.acting)}</div>`;
  }

  // Мұғалім: сол жақта ата-аналар тізімі, оң жақта чат
  // соңғы хабарламасы жаңа ата-ана жоғарыда тұрады
  function lastTime(s) {
    const thread = S.threads[s.id] || [];
    return thread.length ? thread[thread.length - 1].ts : 0;
  }
  const order = S.students.slice().sort((a, b) => lastTime(b) - lastTime(a));

  let list = '';
  order.forEach(s => {
    const thread = S.threads[s.id] || [];
    const last = thread[thread.length - 1];
    const hasUnread = thread.some(m => m.from === 'p' && !m.read);
    list += `
      <button class="thread ${ui.thread === s.id ? 'on' : ''}" data-act="thread" data-id="${s.id}">
        ${av(parentObj(s), 38)}
        <span class="thread-main">
          <b>${esc(s.parent)}</b>
          <span>${esc(parentLabel(s))}${last ? ' · ' + esc(last.text) : ''}</span>
        </span>
        ${hasUnread ? '<span class="udot"></span>' : ''}
      </button>`;
  });

  let chat = `<div class="empty" style="margin:auto">${t('pickThread')}</div>`;
  if (ui.thread) chat = chatPane(ui.thread);

  const tools = `<button class="btn" data-act="broadcast">${icon('megaphone', 16)}${t('broadcast')}</button>`;
  return pageHead(t('nav_messages'), tools) + `
    <div class="card inbox ${ui.thread ? 'has-thread' : ''}">
      <div class="threads">${list}</div>
      <div class="chat">${chat}</div>
    </div>`;
};

// Бір чаттың терезесі
function chatPane(sid) {
  const s = stu(sid);
  const thread = S.threads[sid] || [];
  const mySide = S.role === 'teacher' ? 't' : 'p';

  // ашылған соң — басқа жақтан келген хабарламалар «оқылды» болады
  let changed = false;
  thread.forEach(m => {
    if (m.from !== mySide && !m.read) {
      m.read = true;
      changed = true;
    }
  });
  if (changed) save();

  // чаттың жоғарғы жағы
  let head = `${av(TEACHER, 38)}<div><b>${esc(S.cls.teacher)}</b><span class="small muted">${t('teacherRole')}</span></div>`;
  if (S.role === 'teacher') {
    head = `<button class="icon-btn mobile-only" data-act="threadBack">${icon('back', 18)}</button>
      ${av(parentObj(s), 38)}<div><b>${esc(s.parent)}</b><span class="small muted">${esc(parentLabel(s))}</span></div>`;
  }

  // хабарламалар, әр күннің басында күн жазылады
  let log = '';
  let lastDay = '';
  thread.forEach(m => {
    const key = dayKey(m.ts);
    if (key !== lastDay) {
      lastDay = key;
      const label = key === dayKey(Date.now()) ? t('today') : fDate(m.ts);
      log += `<span class="day-sep">${label}</span>`;
    }
    const side = m.from === mySide ? 'me' : 'them';
    log += `<div class="msg ${side}">${esc(m.text)}<time>${fTime(m.ts)}</time></div>`;
  });
  if (log === '') log = `<p class="empty">${t('noMsgs')}</p>`;

  // дайын жауап үлгілері
  const templates = S.role === 'teacher' ? ['tpl1', 'tpl2', 'tpl3'] : ['tplP1', 'tplP2', 'tplP3'];
  let tplButtons = '';
  templates.forEach(k => {
    tplButtons += `<button type="button" data-act="tpl" data-v="${k}">${t(k)}</button>`;
  });

  // мұғалімде ЖИ батырмасы бар (calendar-ai.js)
  let aiButton = '';
  if (S.role === 'teacher') {
    aiButton = `<button type="button" class="btn" data-act="aiReply" data-id="${sid}" title="${t('ai_draftReply')}">${icon('sparkle', 16)}</button>`;
  }

  return `
    <div class="chat-head">${head}</div>
    <div class="chat-log">${log}</div>
    <div class="chat-foot">
      <div class="tpls">${tplButtons}</div>
      <form class="chat-form" data-form="msg" data-id="${sid}">
        <textarea class="textarea" id="msg-text" name="m" placeholder="${t('msgPh')}"></textarea>
        ${aiButton}
        <button class="btn primary" type="submit">${icon('send', 16)}</button>
      </form>
    </div>`;
}

// ---------- Есептер ----------

// Күндер бойынша ұпай графигі (SVG бағаналар)
function dayChart(sids) {
  // 1) Соңғы 7 күннің ұпайларын жинау
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const ts = startOfDay(Date.now() - i * DAY);
    days.push({ key: dayKey(ts), ts: ts, pos: 0, neg: 0 });
  }
  S.events.forEach(e => {
    if (!sids.includes(e.sid)) return;
    const day = days.find(d => d.key === dayKey(e.ts));
    if (!day) return;
    if (e.v > 0) day.pos += e.v;
    else day.neg -= e.v;
  });

  // 2) Өлшемдер: сурет 560×236, бағаналар 22-ден 190-ға дейін
  const W = 560, H = 236, top = 22, bottom = 190, side = 12;
  const maxPos = Math.max(1, ...days.map(d => d.pos));
  const maxNeg = Math.max(0, ...days.map(d => d.neg));
  const unit = (bottom - top) / (maxPos + maxNeg);   // 1 ұпайдың биіктігі
  const base = top + maxPos * unit;                  // нөл сызығы
  const colW = (W - 2 * side) / 7;                   // бір күннің ені
  const barW = Math.min(36, colW * 0.46);            // бағананың ені
  const today = dayKey(Date.now());

  // 3) Әр күннің бағаналары
  let bars = '';
  days.forEach((d, i) => {
    const cx = side + colW * i + colW / 2;   // ортасы
    const x = cx - barW / 2;
    const posH = d.pos * unit;
    const negH = d.neg * unit;
    if (posH > 0) {
      bars += `<rect class="pos" x="${x}" y="${base - posH}" width="${barW}" height="${posH}" rx="5"/>`;
      bars += `<text class="lbl-v" x="${cx}" y="${base - posH - 6}" text-anchor="middle">+${d.pos}</text>`;
    }
    if (negH > 0) {
      bars += `<rect class="neg" x="${x}" y="${base}" width="${barW}" height="${negH}" rx="5"/>`;
      bars += `<text class="lbl-v" x="${cx}" y="${base + negH + 13}" text-anchor="middle">−${d.neg}</text>`;
    }
    bars += `<text class="${d.key === today ? 'today' : ''}" x="${cx}" y="${H - 8}" text-anchor="middle">${esc(fmt(d.ts, { weekday: 'short' }))}</text>`;
  });

  return `<svg class="chart" viewBox="0 0 ${W} ${H}">
      <line class="axis" x1="${side}" x2="${W - side}" y1="${base}" y2="${base}"/>
      ${bars}
    </svg>`;
}

// Дағдылар бойынша жолақтар
function skillBars(sids) {
  const from = startOfDay(Date.now() - 6 * DAY);
  const count = {};   // { help: 3, active: 5, ... }
  S.events.forEach(e => {
    if (sids.includes(e.sid) && e.ts >= from) {
      count[e.skill] = (count[e.skill] || 0) + 1;
    }
  });

  const rows = SKILLS.filter(s => count[s.id]).sort((a, b) => count[b.id] - count[a.id]);
  if (rows.length === 0) return `<p class="muted small">${t('noData')}</p>`;

  const max = Math.max(...rows.map(s => count[s.id]));
  let html = '';
  rows.forEach(s => {
    const good = s.v > 0;
    const width = count[s.id] / max * 100;
    html += `
      <div class="sb">
        <span class="sb-ic ${good ? 'pos' : 'neg'}">${icon(s.ic, 18)}</span>
        <span class="sb-main">
          <span>${esc(L(s))}</span>
          <span class="bar ${good ? 'good' : ''}"><i style="width:${width}%;${good ? '' : 'background:var(--bad)'}"></i></span>
        </span>
        <span class="sb-n">${count[s.id]}</span>
      </div>`;
  });
  return `<div class="skillbars">${html}</div>`;
}

// null болса «—», әйтпесе сан
function orDash(value) {
  return value === null ? '—' : value;
}

// Статистика карточкалары
function statCards(sids) {
  const st = stats(sids);
  return `<div class="stats">
      <div class="card stat"><span class="k">${t('ptsWeek')}</span><span class="val" style="color:${st.pts >= 0 ? 'var(--ink)' : 'var(--bad)'}">${st.pts > 0 ? '+' : ''}${st.pts}</span></div>
      <div class="card stat"><span class="k">${t('posShare')}</span><span class="val">${orDash(st.share)}<small>${st.share !== null ? '%' : ''}</small></span><span class="bar good"><i style="width:${st.share || 0}%"></i></span></div>
      <div class="card stat"><span class="k">${t('attRate')}</span><span class="val">${orDash(st.att)}<small>${st.att !== null ? '%' : ''}</small></span><span class="bar primary"><i style="width:${st.att || 0}%"></i></span></div>
      <div class="card stat"><span class="k">${t('asgDone')}</span><span class="val">${st.done}<small>/ ${st.tot}</small></span></div>
      <div class="card stat"><span class="k">${t('avgGrade')}</span><span class="val">${orDash(st.avg)}<small>${st.avg ? '/ 10' : ''}</small></span></div>
    </div>`;
}

// Есептің негізгі бөлігі: карточкалар + график + дағдылар
function reportBody(sids) {
  return statCards(sids) + `
    <div class="two">
      <section class="card panel">
        <div style="display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap">
          <h3>${t('byDay')}</h3>
          <span class="legend">
            <span><i style="background:var(--good)"></i>${t('posL')}</span>
            <span><i style="background:var(--bad)"></i>${t('negL')}</span>
          </span>
        </div>
        ${dayChart(sids)}
      </section>
      <section class="card panel"><h3>${t('bySkill')} · ${t('last7')}</h3>${skillBars(sids)}</section>
    </div>`;
}

// Мұғалімнің есептер беті
VIEWS.reports = function () {
  const select = `
    <label class="lbl" for="rep-sid">${t('reportFor')}</label>
    <select class="select" id="rep-sid" data-change="reportSid">
      ${studentOptions(ui.reportSid, `<option value="all">${t('whole')}</option>`)}
    </select>`;

  let sids = [ui.reportSid];
  if (ui.reportSid === 'all') sids = S.students.map(s => s.id);

  let extra = '';
  if (ui.reportSid === 'all') {
    // бүкіл сынып: оқушылар кестесі
    let rows = '';
    S.students.forEach(s => {
      const st = stats([s.id]);
      rows += `
        <tr data-act="repStudent" data-id="${s.id}">
          <td><span class="who">${av(s, 28)}${esc(fullName(s))}</span></td>
          <td>${ptsBadge(st.pts)}</td>
          <td>${orDash(st.share)}${st.share !== null ? '%' : ''}</td>
          <td>${orDash(st.att)}${st.att !== null ? '%' : ''}</td>
          <td>${st.done}/${st.tot}</td>
          <td>${orDash(st.avg)}</td>
        </tr>`;
    });
    extra = `
      <section class="card"><div class="scroll-x"><table class="table">
        <thead><tr>
          <th>${t('nameCol')}</th><th>${t('ptsWeek')}</th><th>${t('posShare')}</th>
          <th>${t('attRate')}</th><th>${t('asgDone')}</th><th>${t('avgGrade')}</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table></div></section>`;
  } else {
    // бір оқушы: соңғы белгілері
    const events = newestFirst(S.events.filter(e => e.sid === ui.reportSid)).slice(0, 8);
    let list = `<p class="muted">${t('noRecent')}</p>`;
    if (events.length) list = events.map(e => evRow(e)).join('');
    extra = `<section class="card panel"><h3>${t('recent')}</h3><div class="hist">${list}</div></section>`;
  }

  return pageHead(t('nav_reports'), select) + reportBody(sids) + extra;
};

// Ата-ананың «Үлгерім» беті
VIEWS.report = function () {
  const s = stu(S.acting);
  let list = '';
  S.assignments.forEach(a => {
    const sub = a.subs[s.id];
    const fb = sub && sub.fb ? ' · ' + esc(sub.fb) : '';
    list += `
      <div class="li">
        <span class="asg-ic" style="width:36px;height:36px">${icon('clip', 18)}</span>
        <span class="li-main"><b>${esc(L(a.title))}</b><span>${t('dueOn', { d: fDate(a.due) })}${fb}</span></span>
        ${subChip(sub)}
      </div>`;
  });
  return pageHead(esc(fullName(s)), '', t('nav_report'))
    + reportBody([s.id])
    + `<section class="card panel"><h3>${t('nav_assignments')}</h3><div class="list">${list}</div></section>`;
};

// ---------- Ата-ананың басты беті ----------
VIEWS.home = function () {
  const s = stu(S.acting);
  const today = dayKey(Date.now());
  const att = attOn(today, s.id);

  // бүгінгі белгілер мен ұпай
  const todayEvents = newestFirst(S.events.filter(e => e.sid === s.id && dayKey(e.ts) === today));
  let todayPts = 0;
  todayEvents.forEach(e => { todayPts += e.v; });

  // бүгін сабақта ма
  let attChip = `<span class="chip mute">${t('notMarked')}</span>`;
  if (att === 'present') attChip = `<span class="chip good">${t('present')}</span>`;
  if (att === 'late') attChip = `<span class="chip warn">${t('late')}</span>`;
  if (att === 'absent') attChip = `<span class="chip bad">${t('absent')}</span>`;

  // соңғы жазба және соңғы 2 жұмыс
  const post = newestFirst(S.posts)[0];
  const works = newestFirst(S.portfolio.filter(p => p.sid === s.id && p.status === 'approved')).slice(0, 2);

  let todayList = `<p class="muted small">${t('noToday')}</p>`;
  if (todayEvents.length) todayList = todayEvents.map(e => evRow(e)).join('');

  let asgList = '';
  S.assignments.forEach(a => {
    asgList += `<div class="li"><span class="li-main"><b>${esc(L(a.title))}</b><span>${t('dueOn', { d: fDate(a.due) })}</span></span>${subChip(a.subs[s.id])}</div>`;
  });

  let postHtml = '';
  if (post) {
    const img = post.img ? `<img src="${post.img}" alt="" style="border-radius:12px;max-height:200px;object-fit:cover;width:100%">` : '';
    postHtml = `<p style="white-space:pre-wrap">${esc(L(post.text))}</p>${img}<span class="small muted">${rel(post.ts)}</span>`;
  }

  let worksHtml = `<p class="muted small">${t('emptyPf')}</p>`;
  if (works.length) worksHtml = `<div class="pf-grid" style="grid-template-columns:repeat(auto-fill,minmax(160px,1fr))">${works.map(p => pfCard(p, false)).join('')}</div>`;

  const weekPts = week(s.id);
  return `
    <section class="card hero">
      ${av(s, 64)}
      <div style="min-width:0">
        <p class="eyebrow">${t('hello', { name: esc(s.parent) })}</p>
        <h2>${esc(fullName(s))}</h2>
        <p class="small muted" style="margin-top:4px">${t('todayAtt')}: ${attChip}</p>
      </div>
      <div class="hero-stats">
        <div class="hero-stat"><span>${t('today')}</span><b>${todayPts > 0 ? '+' : ''}${todayPts}</b></div>
        <div class="hero-stat"><span>${t('ptsWeek')}</span><b>${weekPts > 0 ? '+' : ''}${weekPts}</b></div>
      </div>
    </section>
    <div class="grid-2">
      <section class="card panel"><h3>${t('todayFeed')}</h3><div class="hist">${todayList}</div></section>
      <section class="card panel"><h3>${t('upcoming')}</h3><div class="list">${asgList}</div></section>
    </div>
    <div class="grid-2">
      <section class="card panel">
        <div style="display:flex;justify-content:space-between;gap:10px;align-items:center">
          <h3>${t('latestPost')}</h3><button class="btn sm" data-act="nav" data-v="feed">${t('openFeed')}</button>
        </div>
        ${postHtml}
      </section>
      <section class="card panel">
        <div style="display:flex;justify-content:space-between;gap:10px;align-items:center">
          <h3>${t('nav_portfolio')}</h3><button class="btn sm" data-act="nav" data-v="portfolio">${t('allWorks')}</button>
        </div>
        ${worksHtml}
      </section>
    </div>`;
};

// ---------- Оқушының «Менің күнім» беті ----------
VIEWS.myday = function () {
  const s = stu(S.acting);
  const events = newestFirst(S.events.filter(e => e.sid === s.id)).slice(0, 7);
  const todo = S.assignments.filter(a => !a.subs[s.id]);              // әлі тапсырмаған
  const withFeedback = S.portfolio
    .filter(p => p.sid === s.id && p.fb)
    .sort((a, b) => (b.ats || b.ts) - (a.ats || a.ts))
    .slice(0, 3);

  let recent = `<p class="muted small">${t('noRecent')}</p>`;
  if (events.length) recent = events.map(e => evRow(e)).join('');

  let todoList = '<p class="muted small">✓</p>';
  if (todo.length) {
    todoList = '';
    todo.forEach(a => {
      const overdue = a.due < Date.now() ? `<span class="chip bad">${t('overdue')}</span>` : '';
      todoList += `
        <button class="li-btn" data-act="openAsg" data-id="${a.id}">
          <span class="asg-ic" style="width:36px;height:36px">${icon('clip', 18)}</span>
          <span class="li-main" style="flex:1;min-width:0">
            <b style="display:block">${esc(L(a.title))}</b>
            <span class="small muted">${t('dueOn', { d: fDate(a.due) })}</span>
          </span>
          ${overdue}
        </button>`;
    });
  }

  let feedback = `<p class="muted small">${t('noRecent')}</p>`;
  if (withFeedback.length) {
    feedback = '';
    withFeedback.forEach(p => {
      feedback += `<div class="fb">${av(TEACHER, 28)}<div style="min-width:0"><b class="small">«${esc(p.title)}»</b><p class="small">${esc(p.fb)}</p></div></div>`;
    });
  }

  const weekPts = week(s.id);
  return `
    <section class="card hero">
      ${av(s, 72)}
      <div style="min-width:0"><p class="eyebrow">${t('helloStudent', { name: esc(s.first) })}</p><h2>${t('nav_myday')}</h2></div>
      <div class="hero-stats">
        <div class="hero-stat"><span>${t('ptsWeek')}</span><b>${weekPts > 0 ? '+' : ''}${weekPts}</b></div>
        <div class="hero-stat"><span>${t('toDo')}</span><b>${todo.length}</b></div>
      </div>
    </section>
    ${goalCard()}
    <div class="grid-2">
      <section class="card panel"><h3>${t('recent')}</h3><div class="hist">${recent}</div></section>
      <section class="card panel">
        <h3>${t('toDo')}</h3><div class="list">${todoList}</div>
        <h3 style="margin-top:8px">${t('myFeedback')}</h3>${feedback}
      </section>
    </div>`;
};


/* =========================================================
   10. ТЕРЕЗЕЛЕР (MODALS)
   openModal({type:'give', ...}) — терезені ашу
   ========================================================= */

function openModal(modal) {
  ui.modal = modal;
  renderModal();
}

function closeModal() {
  ui.modal = null;
  renderModal();
}

// Терезенің жалпы қаңқасы: тақырып, жабу батырмасы, ішкі мазмұн
function shell(title, body, opts = {}) {
  return `
    <div class="overlay" data-act="overlay">
      <div class="modal ${opts.wide ? 'wide' : ''}" role="dialog" aria-modal="true">
        <div class="modal-head">
          ${opts.lead || ''}
          <h2>${title}</h2>
          <button class="icon-btn" data-act="close" aria-label="${t('close')}">${icon('x', 18)}</button>
        </div>
        <div class="modal-body">${body}</div>
      </div>
    </div>`;
}

// Ашық терезені экранға салу
function renderModal() {
  const root = document.getElementById('modal-root');
  if (!ui.modal) {
    root.innerHTML = '';
    return;
  }
  const make = MODALS[ui.modal.type];
  root.innerHTML = make ? make(ui.modal) : '';
}

const MODALS = {};

// ---------- Ұпай беру терезесі ----------
MODALS.give = function (m) {
  const ids = m.ids;
  const single = ids.length === 1 ? stu(ids[0]) : null;   // бір оқушы ма?

  // тақырып және сол жақтағы сурет
  let title = t('selected', { n: ids.length });
  if (ids.length === S.students.length) title = t('whole');
  if (single) title = esc(fullName(single));

  let lead = `<span class="wh-ic" style="width:44px;height:44px;border-radius:32%;display:grid;place-items:center;background:var(--primary);color:var(--on-primary)">${icon('users', 22)}</span>`;
  if (single) lead = av(single, 44);

  // мақтау немесе дамыту дағдылары
  const list = SKILLS.filter(s => ui.tab === 'pos' ? s.v > 0 : s.v < 0);
  let skills = '';
  list.forEach(s => {
    skills += `
      <button class="skill ${s.v > 0 ? 'pos' : 'neg'}" data-act="award" data-skill="${s.id}">
        <span class="s-ic">${icon(s.ic, 22)}<span class="s-v">${s.v > 0 ? '+' : ''}${s.v}</span></span>
        ${esc(L(s))}
      </button>`;
  });

  // бір оқушының соңғы белгілері
  let history = '';
  if (single) {
    const events = newestFirst(S.events.filter(e => e.sid === single.id)).slice(0, 6);
    let rows = `<p class="muted small">${t('noRecent')}</p>`;
    if (events.length) rows = events.map(e => evRow(e)).join('');
    history = `<div><p class="lbl" style="margin-bottom:6px">${t('recent')}</p><div class="hist">${rows}</div></div>`;
  }

  const weekInfo = single ? `<span class="small muted">${t('ptsWeek')}: ${ptsBadge(week(single.id))}</span>` : '';

  return shell(title, `
    <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap">
      <div class="seg">
        <button class="${ui.tab === 'pos' ? 'on' : ''}" data-act="tab" data-v="pos">${t('tabPos')}</button>
        <button class="${ui.tab === 'neg' ? 'on' : ''}" data-act="tab" data-v="neg">${t('tabNeg')}</button>
      </div>
      ${weekInfo}
    </div>
    <div class="skills">${skills}</div>
    <div class="field">
      <label for="award-note">${t('note')}</label>
      <input class="input" id="award-note" placeholder="${t('notePh')}" autocomplete="off" value="${esc(m.note || '')}">
    </div>
    ${history}`, { lead: lead });
};

// ---------- Кездейсоқ оқушы терезесі ----------
MODALS.pick = function (m) {
  const s = stu(m.id);
  return shell(t('random'), `
    <div class="picker ${m.spinning ? 'spin' : ''}">${av(s, 96)}<p class="picker-name">${esc(fullName(s))}</p></div>
    <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
      <button class="btn" data-act="pickAgain">${icon('shuffle', 16)}${t('again')}</button>
      <button class="btn gold" data-act="pickGive" data-id="${s.id}" ${m.spinning ? 'disabled' : ''}>${icon('plus', 16)}${t('give')}</button>
    </div>`);
};

// ---------- Портфолио жұмысын ашу ----------
MODALS.pf = function (m) {
  const p = S.portfolio.find(x => x.id === m.id);
  if (!p) return '';
  const s = stu(p.sid);

  // 1) жұмыстың өзі
  let content = '';
  if (p.type === 'image') content = `<img src="${p.content}" alt="${esc(p.title)}">`;
  else if (p.type === 'code') content = `<pre>${esc(p.content)}</pre>`;
  else if (p.type === 'text') content = `<p class="t-full">${esc(p.content)}</p>`;
  else content = `<a class="btn" href="${esc(p.content)}" target="_blank" rel="noopener">${icon('link', 16)}${esc(p.content)}</a>`;

  // 2) мұғалімнің пікірі
  let feedback = '';
  if (p.fb) feedback = `<div class="fb">${av(TEACHER, 30)}<div style="min-width:0"><b class="small">${t('teacherFb')}</b><p>${esc(p.fb)}</p></div></div>`;

  // 3) батырмалар: мұғалім тексереді, оқушы түзетеді
  let actions = feedback;
  if (S.role === 'teacher') {
    actions = `
      <div class="field"><label for="pf-fb">${t('teacherFb')}</label><textarea class="textarea" id="pf-fb" placeholder="${t('fbPh')}">${esc(p.fb)}</textarea></div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn good" data-act="pfApprove" data-id="${p.id}">${icon('check', 16)}${t('approve')}</button>
        <button class="btn bad" data-act="pfReturn" data-id="${p.id}">${icon('undo', 16)}${t('returnBtn')}</button>
      </div>`;
  } else if (S.role === 'student' && p.status === 'returned') {
    let editor = '';
    if (p.type === 'link') editor = `<input class="input" id="pf-edit" value="${esc(p.content)}">`;
    if (p.type === 'text' || p.type === 'code') editor = `<textarea class="textarea ${p.type === 'code' ? 'code' : ''}" id="pf-edit">${esc(p.content)}</textarea>`;
    actions = feedback + `
      <div class="field"><label for="pf-edit">${t('type_' + p.type)}</label>${editor}</div>
      <button class="btn primary" data-act="pfResubmit" data-id="${p.id}">${icon('send', 16)}${t('resubmit')}</button>`;
  }

  // 4) ұнату және пікірлер (тек мақұлданған жұмысқа)
  let social = '';
  if (p.status === 'approved') {
    const liked = p.likes.includes(me());
    let comments = '';
    p.comments.forEach(c => {
      comments += `<div class="cmt">${userAv(c.by, 30)}<div class="cmt-bubble"><b>${esc(userName(c.by))}</b>${esc(c.text)}</div></div>`;
    });
    let form = '';
    if (S.role !== 'student') {
      form = `<form class="cmt-form" data-form="pfComment" data-id="${p.id}">
          <input class="input" name="c" placeholder="${t('commentPh')}" autocomplete="off">
          <button class="btn sm primary" type="submit">${icon('send', 15)}</button>
        </form>`;
    }
    social = `
      <div style="display:flex;gap:6px;align-items:center">
        <button class="like ${liked ? 'on' : ''}" data-act="pfLike" data-id="${p.id}">${icon('heart', 17)}${p.likes.length}</button>
      </div>
      <div class="comments" style="padding:0">${comments}${form}</div>`;
  }

  return shell(esc(p.title), `
    <div class="pf-meta">${av(s, 26)}<span>${esc(fullName(s))}</span> · <span>${rel(p.ts)}</span> ${statusChip(p.status)}</div>
    <div class="pf-full">${content}</div>
    ${actions}
    ${social}`, { wide: p.type === 'image' });
};

// ---------- Оқушы жаңа жұмыс қосады ----------
MODALS.pfAdd = function () {
  const types = [['image', 'image'], ['text', 'file'], ['code', 'code'], ['link', 'link']];
  let radios = '';
  types.forEach((item, i) => {
    radios += `<label><input type="radio" name="type" value="${item[0]}" data-change="pfType" ${i === 1 ? 'checked' : ''}>${icon(item[1], 16)}${t('type_' + item[0])}</label>`;
  });

  return shell(t('addWork'), `
    <form data-form="pfAddForm" style="display:flex;flex-direction:column;gap:16px">
      <div class="field"><label for="pf-title">${t('workTitle')}</label><input class="input" id="pf-title" name="title" placeholder="${t('workTitlePh')}" autocomplete="off"></div>
      <div class="type-pick">${radios}</div>
      <div class="field" data-pane="image" hidden><label for="pf-file">${t('chooseFile')}</label><input class="input" type="file" id="pf-file" accept="image/*"></div>
      <div class="field" data-pane="text"><label for="pf-text">${t('type_text')}</label><textarea class="textarea" id="pf-text" placeholder="${t('textPh')}"></textarea></div>
      <div class="field" data-pane="code" hidden><label for="pf-code">${t('type_code')}</label><textarea class="textarea code" id="pf-code" placeholder="${t('codePh')}" spellcheck="false"></textarea></div>
      <div class="field" data-pane="link" hidden><label for="pf-link">${t('type_link')}</label><input class="input" type="url" id="pf-link" placeholder="${t('linkPh')}"></div>
      <button class="btn primary" type="submit" style="align-self:flex-start">${icon('send', 16)}${t('submitWork')}</button>
    </form>`);
};

// ---------- Тапсырманы ашу ----------
MODALS.asg = function (m) {
  const a = S.assignments.find(x => x.id === m.id);
  if (!a) return '';

  const overdue = a.due < Date.now() ? ` · <span class="chip bad">${t('overdue')}</span>` : '';
  const head = `
    <p class="small muted">${t('dueOn', { d: fDate(a.due) })}${overdue}</p>
    <p style="max-width:68ch;white-space:pre-wrap">${esc(L(a.desc))}</p>`;

  // Мұғалім: барлық оқушының жауабы және баға қою
  if (S.role === 'teacher') {
    let rows = '';
    S.students.forEach(s => {
      const sub = a.subs[s.id];

      let answer = '—';
      if (sub) {
        if (sub.text.startsWith('http')) answer = `<a href="${esc(sub.text)}" target="_blank" rel="noopener">${esc(hostOf(sub.text))}</a>`;
        else answer = esc(sub.text);
      }

      let gradeControls = '';
      if (sub) {
        let options = '';
        for (let g = 1; g <= 10; g++) {
          options += `<option ${sub.grade === g ? 'selected' : ''}>${g}</option>`;
        }
        gradeControls = `
          <div class="grade-row">
            <select class="select" id="g-${s.id}">${options}</select>
            <input class="input" id="f-${s.id}" style="padding:6px 9px;font-size:13px;min-width:120px" placeholder="${t('fbShort')}" value="${esc(sub.fb || '')}">
            <button class="btn sm" data-act="grade" data-aid="${a.id}" data-sid="${s.id}">${t('save')}</button>
          </div>`;
      }

      rows += `
        <tr>
          <td><span class="who">${av(s, 28)}${esc(fullName(s))}</span></td>
          <td>${subChip(sub)}</td>
          <td class="ans">${answer}</td>
          <td>${gradeControls}</td>
        </tr>`;
    });
    return shell(esc(L(a.title)), head + `
      <div class="scroll-x"><table class="roster">
        <thead><tr><th>${t('student')}</th><th>${t('status')}</th><th>${t('answer')}</th><th>${t('grade')}</th></tr></thead>
        <tbody>${rows}</tbody>
      </table></div>`, { wide: true });
  }

  // Оқушы мен ата-ана
  const sub = a.subs[S.acting];
  let body = head + `<div>${subChip(sub)}</div>`;

  if (sub && sub.status === 'graded') {
    // бағасы қойылған
    const fb = sub.fb ? `<p>${esc(sub.fb)}</p>` : '';
    body += `
      <div class="fb">${av(TEACHER, 30)}<div><b class="small">${t('grade')}: ${sub.grade}/10</b>${fb}</div></div>
      <div class="field"><span class="lbl">${t('answer')}</span><p style="white-space:pre-wrap;overflow-wrap:anywhere">${esc(sub.text)}</p></div>`;
  } else if (S.role === 'student') {
    // оқушы жауап жаза алады
    body += `
      <form data-form="asgSubmit" data-id="${a.id}" style="display:flex;flex-direction:column;gap:12px">
        <div class="field"><label for="asg-ans">${t('answer')}</label><textarea class="textarea" id="asg-ans" name="ans" placeholder="${t('answerPh')}">${esc(sub ? sub.text : '')}</textarea></div>
        <button class="btn primary" type="submit" style="align-self:flex-start">${icon('send', 16)}${t('submit')}</button>
      </form>`;
  } else if (sub) {
    // ата-ана баланың жауабын көреді
    body += `<div class="field"><span class="lbl">${t('answer')}</span><p style="white-space:pre-wrap;overflow-wrap:anywhere">${esc(sub.text)}</p></div>`;
  }
  return shell(esc(L(a.title)), body);
};

// ---------- Жаңа тапсырма ----------
MODALS.asgNew = function () {
  return shell(t('asgNew'), `
    <form data-form="asgNewForm" style="display:flex;flex-direction:column;gap:14px">
      <div class="field"><label for="an-title">${t('asgTitle')}</label><input class="input" id="an-title" name="title" required autocomplete="off"></div>
      <div class="field"><label for="an-desc">${t('asgDesc')}</label><textarea class="textarea" id="an-desc" name="desc"></textarea></div>
      <div class="field"><label for="an-due">${t('asgDue')}</label><input class="input" type="date" id="an-due" name="due" required value="${dayKey(Date.now() + 3 * DAY)}" style="width:auto"></div>
      <button class="btn primary" type="submit" style="align-self:flex-start">${icon('plus', 16)}${t('create')}</button>
    </form>`);
};

// ---------- Барлық ата-анаға хабарландыру ----------
MODALS.broadcast = function () {
  return shell(t('broadcastTitle'), `
    <form data-form="broadcastForm" style="display:flex;flex-direction:column;gap:14px">
      <textarea class="textarea" id="bc-text" name="m" placeholder="${t('msgPh')}" style="min-height:120px"></textarea>
      <button class="btn primary" type="submit" style="align-self:flex-start">${icon('send', 16)}${t('send')}</button>
    </form>`);
};


/* =========================================================
   11. ӘРЕКЕТТЕР

   Батырмада data-act="nav" деген белгі болса,
   басқанда A.nav() функциясы орындалады.
   Формада data-form="post" болса — F.post(),
   тізімде data-change="sort" болса — C.sort().
   ========================================================= */

// ---------- Төменде шығатын қысқа хабар ----------
let toastTimer;
function toast(message, undoFn) {
  const root = document.getElementById('toasts');
  let undoButton = '';
  if (undoFn) undoButton = `<button data-act="undo">${t('undo')}</button>`;
  root.innerHTML = `<div class="toast"><span class="msg">${message}</span>${undoButton}</div>`;
  ui.undoFn = undoFn || null;

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    root.innerHTML = '';
    ui.undoFn = null;
  }, undoFn ? 6000 : 3200);
}

// ---------- Ұпай беру ----------
function award(ids, skillId, note) {
  const sk = skill(skillId);
  const newIds = [];
  ids.forEach(id => {
    const event = { id: uid(), sid: id, skill: skillId, v: sk.v, ts: Date.now(), note: note };
    S.events.push(event);
    newIds.push(event.id);
  });
  save();

  // хабар: «Әлихан: +1 · Белсенділік» және «Қайтару» батырмасы
  const value = (sk.v > 0 ? '+' : '') + sk.v;
  let message = t('awardedMany', { n: ids.length, v: value, skill: esc(L(sk)) });
  if (ids.length === 1) message = t('awardedToast', { who: esc(stu(ids[0]).first), v: value, skill: esc(L(sk)) });

  toast(message, () => {
    S.events = S.events.filter(e => !newIds.includes(e.id));   // жаңа белгілерді өшіру
    save();
    render();
    toast(t('undone'));
  });
}

// ---------- Суретті кішірейту (1000px) ----------
function compressImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        const scale = Math.min(1, 1000 / Math.max(img.width, img.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(img.width * scale);
        canvas.height = Math.round(img.height * scale);
        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', 0.8));
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

// ---------- Хабарлама жіберу ----------
function sendMsg(sid, from, text) {
  if (!S.threads[sid]) S.threads[sid] = [];
  S.threads[sid].push({ from: from, text: text, ts: Date.now(), read: false });
}

// ---------- Қатысуды белгілеу ----------
function setAtt(sid, value) {
  const key = ui.attDate;
  if (!S.attendance[key]) S.attendance[key] = {};
  S.attendance[key][sid] = value;

  // оқушы келмесе — ата-анасына хабарлама (бір күнде бір рет)
  if (value === 'absent' && S.settings.autoAbsent) {
    if (!S.absentNotified[key]) S.absentNotified[key] = [];
    if (!S.absentNotified[key].includes(sid)) {
      S.absentNotified[key].push(sid);
      const s = stu(sid);
      sendMsg(sid, 't', t('autoAbsentMsg', { name: s.first, date: fDate(keyToTs(key)) }));
      toast(t('notifiedParent', { name: esc(s.first) }));
    }
  }
  save();
}

// ---------- Кездейсоқ оқушы (10 рет ауысып, тоқтайды) ----------
let spinTimer;
function spinPick() {
  const today = dayKey(Date.now());
  const pool = S.students.filter(s => attOn(today, s.id) !== 'absent');
  let step = 0;
  clearInterval(spinTimer);
  spinTimer = setInterval(() => {
    step++;
    const s = pool[Math.floor(Math.random() * pool.length)];
    ui.modal = { type: 'pick', id: s.id, spinning: step < 10 };
    renderModal();
    if (step >= 10) clearInterval(spinTimer);
  }, 80);
}

// Ұнату / ұнатуды алу
function toggleLike(item) {
  const user = me();
  const index = item.likes.indexOf(user);
  if (index >= 0) item.likes.splice(index, 1);
  else item.likes.push(user);
}

// ---------- A: батырмалар (data-act) ----------
const A = {
  // мәзір бөлімін ауыстыру
  nav(el) {
    ui.view = el.dataset.v;
    ui.notifOpen = false;
    if (el.dataset.thread) ui.thread = el.dataset.thread;
    ui.multi = false;
    ui.sel.clear();
    render();
    window.scrollTo({ top: 0 });
  },
  // рөлді ауыстыру: мұғалім / ата-ана / оқушы
  role(el) {
    S.role = el.dataset.v;
    ui.view = null;
    ui.modal = null;
    ui.notifOpen = false;
    ui.thread = null;
    ui.multi = false;
    ui.sel.clear();
    save();
    render();
  },
  // тілді ауыстыру
  lang(el) {
    switchLang(el.dataset.v);
    ui.thread = null;
    ui.modal = null;
    render();
  },
  // хабарландыруларды ашу / жабу
  bell() {
    ui.notifOpen = !ui.notifOpen;
    if (ui.notifOpen) {
      S.seen[me()] = Date.now();
      save();
    }
    render();
  },
  // оқушы карточкасын басу
  tile(el) {
    const id = el.dataset.id;
    if (ui.multi) {
      if (ui.sel.has(id)) ui.sel.delete(id);
      else ui.sel.add(id);
      render();
      return;
    }
    ui.tab = 'pos';
    openModal({ type: 'give', ids: [id] });
  },
  // «Бүкіл сынып» — бүгін келген оқушылардың бәріне
  giveAll() {
    const today = dayKey(Date.now());
    const ids = S.students.filter(s => attOn(today, s.id) !== 'absent').map(s => s.id);
    ui.tab = 'pos';
    openModal({ type: 'give', ids: ids });
  },
  multi() {
    ui.multi = !ui.multi;
    ui.sel.clear();
    render();
  },
  multiGive() {
    if (ui.sel.size === 0) return;
    ui.tab = 'pos';
    openModal({ type: 'give', ids: Array.from(ui.sel) });
  },
  // «Мақтау» / «Дамыту керек» қойындысы
  tab(el) {
    ui.tab = el.dataset.v;
    const note = document.getElementById('award-note');
    ui.modal.note = note ? note.value : '';
    renderModal();
  },
  // дағдыны басу — ұпай беру
  award(el) {
    const ids = ui.modal.ids;
    const noteInput = document.getElementById('award-note');
    const note = noteInput ? noteInput.value.trim() : '';
    award(ids, el.dataset.skill, note);
    if (ids.length === 1) {
      ui.modal.note = '';            // бір оқушы: терезе ашық қалады
    } else {
      ui.modal = null;               // бірнеше оқушы: терезе жабылады
      ui.multi = false;
      ui.sel.clear();
    }
    render();
  },
  undo() {
    const fn = ui.undoFn;
    ui.undoFn = null;
    document.getElementById('toasts').innerHTML = '';
    if (fn) fn();
  },
  random() { spinPick(); },
  pickAgain() { spinPick(); },
  pickGive(el) {
    ui.tab = 'pos';
    openModal({ type: 'give', ids: [el.dataset.id] });
  },
  close() { closeModal(); },
  // терезенің сыртын басса — жабылады
  overlay(el, e) {
    if (e.target === el) closeModal();
  },
  like(el) {
    toggleLike(S.posts.find(p => p.id === el.dataset.id));
    save();
    render();
  },
  rmPostImg() {
    const text = document.getElementById('post-text').value;
    ui.postImg = null;
    render();
    document.getElementById('post-text').value = text;
  },
  pfFilter(el) {
    ui.pfFilter = el.dataset.v;
    render();
  },
  openPf(el) { openModal({ type: 'pf', id: el.dataset.id }); },
  // мұғалім жұмысты мақұлдайды
  pfApprove(el) {
    const p = S.portfolio.find(x => x.id === el.dataset.id);
    p.fb = document.getElementById('pf-fb').value.trim();
    p.status = 'approved';
    p.ats = Date.now();
    save();
    closeModal();
    render();
    toast(t('approvedToast'));
  },
  // мұғалім жұмысты түзетуге қайтарады
  pfReturn(el) {
    const p = S.portfolio.find(x => x.id === el.dataset.id);
    p.fb = document.getElementById('pf-fb').value.trim();
    p.status = 'returned';
    p.ats = Date.now();
    save();
    closeModal();
    render();
    toast(t('returnedToast'));
  },
  pfLike(el) {
    toggleLike(S.portfolio.find(p => p.id === el.dataset.id));
    save();
    render();
  },
  pfAdd() { openModal({ type: 'pfAdd' }); },
  // оқушы түзетіп, қайта жібереді
  pfResubmit(el) {
    const p = S.portfolio.find(x => x.id === el.dataset.id);
    const editor = document.getElementById('pf-edit');
    if (editor && editor.value.trim()) p.content = editor.value;
    p.status = 'pending';
    p.ts = Date.now();
    p.ats = null;
    save();
    closeModal();
    render();
    toast(t('workSent'));
  },
  openAsg(el) { openModal({ type: 'asg', id: el.dataset.id }); },
  asgNew() { openModal({ type: 'asgNew' }); },
  // мұғалім баға қояды
  grade(el) {
    const a = S.assignments.find(x => x.id === el.dataset.aid);
    const sid = el.dataset.sid;
    const sub = a.subs[sid];
    sub.grade = Number(document.getElementById('g-' + sid).value);
    sub.fb = document.getElementById('f-' + sid).value.trim();
    sub.status = 'graded';
    sub.gts = Date.now();
    save();
    render();
    toast(t('gradeSaved') + ': ' + esc(stu(sid).first) + ' · ' + sub.grade + '/10');
  },
  att(el) {
    setAtt(el.dataset.sid, el.dataset.v);
    render();
  },
  // «Барлығы келді»
  attAll() {
    if (!S.attendance[ui.attDate]) S.attendance[ui.attDate] = {};
    S.students.forEach(s => { S.attendance[ui.attDate][s.id] = 'present'; });
    save();
    render();
  },
  thread(el) {
    ui.thread = el.dataset.id;
    render();
  },
  threadBack() {
    ui.thread = null;
    render();
  },
  // дайын жауап үлгісін жазу өрісіне қосу
  tpl(el) {
    const box = document.getElementById('msg-text');
    if (!box) return;
    box.value = (box.value ? box.value + ' ' : '') + t(el.dataset.v);
    box.focus();
  },
  broadcast() { openModal({ type: 'broadcast' }); },
  repStudent(el) {
    ui.reportSid = el.dataset.id;
    render();
    window.scrollTo({ top: 0 });
  },
  // демо деректерді қалпына келтіру (екі рет басу керек)
  reset() {
    if (!ui.confirmReset) {
      ui.confirmReset = true;
      render();
      setTimeout(() => {
        if (ui.confirmReset) {
          ui.confirmReset = false;
          render();
        }
      }, 5000);
      return;
    }
    const lang = S.lang;
    S = seed(lang);
    S.lang = lang;
    ui.confirmReset = false;
    ui.view = null;
    ui.modal = null;
    ui.thread = null;
    save();
    render();
    toast(t('resetDone'));
  }
};

// ---------- F: формалар (data-form) ----------
const F = {
  // таспаға жазба
  post(form) {
    const text = document.getElementById('post-text').value.trim();
    if (!text && !ui.postImg) {
      toast(t('needText'));
      return;
    }
    S.posts.push({ id: uid(), by: 't', ts: Date.now(), text: text, img: ui.postImg, likes: [], comments: [] });
    ui.postImg = null;
    save();
    render();
    toast(t('published'));
  },
  // таспадағы пікір
  comment(form) {
    const text = form.querySelector('input').value.trim();
    if (!text) return;
    const post = S.posts.find(p => p.id === form.dataset.id);
    post.comments.push({ by: me(), text: text, ts: Date.now() });
    save();
    render();
  },
  // портфолиодағы пікір
  pfComment(form) {
    const text = form.querySelector('input').value.trim();
    if (!text) return;
    const work = S.portfolio.find(p => p.id === form.dataset.id);
    work.comments.push({ by: me(), text: text, ts: Date.now() });
    save();
    render();
  },
  // оқушы жаңа жұмыс жібереді
  async pfAddForm(form) {
    const title = document.getElementById('pf-title').value.trim();
    const type = form.querySelector('input[name=type]:checked').value;
    if (!title) {
      toast(t('needTitle'));
      return;
    }

    let content = '';
    if (type === 'image') {
      const file = document.getElementById('pf-file').files[0];
      if (file) content = await compressImage(file);
    } else if (type === 'text') {
      content = document.getElementById('pf-text').value.trim();
    } else if (type === 'code') {
      content = document.getElementById('pf-code').value.trimEnd();
    } else {
      content = document.getElementById('pf-link').value.trim();
    }
    if (!content) {
      toast(t('needContent'));
      return;
    }

    S.portfolio.push({ id: uid(), sid: S.acting, title: title, type: type, content: content, ts: Date.now(), status: 'pending', fb: '', likes: [], comments: [] });
    save();
    closeModal();
    render();
    toast(t('workSent'));
  },
  // оқушы тапсырманы тапсырады
  asgSubmit(form) {
    const text = document.getElementById('asg-ans').value.trim();
    if (!text) {
      toast(t('needContent'));
      return;
    }
    const a = S.assignments.find(x => x.id === form.dataset.id);
    a.subs[S.acting] = { status: 'submitted', text: text, ts: Date.now(), grade: null, fb: '' };
    save();
    closeModal();
    render();
    toast(t('submitted'));
  },
  // мұғалім жаңа тапсырма құрады
  asgNewForm(form) {
    const title = document.getElementById('an-title').value.trim();
    if (!title) {
      toast(t('needTitle'));
      return;
    }
    const dueDay = document.getElementById('an-due').value;
    const due = keyToTs(dueDay) + 18 * HOUR;   // мерзімі: сол күні 18:00
    const desc = document.getElementById('an-desc').value.trim();
    S.assignments.push({ id: uid(), title: title, desc: desc, due: due, created: Date.now(), subs: {} });
    save();
    closeModal();
    render();
    toast(t('asgCreated'));
  },
  // чатта хабарлама жіберу
  msg(form) {
    const text = document.getElementById('msg-text').value.trim();
    if (!text) return;
    sendMsg(form.dataset.id, S.role === 'teacher' ? 't' : 'p', text);
    save();
    render();
    document.getElementById('msg-text').focus();
  },
  // барлық ата-анаға
  broadcastForm(form) {
    const text = document.getElementById('bc-text').value.trim();
    if (!text) return;
    S.students.forEach(s => sendMsg(s.id, 't', text));
    save();
    closeModal();
    render();
    toast(t('broadcastSent', { n: S.students.length }));
  }
};

// ---------- C: тізімдер мен өрістер өзгергенде (data-change) ----------
const C = {
  // ата-ана / оқушы басқа баланы таңдады
  acting(el) {
    S.acting = el.value;
    ui.modal = null;
    save();
    render();
  },
  sort(el) {
    ui.sort = el.value;
    render();
  },
  // таспаға сурет таңдалды
  async postImg(el) {
    const file = el.files[0];
    if (!file) return;
    const text = document.getElementById('post-text').value;
    ui.postImg = await compressImage(file);
    render();
    document.getElementById('post-text').value = text;
  },
  pfStudent(el) {
    ui.pfStudent = el.value;
    render();
  },
  // жұмыс түрін таңдағанда керек өріс қана көрінеді
  pfType(el) {
    document.querySelectorAll('[data-pane]').forEach(pane => {
      pane.hidden = pane.dataset.pane !== el.value;
    });
  },
  attDate(el) {
    if (!el.value) return;
    ui.attDate = el.value;
    render();
  },
  autoAbsent(el) {
    S.settings.autoAbsent = el.checked;
    save();
  },
  reportSid(el) {
    ui.reportSid = el.value;
    render();
  }
};

// ---------- Оқиғаларды тыңдау ----------

// Кез келген батырманы басқанда
document.addEventListener('click', function (e) {
  const el = e.target.closest('[data-act]');

  // хабарландырулар ашық болса, сыртын басқанда жабылады
  if (ui.notifOpen && !e.target.closest('.notif') && !e.target.closest('[data-act="bell"]')) {
    ui.notifOpen = false;
    if (!el) {
      render();
      return;
    }
  }

  if (el && A[el.dataset.act]) {
    A[el.dataset.act](el, e);
  }
});

// Кез келген форманы жібергенде
document.addEventListener('submit', function (e) {
  const form = e.target;
  if (!form.dataset.form) return;
  e.preventDefault();                     // бет қайта жүктелмеуі үшін
  if (F[form.dataset.form]) F[form.dataset.form](form);
});

// Тізім немесе өріс өзгергенде
document.addEventListener('change', function (e) {
  const el = e.target.closest('[data-change]');
  if (el && C[el.dataset.change]) C[el.dataset.change](el);
});

// Пернетақта: Esc — жабу, Enter — хабарлама жіберу
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (ui.modal) {
      clearInterval(spinTimer);
      closeModal();
    } else if (ui.notifOpen) {
      ui.notifOpen = false;
      render();
    }
  }
  if (e.key === 'Enter' && !e.shiftKey && e.target.id === 'msg-text') {
    e.preventDefault();
    e.target.form.requestSubmit();
  }
});
