import React from 'react';
import { IoBookOutline, IoMedalOutline } from 'react-icons/io5';

const Resume = () => {
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      {/* Education Section */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoBookOutline />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">B.Tech in Computer Science and Engineering</h4>
            <span>2023 — 2027 (Ongoing)</span>
            <p className="timeline-text">
              Amrita School of Engineering, Coimbatore<br />
              CGPA: 8.31 (2nd Year)
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Higher Secondary (12th Grade)</h4>
            <span>Completed May 2023</span>
            <p className="timeline-text">
              Prathibha College, Rajahmundry (AP State Board)<br />
              Score: 981/1000
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Secondary Education (10th Grade)</h4>
            <span>Completed August 2021</span>
            <p className="timeline-text">
              The Future Kids School, AP (ICSE)<br />
              Percentage: 94.6%
            </p>
          </li>
        </ol>
      </section>

      {/* Skills Section */}
      <section className="skill">
        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skills-list content-card">
          {[
            ["Programming Languages", 90],
            ["Web Technologies", 85],
            ["Core CS Concepts", 80],
            ["Tools & Software", 75],
            ["Soft & Personal Skills", 90]
          ].map(([title, value], index) => (
            <li className="skills-item" key={index}>
              <div className="title-wrapper">
                <h5 className="h5">{title}</h5>
                <data value={value}>{value}%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: `${value}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Sports & Extracurriculars */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoMedalOutline />
          </div>
          <h3 className="h3">Sports & Extracurriculars</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Basketball Captain</h4>
            <span>School & College</span>
            <p className="timeline-text">
              Represented South Zone; winner in multiple inter-school and inter-college tournaments. Awarded Best Sportsperson.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Athletics</h4>
            <p className="timeline-text">
              Secured top ranks in 100m & 200m sprints at district-level athletic meets.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Chess & Throwball</h4>
            <p className="timeline-text">
              Participated in several school and college-level competitions in both sports.
            </p>
          </li>
        </ol>
      </section>
    </article>
  );
};

export default Resume;
