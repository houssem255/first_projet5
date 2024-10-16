"use client";
import React from 'react';
import { motion } from 'framer-motion';

const EtalonnagePage = () => {
  const services = [
    {
      title: "Cales étalons 0,1 … 100 mm",
      Capacite: [
        "a) Avec démagnétisation précédent et enlèvement de formation de morfil : Détermination de la longueur centrale et la variation de la longueur suivant ISO 3650.",
        "b) Seulement pour des cales étalons nouvelles : Détermination de la longueur centrale et la variation de la longueur suivant ISO 3650.",
      ],
      images: ["/19.jpg", "/20.jpg"],
    }, 
    {
      title: "Étalonnage de pieds à coulisse",
      Capacite: [
        "-0 .. 150 mm",
        "-0 .. 300 mm",
        "-0 .. 500 mm",
        "-0 .. 1000 mm",
        "-0 .. 2000 mm",
      ],
      images: ["/12.jpg"],
    },
    {
      title: "Micromètres d&apos;extérieur",
      Capacite: [
        "0 .. 25 mm",
        "25 .. 100 mm",
        "100 .. 500 mm",
        "500 .. 1000 mm",
        "1000 .. 1500 mm",
      ],
      images: ["/4.jpg", "/5.jpg"],
    },
    {
      title: "Comparateurs",
      subtitle: "(DIN 878 ou conforme)",
      Capacite: [
        "0 .. 13 mm",
        "> 13 mm",
      ],
      images: ["/7.png"],
    },
    {
      title: "Palpeurs orientables (Puppitast…)",
      subtitle: "(DIN 2270 ou conforme)",
      Capacite: [],
      images: ["/15.jpg"],
    },
    {
      title: "Tampons lisses (2 côtés, combinaison GO + NO GO)",
      Capacite: [
        "Détermination du diamètre par 2 x deux mesurages à 90° l&apos;un sur l&apos;autre à 2 niveaux du côté de GO.",
        "1 x deux mesurages à 90° l&apos;un sur l&apos;autre du côté de NO GO.",
        "Diamètre : 0 .. 100 mm",
        "> 100 mm",
      ],
      images: ["/28.jpg"],
    },
    {
      title: "Jauges bagues de réglage (jauges bagues lisses) jusqu&apos;à 250 mm",
      Capacite: [
        "Étalonnage diamètre (standard) : Détermination du diamètre à 2 niveaux par niveau : 2 mésurages (90° tordu).",
        "Étalonnage diamètre + circularité : Détermination du diamètre à 2 niveaux par niveau : 2 mésurages (90° tordu).",
        "Détermination de la cylindricité à deux niveaux.",
      ],
      images: ["/21.jpg", "/23.png"],
    },
    {
      title: "Calibres mâchoires (combinaison GO + NO GO)",
      Capacite: [
        "Grandeur : 0 .. 100 mm",
        "100 .. 200 mm",
        "200 .. 300 mm",
      ],
      images: ["/30.jpg"],
    },
    {
      title: "Jauges bagues filetées: type cylindrique",
      subtitle: "Calibre GO ou NO GO",
      Capacite: [
        "Flankendiameter diamètre :",
        "3 .. 100 mm",
        "100 .. 150 mm",
        "150 .. 200 mm",
      ],
      images: ["/40.jpg"],
    },
    {
      title: "Jauges tampons de filetage: type cylindrique",
      subtitle: "Calibre 2 côtés (GO + NO GO)",
      Capacite: [
        "Diamètre : ≤ 100 mm",
        "> 100 mm",
      ],
      images: ["/38.png"],
    },
    {
      title: "Calibre 1 côté (GO ou NO GO)",
      Capacite: [
        "Diamètre : ≤ 100 mm",
        "100 mm",
      ],
      images: ["/39.jpg"],
    },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-100 p-10 min-h-screen">
      <motion.img
        src="/2.jpg"
        alt="Étalonnage des Instruments"
        className="w-full max-w-3xl mb-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />

      <h1 className="text-5xl font-extrabold text-red-600 mb-4 text-center">Service d&apos;Étalonnage des Instruments</h1>
      
      <section className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-2xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Introduction</h2>
        <p className="text-gray-700">
          Nous proposons un service professionnel d&apos;étalonnage pour tous vos instruments de mesure. 
          Assurez-vous de la précision de vos outils et respectez les normes en vigueur.
        </p>
      </section>

      {services.map((service, index) => (
        <motion.section
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-2xl transition-transform transform hover:shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">{service.title}</h2>
          {service.subtitle && <h3 className="text-lg text-gray-600 mb-2">{service.subtitle}</h3>}
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 flex flex-col gap-2">
              {service.images.map((img, idx) => (
                <motion.img
                  key={idx}
                  src={img}
                  alt={service.title}
                  className="w-full h-40 object-contain rounded-lg shadow-md transition-transform transform hover:scale-105"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              ))}
            </div>
            <div className="w-full md:w-1/2 pl-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-2">Capacités :</h3>
              <ul className="list-disc list-inside text-gray-700">
                {service.Capacite.map((cap, idx) => (
                  <li key={idx}>{cap}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>
      ))}

      <section className="bg-white shadow-lg rounded-lg p-6 mb-8 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Processus d&apos;Étalonnage</h2>
        <ol className="list-decimal list-inside text-gray-700">
          <li>Réception et vérification de l&apos;instrument.</li>
          <li>Étalonnage selon les spécifications requises.</li>
          <li>Tests de précision et ajustements.</li>
          <li>Émission d&apos;un certificat d&apos;étalonnage.</li>
        </ol>
      </section>
    </div>
  );
};

export default EtalonnagePage;
