import React from 'react';
import '../ components/Footer.css';

const Footer = () => {
  return (
    <footer className="menu-footer">
      <div className="footer-container">
        <div className="footer-section company-info">
          <h3>AgriCulture</h3>
          <p>A108 Adam Street<br />New York, NY 535022</p>
          <p>Phone: 0772639760</p>
          <p>Email: sarminis@1905gmail.com</p>
        </div>

        <div className="footer-section useful-links">
          <h4>Useful Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Orga. Shop responsibly!</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
