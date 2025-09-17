import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.6 }}
      className="bg-gray-800 text-white p-8 mt-12"
    >
      <div className="container mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
          <div className="flex items-center space-x-2">
            <Phone className="w-5 h-5" />
            <span>+57 3215391163</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-5 h-5" />
            <span>gerenciatecniref@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-5 h-5" />
            <span>Calle 19B N°6ª-40 Kennedy</span>
          </div>
        </div>
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Tecniref. Todos los derechos reservados.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;