import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import TurnkeySolutions from './components/TurnkeySolutions';
import Industries from './components/Industries';
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
            {/* 1. Header Navigation */}
            <Header onOpenEnquiry={handleOpenEnquiry} />

            <main>
                {/* 2. Hero Section with Centered Layout & Dynamic Airflow */}
                <Hero onOpenEnquiry={handleOpenEnquiry} />

                {/* 3. About Us Section */}
                <About />

                {/* 4. Why Choose MAP FILTERS? (Advantage Cards) */}
                <WhyChooseUs />

                {/* 5. Products & Turnkey Services */}
                <Products onOpenEnquiry={handleOpenEnquiry} />

                {/* 6. Complete Cleanroom & HVAC Delivery Flow */}
                <TurnkeySolutions />

                {/* 7. Industries We Serve (Interactive Carousel) */}
                <Industries />

                {/* 8. Contact Section (Integrated MapFilters Network, Branches & CTA) */}
                <Contact
                    onOpenEnquiry={handleOpenEnquiry}
                    onOpenProject={handleOpenProject}
                />
            </main>

            {/* 9. Pre-Footer Teal Banner & Main Footer */}
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
