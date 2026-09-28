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
 * MAP FILTERS Google Maps Component
 * - Google Maps JavaScript API integration
 * - Dynamic script loader (with .env or prop API key support)
 * - Multi-criteria filter engine (Search, Country, State, City, Industry, Product, Cert)
 * - Custom brand markers (Crimson for HQ, Emerald for Regional Hubs)
 * - Dynamic bounds framing & interactive InfoWindows
 */
export const MapFilters = ({ onLocationSelect, apiKey }) => {
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

    // Selected location preview
    const [activeLocation, setActiveLocation] = useState(null);
    const [mapError, setMapError] = useState(null);
    const [isMapReady, setIsMapReady] = useState(false);

    // Map container & Google Maps refs
    const mapRef = useRef(null);
    const mapInstance = useRef(null);
    const markersRef = useRef([]);
    const infoWindowRef = useRef(null);

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

            if (appliedFilters.country && loc.country !== appliedFilters.country) return false;
            if (appliedFilters.state && loc.state !== appliedFilters.state) return false;
            if (appliedFilters.city && loc.city !== appliedFilters.city) return false;
            if (appliedFilters.industry && loc.industry !== appliedFilters.industry) return false;
            if (appliedFilters.product && loc.productCategory !== appliedFilters.product) return false;
            if (appliedFilters.certification && loc.certification !== appliedFilters.certification) return false;

            return true;
        });
    }, [appliedFilters]);

    // 1. Load Google Maps JavaScript API
    useEffect(() => {
        let isMounted = true;

        const loadGoogleMapsScript = () => {
            if (window.google && window.google.maps) {
                if (isMounted) setIsMapReady(true);
                return;
            }

            const existingScript = document.getElementById('google-maps-api-script');
            if (existingScript) {
                existingScript.addEventListener('load', () => {
                    if (isMounted) setIsMapReady(true);
                });
                existingScript.addEventListener('error', () => {
                    if (isMounted) setMapError('Failed to load Google Maps script.');
                });
                return;
            }

            const key = apiKey || (typeof import.meta !== 'undefined' && import.meta.env?.VITE_GOOGLE_MAPS_API_KEY) || '';
            const script = document.createElement('script');
            script.id = 'google-maps-api-script';
            script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;
            script.async = true;
            script.defer = true;
            script.onload = () => {
                if (isMounted) setIsMapReady(true);
            };
            script.onerror = () => {
                if (isMounted) setMapError('Google Maps failed to load. Please verify your connection or API key.');
            };

            document.head.appendChild(script);
        };

        loadGoogleMapsScript();

        return () => {
            isMounted = false;
        };
    }, [apiKey]);

    // 2. Initialize Google Map Instance
    useEffect(() => {
        if (!isMapReady || !mapRef.current) return;
        if (!window.google || !window.google.maps) return;

        if (!mapInstance.current) {
            // Clean Industrial Map Palette
            const industrialMapStyles = [
                {
                    featureType: 'poi',
                    elementType: 'labels',
                    stylers: [{ visibility: 'off' }]
                },
                {
                    featureType: 'transit',
                    elementType: 'labels',
                    stylers: [{ visibility: 'simplified' }]
                },
                {
                    featureType: 'water',
                    elementType: 'geometry',
                    stylers: [{ color: '#c9e8fd' }]
                }
            ];

            const map = new window.google.maps.Map(mapRef.current, {
                center: { lat: 21.5, lng: 78.5 }, // Central India
                zoom: 5,
                scrollwheel: false,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: true,
                styles: industrialMapStyles
            });

            infoWindowRef.current = new window.google.maps.InfoWindow();
            mapInstance.current = map;
        }
    }, [isMapReady]);

    // 3. Render Custom Markers and Update Bounds
    useEffect(() => {
        if (!mapInstance.current || !window.google || !window.google.maps) return;

        const map = mapInstance.current;
        const google = window.google;

        // Clear existing markers
        markersRef.current.forEach((m) => m.setMap(null));
        markersRef.current = [];

        if (filteredLocations.length === 0) return;

        const bounds = new google.maps.LatLngBounds();

        filteredLocations.forEach((loc) => {
            const position = { lat: loc.lat, lng: loc.lng };
            bounds.extend(position);

            const isHQ = loc.isHeadquarters;
            const pinColor = isHQ ? '#D3121A' : '#00632e';

            // High-definition Custom SVG Pin Icon
            const markerIcon = {
                path: 'M 12,2 C 7.58,2 4,5.58 4,10 c 0,5.25 8,12 8,12 0,0 8,-6.75 8,-12 0,-4.42 -3.58,-8 -8,-8 z',
                fillColor: pinColor,
                fillOpacity: 1,
                strokeWeight: 1.8,
                strokeColor: '#FFFFFF',
                scale: 1.6,
                anchor: new google.maps.Point(12, 22),
                labelOrigin: new google.maps.Point(12, 9)
            };

            const marker = new google.maps.Marker({
                position,
                map,
                title: loc.name,
                animation: google.maps.Animation.DROP,
                icon: markerIcon
            });

            // Rich InfoWindow content matching MAP FILTERS brand style
            const infoContent = `
                <div class="mapfil-location-card" style="padding: 12px; max-width: 280px; font-family: 'Plus Jakarta Sans', sans-serif;">
                    <div class="loc-card-header" style="display:flex; gap:6px; margin-bottom: 6px;">
                        <span class="loc-badge-type" style="font-size:10px; font-weight:700; background:#f1f5f9; padding:2px 6px; border-radius:4px; color:#475569;">${loc.type}</span>
                        ${isHQ ? '<span class="loc-badge-hq" style="font-size:10px; font-weight:800; background:#fef2f2; color:#D3121A; padding:2px 6px; border-radius:4px;">Headquarters</span>' : ''}
                    </div>
                    <h4 class="loc-name" style="font-size:14px; font-weight:800; color:#0B1B3D; margin:0 0 4px 0;">${loc.name}</h4>
                    <p class="loc-city-country" style="font-size:12px; font-weight:600; color:#00632e; margin:0 0 8px 0;">${loc.city}, ${loc.country}</p>
                    
                    <div style="font-size:11.5px; border-top:1px solid #f1f5f9; border-bottom:1px solid #f1f5f9; padding:6px 0; margin-bottom:8px; display:flex; flex-direction:column; gap:3px;">
                        <div style="display:flex; justify-content:space-between;">
                            <span style="color:#64748B;">Industry:</span>
                            <span style="font-weight:700; color:#0B1B3D;">${loc.industry}</span>
                        </div>
                        <div style="display:flex; justify-content:space-between;">
                            <span style="color:#64748B;">Product:</span>
                            <span style="font-weight:700; color:#0B1B3D;">${loc.productCategory || 'Cleanroom'}</span>
                        </div>
                    </div>

                    <p class="loc-address" style="font-size:11px; color:#64748B; margin:0 0 10px 0; line-height:1.4;">📍 ${loc.address}</p>
                    
                    <div style="display:flex; gap:6px;">
                        <button 
                            type="button"
                            onclick="window.openQuoteModal && window.openQuoteModal('Google Maps Hub: ${loc.name}')"
                            style="flex:1; background:#D3121A; color:#FFFFFF; border:none; padding:6px 10px; border-radius:6px; font-size:11.5px; font-weight:700; cursor:pointer;"
                        >
                            Request Quote
                        </button>
                        <a href="tel:${loc.phone}" style="display:inline-flex; align-items:center; justify-content:center; width:28px; height:28px; background:#f1f5f9; border-radius:6px; text-decoration:none; font-size:13px;" title="Call">📞</a>
                    </div>
                </div>
            `;

            marker.addListener('click', () => {
                if (infoWindowRef.current) {
                    infoWindowRef.current.setContent(infoContent);
                    infoWindowRef.current.open(map, marker);
                }
                setActiveLocation(loc);
                if (onLocationSelect) onLocationSelect(loc);
            });

            markersRef.current.push(marker);
        });

        // Fit bounds smoothly with viewport padding
        if (filteredLocations.length > 1) {
            map.fitBounds(bounds);
        } else if (filteredLocations.length === 1) {
            map.setCenter({ lat: filteredLocations[0].lat, lng: filteredLocations[0].lng });
            map.setZoom(12);
        }
    }, [filteredLocations, isMapReady, onLocationSelect]);

    return (
        <section className="mapfil-map-filters-section" id="find-us">
            <div className="map-filters-container">

                {/* Section Header */}
                <div className="map-section-header">
                    <div className="map-header-accent">
                        <span className="accent-dot-red" aria-hidden="true"></span>
                        <span>PAN-INDIA &amp; REGIONAL CLEANROOM NETWORK</span>
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

                    {/* Google Map Display (Right) */}
                    <div className="map-display-card">
                        <div className="map-toolbar">
                            <div className="map-status-info">
                                <span className="map-status-dot"></span>
                                <span>Google Maps Network</span>
                            </div>
                            <span>Click any pin to inspect location card</span>
                        </div>

                        {/* Google Map Canvas */}
                        <div
                            ref={mapRef}
                            className="map-canvas-container"
                            style={{ minHeight: '380px', width: '100%', position: 'relative' }}
                            aria-label="Interactive Google Map showing MAP FILTERS cleanroom locations"
                        >
                            {!isMapReady && !mapError && (
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#64748B', fontSize: '13px' }}>
                                    Loading Google Maps...
                                </div>
                            )}
                            {mapError && (
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', padding: '1rem', color: '#D3121A', fontSize: '13px', textAlign: 'center' }}>
                                    <p style={{ margin: '0 0 6px 0', fontWeight: 'bold' }}>{mapError}</p>
                                    <p style={{ margin: 0, color: '#64748B', fontSize: '12px' }}>Check your Google Maps API key in index.html or .env file.</p>
                                </div>
                            )}
                        </div>

                        {/* Optional floating location card preview on click */}
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
