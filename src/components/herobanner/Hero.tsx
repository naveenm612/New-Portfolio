import React from 'react';
import Man from '../../assets/Man.jpg';
import './HeroStyle.css';

const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <img src={Man} alt="A man" className="hero-image" />
      <div className="hero-name">Naveen</div>
      <div className="hero-work">
  <div className="typing-demo">I'm Developer</div>
</div>

    </div>
  );
};

export default Hero;
