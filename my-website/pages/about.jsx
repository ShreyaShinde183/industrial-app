import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="page-wrapper about-page">
      {/* 1. Header Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #0B1B3D 0%, #162a56 100%)',
        color: '#ffffff',
        padding: '3.5rem 1.5rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <span style={{ color: '#86efac', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.08em' }}>ABOUT US</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', marginTop: '0.5rem', color: '#ffffff' }}>
            Clean Room Creators &amp; Complete Solution Providers
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.1rem', marginTop: '1rem', lineHeight: '1.6' }}>
            ISO 9001:2008 Certified company delivering contamination-controlled cleanrooms &amp; precision HVAC systems for over 20 years.
          </p>
        </div>
      </section>

      {/* 2. Main Narrative & Image */}
      <section style={{ padding: '4.5rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
          <div>
            <span style={{ color: '#00632e', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.05em' }}>COMPANY OVERVIEW</span>
            <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#0B1B3D', margin: '0.5rem 0 1.25rem 0' }}>
              Pioneering Cleanroom Engineering Across India
            </h2>
            <p style={{ color: '#334155', fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
              <strong>MAP FILTERS INDIA PVT. LTD.</strong> is an established ISO 9001:2008 certified company, committed to provide complete solution of clean room &amp; HVAC (Heating, Ventilation &amp; Air Conditioning) for Pharmaceutical, Chemical, Research, and allied industries.
            </p>
            <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
              Having experience of more than 20 years, MAP FILTERS has complete in-house capabilities of manufacturing clean room equipment, modular partition panels, airtight doors, Modular Operation Theatres, and certified air filters.
            </p>
            <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
              We design, manufacture, and install customized products and provide prompt after-sales service and ongoing regulatory validation support to our valued customers.
            </p>

            <Link to="/contact" style={{
              background: '#00632e',
              color: '#ffffff',
              padding: '0.8rem 1.75rem',
              borderRadius: '6px',
              fontWeight: '700',
              display: 'inline-block'
            }}>
              Connect with Our Leadership
            </Link>
          </div>

          <div>
            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '2.5rem',
              boxShadow: '0 8px 24px rgba(0,0,0,0.04)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '2.5rem' }}>🏅</div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: '#0B1B3D', margin: 0 }}>ISO 9001:2008 Certified</h3>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>Quality Management Assurance</p>
                </div>
              </div>

              <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: '#00632e', fontWeight: 'bold' }}>✓</span>
                  <p style={{ margin: 0, color: '#475569', fontSize: '0.95rem' }}><strong>ISO 14644 Compliance:</strong> Engineering cleanrooms from ISO Class 5 to ISO Class 8.</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: '#00632e', fontWeight: 'bold' }}>✓</span>
                  <p style={{ margin: 0, color: '#475569', fontSize: '0.95rem' }}><strong>cGMP &amp; FDA Alignment:</strong> Validation and documentation support for regulatory audits.</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: '#00632e', fontWeight: 'bold' }}>✓</span>
                  <p style={{ margin: 0, color: '#475569', fontSize: '0.95rem' }}><strong>In-House Factory:</strong> Advanced manufacturing plant located in Bhiwandi, Maharashtra.</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <span style={{ color: '#00632e', fontWeight: 'bold' }}>✓</span>
                  <p style={{ margin: 0, color: '#475569', fontSize: '0.95rem' }}><strong>Complete Turnkey:</strong> Concept, design, 3D layouts, fabrication, execution, commissioning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Pillars */}
      <section style={{ background: '#f8fafc', padding: '4.5rem 1.5rem', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', color: '#0B1B3D', marginBottom: '2.5rem' }}>Our Pillars of Excellence</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', textAlign: 'left' }}>
            <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '2rem', color: '#00632e', marginBottom: '0.75rem' }}>🎯</div>
              <h3 style={{ fontSize: '1.2rem', color: '#0B1B3D', marginBottom: '0.5rem' }}>Engineering Precision</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Every cleanroom component is designed with airtight joints, flush coving, and precise airflow patterns to eliminate particle settling.
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '2rem', color: '#00632e', marginBottom: '0.75rem' }}>📋</div>
              <h3 style={{ fontSize: '1.2rem', color: '#0B1B3D', marginBottom: '0.5rem' }}>Regulatory Compliance</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Comprehensive IQ/OQ/PQ documentation and testing protocols ensuring smooth clearance with US-FDA, MHRA, and WHO guidelines.
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '2rem', color: '#00632e', marginBottom: '0.75rem' }}>⏱️</div>
              <h3 style={{ fontSize: '1.2rem', color: '#0B1B3D', marginBottom: '0.5rem' }}>On-Time Execution</h3>
              <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Modular prefabricated construction speeds up site installation, minimizing downtime and accelerating plant readiness.
              </p>
            </div>
            <div style={{ background: '#ffffff', padding: '2rem', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
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
