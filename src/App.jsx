import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import About from './components/About';
import CertificationsMatrix from './components/CertificationsMatrix';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import TurnkeySolutions from './components/TurnkeySolutions';
import Industries from './components/Industries';
import B2BQuoteStrip from './components/B2BQuoteStrip';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EnquiryModal from './components/EnquiryModal';
import ProjectModal from './components/ProjectModal';
import FloatingWidgets from './components/FloatingWidgets';

export function App() {
    const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
    const [enquirySource, setEnquirySource] = useState("Get a Quote");
    const [enquiryProduct, setEnquiryProduct] = useState('');

    const [isProjectOpen, setIsProjectOpen] = useState(false);
    const [projectSource, setProjectSource] = useState('Premium CTA');

    const handleOpenEnquiry = (source = "Get a Quote", product = '') => {
        setEnquirySource(source);
        setEnquiryProduct(product);
        setIsEnquiryOpen(true);
    };

    const handleCloseEnquiry = () => {
        setIsEnquiryOpen(false);
        setEnquiryProduct('');
    };

    const handleOpenProject = (source = 'Premium CTA') => {
        setProjectSource(source);
        setIsProjectOpen(true);
    };

    const handleCloseProject = () => {
        setIsProjectOpen(false);
    };

    // Global bridge so Google Maps InfoWindows or external buttons can trigger modals seamlessly
    useEffect(() => {
        window.openQuoteModal = (source, product) => {
            handleOpenEnquiry(source || "Get a Quote", product || '');
        };
        window.openProjectModal = (source) => {
            handleOpenProject(source || 'Premium CTA');
        };

        return () => {
            delete window.openQuoteModal;
            delete window.openProjectModal;
        };
    }, []);

    return (
        <div className="app-root">
            {/* Top Utility Bar (Direct Contact & ISO/ZED Pills) */}
            <TopBar onOpenEnquiry={handleOpenEnquiry} />

            {/* Sticky Header Navigation */}
            <Header onOpenEnquiry={handleOpenEnquiry} />

            <main>
                {/* 1. Hero Section with Dynamic Slides & Certified Showcase Card */}
                <Hero onOpenEnquiry={handleOpenEnquiry} />

                {/* 2. Key Performance Metrics Strip */}
                <StatsStrip />

                {/* 3. About Us Section */}
                <About />

                {/* 4. Certifications & Quality Regulatory Matrix */}
                <CertificationsMatrix />

                {/* 5. Why Choose MAP FILTERS? (Advantage Cards) */}
                <WhyChooseUs />

                {/* 6. Products & Turnkey Services */}
                <Products onOpenEnquiry={handleOpenEnquiry} />

                {/* 7. Complete Cleanroom & HVAC Delivery Flow */}
                <TurnkeySolutions />

                {/* 8. Industries We Serve (Interactive Carousel) */}
                <Industries />

                {/* 9. High-Conversion B2B Engineering Quotation Strip */}
                <B2BQuoteStrip onOpenEnquiry={handleOpenEnquiry} />

                {/* 10. Contact Section (Integrated MapFilters Network, Branches & CTA) */}
                <Contact
                    onOpenEnquiry={handleOpenEnquiry}
                    onOpenProject={handleOpenProject}
                />
            </main>

            {/* 11. Main Footer */}
            <Footer onOpenEnquiry={handleOpenEnquiry} />

            {/* Modals & Floating Action Widgets */}
            <EnquiryModal
                isOpen={isEnquiryOpen}
                onClose={handleCloseEnquiry}
                source={enquirySource}
                product={enquiryProduct}
            />

            <ProjectModal
                isOpen={isProjectOpen}
                onClose={handleCloseProject}
                source={projectSource}
            />

            <FloatingWidgets />
        </div>
    );
}

export default App;
