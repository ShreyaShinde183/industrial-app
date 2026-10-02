import React, { useState, useEffect, useRef } from 'react';
import './Hero.css';

const SLIDES = [
    'assets/hero-slide-1.jpg',
    'assets/hero-slide-2.jpg',
    'assets/hero-slide-3.jpg',
    'assets/hero-slide-4.jpg'
];

export const Hero = ({ onOpenEnquiry }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef(null);

    const startSlider = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, 3000);
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

    return (
        <section className="hero-section" id="hero">
            {/* Live Dynamic Background Slider */}
            <div className="hero-bg-slider" aria-hidden="true">
                {SLIDES.map((slideUrl, idx) => (
                    <div
                        key={slideUrl}
                        className={`hero-bg-slide ${currentSlide === idx ? 'is-active' : ''}`}
                        style={{ backgroundImage: `url('${slideUrl}')` }}
                    />
                ))}
                <div className="hero-bg-overlay"></div>
                <div className="hero-live-airflow">
                    <span className="airflow-stream stream-1"></span>
                    <span className="airflow-stream stream-2"></span>
                </div>
            </div>

            <div className="hero-corner-accent"></div>

            <div className="hero-container">
                <div className="hero-content">
                    <div className="spec-badge">
                        <span>Clean Room Creators &amp; Complete HVAC Solutions</span>
                    </div>

                    <h1 className="hero-headline">
                        CLEAN ROOM <br />
                        <span className="headline-red">CREATORS</span>
                    </h1>

                    <p className="hero-description">
                        MAP FILTERS INDIA PVT. LTD. is an established ISO 9001:2008 certified company, committed to providing complete turnkey clean room and HVAC solutions for pharmaceutical, chemical, research and allied industries across India.
                    </p>

                    <div className="hero-actions">
                        <a href="#products" className="btn-primary-red">
                            <span>Explore Our Products</span>
                            <span className="btn-icon-circle">→</span>
                        </a>
                        <button
                            type="button"
                            className="btn-secondary-navy"
                            onClick={() => onOpenEnquiry && onOpenEnquiry('Hero Action', 'General Inquiry')}
                        >
                            <span>Get a Quote</span>
                            <span className="search-icon">🔍</span>
                        </button>
                    </div>

                    {/* Proof Strip */}
                    <div className="hero-highlights">
                        <div className="highlight-item">
                            <span className="highlight-num">20+</span>
                            <span className="highlight-label">Years Experience</span>
                        </div>
                        <div className="highlight-divider"></div>
                        <div className="highlight-item">
                            <span className="highlight-num">ISO 9001:2008</span>
                            <span className="highlight-label">Quality Certified</span>
                        </div>
                        <div className="highlight-divider"></div>
                        <div className="highlight-item">
                            <span className="highlight-num">Pan-India</span>
                            <span className="highlight-label">Service Delivery</span>
                        </div>
                    </div>
                </div>

                {/* Slider pagination */}
                <div className="hero-slider-nav" aria-label="Hero slider pagination">
                    {SLIDES.map((_, idx) => (
                        <button
                            key={idx}
                            type="button"
                            className={`hero-dot ${currentSlide === idx ? 'is-active' : ''}`}
                            onClick={() => jumpToSlide(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                        >
                            <span className="dot-bar"></span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;

