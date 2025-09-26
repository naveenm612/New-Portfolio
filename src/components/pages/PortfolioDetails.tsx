import React from "react";
import { useParams } from "react-router-dom";
import { portfolioItems } from "../data/portfolioData";
import "./PortfolioDetails.css";
import PageBack from "../PageBackBox/PageBack";

const PortfolioDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = portfolioItems.find((item) => item.id === Number(id));

  if (!project) return <h2>Project not found</h2>;

  const navigationData = [
    { label: "PortfolioDetails", to: "/" },
    { label: "Home", to: "/" },
    { label: "PortfolioDetails", to: "/" },
  ];
  return (
    <div className="details-page">
      <PageBack navigationData={navigationData} />

      <div className="details-container">
        <div className="details-left">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="details-right">
          <h3>{project.title}</h3>
          <ul>
            <li><strong>Category:</strong> {project.category}</li>
            <li><strong>Client:</strong> {project.client}</li>
            <li><strong>Date:</strong> {project.date}</li>
            <li>
              <strong>Project URL:</strong>{" "}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.link}
              </a>
            </li>
          </ul>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetails;
