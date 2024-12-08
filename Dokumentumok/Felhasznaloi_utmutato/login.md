1. Bal oldali szekció
Háttérkép:
Stílusos dizájnelemként működik, amely egy kép (cuccos.png) formájában jelenik meg.
Jellemzők:
Háttérméret: A kép teljesen kitölti a rendelkezésre álló területet.
Pozíció: Középre igazított.
Elérhetőség:
Csak nagyobb képernyőméreteken (pl. laptop vagy asztali monitor) látható.

2. Jobb oldali szekció
Ez a bejelentkezési űrlap és a felhasználói interakciók fő helyszíne.

Funkciók és gombok részletes dokumentációja
1. Vissza gomb (bal felső sarok)
Megjelenés:
Egy nyíl ikon.
Szín: alapértelmezetten piros, hover állapotban fekete.
Méret: 24x24px SVG ikon.
Funkció:
A gomb visszairányítja a felhasználót a főoldalra (/).
Működés:
A router.push('/') függvény segítségével történik az átirányítás.

2. Bejelentkezési űrlap
Űrlapmezők
E-mail mező:
Funkció: A felhasználó e-mail címének megadására szolgál.
Stílus:
Szöveg színe: fekete.
Placeholder: "Add meg az e-mailed".
Border: szürke keret, amely aktív állapotban piros szegélyt kap.
Árnyékolás: finom árnyék, amely a hover állapotban kiemelkedik.
Jelszó mező:
Funkció: A felhasználó jelszavának megadására szolgál.
Stílus:
Placeholder: "Add meg a jelszavad".
Egyéb stílusok megegyeznek az e-mail mezővel.
Bejelentkezés gomb
Funkció:
Az űrlap elküldésére és a bejelentkezési folyamat elindítására szolgál.
Az API /api/login végpontját hívja meg.
Megjelenés:
Szín: alapértelmezetten szürke, hover állapotban fehér.
Szöveg: "Belépés".
Stílus: lekerekített sarkok, közepesen vastag betűk.
Hibaüzenetek és visszajelzések
Sikeres bejelentkezés esetén:
Üzenet: "Ügyes vagy! Sikeresen bejelentkeztél. Gratulálok!"
Az üzenet zöld színnel jelenik meg, és a felhasználó átirányításra kerül a /dashboard oldalra.
Sikertelen bejelentkezés esetén:
Üzenet: "Hibás bejelentkezési adatok."
Az üzenet piros színnel jelenik meg.

3. Regisztrációs hivatkozás
Elhelyezkedés: Az űrlap alján, középre igazítva.
Funkció:
Átirányítja a felhasználót a regisztrációs oldalra (/register).
Megjelenés:
Szöveg: "Nincs még fiókja? Regisztráció".
Stílus: piros, hover állapotban aláhúzott.

Felület reszponzivitása
Nagy képernyők (pl. asztali gépek):
Bal oldalon háttérkép látható.
Jobb oldalon a bejelentkezési űrlap.
Kisebb képernyők (pl. mobil):
A bal oldali kép nem látható.
A jobb oldali szekció kitölti a teljes képernyőt.

Bejelentkezési folyamat működése
A felhasználó megadja az e-mail címét és jelszavát.
A "Belépés" gombra kattintva:
Az adatok JSON formátumban elküldésre kerülnek a /api/login végpontra.
A backend ellenőrzi az adatokat, és sikeres hitelesítés esetén JWT tokent generál.
A token és a felhasználói adatok helyben kerülnek tárolásra (localStorage), és a felhasználó átirányításra kerül a /dashboard oldalra.
Sikertelen bejelentkezés esetén hibaüzenet jelenik meg.
