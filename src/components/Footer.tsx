import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background-light text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">WebCoreDB</h3>
            <p className="text-sm text-white">Votre partenaire de confiance pour la gestion des bases de données et le développement web.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Liens rapides</h4>
            <ul className="text-sm">
              <li className="mb-2"><a href="/" className="hover:text-primary transition-colors">Accueil</a></li>
              <li className="mb-2"><a href="/services" className="hover:text-primary transition-colors">Services</a></li>
              <li className="mb-2"><a href="/about" className="hover:text-primary transition-colors">À propos</a></li>
              <li className="mb-2"><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <p className="text-sm mb-2">Email: contact@webcoredb.com</p>
            <p className="text-sm mb-2">Téléphone: +33 1 23 45 67 89</p>
            <p className="text-sm">Adresse: 123 Rue de l'Innovation, 75001 Paris, France</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-2">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter size={24} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center">
          <p>&copy; 2024 WebCoreDB. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
