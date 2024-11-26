import React from 'react';
import myPicture from '../images/ana.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact, faJs, faBootstrap, faPhp, faGit, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFeatherAlt, faLeaf } from '@fortawesome/free-solid-svg-icons'; // Use leaf as a placeholder for Spring Boot

const AboutMe = () => {
  return (
    <section className="flex flex-col md:flex-row items-center p-8 bg-gray-900 text-white space-y-6 md:space-y-0 md:space-x-8 relative">
      
      {/* Top Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#55E5A4]"></div>

      {/* Image section with smaller circular border */}
      <div className="relative md:w-1/3 w-full flex justify-center md:justify-start">
        <img 
          src={myPicture} 
          alt="Abdellatif IBNESSAYEH" 
          className="w-48 h-48 object-cover border-t-2 border-l-2 border-[#55E5A4] rounded-tl-full"
        />
      </div>

      {/* About Me Text section */}
      <div className="md:w-2/3 w-full space-y-4">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="text-md md:text-lg">
          I’m a dedicated Fullstack Developer skilled in Java, Jakarta EE, JavaScript, and React.js. With a passion for clean code and efficient interfaces, I aim to deliver robust, user-focused web applications. My technical skills allow me to tackle complex backend tasks while creating dynamic, engaging frontends.
        </p>

        {/* Technology Logos */}
        <div className="flex flex-wrap space-x-4 mt-4">
          <FontAwesomeIcon icon={faJava} className="text-3xl text-[#007396]" title="Java" />
          <FontAwesomeIcon icon={faFeatherAlt} className="text-3xl text-blue-500" title="Tailwind CSS" /> {/* Tailwind CSS Icon */}
          <FontAwesomeIcon icon={faReact} className="text-3xl text-[#61DBFB]" title="React.js" />
          <FontAwesomeIcon icon={faJs} className="text-3xl text-[#F0DB4F]" title="JavaScript" />
          <FontAwesomeIcon icon={faBootstrap} className="text-3xl text-[#563d7c]" title="Bootstrap" />
          <FontAwesomeIcon icon={faPhp} className="text-3xl text-[#777BB4]" title="PHP" />
          <img src="https://laravel.com/img/logomark.min.svg" alt="Laravel" className="w-8 h-8" title="Laravel" /> {/* Laravel logo */}
          <FontAwesomeIcon icon={faLeaf} className="text-3xl text-green-600" title="Spring Boot" /> {/* Placeholder for Spring Boot */}
          <FontAwesomeIcon icon={faGit} className="text-3xl text-[#F05032]" title="Git" />
          <FontAwesomeIcon icon={faGithub} className="text-3xl text-white" title="GitHub" />
        </div>
      </div>
      
    </section>
  );
}

export default AboutMe;
