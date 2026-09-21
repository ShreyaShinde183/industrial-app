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
                        MAP FILTERS INDIA PVT. LTD. is an established ISO 9001:2008 certified company, committed to provide complete solution of clean room &amp; HVAC (Heating, Ventilation &amp; Air conditioning) for Pharmaceutical, Chemical, Research and Allied Industries.
                    </p>

                    <p className="about-body-text">
                        Having experience of more than 20 years, MAP FILTERS has in-house capability of manufacturing clean room equipments, panels, doors, Modular Operation Theatre and air filters required for clean rooms. We also undertake turnkey projects for clean room &amp; HVAC.
                    </p>

                    <p className="about-body-text">
                        We design, manufacture and install customized products and provide prompt after sales service to our valued customers.
                    </p>
                </div>

                <div className="about-visual-col">
                    <div className="about-image-card">
                        <img src="mapfil-catalogue-cover.png" alt="MAP FILTERS Cleanroom Installation" loading="lazy" />
                    </div>

                    <div className="about-iso-banner">
                        <img src="iso-certifications.png" alt="ISO 9001:2008 Certification Graphic" />
                        <div className="about-iso-text">
                            <h4>ISO 9001:2008 Certified Quality</h4>
                            <p>Complete compliance with ISO 14644, cGMP, and pharmaceutical validation guidelines.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

