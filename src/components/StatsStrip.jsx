import React from 'react';
import './StatsStrip.css';

const STATS_DATA = [
    {
        value: '20+',
        title: 'Years Engineering Excellence',
        desc: 'Established in 2003 with Pan-India delivery',
        highlight: false
    },
    {
        value: '500+',
        title: 'Turnkey Projects Delivered',
        desc: 'Pharma, Biotech, Electronics & Healthcare',
        highlight: false
    },
    {
        value: '25,000+',
        title: 'Sq. Ft. Manufacturing Facility',
        desc: 'Advanced fabrication in Bhiwandi, Maharashtra',
        highlight: true
    },
    {
        value: '99.997%',
        title: 'HEPA Filtration Efficiency',
        desc: 'PAO / DOP Aerosol Leak-Tested @ 0.3 Microns',
        highlight: false
    }
];

export const StatsStrip = () => {
    return (
        <section className="stats-counter-strip" aria-label="MAP FILTERS Key Metrics">
            <div className="stats-container">
                <div className="stats-grid">
                    {STATS_DATA.map((item, idx) => (
                        <div key={idx} className={`stat-card ${item.highlight ? 'stat-card--featured' : ''}`}>
                            <div className="stat-value-row">
                                <span className="stat-number">{item.value}</span>
                            </div>
                            <h3 className="stat-title">{item.title}</h3>
                            <p className="stat-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsStrip;

