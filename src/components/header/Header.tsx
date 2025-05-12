import React from "react";
import { FaHome, FaLinkedin, FaGithub, FaIdBadge } from "react-icons/fa";
import "./Style.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Sidebar */}
      <div className="header-sidebar">
        <FaHome className="icon-home" />
      </div>

      {/* Navigation */}
      <nav className="header-nav">
        {/* Links */}
        <div className="nav-links">
          <a href="#resume" className="link resume-link">
            Resume
          </a>
          <a href="#portfolio" className="link portfolio-link">
            Portfolio
          </a>
        </div>

        {/* Icons and "Hire Me" button */}
        <div className="nav-icons">
          <FaLinkedin className="icon" />
          <FaGithub className="icon" />
          <button className="hire-me-button">
            <FaIdBadge className="icon-hire" />
            Hire Me
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
