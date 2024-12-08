"use client";

import { useEffect, useState } from "react";
import boritos from "../dashboard/belepes_tajkep.jpg";
import EtrendekPage from "../etrendek/page";
import ArakPage from "../arak/page";
import SportokPage from "../sportok/page";
import ContactPage from "../contact/page";
import FooterPage from "../footer/page";
import { jsPDF } from "jspdf";

const Dashboard = () => {
  let timeout: NodeJS.Timeout | null = null;

  const [showEtrendek, setShowEtrendek] = useState(false);
  const [showArak, setShowArak] = useState(false);
  const [showSportok, setShowSportok] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const scrollToEtrendekPage = () => {
    setShowEtrendek(true); // Az Étrendek oldal megjelenítése
    setTimeout(() => {
      const etrendPage = document.getElementById("EtrendPage");
      if (etrendPage) {
        etrendPage.scrollIntoView({ behavior: "smooth" }); // Simán görgess oda
      }
    }, 100); // Várunk, hogy az elem betöltődjön
  };

  const scrollToArakPage = () => {
    setShowArak(true); // Az Étrendek oldal megjelenítése
    setTimeout(() => {
      const arPage = document.getElementById("ArakPage");
      if (arPage) {
        arPage.scrollIntoView({ behavior: "smooth" }); // Simán görgess oda
      }
    }, 100); // Várunk, hogy az elem betöltődjön
  };

  const scrollToSportokPage = () => {
    setShowSportok(true); // Az Étrendek oldal megjelenítése
    setTimeout(() => {
      const sportPage = document.getElementById("SportokPage");
      if (sportPage) {
        sportPage.scrollIntoView({ behavior: "smooth" }); // Simán görgess oda
      }
    }, 100); // Várunk, hogy az elem betöltődjön
  };

  const scrollToContactPage = () => {
    setShowContact(true); // Az Étrendek oldal megjelenítése
    setTimeout(() => {
      const contactPage = document.getElementById("ContactPage");
      if (contactPage) {
        contactPage.scrollIntoView({ behavior: "smooth" }); // Simán görgess oda
      }
    }, 100); // Várunk, hogy az elem betöltődjön
  };


  const [user, setUser] = useState<{ userId: string; firstName: string; lastName: string; email: string } | null>(null);
  const [userData, setUserData] = useState<any | null>(null);
  const [form, setForm] = useState({
    favoriteFood: "",
    favoriteDrinks: "",
    favoriteSports: "",
    sleepHours: "",
    hobbies: "",
    weight: "",
    height: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showMenu, setShowMenu] = useState({ features: false, pricing: false, resources: false, contact: false });
  const [showDetails, setShowDetails] = useState({ userDetails: false, personalData: false });

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      fetchUserData(parsedUser.userId);
    }
  }, []);

  const fetchUserData = async (userId: string) => {
    try {
      const response = await fetch("/api/user-data-final", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      if (!response.ok) {
        throw new Error("Hiba merült fel amikor be akartuk fetchelni az emberek idejét.");
      }

      const data = await response.json();
      setUserData(data);
      setForm({
        favoriteFood: data.favoriteFood || "",
        favoriteDrinks: data.favoriteDrinks || "",
        favoriteSports: data.favoriteSports || "",
        sleepHours: data.sleepHours || "",
        hobbies: data.hobbies || "",
        weight: data.weight || "",
        height: data.height || "",
      });
    } catch (error) {
      console.error("Hiba került a lecsóba amikor be akartunk tölteni adatokat", error);
    }
  };

  const handleSave = async () => {
    if (!user || !user.userId) {
      console.error("userId hiányossága.");
      return;
    }

    try {
      const response = await fetch("/api/user-data-final", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user.userId, data: form }),
      });

      if (!response.ok) {
        throw new Error("Hiba az adatok mentése közben.");
      }

      setIsEditing(false);
      fetchUserData(user.userId);
    } catch (error) {
      console.error("Hiba az adatok mentése közben =>", error.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const toggleMenu = (menu: keyof typeof showMenu) => {
    setShowMenu(prev => {
      const resetMenu = { features: false, pricing: false, resources: false, contact: false };
      return { ...resetMenu, [menu]: !prev[menu] };
    });
  };

  const handleGlobalClick = (event: MouseEvent) => {
    if (!event.composedPath().some(el => (el as HTMLElement).id === "menu-container")) {
      setShowMenu({
        features: false,
        pricing: false,
        resources: false,
        contact: false,
      });
    }
  };

  const handleLogout = () => {
    // Törli a felhasználót a localStorage-ból és átirányít a bejelentkező oldalra
    localStorage.removeItem("user");
    setUser(null); // A felhasználó állapotot is törli
    window.location.href = "/login"; // Irányítás a bejelentkező oldalra
  };

  useEffect(() => {
    document.addEventListener("click", handleGlobalClick);
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }



  const generatePdf = () => {
    const doc = new jsPDF();
  
    // Cím formázása
    doc.setFontSize(18);
    doc.setTextColor(40);
    doc.text("Profil Adatok", 105, 20, null, null, 'center');
  
    // Súly és magasság alapján étrend hozzáadása
    const diet = getDiet(userData?.weight, userData?.height);
  
    // Alap szöveg formázása
    doc.setFontSize(12);
    doc.setTextColor(100);
  
    // Adatok kiírása
    const dataLines = [
      `Teljes név: ${user.firstName} ${user.lastName}`,
      `Email: ${user.email}`,
      `Kedvenc kaják: ${userData?.favoriteFood || "Not specified"}`,
      `Kedvenc italok: ${userData?.favoriteDrinks || "Not specified"}`,
      `Kedvenc sportok: ${userData?.favoriteSports || "Not specified"}`,
      `Alvási órák: ${userData?.sleepHours || "Not specified"}`,
      `Hobbik: ${userData?.hobbies || "Not specified"}`,
      `Súly: ${userData?.weight || "Not specified"} kg`,
      `Magasság: ${userData?.height || "Not specified"} cm`,
      `Ajánlott étrend: ${diet}`
    ];
  
    // Adatok kiírása, színbeállításokkal
    dataLines.forEach((line, index) => {
      let yPos = 40 + (index * 10);
      if (index === 7) {  // Súlyadatok kiemelése színes háttérrel
        doc.setFillColor(...getWeightColor(userData?.weight));
        doc.rect(20, yPos - 5, 170, 10, 'F');
      }
      doc.setTextColor(0, 0, 0); // Fekete szöveg
      doc.text(line, 20, yPos);
    });
  
    // PDF mentése
    doc.save("Profil_Adatok.pdf");
  }
  
  // Súly alapján háttérszín meghatározása
  function getWeightColor(weight) {
    if (weight > 0 && weight <= 60) {
      return [255, 255, 0]; // Sárga
    } else if (weight > 60 && weight <= 80) {
      return [0, 0, 255]; // Kék
    } else if (weight > 80 && weight <= 100) {
      return [255, 0, 0]; // Piros
    }
    return [255, 255, 255]; // Alapértelmezett fehér
  }
  
  // Étrend meghatározása súly és magasság alapján
  function getDiet(weight, height) {
    if (weight >= 40 && weight <= 60 && height <= 150) {
      return "Étrend A: Alacsony kalóriatartalmú, gazdag zöldségekben és gyümölcsökben.";
    } else if (weight > 60 && weight <= 80 && height <= 170) {
      return "Étrend B: Fejlesztett fehérjebevitel, magas rosttartalmú ételekkel.";
    } else if (weight > 80 && height > 170) {
      return "Étrend C: Magas fehérjetartalmú, támogatja az izomépítést.";
    }
    return "Étrend D: Kiegyensúlyozott, megfelel a napi szükségleteknek.";
  }
  
  

  return (
    <div className="flex flex-col">
      <div
        className="min-h-screen text-white"
        style={{
          backgroundImage: `url(${boritos.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <header className="w-full flex justify-between items-center px-6 pt-12 py-4 fixed top-0 z-50 bg-opacity-80 text-white">
          <div className="text-3xl font-bold uppercase tracking-wide text-red-800">
            FFLIFE
          </div>

          <ul
            id="menu-container"
            className="flex gap-8 text-xl font-semibold hidden lg:flex"
          >
            {/* Étrendek menü */}
            <li
              className="relative group cursor-pointer font-bold text-white hover:text-red-800 transition duration-300"
              onMouseEnter={() => setShowMenu({ ...showMenu, features: true })}
              onMouseLeave={() => setShowMenu({ ...showMenu, features: false })}
              onClick={scrollToEtrendekPage}
            >
              ÉTRENDEK
              <div
                className={`absolute left-0 top-full mt-2 w-40 bg-gray-900 text-white p-4 rounded shadow-xl transition-opacity ${showMenu.features ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
              >
                <ul>
                  <li>
                    <a href="/features-1" className="block hover:text-indigo-400 transition">
                      Étrendek 1
                    </a>
                  </li>
                  <li>
                    <a href="/features-2" className="block hover:text-indigo-400 transition">
                      Étrendek 2
                    </a>
                  </li>
                  <li>
                    <a href="/features-3" className="block hover:text-indigo-400 transition">
                      Étrendek 3
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Sportok menü */}
            <li
              className="relative group cursor-pointer font-bold text-white hover:text-red-800 transition duration-300"
              onMouseEnter={() => setShowMenu({ ...showMenu, resources: true })}
              onMouseLeave={() => setShowMenu({ ...showMenu, resources: false })}
              onClick={scrollToSportokPage}
            >
              SPORTOK
              <div
                className={`absolute left-0 top-full mt-2 w-48 bg-gray-900 text-white p-3 rounded shadow-xl transition-opacity ${showMenu.resources ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
              >
                <ul>
                  <li>
                    <a href="/resources-1" className="block hover:text-indigo-400 transition">
                      Edzőterem
                    </a>
                  </li>
                  <li>
                    <a href="/resources-2" className="block hover:text-indigo-400 transition">
                      Futás
                    </a>
                  </li>
                  <li>
                    <a href="/resources-3" className="block hover:text-indigo-400 transition">
                      Mozgás
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Árak menü */}
            <li
              className="relative group cursor-pointer font-bold text-white hover:text-red-800 transition duration-300"
              onMouseEnter={() => setShowMenu({ ...showMenu, pricing: true })}
              onMouseLeave={() => setShowMenu({ ...showMenu, pricing: false })}
              onClick={scrollToArakPage}
            >
              ÁRAK
              <div
                className={`absolute left-0 top-full mt-2 w-48 bg-gray-900 text-white p-3 rounded shadow-xl transition-opacity ${showMenu.pricing ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
              >
                <ul>
                  <li>
                    <a href="/pricing-1" className="block hover:text-indigo-400 transition">
                      A csomag
                    </a>
                  </li>
                  <li>
                    <a href="/pricing-2" className="block hover:text-indigo-400 transition">
                      B csomag
                    </a>
                  </li>
                  <li>
                    <a href="/pricing-3" className="block hover:text-indigo-400 transition">
                      C csomag
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Kontakt menü */}
            <li
              className="relative group cursor-pointer font-bold text-white hover:text-red-800 transition duration-300"
              onMouseEnter={() => setShowMenu({ ...showMenu, contact: true })}
              onMouseLeave={() => setShowMenu({ ...showMenu, contact: false })}
              onClick={scrollToContactPage}
            >
              KONTAKT
              <div
                className={`absolute left-0 top-full mt-2 w-48 bg-gray-900 text-white p-3 rounded shadow-xl transition-opacity ${showMenu.contact ? "opacity-100 visible" : "opacity-0 visible"
                  }`}
              >
                <ul>
                  <li>
                    <a href="/jogi-nyilatkozat" className="block hover:text-indigo-400 transition">
                      Jogi nyilatkozat
                    </a>
                  </li>
                  <li>
                    <a href="/suti-politika" className="block hover:text-indigo-400 transition">
                      Süti politika
                    </a>
                  </li>
                  <li>
                    <a href="/adatvedelem" className="block hover:text-indigo-400 transition">
                      Adatvédelem
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          {/* Üdvözlés rész */}
          <div
            className="bg-gradient-to-r from-brown-900 via-indigo-200 to-red-800 px-6 py-3 rounded-full font-extrabold shadow-lg flex items-center space-x-2 cursor-pointer"
          >

            <span>👋</span>
            <span>Welcome, {user.firstName} {user.lastName}!</span>
          </div>
          {/* Kijelentkezés gomb */}
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            onClick={handleLogout}
          >
            Kijelentkezés
          </button>
        </header>


        <main className="flex flex-col items-center justify-center pt-24 px-6">


          <details
            className="text-left bg-gray-800 bg-opacity-80 rounded-lg mt-16 p-6 w-full max-w-4xl shadow-xl"
            open={showDetails.userDetails}
            onToggle={() => setShowDetails({ ...showDetails, userDetails: !showDetails.userDetails })}
          >
            <summary className="text-2xl font-bold text-white cursor-pointer hover:text-gray-300">
              PROFIL ADATOK
            </summary>
            <div className="mt-6 space-y-4">
              <p>
                <strong>Teljes neve == </strong> {user.firstName} {user.lastName}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
            </div>
          </details>

          <details
            className="text-left bg-gray-800 bg-opacity-80 rounded-lg p-6 w-full max-w-4xl mt-6 shadow-xl"
            open={showDetails.personalData}
            onToggle={() => setShowDetails({ ...showDetails, personalData: !showDetails.personalData })}
          >
            <summary className="text-2xl font-bold text-white cursor-pointer hover:text-gray-300">
              SAJÁT ADATOK
            </summary>
            {!isEditing ? (
              <div className="mt-6 space-y-4">
                <p>
                  <strong>Kedvenc kaják : </strong> {userData?.favoriteFood || "Not specified"}
                </p>
                <p>
                  <strong>Kedvenc italok : </strong> {userData?.favoriteDrinks || "Not specified"}
                </p>
                <p>
                  <strong>Kedvenc sportok : </strong> {userData?.favoriteSports || "Not specified"}
                </p>
                <p>
                  <strong>Alvási órák : </strong> {userData?.sleepHours || "Not specified"}
                </p>
                <p>
                  <strong>Hobbik : </strong> {userData?.hobbies || "Not specified"}
                </p>
                <p>
                  <strong>Súly (kg) : </strong> {userData?.weight || "Not specified"} kg
                </p>
                <p>
                  <strong>Magasság (cm) : </strong> {userData?.height || "Not specified"} cm
                </p>
                <button
                  className="w-full bg-red-500 hover:bg-white text-black py-3 rounded-lg transition"
                  onClick={() => setIsEditing(true)}
                >
                  Módosítás
                </button>
              </div>
            ) : (
              <form className="space-y-4 mt-6">
                <input
                  type="text"
                  name="favoriteFood"
                  placeholder="Favorite Food"
                  value={form.favoriteFood}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none"
                />
                <input
                  type="text"
                  name="favoriteDrinks"
                  placeholder="Favorite Drinks"
                  value={form.favoriteDrinks}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none"
                />
                <input
                  type="text"
                  name="favoriteSports"
                  placeholder="Favorite Sports"
                  value={form.favoriteSports}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none"
                />
                <input
                  type="text"
                  name="sleepHours"
                  placeholder="Sleep Hours"
                  value={form.sleepHours}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none"
                />
                <input
                  type="text"
                  name="hobbies"
                  placeholder="Hobbies"
                  value={form.hobbies}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none"
                />
                <input
                  type="number"
                  name="weight"
                  placeholder="Weight (kg)"
                  value={form.weight}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none"
                />
                <input
                  type="number"
                  name="height"
                  placeholder="Height (cm)"
                  value={form.height}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleSave}
                  className="w-full bg-red-500 hover:bg-white text-black py-3 rounded-lg transition"
                >
                  Ments le a módosításokat
                </button>
                <button
  className="w-full bg-green-500 hover:bg-white text-black py-3 rounded-lg transition"
  onClick={generatePdf}
>
  Adatok Letöltése PDF-ben
</button>
              </form>
            )}
          </details>
        </main>
      </div>


      <div id="EtrendekSection" className="min-h-screen">
        <EtrendekPage />
      </div>

      <div id="SportokSection" className="min-h-screen">
        <SportokPage />
      </div>

      <div id="ArakSection" className="min-h-screen">
        <ArakPage />
      </div>

      <div id="ContactSection" className="min-h-screen">
        <ContactPage />
      </div>



    </div>
  );
};

export default Dashboard;
