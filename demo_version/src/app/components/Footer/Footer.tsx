import React from 'react';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; 

const Footer: React.FC = () => {
  return (
    <footer className="bg-red-950 text-white font-bold p-12 text-center relative transition duration-500 ease-in-out transform hover:scale-105">
    
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

      {/*
      
      Alsó rész a gombokkal

      */}


      <nav className="text-lg border-t border-white/20 pt-6 mt-6">
        <a href="#" className="hover:text-gray-300 px-3" title="Home">FŐOLDAL</a>
        <a href="#" className="hover:text-gray-300 px-3" title="About Us">FEATURES</a>
        <a href="#" className="hover:text-gray-300 px-3" title="Our Works">PRICING</a>
        <a href="#" className="hover:text-gray-300 px-3" title="Client Reviews">PROGRAMS</a>
        <a href="/adatkezeles_es_sutik" className="hover:text-gray-300 px-3" title="Contact Us">ADATKEZELÉS ÉS SÜTIK</a>
        <a href="#" className="hover:text-gray-300 px-3" title="Contact Us">CONTACT</a>
      </nav>
    </footer>
  );
};

export default Footer;
