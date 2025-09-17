import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.2 }}
      className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="https://utfs.io/f/2vMRHqOYUHc0mkZlZxTfIJbfOXQWPgDwNtHSspUETxakjAG2" alt="Tecniref Logo" className="h-12 w-12 rounded-full object-cover" />
          <h1 className="text-3xl font-bold">Tecniref</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#inicio" className="hover:text-blue-200 transition duration-300">Inicio</a>
          <a href="#servicios" className="hover:text-blue-200 transition duration-300">Servicios</a>
          <a href="#contacto" className="hover:text-blue-200 transition duration-300">Contacto</a>
        </nav>
        <div className="md:hidden">
          <Menu className="w-8 h-8 cursor-pointer" />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;