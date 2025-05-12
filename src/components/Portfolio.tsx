import React from 'react';
import { Sidebar } from './Sidebar';
import Hero from './Hero';
import AboutPage from './About';
import ResumePage from './Resume';
import Skill from './Skills';
import Contact from './Contact';
import Button from './Button';
import { Footer } from './Footer';
import './Style.css';


const PortfolioLayout: React.FC = () => {
  return (
    <div className="portfolio-layout">
      {/* Sidebar */}
      <div className="portfolio-sidebar">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="portfolio-main">
      <section id="home" className="portfolio-hero">
        <Hero />
        </section>
      <section id="about">
        <AboutPage />
        </section>
        <section id="resume">
        <ResumePage />
        </section>
        <section id="portfolio">
        <Skill />
        </section>
        <section id="contact">
        <Contact />
        </section>

        {/* Footer */}
        <div className="portfolio-footer" >
        <Footer />
        </div>
      </div>
      <Button />
    </div>
  );
};

export default PortfolioLayout;
