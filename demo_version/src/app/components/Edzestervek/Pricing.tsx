// src/app/components/PricingPage.tsx
import React from 'react';
import bk from "../Edzestervek/edzesterv_kep.jpg";  // A hátteret tartalmazó kép helyes elérési útja
import Link from "next/link";

const PricingPage = () => {
  return (
    <div
      id="PricingPage"
      className="min-h-screen flex flex-col items-center justify-center text-white py-12"
      style={{
        backgroundImage: `url(${bk.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <h2 className="text-6xl font-bold mb-8">Az ára egy jobb életnek</h2>
      <div className="flex flex-wrap justify-around items-stretch w-full max-w-7xl p-4">
        
        {/* 
        
       Ingyenses
        
        */}

        <div className="bg-white text-black rounded-xl p-8 flex-1 m-4 shadow-xl transition-transform duration-300 hover:scale-105">
          <h2 className="text-2xl font-bold mb-4">Ingyenes</h2>
          <p className="mb-4">Egyszerű kezdés kezdőknek</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Heti alap edzésterv.</li>
            <li>Korlátozott hozzáférés videós oktatóanyagokhoz.</li>
            <li>Emailes ügyfélszolgálat.</li>
          </ul>
          <p className="text-3xl font-bold py-2">INGYENES</p>
          <Link href="/register">
              <button className="w-full py-3 bg-black text-white rounded-lg font-bold">
              Hozz létre egy fíókot magadnak
              </button>
            </Link>
        </div>

        {/* 
        
       Közepes
        
        */}

        <div className="bg-white text-black rounded-xl p-8 flex-1 m-4 shadow-xl transition-transform duration-300 hover:scale-105">
          <h2 className="text-2xl font-bold mb-4">Pro</h2>
          <p className="mb-4">Maximális eredmény elérése</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Teljes edzésterv.</li>
            <li>Táplálkozási ajánlások.</li>
            <li>Hozzáférés élő edzésekhez.</li>
            <li>Gyorsabb ügyféltámogatás.</li>
          </ul>
          <p className="text-3xl font-bold py-2">6000HUF / hónap</p>
          <Link href="/register">
              <button className="w-full py-3 bg-black text-white rounded-lg font-bold">
                Hozz létre egy fíókot magadnak
              </button>
            </Link>
        </div>

        {/* 
        
       Premium
        
        */}

        <div className="bg-red-900 text-white rounded-xl p-8 flex-1 m-4 shadow-xl transition-transform duration-300 hover:scale-105">
          <h2 className="text-2xl font-bold mb-4">Premium</h2>
          <p className="mb-4">Prémium élmény és szakmai támogatás</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Személyre szabott edzésterv.</li>
            <li>Egyéni konzultáció szakértővel.</li>
            <li>Exkluzív tartalmak és események.</li>
            <li>Korlátlan hozzáférés minden funkcióhoz.</li>
          </ul>
          <p className="text-3xl font-bold py-2">13000HUF / hónap</p>
          <Link href="/register">
              <button className="w-full py-3 bg-white text-black rounded-lg font-bold">
                Hozz létre egy fíókot magadnak
              </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
