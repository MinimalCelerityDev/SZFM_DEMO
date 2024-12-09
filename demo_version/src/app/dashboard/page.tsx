"use client";

import { useEffect, useState } from "react";
import boritos from "../dashboard/belepes_tajkep.jpg";
import EtrendekPage from "../etrendek/page";
import ArakPage from "../arak/page";
import SportokPage from "../sportok/page";
import ContactPage from "../contact/page";
import FooterPage from "../footer/page";
import { jsPDF } from "jspdf";
import { title } from "process";
import { content } from "html2canvas/dist/types/css/property-descriptors/content";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"; // CSS importálása
import foodsData from '../etelek/etel.json';

const Dashboard = () => {
  let timeout: NodeJS.Timeout | null = null;

  const [totalCalories, setTotalCalories] = useState(0); // Aktuális napi kalóriák
  const [inputCalories, setInputCalories] = useState(""); // Beírt kalória érték
  const maxCalories = 3000; // Maximális napi kalória limit
  const [foodInput, setFoodInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const [totalCalories2, setTotalCalories2] = useState(0); // Aktuális égetett kalória
  const [inputCalories2, setInputCalories2] = useState(""); // Beírt égetett kalória érték
  const maxCalories2 = 3000; // Maximális napi kalória limit

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

  // Kalória hozzáadása a napi bevitelhez
  const addCalories = async () => {
    const newCalories = parseInt(inputCalories, 10);
    if (!isNaN(newCalories)) {
      const updatedCalories = totalCalories + newCalories;

      setTotalCalories(updatedCalories); // Növeli a kalóriát
      setInputCalories(""); // Törli a bemeneti mezőt

      // Frissítés az adatbázisban
      try {
        if (user && user.userId) {
          await fetch("/api/user-data-final", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: user.userId,
              data: { ...form, bevitt: updatedCalories.toString() },
            }),
          });
        }
      } catch (error) {
        console.error("Hiba az adatok frissítésekor", error);
      }
    } else {
      alert("Kérlek adj meg egy érvényes számot a kalóriákhoz!");
    }
  };

  const addCalories2 = async () => {
    const newCalories2 = parseInt(inputCalories2, 10);
    if (!isNaN(newCalories2)) {
      const updatedCalories2 = totalCalories2 + newCalories2;

      setTotalCalories2(updatedCalories2); // Növeli a kalóriát
      setInputCalories2(""); // Törli a bemeneti mezőt

      // Frissítés az adatbázisban
      try {
        if (user && user.userId) {
          await fetch("/api/user-data-final", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              userId: user.userId,
              data: { ...form, egetett: updatedCalories2.toString() },
            }),
          });
        }
      } catch (error) {
        console.error("Hiba az adatok frissítésekor", error);
      }
    } else {
      alert("Kérlek adj meg egy érvényes számot a kalóriákhoz!");
    }
  };


  // Számolás és progress bar szélessége
  const progress = (totalCalories / maxCalories) * 100;
  const progress2 = (totalCalories2 / maxCalories2) * 100;

  const [user, setUser] = useState<{
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
  } | null>(null);
  const [userData, setUserData] = useState<any | null>(null);
  const [form, setForm] = useState({
    favoriteFood: "",
    favoriteDrinks: "",
    favoriteSports: "",
    sleepHours: "",
    hobbies: "",
    weight: "",
    height: "",
    age_person: "",
    sex: "",
    bevitt: "",
    egetett: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showMenu, setShowMenu] = useState({
    features: false,
    pricing: false,
    resources: false,
    contact: false,
  });
  const [showDetails, setShowDetails] = useState({
    userDetails: false,
    personalData: false,
  });

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      fetchUserData(parsedUser.userId);
    }
  }, []);

  useEffect(() => {
    if (foodInput) {
      const filteredFoods = foodsData.foods.filter(food =>
        food.name.toLowerCase().startsWith(foodInput.toLowerCase())
      ).map(food => food.name);
      setSuggestions(filteredFoods);
    } else {
      setSuggestions([]);
    }
  }, [foodInput]);

  const handleSelectFood = (foodName) => {
    const food = foodsData.foods.find(f => f.name === foodName);
    if (food) {
      setInputCalories(food.calories.toString());
      setFoodInput(foodName);
      setSuggestions([]); // Clear suggestions after selection
    }
  };

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
        throw new Error(
          "Hiba merült fel amikor be akartuk fetchelni az emberek idejét."
        );
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
        age_person: data.age_person || "",
        sex: data.sex || "",
        bevitt: data.bevitt || "",
        egetett: data.egetett || "",
      });
      setTotalCalories(Number(data.bevitt) || 0);
      setTotalCalories2(Number(data.egetett) || 0);
    } catch (error) {
      console.error(
        "Hiba került a lecsóba amikor be akartunk tölteni adatokat",
        error
      );
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
    setShowMenu((prev) => {
      const resetMenu = {
        features: false,
        pricing: false,
        resources: false,
        contact: false,
      };
      return { ...resetMenu, [menu]: !prev[menu] };
    });
  };

  const handleGlobalClick = (event: MouseEvent) => {
    if (
      !event
        .composedPath()
        .some((el) => (el as HTMLElement).id === "menu-container")
    ) {
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

    // Adatok
    const weight = userData?.weight || 0;
    const height = userData?.height || 0;
    const age = userData?.age || 30;

    // Margók és oldalméret
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;

    // Halvány piros háttér
    doc.setFillColor(255, 200, 200); // RGB szín: halvány piros
    doc.rect(0, 0, pageWidth, pageHeight, "F"); // Az egész oldal kitöltése színnel

    // Másik betűtípus beállítása (pl. Times New Roman)
    doc.setFont("times", "normal"); // Választhatunk más betűtípust is, mint például `times` vagy `courier`

    // Cím formázása
    doc.setFontSize(20);
    doc.setTextColor(40);
    doc.text("Profil Adatok", pageWidth / 2, 20, { align: "center" });

    // Szekciók adatai
    const sections = [
      {
        title: "Alapinformációk",
        content: [
          `Teljes név: ${user.firstName} ${user.lastName}`,
          `Email: ${user.email}`,
        ],
      },
      {
        title: "Életmód",
        content: [
          `Kedvenc kaják: ${userData?.favoriteFood || "Not specified"}`,
          `Kedvenc italok: ${userData?.favoriteDrinks || "Not specified"}`,
          `Kedvenc sportok: ${userData?.favoriteSports || "Not specified"}`,
          `Alvási órák: ${userData?.sleepHours || "Not specified"}`,
          `Hobbik: ${userData?.hobbies || "Not specified"}`,
        ],
      },
      {
        title: "Fizikai adatok",
        content: [`Súly: ${weight} kg`, `Magasság: ${height} cm`],
      },
      {
        title: "Ajánlott étrend",
        content: [`${getDiet(weight, height)}`],
      },
      {
        title: "Stresszkezelés",
        content: [`${getStressManagementTechniques(age)}`],
      },
      {
        title: "Szociális élet tippek",
        content: [`${getSocialLifeTips(age)}`],
      },
    ];

    // Szöveg kiírása
    let yPos = 40; // Kezdő y-pozíció
    const lineHeight = 10; // Sorok közötti távolság

    sections.forEach((section) => {
      ensureNewPage();

      // Címek középre igazítása
      doc.setFont("times", "extrabold"); // Használhatunk más betűtípust is, mint pl. `times`, `courier`
      doc.setFontSize(16);
      doc.setTextColor(70);
      doc.text(section.title, pageWidth / 2, yPos, { align: "center" });
      yPos += lineHeight;

      // Tartalom középre igazítása
      doc.setFont("times", "normal");
      doc.setFontSize(12);
      doc.setTextColor(50);
      section.content.forEach((line) => {
        ensureNewPage();
        const splitText = doc.splitTextToSize(line, pageWidth - 30); // Margin miatt csökkentett szélesség
        splitText.forEach((textPart) => {
          ensureNewPage();
          doc.text(textPart, pageWidth / 2, yPos, { align: "center" });
          yPos += lineHeight;
        });
      });
      yPos += lineHeight; // Szekciók közötti térköz
    });

    // PDF mentése
    doc.save("Profil_Adatok.pdf");

    // Új oldal biztosítása, ha szükséges
    function ensureNewPage() {
      if (yPos + lineHeight > pageHeight) {
        doc.addPage();
        yPos = 15; // Új oldalon kezdő margó
      }
    }
  };

  function getSocialLifeTips(age) {
    if (age < 25) {
      return "Új barátokat szerezni, közösségi eseményeken részt venni és felfedezni a lehetőségeket.";
    } else {
      return "Ápolni a régi barátságokat, családi összejöveteleken részt venni és közösségi csoportokhoz csatlakozni.";
    }
  }

  function getStressManagementTechniques(age) {
    if (age < 30) {
      return "Aktív pihenés, sportolás, meditáció, és a 'nem mondás' gyakorlása.";
    } else {
      return "Mély légzés, relaxációs gyakorlatok, hobbik és kreatív tevékenységek.";
    }
  }

  // Étrend meghatározása súly és magasság alapján
  function getDiet(weight, height) {
    if (weight >= 40 && weight <= 60 && height <= 150) {
      return "Étrend A: Alacsony kalóriatartalmú, gazdag zöldségekben és gyümölcsökben.";
    } else if (weight > 60 && weight <= 80 && height <= 170) {
      return "Étrend B: Fejlesztett fehérjebevitel, magas rosttartalmú ételekkel.";
    } else if (weight > 80 && height > 170) {
      return "Étrend C: Magas fehérjetartalmú, támogatja az izomépítést.";
    } else if (weight > 110 && height > 190) {
      return "Étrend D: Nagyon magas fehérjetartalom, támogatja az egészséges életmódot.";
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
        <header className="w-full flex justify-between items-center px-6 pt-12 py-4 fixed top-0 z-50 bg-black bg-opacity-20 text-white">
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
                className={`absolute left-0 top-full mt-2 w-40 bg-gray-900 text-white p-4 rounded shadow-xl transition-all ease-in-out duration-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible ${showMenu.features ? "opacity-100 visible" : ""
                  }`}
              >
                <ul>
                  <li>
                    <a
                      onClick={scrollToEtrendekPage}
                      className="block hover:text-indigo-400 transition"
                    >
                      Ingyenes
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={scrollToEtrendekPage}
                      className="block hover:text-indigo-400 transition"
                    >
                      Pro
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={scrollToEtrendekPage}
                      className="block hover:text-indigo-400 transition"
                    >
                      Premium
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            {/* Sportok menü */}
            <li
              className="relative group cursor-pointer font-bold text-white hover:text-red-800 transition duration-300"
              onMouseEnter={() => setShowMenu({ ...showMenu, resources: true })}
              onMouseLeave={() =>
                setShowMenu({ ...showMenu, resources: false })
              }
              onClick={scrollToSportokPage}
            >
              SPORTOK
              <div
                className={`absolute left-0 top-full mt-2 w-48 bg-gray-900 text-white p-3 rounded shadow-xl transition-all ease-in-out duration-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible ${showMenu.resources ? "opacity-100 visible" : ""
                  }`}
              >
                <ul>
                  <li>
                    <a
                      onClick={scrollToSportokPage}
                      className="block hover:text-indigo-400 transition"
                    >
                      Általános
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={scrollToSportokPage}
                      className="block hover:text-indigo-400 transition"
                    >
                      Edzőzeterm
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={scrollToSportokPage}
                      className="block hover:text-indigo-400 transition"
                    >
                     Hobbi
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
                className={`absolute left-0 top-full mt-2 w-48 bg-gray-900 text-white p-3 rounded shadow-xl transition-all ease-in-out duration-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible ${showMenu.pricing ? "opacity-100 visible" : ""
                  }`}
              >
                <ul>
                  <li>
                    <a
                      onClick={scrollToArakPage}
                      className="block hover:text-indigo-400 transition"
                    >
                      Ingyenes
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={scrollToArakPage}
                      className="block hover:text-indigo-400 transition"
                    >
                      Pro
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={scrollToArakPage}
                      className="block hover:text-indigo-400 transition"
                    >
                      Premium
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
                className={`absolute left-0 top-full mt-2 w-48 bg-gray-900 text-white p-3 rounded shadow-xl transition-all ease-in-out duration-500 opacity-0 invisible group-hover:opacity-100 group-hover:visible ${showMenu.contact ? "opacity-100 visible" : ""
                  }`}
              >
                <ul>
                  <li>
                    <a
                      href="/jogi-nyilatkozat"
                      className="block hover:text-indigo-400 transition"
                    >
                      Jogi nyilatkozat
                    </a>
                  </li>
                  <li>
                    <a
                      href="/suti-politika"
                      className="block hover:text-indigo-400 transition"
                    >
                      Süti politika
                    </a>
                  </li>
                  <li>
                    <a
                      href="/adatvedelem"
                      className="block hover:text-indigo-400 transition"
                    >
                      Adatvédelem
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          {/* Üdvözlés rész */}
          <div className="flex flex-col items-start space-y-2">
            <div className="bg-gradient-to-r from-brown-900 via-indigo-200 to-red-800 px-6 py-3 rounded-full font-extrabold shadow-lg flex items-center space-x-2 cursor-pointer">
              <span>👋</span>
              <span>
                Welcome, {user.firstName} {user.lastName}!
              </span>
            </div>
            {/* Kijelentkezés gomb */}
            <button
              className="bg-white text-black px-4 py-2 ml-12 rounded-lg hover:bg-red-900 transition"
              onClick={handleLogout}
            >
              Kijelentkezés
            </button>
          </div>
        </header>
        <main className="flex flex-col items-center justify-center pt-24 px-6">
          <details
            className="text-left bg-gray-800 bg-opacity-80 rounded-lg mt-16 p-6 w-full max-w-4xl shadow-xl"
            open={showDetails.userDetails}
            onToggle={() =>
              setShowDetails({
                ...showDetails,
                userDetails: !showDetails.userDetails,
              })
            }
          >
            <summary className="text-2xl font-bold text-white cursor-pointer hover:text-gray-300">
              PROFIL ADATOK
            </summary>
            <div className="mt-6 space-y-4">
              <p>
                <strong>Teljes neve == </strong> {user.firstName}{" "}
                {user.lastName}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
            </div>
          </details>

          <details
            className="text-left bg-gray-800 bg-opacity-80 rounded-lg p-6 w-full max-w-4xl mt-6 shadow-xl"
            open={showDetails.personalData}
            onToggle={() =>
              setShowDetails({
                ...showDetails,
                personalData: !showDetails.personalData,
              })
            }
          >
            <summary className="text-2xl font-bold text-white cursor-pointer hover:text-gray-300">
              SAJÁT ADATOK
            </summary>
            {!isEditing ? (
              <div className="mt-6 space-y-4">
                <p>
                  <strong>Kedvenc kaják : </strong>{" "}
                  {userData?.favoriteFood || ""}
                </p>
                <p>
                  <strong>Kedvenc italok : </strong>{" "}
                  {userData?.favoriteDrinks || ""}
                </p>
                <p>
                  <strong>Kedvenc sportok : </strong>{" "}
                  {userData?.favoriteSports || ""}
                </p>
                <p>
                  <strong>Alvási órák : </strong>{" "}
                  {userData?.sleepHours || ""}
                </p>
                <p>
                  <strong>Hobbik : </strong>{" "}
                  {userData?.hobbies || ""}
                </p>
                <p>
                  <strong>Súly (kg) : </strong>{" "}
                  {userData?.weight || ""} kg
                </p>
                <p>
                  <strong>Magasság (cm) : </strong>{" "}
                  {userData?.height || ""} 
                </p>
                <p>
                  <strong>Kor (évben) : </strong>{" "}
                  {userData?.age_person || ""}
                </p>
                <p>
                  <strong> Sex (cm) : </strong>{" "}
                  {userData?.sex || ""} 
                </p>

                <button
                  className="w-full bg-red-500 hover:bg-white text-black py-3 rounded-lg transition"
                  onClick={() => setIsEditing(true)}
                >
                  Módosítás
                </button>
                <button
                  className="w-full bg-green-500 hover:bg-white text-black py-3 rounded-lg transition"
                  onClick={generatePdf}
                >
                  Adatok Letöltése PDF-ben
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
                <input
                  type="text"
                  name="age_person"
                  placeholder="Age person"
                  value={form.age_person}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none"
                />
                <input
                  type="text"
                  name="sex"
                  placeholder="Sex (sex)"
                  value={form.sex}
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
          {/* Kalória Számláló és Progress Bar */}
          <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 p-4">
            {/* Bal oldali szekció */}
            <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 p-4">
              <div className="flex flex-col items-center max-w-sm bg-gray-800 p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-300">
                  Kövesd nyomon a bevitt kalóriákat!
                </h2>
                <div className="flex justify-center mt-4">
                  <div style={{ width: 250, height: 250 }}>
                    <CircularProgressbar
                      value={progress}
                      text={`${totalCalories} kcal`}
                      styles={buildStyles({
                        pathColor: progress > 100 ? "red" : "green",
                        textColor: "black",
                        trailColor: "#d6d6d6",
                        strokeWidth: 10,
                        textSize: "20px",
                      })}
                    />
                  </div>
                </div>
                <p className="mt-2 text-white text-lg">
                  {totalCalories} / {maxCalories} kalória
                </p>
                <input
                  name="bevitt"
                  type="text"
                  value={foodInput}
                  onChange={(e) => setFoodInput(e.target.value)}
                  className="w-full max-w-xs px-4 py-2 border-2 border-gray-300 rounded-md text-black"
                  placeholder="Írd be az étel nevét"
                />
                <ul className="list-none mt-2 bg-white border border-gray-300 rounded-md text-black w-full">
                  {suggestions.map((suggestion, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleSelectFood(suggestion)}
                    >
                      {suggestion}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={addCalories}
                  className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 transition"
                >
                  Kalória hozzáadása
                </button>
              </div>
            </div>


            {/* Jobb oldali szekció */}
            <div className="flex flex-col items-center max-w-sm bg-gray-800 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-300">
                Kövesd nyomon az elégetett kalóriákat!
              </h2>
              <div className="flex justify-center mt-4">
                <div style={{ width: 250, height: 250 }}>
                  <CircularProgressbar
                    value={progress2}
                    text={`${totalCalories2} kcal`}
                    styles={buildStyles({
                      pathColor: progress2 > 100 ? "red" : "green",
                      textColor: "black",
                      trailColor: "#d6d6d6",
                      strokeWidth: 10,
                      textSize: "20px",
                    })}
                  />
                </div>
              </div>
              <p className="mt-2 text-white text-lg">
                {totalCalories2} / {maxCalories2} kalória
              </p>
              <div className="flex flex-col items-center max-w-sm bg-gray-800 p-6 rounded-lg shadow-md">
                <input
                  name="egetett"
                  type="number"
                  value={inputCalories2}
                  onChange={(e) => setInputCalories2(e.target.value)}
                  className="w-full max-w-xs px-4 py-2 border-2 border-gray-300 rounded-md text-black"
                  placeholder="Írd be az elégetett kalóriát"
                />
                <button
                  onClick={addCalories2}
                  className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 transition"
                >
                  Kalória hozzáadása
                </button>
              </div>
            </div>

          </div>
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
