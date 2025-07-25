import React, { useState } from 'react';
import {
  IoChevronDown,
  IoEyeOutline
} from 'react-icons/io5';

import thermoImg from '../assets/images/temperature sensor.webp';
import busImg from '../assets/images/bus.png';
import faceImg from '../assets/images/face.jpg';
import djImg from '../assets/images/dj.png';
import bookImg from '../assets/images/book.jpeg';
import portImg from '../assets/images/port.png';
import appImg from '../assets/images/app.webp';

const projectData = [
  {
    title: "Smart Thermometer",
    category: "Applications",
    link: "https://github.com/Jaswita/smart-thermometer",
    img: thermoImg
  },
  {
    title: "Bus Ticket Booking",
    category: "Applications",
    link: "https://github.com/Jaswita/bus-ticket-booking",
    img: busImg
  },
  {
    title: "Face Expression Detection",
    category: "Web development",
    link: "https://github.com/Jaswita/face-expression-detection",
    img: faceImg
  },
  {
    title: "DJ Platform",
    category: "Web design",
    link: "https://github.com/Jaswita/dj-platform",
    img: djImg
  },
  {
    title: "Contact Book",
    category: "Web development",
    link: "https://github.com/Jaswita/contact_book",
    img: bookImg
  },
  {
    title: "Portfolio Website",
    category: "Web design",
    link: "https://github.com/Jaswita/my_portfolio",
    img: portImg
  },

  {
    title: "Social timeline app",
    category: "Web development",
    link: "https://github.com/Jaswita/ZYNC-socialtimeline-project",
    img: appImg
  }
];

const categories = ["All", "Web design", "Applications", "Web development"];

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
          <button className="filter-select" onClick={() => setDropdownOpen(!dropdownOpen)}>
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
          {filteredProjects.map(({ title, category, link, img }) => (
            <li className="project-item active" key={title}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IoEyeOutline />
                  </div>
                  <img src={img} alt={title} loading="lazy" />
                </figure>
                <h3 className="project-title">{title}</h3>
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
