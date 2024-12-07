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
      className="min-h-screen flex items-center justify-center bg-white"
      style={{
        backgroundImage: `url('/kontakt_kep.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container relative z-10 mx-auto px-6 py-8 bg-opacity-80 bg-white rounded-lg shadow-xl max-w-md">
        <h1 className="text-3xl font-extrabold text-center text-red-900 tracking-tight mb-6 uppercase">
          Kapcsolat
        </h1>
        
        <p className="text-center text-lg text-red-900 mb-4 px-4">
          Kérdésekkel, javaslatokkal bátran kereshetsz minket!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 bg-transparent border-b-2 border-red-900 text-black text-sm focus:outline-none focus:ring-0"
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
              className="w-full p-3 bg-transparent border-b-2 border-red-900 text-black text-sm focus:outline-none focus:ring-0"
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
              className="w-full p-3 bg-transparent border-b-2 border-red-900 text-black text-sm focus:outline-none focus:ring-0"
              placeholder="Üzenet"
              rows="3"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-900 hover:bg-red-700 text-white text-lg font-semibold py-2 px-5 rounded-full shadow-lg transform transition duration-300 hover:scale-105"
            >
              Üzenet küldése
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
