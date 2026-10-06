import React from 'react';
import './TopBar.css';

export const TopBar = ({ onOpenEnquiry }) => {
    return (
        <div className="site-topbar">
            <div className="topbar-container">
                {/* Left: Direct Contact Information */}
                <div className="topbar-left">
                    <a href="tel:+919823252793" className="topbar-contact-link">
                        <span className="topbar-icon">📞</span>
                        <span className="topbar-label">Call:</span>
                        <span className="topbar-value">(+91) - 9823252793</span>
                    </a>
                    <span className="topbar-sep">•</span>
                    <a href="mailto:karunakar@mapfilters.com" className="topbar-contact-link">
                        <span className="topbar-icon">✉</span>
                        <span className="topbar-value">karunakar@mapfilters.com</span>
                    </a>
                </div>

                {/* Right: Accreditations & Brochure */}
                <div className="topbar-right">
                    <div className="topbar-cert-badge">
                        <span className="cert-shield">🛡️</span>
                        <span>ISO 9001:2015 | ISO 14001 | ISO 45001 | ZED Bronze</span>
                    </div>
                    <button
                        type="button"
                        className="topbar-brochure-btn"
                        onClick={() => onOpenEnquiry && onOpenEnquiry('TopBar Brochure', 'Catalogue & Technical Brochure')}
                    >
                        <span className="brochure-icon">📥</span>
                        <span>Product Brochure</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TopBar;

