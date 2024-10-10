import React from 'react';
import { motion } from 'framer-motion';
import { Server, Shield, BarChart, RefreshCw } from 'lucide-react';

const ServerAdministration = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0B0C10] py-16 px-4"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">Administration de serveurs</h1>
        <p className="text-xl text-center mb-12 text-white">Gestion et maintenance de vos serveurs pour assurer une disponibilité optimale.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-background-light rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Server className="text-primary mr-4" size={32} />
              <h3 className="text-2xl font-semibold text-white">Configuration et optimisation</h3>
            </div>
            <p className="text-white">Mise en place et optimisation de vos serveurs pour des performances maximales et une utilisation efficace des ressources.</p>
          </div>
          <div className="bg-background-light rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="text-primary mr-4" size={32} />
              <h3 className="text-2xl font-semibold text-white">Sécurité et mises à jour</h3>
            </div>
            <p className="text-white">Protection de vos serveurs contre les menaces et application régulière des mises à jour de sécurité.</p>
          </div>
          <div className="bg-background-light rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <BarChart className="text-primary mr-4" size={32} />
              <h3 className="text-2xl font-semibold text-white">Surveillance et reporting</h3>
            </div>
            <p className="text-white">Suivi en temps réel des performances de vos serveurs et génération de rapports détaillés pour une gestion proactive.</p>
          </div>
          <div className="bg-background-light rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <RefreshCw className="text-primary mr-4" size={32} />
              <h3 className="text-2xl font-semibold text-white">Sauvegarde et récupération</h3>
            </div>
            <p className="text-white">Mise en place de stratégies de sauvegarde robustes et de plans de récupération après sinistre pour protéger vos données critiques.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServerAdministration;
