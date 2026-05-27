import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.6 }}
      className="bg-[#1C1C1C] text-white p-12 border-t border-white/5"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-12">
          <div className="flex items-center justify-center md:justify-start space-x-3 group">
            <div className="p-3 bg-white/5 rounded-full group-hover:bg-[#00AEEF]/20 transition-colors">
              <Phone className="w-6 h-6 text-[#00AEEF]" />
            </div>
            <span className="font-bold tracking-widest">+57 321 539 1163</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-3 group">
            <div className="p-3 bg-white/5 rounded-full group-hover:bg-[#00AEEF]/20 transition-colors">
              <Mail className="w-6 h-6 text-[#00AEEF]" />
            </div>
            <span className="font-bold tracking-widest">gerenciatecniref@gmail.com</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-3 group">
            <div className="p-3 bg-white/5 rounded-full group-hover:bg-[#00AEEF]/20 transition-colors">
              <MapPin className="w-6 h-6 text-[#00AEEF]" />
            </div>
            <span className="font-bold tracking-widest uppercase">Valledupar, Colombia</span>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 text-center">
          <p className="text-gray-500 font-bold uppercase tracking-[0.3em] text-sm italic">&copy; {new Date().getFullYear()} TECNIREF S.A.S</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;