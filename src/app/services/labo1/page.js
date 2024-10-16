"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaTools, FaRulerCombined, FaCogs, FaDraftingCompass, FaCheckCircle, FaObjectGroup } from 'react-icons/fa';
import Image from 'next/image'; 

const LaboratoireDeMetrologie = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Hook pour déclencher les animations à l'entrée de la page
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Bannière d'introduction avec animation de fondu et de glissement */}
      <div className="relative">
        <Image
          src="/Equipements CTIME.jpg"
          alt="Laboratoire de Métrologie Dimensionnelle"
          className={`w-full h-[250px] object-cover transform transition-transform duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-50px]'}`}
          width={1000} 
          height={250} 
        />
      </div>

      {/* Section Description avec animation d'apparition */}
      <div className={`container mx-auto px-4 py-12 transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className={`text-5xl font-bold text-black transition-opacity duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Laboratoire de Métrologie Dimensionnelle
        </h1>
        <p className="text-center text-lg text-gray-800 mb-8">
          La <strong>métrologie</strong> est la science de la mesure. Elle définit les principes et les méthodes permettant de garantir et maintenir la confiance envers les mesures résultant des processus de mesure. Il s&apos;agit d&apos;une science transversale qui s&apos;applique dans tous les domaines où des mesures quantitatives sont effectuées.
        </p>

        <h2 className="text-3xl font-semibold text-center text-black mb-10">Nos services</h2>

        {/* Section Services avec des icônes et animation de zoom au survol */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <FaTools className="text-4xl text-red-600 mx-auto mb-4" />
            <Link href={'/etalo'}>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Équipement moderne et adapté</h3>
            </Link>
            <p className="text-gray-400">Des mesures précises à l&apos;aide d&apos;équipements de pointe et de formations spécialisées.</p>
          </div>

          <div className="bg-black p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <FaRulerCombined className="text-4xl text-red-600 mx-auto mb-4" />
            <Link href={'/etalo'}>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Étalonnage des instruments</h3>
            </Link>
            <p className="text-gray-400">Étalonnage précis des instruments à cote variable et des étalons de référence.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <FaCogs className="text-4xl text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-200 mb-2">Contrôle des formes et des surfaces</h3>
            <p className="text-gray-400">Vérification des formes, des positions et des états de surface.</p>
          </div>

          <div className="bg-black p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <FaDraftingCompass className="text-4xl text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-200 mb-2">Mesure de pièces complexes</h3>
            <p className="text-gray-400">Expertise et mesure des pièces complexes avec précision.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <FaCheckCircle className="text-4xl text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-200 mb-2">Vérification des moyens de production</h3>
            <p className="text-gray-400">Contrôle rigoureux des moyens de production pour une qualité optimale.</p>
          </div>

          <div className="bg-black p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <FaObjectGroup className="text-4xl text-red-600 mx-auto mb-4" />
            <Link href={'/Retro'}>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Rétro-conception</h3>
            </Link>
            <p className="text-gray-400">Réalisation de rétro-conception et vérification de pièces volumineuses.</p>
          </div>
        </div>
      </div>

      {/* Pied de page */}
      <footer className="bg-black text-gray-200 py-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 Laboratoire de Métrologie Dimensionnelle. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default LaboratoireDeMetrologie;
