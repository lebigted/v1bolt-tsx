import React from 'react';
import { motion } from 'framer-motion';
import { Database, BarChart, Shield, Clock } from 'lucide-react';

const DatabaseManagement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0B0C10] py-16 px-4"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">Gestion de bases de données</h1>
        <p className="text-xl text-center mb-12 text-white">Optimisation et maintenance de vos bases de données pour des performances maximales.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-background-light rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Database className="text-primary mr-4" size={32} />
              <h3 className="text-2xl font-semibold text-white">Optimisation des performances</h3>
            </div>
            <p className="text-white">Nous analysons et optimisons vos requêtes pour améliorer les temps de réponse et réduire la charge sur vos serveurs.</p>
          </div>
          <div className="bg-background-light rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <BarChart className="text-primary mr-4" size={32} />
              <h3 className="text-2xl font-semibold text-white">Analyse et reporting</h3>
            </div>
            <p className="text-white">Création de tableaux de bord et de rapports personnalisés pour suivre les performances de vos bases de données.</p>
          </div>
          <div className="bg-background-light rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Shield className="text-primary mr-4" size={32} />
              <h3 className="text-2xl font-semibold text-white">Sécurité et conformité</h3>
            </div>
            <p className="text-white">Mise en place de mesures de sécurité robustes et respect des normes de conformité pour protéger vos données sensibles.</p>
          </div>
          <div className="bg-background-light rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <Clock className="text-primary mr-4" size={32} />
              <h3 className="text-2xl font-semibold text-white">Maintenance préventive</h3>
            </div>
            <p className="text-white">Surveillance proactive et maintenance régulière pour prévenir les problèmes avant qu'ils n'affectent vos opérations.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DatabaseManagement;
