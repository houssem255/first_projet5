'use client'


import Image from "next/image"
import Link from "next/link"

export default function Footer() {

    return (
        <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 md:pt-20 pt-10">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div>
              <h3 className="text-lg font-bold mb-4">Adresse</h3>
              <p className="text-gray-300">123 Rue de Exemple, Ville</p>
              <p className="text-gray-300">Code Postal</p>
              <p className="text-gray-300">Pays</p>
            </div>
  
            
            <div className="md:text-center">
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p className="text-gray-300"><a href="mailto:contact@example.com">contact@example.com</a></p>
              <p>+123 456 789</p>
            </div>
  
            
            <div className="md:text-center">
              <h3 className="text-lg font-bold mb-4">Réseaux</h3>
              <ul className="space-y-2">
                <li className="text-gray-300 hover:scale-110 hover:text-white ease-out duration-200"><Link href="https://www.facebook.com/CtimeAlgerie/"  >FACEBOOK</Link></li>
                <li className="text-gray-300 hover:scale-110 hover:text-white ease-out duration-200"><Link href="https://www.youtube.com/@ctimealgerie5011"  >YOUTUBE</Link></li>
                <li className="text-gray-300 hover:scale-110 hover:text-white ease-out duration-200"><Link href="https://www.linkedin.com/company/ctime-alg%C3%A9rie">linkedin</Link></li>
              </ul>
            </div>
  
            
            <div className="md:text-center">
              <h3 className="text-lg font-bold mb-4">lien utile</h3>
              <ul className="space-y-2">
                <li className="text-gray-300 hover:scale-110 hover:text-white ease-out duration-200">
                   <Link href="https://www.industrie.gov.dz/fr/">
                     Ministère de l&apos;Industrie et de la Production Pharmaceutique
                  </Link> </li>
               


                <li className="text-gray-300 hover:scale-110 hover:text-white ease-out duration-200"><Link href="/about"  >À propos</Link></li>
                <li className="text-gray-300 hover:scale-110 hover:text-white ease-out duration-200"><Link href="/services"  >Services</Link></li>
                <li className="text-gray-300 hover:scale-110 hover:text-white ease-out duration-200"><Link href="/contact" >Nous Contacter</Link></li>
              </ul>
            </div>
          </div>
  
          
          <hr className="my-8 border-gray-600" />

          <div className="flex items-center justify-between">
            <Image 
                src="/ctime.png"  
                alt="Logo"
                width={80}       
                height={80}      
                className="object-contain h-8 mr-4"
              />
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Ctime. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    )
}