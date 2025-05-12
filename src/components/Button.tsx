import React, { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import "./Style.css";

const Button: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  // Show button when scrolling down
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);  // Show button after scrolling 300px down
    } else {
      setShowButton(false);
    }
  }; 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    showButton && (
      <button 
        className="back-to-top" 
        onClick={scrollToTop} 
        aria-label="Back to top"
      >
       <ArrowUpwardIcon style={{ color: 'white', fontSize: '24px' }}/>
      </button>
    )
  );
};

export default Button;
