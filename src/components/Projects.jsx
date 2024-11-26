import React from 'react';
import projectImage from '../images/ana.png'; // Replace with actual images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact, faJs, faBootstrap, faPhp, faGit, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFeatherAlt, faLeaf } from '@fortawesome/free-solid-svg-icons'; // Use leaf as a placeholder for Spring Boot

const Projects = () => {
 
  const projectData = [
    {
      title: "Project One",
      description: "A short description of Project One. This project demonstrates skills in React and Tailwind CSS.",
      technologies: ["React", "Tailwind CSS", "Java"],
      techIcons: ["faReact", "faFeatherAlt", "faJava"]
    },
    {
      title: "Project Two",
      description: "A description of Project Two, built with Laravel and JavaScript.",
      technologies: ["Laravel", "JavaScript"],
      techIcons: ["laravel", "faJs"]
    },
    {
        title: "Project One",
        description: "A short description of Project One. This project demonstrates skills in React and Tailwind CSS.",
        technologies: ["React", "Tailwind CSS", "Java"],
        techIcons: ["faReact", "faFeatherAlt", "faJava"]
      },
      {
        title: "Project Two",
        description: "A description of Project Two, built with Laravel and JavaScript.",
        technologies: ["Laravel", "JavaScript"],
        techIcons: ["laravel", "faJs"]
      },
      {
        title: "Project One",
        description: "A short description of Project One. This project demonstrates skills in React and Tailwind CSS.",
        technologies: ["React", "Tailwind CSS", "Java"],
        techIcons: ["faReact", "faFeatherAlt", "faJava"]
      },
      {
        title: "Project Two",
        description: "A description of Project Two, built with Laravel and JavaScript.",
        technologies: ["Laravel", "JavaScript"],
        techIcons: ["laravel", "faJs"]
      },
  ];

  return (
    <section className="p-8 bg-gray-900 text-white space-y-8 relative">
      
      {/* Top Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#55E5A4]"></div>

      {/* Section Title */}
      <h2 className="text-3xl font-bold">Projects</h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
            
            {/* Project Image */}
            <img 
              src={projectImage} 
              alt={`${project.title} screenshot`} 
              className="w-full h-40 object-cover"
            />
            
            {/* Project Content */}
            <div className="p-4 space-y-3">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
              
              {/* Technology Logos */}
              <div className="flex space-x-3 mt-3">
                {project.technologies.includes("React") && (
                  <FontAwesomeIcon icon={faReact} className="text-[#61DBFB]" title="React.js" />
                )}
                {project.technologies.includes("Tailwind CSS") && (
                  <FontAwesomeIcon icon={faFeatherAlt} className="text-blue-500" title="Tailwind CSS" />
                )}
                {project.technologies.includes("Java") && (
                  <FontAwesomeIcon icon={faJava} className="text-[#007396]" title="Java" />
                )}
                {project.technologies.includes("Laravel") && (
                  <img src="https://laravel.com/img/logomark.min.svg" alt="Laravel" className="w-6 h-6" title="Laravel" />
                )}
                {project.technologies.includes("JavaScript") && (
                  <FontAwesomeIcon icon={faJs} className="text-[#F0DB4F]" title="JavaScript" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default Projects;
