import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
    COUNTRIES,
    INDUSTRIES,
    PRODUCT_CATEGORIES,
    CERTIFICATIONS,
    LOCATIONS
} from '../data/locations';
import FilterSelect from './FilterSelect';
import LocationCard from './LocationCard';
import './MapFilters.css';

/**
 * MAP FILTERS MapFilters Component
 * Two-column desktop / single-column mobile layout
 * Real-time filter logic, Leaflet map integration, and custom markers
 */
export const MapFilters = ({ onLocationSelect }) => {
    // Filter states
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedIndustry, setSelectedIndustry] = useState('');
    const [selectedProduct, setSelectedProduct] = useState('');
    const [selectedCertification, setSelectedCertification] = useState('');

    // Applied filter values (triggered on "Apply Filters")
    const [appliedFilters, setAppliedFilters] = useState({
        search: '',
        country: '',
        state: '',
        city: '',
        industry: '',
        product: '',
        certification: ''
    });

    // Selected location card preview
    const [activeLocation, setActiveLocation] = useState(null);

    // Map container & Leaflet instance refs
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    const markersLayerRef = useRef(null);

    // Dynamic states based on selected country
    const availableStates = useMemo(() => {
        if (!selectedCountry) return [];
        const countryObj = COUNTRIES.find((c) => c.name === selectedCountry);
        return countryObj ? countryObj.states : [];
    }, [selectedCountry]);

    // Dynamic cities based on selected state or country
    const availableCities = useMemo(() => {
        if (!selectedCountry) return [];
        const countryObj = COUNTRIES.find((c) => c.name === selectedCountry);
        if (!countryObj) return [];

        if (selectedState) {
            const stateObj = countryObj.states.find((s) => s.name === selectedState);
            return stateObj ? stateObj.cities : [];
        }

        // Return all cities under this country if state not chosen
        return countryObj.states.flatMap((s) => s.cities);
    }, [selectedCountry, selectedState]);

    // Reset state & city when country changes
    const handleCountryChange = (country) => {
        setSelectedCountry(country);
        setSelectedState('');
        setSelectedCity('');
    };

    // Reset city when state changes
    const handleStateChange = (state) => {
        setSelectedState(state);
        setSelectedCity('');
    };

    // Handle "Apply Filters"
    const handleApplyFilters = (e) => {
        if (e) e.preventDefault();
        setAppliedFilters({
            search: searchQuery.trim().toLowerCase(),
            country: selectedCountry,
            state: selectedState,
            city: selectedCity,
            industry: selectedIndustry,
            product: selectedProduct,
            certification: selectedCertification
        });
    };

    // Handle "Clear Filters"
    const handleClearFilters = () => {
        setSearchQuery('');
        setSelectedCountry('');
        setSelectedState('');
        setSelectedCity('');
        setSelectedIndustry('');
        setSelectedProduct('');
        setSelectedCertification('');
        setActiveLocation(null);

        setAppliedFilters({
            search: '',
            country: '',
            state: '',
            city: '',
            industry: '',
            product: '',
            certification: ''
        });
    };

    // Filtered locations computation
    const filteredLocations = useMemo(() => {
        return LOCATIONS.filter((loc) => {
            // Search Query: checks name, country, state, city, industry
            if (appliedFilters.search) {
                const term = appliedFilters.search;
                const matchName = loc.name.toLowerCase().includes(term);
                const matchCountry = loc.country.toLowerCase().includes(term);
                const matchState = loc.state.toLowerCase().includes(term);
                const matchCity = loc.city.toLowerCase().includes(term);
                const matchIndustry = loc.industry.toLowerCase().includes(term);
                if (!matchName && !matchCountry && !matchState && !matchCity && !matchIndustry) {
                    return false;
                }
            }

            // Country Filter
            if (appliedFilters.country && loc.country !== appliedFilters.country) {
                return false;
            }

            // State Filter
            if (appliedFilters.state && loc.state !== appliedFilters.state) {
                return false;
            }

            // City Filter
            if (appliedFilters.city && loc.city !== appliedFilters.city) {
                return false;
            }

            // Industry Filter
            if (appliedFilters.industry && loc.industry !== appliedFilters.industry) {
                return false;
            }

            // Product Category Filter
            if (appliedFilters.product && loc.productCategory !== appliedFilters.product) {
                return false;
            }

            // Certification Filter
            if (appliedFilters.certification && loc.certification !== appliedFilters.certification) {
                return false;
            }

            return true;
        });
    }, [appliedFilters]);

    // Initialize Leaflet Map
    useEffect(() => {
        if (!mapRef.current) return;
        if (typeof window === 'undefined') return;

        const L = window.L;
        if (!L) {
            console.warn('Leaflet (window.L) is not loaded yet.');
            return;
        }

        if (!mapInstance.current) {
            // Center around Middle East & India initially
            const map = L.map(mapRef.current, {
                center: [23.5, 60.0],
                zoom: 4,
                scrollWheelZoom: false
            });

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | MAP FILTERS INDIA PVT. LTD.',
                maxZoom: 18
            }).addTo(map);

            markersLayerRef.current = L.featureGroup().addTo(map);
            mapInstance.current = map;
        }
    }, []);

    // Update markers when filteredLocations change
    useEffect(() => {
        const L = window.L;
        const map = mapInstance.current;
        const layer = markersLayerRef.current;
        if (!L || !map || !layer) return;

        layer.clearLayers();

        if (filteredLocations.length === 0) return;

        filteredLocations.forEach((loc) => {
            // Custom MAP FILTERS marker icon
            const customIcon = L.divIcon({
                className: 'custom-leaflet-marker',
                html: `<div class="mapfil-map-pin ${loc.isHeadquarters ? 'pin-hq' : ''}" title="${loc.name}"></div>`,
                iconSize: [32, 32],
                iconAnchor: [16, 32],
                popupAnchor: [0, -32]
            });

            const marker = L.marker([loc.lat, loc.lng], { icon: customIcon });

            // Popup with MAP FILTERS location card markup
            const popupHtml = `
                <div class="mapfil-location-card">
                    <div class="loc-card-header">
                        <span class="loc-badge-type">${loc.type}</span>
                        ${loc.isHeadquarters ? '<span class="loc-badge-hq">Headquarters</span>' : ''}
                    </div>
                    <h4 class="loc-name">${loc.name}</h4>
                    <p class="loc-city-country">${loc.city}, ${loc.country}</p>
                    <div class="loc-details-grid">
                        <div class="loc-detail-row">
                            <span class="loc-label">Industry:</span>
                            <span class="loc-value">${loc.industry}</span>
                        </div>
                        <div class="loc-detail-row">
                            <span class="loc-label">Type:</span>
                            <span class="loc-value">${loc.type}</span>
                        </div>
                    </div>
                    <p class="loc-address">📍 ${loc.address}</p>
                    <div class="loc-card-footer">
                        <button class="btn-view-details" onclick="window.mapfilSelectLocation && window.mapfilSelectLocation('${loc.id}')">
                            View Details
                        </button>
                        <a href="tel:${loc.phone}" class="btn-loc-call" title="Call">📞</a>
                    </div>
                </div>
            `;

            marker.bindPopup(popupHtml);

            marker.on('click', () => {
                setActiveLocation(loc);
                if (onLocationSelect) onLocationSelect(loc);
            });

            layer.addLayer(marker);
        });

        // Fit map view to visible locations with padding
        try {
            const bounds = layer.getBounds();
            if (bounds.isValid()) {
                map.fitBounds(bounds, { padding: [40, 40], maxZoom: 13 });
            }
        } catch (err) {
            console.error(err);
        }
    }, [filteredLocations, onLocationSelect]);

    // Global hook for popup click handler
    useEffect(() => {
        window.mapfilSelectLocation = (locId) => {
            const found = LOCATIONS.find((l) => l.id === locId);
            if (found) {
                setActiveLocation(found);
                if (typeof window.openQuoteModal === 'function') {
                    window.openQuoteModal(`Cleanroom Hub: ${found.name}`);
                }
            }
        };

        return () => {
            delete window.mapfilSelectLocation;
            };
    }, []);

    return (
        <section className="mapfil-map-filters-section" id="find-us">
            <div className="map-filters-container">

                {/* Section Header */}
                <div className="map-section-header">
                    <div className="map-header-accent">
                        <span className="accent-dot-red" aria-hidden="true"></span>
                        <span>PAN-INDIA & REGIONAL CLEANROOM NETWORK</span>
                        <span className="accent-dot-blue" aria-hidden="true"></span>
                    </div>
                    <h2 className="map-section-title">Find MAP FILTERS Near You</h2>
                    <p className="map-section-subtitle">
                        Connect with our cleanroom design, HVAC installation, and maintenance hubs across India and allied markets.
                    </p>
                </div>

                {/* Desktop Two-Column / Mobile Stacked Layout */}
                <div className="map-filters-grid">

                    {/* Filter Panel (Left) */}
                    <aside className="filter-panel-card" aria-label="Location search filters">
                        <div className="panel-title-wrap">
                            <h3 className="panel-title">Filter Locations</h3>
                            <span className="results-badge">
                                {filteredLocations.length} Found
                            </span>
                        </div>

                        <form onSubmit={handleApplyFilters} className="filter-form">
                            {/* 1. Search Location */}
                            <div className="filter-group">
                                <label htmlFor="search-loc" className="filter-label">
                                    Search Location
                                </label>
                                <div className="search-wrapper">
                                    <input
                                        type="text"
                                        id="search-loc"
                                        className="search-input"
                                        placeholder="Search location..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        aria-label="Search location by name, city, state, or industry"
                                    />
                                    {searchQuery && (
                                        <button
                                            type="button"
                                            className="search-clear-btn"
                                            onClick={() => setSearchQuery('')}
                                            aria-label="Clear search"
                                        >
                                            ✕
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* 2. Country */}
                            <FilterSelect
                                id="filter-country"
                                label="Country"
                                value={selectedCountry}
                                onChange={handleCountryChange}
                                options={COUNTRIES}
                                defaultOption="All Countries"
                            />

                            {/* 3. State (dependent on country) */}
                            <FilterSelect
                                id="filter-state"
                                label="State / Province"
                                value={selectedState}
                                onChange={handleStateChange}
                                options={availableStates}
                                defaultOption="All States"
                                disabled={!selectedCountry || availableStates.length === 0}
                            />

                            {/* 4. City */}
                            <FilterSelect
                                id="filter-city"
                                label="City"
                                value={selectedCity}
                                onChange={setSelectedCity}
                                options={availableCities}
                                defaultOption="All Cities"
                                disabled={availableCities.length === 0}
                            />

                            {/* 5. Industry */}
                            <FilterSelect
                                id="filter-industry"
                                label="Industry"
                                value={selectedIndustry}
                                onChange={setSelectedIndustry}
                                options={INDUSTRIES}
                                defaultOption="All Industries"
                            />

                            {/* 6. Product Category */}
                            <FilterSelect
                                id="filter-product"
                                label="Product Category"
                                value={selectedProduct}
                                onChange={setSelectedProduct}
                                options={PRODUCT_CATEGORIES}
                                defaultOption="All Products"
                            />

                            {/* 7. Certification */}
                            <FilterSelect
                                id="filter-cert"
                                label="Certification"
                                value={selectedCertification}
                                onChange={setSelectedCertification}
                                options={CERTIFICATIONS}
                                defaultOption="All Certifications"
                            />

                            {/* Actions */}
                            <div className="filter-buttons-wrap">
                                <button type="submit" className="btn-apply-filters">
                                    Apply Filters
                                </button>
                                <button
                                    type="button"
                                    className="btn-clear-filters"
                                    onClick={handleClearFilters}
                                >
                                    Clear Filters
                                </button>
                            </div>
                        </form>
                    </aside>

                    {/* Map Display (Right) */}
                    <div className="map-display-card">
                        <div className="map-toolbar">
                            <div className="map-status-info">
                                <span className="map-status-dot"></span>
                                <span>Interactive Network Map</span>
                            </div>
                            <span>Click any pin to inspect location card</span>
                        </div>

                        {/* Leaflet Map Mount Point */}
                        <div
                            ref={mapRef}
                            className="map-canvas-container"
                            aria-label="Interactive Leaflet Map showing MAP FILTERS cleanroom locations and project network"
                        ></div>

                        {/* Optional floating location card preview on mobile/click */}
                        {activeLocation && (
                            <div className="active-location-overlay">
                                <LocationCard
                                    location={activeLocation}
                                    onViewDetails={(loc) => {
                                        if (typeof window.openQuoteModal === 'function') {
                                            window.openQuoteModal(`Location Inquiry: ${loc.name}`);
                                        }
                                    }}
                                />
                            </div>
                        )}
                    </div>

                </div>

            </div>
        </section>
    );
};

export default MapFilters;
