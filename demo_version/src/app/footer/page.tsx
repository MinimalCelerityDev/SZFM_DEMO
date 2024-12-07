"use client";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo és információk */}
          <div className="flex flex-col items-center sm:items-start">
            <h1 className="text-4xl font-extrabold text-red-600 mb-4">Weboldal Neve</h1>
            <p className="text-lg text-gray-400 mb-4">
              A legjobb hely, ahol minden információt megtalálsz.
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
              <li><a href="tel:+123456789" className="text-gray-400 hover:text-white transition-colors">Telefon: +123 456 789</a></li>
              <li><a href="mailto:info@weboldal.com" className="text-gray-400 hover:text-white transition-colors">Email: info@weboldal.com</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cím: Valahol a világ végén</a></li>
            </ul>
          </div>

          {/* Hasznos linkek */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold text-white mb-4">Hasznos Linkek</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">Rólunk</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Felhasználási feltételek</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Adatvédelmi szabályzat</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Kapcsolat</a></li>
            </ul>
          </div>
          
          {/* Hírek és blog */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-xl font-semibold text-white mb-4">Blog & Hírek</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Legújabb cikkek</a></li>
              <li><a href="/news" className="text-gray-400 hover:text-white transition-colors">Híreink</a></li>
            </ul>
          </div>
          
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Weboldal Neve. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
