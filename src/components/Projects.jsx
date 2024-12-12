import React, { useState } from 'react';
import CitronixImage from '../assets/images/hunters-league-6735f5eadd465974114435.png'; 
import BatiImage from '../assets/images/construction-et-de-la-renovation-de-cuisines-des-restaurant-66e2b438b8ffa572958867.webp';
import SamsarImage1 from '../assets/images/samsar1.PNG'
import SamsarImage2 from '../assets/images/samsar2.PNG'
import SamsarImage3 from '../assets/images/samsar3.PNG'
import evento1 from '../assets/images/evento1.PNG'
import evento2 from '../assets/images/evento2.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact, faJs, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import { SiSpring } from "react-icons/si";

const Projects = () => {
  const projectData = [
    {
      images: [CitronixImage],
      title: "Citronix",
      description: "The Citronix project is a REST API app for managing a lemon farm. It allows farmers to track production, harvesting, and sales.",
      technologies: ["Spring Boot", "Java"],
      link: ["https://github.com/IBNESSAYEH/Citronix"]
    },
    {
      images: [BatiImage],
      title: "BatiCuisine",
      description: "BatiCuisine is a Java app for kitchen construction and renovation professionals. It calculates project costs, considering materials and hourly labor.",
      technologies: ["Java"],
      link: ["https://github.com/IBNESSAYEH/BatiCouisine"]
    },
    {
      images: [SamsarImage3, SamsarImage1, SamsarImage2],
      title: "Samsar Online",
      description: "Samsar Online is a modern platform inspired by Airbnb, designed to connect property owners with individuals seeking short-term accommodations. It provides a seamless and user-friendly experience for both hosts and guests, streamlining the process of booking and managing rentals.",
      technologies: ["React", "Laravel"],
      link:[ "https://github.com/IBNESSAYEH/SamsarOnline", "https://github.com/IBNESSAYEH/samsarOnlineFrontend"]
    },
    {
      images: [evento2, evento1],
      title: "Evento",
      description: "Evento is an innovative platform designed to simplify event organization and ticket purchasing. Whether you're planning a corporate event, a concert, or a personal gathering, Evento provides all the tools necessary to ensure a seamless experience for organizers and attendees alike.",
      technologies: ["Laravel"],
      link: ["https://github.com/IBNESSAYEH/evento"]
    },
  ];

  return (
    <section id="projects" className="p-8 bg-gray-900 text-white space-y-8 relative">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
   
      <div className="relative h-40">
        <img
          src={project.images[currentImageIndex]}
          alt={`${project.title} screenshot`}
          className="w-full h-40 object-cover"
        />
    
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {project.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentImageIndex ? 'bg-white' : 'bg-gray-500'
              }`}
              aria-label={`View image ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Project Details */}
      <div className="p-4 space-y-3">
        <h3 className="text-2xl font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-300">{project.description}</p>
        <div className="flex space-x-3 mt-3">
          <p>Technologies: </p>
          {project.technologies.includes("React") && (
            <FontAwesomeIcon icon={faReact} className="text-[#61DBFB]" title="React.js" />
          )}
          {project.technologies.includes("Java") && (
            <FontAwesomeIcon icon={faJava} className="text-[#007396]" title="Java" />
          )}
          {project.technologies.includes("Spring Boot") && (
            <SiSpring />
          )}
           {project.technologies.includes("Laravel") && (
            <img src="https://laravel.com/img/logomark.min.svg" alt="Laravel" className="w-4 h-4" title="Laravel" /> 

          )}
        </div>
        {
          project.link.map(lin => (
            <>
            <a
            href={lin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 flex items-center"
          >
            Github Link <FontAwesomeIcon icon={faGithub} className="ml-2 text-2xl text-white" title="GitHub" />
          </a>
            </>
            
          ))
        }
       
      </div>
    </div>
  );
};

export default Projects;
