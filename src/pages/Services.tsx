import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code, Server, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Database size={48} />,
    title: 'Gestion de bases de données',
    description: 'Optimisation et maintenance de vos bases de données pour des performances maximales.',
    link: '/database-management'
  },
  {
    icon: <Code size={48} />,
    title: 'Développement web',
    description: "Création de sites web et d'applications sur mesure pour répondre à vos besoins spécifiques.",
    link: '/web-development'
  },
  {
    icon: <Server size={48} />,
    title: 'Administration de serveurs',
    description: 'Gestion et maintenance de vos serveurs pour assurer une disponibilité optimale.',
    link: '/server-administration'
  },
  {
    icon: <Cloud size={48} />,
    title: 'Solutions cloud',
    description: 'Mise en place et gestion de solutions cloud adaptées à votre entreprise.',
    link: '/cloud-solutions'
  },
];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0B0C10] py-16 px-4"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">Nos Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-background-light rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <Link to={service.link} className="block">
                <div className="text-primary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
                <div className="mt-4 text-primary hover:underline">En savoir plus</div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;