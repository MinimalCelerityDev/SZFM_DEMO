"use client";

import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const SutiPolitikaPage = () => {
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

      <div className="bg-black bg-opacity-60 p-6 rounded-lg shadow-xl pt-10 text-center max-w-4xl overflow-y-auto">
        <h1 className="text-5xl font-extrabold text-red-700 underline mb-6">Süti Politika</h1>

        <p className="text-lg leading-relaxed mb-4 pt-8">
          Ez a süti politika részletezi, hogyan használjuk a sütiket a weboldalunkon, és hogyan védjük az Ön adatait.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          <strong>1. Mi az a süti?</strong> A sütik kis szövegfájlok, amelyeket a böngésző tárol az Ön eszközén. Segítenek a weboldalaknak felismerni Önt, megjegyezni az előző látogatásait, és javítani a szolgáltatások működését.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          <strong>2. Milyen típusú sütiket használunk?</strong> Alapvetően kétféle sütit alkalmazunk:
        </p>
        <ul className="list-disc list-inside text-left mb-4">
          <li><strong>Funkcionális sütik:</strong> Ezek biztosítják az oldal alapvető működését.</li>
          <li><strong>Analitikai sütik:</strong> Ezek segítenek megérteni, hogyan használják látogatóink az oldalt.</li>
          <li><strong>Analitikai sütik:</strong> Ezek segítenek megérteni, hogyan használják látogatóink az oldalt.</li>
          <li><strong>Analitikai sütik:</strong> Ezek segítenek megérteni, hogyan használják látogatóink az oldalt.</li>
          <li><strong>Analitikai sütik:</strong> Ezek segítenek megérteni, hogyan használják látogatóink az oldalt.</li>

        </ul>

        <p className="text-lg leading-relaxed mb-4">
          <strong>3. Harmadik féltől származó sütik:</strong> Bizonyos sütiket külső szolgáltatók helyeznek el, például analitikai eszközök vagy reklámszolgáltatók.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          <strong>4. Miért használunk sütiket?</strong> A sütik segítségével emlékszünk az Ön preferenciáira, javítjuk a weboldal működését, és biztosítjuk a személyre szabott élményt.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          <strong>5. Hogyan kezelheti a sütiket?</strong> A böngészője beállításain keresztül ellenőrizheti és módosíthatja a sütik használatát. Azonban bizonyos sütik letiltása befolyásolhatja az oldal működését.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          <strong>6. Mi történik, ha letiltod a sütiket?</strong> Ha letiltja a sütiket, bizonyos funkciók nem működhetnek megfelelően, és a weboldal teljesítménye csökkenhet.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          <strong>7. Adatvédelem:</strong> A sütik által gyűjtött információk biztonságosan tárolódnak, és kizárólag a jelen süti politikában meghatározott célokra használjuk fel őket.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <strong>7. Adatvédelem:</strong> A sütik által gyűjtött információk biztonságosan tárolódnak, és kizárólag a jelen süti politikában meghatározott célokra használjuk fel őket.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <strong>7. Adatvédelem:</strong> A sütik által gyűjtött információk biztonságosan tárolódnak, és kizárólag a jelen süti politikában meghatározott célokra használjuk fel őket.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          <strong>8. Frissítések:</strong> Fenntartjuk a jogot a süti politikánk bármikori módosítására. A változtatásokat ezen az oldalon fogjuk közzétenni.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          <strong>9. Kapcsolatfelvétel:</strong> Ha kérdése van a süti politikával kapcsolatban, kérjük, forduljon hozzánk az ügyfélszolgálaton keresztül.
        </p>
      </div>
    </div>
  );
};

export default SutiPolitikaPage;
