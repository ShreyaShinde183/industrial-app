import React, { useState } from 'react';
import './TurnkeySolutions.css';

const DELIVERY_STEPS = [
    {
        id: 'consultation',
        title: 'Consultation & Design',
        desc: 'Tailored cleanroom & HVAC conceptual design based on your plant requirements and cleanliness class.',
        details: 'Initial site survey, heat-load calculations, 3D layout engineering, airflow CFD visualization, and regulatory compliance mapping (ISO 14644 / cGMP).',
        color: 'mint',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1"></rect>
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <path d="m9 14 2 2 4-4"></path>
            </svg>
        )
    },
    {
        id: 'manufacturing',
        title: 'In-House Manufacturing',
        desc: 'Direct fabrication of certified cleanroom panels, doors, terminal housings, and custom equipment.',
        details: 'State-of-the-art CNC sheet metal fabrication, powder coating, high-pressure laminate (HPL) bonding, and cleanroom grade airtight assembly.',
        color: 'rose',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                <circle cx="12" cy="12" r="3"></circle>
            </svg>
        )
    },
    {
        id: 'hvac-ot',
        title: 'HVAC & Modular OT',
        desc: 'Turnkey installation of custom AHUs, ducting networks, and specialized surgical hospital suites.',
        details: 'Precision temperature/RH balancing, HEPA terminal integration, surgical control consoles, surgical pendants, and laminar airflow ceiling units.',
        color: 'blue',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M2 18h20"></path>
                <path d="M4 18v-4a8 8 0 0 1 16 0v4"></path>
                <path d="M10 10V6a2 2 0 0 1 4 0v4"></path>
            </svg>
        )
    },
    {
        id: 'validation-amc',
        title: 'Validation & AMC',
        desc: 'Ensure compliance with ISO/cGMP standards and provide ongoing comprehensive AMC support.',
        details: 'DOP / PAO filter integrity scanning, airborne particle count verification, recovery testing, and rapid filter replacement support across India.',
        color: 'amber',
        icon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
            </svg>
        )
    }
];

export const TurnkeySolutions = () => {
    const [expandedStep, setExpandedStep] = useState(null);

    const toggleStep = (id) => {
        setExpandedStep((prev) => (prev === id ? null : id));
    };

    return (
        <section className="solutions-flow-section" id="solutions">
            <div className="section-wrapper">
                <div className="section-heading" style={{ textAlign: 'center' }}>
                    <span className="section-eyebrow">TURNKEY CAPABILITY</span>
                    <h2>Complete Cleanroom &amp; <span className="heading-green">HVAC Delivery</span></h2>
                    <p>From consultation and design to validation and ongoing AMC support across all sectors.</p>
                </div>

                <div className="solutions-flow-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
                    {DELIVERY_STEPS.map((step) => {
                        const isExpanded = expandedStep === step.id;
                        return (
                            <div
                                key={step.id}
                                className={`solution-step-card ${isExpanded ? 'is-desc-expanded' : ''}`}
                            >
                                <div className={`turnkey-icon-bubble ${step.color}`}>
                                    {step.icon}
                                </div>
                                <h3>{step.title}</h3>
                                <p className="turnkey-card-desc">{step.desc}</p>

                                <div
                                    className={`card-desc-full ${isExpanded ? 'is-expanded' : ''}`}
                                    style={{
                                        maxHeight: isExpanded ? '200px' : '0px',
                                        opacity: isExpanded ? 1 : 0,
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease',
                                        marginTop: isExpanded ? '0.5rem' : '0'
                                    }}
                                >
                                    <p className="card-desc-detail">{step.details}</p>
                                </div>

                                <button
                                    type="button"
                                    className="btn-card-desc btn-desc-toggle"
                                    style={{ marginTop: 'auto', paddingTop: '0.6rem' }}
                                    aria-expanded={isExpanded}
                                    onClick={() => toggleStep(step.id)}
                                >
                                    <span className="btn-toggle-text">
                                        {isExpanded ? 'Hide Description' : 'View Description'}
                                    </span>
                                    <span className="btn-toggle-arrow">{isExpanded ? '▴' : '→'}</span>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TurnkeySolutions;
