// src/components/Footer.js
import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>NutriLife</h2>
          <p>Your partner in healthy living and proper nutrition.</p>
          <div className="contact">
            <span><i className="fas fa-map-marker-alt"></i> 123 Nutrition Avenue, Healthy City, HC 12345</span>
            <span><i className="fas fa-phone"></i> (123) 456-7890</span>
            <span><i className="fas fa-envelope"></i> info@nutrilife.com</span>
          </div>
          <div className="socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/dieticians">Our Dieticians</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <form>
            <input type="email" name="email" className="contact-input" placeholder="Your email address..." />
            <textarea name="message" className="contact-input" placeholder="Your message..."></textarea>
            <button type="submit" className="contact-btn">Send</button>
          </form>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 NutriLife | All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;