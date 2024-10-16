"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaTachometerAlt, FaShieldAlt, FaWeight, FaHammer } from 'react-icons/fa';
import Link from 'next/link';

const LaboratoireDeMetrologie = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="relative">
        <Image
          src="/IMG_4042-imageonline.co-merged.jpg"
          alt="Laboratoire de Métrologie Dimensionnelle"
          width={800}
          height={250}
          className={`w-full h-[250px] object-cover transform transition-transform duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[-50px]'}`}
        />
      </div>

      <div className={`container mx-auto px-4 py-12 transition-opacity duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className={`text-5xl font-bold text-black transition-opacity duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Laboratoire d’essais mécaniques
        </h1>

        <p className="text-lg text-gray-700 my-4">
          Vous souhaitez connaître les limites de vos matériaux ? Notre laboratoire d&apos;essais mécaniques vous propose une gamme complète de tests pour évaluer la résistance, la dureté, la fatigue et bien d&apos;autres propriétés. Bénéficiez de résultats précis et rapides grâce à notre équipe d&apos;experts et à nos équipements de haute technologie. Faites confiance à notre savoir-faire pour optimiser vos produits.
        </p>

        <h2 className="text-3xl font-semibold text-black my-4">Les essais mécaniques : une exploration des propriétés des matériaux</h2>
        <p className="text-lg text-gray-700 mb-4">
          Les essais mécaniques sont un ensemble de tests réalisés sur des matériaux afin de déterminer leurs propriétés mécaniques. Ces propriétés sont cruciales pour évaluer la résistance, la déformabilité et le comportement d&apos;un matériau lorsqu&apos;il est soumis à différentes sollicitations (traction, compression, flexion, torsion, dureté, fatigue, etc.).
        </p>

        <h3 className="text-2xl font-semibold text-black mb-2">Pourquoi réaliser des essais mécaniques ?</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Sécurité :</strong> Pour garantir la fiabilité des structures et des produits, il est essentiel de connaître les limites des matériaux utilisés.</li>
          <li><strong>Conception :</strong> Les résultats des essais permettent d&apos;optimiser la conception des pièces et des structures en choisissant les matériaux les plus adaptés.</li>
          <li><strong>Contrôle qualité :</strong> Les essais mécaniques entrent dans le cadre du contrôle qualité pour s&apos;assurer de la conformité des matériaux aux spécifications.</li>
          <li><strong>Recherche et développement :</strong> Ils sont indispensables pour mettre au point de nouveaux matériaux et améliorer les performances de ceux existants.</li>
        </ul>

        <h3 className="text-2xl font-semibold text-black mb-2">Les paramètres mesurés</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Limite élastique :</strong> Contraintes maximale que le matériau peut supporter sans déformation permanente.</li>
          <li><strong>Résistance à la traction :</strong> Contraintes maximale que le matériau peut supporter avant rupture.</li>
          <li><strong>Allongement à la rupture :</strong> Augmentation de longueur d&apos;une éprouvette à la rupture, exprimée en pourcentage de la longueur initiale.</li>
          <li><strong>Module d&apos;Young :</strong> Rapport entre la contrainte et la déformation dans le domaine élastique, représentant la rigidité du matériau.</li>
          <li><strong>Dureté :</strong> Résistance d&apos;un matériau à la pénétration d&apos;un indénteur.</li>
          <li><strong>Résilience :</strong> Capacité d&apos;un matériau à absorber de l&apos;énergie lors d&apos;un choc.</li>
          <li><strong>Fatigue :</strong> Phénomène de rupture d&apos;un matériau soumis à des cycles de charge répétés.</li>
          <li><strong>Ténacité :</strong> Capacité d&apos;un matériau à résister à la propagation d&apos;une fissure.</li>
          <li><strong>Comportement élastique et plastique :</strong> Caractérisation du matériau sous différentes sollicitations.</li>
          <li><strong>Sensibilité à la température :</strong> Comportement du matériau en fonction des variations de température.</li>
          <li><strong>Propriétés des matériaux composites :</strong> Analyse des performances d&apos;assemblages complexes.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-center text-black mb-10">Nos services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 text-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <FaTachometerAlt className="text-4xl text-red-600 mx-auto mb-4" />
            <Link href={'/traction'}>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Essai de Traction</h3>
            </Link>
            <h4 className="text-lg font-semibold text-red-500 mb-2">Essais spécifiques</h4>
            <div className="border-2 border-red-500 rounded-md p-4 mb-2">
              <p className="text-gray-400">Essai de traction 600 kN</p>
            </div>
            <div className="border-2 border-red-500 rounded-md p-4">
              <p className="text-gray-400">Essai de traction 5 kN</p>
            </div>
          </div>

          <div className="bg-black p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <FaShieldAlt className="text-4xl text-red-600 mx-auto mb-4" />
            <Link href={'/durete'}>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Essai de Dureté</h3>
            </Link>
            <h4 className="text-lg font-semibold text-red-500 mb-2">Mesures spécifiques</h4>
            <div className="border-2 border-red-500 rounded-md p-4 mb-2">
              <Link href={'/DureteKB'}>
                <p className="text-gray-400">Dureté KB</p>
              </Link>
            </div>
            <div className="border-2 border-red-500 rounded-md p-4">
              <Link href={'/durete'}>
                <p className="text-xl font-semibold text-gray-200 mb-2">Dureté portatif</p>
              </Link>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <FaWeight className="text-4xl text-red-600 mx-auto mb-4" />
            <Link href={'/nav'}>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Essai de Fatigue</h3>
            </Link>
            <p className="text-gray-400">Analyse des performances des matériaux sous chargement cyclique.</p>
          </div>

          <div className="bg-black p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <FaHammer className="text-4xl text-red-600 mx-auto mb-4" />
            <Link href={'/resilience'}>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Essai de Résilience</h3>
            </Link>
            <p className="text-gray-400">Mesure de la ténacité des matériaux à l&apos;impact selon la méthode Charpy.</p>
          </div>

          <div className="bg-black p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <FaHammer className="text-4xl text-red-600 mx-auto mb-4" />
            <Link href={'/services'}>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Essai de Compression</h3>
            </Link>
            <p className="text-gray-400">Mesure de la ténacité des matériaux à l&apos;impact selon la méthode Charpy.</p>
          </div>

          <div className="bg-black p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105">
            <FaHammer className="text-4xl text-red-600 mx-auto mb-4" />
            <Link href={'/flexion'}>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">Essai de Flexion</h3>
            </Link>
            <p className="text-gray-400">Mesure de la ténacité des matériaux à l&apos;impact selon la méthode Charpy.</p>
          </div>
        </div>
      </div>

      <footer className="bg-black text-gray-200 py-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 Laboratoire de Métrologie Dimensionnelle. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default LaboratoireDeMetrologie;
