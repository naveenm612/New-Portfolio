import './ResumePage.css';

const ResumePage = () => {
  return (
    <div className="page-container">
      <div>
        <header className="resume-header">
          <div className='title-container'>
          <h2 className="title">Resume</h2>
          </div>
        </header>

        <div className="content-grid">
          {/* Work Experience Section */}
          <section className="resume-section">
            <h2 className="section-title">Work Experience</h2>
            <div className="section-content">
              <div className="experience-item">
                <h3>TechnomaX Systems</h3>
                <p className="role">Front-End Developer & MERN Stack Developer</p>
                <p className="duration">Jan 2024 - Present</p>
                <ul>
                  <li>
                    Designed and deployed responsive websites and dynamic web applications, 
                    ensuring cross-browser compatibility and seamless user experiences.
                  </li>
                  <li>
                    Built scalable web applications using the MERN stack, 
                    integrating robust RESTful APIs for efficient data flow between frontend and backend.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Divider */}
          <div className="divider"></div>

          {/* Education Section */}
          <section className="resume-section">
            <h2 className="section-title">Education</h2>
            <div className="section-content">
              <div className="education-item">
                <h3>Bachelor of Engineering (B.E.) - Automobile Engineering</h3>
                <p>KSR College of Engineering, Tiruchengode</p>
                <p className="graduation-year">2023</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
