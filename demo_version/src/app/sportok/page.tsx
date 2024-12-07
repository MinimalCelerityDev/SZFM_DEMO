"use client";

const SportokPage = () => {
  return (
    <div
      id="SportokPage"
      className="min-h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage: `url('/sportok_kep.jpg')`,
      }}
    >
      <div className="container mx-auto px-6 py-16 text-center rounded-xl">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white bg-opacity-20 p-8 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-opacity-30">
            <h2 className="text-2xl font-semibold text-red-800 mb-6">Egészséges életmód megtartás</h2>
            <p className="text-lg text-gray-200 mb-4">
              Tudd meg, hogyan érheted el és tarthatod meg a legjobb formádat az egészséges életmód követésével!
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Ajánlott heti aktivitás: 3-5 alkalom
            </p>
            <p className="text-sm text-gray-400 mb-6">
              Legjobb sportok: Futás, Jóga, Úszás
            </p>
            <a
              href="#"
              className="inline-block py-2 px-6 bg-red-900 text-white rounded-full transition-all hover:bg-red-800"
            >
              Tudj meg többet
            </a>
          </div>

          <div className="bg-white bg-opacity-20 p-8 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-opacity-30">
            <h2 className="text-2xl font-semibold text-red-800 mb-6">Testépítés / Szálkásítás</h2>
            <p className="text-lg text-gray-200 mb-4">
              Ismerd meg a testépítés és szálkásítás alapjait, hogy izmosabbá és erősebbé válj!
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Ajánlott heti aktivitás: 4-6 alkalom
            </p>
            <p className="text-sm text-gray-400 mb-6">
              Legjobb sportok: Súlyemelés, HIIT edzés, Kettlebell
            </p>
            <a
              href="#"
              className="inline-block py-2 px-6 bg-red-900 text-white rounded-full transition-all hover:bg-red-800"
            >
              Tudj meg többet
            </a>
          </div>

          <div className="bg-white bg-opacity-20 p-8 rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:bg-opacity-30">
            <h2 className="text-2xl font-semibold text-red-800 mb-6">Hobbi sportok</h2>
            <p className="text-lg text-gray-200 mb-4">
              Fedezd fel a hobbi sportokat, amelyek segítenek kikapcsolódni és élvezni az aktív életet!
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Ajánlott heti aktivitás: 2-3 alkalom
            </p>
            <p className="text-sm text-gray-400 mb-6">
              Legjobb sportok: Kerékpározás, Tenisz, Túrázás
            </p>
            <a
              href="#"
              className="inline-block py-2 px-6 bg-red-900 text-white rounded-full transition-all hover:bg-red-800"
            >
              Tudj meg többet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportokPage;
