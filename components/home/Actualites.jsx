'use client';
import Image from 'next/image';

export default function Actualites() {
  const actualites = [
    {
      id: 1,
      title: "Ouverture des inscriptions pour l'année académique 2024",
      description: "Les inscriptions pour la prochaine année académique commencent le 1er juin. Ne ratez pas cette opportunité !",
      date: "2024-05-15",
      image: "/3.jpg", 
    },
    {
      id: 2,
      title: "Conférence sur l&apos;Innovation Technologique",
      description: "Rejoignez-nous le 20 juin pour une conférence passionnante sur les dernières innovations technologiques.",
      date: "2024-05-10",
      image: "/3.jpg", 
    },
    {
      id: 3,
      title: "Journée Portes Ouvertes",
      description: "Venez découvrir nos installations et rencontrer notre équipe lors de notre journée portes ouvertes le 5 juillet.",
      date: "2024-05-01",
      image: "/3.jpg", 
    },
  ];

  return (
    <section className="flex flex-col items-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-red-600">Actualités de l&apos;Institut</h1>

      <div className="flex flex-col md:flex-row justify-around gap-10 w-full max-w-4xl">
        {actualites.map((actualite) => (
          <div key={actualite.id} className="bg-white rounded-lg shadow-lg p-6 mb-4 md:mb-0 md:w-1/3 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <Image
              src={actualite.image}
              alt={actualite.title}
              width={400} 
              height={200}
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2 text-red-600">{actualite.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{new Date(actualite.date).toLocaleDateString()}</p>
            <p className="text-gray-800">{actualite.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
