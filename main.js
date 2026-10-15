
const firstLang = startLang();                      
S = load(firstLang) || seed(firstLang);
if (!S.v) S = seed(firstLang);
if (!S.calEvents) S.calEvents = seedCal(firstLang);
S.lang = firstLang;
save();
render();
