import Link from "next/link";
import Image from "next/image";
import cuccos from "../LandingPage/cucos.png"; 

const LandingPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${cuccos.src})`, 
      }}
    >
        
      {/* 
      
      Itt található a navbar részleg 
      
      */}

      <nav
        className="w-full flex justify-between items-center px-10 py-4 fixed z-50 bg-opacity-70 bg-black shadow-md"
        style={{
          top: "50px", 
        }}
      >

        {/*

        Ide kell majd egy vagány Logot kitatálni

         */}

        <div className="text-5xl font-extrabold text-white tracking-wide hover:scale-105 transition-transform">
          FFLIFE
        </div>

        {/* 
        
        Itt lesz a desktop menü
        
        */}

        <div className="hidden lg:flex items-center gap-8">

          {/*
          
          Itt találahatóak a menüpontok 
          
          */}

          <ul className="flex gap-6 text-lg font-semibold text-gray-300">
            <li className="relative group cursor-pointer">
              <span className="text-white group-hover:text-red-500 transition duration-300">FEATURES</span>
              <div className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></div>
            </li>
            <li className="relative group cursor-pointer">
              <span className="text-white group-hover:text-red-500 transition duration-300">PRICING</span>
              <div className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></div>
            </li>
            <li className="relative group cursor-pointer">
              <span className="text-white group-hover:text-red-500 transition duration-300">RESOURCES</span>
              <div className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></div>
            </li>
            <li className="relative group cursor-pointer">
              <span className="text-white group-hover:text-red-500 transition duration-300">CONTACT</span>
              <div className="absolute left-0 bottom-[-5px] w-0 h-[2px] bg-red-500 transition-all duration-300 group-hover:w-full"></div>
            </li>
          </ul>

          {/* 
          
            A login és a registeres dolog, jobb felső sarokban
          
          */}
          <div className="flex gap-3">
            <Link href="/login">
              <button className="px-6 py-3 text-white bg-black rounded-xl border-2 border-white hover:bg-white hover:text-black transition-all duration-400 shadow-lg">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="px-6 py-3 text-white bg-red-950 rounded-xl border-2 border-red hover:bg-black hover:text-red-500 transition-all duration-400 shadow-lg">
                Register
              </button>
            </Link>
          </div>
        </div>

        {/* 
        
        Majd itt lesz implementálva a hamburger menü
        
        */}

      </nav>
    </div>
  );
};

export default LandingPage;
