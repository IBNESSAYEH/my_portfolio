import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between p-6 bg-gray-900 text-white shadow-lg z-50">

      <a href="#header" className="font-bold text-lg">Abdellatif IBNESSAYEH</a>

      <button 
        className="text-white md:hidden focus:outline-none" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>

      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex space-x-8 md:space-x-8 bg-gray-900 md:bg-transparent w-full md:w-auto absolute md:static top-16 md:top-0 left-0 md:left-auto md:items-center md:justify-end md:pl-0`}
      >
        <a
          href="#about"
          className="block md:inline-block px-6 py-2 md:px-0 md:py-0 hover:text-[#55E5A4] transition"
        >
          About Me
        </a>
        <a
          href="#projects"
          className="block md:inline-block px-6 py-2 md:px-0 md:py-0 hover:text-[#55E5A4] transition"
        >
          Projects
        </a>
        <a
          href="#certifications"
          className="block md:inline-block px-6 py-2 md:px-0 md:py-0 hover:text-[#55E5A4] transition"
        >
          Certifications
        </a>
        <a
          href="#contact"
          className="block md:inline-block px-6 py-2 md:px-0 md:py-0 hover:text-[#55E5A4] transition"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
