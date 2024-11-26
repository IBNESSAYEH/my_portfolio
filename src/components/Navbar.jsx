import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between p-6 bg-gray-900 text-white shadow-lg z-50">
      <div className="font-bold text-lg">Abdellatif IBNESSAYEH</div>
      <div className="flex space-x-8">
        <a href="#about" className="hover:text-[#55E5A4] transition">About Me</a>
        <a href="#projects" className="hover:text-[#55E5A4] transition">Projects</a>
        <a href="#certifications" className="hover:text-[#55E5A4] transition">Certifications</a>
        <a href="#contact" className="hover:text-[#55E5A4] transition">Get in Touch</a>
      </div>
    </nav>
  );
};

export default Navbar;
