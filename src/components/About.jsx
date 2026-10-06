import React from 'react';
import './About.css';

export const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="section-wrapper about-grid">
                <div className="about-text-col">
                    <span className="about-eyebrow">ABOUT US</span>
                    <h2>Clean Room Creators &amp; Complete Solution Providers</h2>

                    <p className="about-lead">
                        MAP FILTERS INDIA PVT. LTD. is an established ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, and MSME ZED Bronze certified company, committed to providing complete turnkey clean room and HVAC (Heating, Ventilation &amp; Air Conditioning) solutions for Pharmaceutical, Chemical, Research, Healthcare, and Allied Industries.
                    </p>

                    <p className="about-body-text">
                        With over 20 years of manufacturing excellence (Est. 2003), MAP FILTERS operates a 25,000+ sq. ft. modern facility in Bhiwandi, Maharashtra with advanced CNC sheet metal fabrication, automated filter pleating lines, and DOP/PAO test aerosol chambers.
                    </p>

                    <p className="about-body-text">
                        We design, manufacture, and install customized cleanroom panels, hermetic doors, sterile equipment, Modular Operation Theatres, and certified HEPA/ULPA filters with prompt pan-India after-sales validation support.
                    </p>
                </div>

                <div className="about-visual-col">
                    <div className="about-image-card">
                        <img src="mapfil-catalogue-cover.png" alt="MAP FILTERS Cleanroom Installation" loading="lazy" />
                    </div>

                    <div className="about-iso-banner">
                        <img src="iso-certifications.png" alt="ISO 9001:2015 Certification Graphic" />
                        <div className="about-iso-text">
                            <h4>ISO 9001:2015 &amp; ZED Bronze Certified</h4>
                            <p>Full compliance with ISO 14644, EN 1822, cGMP, and pharmaceutical validation guidelines.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
