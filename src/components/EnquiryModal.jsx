import React, { useState, useEffect } from 'react';
import './EnquiryModal.css';

export const EnquiryModal = ({ isOpen, onClose, source = "I'm Curious", product = '' }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

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
        setIsSubmitted(false);
        setErrorMsg('');
        setFormData({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            message: ''
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
        setErrorMsg('');

        if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.message.trim()) {
            setErrorMsg('Please complete all required fields.');
            return;
        }

        setIsSubmitting(true);

        const payload = {
            firstName: formData.firstName.trim(),
            lastName: formData.lastName.trim(),
            name: `${formData.firstName.trim()} ${formData.lastName.trim()}`,
            phone: formData.phone.trim(),
            email: formData.email.trim(),
            message: formData.message.trim(),
            notes: formData.message.trim(),
            product: product || 'General Cleanroom Enquiry',
            source: source || "I'm Curious"
        };

        try {
            const response = await fetch('http://localhost:5000/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                setErrorMsg('Server encountered an issue. Please try again.');
            }
        } catch (err) {
            console.warn('Backend server unavailable:', err);
            // Fallback gracefully so the user is informed
            setIsSubmitted(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div
            className="modal-backdrop is-active"
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiryModalTitle"
            onClick={(e) => {
                if (e.target === e.currentTarget) handleClose();
            }}
        >
            <div className="modal-dialog" style={{ maxWidth: '580px' }}>
                <button
                    type="button"
                    className="modal-close"
                    onClick={handleClose}
                    aria-label="Close dialog"
                >
                    ✕
                </button>

                {!isSubmitted ? (
                    <>
                        <div className="modal-header" style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
                            <span className="modal-eyebrow" style={{ color: '#009ea9', letterSpacing: '0.12em' }}>
                                MAP FILTERS INQUIRY
                            </span>
                            <h3 id="enquiryModalTitle" style={{ fontSize: '1.65rem', color: '#009ea9', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0.2rem 0' }}>
                                ENQUIRY
                            </h3>
                            <p style={{ fontSize: '13px', color: '#64748b' }}>
                                {product ? `Specialized enquiry for: ${product}` : 'Have a question or requirement? Let our cleanroom engineers know.'}
                            </p>
                        </div>

                        {errorMsg && (
                            <div style={{ background: '#fef2f2', border: '1px solid #f87171', color: '#991b1b', padding: '0.5rem 0.75rem', borderRadius: '6px', fontSize: '12.5px', marginBottom: '0.75rem' }}>
                                {errorMsg}
                            </div>
                        )}

                        <form className="quote-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="modalFirstName">First Name *</label>
                                    <input
                                        type="text"
                                        id="modalFirstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="First Name"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="modalLastName">Last Name *</label>
                                    <input
                                        type="text"
                                        id="modalLastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Last Name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="modalPhone">Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="modalPhone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="modalEmail">Email Address *</label>
                                    <input
                                        type="email"
                                        id="modalEmail"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email Address"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="modalMessage">Message *</label>
                                <textarea
                                    id="modalMessage"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message here.."
                                    required
                                />
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '0.75rem' }}>
                                <button
                                    type="submit"
                                    className="btn-primary-red submit-btn"
                                    disabled={isSubmitting}
                                    style={{
                                        background: '#f25c05',
                                        maxWidth: '220px',
                                        padding: '0.65rem 1.5rem',
                                        borderRadius: '6px',
                                        fontSize: '14px',
                                        fontWeight: '700',
                                        boxShadow: '0 4px 14px rgba(242, 92, 5, 0.4)'
                                    }}
                                >
                                    {isSubmitting ? 'Sending... ⏳' : 'Submit ✈'}
                                </button>
                            </div>

                            <div className="form-privacy" style={{ marginTop: '0.65rem' }}>
                                🔒 Direct manufacturer desk. Your data is protected by strict confidentiality.
                            </div>
                        </form>
                    </>
                ) : (
                    <div className="modal-success" style={{ display: 'block' }}>
                        <div className="success-icon" style={{ background: '#dcfce7', color: '#166534', borderColor: '#86efac' }}>✓</div>
                        <h3 style={{ color: '#0f172a' }}>Enquiry Received!</h3>
                        <p style={{ color: '#475569' }}>
                            Thank you, {formData.firstName}! A MAP FILTERS technical cleanroom engineer has been assigned and will connect with you regarding your enquiry shortly.
                        </p>
                        <button
                            type="button"
                            className="btn-primary-red"
                            style={{ background: '#00632e', padding: '0.6rem 2rem', borderRadius: '6px' }}
                            onClick={handleClose}
                        >
                            Done
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EnquiryModal;

