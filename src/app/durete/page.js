"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaCheckCircle, FaTools } from 'react-icons/fa';

const DuretePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gray-100">
      {/* En-tête de la page */}
      <div className="relative h-[400px]">
        <Image
          src="/IMG_4042-imageonline.co-merged.jpg"
          alt="Essai de dureté"
          layout="fill"
          objectFit="cover"
          className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">Essai Dureté Portatif</h1>
        </div>
      </div>

      {/* Section Dureté Portatif */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-black mb-8 flex items-center justify-center">
            <FaCheckCircle className="text-red-500 mr-2" /> Essai Dureté Portatif
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105 mx-auto max-w-full">
            <Image
              src="/IMG_4078-imageonline.co-merged.jpg"
              alt="Duromètre portatif"
              width={600}
              height={600}
              className={`rounded-lg mx-auto ${isVisible ? 'scale-100' : 'scale-95'}`}
            />
            <p className="text-lg text-gray-800 my-4 w-full">
              Grâce à notre duromètre portable, nous réalisons des essais de dureté directement sur vos pièces, sans les déplacer. Gagnez du temps et bénéficiez de résultats fiables.
            </p>
            <p className="text-lg text-gray-800 mb-4 w-full">
              Notre duromètre portable permet de mesurer la dureté de vos matériaux en toute mobilité. Idéal pour le contrôle qualité sur site ou pour des pièces de grandes dimensions.
            </p>
          </div>
        </div>
      </div>

      {/* Section Bloc de Référence */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-black mb-8 flex items-center justify-center">
            <FaTools className="text-red-500 mr-2" /> Bloc de Référence
          </h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105 mx-auto max-w-full">
            <Image
              src="/IMG_4086.JPG"
              alt="Duromètre portatif"
              width={600}
              height={400}
              className={`rounded-lg mx-auto ${isVisible ? 'scale-100' : 'scale-95'}`}
            />
            <p className="text-lg text-gray-800 my-4 w-full">
              Le bloc de référence est un outil indispensable pour garantir la qualité et la fiabilité des mesures de dureté réalisées avec un duromètre portatif.
            </p>
            <p className="text-lg text-gray-800 mb-4 w-full">
              Son utilisation régulière permet de maintenir l&apos;appareil dans un état de fonctionnement optimal et d&apos;assurer la conformité des résultats aux normes en vigueur.
            </p>
          </div>
        </div>
      </div>

      {/* Séparateur décoratif */}
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto text-center">
          <hr className="border-t border-gray-400 mb-4" />
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

export default DuretePage;
