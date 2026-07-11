import React, { useState } from 'react';
import {
  IoChevronDown,
  IoEyeOutline,
  IoGitBranchOutline,
  IoSchoolOutline,
  IoCashOutline,
  IoPulseOutline,
  IoMedkitOutline,
  IoHandLeftOutline,
  IoPhonePortraitOutline
} from 'react-icons/io5';
import { onCardMouseMove, onCardMouseLeave } from '../utils/spotlightFx';

import splitterImg from '../assets/images/splitter.png';
import appImg from '../assets/images/app.webp';
import currencyImg from '../assets/images/currency.jpg';
import presImg from '../assets/images/prescription.jpg';
import adaptiveImg from '../assets/images/Adaptive.jpg';
import gestureImg from '../assets/images/gesture.jpg';
import symImg from '../assets/images/symtom.png';
import expenseImg from '../assets/images/expense.png';
import bookImg from '../assets/images/book.jpeg';
import thermoImg from '../assets/images/temperature sensor.webp';
import busImg from '../assets/images/bus.png';
import faceImg from '../assets/images/face.jpg';
import djImg from '../assets/images/dj.png';
import portImg from '../assets/images/port.png';

// Projects, ordered by current market relevance for SWE / full-stack internships:
// Full Stack > Machine Learning > Embedded Systems > Mobile > Applications > Web Design.
// Icon tiles remain as a safety fallback for any project whose image path
// ever breaks — every entry below now has a real screenshot.
const projectData = [
  // ---- Full Stack ----
  {
    title: "Splitter — Federated Social Platform",
    category: "Full Stack",
    tech: ["Go", "Echo", "PostgreSQL", "Next.js", "ActivityPub"],
    description: "Cross-instance federated social network with JWT + decentralized (Ed25519 DID) auth, E2E encrypted messaging and an AI bot integration.",
    link: "https://github.com/Jaswita/splitter",
    img: splitterImg,
    icon: <IoGitBranchOutline />,
    featured: true
  },
  {
    title: "Zynk — Social Media Web App",
    category: "Full Stack",
    tech: ["React.js", "Node.js", "Express", "MongoDB"],
    description: "Full-stack MERN social platform with posts, likes, secure auth and a real-time interactive newsfeed.",
    link: "https://github.com/Jaswita/Zynk",
    img: appImg,
    featured: true
  },

  // ---- Machine Learning ----
  {
    title: "Adaptive Learning Platform",
    category: "Machine Learning",
    tech: ["Python", "Trie", "Graph", "Priority Queue", "HashMap"],
    description: "Test-driven adaptive learning system using classical DSA — Trie search, DAG-based prerequisites, min-heap scheduling, and a deterministic recommendation engine.",
    link: "https://github.com/Jaswita/adaptive-learning-platform",
    img: adaptiveImg,
    icon: <IoSchoolOutline />,
    featured: true
  },
  {
    title: "AI Symptom Analyser for Women",
    category: "Machine Learning",
    tech: ["React", "Firebase", "Gemini AI", "Tailwind CSS"],
    description: "Privacy-first women's health companion — AI-backed symptom insights, a moderated support circle, and a wellness journal, built with React and Firebase.",
    link: "https://github.com/Jaswita/AI_SymptomAnalyserForWomen",
    img: symImg,
    icon: <IoPulseOutline />,
    featured: true
  },
  {
    title: "Prescription Checker",
    category: "Machine Learning",
    tech: ["Next.js", "Node.js", "MongoDB", "Security"],
    description: "Enterprise-grade prescription verification and controlled-substance tracking system with QR verification, AES/RSA encryption, 2FA, and full audit logging.",
    link: "https://github.com/Jaswita/prescription-checker",
    img: presImg,
    icon: <IoMedkitOutline />,
    featured: true
  },
  {
    title: "Fake Currency Detection",
    category: "Machine Learning",
    tech: ["Python", "TensorFlow/Keras", "CNN", "DenseNet121"],
    description: "Deep-learning currency classifier comparing 5 CNN architectures on Indian currency notes — DenseNet121 (transfer learning) achieved the best accuracy.",
    link: "https://github.com/Jaswita/Fake_Currency_Detection",
    img: currencyImg,
    icon: <IoCashOutline />,
    featured: true
  },
  {
    title: "Face Expression Detection",
    category: "Machine Learning",
    tech: ["Python", "OpenCV"],
    description: "Detects and classifies facial expressions in real time from webcam input using OpenCV computer vision techniques.",
    link: "https://github.com/Jaswita/face-expression-detection",
    img: faceImg
  },

  // ---- Embedded Systems ----
  {
    title: "Gesture Control for Presentations",
    category: "Embedded Systems",
    tech: ["STM32", "Embedded C", "MPU6050", "HC-05 Bluetooth"],
    description: "4-person team project: tilt-based slide control using an MPU6050 gyro/accelerometer and HC-05 Bluetooth, driven by a Python command layer.",
    link: "https://github.com/Jaswita/Gesture-Control-for-Presentations-using-STM32",
    img: gestureImg,
    icon: <IoHandLeftOutline />,
    featured: true
  },
  {
    title: "Smart Thermometer",
    category: "Embedded Systems",
    tech: ["Arduino", "Embedded Systems"],
    description: "Arduino-based smart thermometer for real-time temperature sensing and monitoring.",
    link: "https://github.com/Jaswita/smart-thermometer",
    img: thermoImg
  },

  // ---- Mobile ----
  {
    title: "SmartRupee",
    category: "Mobile",
    tech: ["Flutter", "Dart"],
    description: "Cross-platform mobile app for everyday money management, built with Flutter and Dart.",
    link: "https://github.com/Jaswita/SmartRupee",
    img: expenseImg,
    icon: <IoPhonePortraitOutline />,
    featured: true
  },

  // ---- Applications ----
  {
    title: "Bus Ticket Booking",
    category: "Applications",
    tech: ["Java"],
    description: "Java desktop application for booking, managing, and cancelling bus tickets.",
    link: "https://github.com/Jaswita/bus-ticket-booking",
    img: busImg
  },
  {
    title: "Contact Book",
    category: "Applications",
    tech: ["Java"],
    description: "Java CRUD application for managing personal contacts — add, update, search, and delete.",
    link: "https://github.com/Jaswita/contact_book",
    img: bookImg
  },

  // ---- Web Design ----
  {
    title: "DJ Platform",
    category: "Web Design",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "Interactive web-based DJ mixing platform built with vanilla HTML, CSS, and JavaScript.",
    link: "https://github.com/Jaswita/dj-platform",
    img: djImg
  },
  {
    title: "Portfolio Website",
    category: "Web Design",
    tech: ["React", "CSS"],
    description: "An earlier personal developer portfolio built with React, showcasing projects and skills.",
    link: "https://github.com/Jaswita/my-portfolio",
    img: portImg
  }
];

const categories = ["All", "Full Stack", "Machine Learning", "Mobile", "Embedded Systems", "Applications", "Web Design"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter(p => p.category === selectedCategory);

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {categories.map(category => (
            <li className="filter-item" key={category}>
              <button
                className={selectedCategory === category ? "active" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button
            className={`filter-select ${dropdownOpen ? 'active' : ''}`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="select-value">{selectedCategory}</div>
            <div className="select-icon">
              <IoChevronDown />
            </div>
          </button>

          {dropdownOpen && (
            <ul className="select-list">
              {categories.map(item => (
                <li className="select-item" key={item}>
                  <button
                    onClick={() => {
                      setSelectedCategory(item);
                      setDropdownOpen(false);
                    }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <ul className="project-list">
          {filteredProjects.map(({ title, category, link, img, icon, tech, description, featured }, index) => (
            <li
              className="project-item active"
              key={title}
              style={{ '--stagger': index }}
            >
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="spotlight"
                onMouseMove={onCardMouseMove}
                onMouseLeave={onCardMouseLeave}
              >
                {featured && <span className="project-featured-badge">Featured</span>}
                <figure className={`project-img ${!img ? 'project-img--tile' : ''}`}>
                  <div className="project-item-icon-box">
                    <IoEyeOutline />
                  </div>
                  {img ? (
                    <img src={img} alt={title} loading="lazy" />
                  ) : (
                    <span className="project-tile-icon">{icon}</span>
                  )}
                </figure>
                <h3 className="project-title">{title}</h3>
                {description && <p className="project-desc">{description}</p>}
                {tech && (
                  <ul className="project-tech-list">
                    {tech.map(t => (
                      <li className="project-tech-chip" key={t}>{t}</li>
                    ))}
                  </ul>
                )}
                <p className="project-category">{category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Portfolio;