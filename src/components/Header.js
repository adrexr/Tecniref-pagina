import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Phone, Mail } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.2 }}
      className="glass-morphism border-b border-[#00AEEF]/20 text-[#0F4C81] p-4 sticky top-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center group cursor-pointer">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center space-x-3"
          >
            <img src={logo} alt="TECNIREF Logo" className="h-12 w-auto object-contain drop-shadow-md" />
            <h1 className="text-2xl font-extrabold tracking-tighter uppercase italic transition-colors duration-300 group-hover:text-[#00AEEF]">
              Tecni<span className="text-[#00AEEF] group-hover:text-[#0F4C81]">ref</span>
            </h1>
          </motion.div>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#inicio" className="font-bold hover:text-[#00AEEF] transition-all hover:neon-text-blue">Inicio</a>
          <a href="#servicios" className="font-bold hover:text-[#00AEEF] transition-all hover:neon-text-blue">Servicios</a>
          <a href="#contacto" className="font-bold hover:text-[#00AEEF] transition-all hover:neon-text-blue">Contacto</a>
        </nav>
        <div className="md:hidden">
          <Menu className="w-8 h-8 cursor-pointer" />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;