import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0B0C10] py-16 px-4"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">À propos de WebCoreDB</h1>
        <div className="bg-background-light rounded-lg shadow-lg p-8 mb-12">
          <p className="text-lg mb-6 text-white">
            WebCoreDB est une entreprise leader dans le domaine de la gestion de bases de données et du développement web. Fondée en 2010, notre mission est de fournir des solutions innovantes et sur mesure pour répondre aux besoins uniques de chaque client.
          </p>
          <p className="text-lg mb-6 text-white">
            Avec une équipe d'experts passionnés et expérimentés, nous nous engageons à offrir des services de la plus haute qualité, en utilisant les dernières technologies et les meilleures pratiques de l'industrie.
          </p>
          <p className="text-lg text-white">
            Chez WebCoreDB, nous croyons que la réussite de nos clients est notre propre réussite. C'est pourquoi nous travaillons en étroite collaboration avec chaque client pour comprendre leurs objectifs et leur fournir des solutions qui dépassent leurs attentes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background-light rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-white">Notre Vision</h3>
            <p className="text-white">Devenir le partenaire technologique de référence pour les entreprises en quête d'excellence dans la gestion de leurs données et leur présence en ligne.</p>
          </div>
          <div className="bg-background-light rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-white">Nos Valeurs</h3>
            <ul className="list-disc list-inside text-white">
              <li>Innovation</li>
              <li>Intégrité</li>
              <li>Excellence</li>
              <li>Collaboration</li>
            </ul>
          </div>
          <div className="bg-background-light rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-white">Notre Équipe</h3>
            <p className="text-white">Une équipe diversifiée de professionnels passionnés, experts dans leurs domaines respectifs, unis par la volonté de fournir des solutions exceptionnelles.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
