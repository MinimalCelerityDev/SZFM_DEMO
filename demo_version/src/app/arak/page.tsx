"use client";

const ArakSportokPage = () => {
  return (
    <div
      id="ArakPage"
      className="min-h-screen flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url('/arak_oldal.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-lg text-red-600 mb-6">
          Válassz a három különböző csomag közül, hogy elérd a céljaidat és a legjobb formádat! Minden csomag tartalmaz egy sportot és egy étrendet.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            id="package1"
            className="bg-gradient-to-tl from-black via-gray-800 to-black p-4 rounded-lg shadow-sm text-center transform transition duration-300 hover:scale-105"
          >
            <h2 className="text-2xl font-bold text-red-500">Csomag 1</h2>
            <p className="text-lg mt-2 text-gray-300">3000 HUF</p>
            <div className="mt-3">
              <h3 className="text-base text-white">Tartalmazza:</h3>
              <ul className="text-left text-white-300 mt-2">
                <li>- Egészséges életmód sport: Futás</li>
                <li>- 1 étrend (Alap étrend)</li>
                <li>- Heti 1 étkezés</li>
                <li>- Alap információk és tanácsok</li>
                <li>- Emailes támogatás</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-xl shadow-sm transform transition-all duration-300 hover:scale-105 hover:bg-opacity-30 mt-4">
              <h3 className="text-base font-semibold text-red-800 mb-3">Tervek az Egészséges életmód megtartásához</h3>
              <p className="text-sm text-gray-200 mb-2">
                Tudd meg, hogyan érheted el és tarthatod meg a legjobb formádat az egészséges életmód követésével és csomag igénylésével.
              </p>
              <p className="text-xs text-gray-400 mb-2">
                Ajánlott heti aktivitás: 3-5 alkalom
              </p>
              <p className="text-xs text-gray-400 mb-3">
                Legjobb sportok: Futás, Jóga, Úszás
              </p>
            </div>
            <a
              href="#"
              className="inline-block py-2 px-4 bg-red-900 text-white rounded-full transition-all hover:bg-red-800 mt-3"
            >
              Válaszd ezt a csomagot
            </a>
          </div>

          <div
            id="package2"
            className="bg-gradient-to-tl from-black via-gray-800 to-black p-4 rounded-lg shadow-sm text-center transform transition duration-300 hover:scale-105"
          >
            <h2 className="text-2xl font-bold text-red-500">Csomag 2</h2>
            <p className="text-lg mt-2 text-gray-300">6000 HUF</p>
            <div className="mt-3">
              <h3 className="text-base text-white">Tartalmazza:</h3>
              <ul className="text-left text-white-300 mt-2">
                <li>- Testépítés sport: Súlyemelés</li>
                <li>- 2 étrend (Pro étrend)</li>
                <li>- Heti 2 étkezés</li>
                <li>- Részletes étkezési terv</li>
                <li>- Emailes és telefonos támogatás</li>
                <li>- Hozzáférés prémium alapanyagokhoz</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-xl shadow-sm transform transition-all duration-300 hover:scale-105 hover:bg-opacity-30 mt-4">
              <h3 className="text-base font-semibold text-red-800 mb-3">Tervek a Testépítéshez / Szálkásításhoz</h3>
              <p className="text-sm text-gray-200 mb-2">
                Mekgapod a testépítés és szálkásítás alapjait, hogy izmosabbá és erősebbé válj!
              </p>
              <p className="text-xs text-gray-400 mb-2">
                Ajánlott heti aktivitás: 4-6 alkalom
              </p>
              <p className="text-xs text-gray-400 mb-3">
                Legjobb sportok: Súlyemelés, HIIT edzés, Kettlebell
              </p>
            </div>
            <a
              href="#"
              className="inline-block py-2 px-4 bg-red-900 text-white rounded-full transition-all hover:bg-red-800 mt-3"
            >
              Válaszd ezt a csomagot
            </a>
          </div>

          <div
            id="package3"
            className="bg-gradient-to-tl from-black via-gray-800 to-black p-4 rounded-lg shadow-sm text-center transform transition duration-300 hover:scale-105"
          >
            <h2 className="text-2xl font-bold text-yellow-500">Csomag 3</h2>
            <p className="text-lg mt-2 text-gray-300">10000 HUF</p>
            <div className="mt-3">
              <h3 className="text-base text-white">Tartalmazza:</h3>
              <ul className="text-left text-yellow-300 mt-2">
                <li>- Hobbi sport: Kerékpározás</li>
                <li>- 4 étrend (Premium étrend)</li>
                <li>- Heti 4 étkezés</li>
                <li>- Személyre szabott étkezési terv</li>
                <li>- 24/7 támogatás</li>
                <li>- Exkluzív prémium receptek</li>
                <li>- Ételallergia figyelembe vétele</li>
                <li>- Heti 1 személyes konzultáció</li>
              </ul>
            </div>
            <div className="bg-white bg-opacity-20 p-4 rounded-xl shadow-sm transform transition-all duration-300 hover:scale-105 hover:bg-opacity-30 mt-4">
              <h3 className="text-base font-semibold text-yellow-300 mb-3">Terveket hobbihoz</h3>
              <p className="text-sm text-gray-200 mb-2">
                Fedezd fel a hobbi sportokat, amelyek segítenek kikapcsolódni és élvezni az aktív életet, előfizetve a az aktuális csomagra.
              </p>
              <p className="text-xs text-gray-400 mb-2">
                Ajánlott heti aktivitás: 2-3 alkalom
              </p>
              <p className="text-xs text-gray-400 mb-3">
                Legjobb sportok: Kerékpározás, Tenisz, Túrázás
              </p>
            </div>
            <a
              href="#"
              className="inline-block py-2 px-4 bg-yellow-500 text-white rounded-full transition-all hover:bg-yellow-400 mt-3"
            >
              Válaszd ezt a csomagot
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArakSportokPage;
