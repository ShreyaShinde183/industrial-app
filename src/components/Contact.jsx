import React from 'react';
import MapFilters from '../MapFilters';
import './Contact.css';

const CLIENT_SECTORS = [
    { icon: '💊', name: 'Pharma Formulations', sector: 'Oral & Injectables' },
    { icon: '🧪', name: 'API Synthetics', sector: 'Bulk Chemical Plants' },
    { icon: '🏥', name: 'Healthcare Networks', sector: 'Super-Specialty OTs' },
    { icon: '🔬', name: 'Bio-Research Institutes', sector: 'Vaccine & R&D Labs' },
    { icon: '⚙️', name: 'Precision Electronics', sector: 'Controlled Micro-Clean' },
    { icon: '🧫', name: 'Testing Laboratories', sector: 'QC / QA Infrastructure' }
];

/**
 * MAP FILTERS INDIA PVT. LTD. — Contact Section
 * Integrates:
 * 1. Pan-India Interactive MapFilters locator
 * 2. Official Manufacturing Facilities & Corporate Branches
 * 3. Client Collaborations & Sectors
 * 4. High-Tech Project CTA Banner
 */
export const Contact = ({ onOpenEnquiry, onOpenProject }) => {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">

                {/* 1. Section Header */}
                <div className="contact-header">
                    <div className="contact-eyebrow">
                        <span>Pan-India &amp; Regional Cleanroom Network</span>
                    </div>
                    <h2 className="contact-title">Find MAP FILTERS Near You &amp; Get In Touch</h2>
                    <p className="contact-subtitle">
                        Connect with our cleanroom design, HVAC installation, and maintenance hubs across India and allied markets.
                    </p>
                </div>

                {/* 2. Interactive Google Maps & Filters Module */}
                <div className="contact-map-wrapper">
                    <MapFilters />
                </div>

                {/* 3. Corporate Offices & Branches Card */}
                <div className="contact-offices-card">
                    <h3 className="contact-offices-title">
                        <span className="title-icon">🏢</span>
                        <span>Official Manufacturing Facilities &amp; Corporate Branches</span>
                    </h3>

                    <div className="contact-branches-grid">
                        <div className="contact-branch-item">
                            <span className="contact-branch-badge hq">Main Office + Factory</span>
                            <h4 className="contact-branch-heading">Bhiwandi Manufacturing Plant</h4>
                            <p className="contact-branch-address">
                                Unit No- A1, Yuvraj Logistics &amp; Commercial Park, Near PADGHA Toll Naka, Arjunalli Village, Bhiwandi - 421302, Maharashtra (INDIA)
                            </p>
                        </div>

                        <div className="contact-branch-item">
                            <span className="contact-branch-badge">Corporate Branch</span>
                            <h4 className="contact-branch-heading">Vasai Technical Office</h4>
                            <p className="contact-branch-address">
                                Unit No.10, Roop Naval Indl. Estate, Vidya Vikashini School Road, Fatherwadi, Vasai (East) - 401208, Dist.- Palghar, Maharashtra, India.
                            </p>
                        </div>

                        <div className="contact-branch-item">
                            <span className="contact-branch-badge">Branch 2</span>
                            <h4 className="contact-branch-heading">Navi Mumbai Project Office</h4>
                            <p className="contact-branch-address">
                                Office No 809, 8th Floor, Kamdhenu 23 West, Kopar Khairane, Mahape, TTC Industrial Area, Navi Mumbai, Thane - 400 705, Maharashtra, INDIA
                            </p>
                        </div>
                    </div>

                    {/* Direct Contact & Helpline Row */}
                    <div className="contact-channels-bar">
                        <div className="contact-channel-item">
                            <div className="contact-channel-icon phone-icon">📞</div>
                            <div className="contact-channel-details">
                                <h4>Engineering Helpline</h4>
                                <a href="tel:+919823252793">(+91) - 9823252793</a>
                            </div>
                        </div>

                        <div className="contact-channel-item">
                            <div className="contact-channel-icon email-icon">✉</div>
                            <div className="contact-channel-details">
                                <h4>Technical &amp; Sales Inquiries</h4>
                                <div className="contact-emails-group">
                                    <a href="mailto:karunakar@mapfilters.com">karunakar@mapfilters.com</a>
                                    <span>•</span>
                                    <a href="mailto:sales@mapfil.com">sales@mapfil.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-channel-action">
                            <button
                                type="button"
                                className="contact-cta-action-btn"
                                onClick={() => onOpenEnquiry && onOpenEnquiry('Contact Section', 'Turnkey Cleanroom Inquiry')}
                            >
                                <span>Request Quotation</span>
                                <span aria-hidden="true">→</span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* 4. Sectors & Client Collaborations */}
                <div className="contact-sectors-panel" id="clients">
                    <div className="section-heading" style={{ textAlign: 'center' }}>
                        <span className="section-eyebrow">TRUSTED PARTNERSHIPS</span>
                        <h2>Sectors &amp; Client Collaborations</h2>
                        <p>Serving leading enterprises across critical pharmaceutical, chemical, research, and healthcare verticals.</p>
                    </div>

                    <div className="clients-grid">
                        {CLIENT_SECTORS.map((item, idx) => (
                            <div key={idx} className="client-logo-box">
                                <span className="client-icon">{item.icon}</span>
                                <span className="client-name">{item.name}</span>
                                <span className="client-sector">{item.sector}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 5. Cleanroom Project CTA Banner */}
                <div className="contact-cta-banner-wrapper">
                    <section className="premium-cta-section" id="cta-project">
                        <div className="engineering-grid-bg" aria-hidden="true"></div>
                        <div className="digital-glow-orb" aria-hidden="true"></div>
                        <div className="airflow-stream-container" aria-hidden="true">
                            <div className="airflow-line airflow-line-1"></div>
                            <div className="airflow-line airflow-line-2"></div>
                            <div className="airflow-line airflow-line-3"></div>
                            <div className="airflow-line airflow-line-4"></div>
                        </div>

                        <div className="cta-inner-card">
                            <span className="cta-eyebrow-pill">
                                <span className="digital-pulse-dot" aria-hidden="true"></span>
                                LET'S BUILD THE RIGHT ENVIRONMENT
                            </span>
                            <h2 className="cta-main-heading">HAVE A CLEANROOM PROJECT IN MIND?</h2>
                            <p className="cta-description-text">
                                From cleanroom design and HVAC integration to filtration, installation and maintenance, MAP FILTERS can help you explore the right solution for your requirements.
                            </p>

                            <div className="cta-actions-group">
                                <button
                                    type="button"
                                    className="btn-start-project"
                                    onClick={() => onOpenProject && onOpenProject('Premium CTA')}
                                >
                                    <span>START A PROJECT</span>
                                    <span className="btn-icon">↗</span>
                                </button>
                                <a href="tel:+919823252793" className="btn-talk-expert">
                                    <span>TALK TO AN EXPERT</span>
                                    <span className="btn-icon">→</span>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </section>
    );
};

export default Contact;

