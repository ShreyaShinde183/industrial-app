import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PRODUCT_DATA = [
  {
    category: 'Cleanrooms',
    title: 'Turnkey Modular Cleanrooms',
    tag: 'Turnkey Engineering',
    desc: 'Complete turnkey modular cleanrooms conforming to ISO 14644 & cGMP. Engineered from concept design, 3D modeling, HVAC sizing, and false ceiling panels down to validation.',
    points: ['ISO Class 5 (Class 100) to ISO Class 8 (Class 100,000)', 'Airtight antibacterial coving & epoxy/vinyl flooring', 'Complete IQ, OQ, PQ validation documentation']
  },
  {
    category: 'Equipment',
    title: 'Laminar Air Flow (LAF) Units',
    tag: 'Sterile Workstations',
    desc: 'Horizontal and Vertical Laminar Air Flow units designed for sterile product handling, microbiologic testing, and particle-free work environments.',
    points: ['SS 304 / SS 316 heavy gauge construction', 'H14 Grade HEPA filtration (99.997% @ 0.3μm)', 'Digital magnehelic differential pressure gauges']
  },
  {
    category: 'Equipment',
    title: 'Dynamic & Static Pass Boxes',
    tag: 'Material Transfer',
    desc: 'Pass boxes engineered to transfer materials between classified zones while preserving positive pressure and preventing cross-contamination.',
    points: ['Electromagnetic interlocking door mechanism', 'UV germicidal lamp with auto safety cutoff', 'Dynamic airflow with internal HEPA recirculation']
  },
  {
    category: 'Equipment',
    title: 'Dispensing & Sampling Booths',
    tag: 'Reverse Laminar Airflow',
    desc: 'Protects operators, environment, and materials during powder sampling, weighing, and dispensing processes in active pharmaceutical manufacturing.',
    points: ['Three-stage filtration (Pre, Fine, HEPA)', 'Continuous exhaust velocity regulation', 'Integrated digital DOP test ports']
  },
  {
    category: 'Equipment',
    title: 'Air Showers & Decontamination',
    tag: 'Personnel Entry',
    desc: 'High-velocity HEPA-filtered air jets dislodge particulate matter from personnel clothing before entry into high-grade cleanroom suites.',
    points: ['20-25 m/s jet nozzle discharge velocity', 'PLC controlled automatic operational cycle', 'Magnetic interlocks on cleanroom doors']
  },
  {
    category: 'Panels & Doors',
    title: 'Cleanroom Partition Panels & Doors',
    tag: 'Modular Architecture',
    desc: 'Flush-mounted pre-coated GI / SS modular panels insulated with high-density PUF or Rockwool, featuring airtight silicone seals.',
    points: ['Flush double-glazed vision glass panels', 'Airtight drop-down perimeter bottom seals', 'Heavy duty SS hardware & panic exit bars']
  },
  {
    category: 'Filtration',
    title: 'HEPA & ULPA Air Filters',
    tag: 'Air Filtration',
    desc: 'Precision micro-glass fiber filtration modules manufactured for critical air handling units, terminal filter housings, and sterile chambers.',
    points: ['Efficiencies up to 99.999% on 0.12 micron particles', 'Individually scan tested per EN 1822 standards', 'Anodized aluminum frame with hot-melt separators']
  },
  {
    category: 'Healthcare',
    title: 'Modular Operation Theatres (OT)',
    tag: 'Healthcare & Surgical',
    desc: 'State-of-the-art surgical suites featuring laminar airflow ceilings, anti-microbial wall claddings, and surgeon control panels.',
    points: ['HEPA laminar air flow distribution ceiling', 'Seamless anti-static conductive vinyl flooring', 'Integrated hermetically sealing sliding doors']
  }
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Cleanrooms', 'Equipment', 'Panels & Doors', 'Filtration', 'Healthcare'];

  const filteredProducts = selectedCategory === 'All'
    ? PRODUCT_DATA
    : PRODUCT_DATA.filter(item => item.category === selectedCategory);

  return (
    <div className="page-wrapper products-page">
      {/* 1. Header Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #0B1B3D 0%, #162a56 100%)',
        color: '#ffffff',
        padding: '3.5rem 1.5rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <span style={{ color: '#86efac', fontWeight: '700', fontSize: '0.85rem', letterSpacing: '0.08em' }}>PRODUCT CATALOG</span>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '800', marginTop: '0.5rem', color: '#ffffff' }}>
            Cleanroom Systems &amp; Contamination Control Equipment
          </h1>
          <p style={{ color: '#cbd5e1', fontSize: '1.1rem', marginTop: '1rem', lineHeight: '1.6' }}>
            Precision-engineered cleanroom components, sterile air equipment, and turnkey modular setups.
          </p>
        </div>
      </section>

      {/* 2. Filter Tabs & Products Grid */}
      <section style={{ padding: '3.5rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Category Filter Pills */}
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '0.6rem 1.25rem',
                borderRadius: '999px',
                border: selectedCategory === cat ? '2px solid #00632e' : '1px solid #cbd5e1',
                background: selectedCategory === cat ? '#00632e' : '#ffffff',
                color: selectedCategory === cat ? '#ffffff' : '#334155',
                fontWeight: '700',
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {filteredProducts.map((prod, idx) => (
            <div
              key={idx}
              style={{
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                background: '#ffffff',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden'
              }}
            >
              <div style={{ padding: '1.75rem', flex: '1', display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  display: 'inline-block',
                  alignSelf: 'flex-start',
                  background: 'rgba(0, 99, 46, 0.1)',
                  color: '#00632e',
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  padding: '0.25rem 0.65rem',
                  borderRadius: '4px',
                  marginBottom: '0.75rem'
                }}>
                  {prod.tag}
                </span>

                <h3 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#0B1B3D', marginBottom: '0.75rem' }}>
                  {prod.title}
                </h3>

                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  {prod.desc}
                </p>

                <div style={{ marginTop: 'auto', borderTop: '1px solid #f1f5f9', paddingTop: '1rem', marginBottom: '1.5rem' }}>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {prod.points.map((pt, pIdx) => (
                      <li key={pIdx} style={{ fontSize: '0.88rem', color: '#475569', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <span style={{ color: '#00632e', fontWeight: 'bold' }}>•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/contact"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    background: '#0B1B3D',
                    color: '#ffffff',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    fontWeight: '700',
                    fontSize: '0.95rem',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#00632e'}
                  onMouseLeave={(e) => e.target.style.background = '#0B1B3D'}
                >
                  Request Technical Quotation
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
