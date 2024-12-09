"use client"

import Link from "next/link";
import Image from "next/image";
import cuccos from "../LandingPage/cucos.png"; 
import { useState } from "react";


const LandingPage = () => {

  const scrollToPrcing = () => {
    document.getElementById('PricingPage').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPrograms = () => {
    document.getElementById('ProgramsPage').scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('ContactPage').scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (event) => {
    const newCalories = parseInt(event.target.value, 10);
    if (!isNaN(newCalories)) {
      setTotalCalories(newCalories);
    }
  };


  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${cuccos.src})`, 
      }}
    >
      <nav
        className="w-full flex justify-between items-center px-10 py-4 fixed z-50 bg-opacity-70 shadow-md"
        style={{
          top: "50px", 
        }}
      >
        <div className="text-5xl font-extrabold text-white tracking-wider hover:scale-105 transition-transform">
          <span className="text-red-500">FF</span>LIFE
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex gap-6 text-lg font-semibold text-gray-300">
            <li className="relative group cursor-pointer" onClick={scrollToPrcing}>
              <span className="text-white group-hover:text-red-500 transition duration-300">Edzéstervek/Étrendek</span>
              <div className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></div>
            </li>
            <li className="relative group cursor-pointer" onClick={scrollToPrograms}>
              <span className="text-white group-hover:text-red-500 transition duration-300">FAQ</span>
              <div className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></div>
            </li>
            <li className="relative group cursor-pointer" onClick={scrollToContact}>
              <span className="text-white group-hover:text-red-500 transition duration-300">Kapcsolat</span>
              <div className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></div>
            </li>
          </ul>

          <div className="flex gap-3">
            <Link href="/login">
              <button className="px-6 py-3 text-white bg-black rounded-xl border-2 border-white hover:bg-white hover:text-black transition-all duration-400 shadow-lg">
                Belépés
              </button>
            </Link>
            <Link href="/register">
              <button className="px-6 py-3 text-white bg-red-950 rounded-xl border-2 border-red hover:bg-black hover:text-red-500 transition-all duration-400 shadow-lg">
                Regisztráció
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="flex-grow flex items-center justify-center text-center text-white p-6">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-tight font-serif">
            Kezdj el változtatni az életedben <span className="text-red-700">még ma</span>
          </h1>
          <p className="text-2xl font-serif md:text-3xl text-gray-200 font-light">
            Minden egy <span className="text-5xl text-red-500"> döntéssel</span> kezdődik. Az első lépés a változás felé nálunk kezdődik. Itt az ideje, hogy a legjobb formádat hozd, és elérd a céljaidat.
          </p>
          <p className="text-2xl text-gray-300 font-serif">
            Az életet nem várni kell, hanem <span className="font-extrabold text-4xl text-red-500">alakítani</span>. 
          </p>


          <div className="mt-8 flex justify-center gap-6">
            <button
              onClick={scrollToPrcing}
              className="px-8 py-3 text-lg font-semibold bg-red-500 text-white rounded-full shadow-xl hover:bg-red-600 transition duration-300 transform hover:scale-105"
            >
              Fedezd fel az edzésterveket és az étrendeket
            </button>
            <button
              onClick={scrollToPrograms}
              className="px-8 py-3 text-lg font-semibold bg-transparent border-2 border-white text-white rounded-full shadow-xl hover:bg-white hover:text-black transition duration-300 transform hover:scale-105"
            >
              Tudj meg többet 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;