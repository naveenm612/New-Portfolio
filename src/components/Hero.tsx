import React from 'react';
import Man from '../assets/Man.jpg';
import './Style.css';

const Hero: React.FC = () => {
  return (
  <div>
    <img src={Man} alt="A man" className="hero-image" />
  </div>
  );
};

export default Hero;
