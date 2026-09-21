import React from 'react';
import './WhyChooseUs.css';

const REASONS = [
    {
        icon: '⏱️',
        title: '20+ Years Experience',
        desc: 'Over two decades of proven excellence in cleanroom & HVAC execution across India.'
    },
    {
        icon: '🏅',
        title: 'ISO 9001:2008 Certified',
        desc: 'Strict quality assurance adhering to global ISO 14644 and cGMP cleanroom standards.'
    },
    {
        icon: '🏭',
        title: 'In-House Manufacturing',
        desc: 'Direct production of cleanroom panels, doors, equipment, and certified HEPA filters.'
    },
    {
        icon: '🏗️',
        title: 'Turnkey Projects',
        desc: 'Single-window accountability from conceptual design to installation and validation.'
    },
    {
        icon: '📐',
        title: 'Customized Solutions',
        desc: 'Tailored engineering to match specific industry cleanliness classes and plant layouts.'
    },
    {
        icon: '👷',
        title: 'Professional Installation',
        desc: 'Flawless on-site execution by veteran cleanroom engineers ensuring zero air leakage.'
    },
    {
        icon: '❄️',
        title: 'Advanced HVAC Expertise',
        desc: 'Mastery of precision temperature, humidity control, and energy-efficient AHU systems.'
    },
    {
        icon: '🇮🇳',
        title: 'Pan-India Network',
        desc: 'Rapid deployment capabilities and technical support hubs across major industrial zones.'
    },
    {
        icon: '🤝',
        title: 'Prompt After-Sales Service',
        desc: 'Dedicated AMC contracts, DOP filter testing, and rapid replacement filter delivery.'
    }
];

export const WhyChooseUs = () => {
    return (
        <section className="why-section" id="why-mapfil">
            <div className="section-wrapper">
                <div className="section-heading" style={{ textAlign: 'center' }}>
                    <span className="section-eyebrow">OUR ADVANTAGE</span>
                    <h2>Why Choose MAP FILTERS?</h2>
                    <p>Over two decades of dedication to industrial cleanroom excellence, engineering reliability, and client trust.</p>
                </div>

                <div className="why-grid">
                    {REASONS.map((item, idx) => (
                        <div key={idx} className="why-card">
                            <div className="why-card-header">
                                <div className="why-card-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                            </div>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;

