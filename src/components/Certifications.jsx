import React, { useContext } from 'react';
import { CertificationsContext } from '../contexts/CertificationsContext';
import { motion } from 'framer-motion';

const Certifications = () => {
  const { certificates } = useContext(CertificationsContext);

  return (
    <section id="certifications" className="p-8 bg-gray-900 text-white space-y-8 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#55E5A4] animate-pulse"></div>
      <h2 className="text-3xl font-bold">Certifications</h2>
      <div className="flex flex-col space-y-12">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-between space-x-8 p-4 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <motion.img 
              src={cert.img} 
              alt={`${cert.title}`} 
              className="w-40 h-40 object-cover rounded-full border-4 border-[#55E5A4] shadow-md"
            />
            <div className="space-y-3 flex-grow">
              <h3 className="text-2xl font-semibold text-[#55E5A4]">{cert.title}</h3>
              <p className="text-sm text-gray-300">{cert.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
