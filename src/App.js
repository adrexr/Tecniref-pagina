import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import { CheckCircle2, Wrench, Thermometer, Phone, Mail } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Sección de Inicio */}
        <section id="inicio" className="relative bg-gradient-to-br from-blue-500 to-blue-700 text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1583912277729-c15917a61d7f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
          <div className="container mx-auto text-center relative z-10 px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight"
            >
              Tecniref: Tu Confort, Nuestra Prioridad
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            >
              Expertos en instalación, mantenimiento y reparación de sistemas de aire acondicionado.
            </motion.p>
            <motion.a
              href="#contacto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.8 }}
              className="inline-block bg-white text-blue-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-100 transition duration-300 transform hover:scale-105"
            >
              Solicita tu Presupuesto
            </motion.a>
          </div>
        </section>

        {/* Sección de Servicios */}
        <section id="servicios" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center text-gray-800 mb-12"
            >
              Nuestros Servicios
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-blue-50 p-8 rounded-lg shadow-md text-center border border-blue-100"
              >
                <CheckCircle2 className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Instalación</h3>
                <p className="text-gray-600">
                  Instalamos sistemas de aire acondicionado de última generación, adaptados a tus necesidades y espacio.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-blue-50 p-8 rounded-lg shadow-md text-center border border-blue-100"
              >
                <Wrench className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Mantenimiento</h3>
                <p className="text-gray-600">
                  Aseguramos el óptimo funcionamiento de tus equipos con revisiones periódicas y limpieza profesional.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-blue-50 p-8 rounded-lg shadow-md text-center border border-blue-100"
              >
                <Thermometer className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Reparación</h3>
                <p className="text-gray-600">
                  Solucionamos cualquier avería de forma rápida y eficiente, devolviendo el confort a tu hogar o negocio.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sección de Contacto */}
        <section id="contacto" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center text-gray-800 mb-12"
            >
              Contáctanos
            </motion.h2>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <p className="text-center text-gray-600 mb-8">
                ¿Necesitas un presupuesto o tienes alguna pregunta? ¡Estamos aquí para ayudarte!
              </p>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                    Teléfono (Opcional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tu teléfono"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe tu consulta o servicio requerido..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Enviar Mensaje</span>
                </motion.button>
              </form>
              <div className="mt-8 text-center text-gray-700">
                <p className="mb-2">O llámanos directamente:</p>
                <a href="https://wa.me/573215391163" className="text-blue-600 hover:underline font-semibold text-lg flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>+57 3215391163</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}