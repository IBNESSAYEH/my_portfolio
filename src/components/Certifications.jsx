import React, { useContext, useState } from 'react';
import { CertificationsContext } from '../contexts/CertificationsContext';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Certifications = () => {
  const { certificates } = useContext(CertificationsContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const movePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  return (
    <section
      id="certifications"
      className="bg-gray-900 text-white h-screen flex flex-col items-center justify-center px-6 py-12"
    >
        
 
      <h2 className="text-3xl font-bold text-center mb-8">Certifications <span className='text-[#55E5A4]'>({certificates.length})</span></h2>

      <div className="relative w-full flex items-center justify-center max-w-4xl">
      
        <button
          onClick={movePrevious}
          className="absolute left-4 p-4 bg-[#55E5A4] text-gray-900 font-semibold rounded-full hover:bg-opacity-90 transition-all z-10"
        >
          <FaChevronLeft size={24} />
        </button>

        <motion.div
          key={currentIndex}
          className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg max-w-md w-full"
          initial={{ opacity: 0.6, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.img
            src={certificates[currentIndex].img}
            alt={`${certificates[currentIndex].title}`}
            className="rounded-md border-4 border-[#55E5A4] shadow-md mb-4 w-auto max-h-64"
            initial={{ scale: 1.4 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
          <motion.h3
            className="text-2xl font-semibold text-[#55E5A4] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {certificates[currentIndex].title}
          </motion.h3>
          <motion.p
            className="text-md text-gray-300 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {certificates[currentIndex].description}
          </motion.p>
        </motion.div>

        <button
          onClick={moveNext}
          className="absolute right-4 p-4 bg-[#55E5A4] text-gray-900 font-semibold rounded-full hover:bg-opacity-90 transition-all z-10"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Certifications;
