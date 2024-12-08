"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactPage = () => {


  const scrollToEtrendekPage = () => {
    setTimeout(() => {
      const etrendPage = document.getElementById("EtrendPage");
      if (etrendPage) {
        etrendPage.scrollIntoView({ behavior: "smooth" }); // Simán görgess oda
      }
    }, 100); // Várunk, hogy az elem betöltődjön
  };

  const scrollToArakPage = () => {
    setTimeout(() => {
      const arPage = document.getElementById("ArakPage");
      if (arPage) {
        arPage.scrollIntoView({ behavior: "smooth" }); // Simán görgess oda
      }
    }, 100); // Várunk, hogy az elem betöltődjön
  };

  const scrollToSportokPage = () => {
    setTimeout(() => {
      const sportPage = document.getElementById("SportokPage");
      if (sportPage) {
        sportPage.scrollIntoView({ behavior: "smooth" }); // Simán görgess oda
      }
    }, 100); // Várunk, hogy az elem betöltődjön
  };

  const scrollToContactPage = () => {
    setTimeout(() => {
      const contactPage = document.getElementById("ContactPage");
      if (contactPage) {
        contactPage.scrollIntoView({ behavior: "smooth" }); // Simán görgess oda
      }
    }, 100); // Várunk, hogy az elem betöltődjön
  };

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
    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    // Send email via EmailJS
    emailjs
      .send(
        "fflifedeik", // Your service ID from EmailJS
        "fflifedeiktemp", // Your template ID from EmailJS
        templateParams,
        "YNkX0HVTu2nBd5Kiz" // Your user ID from EmailJS
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Üzenet elküldve!");
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Hiba történt az üzenet küldésekor!");
        }
      );
    
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
      <div className="container relative z-10 mx-auto px-6 py-8 bg-opacity-80 bg-white rounded-lg shadow-xl max-w-lg">
        {/* Cím */}
        <h1 className="text-3xl font-extrabold text-center text-red-900 tracking-tight mb-6 uppercase">
          Kapcsolat
        </h1>
        
        {/* Leírás */}
        <p className="text-center text-lg text-red-900 mb-6 px-4">
          Kérdésekkel, javaslatokkal bátran kereshetsz minket!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Név */}
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 bg-transparent border-b-2 border-red-900 text-black text-base focus:outline-none focus:ring-0"
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
              className="w-full p-3 bg-transparent border-b-2 border-red-900 text-black text-base focus:outline-none focus:ring-0"
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
              className="w-full p-3 bg-transparent border-b-2 border-red-900 text-black text-base focus:outline-none focus:ring-0"
              placeholder="Üzenet"
              rows="3"
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

      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
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
            
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-xl font-semibold text-white mb-4">Kapcsolat</h3>
              <ul className="space-y-2">
                <li><a href="tel:+123456789" className="text-gray-400 hover:text-white transition-colors">Telefon: +111 222 3339</a></li>
                <li><a href="mailto:info@weboldal.com" className="text-gray-400 hover:text-white transition-colors">Email: info@fflife.com</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cím: Debrecen, Kassai út.1</a></li>
              </ul>
            </div>

            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-xl font-semibold text-white mb-4">Hasznos Linkek</h3>
              <ul className="space-y-2">
                <li><a className="text-gray-400 hover:text-white transition-colors cursor-pointer" onClick={scrollToEtrendekPage}>Étrendek</a></li>
                <li><a className="text-gray-400 hover:text-white transition-colors cursor-pointer" onClick={scrollToArakPage}>Árak</a></li>
                <li><a className="text-gray-400 hover:text-white transition-colors cursor-pointer" onClick={scrollToSportokPage}>Sportok</a></li>
                <li><a className="text-gray-400 hover:text-white transition-colors cursor-pointer" onClick={scrollToContactPage}>Kontakt</a></li>
              </ul>
            </div>
            
            <div className="flex flex-col items-center sm:items-start">
              <h3 className="text-xl font-semibold text-white mb-4">Jogi nyilatkozatok</h3>
              <ul className="space-y-2">
                <li><a href="/suti-politika" className="text-gray-400 hover:text-white transition-colors">Süti kezelés</a></li>
                <li><a href="/jogi-nyilatkozat" className="text-gray-400 hover:text-white transition-colors">Adatkezelői nyilatkozat</a></li>
                <li><a href="/adatvedelem" className="text-gray-400 hover:text-white transition-colors">Adatvédelem</a></li>
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
