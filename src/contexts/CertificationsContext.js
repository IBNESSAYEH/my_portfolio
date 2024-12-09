import React, { createContext, useState } from 'react';
import reactJSImg from '../assets/images/reactjs.jpg';
import phpImg from '../assets/images/php.png';
import jsImg from '../assets/images/js.png';
import laravelImg from '../assets/images/laravel.png';
import sqlImg from '../assets/images/sql.png';
import gitImg from '../assets/images/git.png';
import javaEEImg from '../assets/images/javaEE.png';

export const CertificationsContext = createContext();

export const CertificationsProvider = ({ children }) => {
  const [certificates] = useState([
    {
      title: 'ReactJS & Redux 2023',
      img: reactJSImg,
      description: 'Learned all necessary skills to develop web applications with ReactJS and Redux.Learned all necessary skills to develop web applications with ReactJS and Redux.'
    },
    {
      title: 'PHP 7.4+ OOP',
      img: phpImg,
      description: 'Developed web applications with PHP 7.4+ and object-oriented programming.'
    },
    {
      title: 'JavaScript Modern 2023',
      img: jsImg,
      description: 'Learned JavaScript Modern for beginner and intermediate level, with 30 hours of practical learning.'
    },
    {
      title: 'Laravel 7+ Framework',
      img: laravelImg,
      description: 'Developed secure API applications with Laravel 7+ framework for beginners and advanced level.'
    },
    {
      title: 'SQL (Intermediate)',
      img: sqlImg,
      description: 'Passed the HackerRank SQL Intermediate skill certification test.'
    },
    {
      title: 'Git & GitHub Skills',
      img: gitImg,
      description: 'Learned Git & GitHub version control system for handling projects with speed and efficiency.'
    },
    {
      title: 'Java EE Web Applications',
      img: javaEEImg,
      description: 'Completed the Java EE Web Applications course on Udemy.'
    }
  ]);

  return (
    <CertificationsContext.Provider value={{ 
      certificates 
      }}>
      {children}
    </CertificationsContext.Provider>
  );
};
