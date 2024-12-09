Fő elemek az oldalon
1. Bal oldali szekció
	•	Háttérkép:
	•	Csak nagyobb képernyőkön (pl. laptop, asztali monitor) látható.
	•	Jellemzők:
	•	Háttérméret: a kép teljesen kitölti a rendelkezésre álló területet.
	•	Pozíció: középre igazított.
	•	Funkció:
	•	Dekoratív elemként szolgál.

2. Jobb oldali szekció
Ez tartalmazza a regisztrációs űrlapot és az összes felhasználói interakciós lehetőséget.

Funkciók és gombok részletes leírása
1. Vissza gomb (bal felső sarok)
	•	Megjelenés:
	•	SVG ikon (balra mutató nyíl).
	•	Szín: alapértelmezetten szürke, hover állapotban fekete.
	•	Méret: 24x24px.
	•	Funkció:
	•	A gomb visszairányítja a felhasználót a bejelentkezési oldalra (/login).
	•	Működés:
	•	A router.push('/login') függvény használatával történik az átirányítás.

2. Regisztrációs űrlap
Az űrlap több mezőt tartalmaz a felhasználó adatainak megadására.
Űrlapmezők
	•	Vezetéknév mező:
	•	Funkció: A felhasználó vezetéknevének megadására szolgál.
	•	Stílus:
	•	Placeholder: "Vezetéknév".
	•	Szegély: szürke, aktív állapotban piros.
	•	Keresztnév mező:
	•	Funkció: A felhasználó keresztnevének megadására szolgál.
	•	Stílus:
	•	Placeholder: "Keresztnév".
	•	Szegély: hasonló a vezetéknév mezőhöz.
	•	Email mező:
	•	Funkció: A felhasználó e-mail címének megadására szolgál.
	•	Stílus:
	•	Placeholder: "Email".
	•	Szegély és stílus hasonló az előző mezőkhöz.
	•	Jelszó mező:
	•	Funkció: A felhasználó jelszavának megadására szolgál.
	•	Stílus:
	•	Placeholder: "Jelszó".
	•	Szegély és stílus hasonló az előző mezőkhöz.
	•	Jelszó megerősítése mező:
	•	Funkció: A megadott jelszó ellenőrzésére szolgál.
	•	Stílus:
	•	Placeholder: "Jelszó mégegyszer".
	•	Szegély és stílus hasonló az előző mezőkhöz.
Regisztráció gomb
	•	Funkció:
	•	Az űrlap beküldésére és a regisztrációs folyamat elindítására szolgál.
	•	Az API /api/register végpontját hívja meg.
	•	Megjelenés:
	•	Szín: alapértelmezetten szürke, hover állapotban fekete.
	•	Szöveg: "Regisztráció".
	•	Stílus: lekerekített sarkok, közepesen vastag betűk.
Hibaüzenetek és visszajelzések
	•	Helytelen jelszók párosítása esetén:
	•	Üzenet: "A jelszavak nem egyeznek! Próbáld újra!".
	•	Piros hátterű hibaüzenet jelenik meg az űrlap tetején.
	•	Sikertelen regisztráció esetén:
	•	Az API által visszaadott hibaüzenet jelenik meg (pl. "Valami félrement").
	•	Sikeres regisztráció esetén:
	•	A felhasználót automatikusan átirányítja a bejelentkezési oldalra.

3. Belépés hivatkozás
	•	Elhelyezkedés: Az űrlap alatt, középre igazítva.
	•	Funkció:
	•	Átirányítja a felhasználót a bejelentkezési oldalra (/login).
	•	Megjelenés:
	•	Szöveg: "Már van fiókod? Belépés".
	•	Stílus:
	•	Szín: piros, hover állapotban aláhúzott.

Regisztrációs folyamat működése
	•	A felhasználó kitölti a szükséges mezőket.
	•	A "Regisztráció" gombra kattint:
	•	A mezők tartalma JSON formátumban elküldésre kerül az API /api/register végpontjára.
	•	Az API válaszától függően:
	•	Sikeres regisztráció: A felhasználót átirányítja a /login oldalra.
	•	Hiba esetén: A felhasználó egy hibaüzenetet lát.

Felület reszponzivitása
	•	Nagy képernyőkön:
	•	A bal oldalon háttérkép, a jobb oldalon az űrlap található.
	•	Kisebb képernyőkön:
	•	A bal oldali háttérkép nem látható.
	•	Az űrlap kitölti a teljes képernyőt.

