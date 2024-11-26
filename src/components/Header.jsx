import React, { useContext, useEffect, useState } from 'react';
import myPicture from '../images/myPicture.png';
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
    <section className="flex flex-col md:flex-row items-center p-8 bg-gray-800 text-white relative animate-fadeIn">
      <div className="md:w-3/5 space-y-4 md:mr-8">
        <h1 className="text-4xl font-bold text-[#55E5A4]">{displayedTitle}</h1>
        <p className="text-md md:text-lg">
          I’m a Fullstack Developer skilled in building robust, user-focused web applications.
        </p>
        <div className="flex space-x-4 mb-4">
          <a href="mailto:abdellatifibnessayeh@gmail.com" className="px-6 py-2 bg-[#55E5A4] text-gray-900 font-semibold rounded-md hover:bg-opacity-90 transition-all">Get in Touch</a>
          <a 
            href="/Abdellatif_IBNESSAYEH_CV.pdf" 
            download="Abdellatif_IBNESSAYEH_CV.pdf" 
            className="px-6 py-2 text-[#55E5A4] border border-[#55E5A4] font-semibold rounded-md hover:bg-[#55E5A4] hover:text-gray-900 transition-all"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className=" mt-8 md:mt-0 hover:scale-100 transition-transform duration-700">
        <img src={myPicture} alt="Abdellatif's Picture" className="w-full h-auto object-cover border-4 border-[#55E5A4] rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default Header;
