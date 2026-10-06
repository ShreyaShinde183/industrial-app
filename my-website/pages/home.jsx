import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-wrapper home-page">
      {/* 1. Standardized Hero Banner */}
      <section className="page-hero-banner">
        <div className="page-hero-inner">
          <span className="page-eyebrow">
            ISO 9001:2015 &amp; MSME ZED BRONZE CERTIFIED CLEANROOM MANUFACTURER
          </span>
          <h1 className="page-title">
            Clean Room Creators &amp; Complete Solution Providers
          </h1>
          <p className="page-subtitle">
            Over 20 years of engineering excellence in designing, manufacturing, installing, and validating high-performance cleanrooms &amp; HVAC systems for pharmaceutical, chemical, biotechnology, and healthcare facilities across India.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link to="/products" style={{
              background: '#00632e',
              color: '#ffffff',
              padding: '0.85rem 1.85rem',
              borderRadius: '999px',
              fontWeight: '700',
              fontSize: '0.98rem',
              boxShadow: '0 4px 14px rgba(0, 99, 46, 0.4)',
              textDecoration: 'none'
            }}>
              Explore Products &amp; Solutions ↗
            </Link>
            <Link to="/contact" style={{
              background: '#e52320',
              color: '#ffffff',
              padding: '0.85rem 1.85rem',
              borderRadius: '999px',
              fontWeight: '700',
              fontSize: '0.98rem',
              boxShadow: '0 4px 14px rgba(229, 35, 32, 0.35)',
              textDecoration: 'none'
            }}>
              ✈ Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Key Stats Strip (Standardized page-section) */}
      <section className="page-section bg-light">
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', textAlign: 'center' }}>
            <div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#00632e', margin: 0 }}>20+</h3>
              <p style={{ color: '#475569', fontWeight: '600', marginTop: '0.35rem' }}>Years Engineering Leadership (Est. 2003)</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#00632e', margin: 0 }}>ISO 9001:2015</h3>
              <p style={{ color: '#475569', fontWeight: '600', marginTop: '0.35rem' }}>ISO 14001, 45001 &amp; ZED Bronze</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#00632e', margin: 0 }}>25,000+</h3>
              <p style={{ color: '#475569', fontWeight: '600', marginTop: '0.35rem' }}>Sq. Ft. Bhiwandi Manufacturing Plant</p>
            </div>
            <div>
              <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#00632e', margin: 0 }}>99.997%</h3>
              <p style={{ color: '#475569', fontWeight: '600', marginTop: '0.35rem' }}>PAO/DOP Leak-Tested HEPA Filters</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Solutions Preview (Standardized page-section) */}
      <section className="page-section">
        <div className="section-container">
          <div className="section-header-block">
            <span className="section-eyebrow">WHAT WE DELIVER</span>
            <h2 className="section-title">Engineered Cleanroom Capabilities</h2>
            <p className="section-desc">
              Comprehensive in-house manufacturing, project execution, and post-installation validation.
            </p>
          </div>

          <div className="equal-grid">
            <div className="equal-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>🏗️</div>
              <h3 style={{ fontSize: '1.25rem', color: '#0B1B3D', marginBottom: '0.75rem' }}>Turnkey Modular Cleanrooms</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Full cleanroom lifecycle execution conforming to ISO 5 to ISO 8 and cGMP guidelines with partition panels, false ceilings, and flooring.
              </p>
            </div>

            <div className="equal-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>💨</div>
              <h3 style={{ fontSize: '1.25rem', color: '#0B1B3D', marginBottom: '0.75rem' }}>Sterile Contamination Equipment</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Laminar Air Flow (LAF) benches, Dynamic &amp; Static Pass Boxes, Air Showers, Bio-Safety Cabinets, and Sampling Booths.
              </p>
            </div>

            <div className="equal-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>🚪</div>
              <h3 style={{ fontSize: '1.25rem', color: '#0B1B3D', marginBottom: '0.75rem' }}>Cleanroom Doors &amp; Panels</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Flush cleanroom doors with airtight perimeter gaskets, double glazed view panels, and interlock controller systems.
              </p>
            </div>

            <div className="equal-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>❄️</div>
              <h3 style={{ fontSize: '1.25rem', color: '#0B1B3D', marginBottom: '0.75rem' }}>Precision HVAC &amp; Filtration</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Air Handling Units (AHU), HEPA/ULPA filter modules, ducting distribution, differential pressure regulation, and thermal controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Consultation CTA Banner (Standardized cta-banner-section) */}
      <section className="cta-banner-section">
        <div className="cta-banner-inner">
          <h2 style={{ fontSize: '2.1rem', fontWeight: '800', marginBottom: '1rem', color: '#ffffff' }}>
            Ready to Build or Upgrade Your Cleanroom?
          </h2>
          <p style={{ color: '#cbd5e1', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: '1.6' }}>
            Consult directly with our Bhiwandi technical desk for engineering drawings, HVAC sizing, and competitive turnkey quotations within 24 business hours.
          </p>
          <Link to="/contact" style={{
            background: '#e52320',
            color: '#ffffff',
            padding: '0.9rem 2.25rem',
            borderRadius: '999px',
            fontWeight: '700',
            fontSize: '1.02rem',
            display: 'inline-block',
            boxShadow: '0 4px 14px rgba(229, 35, 32, 0.4)',
            textDecoration: 'none'
          }}>
            ⚡ Request Instant Technical Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
