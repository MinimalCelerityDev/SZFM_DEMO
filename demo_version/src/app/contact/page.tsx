"use client";

import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    alert("Üzenet elküldve!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      id="ContactPage"
      className="min-h-screen flex flex-col justify-between bg-white"
      style={{
        backgroundImage: `url('/kontakt_kep.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container relative z-10 mx-auto px-8 py-12 bg-opacity-80 bg-white rounded-lg shadow-xl">
        {/* Cím */}
        <h1 className="text-4xl font-extrabold text-center text-red-900 tracking-tight mb-8 uppercase">
          Kapcsolat
        </h1>
        
        {/* Leírás */}
        <p className="text-center text-lg text-red-900 mb-6 px-6">
          Kérdésekkel, javaslatokkal bátran kereshetsz minket!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Név */}
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-4 bg-transparent border-b-2 border-red-900 text-black text-base focus:outline-none focus:ring-0"
              placeholder="Név"
              required
            />
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-4 bg-transparent border-b-2 border-red-900 text-black text-base focus:outline-none focus:ring-0"
              placeholder="Email"
              required
            />
          </div>

          {/* Üzenet */}
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-4 bg-transparent border-b-2 border-red-900 text-black text-base focus:outline-none focus:ring-0"
              placeholder="Üzenet"
              rows="4"
              required
            />
          </div>

          {/* Küldés gomb */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-900 hover:bg-red-700 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
            >
              Üzenet küldése
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Logo és információk */}
            <div className="flex flex-col items-center sm:items-start">
              <h1 className="text-4xl font-extrabold text-red-700 mb-4">FFLIFE</h1>
              <p className="text-lg text-gray-400 mb-4">
                A legjobb hely, ahol egy jó testet fel lehet építeni.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            
            {/* Kapcsolat */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-xl font-semibold text-white mb-4">Kapcsolat</h3>
              <ul className="space-y-2">
                <li><a href="tel:+123456789" className="text-gray-400 hover:text-white transition-colors">Telefon: +111 222 3339</a></li>
                <li><a href="mailto:info@weboldal.com" className="text-gray-400 hover:text-white transition-colors">Email: info@fflife.com</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cím: Debrecen, Kassai út.1</a></li>
              </ul>
            </div>

            {/* Hasznos linkek */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-xl font-semibold text-white mb-4">Hasznos Linkek</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">Étrendek</a></li>
                <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Árak</a></li>
                <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Sportok</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>
            
            {/* Hírek és blog */}
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-xl font-semibold text-white mb-4">Jogi nyilatkozatok</h3>
              <ul className="space-y-2">
                <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Süti kezelés</a></li>
                <li><a href="/news" className="text-gray-400 hover:text-white transition-colors">Adatkezelői nyilatkozat</a></li>
              </ul>
            </div>
            
          </div>

          <div className="mt-12 border-t border-gray-700 pt-6">
            <p className="text-center text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} FFlife. Minden jog fenntartva.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
