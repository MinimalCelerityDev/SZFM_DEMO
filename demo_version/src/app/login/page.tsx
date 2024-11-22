"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import cuccos from "../login/cuccos.png"; 

export default function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Ügyes vagy! Sikeresen bejelentkeztél. Gratulálok !");
        localStorage.setItem('user', JSON.stringify(data.user));
        router.push('/dashboard');
      } else {
        throw new Error(data.message || 'Valami félrement nagyon');
      }
    } catch (error: any) {
      setMessage("Hibás bejelentkezési adatok.");
      console.error('Hibás bejelentkezés:', error.message);
    }
  };

  return (
    <div className="flex h-screen flex-col lg:flex-row">

      {/* 
      
      Itt van a bal oldali része a login oldalnak mindennel
      
      */}

      <div
        className="hidden lg:flex w-1/2 items-center justify-center"
        style={{
          backgroundImage: `url(${cuccos.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* 
      
      Itt van a jobb oldali része a login oldalnak képpel mindennel 
      
      */}

      <div
        className="relative w-full lg:w-1/2 h-full flex flex-col items-center justify-center p-6 lg:p-10 z-10"
        style={{
          backgroundImage: `url(${cuccos.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >


        {/* 
        
        Itt van a vissza nyíl
        
        */}

        {/* 
        
        Reszponzitivásán kell még dolgozni
        
        */}

        <button
          onClick={() => router.push('/')}
          className="absolute top-4 left-4 text-red-900 hover:text-black transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>


        {/*
        
        A login form itt található
        
        */}

        {/*
        
        Reszponzivitásán még kell dolgozni
        
        */}


        <div className="relative bg-white bg-opacity-90 rounded-2xl shadow-lg p-10 md:p-14 max-w-md w-full">
          <h1 className="text-4xl font-bold text-red-800 mb-6 text-center">Üdvözlünk!</h1>
          <p className="text-gray-600 text-center mb-6">
            Jelentkezz be a felületedre.
          </p>
          {message && (
            <div
              className={`text-center p-4 mb-4 rounded-md ${
                message.startsWith("Ügyes")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {message}
            </div>
          )}
          <form className="flex flex-col gap-6" onSubmit={handleLogin}>
            <div className="relative">
              <input
                type="email"
                placeholder="Add meg az e-mailed"
                className="w-full text-black px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700 shadow-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Add meg a jelszavad"
                className="w-full px-4 text-black py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700 shadow-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-grey-600 text-red-900 py-3 rounded-lg font-semibold shadow-md hover:bg-white transition"
            >
              Belépés
            </button>
          </form>
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Nincs még fiókja ?{" "}
              <Link href="/register">
                <span className="text-red-900 font-semibold hover:underline cursor-pointer">
                  Regisztrácíó
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
