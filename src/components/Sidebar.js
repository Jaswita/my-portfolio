import React, { useState } from 'react';
import {
  IoMailOutline, IoPhonePortraitOutline, IoCalendarOutline,
  IoLocationOutline, IoChevronDown, IoLogoFacebook,
  IoLogoTwitter, IoLogoInstagram
} from 'react-icons/io5';
import meImg from '../assets/images/me.jpg';

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <aside className={`sidebar ${isActive ? 'active' : ''}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={meImg} alt="Manduva Jaswita" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Manduva Jaswita">Manduva Jaswita</h1>
          <p className="title">Web Developer & Embedded Systems Enthusiast</p>
        </div>

        <button className="info_more-btn" onClick={toggleSidebar}>
          <span>Show Contacts</span>
          <IoChevronDown />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IoMailOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:jaswitamanduva@gmail.com" className="contact-link">
                jaswitamanduva@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoPhonePortraitOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+918885393863" className="contact-link">
                +91 88853 93863
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoCalendarOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="2005-09-26">September 26, 2005</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoLocationOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Coimbatore, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <IoLogoFacebook />
            </a>
          </li>
          <li className="social-item">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <IoLogoTwitter />
            </a>
          </li>
          <li className="social-item">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <IoLogoInstagram />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
