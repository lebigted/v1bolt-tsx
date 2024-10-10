import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, Zap, Lock, RefreshCw } from 'lucide-react';

const CloudSolutions = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0B0C10] py-16 px-4"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">Solutions cloud</h1>
        <p className="text-xl text-center mb-12 text-white">Mise en place et gestion de solutions cloud adaptées à votre entreprise.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-background-light rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Cloud className="text-primary mr-4" size={32} />
              <h3 className="text-2xl font-semibold text-white">Migration vers le cloud</h3>
            </div>
            <p className="text-white">Planification et exécution de la migration de vos infrastructures et applications vers des plateformes cloud sécurisées et évolutives.</p>
          </div>
          <div className="bg-background-light rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Zap className="text-primary mr-4" size={32} />
              <h3 className="text-2xl font-semibold text-white">Optimisation des performances</h3>
            </div>
            <p className="text-white">Optimisation de vos ressources cloud pour maximiser les performances et minimiser les coûts d'exploitation.</p>
          </div>
          <div className="bg-background-light rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Lock className="text-primary mr-4" size={32} />
              <h3 className="text-2xl font-semibold text-white">Sécurité et conformité</h3>
            </div>
            <p className="text-white">Mise en place de mesures de sécurité avancées et respect des normes de conformité spécifiques à votre industrie dans l'environnement cloud.</p>
          </div>
          <div className="bg-background-light rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <RefreshCw className="text-primary mr-4" size={32} />
              <h3 className="text-2xl font-semibold text-white">Gestion continue</h3>
            </div>
            <p className="text-white">Surveillance, maintenance et mise à jour continues de vos solutions cloud pour garantir des performances optimales et une disponibilité maximale.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CloudSolutions;
