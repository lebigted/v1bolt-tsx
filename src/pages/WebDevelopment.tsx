import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Zap, Users } from 'lucide-react';

const WebDevelopment = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0B0C10] py-16 px-4"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">Développement web</h1>
        <p className="text-xl text-center mb-12 text-white">Création de sites web et d'applications sur mesure pour répondre à vos besoins spécifiques.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-background-light rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Code className="text-primary mr-4" size={32} />
              <h3 className="text-2xl font-semibold text-white">Sites web personnalisés</h3>
            </div>
            <p className="text-white">Conception et développement de sites web uniques et adaptés à votre image de marque et à vos objectifs commerciaux.</p>
          </div>
          <div className="bg-background-light rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Smartphone className="text-primary mr-4" size={32} />
              <h3 className="text-2xl font-semibold text-white">Applications web responsives</h3>
            </div>
            <p className="text-white">Création d'applications web performantes et adaptées à tous les appareils pour une expérience utilisateur optimale.</p>
          </div>
          <div className="bg-background-light rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Zap className="text-primary mr-4" size={32} />
              <h3 className="text-2xl font-semibold text-white">Intégration de systèmes</h3>
            </div>
            <p className="text-white">Connexion de vos applications web avec vos systèmes existants pour une gestion efficace de vos données et processus.</p>
          </div>
          <div className="bg-background-light rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Users className="text-primary mr-4" size={32} />
              <h3 className="text-2xl font-semibold text-white">Expérience utilisateur (UX/UI)</h3>
            </div>
            <p className="text-white">Conception d'interfaces intuitives et attrayantes pour maximiser l'engagement et la satisfaction de vos utilisateurs.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WebDevelopment;
