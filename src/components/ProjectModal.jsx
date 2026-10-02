import React, { useState, useEffect } from 'react';
import './ProjectModal.css';

export const ProjectModal = ({ isOpen, onClose, source = 'Premium CTA' }) => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        phone: '',
        email: '',
        industry: '',
        requirement: ''
    });

    const [isPrepared, setIsPrepared] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && isOpen) {
                handleClose();
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    const handleClose = () => {
        setIsPrepared(false);
        setFormData({
            name: '',
            company: '',
            phone: '',
            email: '',
            industry: '',
            requirement: ''
        });
        if (onClose) onClose();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Also fire to backend for logging
        try {
            await fetch('http://localhost:5000/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    company: formData.company,
                    phone: formData.phone,
                    email: formData.email,
                    product: `Project (${formData.industry})`,
                    notes: formData.requirement,
                    source: `Start a Project Modal - ${source}`
                })
            });
        } catch (err) {
            console.info('Backend not active, continuing to dispatch card.');
        }

        setIsPrepared(true);
    };

    const mailSubject = encodeURIComponent(`Cleanroom Project Enquiry - ${formData.company} (${formData.name})`);
    const mailBody = encodeURIComponent(
        `Dear MAP FILTERS Technical Desk,\n\nPlease find my cleanroom project enquiry:\n\nName: ${formData.name}\nCompany: ${formData.company}\nIndustry: ${formData.industry}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nProject Scope & Requirement:\n${formData.requirement}\n\nLooking forward to your technical quotation.\nBest regards,\n${formData.name}`
    );

    if (!isOpen) return null;

    return (
        <div
            className="modal-backdrop is-active"
            role="dialog"
            aria-modal="true"
            aria-labelledby="projectModalTitle"
            onClick={(e) => {
                if (e.target === e.currentTarget) handleClose();
            }}
        >
            <div className="modal-dialog project-modal-dialog">
                <button
                    type="button"
                    className="modal-close"
                    onClick={handleClose}
                    aria-label="Close dialog"
                >
                    ✕
                </button>

                <div className="modal-header">
                    <span className="modal-eyebrow">START A PROJECT</span>
                    <h3 id="projectModalTitle">Cleanroom Project Enquiry</h3>
                    <p>Provide your facility parameters. Our senior cleanroom and HVAC engineering team will contact you directly.</p>
                </div>

                {!isPrepared ? (
                    <form className="quote-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="projectName">Full Name *</label>
                                <input
                                    type="text"
                                    id="projectName"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g. Ramesh Sharma"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="projectCompany">Company / Plant Name *</label>
                                <input
                                    type="text"
                                    id="projectCompany"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g. Cadila Healthcare / Lab Unit"
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="projectPhone">Phone Number *</label>
                                <input
                                    type="tel"
                                    id="projectPhone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="e.g. +91 98765 43210"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="projectEmail">Work Email *</label>
                                <input
                                    type="email"
                                    id="projectEmail"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="name@company.com"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="projectIndustry">Industry *</label>
                            <select
                                id="projectIndustry"
                                name="industry"
                                value={formData.industry}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select your industry...</option>
                                <option value="Pharmaceutical">Pharmaceutical</option>
                                <option value="Chemical">Chemical</option>
                                <option value="Research">Research</option>
                                <option value="Healthcare">Healthcare</option>
                                <option value="Laboratory">Laboratory</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label htmlFor="projectRequirement">Requirement *</label>
                            <textarea
                                id="projectRequirement"
                                name="requirement"
                                rows="3"
                                value={formData.requirement}
                                onChange={handleChange}
                                required
                                placeholder="Describe your facility scope (e.g. ISO 7 cleanroom, modular panels, custom AHU, filtration, area in sq. ft.)..."
                            />
                        </div>

                        <button type="submit" className="btn-primary-red submit-btn">
                            SUBMIT ENQUIRY ↗
                        </button>

                        <div className="form-privacy">
                            🔒 Direct engineering desk. Confidential project consultation assured.
                        </div>
                    </form>
                ) : (
                    <div className="status-card" style={{ display: 'block' }}>
                        <div className="status-card-icon">📋</div>
                        <h4>Enquiry Details Prepared</h4>
                        <p>
                            Your project parameters have been recorded. For instant dispatch without waiting for backend processing, you can connect directly with our desk:
                        </p>
                        <div className="status-actions-wrap" style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '1rem', flexWrap: 'wrap' }}>
                            <a
                                href={`mailto:karunakar@mapfilters.com?subject=${mailSubject}&body=${mailBody}`}
                                className="btn-dispatch-email"
                                style={{ background: '#0B1B3D', color: '#fff', padding: '0.65rem 1.25rem', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '13px' }}
                            >
                                <span>✉️ Send via Work Email</span>
                            </a>
                        </div>
                        <button
                            type="button"
                            className="btn-primary-red"
                            style={{ marginTop: '1.25rem', width: '100%', borderRadius: '6px' }}
                            onClick={handleClose}
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectModal;

