import React from 'react';
import './CertificationsMatrix.css';

const CERTIFICATIONS = [
    {
        code: 'ISO 9001:2015',
        title: 'Quality Management System',
        authority: 'International Organization for Standardization',
        desc: 'Rigorous quality assurance protocols governing precision cleanroom equipment and filter manufacturing.',
        badge: 'Certified QA',
        icon: '🛡️'
    },
    {
        code: 'ISO 14001:2015',
        title: 'Environmental Management',
        authority: 'Global Environmental Standard',
        desc: 'Sustainable and eco-efficient production practices minimizing environmental footprint at our Bhiwandi facility.',
        badge: 'Eco Standard',
        icon: '🌱'
    },
    {
        code: 'ISO 45001:2018',
        title: 'Occupational Health & Safety',
        authority: 'Workplace Safety Compliance',
        desc: 'Comprehensive safety systems protecting our workforce across plant fabrication and on-site cleanroom erection.',
        badge: 'Safety First',
        icon: '👷'
    },
    {
        code: 'MSME ZED Bronze',
        title: 'Zero Defect, Zero Effect',
        authority: 'Ministry of MSME, Govt. of India',
        desc: 'Official Government of India certification recognizing superior product quality and sustainable manufacturing.',
        badge: 'Govt. Recognized',
        icon: '🇮🇳'
    },
    {
        code: 'EN 1822 / ISO 29463',
        title: 'Aerosol Leak-Testing Standard',
        authority: 'HEPA & ULPA Test Standards',
        desc: '100% individual scan testing with PAO / DOP challenge aerosols ensuring 99.997% efficiency at 0.3 microns.',
        badge: 'DOP Tested',
        icon: '🔬'
    },
    {
        code: 'cGMP & US FDA',
        title: 'Pharma Cleanroom Compliance',
        authority: 'Good Manufacturing Practices',
        desc: 'Airtight modular envelopes, flush covings, and pressure differentials engineered for global regulatory audits.',
        badge: 'Audit Ready',
        icon: '💊'
    },
    {
        code: 'NABH Guidelines',
        title: 'Hospital Modular OT Standard',
        authority: 'National Accreditation Board',
        desc: 'Specialized healthcare laminar ceiling distribution, surgeon panels, and sterile airflow velocity controls.',
        badge: 'Healthcare',
        icon: '🏥'
    },
    {
        code: 'ASHRAE 52.2 / EN 779',
        title: 'HVAC Airflow & Filtration',
        authority: 'Thermal & Air Quality Standards',
        desc: 'Standardized testing of air handling units, synthetic media dust holding capacity, and airflow balancing.',
        badge: 'HVAC Tested',
        icon: '💨'
    }
];

export const CertificationsMatrix = () => {
    return (
        <section className="certs-section" id="certifications">
            <div className="section-wrapper">
                <div className="section-heading" style={{ textAlign: 'center' }}>
                    <span className="section-eyebrow">REGULATORY EXCELLENCE</span>
                    <h2>Certifications &amp; Quality Compliance Matrix</h2>
                    <p>
                        Engineered to meet the stringent audit requirements of US FDA, EU GMP, WHO, and Indian regulatory agencies.
                    </p>
                </div>

                <div className="certs-grid">
                    {CERTIFICATIONS.map((item, idx) => (
                        <div key={idx} className="cert-card">
                            <div className="cert-card-top">
                                <span className="cert-card-icon">{item.icon}</span>
                                <span className="cert-pill-badge">{item.badge}</span>
                            </div>
                            <h3 className="cert-code">{item.code}</h3>
                            <h4 className="cert-title">{item.title}</h4>
                            <p className="cert-authority">{item.authority}</p>
                            <p className="cert-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CertificationsMatrix;

