"use client";

import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
  return (
    <Carousel className="rounded-xl">
      <div className="relative w-full h-[400px]">
      <img
          src="/7ème édition.jpg"
          alt="image 2"
          className="h-full w-full object-contain rounded-xl" // Changement ici pour les images
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 flex flex-col items-center transition-transform duration-500 scale-75 opacity-0 hover:scale-100 hover:opacity-100">
          <h2 className="text-lg font-bold">Titre de la vidéo 1</h2>
          <p>Voici une description de la vidéo 1.</p>
        </div>
      </div>

      <div className="relative w-full h-[400px]">
        <img
          src="/7ème édition.jpg"
          alt="image 2"
          className="h-full w-full object-contain rounded-xl" // Changement ici pour les images
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 flex flex-col items-center transition-transform duration-500 scale-75 opacity-0 hover:scale-100 hover:opacity-100">
          <h2 className="text-lg font-bold">ALGEST 2022</h2>
          <p>Participation du CTIME à la 7ème édition du salon international de la sous traitance ALGEST 2022 qui se tiendra du 14 au 17 Novembre 2022 au niveau de la SAFEX (Pins Maritime) – ALGER.</p>
        </div>
      </div>

      <div className="relative w-full h-[400px]">
        <img
          src="/7ème édition.jpg"
          alt="image 3"
          className="h-full w-full object-contain rounded-xl" // Changement ici pour les images
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 flex flex-col items-center transition-transform duration-500 scale-75 opacity-0 hover:scale-100 hover:opacity-100">
        <h2 className="text-lg font-bold">Titre de l&apos;image 3</h2>
        <p>Voici une description de l&apos;image 3.</p>

        </div>
      </div>
    </Carousel>
  );
} 