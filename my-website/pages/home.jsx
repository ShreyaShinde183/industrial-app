import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-wrapper home-page">
      {/* 1. Hero Section */}
      <section className="hero-banner" style={{
        background: 'linear-gradient(135deg, #0B1B3D 0%, #162a56 60%, #00632e 100%)',
        color: '#ffffff',
        padding: '5rem 1.5rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(0, 99, 46, 0.4)',
            border: '1px solid #86efac',
            color: '#86efac',
            padding: '0.4rem 1rem',
            borderRadius: '999px',
            fontSize: '0.85rem',
            fontWeight: '700',
            letterSpacing: '0.06em',
            marginBottom: '1.25rem'
          }}>
            ISO 9001:2008 CERTIFIED CLEANROOM MANUFACTURER
          </span>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
            fontWeight: '800',
            lineHeight: '1.15',
            marginBottom: '1.25rem',
            color: '#ffffff'
          }}>
            Clean Room Creators &amp; Complete Solution Providers
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: '#cbd5e1',
            lineHeight: '1.6',
            marginBottom: '2.5rem',
            maxWidth: '780px',
            marginInline: 'auto'
          }}>
            Over 20 years of excellence in designing, manufacturing, installing, and validating high-performance cleanrooms &amp; HVAC systems for pharmaceutical, chemical, biotechnology, and healthcare facilities.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/products" style={{
              background: '#00632e',
              color: '#ffffff',
              padding: '0.9rem 2rem',
              borderRadius: '6px',
              fontWeight: '700',
              fontSize: '1rem',
              boxShadow: '0 4px 14px rgba(0, 99, 46, 0.4)'
            }}>
              Explore Products &amp; Solutions
            </Link>
            <Link to="/contact" style={{
              background: '#ffffff',
              color: '#0B1B3D',
              padding: '0.9rem 2rem',
              borderRadius: '6px',
              fontWeight: '700',
              fontSize: '1rem'
            }}>
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Key Stats Strip */}
      <section style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0', padding: '2.5rem 1.5rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', textAlign: 'center' }}>
          <div>
            <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#00632e', margin: 0 }}>20+</h3>
            <p style={{ color: '#475569', fontWeight: '600', marginTop: '0.25rem' }}>Years Industry Leadership</p>
          </div>
          <div>
            <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#00632e', margin: 0 }}>ISO 9001</h3>
            <p style={{ color: '#475569', fontWeight: '600', marginTop: '0.25rem' }}>Certified Quality Assurance</p>
          </div>
          <div>
            <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#00632e', margin: 0 }}>500+</h3>
            <p style={{ color: '#475569', fontWeight: '600', marginTop: '0.25rem' }}>Delivered Cleanroom Projects</p>
          </div>
          <div>
            <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#00632e', margin: 0 }}>100%</h3>
            <p style={{ color: '#475569', fontWeight: '600', marginTop: '0.25rem' }}>cGMP &amp; ISO 14644 Validated</p>
          </div>
        </div>
      </section>

      {/* 3. Core Solutions Preview */}
      <section style={{ padding: '4.5rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ color: '#00632e', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.08em' }}>WHAT WE DELIVER</span>
          <h2 style={{ fontSize: '2.25rem', fontWeight: '800', color: '#0B1B3D', marginTop: '0.35rem' }}>Engineered Cleanroom Capabilities</h2>
          <p style={{ color: '#64748b', maxWidth: '650px', margin: '0.5rem auto 0 auto' }}>
            Comprehensive in-house manufacturing, project execution, and post-installation validation.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '2rem', background: '#ffffff', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>🏗️</div>
            <h3 style={{ fontSize: '1.25rem', color: '#0B1B3D', marginBottom: '0.75rem' }}>Turnkey Modular Cleanrooms</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Full cleanroom lifecycle execution conforming to ISO 5 to ISO 8 and cGMP guidelines with partition panels, false ceilings, and flooring.
            </p>
          </div>

          <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '2rem', background: '#ffffff', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>💨</div>
            <h3 style={{ fontSize: '1.25rem', color: '#0B1B3D', marginBottom: '0.75rem' }}>Sterile Contamination Equipment</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Laminar Air Flow (LAF) benches, Dynamic &amp; Static Pass Boxes, Air Showers, Bio-Safety Cabinets, and Sampling Booths.
            </p>
          </div>

          <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '2rem', background: '#ffffff', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>🚪</div>
            <h3 style={{ fontSize: '1.25rem', color: '#0B1B3D', marginBottom: '0.75rem' }}>Cleanroom Doors &amp; Panels</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Flush cleanroom doors with airtight perimeter gaskets, double glazed view panels, and interlock controller systems.
            </p>
          </div>

          <div style={{ border: '1px solid #e2e8f0', borderRadius: '10px', padding: '2rem', background: '#ffffff', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>❄️</div>
            <h3 style={{ fontSize: '1.25rem', color: '#0B1B3D', marginBottom: '0.75rem' }}>Precision HVAC &amp; Filtration</h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Air Handling Units (AHU), HEPA/ULPA filter modules, ducting distribution, differential pressure regulation, and thermal controls.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Consultation CTA */}
      <section style={{ background: '#0B1B3D', color: '#ffffff', padding: '3.5rem 1.5rem', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem', color: '#ffffff' }}>Ready to Build or Upgrade Your Cleanroom?</h2>
          <p style={{ color: '#cbd5e1', marginBottom: '2rem', fontSize: '1.05rem' }}>
            Consult directly with our Bhiwandi technical desk for engineering drawings, HVAC sizing, and competitive turnkey quotations.
          </p>
          <Link to="/contact" style={{
            background: '#00632e',
            color: '#ffffff',
            padding: '0.9rem 2.25rem',
            borderRadius: '6px',
            fontWeight: '700',
            fontSize: '1.05rem',
            display: 'inline-block'
          }}>
            Connect with Technical Engineers
          </Link>
        </div>
      </section>
    </div>
  );
}
