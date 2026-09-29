import React, { useState } from 'react';
import './Products.css';

const PRODUCTS = [
    {
        id: 'clean-rooms',
        badge: 'MINT',
        badgeClass: 'tag-mint',
        category: 'CLEAN ROOMS',
        title: 'Turnkey Clean Rooms',
        bubbleColor: 'green',
        bubbleIcon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
        ),
        summary: 'Modular cleanroom turnkey solutions, ISO 5 to ISO 8 validation, panels, doors & ceilings.',
        detail: 'Turnkey modular cleanroom construction conforming to ISO 14644 & cGMP. Complete engineering from concept to commissioning with airtight coving and validation.',
        points: [
            { label: 'Clean Room Turnkey Solution' },
            { label: 'Clean Room Validation' },
            { label: 'Flooring & Coving' }
        ]
    },
    {
        id: 'equipment',
        badge: 'RED',
        badgeClass: 'tag-red',
        category: 'CLEANROOM EQUIPMENT',
        title: 'Sterile Equipment & LAF',
        bubbleColor: 'purple',
        bubbleIcon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
        ),
        summary: 'Laminar airflow units, dynamic passboxes, sampling & dispensing sterile booths.',
        detail: 'Certified stainless steel (SS 304/316) contamination control equipment with magnehelic gauge differential pressure monitoring and DOP test ports.',
        points: [
            { label: 'Air Shower' },
            { label: 'Dynamic Passbox' },
            { label: 'Dispensing & Sampling Booth' },
            { label: 'Biosafety Cabinet' }
        ]
    },
    {
        id: 'panels-doors',
        badge: 'GREEN',
        badgeClass: 'tag-green',
        category: 'PANELS & DOORS',
        title: 'Clean Room Panels & Doors',
        bubbleColor: 'green',
        bubbleIcon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <line x1="9" y1="3" x2="9" y2="21"></line>
            </svg>
        ),
        summary: 'HPL wall panels, flush airtight doors, walk-on ceilings & double glazed view panels.',
        detail: 'High-pressure laminate (HPL) & powder-coated GI modular partitions with fire-retardant PUF/Rockwool insulation and flush silicone sealant joints.',
        points: [
            { label: 'HPL Wall Panels' },
            { label: 'Clean Room Doors & Frames' },
            { label: 'Walk On Ceiling Panels' },
            { label: 'Cleanroom View Panels' }
        ]
    },
    {
        id: 'modular-ot',
        badge: 'TEAL',
        badgeClass: 'tag-teal',
        category: 'MODULAR OT',
        title: 'Modular Operation Theatre',
        bubbleColor: 'blue',
        bubbleIcon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
        ),
        summary: 'Surgical OT pendants, surgeon control panels, laminar ceiling hoods & scrub sinks.',
        detail: 'Complete NABH & ISO 14644 compliant surgical suites with anti-static vinyl flooring, medical gas alarm pendants, and HEPA laminar air flow hoods.',
        points: [
            { label: 'Modular O.T. Turnkey Solutions' },
            { label: 'OT Laminar Flow Hood' },
            { label: 'Surgeon Control Panel' },
            { label: 'Surgical Scrub Sink' }
        ]
    },
    {
        id: 'hvac-systems',
        badge: 'BLUE',
        badgeClass: 'tag-blue',
        category: 'HVAC SYSTEMS',
        title: 'Precision AHU & Ducting',
        bubbleColor: 'blue',
        bubbleIcon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="12" y1="2" x2="12" y2="22"></line>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="m20 16-4-4 4-4M4 8l4 4-4 4M16 4l-4 4-4-4M8 20l4-4 4 4"></path>
            </svg>
        ),
        summary: 'Custom Air Handling Units, precision dehumidification, balancing dampers & GI ducting.',
        detail: 'Energy-efficient double skin AHUs with EC plug fans, thermal break profile, DX/chilled water cooling coils, and tight volume control dampers.',
        points: [
            { label: 'Air Handling Unit (AHU)' },
            { label: 'HEPA Terminal Box' },
            { label: 'HVAC Ducting & VCD' },
            { label: 'Return Air Risers' }
        ]
    },
    {
        id: 'air-filters',
        badge: 'PURPLE',
        badgeClass: 'tag-purple',
        category: 'AIR FILTERS',
        title: 'HEPA, ULPA & Pre-Filters',
        bubbleColor: 'orange',
        bubbleIcon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M7 3v18M12 3v18M17 3v18M3 12h18"></path>
            </svg>
        ),
        summary: 'Mini-pleat HEPA H13/H14, ULPA U15, pocket fine filters, and washable pre-filters.',
        detail: 'Direct in-house manufacturing of EN 1822 / ISO 29463 certified filters tested with individual efficiency scan test reports.',
        points: [
            { label: 'Minipleat HEPA (Gasket Seal)' },
            { label: 'Minipleat HEPA (Gel Seal)' },
            { label: 'Pre & Fine Filters' },
            { label: 'Dust Filter Cartridge' }
        ]
    },
    {
        id: 'amc-services',
        badge: 'AMBER',
        badgeClass: 'tag-amber',
        category: 'AMC SERVICES',
        title: 'Annual Maintenance & Validation',
        bubbleColor: 'orange',
        bubbleIcon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
        ),
        summary: 'DOP filter testing, particle counting validation, airflow balancing & certified AMC.',
        detail: 'Scheduled preventive cleanroom maintenance contracts, calibrated instrument testing (particle count, velocity, recovery), and emergency replacement spares.',
        points: [
            { label: 'Clean Room Validation' },
            { label: 'DOP Integrity Testing' },
            { label: 'AMC Contracts & Spares' }
        ]
    },
    {
        id: 'lab-furniture',
        badge: 'CYAN',
        badgeClass: 'tag-cyan',
        category: 'LAB FURNITURE',
        title: 'Laboratory Furniture & Casework',
        bubbleColor: 'blue',
        bubbleIcon: (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 8 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path>
            </svg>
        ),
        summary: 'Anti-corrosive chemical workbenches, fume hood extraction & PCR sterile cabinets.',
        detail: 'Modular chemical-resistant laboratory casework, epoxy worktops, reagent racks, laboratory fume hoods, and sterile PCR laminar cabinets.',
        points: [
            { label: 'Fume Hood Cabinet for Lab' },
            { label: 'PCR Cabinet for Lab' },
            { label: 'Cleanroom Furniture & Casework' }
        ]
    }
];

export const Products = ({ onOpenEnquiry }) => {
    const [expandedCardId, setExpandedCardId] = useState(null);

    const toggleCard = (id) => {
        setExpandedCardId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="cleanroom-products-section" id="products">
            <div className="section-wrapper">
                <div className="section-heading" style={{ textAlign: 'center' }}>
                    <span className="section-eyebrow">OUR SPECIALIZATION</span>
                    <h2>Products &amp; <span className="heading-green">Turnkey Services</span></h2>
                    <p>Explore our heavy-duty industrial cleanroom systems engineered for rigorous sector specifications.</p>
                </div>

                <div className="cleanroom-products-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.15rem' }}>
                    {PRODUCTS.map((product) => {
                        const isExpanded = expandedCardId === product.id;
                        return (
                            <div
                                key={product.id}
                                className={`cleanroom-card ${isExpanded ? 'is-desc-expanded' : ''}`}
                                style={{
                                    border: '1px solid var(--border-default)',
                                    borderRadius: '12px',
                                    padding: '1.1rem',
                                    background: '#ffffff',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative',
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.03)'
                                }}
                            >
                                {/* Top Badge */}
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                                    <div className={`cleanroom-card-icon-bubble ${product.bubbleColor}`} style={{ margin: 0 }}>
                                        {product.bubbleIcon}
                                    </div>
                                    <span
                                        style={{
                                            fontSize: '10px',
                                            fontWeight: '800',
                                            padding: '0.2rem 0.55rem',
                                            borderRadius: '999px',
                                            background: '#f0fdf4',
                                            color: '#00632e',
                                            border: '1px solid #bbf7d0',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.04em'
                                        }}
                                    >
                                        {product.badge}
                                    </span>
                                </div>

                                <span style={{ fontSize: '10px', fontWeight: '800', color: '#009ea9', letterSpacing: '0.06em', marginBottom: '0.25rem', textTransform: 'uppercase' }}>
                                    {product.category}
                                </span>
                                <h3 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-headline)', marginBottom: '0.45rem', lineHeight: '1.3' }}>
                                    {product.title}
                                </h3>
                                <p className="card-desc-summary" style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.45', marginBottom: '0.75rem', flexGrow: 1 }}>
                                    {product.summary}
                                </p>

                                <div
                                    className={`card-desc-full ${isExpanded ? 'is-expanded' : ''}`}
                                    style={{
                                        maxHeight: isExpanded ? '350px' : '0px',
                                        opacity: isExpanded ? 1 : 0,
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease',
                                        marginBottom: isExpanded ? '0.75rem' : '0'
                                    }}
                                >
                                    <p className="card-desc-detail" style={{ fontSize: '11px', background: '#f8fafc', padding: '0.5rem', borderRadius: '6px', border: '1px solid #e2e8f0', marginBottom: '0.45rem' }}>
                                        {product.detail}
                                    </p>
                                    <div className="product-category-points">
                                        <span className="points-heading">Direct Catalog Solutions:</span>
                                        <div className="cleanroom-card-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                                            {product.points.map((pt, pIdx) => (
                                                <button
                                                    key={pIdx}
                                                    type="button"
                                                    onClick={() => onOpenEnquiry && onOpenEnquiry('Products Grid', pt.label)}
                                                    className="product-point-link"
                                                    style={{
                                                        fontSize: '10.5px',
                                                        background: '#f8fafc',
                                                        border: '1px solid var(--border-default)',
                                                        borderRadius: '4px',
                                                        padding: '3px 7px',
                                                        cursor: 'pointer',
                                                        color: 'var(--brand-primary, #00632e)',
                                                        fontWeight: '600',
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '4px',
                                                        transition: 'all 0.15s ease'
                                                    }}
                                                    title={`Inquire about ${pt.label}`}
                                                >
                                                    <span>•</span>
                                                    <span>{pt.label}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="cleanroom-card-actions" style={{ display: 'flex', gap: '0.45rem', marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid var(--border-default)' }}>
                                    <button
                                        type="button"
                                        className="btn-card-desc btn-desc-toggle"
                                        aria-expanded={isExpanded}
                                        onClick={() => toggleCard(product.id)}
                                        style={{ flex: 1 }}
                                    >
                                        <span className="btn-toggle-text">
                                            {isExpanded ? 'Hide Desc' : 'View Description'}
                                        </span>
                                        <span className="btn-toggle-arrow">{isExpanded ? '▴' : '→'}</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn-card-curious"
                                        onClick={() => onOpenEnquiry && onOpenEnquiry('Products Grid', product.title)}
                                        style={{ flex: 1, background: '#00632e' }}
                                    >
                                        <span>Get a Quote</span>
                                        <span className="arrow-icon">↗</span>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Products;
