import React, { useEffect, useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DescriptionIcon from '@mui/icons-material/Description';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import EmailIcon from '@mui/icons-material/Email';
import Man from '../../assets/Man.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./SidebarStyle.css";

export const Sidebar: React.FC = () => {

  const [activeSection, setActiveSection] = useState<string>("home");


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <aside className="sidebar">
      <div className="profile">
        <img src={Man} alt="A man"
          className="profile-pic"
        />
        <h2 className="profile-name">Naveen.M</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          <a href="https://www.linkedin.com/in/naveen-m-1b44b9292/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon sx={{ color: "white" }} />
          </a>
        </div>

      </div>
      <ul className="menu">
        <li className={`menu-item ${activeSection === "home" ? "active" : ""}`}
          onClick={() => handleScroll('home')}>
          <span className="icon"><HomeIcon /></span>
          Home
        </li>
        <li className={`menu-item ${activeSection === "about" ? "active" : ""}`}
          onClick={() => handleScroll('about')}>
          <span className="icon"><PersonIcon /></span>
          About
        </li>
        <li className={`menu-item ${activeSection === "resume" ? "active" : ""}`}
          onClick={() => handleScroll('resume')}>
          <span className="icon"><DescriptionIcon /></span>
          Resume
        </li>
        <li className={`menu-item ${activeSection === "portfolio" ? "active" : ""}`}
          onClick={() => handleScroll('portfolio')}>
          <span className="icon"><PhotoLibraryIcon /></span>
          Skills
        </li>
        {/* <li className="menu-item" onClick={() => handleScroll('skills')}>
          <span className="icon">🛠️</span>
          Skills
        </li> */}
        <li className={`menu-item ${activeSection === "contact" ? "active" : ""}`}
          onClick={() => handleScroll('contact')}>
          <span className="icon"><EmailIcon /></span>
          Contact
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
