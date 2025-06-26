import React, { useState } from "react";
import Notes from "../../assets/Notes2.jpg"; 
import "./Portfolio.css";

interface PortfolioItem {
  id: number;
  category: string;
  image: string;
  link: string;
}

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const portfolioItems: PortfolioItem[] = [
    { id: 1, category: "Website", image: Notes, link: "https://notes-app-lime-two.vercel.app/",},
  ];

  const filteredItems =
    activeCategory === "ALL"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div className="portfolio-section">
      <div className="container">
        <div className='title-container'>
        <h2 className="title">Portfolio</h2>
        </div>

        <div className="categories">
          {["ALL", "Website"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`category-btn ${
                activeCategory === category ? "active" : ""
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="portfolio-item">
             <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.image}
                alt={item.category}
                className="portfolio-image"
              />
             </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
