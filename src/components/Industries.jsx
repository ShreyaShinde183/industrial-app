import React, { useRef, useState, useEffect } from 'react';
import './Industries.css';

const INDUSTRIES = [
    {
        title: 'Pharmaceutical Industry',
        image: 'assets/applications/app-pharma.jpg'
    },
    {
        title: 'Chemical Research Laboratory',
        image: 'assets/applications/app-chemical.jpg'
    },
    {
        title: 'Electronic Industry',
        image: 'assets/applications/app-electronic.jpg'
    },
    {
        title: 'Semi-Conductor Production',
        image: 'assets/applications/app-semiconductor.jpg'
    },
    {
        title: 'Food Processing Industry',
        image: 'assets/applications/app-food.jpg'
    },
    {
        title: 'Hospital Segments',
        image: 'assets/applications/app-hospital.jpg'
    },
    {
        title: 'Aeronautical',
        image: 'assets/applications/app-aeronautical.jpg'
    },
    {
        title: 'Energy Power Sector',
        image: 'assets/applications/app-energy.jpg'
    },
    {
        title: 'Marine & Ship',
        image: 'assets/applications/app-marine.jpg'
    }
];

export const Industries = () => {
    const trackRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToIndex = (index) => {
        if (!trackRef.current) return;
        const track = trackRef.current;
        const card = track.children[index];
        if (card) {
            track.scrollTo({
                left: card.offsetLeft - track.offsetLeft,
                behavior: 'smooth'
            });
            setActiveIndex(index);
        }
    };

    const handlePrev = () => {
        const newIndex = activeIndex === 0 ? INDUSTRIES.length - 1 : activeIndex - 1;
        scrollToIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = (activeIndex + 1) % INDUSTRIES.length;
        scrollToIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => {
                const next = (prev + 1) % INDUSTRIES.length;
                if (trackRef.current) {
                    const card = trackRef.current.children[next];
                    if (card) {
                        trackRef.current.scrollTo({
                            left: card.offsetLeft - trackRef.current.offsetLeft,
                            behavior: 'smooth'
                        });
                    }
                }
                return next;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="industries-cleanroom-section" id="industries">
            <div className="section-wrapper">
                <div className="section-heading industries-heading" style={{ textAlign: 'center', margin: '0 auto 1.75rem auto', maxWidth: '780px' }}>
                    <span className="section-eyebrow">SECTORS &amp; VERTICALS</span>
                    <h2>Sectors &amp; Verticals <span className="heading-green">We Serve</span></h2>
                    <p>Tailored cleanroom and environmental control solutions engineered to meet exacting sector regulations.</p>
                </div>

                <div className="industries-carousel-wrapper">
                    <div
                        className="industries-cleanroom-track"
                        ref={trackRef}
                        role="region"
                        aria-label="Industries Carousel Track"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {INDUSTRIES.map((ind, idx) => (
                            <div key={idx} className="industry-cleanroom-card">
                                <div className="ind-app-img-wrap">
                                    <img src={ind.image} alt={ind.title} className="ind-app-img" loading="lazy" />
                                </div>
                                <h3>{ind.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Carousel Controls & Pagination Dots Centered in Middle */}
                <div className="industries-carousel-controls-bar">
                    <button
                        type="button"
                        className="carousel-nav-btn"
                        onClick={handlePrev}
                        aria-label="Previous Industries"
                    >
                        <span aria-hidden="true">←</span>
                    </button>

                    <div className="industries-carousel-dots" aria-label="Industries Carousel Pagination">
                        {INDUSTRIES.map((_, idx) => (
                            <button
                                key={idx}
                                type="button"
                                className={`ind-dot ${activeIndex === idx ? 'is-active' : ''}`}
                                onClick={() => scrollToIndex(idx)}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        className="carousel-nav-btn"
                        onClick={handleNext}
                        aria-label="Next Industries"
                    >
                        <span aria-hidden="true">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Industries;

