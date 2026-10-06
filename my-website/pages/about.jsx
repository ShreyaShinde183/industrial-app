import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="page-wrapper about-page">
      {/* 1. Standardized Hero Banner */}
      <section className="page-hero-banner">
        <div className="page-hero-inner">
          <span className="page-eyebrow">ABOUT US</span>
          <h1 className="page-title">
            Clean Room Creators &amp; Complete Solution Providers
          </h1>
          <p className="page-subtitle">
            ISO 9001:2015 &amp; MSME ZED Bronze certified company delivering contamination-controlled cleanrooms &amp; precision HVAC systems for over 20 years.
          </p>
        </div>
      </section>

      {/* 2. Main Narrative & Credentials (Standardized page-section) */}
      <section className="page-section">
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <span className="section-eyebrow">COMPANY OVERVIEW</span>
              <h2 className="section-title" style={{ textAlign: 'left', margin: '0.4rem 0 1.25rem 0' }}>
                Pioneering Cleanroom Engineering Across India
              </h2>
              <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                <strong>MAP FILTERS INDIA PVT. LTD.</strong> is an established ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, and MSME ZED Bronze certified company, committed to providing complete solutions for clean rooms &amp; HVAC (Heating, Ventilation &amp; Air Conditioning) for Pharmaceutical, Chemical, Research, Healthcare, and allied industries.
              </p>
              <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                With over 20 years of manufacturing excellence (Est. 2003), MAP FILTERS operates a 25,000+ sq. ft. dedicated manufacturing facility in Bhiwandi, Maharashtra with in-house capabilities for clean room equipment, modular partition panels, airtight doors, Modular Operation Theatres, and certified air filters.
              </p>
              <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                We design, manufacture, and install customized products and provide prompt after-sales service and ongoing regulatory validation support to our valued clients across India.
              </p>

              <Link to="/contact" style={{
                background: '#00632e',
                color: '#ffffff',
                padding: '0.85rem 1.85rem',
                borderRadius: '999px',
                fontWeight: '700',
                fontSize: '0.98rem',
                display: 'inline-block',
                boxShadow: '0 4px 14px rgba(0, 99, 46, 0.25)',
                textDecoration: 'none'
              }}>
                Connect with Our Engineering Desk ↗
              </Link>
            </div>

            <div>
              <div style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '2.5rem',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '2.5rem' }}>🏅</div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: '#0B1B3D', margin: 0, fontWeight: '800' }}>ISO 9001:2015 &amp; ZED Bronze</h3>
                    <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>ISO 14001 &amp; ISO 45001 Certified Quality Assurance</p>
                  </div>
                </div>

                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ color: '#00632e', fontWeight: 'bold' }}>✓</span>
                    <p style={{ margin: 0, color: '#475569', fontSize: '0.95rem' }}><strong>ISO 14644 &amp; EN 1822 Compliance:</strong> Engineering cleanrooms from ISO Class 5 to 8 with 100% PAO/DOP leak-tested HEPA filters.</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ color: '#00632e', fontWeight: 'bold' }}>✓</span>
                    <p style={{ margin: 0, color: '#475569', fontSize: '0.95rem' }}><strong>cGMP &amp; FDA Alignment:</strong> Validation and documentation support for global regulatory audits.</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ color: '#00632e', fontWeight: 'bold' }}>✓</span>
                    <p style={{ margin: 0, color: '#475569', fontSize: '0.95rem' }}><strong>25,000+ Sq. Ft. Plant:</strong> Advanced manufacturing plant located in Bhiwandi, Maharashtra.</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <span style={{ color: '#00632e', fontWeight: 'bold' }}>✓</span>
                    <p style={{ margin: 0, color: '#475569', fontSize: '0.95rem' }}><strong>Complete Turnkey:</strong> Single-source responsibility from 3D conceptual layout to commissioning.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Pillars (Standardized page-section bg-light) */}
      <section className="page-section bg-light">
        <div className="section-container">
          <div className="section-header-block">
            <span className="section-eyebrow">OUR VALUES</span>
            <h2 className="section-title">Pillars of Cleanroom Excellence</h2>
            <p className="section-desc">Four cornerstones that define our engineering philosophy and customer commitments.</p>
          </div>

          <div className="equal-grid">
            <div className="equal-card">
              <div style={{ fontSize: '2rem', color: '#00632e', marginBottom: '0.75rem' }}>🎯</div>
              <h3 style={{ fontSize: '1.2rem', color: '#0B1B3D', marginBottom: '0.5rem' }}>Engineering Precision</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Every cleanroom component is designed with airtight joints, flush coving, and precise airflow patterns to eliminate particle settling.
              </p>
            </div>
            <div className="equal-card">
              <div style={{ fontSize: '2rem', color: '#00632e', marginBottom: '0.75rem' }}>📋</div>
              <h3 style={{ fontSize: '1.2rem', color: '#0B1B3D', marginBottom: '0.5rem' }}>Regulatory Compliance</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Comprehensive IQ/OQ/PQ documentation and testing protocols ensuring smooth clearance with US-FDA, MHRA, and WHO guidelines.
              </p>
            </div>
            <div className="equal-card">
              <div style={{ fontSize: '2rem', color: '#00632e', marginBottom: '0.75rem' }}>⏱️</div>
              <h3 style={{ fontSize: '1.2rem', color: '#0B1B3D', marginBottom: '0.5rem' }}>On-Time Execution</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Modular prefabricated construction speeds up site installation, minimizing downtime and accelerating plant readiness.
              </p>
            </div>
            <div className="equal-card">
              <div style={{ fontSize: '2rem', color: '#00632e', marginBottom: '0.75rem' }}>🛠️</div>
              <h3 style={{ fontSize: '1.2rem', color: '#0B1B3D', marginBottom: '0.5rem' }}>Reliable After-Sales</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Pan-India service teams providing annual maintenance, HEPA filter replacements, airflow balancing, and validation re-testing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
