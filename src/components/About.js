import React from 'react';
import designerImg from '../assets/images/designer.png';
import codeImg from '../assets/images/code.png';
import boardImg from '../assets/images/motherboard.png';
import leaderImg from '../assets/images/leadership (1).png';
import thermoImg from '../assets/images/temperature sensor.webp';
import busImg from '../assets/images/bus.png';
import faceImg from '../assets/images/face.jpg';
import djImg from '../assets/images/dj.png';
import portImg from '../assets/images/port.png';

const About = () => {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm Manduva Jaswita, a 3rd year Computer Science student from Amrita Vishwa Vidyapeetham, Coimbatore.
          I enjoy building responsive web interfaces, working on embedded systems, and exploring real-world problems using AI/ML.
        </p>
        <p>
          Along with academic excellence (Grade 12 with distinction), I am an active basketball player and team leader.
          I love blending technology and creativity—whether it's coding a solution, designing a UI, or leading a team to success.
        </p>
      </section>

      <section className="service">
        <h3 className="h3 service-title">What I'm Doing</h3>
        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src={designerImg} alt="design icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">UI/UX Design</h4>
              <p className="service-item-text">Designing modern, accessible, and visually appealing UIs using Figma and Canva.</p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src={codeImg} alt="Web development icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web Development</h4>
              <p className="service-item-text">Frontend development using HTML, CSS, JS with responsive designs and interactivity.</p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src={boardImg} alt="App development icon" width="40" />
            </div>
            <div className="service-content-box">
              <h4 className="h4 service-item-title">Embedded Projects</h4>
              <p className="service-item-text">Creating real-time embedded systems using Arduino (e.g. digital thermometers).</p>
            </div>
          </li>
          <li className="service-item">
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
  {[
    {
      img: thermoImg,
      title: 'Smart Thermometer',
      desc: 'Arduino + TMP36 based digital thermometer with buzzer and unit toggle.',
    },
    {
      img: busImg,
      title: 'Bus Booking System',
      desc: 'Python multithreaded app for concurrent bus ticket bookings with sync.',
    },
    {
      img: faceImg,
      title: 'Facial Expression Detection',
      desc: 'OpenCV-based emotion detection system for user interaction analysis.',
    },
    {
      img: djImg,
      title: 'DJ Platform',
      desc: 'Music mixing web app with animations using HTML5, CSS3, JavaScript.',
    },
    {
      img: portImg,
      title: 'Portfolio Website',
      desc: 'A scroll-reveal animated portfolio site showcasing my developer profile.',
    }
  ].map(({ img, title, desc }) => (
    <li className="testimonials-item" key={title}>
      <div className="content-card">
        <figure className="testimonials-avatar-box">
          <img src={img} alt={title} width="60" />
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
