"use client";

import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const JogiNyilatkozatPage = () => {
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
      <button
        onClick={() => window.history.back()}
        className="absolute top-8 left-8 text-black bg-white p-3 rounded-full shadow-lg hover:bg-red-700 hover:text-gray-200 transition"
        aria-label="Vissza"
      >
        <FaArrowLeft size={24} />
      </button>
      <div className="bg-white-300 bg-opacity-60 p-6 pt-16 rounded-lg shadow-xl text-center max-w-4xl overflow-y-auto">
        <h1 className="text-5xl font-extrabold text-white underline pt-10 mb-6">Jogi Nyilatkozat</h1>
        <p className="text-lg leading-relaxed mb-4">
          Ez a jogi nyilatkozat a weboldal használatával kapcsolatos jogi feltételeket és információkat tartalmazza.
          Kérjük, figyelmesen olvassa el, hogy megértse a jogait és kötelezettségeit a weboldal használata során.
        </p>

        {/* Hosszú jogi nyilatkozat */}
        <p className="text-lg leading-relaxed mb-4">
          <strong>1. Általános Feltételek:</strong> A weboldal használatával Ön elfogadja a jelen jogi nyilatkozatban
          foglalt feltételeket. Ha nem ért egyet ezekkel, kérjük, ne használja a weboldalt.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <strong>2. Tartalom Tulajdonjoga:</strong> Minden tartalom, beleértve a szövegeket, képeket, videókat és
          egyéb anyagokat, szerzői jogvédelem alatt áll, és a weboldal üzemeltetőjének tulajdonát képezik.
          Tilos a tartalmak másolása, terjesztése vagy bármilyen más módon történő felhasználása az üzemeltető írásos
          engedélye nélkül.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <strong>3. Felelősség Korlátozása:</strong> A weboldal üzemeltetője nem vállal felelősséget semmilyen közvetlen
          vagy közvetett kárért, amely a weboldal használatából ered. A weboldalon található információk kizárólag
          tájékoztató jellegűek, és nem helyettesítik a szakértői tanácsadást.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <strong>4. Hivatkozások Harmadik Fél Weboldalaira:</strong> A weboldal tartalmazhat olyan hivatkozásokat, amelyek
          harmadik fél weboldalaira mutatnak. Az üzemeltető nem vállal felelősséget ezeknek a weboldalaknak a tartalmáért
          vagy azok használatából eredő károkért.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <strong>5. Adatvédelem:</strong> Az üzemeltető elkötelezett az Ön személyes adatainak védelme iránt. Az adatvédelmi
          irányelvek részletesen meghatározzák, hogy milyen adatokat gyűjtünk, hogyan használjuk fel azokat, és hogyan
          védjük az Ön személyes adatait.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <strong>6. Felhasználói Kötelezettségek:</strong> Ön vállalja, hogy a weboldalt kizárólag jogszerű célokra használja,
          és nem végez olyan tevékenységet, amely sérti mások jogait vagy biztonságát.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <strong>7. Módosítások:</strong> Az üzemeltető fenntartja a jogot a jelen jogi nyilatkozat bármikori módosítására.
          A módosítások a weboldalon való közzétételtől számítva lépnek hatályba.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <strong>8. Joghatóság:</strong> A jelen jogi nyilatkozatot a helyi jogszabályok szerint kell értelmezni. Bármilyen
          jogvita esetén a helyi bíróságok kizárólagos joghatósággal rendelkeznek.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <strong>9. Kapcsolatfelvétel:</strong> Ha bármilyen kérdése van a jelen jogi nyilatkozattal kapcsolatban, kérjük,
          lépjen kapcsolatba velünk az ügyfélszolgálaton keresztül.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <strong>10. Elválaszthatóság:</strong> Ha a jelen jogi nyilatkozat bármely rendelkezése érvénytelennek vagy
          végrehajthatatlannak minősül, az nem érinti a többi rendelkezés érvényességét vagy végrehajthatóságát.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <strong>11. Kérjük:</strong> Olvassa el figyelmesen a fenti feltételeket, hogy megértse a weboldal használatával
          kapcsolatos jogait és kötelezettségeit. Az oldalt csak akkor használja, ha teljes mértékben elfogadja a jelen
          jogi nyilatkozatban foglaltakat.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          <strong>12. Köszönjük:</strong> hogy időt szánt a jelen jogi nyilatkozat elolvasására. Reméljük, hogy elégedett
          lesz a weboldalunk által nyújtott szolgáltatásokkal.
        </p>
      </div>
    </div>
  );
};

export default JogiNyilatkozatPage;
