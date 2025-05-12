// Components/Footer.tsx
import React from "react";
import "./Style.css";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-left">&copy; 2025 My Portfolio. All Rights Reserved.</p>
        <p className="footer-right">Designed And Developed by <span className="color-text">Naveen M</span></p>
      </div>
    </footer>
  );
};

export default Footer;
