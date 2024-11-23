"use client"

import React, { useState } from 'react';
import bk from "../ProgramsPage/Programs.png";

const ProgramsPage = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        { 
            question: "Mennyit érdemes edzeni egy héten?", 
            answer: "Azt javasoljuk, hogy a testalkatodnak, korodnak és egészségi állapotodnak megfelelően heti 3-5 alkalommal végezz valamilyen formájú fizikai aktivitást. Ez magában foglalhatja a súlyzós edzéseket, kardiót, vagy akár a jóga és a pilates gyakorlatokat is."
        },
        { 
            question: "Mit kell ennem, ha le szeretnék fogyni?", 
            answer: "A fogyáshoz kalóriadeficitre van szükséged, ami azt jelenti, hogy kevesebb kalóriát fogyasztasz, mint amennyit a szervezeted naponta elhasznál. Fókuszálj a magas tápanyagtartalmú ételek, mint a friss zöldségek, gyümölcsök, sovány fehérjék és teljes kiőrlésű gabonák fogyasztására. Kerüld a túlzott cukor- és zsírbevitelt."
        },
        { 
            question: "Milyen gyakran kellene erőnléti edzéseket végezni?", 
            answer: "Erőnléti edzéseket hetente 2-3 alkalommal ajánlott végezni, hogy elegendő időt hagyj a szervezetednek a regenerálódásra és az izmok épülésére."
        },
        { 
            question: "Mikor van az ideális időszak a nap folyamán edzeni?", 
            answer: "Az ideális időszak a nap folyamán az edzéshez az, amikor a legenergikusabbnak érzed magad. Sokan reggel preferálják, hogy jól induljon a napjuk, mások délután vagy este szeretnek edzeni, amikor már befejezték a napi teendőiket."
        },
        { 
            question: "Szükséges kiegészítőket szednem az edzésekhez?", 
            answer: "Kiegészítők, mint a fehérje porok, kreatin és más táplálék-kiegészítők segíthetik az edzési teljesítményt és az izomépítést, de nem szükségesek mindenkinek. Ajánlott konzultálni egy szakértővel, hogy személyre szabott tanácsot kapj az egyéni igényeidhez."
        }
    ];

    const handleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div
            id="ProgramsPage"
            className="min-h-screen flex flex-col items-center justify-center text-white p-6"
            style={{
                backgroundImage: `url(${bk.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <h1 className="text-4xl text-red-900 font-bold mb-4">Gyakran feltett kérdések ! </h1>
            <div className="w-full max-w-4xl">
                {faqs.map((faq, index) => (
                    <div key={index} className="mb-2">
                        <button
                            className={`w-full text-left font-semibold text-3xl py-2 px-4 rounded-lg ${activeIndex === index ? 'bg-red' : 'bg-white-500'}`}
                            onClick={() => handleAccordion(index)}
                        >
                            {faq.question}
                            <span className="float-right">{activeIndex === index ? '-' : '+'}</span>
                        </button>
                        {activeIndex === index && (
                            <div className="mt-2 p-3 text-black bg-white rounded-lg shadow">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgramsPage;
