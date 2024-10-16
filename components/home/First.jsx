'use client';

import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { BOL, Earth } from "../../svg";

export default function First() {
  const [count, setCount] = useState(0);

  return (
    <section className="flex flex-col items-center  max-w-md p-6 mx-auto bg-gradient-to-br from-gray-50 to-gray-200 rounded-3xl shadow-2xl transition-transform duration-300">
      <h1 className="text-5xl font-extrabold text-center mb-4 text-gray-800 drop-shadow-lg">
        <Typewriter 
          words={['Bienvenue à ctime', 'Hello in ctime']} 
          loop={0} 
          cursorStyle='|' 
          cursorBlinking={true}
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h1>
      <p className="text-gray-800 text-base mb-4 leading-relaxed text-center px-4">
        CTIME est un Établissement Public à Caractère Industriel et Commercial « EPIC ».
      </p>
      <div className="flex flex-wrap justify-center mt-4 gap-6">
        <div className="flex items-center gap-4 p-4 border-l-4 border-red-600 rounded-lg shadow-lg transition-shadow duration-300 bg-white hover:shadow-xl transform hover:scale-105">
          <Earth size={50} color={'red'} />
          <div>
            <h2 className="font-semibold text-lg text-gray-800">Support 24/7</h2>
            <p className="text-gray-600">Nous sommes là pour vous aider</p>
          </div>
        </div>
        <div className="flex items-center gap-4 p-4 border-l-4 border-red-600 rounded-lg shadow-lg transition-shadow duration-300 bg-white hover:shadow-xl transform hover:scale-105">
          <BOL size={50} color={'red'} />
          <div>
            <h2 className="font-semibold text-lg text-gray-800">Agence Récompensée</h2>
            <p className="text-gray-600">Vous êtes entre de bonnes mains</p>
          </div>
        </div>
      </div>
      <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-500 transition duration-200 transform hover:scale-105">
        En savoir plus
      </button>
    </section>
  );
}


