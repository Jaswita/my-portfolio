import React from 'react';
import { IoMailOutline, IoLogoGithub, IoLogoLinkedin, IoCloudDownloadOutline } from 'react-icons/io5';

const Contact = () => {
  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Let's Connect</h2>
      </header>

      <section className="contact-intro" style={{ color: "white" }}>
        <p className="contact-message">
          Have a project idea, collaboration offer, or just want to connect? I'm just a message away!
        </p>
        <p className="contact-quote">
          <em>"Connecting people is the start of great ideas."</em>
        </p>
      </section>

      <section className="contact-cards">
        <div className="contact-card">
          <IoMailOutline className="contact-icon" />
          <div className="contact-info">
            <h4>Email</h4>
            <a href="mailto:jaswitamanduva@gmail.com">jaswitamanduva@gmail.com</a>
          </div>
        </div>

        <div className="contact-card">
          <IoLogoGithub className="contact-icon" />
          <div className="contact-info">
            <h4>GitHub</h4>
            <a href="https://github.com/jaswita" target="_blank" rel="noopener noreferrer">github.com/jaswita</a>
          </div>
        </div>

        <div className="contact-card">
          <IoLogoLinkedin className="contact-icon" />
          <div className="contact-info">
            <h4>LinkedIn</h4>
            <a href="https://linkedin.com/in/manduva-jaswita" target="_blank" rel="noopener noreferrer">linkedin.com/in/jaswita</a>
          </div>
        </div>
      </section>

      <section className="download-resume">
        <a href="/assets/resume/Resume.pdf" className="btn" download>
          <IoCloudDownloadOutline />
          <span>Download My Resume</span>
        </a>
      </section>
    </article>
  );
};

export default Contact;
