import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutMe from './components/AbouMe';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import GetInTouch from './components/GetInTouch';
import { PortfolioProvider } from './contexts/PortfolioContext';
import { CertificationsProvider } from './contexts/CertificationsContext';
import './index.css';
import 'flowbite';
import Expertise from './components/Expertise';

function App() {
  return (
    <PortfolioProvider>
      <CertificationsProvider>
        <Navbar />
        <div className="pt-20">
          <Header />
          <AboutMe />
          <Expertise/>
          <Projects />
          <Certifications />
          <GetInTouch />
        </div>
      </CertificationsProvider>
    </PortfolioProvider>
  );
}

export default App;
