"use client";

import React from "react";
import { FaArrowLeft } from "react-icons/fa"; 
import Link from "next/link";

const AdatkezelesPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
    
      {

      /* v issza ikon a bal felső sarokban, csak hogy legyen 
      
      */}
      
      <button
        onClick={() => window.history.back()}
        className="absolute top-4 left-4 text-white bg-red-950 p-3 rounded-full shadow-lg hover:bg-red-700 hover:text-gray-200 transition"
        aria-label="Vissza"
      >
        <FaArrowLeft size={24} /> 
      </button>

      {/*
      
      a bal oldali rész 
      
      */}

      <div
        className="w-full md:w-1/2 h-1/2 md:h-screen flex items-center justify-center text-white relative"
        style={{
          backgroundImage: "url('/adatvedelem_hatter.jpg')",
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
        <div className=" bg-opacity-50 p-6 rounded-lg shadow-xl text-center">
          <h2 className="text-4xl font-extrabold tracking-wide mb-4 text-red-900">
            Adatkezelés
          </h2>
          <p className="text-lg font-light mb-6">
            Olvassa el adatvédelmi szabályzatunkat és a jogait.
          </p>
          <Link href="/adatkezeles">
            <button className="bg-black text-white text-lg font-bold px-8 py-4 rounded-lg hover:bg-red-800 transition">
              Adatkezelés és Jogok
            </button>
          </Link>
        </div>
      </div>

      {/*
      
      jobb oldali szekció, csak hogy legyen
      
      */}


      <div
        className="w-full md:w-1/2 h-1/2 md:h-screen flex items-center justify-center text-white relative"
        style={{
          backgroundImage: "url('/adat_suti.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/*
        
       itt vannak a szövegek
        
        */}

        <div className=" bg-opacity-50 p-6 rounded-lg shadow-xl text-center">
          <h2 className="text-4xl font-extrabold tracking-wide mb-4 text-red-900">
            Sütikezelés
          </h2>
          <p className="text-lg font-light mb-6">
            Tudjon meg többet a sütik használatáról és beállításairól.
          </p>
          <Link href="/sutikezeles">
            <button className="bg-black text-white text-lg font-bold px-8 py-4 rounded-lg hover:bg-red-800 transition">
              Süti Kezelés
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdatkezelesPage;
