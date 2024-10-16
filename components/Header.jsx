"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image'; 

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    accueil: false,
    services: false,
    formations: false,
    actualites: false,
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (key) => {
    setIsDropdownOpen((prev) => {
      const newState = {
        accueil: false,
        services: false,
        formations: false,
        actualites: false,
      };
      newState[key] = !prev[key];
      return newState;
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen({
        accueil: false,
        services: false,
        formations: false,
        actualites: false,
      });
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <header className="bg-gray-200">
        <div className="text-center py-3">
          <p className="text-lg font-bold">République Algérienne Démocratique et Populaire</p>
          <p className="text-lg font-bold">Ministère de l&apos;Industrie et de la Production Pharmaceutique</p>
          <p className="text-lg font-bold">Centre Technique Industriel des Industries Mécaniques et Transformatrices des Métaux</p>
        </div>
      </header>

      <nav className="bg-gray-300 shadow-md border-b border-gray-300">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3">
            <Link href="/" className="block px-4 py-2 hover:bg-gray-200items-center">
              <Image src="/ctime.png" className="h-10" alt="Logo CTIME" width={80} height={60} />
              </Link>
              <Link href="/" className="block px-4 py-2 hover:bg-gray-200items-center">
              <p className="text-size font-semibold text-gray-800">Votre compagnon vers la qualité</p>
            </Link>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
            aria-controls="navbar-dropdown"
            aria-expanded={isMobileMenuOpen}
            aria-label="Open main menu"
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>

          <div className={`w-full md:block md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="navbar-dropdown" ref={dropdownRef}>
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-300 rounded-lg bg-white md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white md:justify-center">
              {['accueil', 'services', 'formations', 'actualites'].map((item) => (
                <li key={item} className="relative">
                  <button
                    onClick={() => toggleDropdown(item)}
                    className="flex items-center justify-between w-full py-2 px-3 text-gray-800 rounded border border-red-600 hover:bg-red-200 md:hover:bg-transparent md:border-0 md:hover:text-red-600 transition-all duration-300"
                    aria-haspopup="true"
                    aria-expanded={isDropdownOpen[item]}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                  </button>
                  {isDropdownOpen[item] && (
                    <div className="absolute right-0 z-10 bg-white divide-y divide-gray-200 rounded-lg shadow w-44">
                      <ul className="py-2 text-sm text-gray-700">
                        {item === 'accueil' && (
                          <>
                            <li><Link href="/cart" className="block px-4 py-2 hover:bg-gray-200">À propos du CTIME</Link></li>
                            <li><Link href="/missions" className="block px-4 py-2 hover:bg-gray-200">Missions et visions</Link></li>
                            <li><Link href="/quality-policy" className="block px-4 py-2 hover:bg-gray-200">Politique Qualité</Link></li>
                          </>
                        )}
                        {item === 'services' && (
                          <>
                            <li><Link href="/services/labo2" className="block px-4 py-2 hover:bg-gray-200">Laboratoire d&apos;Essais Mécaniques</Link></li>
                            <li><Link href="/services/labo1" className="block px-4 py-2 hover:bg-gray-200">Laboratoire de Métrologie Dimensionnelle</Link></li>
                            <li><Link href="/services/reverse-engineering" className="block px-4 py-2 hover:bg-gray-200">Rétroconception</Link></li>
                          </>
                        )}
                        {item === 'formations' && (
                          <>
                            <li><Link href="/formations/cours" className="block px-4 py-2 hover:bg-gray-200">Nos Cours</Link></li>
                            <li><Link href="/blog" className="block px-4 py-2 hover:bg-gray-200">Programmes de Formation</Link></li>
                          </>
                        )}
                        {item === 'actualites' && (
                          <>
                            <li><Link href="/Actualites" className="block px-4 py-2 hover:bg-gray-200">Événements</Link></li>
                          </>
                        )}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-x-6 h-full flex-1 justify-end me-4">
            <Link
              className="bg-gray-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-gray-600 transition duration-300"
              href="/contact"
              aria-label="Contact us"
              data-testid="nav-account-link"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
