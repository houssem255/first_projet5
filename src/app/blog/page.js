// pages/formations.js
"use client";
import React from 'react';
import Image from 'next/image';


const formationsData = [
  {
    id: 1,
    titre: 'Mécanique Automobile',
    description: 'Formation sur les systèmes mécaniques des véhicules.',
    duree: '6 mois',
    image: '/images/mecanique_automobile.jpg', // Remplace par le chemin correct de ton image
  },
  {
    id: 2,
    titre: 'Mécanique Aéronautique',
    description: 'Apprenez les bases de la mécanique appliquée aux aéronefs.',
    duree: '8 mois',
    image: '/images/mecanique_aeronautique.jpg', // Remplace par le chemin correct de ton image
  },
  {
    id: 3,
    titre: 'Mécanique Industrielle',
    description: 'Formation sur les machines et les processus industriels.',
    duree: '5 mois',
    image: '/images/mecanique_industrielle.jpg', // Remplace par le chemin correct de ton image
  },
];

const Formations = () => {
  return (
    <div style={{ padding: '20px', background: '#f9f9f9' }}>
      <nav style={{ padding: '10px', background: '#333', color: '#fff' }}>
        <a href="/" style={{ marginRight: '15px', color: '#fff' }}>Accueil</a>
        <a href="/formations" style={{ color: '#fff' }}>Formations</a>
      </nav>
      <h1 style={{ textAlign: 'center', margin: '20px 0' }}>Nos Formations en Mécanique</h1>
      
      <a href='/pdf/45k.pdf' download={"45k.pdf"}>telechargé ficher</a>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {formationsData.map((formation) => (
          <div key={formation.id} style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            margin: '10px 0',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.2s',
            width: '80%',
            maxWidth: '600px',
          }}
          className="formation-card"
          >
            <Image 
              src={formation.image} 
              alt={formation.titre} 
              width={600} 
              height={400} 
              style={{ borderRadius: '8px' }} 
            />
            <h2>{formation.titre}</h2>
            <p>{formation.description}</p>
            <p><strong>Durée:</strong> {formation.duree}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .formation-card:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Formations;




