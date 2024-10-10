import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Code, Server, Cloud } from 'lucide-react';

const services = [
  {
    icon: <Database size={48} />,
    title: 'Gestion de bases de données',
    description: 'Optimisation et maintenance de vos bases de données pour des performances maximales.',
  },
  {
    icon: <Code size={48} />,
    title: 'Développement web',
    description: "Création de sites web et d'applications sur mesure pour répondre à vos besoins spécifiques.",
  },
  {
    icon: <Server size={48} />,
    title: 'Administration de serveurs',
    description: 'Gestion et maintenance de vos serveurs pour assurer une disponibilité optimale.',
  },
  {
    icon: <Cloud size={48} />,
    title: 'Solutions cloud',
    description: 'Mise en place et gestion de solutions cloud adaptées à votre entreprise.',
  },
];

const ServiceCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl bg-background-DEFAULT bg-opacity-90 p-8 rounded-lg mt-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="text-primary mb-4 flex justify-center">{services[currentIndex].icon}</div>
          <h2 className="text-2xl font-bold text-primary mb-2">{services[currentIndex].title}</h2>
          <p className="text-text-DEFAULT">{services[currentIndex].description}</p>
        </motion.div>
      </AnimatePresence>
      <div className="flex justify-center mt-6">
        {services.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === currentIndex ? 'bg-primary' : 'bg-secondary'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;