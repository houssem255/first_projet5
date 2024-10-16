import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { MdScience, MdEngineering, MdBuild, MdPrecisionManufacturing } from 'react-icons/md';

export default function PresentationCTIME() {
  return (
    <div className="container mx-auto p-6">
      <div className="relative mb-10">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <Image 
            width={400} 
            height={300}
            src="/Eprouvette-imageonline.co-merged.png" 
            alt="Bannière CTIME"
            className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
          />
        </div>
        <h1 className="absolute bottom-6 left-6 text-4xl text-white font-bold drop-shadow-lg">
          Présentation du CTIME
        </h1>
      </div>

      {/* Introduction */}
      <section className="bg-gray-50 p-6 rounded-lg shadow-md mb-10">
        <p className="mb-4 text-lg text-gray-700">
          Le Centre Technique des Industries Mécaniques et transformatrices des Métaux « CTIME » a été créé par Décret exécutif n°10-215 du 16 septembre 2010, dont le siège est fixé à Constantine. Le CTIME dispose d’une assiette foncière de 9000 m² en toute propriété, située au niveau du complexe mécanique d’Ain Smara- Constantine.
        </p>
        <p className="mb-4 text-lg text-gray-700">
          Le CTIME est un Etablissement Public à Caractère Industriel et Commercial « EPIC » et relève du Ministère de l’Industrie et des Mines. Sa création a été le fruit d&apos;une étude de faisabilité relative à la filière mécanique, dans le cadre du programme PME II.
        </p>
      </section>

      {/* Section Laboratoires */}
      <section>
        <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">Nos Laboratoires Spécialisés</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <MdScience className="text-4xl text-red-600 mr-3" />
              <Link href={'/services/labo2'}>
                <h3 className="text-2xl font-semibold">Laboratoire d&apos;essais mécaniques</h3>
              </Link>
            </div>
            <p className="text-gray-700 mb-4">
              Ensemble d’essais pour la caractérisation des matériaux métalliques à forte et faible résistance.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Essai de traction statique</li>
              <li>Essai de résilience</li>
              <li>Mesures de dureté (Vickers, Brinell, Rockwell)</li>
              <li>Essai de fatigue</li>
            </ul>
          </div>
          {/* باقي الأقسام... */}
        </div>
      </section>

      {/* Fiche technique */}
      <section className="bg-gray-100 p-6 mt-12 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6">FICHE TECHNIQUE DU CTIME</h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li><strong>Dénomination:</strong> CENTRE TECHNIQUE INDUSTRIEL DES INDUSTRIES MECANIQUE ET TRANSFORMATRICES DES METAUX</li>
          <li><strong>Décret de création:</strong> Décret exécutif N° 15-210 du 16 septembre 2010</li>
          <li><strong>Registre de commerce:</strong> 12 B 0069495</li>
          <li><strong>Numéro fiscal:</strong> 001225019024451</li>
          <li><strong>NIS:</strong> 001225010029170</li>
          <li><strong>CNAS:</strong> 25 716 235/50</li>
          <li><strong>Compte trésor:</strong> 008 25 001 1250000654 82</li>
          <li><strong>Compte BNA Agence 840:</strong> 001 00840 300 000 690/15</li>
        </ul>
      </section>
    </div>
  );
}
