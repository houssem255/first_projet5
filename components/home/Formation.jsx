import Image from 'next/image';

export default function Formations() {
  const formations = [
    {
      id: 1,
      title: "Formation en Développement Web",
      description: "Apprenez à créer des sites web dynamiques avec HTML, CSS et JavaScript.",
      image: "/3.jpg", // Remplacez par le chemin de votre image
    },
    {
      id: 2,
      title: "Formation en Data Science",
      description: "Découvrez l'analyse de données, le machine learning et les statistiques.",
      image: "/3.jpg", // Remplacez par le chemin de votre image
    },
    {
      id: 3,
      title: "Formation en Marketing Digital",
      description: "Maîtrisez les techniques de marketing en ligne et les réseaux sociaux.",
      image: "/3.jpg", // Remplacez par le chemin de votre image
    },
  ];

  return (
    <section className="flex flex-col items-center p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center text-red-600">Nos Formations</h1>

      <div className="flex flex-col md:flex-row justify-around gap-10 w-full max-w-4xl">
        {formations.map((formation) => (
          <div key={formation.id} className="bg-white rounded-lg shadow-lg p-6 mb-4 md:mb-0 md:w-1/3 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl">
            <Image
              src={formation.image}
              alt={formation.title}
              width={400} 
              height={200}  
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4 text-red-600">{formation.title}</h2>
            <p className="text-gray-800">{formation.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
