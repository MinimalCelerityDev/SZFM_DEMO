"use client";

import React from "react";

const EtrendekPage = () => {
  const pdfFiles = {
    freePlan: '/pdfs/Ingyenes_Csomag.pdf',
    proPlan: '/pdfs/Pro_Csomag.pdf',
    premiumPlan: '/pdfs/Premium_Csomag.pdf'
  };

  const downloadPDF = (plan) => {
    const fileUrl = pdfFiles[plan];
    if (fileUrl) {
      const link = document.createElement('a');
      link.href = fileUrl;
      link.download = fileUrl.split('/').pop(); 
      link.click();
    } else {
      console.error("PDF file not found for plan:", plan);
    }
  };

  return (
    <div
      id="EtrendPage"
      className="min-h-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('/etrend_kep.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Ingyenes Csomag */}
          <div
            id="freePlan"
            className="bg-black bg-opacity-70 p-8 rounded-lg shadow-xl text-center hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <h2 className="text-4xl font-bold text-red-500">Ingyenes Csomag</h2>
            <p className="text-2xl mt-4 text-gray-300">1 étrend</p>
            <p className="text-xl mt-2 text-red-500">Ingyenes</p>
            <div className="mt-6">
              <ul className="text-left text-white-300">
                <li>- Heti 1 étkezés</li>
                <li>- Alap információk és tanácsok</li>
                <li>- Emailes támogatás</li>
                <li>- 1 alap recept hetente</li>
              </ul>
            </div>
            <button
              className="mt-6 bg-red-900 text-white py-3 px-8 rounded-lg hover:bg-red-600 transition duration-200"
              onClick={() => downloadPDF('freePlan')}
            >
              Válaszd most
            </button>
          </div>

          <div
            id="proPlan"
            className="bg-black bg-opacity-70 p-8 rounded-lg shadow-xl text-center hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <h2 className="text-4xl font-bold text-red-500">Pro Csomag</h2>
            <p className="text-2xl mt-4 text-gray-300">2 étrend</p>
            <p className="text-xl mt-2 text-red-500">4000 HUF</p>
            <div className="mt-6">
              <ul className="text-left text-white-300">
                <li>- Heti 2 étkezés</li>
                <li>- Részletes étkezési terv</li>
                <li>- Emailes és telefonos támogatás</li>
                <li>- Napi étkezési időpontok</li>
                <li>- Hozzáférés prémium alapanyagokhoz</li>
              </ul>
            </div>
            <button
              className="mt-6 bg-red-900 text-white py-3 px-8 rounded-lg hover:bg-red-600 transition duration-200"
              onClick={() => downloadPDF('proPlan')}
            >
              Válaszd most
            </button>
          </div>

          <div
            id="premiumPlan"
            className="bg-black bg-opacity-70 p-8 rounded-lg shadow-xl text-center hover:scale-105 transform transition duration-300 ease-in-out"
          >
            <h2 className="text-4xl font-bold text-yellow-500">Premium Csomag</h2>
            <p className="text-2xl mt-4 text-gray-300">4 étrend</p>
            <p className="text-xl mt-2 text-yellow-700">7000 HUF</p>
            <div className="mt-6">
              <ul className="text-left text-white-300">
                <li>- Heti 4 étkezés</li>
                <li>- Személyre szabott étkezési terv</li>
                <li>- 24/7 támogatás</li>
                <li>- Exkluzív prémium receptek</li>
                <li>- Ételallergia figyelembe vétele</li>
                <li>- Heti 1 személyes konzultáció</li>
              </ul>
            </div>
            <button
              className="mt-6 bg-yellow-500 text-white py-3 px-8 rounded-lg hover:bg-yellow-600 transition duration-200"
              onClick={() => downloadPDF('premiumPlan')}
            >
              Válaszd most
            </button>
          </div>
        </div>

        <div className="mt-12 bg-black bg-opacity-70 p-8 rounded-lg shadow-xl">
          <h3 className="text-3xl font-bold text-white text-center mb-4">
            Csomag Összehasonlítás
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-white">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="py-2 text-left">Jellemző</th>
                  <th className="py-2 text-center">Ingyenes</th>
                  <th className="py-2 text-center">Pro</th>
                  <th className="py-2 text-center">Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-600">
                  <td className="py-2">Heti étkezések</td>
                  <td className="py-2 text-center">1</td>
                  <td className="py-2 text-center">2</td>
                  <td className="py-2 text-center">4</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2">Email támogatás</td>
                  <td className="py-2 text-center">✔️</td>
                  <td className="py-2 text-center">✔️</td>
                  <td className="py-2 text-center">✔️</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2">Telefonos támogatás</td>
                  <td className="py-2 text-center">❌</td>
                  <td className="py-2 text-center">✔️</td>
                  <td className="py-2 text-center">✔️</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2">Prémium receptek</td>
                  <td className="py-2 text-center">❌</td>
                  <td className="py-2 text-center">❌</td>
                  <td className="py-2 text-center">✔️</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2">Személyre szabott terv</td>
                  <td className="py-2 text-center">❌</td>
                  <td className="py-2 text-center">❌</td>
                  <td className="py-2 text-center">✔️</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2">Hozzáférés prémium alapanyagokhoz</td>
                  <td className="py-2 text-center">❌</td>
                  <td className="py-2 text-center">✔️</td>
                  <td className="py-2 text-center">✔️</td>
                </tr>
                <tr className="border-b border-gray-600">
                  <td className="py-2">Személyes konzultáció</td>
                  <td className="py-2 text-center">❌</td>
                  <td className="py-2 text-center">❌</td>
                  <td className="py-2 text-center">✔️</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EtrendekPage;
