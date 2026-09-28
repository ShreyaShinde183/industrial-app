import React from 'react';
import './Footer.css';

export const Footer = ({ onOpenEnquiry }) => {
    return (
        <footer className="site-footer">

            {/* Main Footer Body */}
            <div className="footer-main-section">
                <div className="section-wrapper footer-content-grid">

                    {/* Col 1: Brand & Socials */}
                    <div className="footer-brand-pane">
                        <a href="#hero" className="footer-brand-link" aria-label="MAP FILTERS INDIA PVT. LTD.">
                            <img src="assets/mapfil-logo.png" alt="MAP FILTERS INDIA PVT. LTD." className="footer-brand-img" />
                        </a>
                        <p className="footer-brand-tagline">
                            Mapfilters is dedicated to supplying products to client specifications at reasonable prices.
                        </p>
                        <div className="footer-social-row">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="social-bubble fb" aria-label="Facebook">
                                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.326V1.326C24 .597 23.405 0 22.675 0z"/></svg>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="social-bubble ig" aria-label="Instagram">
                                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="social-bubble li" aria-label="LinkedIn">
                                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                        </div>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div className="footer-links-pane">
                        <h3 className="footer-pane-heading">Quick Links</h3>
                        <ul className="footer-nav-menu">
                            <li><a href="#hero"><span className="arrow-cyan">›</span> Home</a></li>
                            <li><a href="#about"><span className="arrow-cyan">›</span> About Us</a></li>
                            <li><a href="#products"><span className="arrow-cyan">›</span> Product</a></li>
                            <li><a href="#solutions"><span className="arrow-cyan">›</span> Services</a></li>
                            <li><a href="#industries"><span className="arrow-cyan">›</span> Industries</a></li>
                            <li><a href="#contact"><span className="arrow-cyan">›</span> Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Col 3: Addresses & Contact Numbers */}
                    <div className="footer-address-pane">
                        <div className="footer-branches-row">
                            <div className="branch-card">
                                <h4 className="branch-heading">Main Office + Factory</h4>
                                <p className="branch-text">
                                    Unit No- A1, Yuvraj Logistics &amp; Commercial Park, Near PADGHA Toll Naka, Arjunalli Village, Bhiwandi - 421302, Maharashtra (INDIA)
                                </p>
                            </div>
                            <div className="branch-card">
                                <h4 className="branch-heading">Corporate Branch</h4>
                                <p className="branch-text">
                                    Unit No.10, Roop Naval Indl. Estate, Vidya Vikashini School Road, Fatherwadi, Vasai (East) - 401208, Dist.- Palghar, Maharashtra, India.
                                </p>
                            </div>
                            <div className="branch-card">
                                <h4 className="branch-heading">Branch 2</h4>
                                <p className="branch-text">
                                    Office No 809, 8th Floor, Kamdhenu 23 West, Kopar Khairane, Mahape, TTC Industrial Area, Navi Mumbai, Thane - 400 705, Maharashtra, INDIA
                                </p>
                            </div>
                        </div>

                        <div className="footer-branches-divider"></div>

                        <div className="footer-reach-row">
                            <div className="reach-item">
                                <h4 className="branch-heading">Contact Number</h4>
                                <div className="reach-val">
                                    <span className="reach-icon">📞</span>
                                    <a href="tel:+919823252793">(+91) - 9823252793</a>
                                </div>
                            </div>
                            <div className="reach-item">
                                <h4 className="branch-heading">Email Addresses</h4>
                                <div className="reach-val">
                                    <span className="reach-icon">✉</span>
                                    <div className="emails-list">
                                        <a href="mailto:karunakar@mapfilters.com">karunakar@mapfilters.com</a>
                                        <span className="bar">|</span>
                                        <a href="mailto:sales@mapfil.com">sales@mapfil.com</a>
                                        <span className="bar">|</span>
                                        <a href="mailto:mapfilters@gmail.com">mapfilters@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Copyright Bar */}
            <div className="footer-bottom-strip">
                <div className="section-wrapper footer-bottom-inner">
                    <p className="footer-copyright-note">
                        © 2026 All Rights Reserved Map Filters India Pvt. Ltd. Powered By : PragyaSuite Technologies
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
