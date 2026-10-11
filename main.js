/* ---------- boot ---------- */
S = load() || seed();
if (!S.v) S = seed();
if (!S.calEvents){ S.calEvents = seedCal(); save(); }
render();
