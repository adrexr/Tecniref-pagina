import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import { CheckCircle2, Wrench, Thermometer, Phone, Mail } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    let whatsappMessage = `Hola, mi nombre es ${name}. Mi correo es ${email}. `;
    if (phone) {
      whatsappMessage += `Mi teléfono es ${phone}. `;
    }
    whatsappMessage += `Mensaje: ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/573215391163?text=${encodedMessage}`; // Reemplaza con tu número de WhatsApp

    window.open(whatsappUrl, '_blank'); // Abre WhatsApp en una nueva pestaña

    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const logos = [
    { name: 'COLANTA', url: 'https://cooptalentum.coop/wp-content/uploads/2021/07/colanta-sin-fondo-01-e1633556457140.png' },
    { name: 'HIELO EL ESQUIMAL', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCiG5HrYPqjQvn8k4pyRKxk5y6oLWaUN6jUw&s' },
    { name: 'INDULACTEOS DE COLOMBIA', url: 'https://media.licdn.com/dms/image/v2/C560BAQEvo72BdwnhWg/company-logo_200_200/company-logo_200_200/0/1631371113736?e=2147483647&v=beta&t=N3Qr4Uv44grRyVxjj_4E_0enP7yOStW8mZms_V-MhW8' },
    { name: 'DISTRIBUCIONES SANTANA', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMw2jjbZWMWs9Md--N7-438M3zQfsLtrzQXA&s' },
    { name: 'PRIME', url: 'https://media.licdn.com/dms/image/v2/C4E0BAQHyacy_oAPhYQ/company-logo_200_200/company-logo_200_200/0/1658438684943/prime_refrigeracin_logo?e=2147483647&v=beta&t=VEE4BjM_WDsopOuxvpSDDdjmwAh_fOdn1_pRDLiojWc' },
    { name: 'CYG INTERNACIONAL', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHijNxUyM471i2oprI_JGvCB2TjVgobMFANw&s' },
    { name: "D'COSTA", url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVuscPR4JJt0euKD5lbLpKCzecXQpEkR-NLw&s' },
    { name: 'HOTEL SONESTA VALLEDUPAR', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjD2piuqlTSr6LjUMLSjlJTnxinRl2npUmzg&s' },
    { name: 'CODELAC', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDEU9TBxwM1nM1Wb3ESUVPm6YwGSO2l2m_1g&s' },
    { name: 'KLARENS', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdXXiolbqIfILQPi8tzm4ZPkadXrJ5Zz0aoQ&s' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA]">
      <Header />

      <main className="flex-grow">
        {/* Sección de Inicio */}
        <section id="inicio" className="relative bg-[#0F4C81] text-white py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1583912277729-c15917a61d7f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}></div>
          <div className="container mx-auto text-center relative z-10 px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight text-white"
            >
              Soluciones integrales en refrigeración industrial y climatización.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white"
            >
              Garantizar soluciones eficientes y confiables en refrigeración industrial y climatización para el sector empresarial y comercial.
            </motion.p>
            <motion.a
              href="#contacto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.8 }}
              className="inline-block bg-[#FF6B00] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#e65a00] transition duration-300 transform hover:scale-105"
            >
              Contactanos
            </motion.a>
          </div>
        </section>

        {/* Sección de Servicios */}
        <section id="servicios" className="py-16 bg-[#F8F9FA]">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center mb-12"
            >
              Nuestros Servicios
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-lg shadow-sm text-center border border-gray-100"
              >
                <CheckCircle2 className="w-16 h-16 text-[#0F4C81] mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Refrigeración</h3>
                <p className="text-[#5B6770]">
                  Diseñamos e instalamos sistemas de refrigeración industrial, cuartos fríos y equipos de aire acondicionado para aplicaciones comerciales e industriales, garantizando eficiencia, seguridad y alto rendimiento operativo.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-8 rounded-lg shadow-sm text-center border border-gray-100"
              >
                <Wrench className="w-16 h-16 text-[#0F4C81] mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Mantenimiento</h3>
                <p className="text-[#5B6770]">
                 Realizamos mantenimiento preventivo y correctivo para sistemas de refrigeración industrial y aires acondicionados, asegurando el óptimo funcionamiento de los equipos y la continuidad de las operaciones.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white p-8 rounded-lg shadow-sm text-center border border-gray-100"
              >
                <Thermometer className="w-16 h-16 text-[#0F4C81] mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">Soporte y Reparación</h3>
                <p className="text-[#5B6770]">
                  Atendemos fallas y emergencias en sistemas de refrigeración y climatización con diagnóstico técnico especializado, soluciones rápidas y soporte eficiente para minimizar tiempos de inactividad.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Sección de Aliados Estratégicos (Empresas que confían) */}
        <section className="py-20 bg-[#F8F9FA] overflow-hidden relative">
          <div className="container mx-auto px-4 mb-12 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-[#0F4C81] uppercase italic tracking-tighter"
            >
              Aliados <span className="text-[#00AEEF]">Estratégicos</span>
            </motion.h2>
            <p className="text-[#5B6770] font-bold uppercase tracking-[0.2em] text-sm mt-2">
              Empresas de alto nivel que respaldan nuestra ingeniería
            </p>
          </div>

          <div className="relative flex items-center">
            {/* Gradientes laterales para suavizar la entrada/salida de logos */}
            <div className="absolute left-0 z-10 w-20 md:w-40 h-full bg-gradient-to-r from-[#F8F9FA] to-transparent"></div>
            <div className="absolute right-0 z-10 w-20 md:w-40 h-full bg-gradient-to-l from-[#F8F9FA] to-transparent"></div>

            <div className="animate-marquee flex items-center space-x-12 md:space-x-24 py-4">
              {/* Duplicamos el set de logos para el loop infinito */}
              {[...Array(2)].map((_, i) => (
                <React.Fragment key={i}>
                  {logos.map((empresa) => (
                    <div key={`${empresa.name}-${i}`} className="logo-card group flex flex-col items-center justify-center min-w-[150px] md:min-w-[200px]">
                      <div className="glass-morphism p-6 rounded-2xl border border-gray-200 group-hover:border-[#00AEEF]/50 group-hover:shadow-[0_0_30px_rgba(0,174,239,0.2)] transition-all">
                        <img 
                          src={empresa.url} 
                          alt={`Logo ${empresa.name}`}
                          loading="lazy"
                          className="h-12 md:h-16 w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                        />
                      </div>
                      <span className="mt-4 text-[10px] font-black text-[#5B6770] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                        Verified Partner
                      </span>
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de Contacto */}
        <section id="contacto" className="py-24 bg-[#1C1C1C] text-white relative">
          <div className="section-divider absolute top-0 left-0 right-0 opacity-30"></div>
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl font-bold text-center mb-12"
            >
              Contáctanos
            </motion.h2>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <p className="text-center text-gray-600 mb-8">
                ¿Necesitas un presupuesto o tienes alguna pregunta? ¡Estamos aquí para ayudarte!
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#1C1C1C] text-sm font-bold mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#1C1C1C] text-sm font-bold mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[#1C1C1C] text-sm font-bold mb-2">
                    Teléfono (Opcional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
                    placeholder="Tu teléfono"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#1C1C1C] text-sm font-bold mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-[#00AEEF] focus:border-transparent"
                    placeholder="Describe tu consulta o servicio requerido..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#FF6B00] hover:bg-[#e65a00] text-white font-bold py-3 px-4 rounded-lg focus:outline-none shadow-md transition duration-300 flex items-center justify-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Enviar Mensaje</span>
                </motion.button>
              </form>
              <div className="mt-8 text-center text-gray-700">
                <p className="mb-2">O contactanos directamente en:</p>
                <a href="https://wa.me/573215391163" className="text-[#FF6B00] hover:underline font-semibold text-lg flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>+57 3215391163</span>  
                </a>
                <a href="https://wa.me/573106328293" className="text-[#FF6B00] hover:underline font-semibold text-lg flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>+57 310 6328293</span>
                </a>
                 <a href="mailto:gerenciatecniref@gmail.com" className="text-[#FF6B00] hover:underline font-semibold text-lg flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>gerenciatecniref@gmail.com</span>
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