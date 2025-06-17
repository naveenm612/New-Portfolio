import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './AboutStyle.css';
import Man from '../../assets/Man.jpg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const AboutPage: React.FC = () => {
  return (
    <section className="about-section">
      <Container>
        <div className='title-container'>
        <h2 className="title">About</h2>
        </div>
        <Typography className="about-description">
        I am a passionate MERN stack developer, specializing in building modern, dynamic, and scalable web applications. 
        I thrive in creating robust backend services using Node.js, managing data with MongoDB, and delivering seamless frontend experiences with React.js. 
        My goal is to build solutions that are not only functional but also user-friendly and visually appealing. 
        I am always eager to learn and improve my skills with the latest technologies and best practices.
        </Typography>
        <div className="about-content">
          {/* Image Section */}
          <div className="about-image">
            <img src={Man} alt="Profile" />
          </div>
          {/* Details Section */}
          <div className="about-details">
            <Typography className="about-heading" variant="h5">
              Front-End Developer & MERN stack developer
            </Typography>
            <Typography className="about-subtext">
            I develop full-stack web applications, working with MongoDB for data management, Express.js for server-side logic, React.js for responsive UIs, and Node.js for backend development. 
            I focus on clean, efficient code, enjoy problem-solving, and value collaboration in every project.
            </Typography>
            <div className="about-info">
              <ul className="info-list">
                <li className="info-item">
                  <strong className="strong">
                    <ArrowForwardIosIcon style={{ fontSize: '12px', marginRight: '5px' }} />
                    Birthday:
                  </strong>{' '}
                  12 November 2001
                </li>
                <li className="info-item">
                  <strong className="strong">
                    <ArrowForwardIosIcon style={{ fontSize: '12px', marginRight: '5px' }} />
                    Website:
                  </strong>{' '}
                  forms-gamma-smoky.vercel.app
                </li>
                <li className="info-item">
                  <strong className="strong">
                    <ArrowForwardIosIcon style={{ fontSize: '12px', marginRight: '5px' }} />
                    Phone:
                  </strong>{' '}
                  +91 9025151850
                </li>
                <li className="info-item">
                  <strong className="strong">
                    <ArrowForwardIosIcon style={{ fontSize: '12px', marginRight: '5px' }} />
                    City:
                  </strong>{' '}
                  Salem, TamilNadu India
                </li>
              </ul>
              <ul className="info-list">
                <li className="info-item">
                  <strong className="strong">
                    <ArrowForwardIosIcon style={{ fontSize: '12px', marginRight: '5px' }} />
                    Age:
                  </strong>{' '}
                  25
                </li>
                <li className="info-item">
                  <strong className="strong">
                    <ArrowForwardIosIcon style={{ fontSize: '12px', marginRight: '5px' }} />
                    Degree:
                  </strong>{' '}
                  B.E, AutoMobile Engineering
                </li>
                <li className="info-item">
                  <strong className="strong">
                    <ArrowForwardIosIcon style={{ fontSize: '12px', marginRight: '5px' }} />
                    Email:
                  </strong>{' '}
                  naveenpavi612@gmail.com
                </li>
                <li className="info-item">
                  <strong className="strong">
                    <ArrowForwardIosIcon style={{ fontSize: '12px', marginRight: '5px' }} />
                    Freelance:
                  </strong>{' '}
                  Available
                </li>
              </ul>
            </div>
            <Typography className="about-paragraph">
            I believe in the power of learning and growing through experience. 
            I have worked on several projects, building everything from REST APIs to complex front-end applications. 
            I strive to stay updated with the latest trends in web development and always look for opportunities to push the boundaries of what’s possible with JavaScript and the MERN stack.
            </Typography>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutPage;
