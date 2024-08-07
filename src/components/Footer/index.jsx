// Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Adjust as per your routing setup
import './index.css'; // Import your footer styles

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Discover job opportunities and career resources with JobFinder, your ultimate job search companion.</p>
          <p>26/420-23, Vasanthapeta, Proddatur, Kadapa Dist.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/jobs">Jobs</Link></li>
            <li><Link to="/">Instagram</Link></li>
            <li><Link to="/">LinkedIn</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>Email: siddumothukuru@gmail.com</p>
          <p>Phone: +91-9876543210</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} JobFinder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
