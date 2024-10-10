import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Database } from 'lucide-react';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-black text-white"
    >
      {/* Section principale */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Solutions de bases de données premium</h1>
          <p className="text-xl mb-6">Optimisez vos données avec nos solutions de gestion avancées.</p>
          <Link
            to="/services"
            className="bg-[#66FCF1] hover:bg-[#45A29E] text-black font-bold py-3 px-6 rounded-full transition-colors duration-300"
          >
            Voir nos services
          </Link>
        </div>
        <div className="md:w-1/2">
          <img src="https://img.freepik.com/photos-premium/fond-noir-dynamique_889227-2489.jpg" alt="Database visualization" className="rounded-lg shadow-lg" />
        </div>
      </section>

      {/* Section des logos partenaires */}
      <section className="bg-[#0B0C10] py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8">
            {['AWS', 'Google Cloud', 'Microsoft Azure', 'Oracle', 'IBM'].map((partner, index) => (
              <div key={index} className="text-gray-400 text-lg font-semibold">{partner}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Section supplémentaire */}
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img src="https://via.placeholder.com/400x400" alt="Data visualization" className="rounded-full shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-10">
          <h2 className="text-3xl font-bold mb-4">Dans un monde de données...</h2>
          <p className="text-xl mb-6">Rien n'est plus crucial que la gestion efficace de l'information.</p>
          <p className="mb-6">Que vous cherchiez à optimiser vos processus ou à sécuriser vos données critiques, WebCoreDB vous offre des solutions sur mesure avec une expertise inégalée.</p>
          <Link
            to="/about"
            className="text-[#66FCF1] hover:text-[#45A29E] font-bold transition-colors duration-300"
          >
            En savoir plus
          </Link>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;