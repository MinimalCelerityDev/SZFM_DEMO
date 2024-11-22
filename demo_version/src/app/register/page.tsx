"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import cucccos from "../register/cucccos.png"; 

export default function RegisterPage() {

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>(''); 
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleRegister = async (event: FormEvent) => {
    event.preventDefault();


    //jelszó ellenőrzés
    if (password !== confirmPassword) {
      setErrorMessage("A jelszavak nem egyeznek! Próbáld újra !");
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        router.push('/login');
      } else {
        throw new Error(data.message || 'Valami félrement');
      }
    } catch (error: any) {
      setErrorMessage(error.message);
      console.error('Sikertelen regisztrácíó', error.message);
    }
  };

  return (
    <div className="flex h-screen flex-col lg:flex-row">

       {/* Itt van a bal oldali része a login oldalnak mindennel */}


      <div
        className="hidden lg:flex w-1/2 items-center justify-center"
        style={{
          backgroundImage: `url(${cucccos.src})`, 
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
          backgroundImage: `url(${cucccos.src})`, 
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
          onClick={() => router.push('/login')}
          className="absolute top-4 left-4 text-gray-400 hover:text-black transition-all"
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

        <form
          onSubmit={handleRegister}
          className="relative bg-white bg-opacity-90 rounded-xl shadow-lg p-8 md:p-12 max-w-md w-full space-y-6"
        >
          <h1 className="text-4xl font-bold text-red-800 mb-4 text-center">Regisztrácíó</h1>
          {errorMessage && (
            <div className="bg-red-100 text-red-700 p-4 rounded-md text-center">
              {errorMessage}
            </div>
          )}
          <input
            type="text"
            placeholder="Vezetéknév"
            className="w-full text-black px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700 shadow-sm"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Keresztnév"
            className="w-full text-black px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700 shadow-sm"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full text-black px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700 shadow-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Jelszó"
            className="w-full text-black px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700 shadow-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Jelszó mégegyszer"
            className="w-full text-black px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-700 shadow-sm"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-3 text-lg font-extrabold bg-gray-300 text-red-800 rounded-lg hover:bg-black transition"
          >
            Regisztrácíó
          </button>
        </form>
        <p className="text-gray-600 mt-6 text-center">
          Már van fiókod ?{" "}
          <Link href="/login">
            <span className="text-red-900 font-semibold hover:underline cursor-pointer">
              Belépés
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
