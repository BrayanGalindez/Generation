// import React from 'react';
import '../styles/components/Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo"></div>
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/brayangalindez24/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://github.com/BrayanGalindez" target="_blank" rel="noopener noreferrer">
            <FaGithub className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;