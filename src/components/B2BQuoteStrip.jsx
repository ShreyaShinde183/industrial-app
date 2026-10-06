import React from 'react';
import './B2BQuoteStrip.css';

export const B2BQuoteStrip = ({ onOpenEnquiry }) => {
    return (
        <section className="b2b-quote-section" aria-label="B2B Technical Quotation">
            <div className="section-wrapper b2b-quote-container">
                <div className="b2b-quote-content">
                    <div className="b2b-quote-eyebrow">
                        <span className="b2b-pulse-dot"></span>
                        <span>FAST-TRACK ENGINEERING CONSULTATION</span>
                    </div>

                    <h2 className="b2b-quote-title">
                        Need a Custom Cleanroom or High-Efficiency HVAC Filtration System?
                    </h2>

                    <p className="b2b-quote-desc">
                        Connect directly with our senior cleanroom design specialists. We provide preliminary drawings, cleanroom class classification (ISO 5 to ISO 8), and comprehensive technical proposals within 24 business hours.
                    </p>

                    <div className="b2b-channels-row">
                        <div className="b2b-channel-item">
                            <span className="b2b-channel-icon">📞</span>
                            <div>
                                <span className="b2b-channel-label">Direct Helpline</span>
                                <a href="tel:+919823252793" className="b2b-channel-val">(+91) - 9823252793</a>
                            </div>
                        </div>

                        <div className="b2b-channel-sep">|</div>

                        <div className="b2b-channel-item">
                            <span className="b2b-channel-icon">✉</span>
                            <div>
                                <span className="b2b-channel-label">Engineering Desk</span>
                                <a href="mailto:karunakar@mapfilters.com" className="b2b-channel-val">karunakar@mapfilters.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="b2b-quote-action-col">
                    <button
                        type="button"
                        className="b2b-instant-quote-btn"
                        onClick={() => onOpenEnquiry && onOpenEnquiry('B2B Quote Strip', 'Fast-Track Technical Quote')}
                    >
                        <span className="lightning-icon">⚡</span>
                        <span>Request Technical Quote</span>
                        <span className="quote-arrow">→</span>
                    </button>
                    <span className="b2b-guarantee-note">✓ 24-Hour Business Turnaround Guaranteed</span>
                </div>
            </div>
        </section>
    );
};

export default B2BQuoteStrip;

