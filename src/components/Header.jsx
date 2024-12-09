import React, { useContext, useEffect, useState } from 'react';
import myPicture from '../assets/images/myPicture.png';
import { PortfolioContext } from '../contexts/PortfolioContext';

const Header = () => {
  const { title } = useContext(PortfolioContext);
  const [displayedTitle, setDisplayedTitle] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < title.length) {
        setDisplayedTitle((prev) => prev + title.charAt(currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [title]);

  return (
    <section id="header" className="flex flex-col md:flex-row items-center md:items-start p-8 bg-gray-800 text-white relative animate-fadeIn">
      <div className="w-full md:w-3/4 space-y-4 text-center md:text-left">
        <h2 className="text-2xl sm:text-2xl lg:text-5xl font-bold text-[#55E5A4]">{displayedTitle}</h2>
        <p className="text-sm sm:text-md md:text-lg">
          I’m a Fullstack Developer skilled in building robust, user-focused web applications.
        </p>
        <div className="flex justify-center md:justify-start space-x-4 mb-4">
          <a 
            href="mailto:abdellatifibnessayeh@gmail.com" 
            className="px-6 py-2 bg-[#55E5A4] text-gray-900 font-semibold rounded-md hover:bg-opacity-90 transition-all"
          >
            Get in Touch
          </a>
          <a 
            href="/IBNESSAYEH_Abdellatif_CV_JAVA.pdf" 
            download="https://ibnessayeh.github.io/my_portfolio/IBNESSAYEH_Abdellatif_CV_JAVA.pdf" 
            className="px-6 py-2 text-[#55E5A4] border border-[#55E5A4] font-semibold rounded-md hover:bg-[#55E5A4] hover:text-gray-900 transition-all"
          >
            Download CV
          </a>
        </div>
      </div>
   
      <div className="w-32 sm:w-40 md:w-48 mt-4 md:mt-0 md:ml-8 hidden md:block">
        <img 
          src={myPicture} 
          alt="Abdellatif's Picture" 
          className="w-full h-auto object-cover border-4 border-[#55E5A4] rounded-full shadow-lg"
        />
      </div>
    </section>
  );
};

export default Header;
