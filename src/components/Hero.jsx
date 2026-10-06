import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const HERO_SLIDES = [
    {
        bg: 'assets/hero-slide-1.jpg',
        badge: 'Turnkey Engineering • Critical Environments',
        titlePrefix: 'Clean Room',
        titleAccent: 'Turnkey',
        titleSuffix: 'Projects',
        chips: ['Turnkey Solutions', 'Wall Panels', 'Ceiling Systems', 'Validation'],
        description: 'MAP FILTERS INDIA PVT. LTD. is an ISO 9001:2015, ISO 14001, and ZED Bronze certified manufacturer. We design, fabricate, install, and validate turnkey modular cleanrooms conforming to ISO 14644 & cGMP standards.',
        showcaseImg: 'assets/product-cleanroom-systems.jpg',
        showcaseTag: 'ISO 14644 Validated',
        showcaseTitle: 'Turnkey Modular Cleanrooms'
    },
    {
        bg: 'assets/hero-slide-2.jpg',
        badge: 'Healthcare & Hospital Infrastructure',
        titlePrefix: 'Modular',
        titleAccent: 'Operation',
        titleSuffix: 'Theatre',
        chips: ['Surgeon Panels', 'Laminar Flow Ceilings', 'OT Pendants', 'Scrub Sinks'],
        description: 'Advanced surgical suites engineered to NABH and international sterile protocols. Featuring seamless anti-microbial wall panels, laminar airflow hoods, and integrated surgeon control panels.',
        showcaseImg: 'assets/official-ot-laf.jpg',
        showcaseTag: 'NABH Compliant',
        showcaseTitle: 'Surgical Suite Laminar Flow'
    },
    {
        bg: 'assets/hero-slide-3.jpg',
        badge: 'High-Efficiency Micro Filtration',
        titlePrefix: 'Air',
        titleAccent: 'Filters &',
        titleSuffix: 'HEPA Systems',
        chips: ['Pre Filter G4', 'Fine Filter F7/F9', 'HEPA H13/H14', 'Basket Filter'],
        description: 'Manufactured in our 25,000+ sq. ft. Bhiwandi facility. 100% individually leak-tested using DOP/PAO aerosol photometers according to EN 1822 / ISO 29463 to ensure 99.997% efficiency at 0.3 microns.',
        showcaseImg: 'assets/product-filters-systems.jpg',
        showcaseTag: '99.997% @ 0.3μm',
        showcaseTitle: 'HEPA & ULPA Filtration'
    },
    {
        bg: 'assets/hero-slide-4.jpg',
        badge: 'HVAC Engineering & Thermal Systems',
        titlePrefix: 'Air Handling',
        titleAccent: 'Unit (AHU)',
        titleSuffix: 'Solutions',
        chips: ['Double Skin AHU', 'Chilled Water Coils', 'Ducting', 'VCD Dampers'],
        description: 'Precision temperature, humidity, and positive/negative room pressure control systems. Double skin AHUs with EC fans and thermal break profiles built for contamination control.',
        showcaseImg: 'assets/official-ahu.jpg',
        showcaseTag: 'Double Skin AHU',
        showcaseTitle: 'Thermal HVAC Engineering'
    }
];

export const Hero = ({ onOpenEnquiry }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef(null);

    const startSlider = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        }, 5000);
    };

    useEffect(() => {
        startSlider();

        const handleVisibilityChange = () => {
            if (document.hidden) {
                if (intervalRef.current) clearInterval(intervalRef.current);
            } else {
                startSlider();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    const jumpToSlide = (index) => {
        setCurrentSlide(index);
        startSlider();
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
        startSlider();
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
        startSlider();
    };

    const activeSlide = HERO_SLIDES[currentSlide];

    return (
        <section className="hero-section" id="hero">
            {/* Live Dynamic Background Slider with Shimmer Airflow */}
            <div className="hero-bg-slider" aria-hidden="true">
                {HERO_SLIDES.map((slide, idx) => (
                    <div
                        key={idx}
                        className={`hero-bg-slide ${currentSlide === idx ? 'is-active' : ''}`}
                        style={{ backgroundImage: `url('${slide.bg}')` }}
                    />
                ))}
                <div className="hero-bg-overlay"></div>
                <div className="hero-live-airflow">
                    <span className="airflow-stream stream-1"></span>
                    <span className="airflow-stream stream-2"></span>
                </div>
            </div>

            <div className="hero-container">
                <div className="hero-layout-grid">
                    {/* Left Column: Dynamic Typography, Chips, Dual CTA & Trust Strip */}
                    <div className="hero-text-col">
                        <div className="hero-badge-pill">
                            <span className="pulse-dot-green"></span>
                            <span>{activeSlide.badge}</span>
                        </div>

                        <h1 className="hero-main-title">
                            {activeSlide.titlePrefix}{' '}
                            <span className="hero-title-accent">{activeSlide.titleAccent}</span>{' '}
                            {activeSlide.titleSuffix}
                        </h1>

                        {/* Sub-product Chips Strip */}
                        <div className="hero-chips-row">
                            {activeSlide.chips.map((chip, idx) => (
                                <span key={idx} className="hero-chip">
                                    <span className="chip-dot"></span>
                                    {chip}
                                </span>
                            ))}
                        </div>

                        <p className="hero-description-text">
                            {activeSlide.description}
                        </p>

                        {/* Dual Action Buttons (Red 'Get a Quote' + Green 'Explore Solutions') */}
                        <div className="hero-actions-row">
                            <button
                                type="button"
                                className="fly-plane-btn fly-plane-btn--hero"
                                onClick={() => onOpenEnquiry && onOpenEnquiry('Hero Action', `${activeSlide.titlePrefix} ${activeSlide.titleAccent} ${activeSlide.titleSuffix}`)}
                            >
                                <span className="fly-plane-icon">✈</span>
                                <span>Get a Quote</span>
                            </button>

                            <a href="#products" className="btn-explore-green">
                                <span>Explore Solutions</span>
                                <span className="explore-arrow">↗</span>
                            </a>
                        </div>

                        {/* Trust Badge Strip */}
                        <div className="hero-trust-strip">
                            <div className="trust-badge-item">
                                <span className="trust-icon">🛡️</span>
                                <span className="trust-text">ISO 9001:2015 &amp; ZED Certified</span>
                            </div>
                            <div className="trust-sep">•</div>
                            <div className="trust-badge-item">
                                <span className="trust-icon">🏭</span>
                                <span className="trust-text">25,000+ Sq. Ft. Bhiwandi Plant</span>
                            </div>
                            <div className="trust-sep">•</div>
                            <div className="trust-badge-item">
                                <span className="trust-icon">✔️</span>
                                <span className="trust-text">100% PAO / DOP Leak-Tested</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Floating Glassmorphic Showcase Card */}
                    <div className="hero-showcase-col">
                        <div className="hero-glass-card">
                            <div className="glass-card-header">
                                <div className="asset-status-pill">
                                    <span className="live-ping-dot"></span>
                                    <span className="asset-label">CERTIFIED ASSET</span>
                                </div>
                                <div className="asset-metric-badge">
                                    {activeSlide.showcaseTag}
                                </div>
                            </div>

                            <div className="glass-card-visual">
                                <img
                                    src={activeSlide.showcaseImg}
                                    alt={activeSlide.showcaseTitle}
                                    className="glass-product-image"
                                />
                            </div>

                            <div className="glass-card-footer">
                                <div className="glass-footer-meta">
                                    <span className="glass-factory-tag">MAPFIL Engineering</span>
                                    <h4 className="glass-product-title">{activeSlide.showcaseTitle}</h4>
                                </div>
                                <div className="glass-verified-stamp">
                                    <span className="stamp-icon">✓</span>
                                    <span className="stamp-text">Certified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slider Controls (Previous / Next Arrows + Bottom Indicator Dots) */}
                <div className="hero-controls-bar">
                    <button
                        type="button"
                        className="hero-arrow-btn"
                        onClick={prevSlide}
                        aria-label="Previous Slide"
                    >
                        ‹
                    </button>

                    <div className="hero-dots-group" aria-label="Hero carousel navigation">
                        {HERO_SLIDES.map((_, idx) => (
                            <button
                                key={idx}
                                type="button"
                                className={`hero-nav-dot ${currentSlide === idx ? 'is-active' : ''}`}
                                onClick={() => jumpToSlide(idx)}
                                aria-label={`Slide ${idx + 1}`}
                            >
                                <span className="dot-fill"></span>
                            </button>
                        ))}
                    </div>

                    <button
                        type="button"
                        className="hero-arrow-btn"
                        onClick={nextSlide}
                        aria-label="Next Slide"
                    >
                        ›
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
