import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [countryCode, setCountryCode] = useState('+33');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(e.target.value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[#0B0C10] py-16 px-4"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">Contactez-nous</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-[#1F2833] rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-white">Envoyez-nous un message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-white font-bold mb-2">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 bg-[#0B0C10] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#66FCF1] text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-white font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 bg-[#0B0C10] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#66FCF1] text-white"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-white font-bold mb-2">Téléphone</label>
                <div className="flex">
                  <select
                    value={countryCode}
                    onChange={handleCountryCodeChange}
                    className="w-1/4 px-3 py-2 bg-[#0B0C10] border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#66FCF1] text-white"
                  >
                    <option value="+33">+33</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+49">+49</option>
                    {/* Ajoutez d'autres codes pays selon vos besoins */}
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    className="w-3/4 px-3 py-2 bg-[#0B0C10] border border-gray-600 rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#66FCF1] text-white"
                    placeholder="123456789"
                    required
                  />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-white font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 bg-[#0B0C10] border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#66FCF1] text-white"
                  required
                ></textarea>
              </div>
              <button type="submit" className="bg-[#66FCF1] hover:bg-[#45A29E] text-[#0B0C10] font-bold py-2 px-4 rounded-md transition-colors duration-300">Envoyer</button>
            </form>
          </div>
          <div>
            <div className="bg-[#1F2833] rounded-lg shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6 text-white">Informations de contact</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Mail className="mr-4 text-[#66FCF1]" />
                  <span className="text-white">contact@webcoredb.com</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-4 text-[#66FCF1]" />
                  <span className="text-white">+33 1 23 45 67 89</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-4 text-[#66FCF1]" />
                  <span className="text-white">123 Rue de l'Innovation, 75001 Paris, France</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#1F2833] rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6 text-white">Heures d'ouverture</h2>
              <ul className="space-y-2 text-white">
                <li><strong>Lundi - Vendredi:</strong> 9h00 - 18h00</li>
                <li><strong>Samedi:</strong> 10h00 - 14h00</li>
                <li><strong>Dimanche:</strong> Fermé</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
