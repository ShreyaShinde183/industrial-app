/* ==========================================================================
   MAP FILTERS INDIA PVT. LTD. — Interactive Behaviors & Component Controller
   Clean Room Creators & Complete HVAC Solution Providers
   ========================================================================== */

/* ----------------------------------------------------------------------
   1. Interactive "Request a Quote" Modal (Global Window Handlers)
   ---------------------------------------------------------------------- */
window.openQuoteModal = function (source = 'Direct Inquiry', productName = null) {
    const modal = document.getElementById('quoteModal');
    if (!modal) {
        console.warn('Quote modal element #quoteModal not found in DOM.');
        return;
    }
    const quoteForm = document.getElementById('quoteForm');
    const modalSuccess = document.getElementById('modalSuccess');
    const sourceInput = document.getElementById('quoteSource');
    const productSelect = document.getElementById('productSelect');

    if (sourceInput) {
        sourceInput.value = source;
    }

    if (productName && productSelect) {
        let found = false;
        for (let opt of productSelect.options) {
            if (opt.value.toLowerCase().includes(productName.toLowerCase()) || productName.toLowerCase().includes(opt.value.toLowerCase())) {
                opt.selected = true;
                found = true;
                break;
            }
        }
        if (!found && productSelect.options.length > 0) {
            productSelect.selectedIndex = 0;
        }
    }

    // Reset display states
    if (quoteForm) quoteForm.style.display = 'flex';
    if (modalSuccess) modalSuccess.style.display = 'none';

    modal.classList.add('is-active');
    modal.style.opacity = '1';
    modal.style.visibility = 'visible';
    modal.style.pointerEvents = 'auto';
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus first input for accessibility
    const firstInput = modal.querySelector('input:not([type="hidden"])');
    if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
    }
};

window.closeQuoteModal = function () {
    const modal = document.getElementById('quoteModal');
    if (!modal) return;
    modal.classList.remove('is-active');
    modal.style.opacity = '';
    modal.style.visibility = '';
    modal.style.pointerEvents = '';
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
};

function initApp() {
    const modal = document.getElementById('quoteModal');
    const quoteForm = document.getElementById('quoteForm');
    const modalSuccess = document.getElementById('modalSuccess');

    // Attach click listeners to all Curious buttons as a fallback
    document.querySelectorAll('.quote-nav-btn, .btn-secondary-navy, .btn-card-curious').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Ensure modal opens reliably
            const source = btn.dataset.source || 'Curious Action';
            const product = btn.dataset.product || null;
            window.openQuoteModal(source, product);
        });
    });

    // Close on backdrop click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                window.closeQuoteModal();
            }
        });
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('is-active')) {
            window.closeQuoteModal();
        }
    });

    // Form submission handler
       window.handleQuoteSubmit = async function (event) {
        event.preventDefault();
        const submitBtn = quoteForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        // Collect form data
        const payload = {
            name: document.getElementById('fullName')?.value || quoteForm.querySelector('input[placeholder*="Name"]')?.value || '',
            company: document.getElementById('companyName')?.value || '',
            email: document.getElementById('email')?.value || '',
            phone: document.getElementById('phone')?.value || '',
            product: document.getElementById('productSelect')?.value || '',
            quantity: document.getElementById('quantity')?.value || '',
            notes: document.getElementById('notes')?.value || '',
            source: document.getElementById('quoteSource')?.value || 'Website'
        };

        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Submitting Cleanroom RFQ... ⏳';

        try {
            const response = await fetch('http://localhost:5000/api/quote', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                if (quoteForm) quoteForm.style.display = 'none';
                if (modalSuccess) modalSuccess.style.display = 'block';
                quoteForm.reset();
            } else {
                alert('Server error, please try again.');
            }
        } catch (err) {
            console.error('Backend connection failed:', err);
            alert('Unable to connect to backend server. Make sure it is running on port 5000.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    };
    // Footer Inquiry Form Submission Handler
    window.handleFooterInquirySubmit = function (event) {
        event.preventDefault();
        const form = event.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalHtml = submitBtn.innerHTML;

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Submitting Cleanroom RFQ... ⏳</span>';

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>✓ Inquiry Sent Successfully!</span>';
            submitBtn.style.background = '#00632e';
            form.reset();

            setTimeout(() => {
                submitBtn.innerHTML = originalHtml;
                submitBtn.style.background = '';
            }, 4000);
        }, 600);
    };

    /* ----------------------------------------------------------------------
       2. Mobile Drawer Navigation Toggle
       ---------------------------------------------------------------------- */
    const mobileToggle = document.getElementById('mobileToggle');
    const mainNav = document.getElementById('mainNav');

    window.toggleMobileMenu = function () {
        const nav = document.getElementById('mainNav');
        if (!nav) return;
        nav.classList.toggle('is-open');
    };

    /* ----------------------------------------------------------------------
       2B. Product & Service Card Description Drawer Toggle
       ---------------------------------------------------------------------- */
    window.toggleCardDescription = function (button) {
        if (!button) return;
        const card = button.closest('.cleanroom-card, .solution-step-card, .industry-cleanroom-card');
        if (!card) return;

        const isExpanded = card.classList.toggle('is-desc-expanded');
        button.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');

        const toggleText = button.querySelector('.btn-toggle-text');
        if (toggleText) {
            toggleText.textContent = isExpanded ? 'Hide Description' : 'View Description';
        }
    };

    // Close mobile menu when a navigation item is clicked
    if (mainNav) {
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('is-open');
            });
        });
    }

    /* ----------------------------------------------------------------------
       2C. Hero Background Slider (3s Auto-rotation with Ken Burns Zoom & Live Effect)
       ---------------------------------------------------------------------- */
    const heroSlides = document.querySelectorAll('.hero-bg-slide');
    const heroDots = document.querySelectorAll('.hero-dot');
    const heroCounter = document.getElementById('heroSlideCounter');

    if (heroSlides && heroSlides.length > 0) {
        let currentSlideIdx = 0;
        let heroTimer = null;
        const SLIDE_DURATION = 3000;

        function renderHeroSlide(index) {
            heroSlides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.remove('is-previous');
                    // Force restart of CSS keyframe animation by reflow
                    slide.classList.remove('is-active');
                    void slide.offsetWidth;
                    slide.classList.add('is-active');
                } else if (slide.classList.contains('is-active')) {
                    slide.classList.remove('is-active');
                    slide.classList.add('is-previous');
                    setTimeout(() => {
                        slide.classList.remove('is-previous');
                    }, 850);
                } else {
                    slide.classList.remove('is-active', 'is-previous');
                }
            });

            if (heroDots && heroDots.length > 0) {
                heroDots.forEach((dot, i) => {
                    dot.classList.remove('is-active');
                    if (i === index) {
                        void dot.offsetWidth;
                        dot.classList.add('is-active');
                    }
                });
            }

            if (heroCounter) {
                heroCounter.textContent = `0${index + 1} / 0${heroSlides.length}`;
            }

            currentSlideIdx = index;
        }

        function nextHeroSlide() {
            const nextIdx = (currentSlideIdx + 1) % heroSlides.length;
            renderHeroSlide(nextIdx);
        }

        function restartHeroTimer() {
            if (heroTimer) clearInterval(heroTimer);
            heroTimer = setInterval(nextHeroSlide, SLIDE_DURATION);
        }

        window.jumpToHeroSlide = function (index) {
            if (index === currentSlideIdx) return;
            renderHeroSlide(index);
            restartHeroTimer();
        };

        // Pause timer on inactive tab to save battery and resume cleanly
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                if (heroTimer) clearInterval(heroTimer);
            } else {
                restartHeroTimer();
            }
        });

        // Initialize first slide and start 3s loop
        renderHeroSlide(0);
        restartHeroTimer();
    }

    /* ----------------------------------------------------------------------
       3. Header Elevation & Scroll Direction Management (handled by initStickyHeaderScroll)
       ---------------------------------------------------------------------- */

    /* ----------------------------------------------------------------------
       4. Interactive Map Filters Controller (Leaflet + Filtering Logic)
       ---------------------------------------------------------------------- */
    const mapContainer = document.getElementById('mapfil-map');
    if (mapContainer && typeof window.L !== 'undefined') {

        // Location Dataset - 11 Cleanroom & HVAC Hubs
        const LOCATION_DATA = [
            {
                id: 'loc-1',
                name: 'MAP FILTERS India HQ',
                country: 'India',
                state: 'Gujarat',
                city: 'Ahmedabad',
                industry: 'Pharmaceutical Industries',
                productCategory: 'Clean Rooms',
                certification: 'ISO 9001:2008',
                type: 'Corporate Office & Cleanroom Unit',
                address: 'GIDC Industrial Estate, Ahmedabad, Gujarat, India',
                phone: '(+91) - 9823252793',
                email: 'karunakar@mapfilters.com',
                lat: 23.0225,
                lng: 72.5714,
                isHeadquarters: true
            },
            {
                id: 'loc-2',
                name: 'MAP FILTERS Mumbai Hub',
                country: 'India',
                state: 'Maharashtra',
                city: 'Mumbai',
                industry: 'Pharmaceutical Industries',
                productCategory: 'HVAC Systems',
                certification: 'ISO 9001:2008',
                type: 'Pharma Cleanroom & HVAC Projects',
                address: 'Commercial Hub, BKC, Mumbai, Maharashtra, India',
                phone: '(+91) - 9823252793',
                email: 'karunakar@mapfilters.com',
                lat: 19.0760,
                lng: 72.8777,
                isHeadquarters: false
            },
            {
                id: 'loc-3',
                name: 'MAP FILTERS Delhi NCR',
                country: 'India',
                state: 'Delhi NCR',
                city: 'New Delhi',
                industry: 'Research Industries',
                productCategory: 'Cleanroom Equipment',
                certification: 'ISO 14644',
                type: 'Technical Sales & Turnkey Support',
                address: 'Industrial Complex, New Delhi / Gurugram, India',
                phone: '(+91) - 9823252793',
                email: 'karunakar@mapfilters.com',
                lat: 28.6139,
                lng: 77.2090,
                isHeadquarters: false
            },
            {
                id: 'loc-4',
                name: 'MAP FILTERS Chennai',
                country: 'India',
                state: 'Tamil Nadu',
                city: 'Chennai',
                industry: 'Healthcare',
                productCategory: 'Modular OT',
                certification: 'cGMP Compliant',
                type: 'Healthcare & Modular OT Center',
                address: 'Industrial Corridor, Chennai, Tamil Nadu, India',
                phone: '(+91) - 9823252793',
                email: 'karunakar@mapfilters.com',
                lat: 13.0827,
                lng: 80.2707,
                isHeadquarters: false
            },
            {
                id: 'loc-5',
                name: 'MAP FILTERS Middle East (Dubai)',
                country: 'UAE',
                state: 'Dubai',
                city: 'Dubai',
                industry: 'Chemical Industries',
                productCategory: 'HEPA Air & Pre Filters',
                certification: 'ISO 9001:2008',
                type: 'Regional Cleanroom Logistics Hub',
                address: 'Jebel Ali Industrial Zone, Dubai, UAE',
                phone: '(+91) - 9823252793',
                email: 'karunakar@mapfilters.com',
                lat: 25.0112,
                lng: 55.0612,
                isHeadquarters: false
            },
            {
                id: 'loc-6',
                name: 'MAP FILTERS Abu Dhabi',
                country: 'UAE',
                state: 'Abu Dhabi',
                city: 'Abu Dhabi',
                industry: 'Chemical Industries',
                productCategory: 'Panels & Doors',
                certification: 'ISO 9001:2008',
                type: 'Controlled Environment Support',
                address: 'Mussafah Industrial Sector, Abu Dhabi, UAE',
                phone: '(+91) - 9823252793',
                email: 'karunakar@mapfilters.com',
                lat: 24.4539,
                lng: 54.3773,
                isHeadquarters: false
            },
            {
                id: 'loc-7',
                name: 'MAP FILTERS Saudi Arabia',
                country: 'Saudi Arabia',
                state: 'Riyadh Region',
                city: 'Riyadh',
                industry: 'Laboratories',
                productCategory: 'Laboratory Furniture',
                certification: 'ISO 14644',
                type: 'Lab & Cleanroom Partner',
                address: 'Industrial City, Riyadh, KSA',
                phone: '(+91) - 9823252793',
                email: 'karunakar@mapfilters.com',
                lat: 24.7136,
                lng: 46.6753,
                isHeadquarters: false
            },
            {
                id: 'loc-8',
                name: 'MAP FILTERS Dammam',
                country: 'Saudi Arabia',
                state: 'Eastern Province',
                city: 'Dammam',
                industry: 'Pharmaceutical Industries',
                productCategory: 'AMC Services',
                certification: 'cGMP Compliant',
                type: 'Industrial Cleanroom Support',
                address: 'King Abdulaziz Industrial Area, Dammam, KSA',
                phone: '(+91) - 9823252793',
                email: 'karunakar@mapfilters.com',
                lat: 26.4207,
                lng: 50.0888,
                isHeadquarters: false
            },
            {
                id: 'loc-9',
                name: 'MAP FILTERS Qatar',
                country: 'Qatar',
                state: 'Doha',
                city: 'Doha',
                industry: 'Healthcare',
                productCategory: 'Modular OT',
                certification: 'ISO 9001:2008',
                type: 'Hospital & Cleanroom Service',
                address: 'Industrial Zone, Doha, Qatar',
                phone: '(+91) - 9823252793',
                email: 'karunakar@mapfilters.com',
                lat: 25.2854,
                lng: 51.5310,
                isHeadquarters: false
            },
            {
                id: 'loc-10',
                name: 'MAP FILTERS Oman (Muscat)',
                country: 'Oman',
                state: 'Muscat',
                city: 'Muscat',
                industry: 'Allied Industries',
                productCategory: 'HVAC Systems',
                certification: 'ISO 9001:2008',
                type: 'Cleanroom HVAC Partner',
                address: 'Rusayl Industrial Area, Muscat, Oman',
                phone: '(+91) - 9823252793',
                email: 'karunakar@mapfilters.com',
                lat: 23.5880,
                lng: 58.3829,
                isHeadquarters: false
            },
            {
                id: 'loc-11',
                name: 'MAP FILTERS Sohar',
                country: 'Oman',
                state: 'Al Batinah',
                city: 'Sohar',
                industry: 'Chemical Industries',
                productCategory: 'Clean Rooms',
                certification: 'ISO 14644',
                type: 'Turnkey Cleanroom Center',
                address: 'Freezone Industrial Zone, Sohar, Oman',
                phone: '(+91) - 9823252793',
                email: 'karunakar@mapfilters.com',
                lat: 24.3461,
                lng: 56.7075,
                isHeadquarters: false
            }
        ];

        // Unique dropdown lists
        const COUNTRIES = [
            {
                name: 'India',
                states: [
                    { name: 'Gujarat', cities: ['Ahmedabad'] },
                    { name: 'Maharashtra', cities: ['Mumbai'] },
                    { name: 'Delhi NCR', cities: ['New Delhi'] },
                    { name: 'Tamil Nadu', cities: ['Chennai'] }
                ]
            },
            {
                name: 'UAE',
                states: [
                    { name: 'Dubai', cities: ['Dubai'] },
                    { name: 'Abu Dhabi', cities: ['Abu Dhabi'] }
                ]
            },
            {
                name: 'Saudi Arabia',
                states: [
                    { name: 'Riyadh Region', cities: ['Riyadh'] },
                    { name: 'Eastern Province', cities: ['Dammam'] }
                ]
            },
            {
                name: 'Qatar',
                states: [
                    { name: 'Doha', cities: ['Doha'] }
                ]
            },
            {
                name: 'Oman',
                states: [
                    { name: 'Muscat', cities: ['Muscat'] },
                    { name: 'Al Batinah', cities: ['Sohar'] }
                ]
            }
        ];

        // Initialize Leaflet Map centered on India/Middle East corridor
        const targetElementId = mapContainer.id;
        const map = L.map(targetElementId, {
            center: [23.0225, 72.5714],
            zoom: 5,
            scrollWheelZoom: false,
            attributionControl: true
        });

        // Professional Clean Tile Layer
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a> | MAP FILTERS INDIA PVT. LTD.',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(map);

        // Marker Cluster Layer or FeatureGroup
        const markersLayer = L.featureGroup().addTo(map);

        // Filter UI Elements
        const searchInput = document.getElementById('mapSearch');
        const searchClearBtn = document.getElementById('searchClearBtn');
        const countrySelect = document.getElementById('filterCountry');
        const stateSelect = document.getElementById('filterState');
        const citySelect = document.getElementById('filterCity');
        const industrySelect = document.getElementById('filterIndustry');
        const productSelectFilter = document.getElementById('filterProduct');
        const certSelect = document.getElementById('filterCert');
        const applyBtn = document.getElementById('applyFiltersBtn');
        const clearBtn = document.getElementById('clearFiltersBtn');
        const resultsBadge = document.getElementById('resultsCountBadge');

        // Populate Country Dropdown
        if (countrySelect) {
            countrySelect.innerHTML = '<option value="">All Countries</option>';
            COUNTRIES.forEach(c => {
                const opt = document.createElement('option');
                opt.value = c.name;
                opt.textContent = c.name;
                countrySelect.appendChild(opt);
            });
        }

        // Cascading State / City Updates
        function updateStateOptions() {
            if (!stateSelect) return;
            const selectedCountryName = countrySelect ? countrySelect.value : '';
            stateSelect.innerHTML = '<option value="">All States</option>';
            
            if (citySelect) {
                citySelect.innerHTML = '<option value="">All Cities</option>';
                citySelect.disabled = true;
            }

            if (!selectedCountryName) {
                stateSelect.disabled = true;
                return;
            }

            const countryObj = COUNTRIES.find(c => c.name === selectedCountryName);
            if (countryObj && countryObj.states.length > 0) {
                stateSelect.disabled = false;
                countryObj.states.forEach(st => {
                    const opt = document.createElement('option');
                    opt.value = st.name;
                    opt.textContent = st.name;
                    stateSelect.appendChild(opt);
                });
            } else {
                stateSelect.disabled = true;
            }
        }

        function updateCityOptions() {
            if (!citySelect) return;
            const selectedCountryName = countrySelect ? countrySelect.value : '';
            const selectedStateName = stateSelect ? stateSelect.value : '';
            citySelect.innerHTML = '<option value="">All Cities</option>';

            if (!selectedStateName) {
                citySelect.disabled = true;
                return;
            }

            const countryObj = COUNTRIES.find(c => c.name === selectedCountryName);
            if (!countryObj) return;

            const stateObj = countryObj.states.find(s => s.name === selectedStateName);
            if (stateObj && stateObj.cities.length > 0) {
                citySelect.disabled = false;
                stateObj.cities.forEach(ct => {
                    const opt = document.createElement('option');
                    opt.value = ct;
                    opt.textContent = ct;
                    citySelect.appendChild(opt);
                });
            } else {
                citySelect.disabled = true;
            }
        }

        if (countrySelect) {
            countrySelect.addEventListener('change', updateStateOptions);
        }
        if (stateSelect) {
            stateSelect.addEventListener('change', updateCityOptions);
        }

        // Show/hide search clear button
        if (searchInput && searchClearBtn) {
            searchInput.addEventListener('input', () => {
                searchClearBtn.style.display = searchInput.value ? 'block' : 'none';
            });
            searchClearBtn.addEventListener('click', () => {
                searchInput.value = '';
                searchClearBtn.style.display = 'none';
                applyFilters();
            });
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    applyFilters();
                }
            });
        }

        // Render markers for a given list of locations
        function renderMarkers(locations) {
            markersLayer.clearLayers();

            if (resultsBadge) {
                resultsBadge.textContent = `${locations.length} Hubs Found`;
            }

            if (locations.length === 0) return;

            locations.forEach(loc => {
                const isHQ = loc.isHeadquarters;
                const iconClass = isHQ ? 'mapfil-map-pin pin-hq' : 'mapfil-map-pin';

                const customIcon = L.divIcon({
                    className: 'custom-leaflet-marker',
                    html: `<div class="${iconClass}" title="${loc.name}"></div>`,
                    iconSize: [32, 32],
                    iconAnchor: [16, 32],
                    popupAnchor: [0, -32]
                });

                const marker = L.marker([loc.lat, loc.lng], { icon: customIcon });

                // Location Card popup
                const popupContent = `
                    <div class="mapfil-location-card">
                        <div class="loc-card-header">
                            <span class="loc-badge-type">${loc.type}</span>
                            ${isHQ ? '<span class="loc-badge-hq">Headquarters</span>' : ''}
                        </div>
                        <h4 class="loc-name">${loc.name}</h4>
                        <p class="loc-city-country">${loc.city}, ${loc.country}</p>
                        <div class="loc-details-grid">
                            <div class="loc-detail-row">
                                <span class="loc-label">Industry:</span>
                                <span class="loc-value">${loc.industry}</span>
                            </div>
                            <div class="loc-detail-row">
                                <span class="loc-label">Specialization:</span>
                                <span class="loc-value">${loc.productCategory}</span>
                            </div>
                            ${loc.certification ? `
                            <div class="loc-detail-row">
                                <span class="loc-label">Standard:</span>
                                <span class="loc-value tag-cert">${loc.certification}</span>
                            </div>` : ''}
                        </div>
                        <p class="loc-address">📍 ${loc.address}</p>
                        <div class="loc-card-footer">
                            <button class="btn-view-details" onclick="openQuoteModal('Location Hub: ${loc.name}')">
                                Request Facility Audit
                            </button>
                            <a href="tel:${loc.phone}" class="btn-loc-call" title="Call ${loc.name}">📞</a>
                        </div>
                    </div>
                `;

                marker.bindPopup(popupContent);
                markersLayer.addLayer(marker);
            });

            // Adjust view to fit markers
            try {
                const bounds = markersLayer.getBounds();
                if (bounds.isValid()) {
                    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 13 });
                }
            } catch (err) {
                console.error(err);
            }
        }

        // Apply Filters logic
        function applyFilters() {
            const query = (searchInput ? searchInput.value : '').trim().toLowerCase();
            const country = countrySelect ? countrySelect.value : '';
            const state = stateSelect ? stateSelect.value : '';
            const city = citySelect ? citySelect.value : '';
            const industry = industrySelect ? industrySelect.value : '';
            const product = productSelectFilter ? productSelectFilter.value : '';
            const cert = certSelect ? certSelect.value : '';

            const filtered = LOCATION_DATA.filter(loc => {
                // Search check
                if (query) {
                    const matchName = loc.name.toLowerCase().includes(query);
                    const matchCountry = loc.country.toLowerCase().includes(query);
                    const matchState = loc.state.toLowerCase().includes(query);
                    const matchCity = loc.city.toLowerCase().includes(query);
                    const matchIndustry = loc.industry.toLowerCase().includes(query);
                    const matchProd = loc.productCategory.toLowerCase().includes(query);
                    if (!matchName && !matchCountry && !matchState && !matchCity && !matchIndustry && !matchProd) {
                        return false;
                    }
                }

                // Country filter
                if (country && loc.country !== country) return false;

                // State filter
                if (state && loc.state !== state) return false;

                // City filter
                if (city && loc.city !== city) return false;

                // Industry filter
                if (industry && loc.industry !== industry) return false;

                // Product filter
                if (product && loc.productCategory !== product) return false;

                // Certification filter
                if (cert && loc.certification !== cert) return false;

                return true;
            });

            renderMarkers(filtered);
        }

        // Clear Filters logic
        function clearFilters() {
            if (searchInput) searchInput.value = '';
            if (searchClearBtn) searchClearBtn.style.display = 'none';
            if (countrySelect) countrySelect.value = '';
            if (stateSelect) {
                stateSelect.value = '';
                stateSelect.disabled = true;
                stateSelect.innerHTML = '<option value="">All States</option>';
            }
            if (citySelect) {
                citySelect.value = '';
                citySelect.disabled = true;
                citySelect.innerHTML = '<option value="">All Cities</option>';
            }
            if (industrySelect) industrySelect.value = '';
            if (productSelectFilter) productSelectFilter.value = '';
            if (certSelect) certSelect.value = '';

            renderMarkers(LOCATION_DATA);
        }

        if (applyBtn) {
            applyBtn.addEventListener('click', applyFilters);
        }
        if (clearBtn) {
            clearBtn.addEventListener('click', clearFilters);
        }

        // Initial render of all markers
        renderMarkers(LOCATION_DATA);

        // Fix Leaflet tile rendering after font or DOM paint
        setTimeout(() => {
            map.invalidateSize();
        }, 300);

        window.addEventListener('resize', () => {
            map.invalidateSize();
        });

        // Invalidate map on scroll into view
        if ('IntersectionObserver' in window && mapContainer) {
            const mapObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        map.invalidateSize();
                    }
                });
            }, { threshold: 0.1 });
            mapObserver.observe(mapContainer);
        }
    }

    /* ----------------------------------------------------------------------
       4B. Guaranteed Attachment: Map always attached to Footer
       Ensures the map and footer stay together across page changes, routing,
       or dynamic view openings.
       ---------------------------------------------------------------------- */
    function ensureMapAttachedToFooter() {
        const footer = document.querySelector('footer.site-footer, #contact');
        const mapSection = document.getElementById('find-us') || document.querySelector('.mapfil-map-filters-section');
        if (footer && mapSection && !footer.contains(mapSection)) {
            footer.insertBefore(mapSection, footer.firstChild);
        }
    }
    ensureMapAttachedToFooter();
    window.addEventListener('popstate', ensureMapAttachedToFooter);
    window.addEventListener('hashchange', () => {
        ensureMapAttachedToFooter();
        if (window.location.hash === '#find-us' || window.location.hash === '#contact') {
            setTimeout(() => window.dispatchEvent(new Event('resize')), 150);
        }
    });


    /* ----------------------------------------------------------------------
       5. Interactive "Start a Project" Modal Controller
       ---------------------------------------------------------------------- */
    const projectModal = document.getElementById('projectModal');
    const projectForm = document.getElementById('projectEnquiryForm');
    const projectStatusCard = document.getElementById('projectStatusCard');
    const projectWhatsAppBtn = document.getElementById('projectWhatsAppBtn');
    const projectEmailBtn = document.getElementById('projectEmailBtn');

    window.openProjectModal = function (source = 'Direct Inquiry') {
        const modalEl = document.getElementById('projectModal');
        if (!modalEl) return;
        const formEl = document.getElementById('projectEnquiryForm');
        const cardEl = document.getElementById('projectStatusCard');

        if (formEl) formEl.style.display = 'flex';
        if (cardEl) cardEl.style.display = 'none';

        modalEl.classList.add('is-active');
        modalEl.style.opacity = '1';
        modalEl.style.visibility = 'visible';
        modalEl.style.pointerEvents = 'auto';
        modalEl.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        const firstInput = modalEl.querySelector('input:not([type="hidden"])');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
    };

    window.closeProjectModal = function () {
        const modalEl = document.getElementById('projectModal');
        if (!modalEl) return;
        modalEl.classList.remove('is-active');
        modalEl.style.opacity = '';
        modalEl.style.visibility = '';
        modalEl.style.pointerEvents = '';
        modalEl.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) {
                window.closeProjectModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (projectModal && projectModal.classList.contains('is-active')) {
                window.closeProjectModal();
            }
        }
    });

    window.handleProjectEnquirySubmit = function (event) {
        event.preventDefault();
        const form = event.target;
        
        const name = form.projectName ? form.projectName.value.trim() : '';
        const company = form.projectCompany ? form.projectCompany.value.trim() : '';
        const phone = form.projectPhone ? form.projectPhone.value.trim() : '';
        const email = form.projectEmail ? form.projectEmail.value.trim() : '';
        const industry = form.projectIndustry ? form.projectIndustry.value : '';
        const requirement = form.projectRequirement ? form.projectRequirement.value.trim() : '';

        // Validation check
        if (!name || !company || !phone || !email || !industry || !requirement) {
            alert('Please fill in all required fields marked with *.');
            return;
        }

        const payload = {
            name,
            company,
            phone,
            email,
            industry,
            requirement,
            source: 'Start a Project Modal',
            timestamp: new Date().toISOString()
        };

        // Ready for backend integration
        console.info('[MAPFIL API Project Enquiry - Ready for Dispatch]:', payload);
        if (typeof window.MAPFIL_API_PROJECT_HOOK === 'function') {
            window.MAPFIL_API_PROJECT_HOOK(payload);
        }

        // Configure direct one-click WhatsApp & Email dispatch
        const textMsg = encodeURIComponent(
            `Hello MAP FILTERS Team,\n\nI would like to submit a cleanroom project enquiry:\n- Name: ${name}\n- Company: ${company}\n- Industry: ${industry}\n- Phone: ${phone}\n- Email: ${email}\n- Requirement: ${requirement}`
        );
        if (projectWhatsAppBtn) {
            projectWhatsAppBtn.href = `https://api.whatsapp.com/send?phone=919823252793&text=${textMsg}`;
        }

        const mailSubject = encodeURIComponent(`Cleanroom Project Enquiry - ${company} (${name})`);
        const mailBody = encodeURIComponent(
            `Dear MAP FILTERS Technical Desk,\n\nPlease find my cleanroom project enquiry:\n\nName: ${name}\nCompany: ${company}\nIndustry: ${industry}\nPhone: ${phone}\nEmail: ${email}\n\nProject Scope & Requirement:\n${requirement}\n\nLooking forward to your technical quotation.\nBest regards,\n${name}`
        );
        if (projectEmailBtn) {
            projectEmailBtn.href = `mailto:karunakar@mapfilters.com?subject=${mailSubject}&body=${mailBody}`;
        }

        // Show honest, structured confirmation
        if (projectForm) projectForm.style.display = 'none';
        if (projectStatusCard) projectStatusCard.style.display = 'block';
    };

    /* ----------------------------------------------------------------------
       7. Interactive Accordion for Compact Card Descriptions
          (Turnkey Capabilities, Our Specialization, Sectors & Verticals)
       ---------------------------------------------------------------------- */
    window.toggleCardDescription = function (btn) {
        if (!btn) return;
        const card = btn.closest('.solution-step-card, .cleanroom-card, .industry-cleanroom-card');
        if (!card) return;

        const fullDesc = card.querySelector('.card-desc-full');
        if (!fullDesc) return;

        const isCurrentlyExpanded = btn.getAttribute('aria-expanded') === 'true';

        // 1. Collapse any currently open card across the page (Keep only 1 expanded at a time)
        document.querySelectorAll('.btn-desc-toggle[aria-expanded="true"]').forEach(openBtn => {
            if (openBtn !== btn) {
                const openCard = openBtn.closest('.solution-step-card, .cleanroom-card, .industry-cleanroom-card');
                const openDesc = openCard ? openCard.querySelector('.card-desc-full') : null;
                if (openDesc) {
                    openDesc.style.maxHeight = '0px';
                    openDesc.classList.remove('is-expanded');
                    openDesc.setAttribute('aria-hidden', 'true');
                }
                openBtn.setAttribute('aria-expanded', 'false');
                const openLabel = openBtn.querySelector('.btn-toggle-text');
                if (openLabel) openLabel.textContent = 'View Description';
                const openArrow = openBtn.querySelector('.btn-toggle-arrow');
                if (openArrow) openArrow.textContent = '▾';
                if (openCard) openCard.classList.remove('is-desc-expanded');
            }
        });

        // 2. Toggle clicked card
        if (isCurrentlyExpanded) {
            // Collapse smoothly
            fullDesc.style.maxHeight = '0px';
            fullDesc.classList.remove('is-expanded');
            fullDesc.setAttribute('aria-hidden', 'true');
            btn.setAttribute('aria-expanded', 'false');
            const label = btn.querySelector('.btn-toggle-text');
            if (label) label.textContent = 'View Description';
            const arrow = btn.querySelector('.btn-toggle-arrow');
            if (arrow) arrow.textContent = '▾';
            card.classList.remove('is-desc-expanded');
        } else {
            // Expand smoothly
            fullDesc.setAttribute('aria-hidden', 'false');
            fullDesc.classList.add('is-expanded');
            fullDesc.style.maxHeight = (fullDesc.scrollHeight + 40) + 'px';
            btn.setAttribute('aria-expanded', 'true');
            const label = btn.querySelector('.btn-toggle-text');
            if (label) label.textContent = 'Read Less';
            const arrow = btn.querySelector('.btn-toggle-arrow');
            if (arrow) arrow.textContent = '▴';
            card.classList.add('is-desc-expanded');
        }
    };

    // -------------------------------------------------------------------------
    // Industries We Serve - Seamless Carousel with 2s Stay & Forward Scroll
    // -------------------------------------------------------------------------
    function initIndustriesCarousel() {
        const track = document.getElementById('industriesTrack');
        const prevBtn = document.getElementById('indPrevBtn');
        const nextBtn = document.getElementById('indNextBtn');
        const dotsContainer = document.getElementById('indCarouselDots');
        const wrapper = track ? (track.closest('.industries-carousel-wrapper') || track.parentElement) : null;
        if (!track) return;

        // Ensure no CSS scroll-snap fights smooth programmatic scrolling
        track.style.scrollSnapType = 'none';

        // Remove any prior clones to avoid duplicates if re-run
        track.querySelectorAll('.is-carousel-clone').forEach(el => el.remove());

        const originalCards = Array.from(track.querySelectorAll('.industry-cleanroom-card'));
        const originalCount = originalCards.length;
        if (originalCount <= 1) return;

        // Clone first 6 cards at the end for seamless continuous looping
        const cloneCount = Math.min(6, originalCount);
        for (let i = 0; i < cloneCount; i++) {
            const clone = originalCards[i].cloneNode(true);
            clone.classList.add('is-carousel-clone');
            clone.setAttribute('aria-hidden', 'true');
            track.appendChild(clone);
        }

        const allCards = Array.from(track.querySelectorAll('.industry-cleanroom-card'));

        const STAY_DURATION = 2000; // 2 seconds stay on each card
        let currentIndex = 0;
        let autoScrollTimer = null;
        let isHoveredOrActive = false;
        let isResetting = false;

        function renderDots() {
            if (!dotsContainer) return;
            dotsContainer.innerHTML = '';

            for (let i = 0; i < originalCount; i++) {
                const dot = document.createElement('button');
                dot.type = 'button';
                dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
                dot.setAttribute('aria-label', `Go to industry ${i + 1}`);
                dot.addEventListener('click', () => {
                    currentIndex = i;
                    scrollToCard(currentIndex, true);
                    resetAutoScroll();
                });
                dotsContainer.appendChild(dot);
            }
        }

        function updateActiveStates(idx) {
            const activeDotIndex = idx % originalCount;

            // Highlight active dot
            if (dotsContainer && dotsContainer.children.length) {
                Array.from(dotsContainer.children).forEach((dot, dIdx) => {
                    dot.classList.toggle('active', dIdx === activeDotIndex);
                });
            }

            // Highlight active spotlight card
            allCards.forEach((c, cIdx) => {
                c.classList.toggle('is-active-card', cIdx === idx);
            });
        }

        function getTargetLeft(idx) {
            const card = allCards[idx];
            if (!card) return 0;
            return Math.max(0, card.offsetLeft - track.offsetLeft);
        }

        function scrollToCard(targetIdx, smooth = true) {
            if (targetIdx < 0) targetIdx = 0;
            const targetLeft = getTargetLeft(targetIdx);

            track.scrollTo({
                left: targetLeft,
                behavior: smooth ? 'smooth' : 'instant'
            });

            updateActiveStates(targetIdx);

            // If we scrolled into the cloned region, silently reset back to original
            if (targetIdx >= originalCount && !isResetting) {
                isResetting = true;
                setTimeout(() => {
                    currentIndex = targetIdx - originalCount;
                    const realLeft = getTargetLeft(currentIndex);
                    track.scrollTo({ left: realLeft, behavior: 'instant' });
                    updateActiveStates(currentIndex);
                    isResetting = false;
                }, 520); // allow smooth scroll transition to finish
            }
        }

        function scrollNext() {
            currentIndex++;
            scrollToCard(currentIndex, true);
        }

        function scrollPrev() {
            if (currentIndex <= 0) {
                // Instantly wrap to end clones, then smoothly animate backward
                currentIndex = originalCount;
                const jumpLeft = getTargetLeft(currentIndex);
                track.scrollTo({ left: jumpLeft, behavior: 'instant' });
            }
            currentIndex--;
            scrollToCard(currentIndex, true);
        }

        function startAutoScroll() {
            stopAutoScroll();
            autoScrollTimer = setInterval(() => {
                if (!isHoveredOrActive && !document.hidden) {
                    scrollNext();
                }
            }, STAY_DURATION);
        }

        function stopAutoScroll() {
            if (autoScrollTimer) {
                clearInterval(autoScrollTimer);
                autoScrollTimer = null;
            }
        }

        function resetAutoScroll() {
            stopAutoScroll();
            startAutoScroll();
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                scrollPrev();
                resetAutoScroll();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                scrollNext();
                resetAutoScroll();
            });
        }

        // Pause on hover so the user can inspect cards and see the pop-up/scale animation
        if (wrapper) {
            wrapper.addEventListener('mouseenter', () => {
                isHoveredOrActive = true;
                stopAutoScroll();
            });
            wrapper.addEventListener('mouseleave', () => {
                isHoveredOrActive = false;
                startAutoScroll();
            });
            wrapper.addEventListener('touchstart', () => {
                isHoveredOrActive = true;
                stopAutoScroll();
            }, { passive: true });
            wrapper.addEventListener('touchend', () => {
                isHoveredOrActive = false;
                resetAutoScroll();
            }, { passive: true });
        }

        // Pause when tab is not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                stopAutoScroll();
            } else {
                startAutoScroll();
            }
        });

        window.addEventListener('resize', () => {
            renderDots();
            scrollToCard(currentIndex, false);
        }, { passive: true });

        // Initialize carousel controls and begin 2s stay & forward auto-scrolling
        renderDots();
        scrollToCard(0, false);
        startAutoScroll();
    }

    // -------------------------------------------------------------------------
    // Sticky Navigation Bar - Scroll State & Subtle Transition
    // -------------------------------------------------------------------------
    // -------------------------------------------------------------------------
    // 17. Sticky Header Auto-Hide on Scroll Down / Reveal on Scroll Up
    // -------------------------------------------------------------------------
    function initStickyHeaderScroll() {
        const header = document.querySelector('.site-header');
        if (!header) return;

        let lastScrollY = Math.max(0, window.scrollY || document.documentElement.scrollTop || 0);
        let isScrolled = false;
        let isHidden = false;
        let ticking = false;
        const SCROLL_DELTA_THRESHOLD = 8;
        const TOP_THRESHOLD = 80;

        function updateHeaderState() {
            const currentScrollY = Math.max(0, window.scrollY || document.documentElement.scrollTop || 0);
            const scrollDelta = currentScrollY - lastScrollY;

            // Elevation state (subtle shadow & backdrop transition)
            const shouldBeScrolled = currentScrollY > 15;
            if (shouldBeScrolled !== isScrolled) {
                isScrolled = shouldBeScrolled;
                header.classList.toggle('is-scrolled', isScrolled);
            }

            // Never hide header if mobile drawer navigation is currently open
            const mainNav = document.getElementById('mainNav');
            const isMenuOpen = mainNav && mainNav.classList.contains('is-open');

            if (isMenuOpen || currentScrollY <= TOP_THRESHOLD) {
                // At the top of the page or while menu is open: keep navbar visible
                if (isHidden) {
                    isHidden = false;
                    header.classList.remove('is-hidden');
                }
            } else if (Math.abs(scrollDelta) >= SCROLL_DELTA_THRESHOLD) {
                if (scrollDelta > 0 && currentScrollY > TOP_THRESHOLD) {
                    // Scrolling DOWN: smoothly hide navbar
                    if (!isHidden) {
                        isHidden = true;
                        header.classList.add('is-hidden');
                    }
                } else if (scrollDelta < 0) {
                    // Scrolling UP: smoothly reveal navbar
                    if (isHidden) {
                        isHidden = false;
                        header.classList.remove('is-hidden');
                    }
                }
            }

            lastScrollY = currentScrollY;
            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateHeaderState);
                ticking = true;
            }
        }, { passive: true });

        // Initial check on load
        updateHeaderState();
    }

    initStickyHeaderScroll();
    initIndustriesCarousel();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}



