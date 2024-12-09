import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

const timelineData = [
  {
    date: "Jul 2024 - November 2024",
    title: "Laravel / React.js Developer (Freelance)",
    location: "WebCinq",
    description: `Laravel / React.js`,
    icon: faBriefcase,
  },
  {
    date: "May 2024 - Jul 2024",
    title: "Laravel / React.js Developer (Internship)",
    location: "Marrakech, Morocco",
    description: "Laravel / React.js",
    icon: faBriefcase,
  },
  {
    date: "2023 - 2025",
    title: "FULLSTACK Developer JAVA / Angular",
    location: "Youcode | Simplon | UM6P",
    description: `JAVA JEE SpringBoot
    JS React.js
    MySQL PostgresQl
    Git Github Jira`,
    icon: faGraduationCap,
  },
  {
    date: "April 2023 - May 2023",
    title: "PHP Developer (Internship)",
    location: "ROCA Morocco | Settat",
    description: `PHP / JavaScript`,
    icon: faBriefcase,
  },
  {
    date: "2021 - 2023",
    title: "Specialized Technician in Digital Development",
    location: "ISTA NTIC2 | Settat",
    description: `PHP LARAVEL
    JS React.js
    MySQL
    Git Github Jira`,
    icon: faGraduationCap,
  },
  {
    date: "2018 - 2020",
    title: "FST",
    location: "Electrical and Mechanical Engineering, FST Settat",
    description: "C++",
    icon: faGraduationCap,
  },
  {
    date: "2014 - 2017",
    title: "Technical High School",
    location: "Bac in Electrical Science and Technology | Settat",
    description: "",
    icon: faGraduationCap,
  },
];

function TimelineElement({ date, title, location, description, icon }) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "#38b066", color: "white" }} 
      contentArrowStyle={{ borderRight: "7px solid #374151" }}
      date={<span style={{ color: 'white' }}>{date}</span>}
      iconStyle={{ background: "#5000ca", color: "#55E5A4"}}
      icon={<FontAwesomeIcon icon={icon} />}
    >
      <h3 className="vertical-timeline-element-title text-white text-lg font-bold ">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle text-md font-semibold text-white">{location}</h4>
      {description && <p className="text-sm text-white whitespace-pre-line">{description}</p>}
    </VerticalTimelineElement>
  );
}

function Expertise() {
  return (
    <section id="Career" className="flex flex-col items-center p-8 bg-gray-900 text-white space-y-8 relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-[#55E5A4]"></div>
      <div className="w-full md:w-2/3 space-y-6">
        <h1 className="text-3xl font-bold text-center text-white">Career History</h1>
        <VerticalTimeline lineColor="#55E5A4">
          {timelineData.map((item, index) => (
            <TimelineElement
              key={index}
              date={item.date}
              title={item.title}
              location={item.location}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Expertise;
