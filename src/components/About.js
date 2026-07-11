import React from 'react';
/*import {
  IoGitBranchOutline,
  IoPulseOutline,
  IoSchoolOutline,
  IoHandLeftOutline,
  IoPhonePortraitOutline
} from 'react-icons/io5';*/


import designerImg from '../assets/images/designer.png';
import splitterImg from '../assets/images/splitter.png';
import codeImg from '../assets/images/code.png';
import expenseImg from '../assets/images/expense.png';
import boardImg from '../assets/images/motherboard.png';
import symImg from '../assets/images/symtom.png';
import machineImg from '../assets/images/machine-learning.png';
import applImg from '../assets/images/application.png';
import leaderImg from '../assets/images/leadership (1).png';
import adaptiveImg from '../assets/images/Adaptive.jpg';
import gestureImg from '../assets/images/gesture.jpg';
import appImg from '../assets/images/app.webp';
import { onCardMouseMove, onCardMouseLeave } from '../utils/spotlightFx';

// Highlight reel — kept in sync with the Projects page. Icon avatars are
// placeholders until real screenshots are added.
const highlightProjects = [
  {
    img: splitterImg,
    title: 'Splitter',
    desc: 'Federated social platform in Go + Next.js with decentralized (DID) auth and E2E encrypted messaging.',
  },
  {
    img: appImg,
    title: 'Zynk',
    desc: 'Full-stack MERN social app with real-time newsfeed, likes and secure authentication.',
  },
  {
    img: adaptiveImg,
    title: 'Adaptive Learning Platform',
    desc: 'Python DSA project — Trie search, DAG-based prerequisites, min-heap scheduling and a recommendation engine.',
  },
  {
    img: symImg,
    title: 'AI Symptom Analyser',
    desc: 'React + Firebase health companion with AI-backed symptom insights and a moderated support circle.',
  },
  {
    img: expenseImg,
    title: 'SmartRupee',
    desc: 'Cross-platform Flutter & Dart mobile app for everyday money management.',
  },
  {
    img: gestureImg,
    title: 'Gesture Control for Presentations',
    desc: '4-person team build — STM32 + MPU6050 gyro system for controlling slides with hand tilts.',
  }
];

const About = () => {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm Manduva Jaswita, a B.Tech Computer Science and Engineering student building
          full-stack products end to end — from Go and PostgreSQL backends to React
          frontends, with machine learning, embedded systems, and Flutter mobile apps
          along the way. I like taking a problem apart, picking the right data structure
          or architecture for it, and shipping something that actually works.
        </p>
        <p>
          My recent work spans a federated social platform built on Go and ActivityPub,
          ML models for healthcare and currency detection, a Flutter money-management app,
          and embedded gesture-control systems on STM32 — alongside a strong foundation in
          DSA, OOP, OS, DBMS, and computer networks. I'm currently looking for software
          engineering, full-stack, or backend development internships where I can keep
          building things that solve real problems.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm Doing</h3>
        <ul className="service-list">
          <li className="service-item spotlight" onMouseMove={onCardMouseMove} onMouseLeave={onCardMouseLeave}>
            <div className="service-icon-box">
              <img src={codeImg} alt="Full-stack development icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Full-Stack Development</h4>
              <p className="service-item-text">Building end-to-end apps with the MERN stack, Go, and PostgreSQL — REST APIs, auth, and responsive UIs.</p>
            </div>
          </li>
          <li className="service-item spotlight" onMouseMove={onCardMouseMove} onMouseLeave={onCardMouseLeave}>
            <div className="service-icon-box">
              <img src={machineImg} alt="machine learning icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Machine Learning</h4>
              <p className="service-item-text">Applying ML and deep learning to real-world problems — from counterfeit detection to healthcare-focused tools.</p>
            </div>
          </li>
          <li className="service-item spotlight" onMouseMove={onCardMouseMove} onMouseLeave={onCardMouseLeave}>
            <div className="service-icon-box">
              <img src={applImg} alt="mobile application img" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile Development</h4>
              <p className="service-item-text">Building cross-platform mobile apps with Flutter and Dart, from UI to state management.</p>
            </div>
          </li>
          <li className="service-item spotlight" onMouseMove={onCardMouseMove} onMouseLeave={onCardMouseLeave}>
            <div className="service-icon-box">
              <img src={boardImg} alt="Embedded systems icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Embedded Systems</h4>
              <p className="service-item-text">Designing real-time embedded projects on Arduino and STM32, including sensor systems and gesture control.</p>
            </div>
          </li>
          <li className="service-item spotlight" onMouseMove={onCardMouseMove} onMouseLeave={onCardMouseLeave}>
            <div className="service-icon-box">
              <img src={designerImg} alt="design icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">UI/UX Design</h4>
              <p className="service-item-text">Designing modern, accessible, and visually appealing interfaces using Figma and Canva.</p>
            </div>
          </li>
          <li className="service-item spotlight" onMouseMove={onCardMouseMove} onMouseLeave={onCardMouseLeave}>
            <div className="service-icon-box">
              <img src={leaderImg} alt="Leadership icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Leadership & Sports</h4>
              <p className="service-item-text">Led basketball teams; highly organized with strong team coordination skills.</p>
            </div>
          </li>
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">My Projects</h3>
        <ul className="testimonials-list has-scrollbar">
          {highlightProjects.map(({ img, icon, title, desc }) => (
            <li className="testimonials-item" key={title}>
              <div className="content-card spotlight" onMouseMove={onCardMouseMove} onMouseLeave={onCardMouseLeave}>
                <figure className={`testimonials-avatar-box ${!img ? 'testimonials-avatar-box--icon' : ''}`}>
                  {img ? (
                    <img src={img} alt={title} width="60" />
                  ) : (
                    <span className="testimonials-avatar-icon">{icon}</span>
                  )}
                </figure>
                <h4 className="h4 testimonials-item-title">{title}</h4>
                <div className="testimonials-text">
                  <p>{desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;
