"use client"

import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; 

const Footer: React.FC = () => {

    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };


  return (
    <footer className="bg-gray-950 text-white font-bold p-12 text-center relative transition duration-500 ease-in-out transform hover:scale-105">
    
      {/*
      
      Let's talk gomb
      
      */}
    
      <div className="flex justify-center items-center mb-8">
        <div className="p-6 rounded-full bg-white text-black inline-flex items-center justify-center w-24 h-24 shadow-xl hover:bg-gray-800 transition duration-300">
          <span className="font-semibold text-lg">Let's Talk</span>
        </div>
      </div>

      {/*
      
     email cím
      
      */}

      <p className="mb-6 text-xl font-bold">fflife@gmail.com</p>

      {/* 
      
      ikonok
      
      */}

      <div className="flex justify-center gap-8 mb-6 text-xl">
        <a href="#" className="hover:text-gray-300" title="Follow us on Instagram"><FaInstagram /></a>
        <a href="#" className="hover:text-gray-300" title="Like us on Facebook"><FaFacebookF /></a>
        <a href="#" className="hover:text-gray-300" title="Follow us on Twitter"><FaTwitter /></a>
        <a href="#" className="hover:text-gray-300" title="Connect on LinkedIn"><FaLinkedinIn /></a>
      </div>

      {/* Footer Navigation */}
      <nav className="text-lg border-t border-white/20 pt-6 mt-6">
        <button onClick={() => scrollToSection('LandingPage')} className="hover:text-gray-300 px-3" title="Home">FŐOLDAL</button>
        <button onClick={() => scrollToSection('PricingPage')} className="hover:text-gray-300 px-3" title="Edzéstervek">EDZÉSTERVEK</button>
        <a href="/adatkezeles_es_sutik" className="hover:text-gray-300 px-3" title="Adatkezelés és sütik">ADATKEZELÉS ÉS SÜTIK</a>
        <button onClick={() => scrollToSection('ContactPage')} className="hover:text-gray-300 px-3" title="Kapcsolat">KAPCSOLAT</button>
      </nav>
    </footer>
  );
};

export default Footer;
