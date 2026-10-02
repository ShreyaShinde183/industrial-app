import React from 'react';
import './FloatingWidgets.css';

export const FloatingWidgets = () => {
    return (
        <>
            {/* Floating Brochure Button (Left Bottom) */}
            <a
                href="assets/pdf/Mapfil_Catalogue_Full.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="floating-brochure-btn"
                aria-label="Download Catalogue & Brochure"
                title="Download Brochure"
            >
                <img src="btn-brochure.png" alt="Brochure" className="floating-brochure-img" />
            </a>
        </>
    );
};

export default FloatingWidgets;

