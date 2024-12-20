import React from 'react';
import bk from "../Contact/kapcsolat_kep2.jpg";
import { FaInstagram, FaFacebookF, FaTwitter, FaBehance, FaYoutube, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
    return (
        <div
            id="ContactPage"
            className="min-h-screen flex flex-col items-center justify-center p-6 text-white"
            style={{
                backgroundImage: `url(${bk.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <h1 className="text-4xl font-bold text-white-950 mb-6">Beszélgessünk</h1>
            <div className="grid grid-cols-3 gap-4 w-full max-w-4xl">
                <div className="col-span-3 text-xl text-center mb-6">
                    <p>Email: fflife@gmail.com</p>
                    <p>Telefon: +123456789</p>
                </div>
                <a href="#" className="p-4 rounded flex items-center justify-center"><FaInstagram /></a>
                <a href="#" className="p-4 rounded flex items-center justify-center"><FaFacebookF /></a>
                <a href="#" className="p-4 rounded flex items-center justify-center"><FaTwitter /></a>
                <a href="#" className="p-4 rounded flex items-center justify-center"><FaBehance /></a>
                <a href="#" className="p-4 rounded flex items-center justify-center"><FaYoutube /></a>
                <a href="#" className="p-4 rounded flex items-center justify-center"><FaLinkedin /></a>
            </div>
<form className="w-full max-w-4xl p-6 mt-4 rounded">
    <div className="flex gap-4 mb-4">
        <input type="text" placeholder="NEVE" className="w-1/3 p-2 bg-transparent text-2xl font-bold text-white text-center rounded placeholder-white"/>
        <input type="email" placeholder="EMAIL" className="w-1/3 p-2 bg-transparent text-2xl font-bold text-white text-center rounded placeholder-white"/>
        <input type="tel" placeholder="TELEFON" className="w-1/3 p-2 bg-transparent text-2xl font-bold text-white text-center rounded placeholder-white"/>
    </div>
    <textarea placeholder="IDE ÍRD AZ ÜZENETEDET" className="w-full p-2 bg-transparent text-white text-xl text-center rounded mb-4 h-32 placeholder-white"></textarea>
    <button type="submit" className="w-full bg-gray-950 p-3 text-white rounded">Küldés</button>
</form>


        </div>
    );
};

export default ContactPage;
