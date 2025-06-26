import React from "react";
import Man from '../../assets/Man.jpg';
import "./HeroStyle.css";

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Hi There,</h1>
        <h1 className="hero-name">
          I'm <span className="highlight">Naveen</span>
        </h1>
        <p className="hero-description">
          I am into <span className="highlight">MERN Stack Development</span>
        </p>
      </div>
      <div className="hero-animation">
        <img
          src={Man} // Replace with your image
          alt="Hero Animation"
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default Hero;
