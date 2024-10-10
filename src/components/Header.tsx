import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Database, User, Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-[#0B0C10] transition-colors duration-300 ${isScrolled ? 'bg-black' : ''} header-rounded`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link to="/" className="flex items-center space-x-2">
          <Database size={24} className="text-[#66FCF1]" />
          <span className="text-2xl font-bold text-white">WebCoreDB</span>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-white hover:text-[#66FCF1] transition-colors">Accueil</Link></li>
            <li><Link to="/services" className="text-white hover:text-[#66FCF1] transition-colors">Services</Link></li>
            <li><Link to="/about" className="text-white hover:text-[#66FCF1] transition-colors">À propos</Link></li>
            <li><Link to="/contact" className="text-white hover:text-[#66FCF1] transition-colors">Contact</Link></li>
          </ul>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/signup" className="text-white hover:text-[#66FCF1] transition-colors">
            Créer un compte
          </Link>
          <Link to="/login" className="bg-[#66FCF1] hover:bg-[#45A29E] text-[#0B0C10] font-bold py-2 px-4 rounded-full transition-colors duration-300">
            Get Started
          </Link>
          <button className="text-white hover:text-[#66FCF1] transition-colors">
            <Search size={18} />
          </button>
        </div>
        <button className="md:hidden text-white hover:text-[#66FCF1] transition-colors" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Menu déroulant pour mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1F2833] py-4">
          <nav className="container mx-auto px-6">
            <ul className="space-y-4">
              <li><Link to="/" className="block text-white hover:text-[#66FCF1] transition-colors" onClick={toggleMenu}>Accueil</Link></li>
              <li><Link to="/services" className="block text-white hover:text-[#66FCF1] transition-colors" onClick={toggleMenu}>Services</Link></li>
              <li><Link to="/about" className="block text-white hover:text-[#66FCF1] transition-colors" onClick={toggleMenu}>À propos</Link></li>
              <li><Link to="/contact" className="block text-white hover:text-[#66FCF1] transition-colors" onClick={toggleMenu}>Contact</Link></li>
              <li><Link to="/signup" className="block text-white hover:text-[#66FCF1] transition-colors" onClick={toggleMenu}>Créer un compte</Link></li>
              <li><Link to="/login" className="block text-[#66FCF1] font-bold hover:text-[#45A29E] transition-colors" onClick={toggleMenu}>Get Started</Link></li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;