"use client";

import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const AdatkezelesPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: "url('/fofoto.png')",
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

      <div className="text-black bg-opacity-60 p-6 rounded-lg shadow-xl font-bold text-lg text-center max-w-3xl">
        <h1 className="text-5xl text-red-800 pt-8 font-extrabold mb-6">Adatkezelési Szabályzat</h1>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Adatkezelés</span> az egyik legfontosabb tevékenységünk, amely biztosítja az ügyfeleink adatainak védelmét.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Adatok</span> kezelése során törekszünk a teljes átláthatóságra és biztonságra.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Kezelés</span> közben kizárólag a szükséges adatokat gyűjtjük és dolgozzuk fel.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Biztonság</span> garantálása érdekében modern technológiai megoldásokat alkalmazunk.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Rendszereink</span> rendszeres ellenőrzés alatt állnak, hogy megfeleljenek a legfrissebb adatvédelmi szabványoknak.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Ügyfeleink</span> bármikor jogosultak kérni az általunk tárolt adataik törlését vagy módosítását.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Adatvédelmi</span> irányelveink megfelelnek a nemzetközi szabályozásoknak, beleértve a GDPR-t.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Adatok</span> megosztása harmadik féllel csak az Ön kifejezett hozzájárulásával történik.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Minden</span> adatot szigorúan titkosan kezelünk, és azokat kizárólag az előre meghatározott célokra használjuk fel.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Kapcsolat</span> felvétel esetén az Ön által megadott adatokat kizárólag a kommunikáció céljára használjuk.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Szolgáltatásaink</span> használata során Ön hozzájárul az adatkezelési irányelveinkhez.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Bármikor</span> kérheti adatai másolatát az ügyfélszolgálatunkon keresztül.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Fontos</span> számunkra, hogy Ön tisztában legyen az adatvédelmi jogaival.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Elkötelezettek</span> vagyunk az átlátható és felelős adatkezelés mellett.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Célunk</span>, hogy Ön teljes bizalommal forduljon hozzánk adatkezelési kérdésekben.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Felhívjuk</span> figyelmét, hogy az irányelveink időről időre változhatnak.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <span className="text-red-800">Köszönjük</span>, hogy elolvasta adatvédelmi szabályzatunkat!
        </p>
      </div>
    </div>
  );
};

export default AdatkezelesPage;
