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
                            <a href="#products" className="nav-item">
                                Products &amp; Services
                                <span className="chevron">▾</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="https://www.mapfilters.com/clean-room-turnkey-project.php" target="_blank" rel="noopener noreferrer">Clean Room Turnkey Solution</a>
                                </li>

                                <li className="dropdown-submenu">
                                    <a href="https://www.mapfilters.com/clean-room-doors-frames.php" target="_blank" rel="noopener noreferrer" className="submenu-toggle">
                                        <span>Clean Room Panels &amp; Doors</span>
                                        <span className="sub-arrow">›</span>
                                    </a>
                                    <ul className="submenu-flyout">
                                        <li><a href="https://www.mapfilters.com/high-pressure-laminate-wall-panels.php" target="_blank" rel="noopener noreferrer">High Pressure Laminate Wall Panels</a></li>
                                        <li><a href="https://www.mapfilters.com/types-of-wall-panels.php" target="_blank" rel="noopener noreferrer">Types of Wall Panels</a></li>
                                        <li><a href="https://www.mapfilters.com/insulation-wall-panels.php" target="_blank" rel="noopener noreferrer">Insulation of Wall Panels</a></li>
                                        <li><a href="https://www.mapfilters.com/clean-room-doors-frames.php" target="_blank" rel="noopener noreferrer">Clean Room Doors &amp; Frames</a></li>
                                        <li><a href="https://www.mapfilters.com/walk-on-ceiling-panels.php" target="_blank" rel="noopener noreferrer">Walk On Ceiling Panels</a></li>
                                        <li><a href="https://www.mapfilters.com/clean-room-view-panels.php" target="_blank" rel="noopener noreferrer">Cleanroom View Panels</a></li>
                                        <li><a href="https://www.mapfilters.com/cleanroom-flooring-solutions.php" target="_blank" rel="noopener noreferrer">Cleanroom Flooring Solutions</a></li>
                                        <li><a href="https://www.mapfilters.com/clean-room-validation.php" target="_blank" rel="noopener noreferrer">Clean Room Validation</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown-submenu">
                                    <a href="https://www.mapfilters.com/clean-room-equipment.php" target="_blank" rel="noopener noreferrer" className="submenu-toggle">
                                        <span>Clean Room Equipment</span>
                                        <span className="sub-arrow">›</span>
                                    </a>
                                    <ul className="submenu-flyout">
                                        <li><a href="https://www.mapfilters.com/air-shower.php" target="_blank" rel="noopener noreferrer">Air Shower</a></li>
                                        <li><a href="https://www.mapfilters.com/dispensing-booth.php" target="_blank" rel="noopener noreferrer">Dispensing Booth</a></li>
                                        <li><a href="https://www.mapfilters.com/sampling-booths.php" target="_blank" rel="noopener noreferrer">Sampling Booth</a></li>
                                        <li><a href="https://www.mapfilters.com/horizontal-laminar-flow-unit.php" target="_blank" rel="noopener noreferrer">Horizontal Laminar Air Flow</a></li>
                                        <li><a href="https://www.mapfilters.com/ceiling-suspended-laf.php" target="_blank" rel="noopener noreferrer">Ceiling Suspended LAF</a></li>
                                        <li><a href="https://www.mapfilters.com/stand-mounted-laf.php" target="_blank" rel="noopener noreferrer">Stand Mounted LAF</a></li>
                                        <li><a href="https://www.mapfilters.com/mobile-laminar-air-flow.php" target="_blank" rel="noopener noreferrer">Mobile Laminar Air Flow</a></li>
                                        <li><a href="https://www.mapfilters.com/garment-storage-cabinet.php" target="_blank" rel="noopener noreferrer">Garment Storage Cabinet (Dynamic)</a></li>
                                        <li><a href="https://www.mapfilters.com/garment-storage-cabinet-static.php" target="_blank" rel="noopener noreferrer">Garment Storage Cabinet (Static)</a></li>
                                        <li><a href="https://www.mapfilters.com/bio-safety-cabinets.php" target="_blank" rel="noopener noreferrer">Biosafety Cabinet</a></li>
                                        <li><a href="https://www.mapfilters.com/dynamic-pass-box.php" target="_blank" rel="noopener noreferrer">Dynamic Passbox</a></li>
                                        <li><a href="https://www.mapfilters.com/static-pass-box.php" target="_blank" rel="noopener noreferrer">Static Passbox</a></li>
                                        <li><a href="https://www.mapfilters.com/glove-box.php" target="_blank" rel="noopener noreferrer">Glove Box</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown-submenu">
                                    <a href="https://www.mapfilters.com/modular-ot-turnkey-solutions.php" target="_blank" rel="noopener noreferrer" className="submenu-toggle">
                                        <span>Modular Operation Theater</span>
                                        <span className="sub-arrow">›</span>
                                    </a>
                                    <ul className="submenu-flyout">
                                        <li><a href="https://www.mapfilters.com/modular-ot-turnkey-solutions.php" target="_blank" rel="noopener noreferrer">Modular O.T. Turnkey Solutions</a></li>
                                        <li><a href="https://www.mapfilters.com/operation-theater-laminar-flow.php" target="_blank" rel="noopener noreferrer">Operation Theater Laminar Flow</a></li>
                                        <li><a href="https://www.mapfilters.com/ot-pendant.php" target="_blank" rel="noopener noreferrer">OT Pendant</a></li>
                                        <li><a href="https://www.mapfilters.com/ot-surgeon-control-panel.php" target="_blank" rel="noopener noreferrer">OT Surgeon Control Panel</a></li>
                                        <li><a href="https://www.mapfilters.com/x-ray-viewer.php" target="_blank" rel="noopener noreferrer">X-Ray Viewer</a></li>
                                        <li><a href="https://www.mapfilters.com/scrub-sink.php" target="_blank" rel="noopener noreferrer">Scrub Sink</a></li>
                                        <li><a href="https://www.mapfilters.com/pcr-cabinet-for-lab.php" target="_blank" rel="noopener noreferrer">PCR Cabinet for Lab</a></li>
                                        <li><a href="https://www.mapfilters.com/fume-hood-cabinet-for-lab.php" target="_blank" rel="noopener noreferrer">Fume Hood Cabinet for Lab</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown-submenu">
                                    <a href="https://www.mapfilters.com/air-handling-unit.php" target="_blank" rel="noopener noreferrer" className="submenu-toggle">
                                        <span>HVAC Solutions &amp; Equipment</span>
                                        <span className="sub-arrow">›</span>
                                    </a>
                                    <ul className="submenu-flyout">
                                        <li><a href="https://www.mapfilters.com/air-handling-unit.php" target="_blank" rel="noopener noreferrer">Air Handling Unit</a></li>
                                        <li><a href="https://www.mapfilters.com/hepa-terminal-box.php" target="_blank" rel="noopener noreferrer">Hepa Terminal Box</a></li>
                                        <li><a href="https://www.mapfilters.com/hvac-ducting.php" target="_blank" rel="noopener noreferrer">HVAC Ducting</a></li>
                                        <li><a href="https://www.mapfilters.com/return-air-diffuser.php" target="_blank" rel="noopener noreferrer">Return Air Diffuser</a></li>
                                        <li><a href="https://www.mapfilters.com/volume-control-damper.php" target="_blank" rel="noopener noreferrer">Volume Control Damper</a></li>
                                        <li><a href="https://www.mapfilters.com/return-air-grill.php" target="_blank" rel="noopener noreferrer">Return Air Grill</a></li>
                                        <li><a href="https://www.mapfilters.com/return-air-riser.php" target="_blank" rel="noopener noreferrer">Return Air Riser</a></li>
                                    </ul>
                                </li>

                                <li className="dropdown-submenu">
                                    <a href="https://www.mapfilters.com/pre-filter.php" target="_blank" rel="noopener noreferrer" className="submenu-toggle">
                                        <span>Air Filters</span>
                                        <span className="sub-arrow">›</span>
                                    </a>
                                    <ul className="submenu-flyout">
                                        <li><a href="https://www.mapfilters.com/pre-filter.php" target="_blank" rel="noopener noreferrer">Pre Filter</a></li>
                                        <li><a href="https://www.mapfilters.com/fine-filter.php" target="_blank" rel="noopener noreferrer">Fine Filter</a></li>
                                        <li><a href="https://www.mapfilters.com/conventional-hepa-filter.php" target="_blank" rel="noopener noreferrer">Conventional Hepa Filter</a></li>
                                        <li><a href="https://www.mapfilters.com/super-hepa-filter.php" target="_blank" rel="noopener noreferrer">Super Hepa Filter</a></li>
                                        <li><a href="https://www.mapfilters.com/minipleat-hepa-filter-gasket-seal.php" target="_blank" rel="noopener noreferrer">Minipleat Hepa Filter (Gasket Seal)</a></li>
                                        <li><a href="https://www.mapfilters.com/minipleat-hepa-filter-gel-seal.php" target="_blank" rel="noopener noreferrer">Minipleat Hepa Filter (Gel Seal)</a></li>
                                        <li><a href="https://www.mapfilters.com/basket-filter.php" target="_blank" rel="noopener noreferrer">Basket Filter</a></li>
                                        <li><a href="https://www.mapfilters.com/dust-filter-cartridge.php" target="_blank" rel="noopener noreferrer">Dust Filter Cartridge</a></li>
                                        <li><a href="https://www.mapfilters.com/din-type-filter-cartridge.php" target="_blank" rel="noopener noreferrer">Din Type Filter Cartridge</a></li>
                                        <li><a href="https://www.mapfilters.com/pp-housing.php" target="_blank" rel="noopener noreferrer">PP Housing</a></li>
                                        <li><a href="https://www.mapfilters.com/wound-cartridge.php" target="_blank" rel="noopener noreferrer">Wound Cartridge</a></li>
                                        <li><a href="https://www.mapfilters.com/pp-pleated-cartridge.php" target="_blank" rel="noopener noreferrer">PP Pleated Cartridge</a></li>
                                        <li><a href="https://www.mapfilters.com/pleated-bag-with-metal-top-bottom.php" target="_blank" rel="noopener noreferrer">Pleated Bag With Metal Top &amp; Bottom</a></li>
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
                        <span>I'm Curious</span>
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

