import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    requirement: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-wrapper contact-page">
      {/* 1. Standardized Hero Banner */}
      <section className="page-hero-banner">
        <div className="page-hero-inner">
          <span className="page-eyebrow">CONTACT US</span>
          <h1 className="page-title">
            Get in Touch with Our Cleanroom Engineering Team
          </h1>
          <p className="page-subtitle">
            Direct consultation for cleanroom project inquiries, technical specifications, and facility sizing.
          </p>
        </div>
      </section>

      {/* 2. Form & Branches Grid (Standardized page-section) */}
      <section className="page-section">
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem' }}>
            {/* Inquiry Form */}
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '2.5rem', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0B1B3D', marginBottom: '0.5rem' }}>
                Submit a Project Enquiry
              </h2>
              <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '1.75rem' }}>
                Fill out your technical requirements below. Our engineers will respond within 24 hours.
              </p>

              {submitted ? (
                <div style={{ background: '#e8f7ee', border: '1px solid #92dbae', padding: '1.5rem', borderRadius: '8px', textAlign: 'center' }}>
                  <span style={{ fontSize: '2.5rem' }}>✅</span>
                  <h3 style={{ color: '#004d24', fontSize: '1.25rem', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Enquiry Received!</h3>
                  <p style={{ color: '#00632e', fontSize: '0.95rem' }}>
                    Thank you, <strong>{formData.name}</strong>. Our engineering desk has received your request and will contact you promptly at <strong>{formData.email}</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: '#334155', marginBottom: '0.35rem' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: '#334155', marginBottom: '0.35rem' }}>
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex BioPharma Pvt Ltd"
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: '#334155', marginBottom: '0.35rem' }}>
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: '#334155', marginBottom: '0.35rem' }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: '700', color: '#334155', marginBottom: '0.35rem' }}>
                      Project Scope / Equipment Requirements *
                    </label>
                    <textarea
                      required
                      rows="4"
                      value={formData.requirement}
                      onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                      placeholder="Describe your cleanroom class (ISO 5-8), dimensions, equipment needed (LAF, Passbox), or HVAC specifications..."
                      style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '0.95rem', fontFamily: 'inherit' }}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: '#00632e',
                      color: '#ffffff',
                      border: 'none',
                      padding: '0.9rem',
                      borderRadius: '6px',
                      fontWeight: '700',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(0, 99, 46, 0.3)'
                    }}
                  >
                    Submit Cleanroom Enquiry
                  </button>
                </form>
              )}
            </div>

            {/* Plant & Branches Details */}
            <div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#0B1B3D', marginBottom: '1.5rem' }}>
                Manufacturing Facilities &amp; Hubs
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem' }}>
                  <span style={{ background: '#00632e', color: '#ffffff', fontSize: '0.75rem', fontWeight: '700', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                    HEADQUARTERS &amp; PLANT
                  </span>
                  <h3 style={{ fontSize: '1.15rem', color: '#0B1B3D', margin: '0.65rem 0 0.35rem 0' }}>
                    Bhiwandi Manufacturing Plant
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: '1.6' }}>
                    Unit No- A1, Yuvraj Logistics &amp; Commercial Park, Near PADGHA Toll Naka, Arjunalli Village, Bhiwandi - 421302, Maharashtra (INDIA)
                  </p>
                  <div style={{ marginTop: '0.75rem', fontSize: '0.9rem', color: '#334155' }}>
                    <strong>Phone:</strong> <a href="tel:+919823252793" style={{ color: '#00632e', textDecoration: 'none' }}>+91 98232 52793</a>
                  </div>
                  <div style={{ marginTop: '0.35rem', fontSize: '0.9rem', color: '#334155' }}>
                    <strong>Email:</strong> <a href="mailto:karunakar@mapfilters.com" style={{ color: '#00632e', textDecoration: 'none' }}>karunakar@mapfilters.com</a>
                  </div>
                </div>

                <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.5rem' }}>
                  <span style={{ background: '#0B1B3D', color: '#ffffff', fontSize: '0.75rem', fontWeight: '700', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                    REGIONAL HUBS
                  </span>
                  <h3 style={{ fontSize: '1.15rem', color: '#0B1B3D', margin: '0.65rem 0 0.35rem 0' }}>
                    Pan-India Distribution &amp; Service Network
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.92rem', lineHeight: '1.6' }}>
                    Active technical service teams stationed across major pharmaceutical and biotech clusters:
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0.75rem 0 0 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', fontSize: '0.88rem', color: '#475569' }}>
                    <li>📍 Mumbai &amp; Thane (MH)</li>
                    <li>📍 Ahmedabad (Gujarat)</li>
                    <li>📍 Hyderabad (Telangana)</li>
                    <li>📍 Bengaluru (Karnataka)</li>
                    <li>📍 Chennai (Tamil Nadu)</li>
                    <li>📍 Delhi-NCR Hub</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
