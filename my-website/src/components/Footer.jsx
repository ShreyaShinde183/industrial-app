import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-container">
          <div className="footer-col brand-col">
            <h3 className="footer-brand">MAP FILTERS INDIA</h3>
            <p className="footer-desc">
              ISO 9001:2008 Certified manufacturer and turnkey engineering partner delivering pharmaceutical-grade cleanrooms, sterile equipment, and HVAC solutions across India and global markets.
            </p>
            <div className="footer-badge">
              <span>🏅 ISO 9001:2008 &amp; cGMP Compliant</span>
            </div>
          </div>

          <div className="footer-col links-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products &amp; Cleanroom Systems</Link></li>
              <li><Link to="/contact">Contact &amp; Branch Locator</Link></li>
            </ul>
          </div>

          <div className="footer-col products-col">
            <h4>Cleanroom Systems</h4>
            <ul>
              <li>Modular Cleanroom Turnkey</li>
              <li>Laminar Air Flow (LAF) Units</li>
              <li>Dynamic &amp; Static Pass Boxes</li>
              <li>Air Showers &amp; Sampling Booths</li>
              <li>Bio-Safety Cabinets &amp; HEPA Filters</li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h4>Direct Desk</h4>
            <p><strong>Factory:</strong> Bhiwandi Manufacturing Plant, Yuvraj Logistics Park, Maharashtra - 421302</p>
            <p><strong>Email:</strong> <a href="mailto:karunakar@mapfilters.com">karunakar@mapfilters.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+919823252793">+91 98232 52793</a></p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-container bottom-flex">
          <p>&copy; {new Date().getFullYear()} MAP FILTERS INDIA PVT. LTD. All rights reserved.</p>
          <p className="footer-tagline">Engineered for Contamination-Free Environments</p>
        </div>
      </div>
    </footer>
  );
}
