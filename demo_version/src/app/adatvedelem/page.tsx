"use client";

import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const AdatvedelemPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: "url('/adatvedelem_hatter.jpg')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/*
      
      vissza gomb elhelyezkedése
      
      */}

      <button
        onClick={() => window.history.back()}
        className="absolute top-8 left-8 text-black bg-white p-3 rounded-full shadow-lg hover:bg-red-700 hover:text-gray-200 transition"
        aria-label="Vissza"
      >
        <FaArrowLeft size={24} />
      </button>

      {/*
      
      tartalom része
      
      */}

      <div className="bg-black bg-opacity-60 p-6 rounded-lg shadow-xl text-center max-w-4xl overflow-y-auto">
        <h1 className="text-5xl font-extrabold text-red-700 mb-6 pt-10">Adatvédelmi Szabályzat</h1>

        <p className="text-lg leading-relaxed mb-4 pt-10">
          Ez az adatvédelmi szabályzat részletezi, hogyan gyűjtjük, használjuk és védjük az Ön személyes adatait. Kérjük, olvassa el figyelmesen, hogy megértse, hogyan kezeljük az adatait, és hogyan biztosítjuk azok biztonságát.
        </p>

        {/*
        
        hosszúságos adatvédelmi szövegecske
        
        */}


        <p className="text-lg leading-relaxed mb-4">
          <strong>1. Az Ön személyes adatainak gyűjtése:</strong> A weboldalunk használata során bizonyos információkat gyűjtünk Önről, például:
        </p>
        <ul className="list-disc list-inside text-left mb-4">
          <li>Név, e-mail cím, telefonszám, és egyéb elérhetőségi adatok.</li>
          <li>IP-cím, böngésző típusa és verziója, valamint operációs rendszer.</li>
          <li>Weboldalunk használatával kapcsolatos információk, például a meglátogatott oldalak.</li>
        </ul>

        <p className="text-lg leading-relaxed mb-4">
          <strong>2. Az Ön adatainak felhasználása:</strong> Az Ön által megadott adatokat az alábbi célokra használjuk fel:
        </p>
        <ul className="list-disc list-inside text-left mb-4">
          <li>Szolgáltatásaink nyújtása és fejlesztése.</li>
          <li>Kapcsolattartás Önnel ügyfélszolgálati kérdések esetén.</li>
          <li>Marketing célokra, amennyiben ehhez kifejezetten hozzájárult.</li>
        </ul>

        <p className="text-lg leading-relaxed mb-4">
          <strong>3. Adatok megosztása harmadik felekkel:</strong> Személyes adatait kizárólag az alábbi esetekben osztjuk meg harmadik felekkel:
        </p>
        <ul className="list-disc list-inside text-left mb-4">
          <li>Ha ezt jogszabály előírja.</li>
          <li>Ha Ön kifejezetten hozzájárul az adatok megosztásához.</li>
          <li>Ha harmadik féllel szerződésben állunk, és az adatkezelés szükséges a szolgáltatásaink nyújtásához.</li>
        </ul>

        <p className="text-lg leading-relaxed mb-4">
          <strong>4. Az Ön adatainak védelme:</strong> Minden szükséges technikai és szervezeti intézkedést megteszünk az Ön adatainak biztonságos kezelése érdekében. Ez magában foglalja az adatok titkosítását és a hozzáférés korlátozását.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          <strong>5. Az Ön jogai:</strong> Az adatvédelmi jogszabályok értelmében Önnek joga van:
        </p>
        <ul className="list-disc list-inside text-left mb-4">
          <li>Hozzáférni az általunk tárolt személyes adataihoz.</li>
          <li>Kérni adatai helyesbítését vagy törlését.</li>
          <li>Ellenvetést tenni az adatai feldolgozása ellen.</li>
          <li>Adathordozhatóságot igényelni, ha az adatok feldolgozása hozzájáruláson vagy szerződésen alapul.</li>
        </ul>

        <p className="text-lg leading-relaxed mb-4">
          <strong>6. Adatmegőrzés:</strong> Az Ön adatait csak addig tároljuk, amíg az szükséges a jelen szabályzatban meghatározott célok eléréséhez, vagy ameddig jogszabály előírja.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          <strong>7. Sütik és hasonló technológiák:</strong> A weboldalunk sütiket használ a felhasználói élmény javítása érdekében. További információért olvassa el a Süti Politika dokumentumunkat.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          <strong>8. Kapcsolatfelvétel:</strong> Ha bármilyen kérdése van az adatvédelmi szabályzatunkkal kapcsolatban, kérjük, lépjen kapcsolatba velünk az ügyfélszolgálaton keresztül.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          <strong>9. Frissítések:</strong> Fenntartjuk a jogot az adatvédelmi szabályzatunk bármikori módosítására. Az aktuális szabályzatot mindig ezen az oldalon találja meg.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          Köszönjük, hogy elolvasta az adatvédelmi szabályzatunkat. Reméljük, hogy a weboldalunk használata során minden kérdésére választ talál.
        </p>
      </div>
    </div>
  );
};

export default AdatvedelemPage;
