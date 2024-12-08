"use client";

import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const SutikezelesPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: "url('/adatvedelem_hatter.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <button
        onClick={() => window.history.back()}
        className="absolute top-4 left-4 text-white bg-red-950 p-3 rounded-full shadow-lg hover:bg-red-700 hover:text-gray-200 transition"
        aria-label="Vissza"
      >
        <FaArrowLeft size={24} />
      </button>

      <div className="text-black font-bold bg-opacity-60 p-6 rounded-lg shadow-xl text-center max-w-3xl overflow-y-auto">
        <h1 className="text-5xl text-red-800 pt-8 font-extrabold mb-6">Sütikezelési Szabályzat</h1>
        <p className="text-lg leading-relaxed mb-4">
          Tudj meg többet a sütik használatáról és a beállításaid kezeléséről. Görgess le a további információkért.
        </p>

        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Sütik</span> olyan kis méretű szövegfájlok, amelyeket a weboldal helyez el a
          böngésződben. Ezek lehetővé teszik a weboldal számára, hogy felismerjen téged, és javítsa a felhasználói
          élményt.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Céljuk</span>, hogy információt gyűjtsenek arról, hogyan használod az oldalt,
          például melyik oldalakat látogatod, és milyen beállításokat preferálsz.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Azonosítás</span> alapján megkülönböztetjük az állandó és ideiglenes sütiket.
          Az állandó sütik hosszabb ideig tárolódnak, míg az ideiglenes sütik a böngésző bezárásakor törlődnek.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Típusok:</span> Funkcionális sütik biztosítják a weboldal alapvető
          működését, míg analitikai sütik segítenek javítani a weboldal teljesítményét.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Harmadik</span> féltől származó sütik olyan szolgáltatásokból eredhetnek,
          amelyeket a weboldalon használsz, például közösségi média pluginok.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Elfogadás</span> és beállítások: A weboldal használata előtt lehetőséged van
          a sütik elfogadására vagy testreszabására.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Kezelés:</span> Böngésződ beállításaiban módosíthatod, mely sütik
          használatát engedélyezed. Fontos azonban megjegyezni, hogy bizonyos sütik elutasítása befolyásolhatja az
          oldal működését.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Példák:</span> Sütik segítségével tároljuk a bejelentkezési adataidat, hogy
          ne kelljen minden alkalommal újra megadnod azokat.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Adatvédelem:</span> A sütik nem tartalmaznak személyes adatokat, és csak a
          weboldal működéséhez szükséges információkat tárolják.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">További</span> információért olvasd el a részletes sütikezelési szabályzatot,
          amely tartalmazza az összes szükséges tudnivalót.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Kérdések</span> esetén fordulj bizalommal ügyfélszolgálatunkhoz.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Böngésző</span> frissítése vagy cseréje esetén ne felejtsd el újra
          beállítani a sütikkel kapcsolatos preferenciáidat.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Köszönjük</span>, hogy időt szántál a sütikezelési szabályzatunk elolvasására.
          Reméljük, hogy minden kérdésedre választ kaptál!
        </p>
      </div>
    </div>
  );
};

export default SutikezelesPage;
