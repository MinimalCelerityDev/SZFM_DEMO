Gombok és Navigációs Funkciók
Étrendek:
Gomb neve: ÉTRENDEK
Funkció: Kattintásra az ÉtrendekPage szekcióra görget, amely tartalmazza az étrendeket.
Al-menü: Három különböző étrend típusra vezető linkek:
Étrendek 1
Étrendek 2
Étrendek 3
Navigációs cél: A felhasználó az étrendek oldalára kerülhet.
Sportok:
Gomb neve: SPORTOK
Funkció: Kattintásra a SportokPage szekcióra görget, amely sportokkal kapcsolatos információkat tartalmaz.
Al-menü: Három sport típusra vezető linkek:
Edzőterem
Futás
Mozgás
Navigációs cél: A felhasználó a sportok oldalára kerülhet.
Árak:
Gomb neve: ÁRAK
Funkció: Kattintásra az ArakPage szekcióra görget, ahol különböző csomagokat és azok árait találja.
Al-menü: Három ár csomag típusra vezető linkek:
A csomag
B csomag
C csomag
Navigációs cél: A felhasználó az árak oldalára kerülhet.
Kontakt:
Gomb neve: KONTAKT
Funkció: Kattintásra a ContactPage szekcióra görget, ahol jogi nyilatkozatokat és adatvédelmi információkat talál.
Al-menü: Három jogi dokumentumra vezető linkek:
Jogi nyilatkozat
Süti politika
Adatvédelem
Navigációs cél: A felhasználó a kontakt és jogi információkat tartalmazó oldalra kerülhet.
Kijelentkezés gomb:
Gomb neve: Kijelentkezés
Funkció: Kijelentkezés a rendszerből. Törli a felhasználót a localStorage-ból, és átirányítja a felhasználót a bejelentkező oldalra.
Profil és Személyes Adatok
Profil adatok:
A felhasználó adatai (pl. teljes név, email) megjelenítése egy részletes kibontható szekcióban.
Személyes adatok:
A felhasználó személyes adatai (pl. kedvenc étel, ital, sport, alvási órák, hobbi, súly, magasság) jelennek meg.
A felhasználó az adatok módosítását is elvégezheti egy szerkesztési módban, ahol minden adatot újra megadhat, majd elmentheti azokat.
Az adatok módosításához a felhasználó egy "Módosítás" gombra kattinthat, amely lehetővé teszi a formák szerkesztését.
Felhasználói Állapot és Adatkezelés
Felhasználói adatok betöltése:
A felhasználó adatai betöltődnek a localStorage-ból, amennyiben a felhasználó be van jelentkezve. Ha nem található felhasználó, a komponens "Loading..." üzenetet jelenít meg, amíg az adatok betöltődnek.
Felhasználói adat mentése:
A módosított felhasználói adatokat egy API hívással menti a rendszer. Ha a mentés sikeres, a felhasználó adatai frissülnek és a szerkesztési mód kikapcsolódik.
Interakciók és Állapotkezelés
Menu Toggles:
A menüpontok lebegő al-menüi az egérrel történő rámutatásra nyílnak meg. Ezek dinamikusan jelennek meg és tűnnek el, amikor az egér elhagyja a gombokat.
Globális kattintáskezelés:
Ha a felhasználó a menüvel kívül kattint, akkor az al-menük automatikusan bezárulnak.
Strukturális Elemei
Navigációs menü:
A menü az oldal tetején található, és reszponzív módon átrendeződik mobil nézetre.
Felhasználói üdvözlés:
A felhasználó üdvözlése a neve megjelenítésével történik a fejlécen, egy színes háttérrel.
Adatkezelés szekciók:
A profil adatok és a személyes adatok szerkesztése a fő tartalom részeként jelenik meg, kinyitható details elemekkel.
