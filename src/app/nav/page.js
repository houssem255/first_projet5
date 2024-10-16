import React from 'react';
import Head from 'next/head';

const EssaiDeFatigue = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <Head>
        <title>Essai de Fatigue</title>
        <meta name="description" content="Informations sur les essais de fatigue." />
      </Head>

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Qu&apos;est-ce qu&apos;un essai de fatigue ?</h1>
        <p className="text-gray-700 mb-4">
          L&apos;essai de fatigue est un type d&apos;essai mécanique qui consiste à soumettre un matériau à des charges cycliques répétées, c&apos;est-à-dire à des sollicitations qui varient en amplitude et en direction au cours du temps. 
          L&apos;objectif est de déterminer la résistance du matériau à ce type de sollicitation, qui peut conduire à une rupture progressive, même si la contrainte maximale appliquée est inférieure à la limite élastique du matériau.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-2">Pourquoi réaliser un essai de fatigue ?</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Prévenir les ruptures inattendues.</li>
          <li>Optimiser la conception.</li>
          <li>Évaluer l&apos;impact des traitements.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-2">Comment se déroule un essai de fatigue ?</h2>
        <ol className="list-decimal list-inside text-gray-700 mb-4">
          <li>Préparation de l&apos;éprouvette.</li>
          <li>Mise en place dans la machine d&apos;essai.</li>
          <li>Application de la charge cyclique.</li>
          <li>Enregistrement des données.</li>
          <li>Représentation graphique.</li>
        </ol>

        <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-2">Les paramètres influençant la fatigue</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Amplitude de la contrainte.</li>
          <li>Rapport de charge.</li>
          <li>Fréquence de chargement.</li>
          <li>Température.</li>
          <li>Environnement.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-2">Les applications de l&apos;essai de fatigue</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Aéronautique.</li>
          <li>Automobile.</li>
          <li>Énergie.</li>
          <li>Construction.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-2">En résumé</h2>
        <p className="text-gray-700 mb-4">
          L&apos;essai de fatigue est un outil indispensable pour assurer la fiabilité et la durabilité des structures et des composants.
          Il permet d&apos;évaluer la résistance d&apos;un matériau à des sollicitations répétées et de prévenir les ruptures inattendues.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mt-6 mb-2">Pour aller plus loin</h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Quelle est la différence entre la fatigue à haut cycle et la fatigue à bas cycle ?</li>
          <li>Comment les fissures de fatigue se propagent-elles ?</li>
          <li>Quels sont les facteurs qui peuvent accélérer la propagation des fissures de fatigue ?</li>
        </ul>
      </div>
    </div>
  );
};

export default EssaiDeFatigue;
