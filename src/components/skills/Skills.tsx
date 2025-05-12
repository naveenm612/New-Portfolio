import React from "react";
import "./SkillsStyle.css";

interface Skill {
  name: string;
  percentage: number;
}

const skills: Skill[] = [
  { name: "HTML", percentage: 100 },
  { name: "CSS", percentage: 95 },
  { name: "React.js", percentage: 85 },
  { name: "TypeScript", percentage: 85 },
  { name: "JavaScript", percentage: 80 },
  { name: "Material UI", percentage: 85 },
  { name: "MongoDB", percentage: 70 },
  { name: "Git hub", percentage: 65 },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="skills-section">
      <h2 className="title">Skills</h2>
      <p className="skills-description">
      I specialize in building dynamic and responsive web applications, with a strong focus on frontend development, backend integration, and database management. 
      Below are the technologies and tools I am proficient in :
      </p>
      <div className="skills-list">
        {skills.map((skill, index) => (
            <div className="skills-grid"> 
          <div key={index} className="skill-item">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percentage">{skill.percentage}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;