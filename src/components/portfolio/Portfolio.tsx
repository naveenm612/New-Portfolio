import React, { useState } from "react";
import { FaPlus, FaLink, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { portfolioItems } from "../data/portfolioData";
import "./Portfolio.css";

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "ALL"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent closing modal
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0
      );
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((prev) =>
        prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1
      );
    }
  };

  return (
    <div className="portfolio-section">
      <div className="container">
        <div className="title-container">
          <h2 className="title">Portfolio</h2>
        </div>

        <div className="categories">
          {["ALL", "Personal", "Company"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`category-btn ${activeCategory === category ? "active" : ""}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredItems.map((item, index) => (
            <div key={item.id} className="portfolio-item">
              <img
                src={item.image}
                alt={item.title}
                className="portfolio-image"
              />
              <div className="overlay">
                <FaPlus
                  className="icon-btn"
                  onClick={() => setSelectedIndex(index)} // open modal with index
                />
                <Link to={`/portfolio/${item.id}`}>
                  <FaLink className="icon-btn" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="modal" onClick={() => setSelectedIndex(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredItems[selectedIndex].image}
              alt="Portfolio Preview"
            />
            <div className="modal-nav">
              <FaArrowLeft className="nav-btn" onClick={handlePrev} />
              <FaArrowRight className="nav-btn" onClick={handleNext} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
