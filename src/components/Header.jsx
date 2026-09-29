import React, { useState, useEffect } from 'react';
import './Header.css';

export const Header = ({ onOpenEnquiry }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        let lastScrollY = window.pageYOffset || document.documentElement.scrollTop;
        const SCROLL_DELTA_THRESHOLD = 8;
        const TOP_THRESHOLD = 120;
        let ticking = false;

        const updateHeaderState = () => {
            const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
            const scrollDelta = currentScrollY - lastScrollY;

            if (currentScrollY <= TOP_THRESHOLD) {
                setIsHidden(false);
            } else if (Math.abs(scrollDelta) >= SCROLL_DELTA_THRESHOLD) {
                if (scrollDelta > 0 && currentScrollY > TOP_THRESHOLD) {
                    setIsHidden(true);
                } else if (scrollDelta < 0) {
                    setIsHidden(false);
                }
            }

            lastScrollY = currentScrollY;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateHeaderState);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const handleProductItemClick = (productName) => {
        closeMobileMenu();
        if (onOpenEnquiry) {
            onOpenEnquiry('Products & Services Menu', productName);
        }
    };

    return (
        <header className={`site-header ${isHidden ? 'is-hidden' : ''}`}>
            <div className="nav-container">
                <a href="#hero" className="brand-logo" aria-label="MAP FILTERS INDIA PVT. LTD. Home">
                    <img src="assets/mapfil-logo.png" alt="MAP FILTERS INDIA PVT. LTD. - Clean Room Creators" className="logo-image" />
                </a>

                <nav className={`main-nav ${isMobileMenuOpen ? 'is-open' : ''}`} id="mainNav" aria-label="Main Navigation">
                    <ul className="nav-menu">
                        <li><a href="#hero" className="nav-item active" onClick={closeMobileMenu}>Home</a></li>
                        <li><a href="#about" className="nav-item" onClick={closeMobileMenu}>About Us</a></li>
                        <li><a href="#solutions" className="nav-item" onClick={closeMobileMenu}>Solutions</a></li>
                        <li className="has-dropdown">
                            <a href="#products" className="nav-item" onClick={closeMobileMenu}>
                                Products &amp; Services
                                <span className="chevron">▾</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#products" onClick={() => handleProductItemClick('Clean Room Turnkey Solution')}>Clean Room Turnkey Solution</a>
                                </li>

                                <li className="dropdown-submenu">
                                    <a href="#products" onClick={closeMobileMenu} className="submenu-toggle">
                                        <span>Clean Room Panels &amp; Doors</span>
                                        <span className="sub-arrow">›</span>
                                    </a>
                                    <ul className="submenu-flyout">
                                        <li><a href="#products" onClick={() => handleProductItemClick('High Pressure Laminate Wall Panels')}>High Pressure Laminate Wall Panels</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Types of Wall Panels')}>Types of Wall Panels</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Insulation of Wall Panels')}>Insulation of Wall Panels</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Clean Room Doors & Frames')}>Clean Room Doors &amp; Frames</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Walk On Ceiling Panels')}>Walk On Ceiling Panels</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Cleanroom View Panels')}>Cleanroom View Panels</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Cleanroom Flooring Solutions')}>Cleanroom Flooring Solutions</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Clean Room Validation')}>Clean Room Validation</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown-submenu">
                                    <a href="#products" onClick={closeMobileMenu} className="submenu-toggle">
                                        <span>Clean Room Equipment</span>
                                        <span className="sub-arrow">›</span>
                                    </a>
                                    <ul className="submenu-flyout">
                                        <li><a href="#products" onClick={() => handleProductItemClick('Air Shower')}>Air Shower</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Dispensing Booth')}>Dispensing Booth</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Sampling Booth')}>Sampling Booth</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Horizontal Laminar Air Flow')}>Horizontal Laminar Air Flow</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Ceiling Suspended LAF')}>Ceiling Suspended LAF</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Stand Mounted LAF')}>Stand Mounted LAF</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Mobile Laminar Air Flow')}>Mobile Laminar Air Flow</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Garment Storage Cabinet (Dynamic)')}>Garment Storage Cabinet (Dynamic)</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Garment Storage Cabinet (Static)')}>Garment Storage Cabinet (Static)</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Biosafety Cabinet')}>Biosafety Cabinet</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Dynamic Passbox')}>Dynamic Passbox</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Static Passbox')}>Static Passbox</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Glove Box')}>Glove Box</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown-submenu">
                                    <a href="#products" onClick={closeMobileMenu} className="submenu-toggle">
                                        <span>Modular Operation Theater</span>
                                        <span className="sub-arrow">›</span>
                                    </a>
                                    <ul className="submenu-flyout">
                                        <li><a href="#products" onClick={() => handleProductItemClick('Modular O.T. Turnkey Solutions')}>Modular O.T. Turnkey Solutions</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Operation Theater Laminar Flow')}>Operation Theater Laminar Flow</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('OT Pendant')}>OT Pendant</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('OT Surgeon Control Panel')}>OT Surgeon Control Panel</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('X-Ray Viewer')}>X-Ray Viewer</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Scrub Sink')}>Scrub Sink</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('PCR Cabinet for Lab')}>PCR Cabinet for Lab</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Fume Hood Cabinet for Lab')}>Fume Hood Cabinet for Lab</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown-submenu">
                                    <a href="#products" onClick={closeMobileMenu} className="submenu-toggle">
                                        <span>HVAC Solutions &amp; Equipment</span>
                                        <span className="sub-arrow">›</span>
                                    </a>
                                    <ul className="submenu-flyout">
                                        <li><a href="#products" onClick={() => handleProductItemClick('Air Handling Unit')}>Air Handling Unit</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Hepa Terminal Box')}>Hepa Terminal Box</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('HVAC Ducting')}>HVAC Ducting</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Return Air Diffuser')}>Return Air Diffuser</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Volume Control Damper')}>Volume Control Damper</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Return Air Grill')}>Return Air Grill</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Return Air Riser')}>Return Air Riser</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown-submenu">
                                    <a href="#products" onClick={closeMobileMenu} className="submenu-toggle">
                                        <span>Air Filters</span>
                                        <span className="sub-arrow">›</span>
                                    </a>
                                    <ul className="submenu-flyout">
                                        <li><a href="#products" onClick={() => handleProductItemClick('Pre Filter')}>Pre Filter</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Fine Filter')}>Fine Filter</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Conventional Hepa Filter')}>Conventional Hepa Filter</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Super Hepa Filter')}>Super Hepa Filter</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Minipleat Hepa Filter (Gasket Seal)')}>Minipleat Hepa Filter (Gasket Seal)</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Minipleat Hepa Filter (Gel Seal)')}>Minipleat Hepa Filter (Gel Seal)</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Basket Filter')}>Basket Filter</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Dust Filter Cartridge')}>Dust Filter Cartridge</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Din Type Filter Cartridge')}>Din Type Filter Cartridge</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('PP Housing')}>PP Housing</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Wound Cartridge')}>Wound Cartridge</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('PP Pleated Cartridge')}>PP Pleated Cartridge</a></li>
                                        <li><a href="#products" onClick={() => handleProductItemClick('Pleated Bag With Metal Top & Bottom')}>Pleated Bag With Metal Top &amp; Bottom</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#industries" className="nav-item" onClick={closeMobileMenu}>Industries</a></li>
                        <li><a href="#why-mapfil" className="nav-item" onClick={closeMobileMenu}>Why Mapfil?</a></li>
                        <li><a href="#contact" className="nav-item" onClick={closeMobileMenu}>Contact Us</a></li>
                    </ul>
                </nav>

                <div className="nav-actions">
                    <button
                        className="quote-nav-btn"
                        onClick={() => onOpenEnquiry && onOpenEnquiry('Navbar Action')}
                    >
                        <span>Get a Quote</span>
                        <span className="search-icon">🔍</span>
                    </button>

                    <button
                        className={`mobile-toggle ${isMobileMenuOpen ? 'is-active' : ''}`}
                        id="mobileToggle"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle Mobile Navigation"
                    >
                        <span className="hamburger-bar"></span>
                        <span className="hamburger-bar"></span>
                        <span className="hamburger-bar"></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

