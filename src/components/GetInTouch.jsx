import React from 'react';
import myPicture from '../images/myPicture.png'; // Replace with your actual image path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const GetInTouch = () => {
  return (
    <section className="flex flex-col md:flex-row items-center p-8 bg-gray-900 text-white space-y-8 md:space-y-0 md:space-x-8 relative">
      
      {/* Image Section */}
      <div className="md:w-1/3 w-full flex justify-center md:justify-start">
        <img 
          src={myPicture} 
          alt="Abdellatif IBNESSAYEH" 
          className="w-48 h-48 object-cover border-t-4 border-l-4 border-[#55E5A4] rounded-tl-full"
        />
      </div>

      {/* Contact Information */}
      <div className="md:w-2/3 w-full space-y-4">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-md md:text-lg">
          I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
        </p>
        
        {/* Contact Details */}
        <div className="space-y-3">
          <a href="mailto:abdellatifibnessayeh@gmail.com" className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faEnvelope} className="text-[#55E5A4]" />
            <span>abdellatifibnessayeh@gmail.com</span>
          </a>
          <div className="flex items-center space-x-3">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#55E5A4]" />
            <span>Marrakech, Morocco</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4">
          <a href="https://linkedin.com/in/IBNESSAYEH" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-3xl text-[#55E5A4] hover:text-white transition-all" />
          </a>
          <a href="https://github.com/IBNESSAYEH" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-3xl text-[#55E5A4] hover:text-white transition-all" />
          </a>
        </div>

        {/* Contact Button */}
        <button className="px-6 py-2 mt-4 bg-[#55E5A4] text-gray-900 font-semibold rounded-md hover:bg-opacity-90 transition-all">
         <a href="https://linkedin.com/in/IBNESSAYEH">Contact Me</a>
        </button>
      </div>
      
    </section>
  );
}

export default GetInTouch;
