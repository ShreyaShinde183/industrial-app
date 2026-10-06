import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="sub-site-topbar">
        <div className="topbar-inner-wrap">
          <div className="topbar-left-info">
            <a href="tel:+919823252793" className="topbar-quick-link">
              <span>📞</span>
              <span>Call: (+91) - 9823252793</span>
            </a>
            <span className="topbar-dot">•</span>
            <a href="mailto:karunakar@mapfilters.com" className="topbar-quick-link">
              <span>✉</span>
              <span>karunakar@mapfilters.com</span>
            </a>
          </div>
          <div className="topbar-right-info">
            <span className="topbar-cert-pill">
              🛡️ ISO 9001:2015 | ISO 14001 | ISO 45001 | ZED Bronze
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="site-navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <img src="/mapfil-logo.png" alt="MAP FILTERS Logo" className="logo-img" onError={(e) => { e.target.style.display = 'none'; }} />
            <div className="logo-text">
              <span className="brand-name">MAP FILTERS</span>
              <span className="brand-sub">Clean Room Creators</span>
            </div>
          </Link>

          <button
            className="mobile-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span className={`bar ${isOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isOpen ? 'open' : ''}`}></span>
            <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          </button>

          <nav className={`navbar-nav ${isOpen ? 'is-active' : ''}`}>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={closeMenu}
            >
              About Us
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={closeMenu}
            >
              Products &amp; Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              onClick={closeMenu}
            >
              Contact Us
            </NavLink>

            <Link to="/contact" className="nav-cta-btn fly-quote-btn" onClick={closeMenu}>
              <span className="fly-icon">✈</span>
              <span>Get a Quote</span>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
