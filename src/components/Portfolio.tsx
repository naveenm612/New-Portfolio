import React from 'react';
import { Sidebar } from './sidebar/Sidebar';
import Hero from './herobanner/Hero';
import AboutPage from './about/About';
import ResumePage from './resume/Resume';
import Skill from './skills/Skills';
import Contact from './contact/Contact';
import Button from './button/Button';
import { Footer } from './footer/Footer';
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
