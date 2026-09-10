/**
 * MAP FILTERS INDIA PVT. LTD. — Service Network & Project Directory
 * Clean Room Creators & Complete HVAC Solutions
 */

export const COUNTRIES = [
    {
        name: "India",
        states: [
            { name: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara"] },
            { name: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur"] },
            { name: "Delhi NCR", cities: ["New Delhi", "Noida", "Gurugram"] },
            { name: "Tamil Nadu", cities: ["Chennai", "Coimbatore"] }
        ]
    },
    {
        name: "UAE",
        states: [
            { name: "Dubai", cities: ["Dubai"] },
            { name: "Abu Dhabi", cities: ["Abu Dhabi", "Al Ain"] },
            { name: "Sharjah", cities: ["Sharjah"] }
        ]
    },
    {
        name: "Saudi Arabia",
        states: [
            { name: "Riyadh Region", cities: ["Riyadh"] },
            { name: "Eastern Province", cities: ["Dammam", "Al Khobar", "Jubail"] },
            { name: "Makkah Region", cities: ["Jeddah"] }
        ]
    },
    {
        name: "Qatar",
        states: [
            { name: "Doha", cities: ["Doha"] },
            { name: "Al Rayyan", cities: ["Al Rayyan", "Ras Laffan"] }
        ]
    },
    {
        name: "Oman",
        states: [
            { name: "Muscat", cities: ["Muscat"] },
            { name: "Al Batinah", cities: ["Sohar"] }
        ]
    }
];

export const INDUSTRIES = [
    "Pharmaceutical Industries",
    "Chemical Industries",
    "Research Industries",
    "Healthcare",
    "Laboratories",
    "Allied Industries"
];

export const PRODUCT_CATEGORIES = [
    "Clean Rooms",
    "Cleanroom Equipment",
    "Panels & Doors",
    "Modular OT",
    "HVAC Systems",
    "HEPA Air & Pre Filters",
    "AMC Services",
    "Laboratory Furniture"
];

export const CERTIFICATIONS = [
    "ISO 9001:2008",
    "ISO 14644",
    "cGMP Compliant",
    "CE Certified"
];

export const LOCATIONS = [
    {
        id: "loc-1",
        name: "MAP FILTERS India HQ",
        country: "India",
        state: "Gujarat",
        city: "Ahmedabad",
        industry: "Pharmaceutical Industries",
        productCategory: "Clean Rooms",
        certification: "ISO 9001:2008",
        type: "Corporate Office & Cleanroom Unit",
        address: "GIDC Industrial Estate, Ahmedabad, Gujarat, India",
        phone: "(+91) - 9823252793",
        email: "karunakar@mapfilters.com",
        lat: 23.0225,
        lng: 72.5714,
        isHeadquarters: true
    },
    {
        id: "loc-2",
        name: "MAP FILTERS Mumbai Hub",
        country: "India",
        state: "Maharashtra",
        city: "Mumbai",
        industry: "Pharmaceutical Industries",
        productCategory: "HVAC Systems",
        certification: "ISO 9001:2008",
        type: "Pharma Cleanroom & HVAC Projects",
        address: "Commercial Hub, BKC, Mumbai, Maharashtra, India",
        phone: "(+91) - 9823252793",
        email: "karunakar@mapfilters.com",
        lat: 19.0760,
        lng: 72.8777
    },
    {
        id: "loc-3",
        name: "MAP FILTERS Delhi NCR",
        country: "India",
        state: "Delhi NCR",
        city: "New Delhi",
        industry: "Research Industries",
        productCategory: "Cleanroom Equipment",
        certification: "ISO 14644",
        type: "Technical Sales & Turnkey Support",
        address: "Industrial Complex, New Delhi / Gurugram, India",
        phone: "(+91) - 9823252793",
        email: "karunakar@mapfilters.com",
        lat: 28.6139,
        lng: 77.2090
    },
    {
        id: "loc-4",
        name: "MAP FILTERS Chennai",
        country: "India",
        state: "Tamil Nadu",
        city: "Chennai",
        industry: "Healthcare",
        productCategory: "Modular OT",
        certification: "cGMP Compliant",
        type: "Healthcare & Modular OT Center",
        address: "Industrial Corridor, Chennai, Tamil Nadu, India",
        phone: "(+91) - 9823252793",
        email: "karunakar@mapfilters.com",
        lat: 13.0827,
        lng: 80.2707
    },
    {
        id: "loc-5",
        name: "MAP FILTERS Middle East (Dubai)",
        country: "UAE",
        state: "Dubai",
        city: "Dubai",
        industry: "Chemical Industries",
        productCategory: "HEPA Air & Pre Filters",
        certification: "ISO 9001:2008",
        type: "Regional Cleanroom Logistics Hub",
        address: "Jebel Ali Industrial Zone, Dubai, UAE",
        phone: "(+91) - 9823252793",
        email: "karunakar@mapfilters.com",
        lat: 25.0112,
        lng: 55.0612,
        isHeadquarters: false
    },
    {
        id: "loc-6",
        name: "MAP FILTERS Abu Dhabi",
        country: "UAE",
        state: "Abu Dhabi",
        city: "Abu Dhabi",
        industry: "Chemical Industries",
        productCategory: "Panels & Doors",
        certification: "ISO 9001:2008",
        type: "Controlled Environment Support",
        address: "Mussafah Industrial Sector, Abu Dhabi, UAE",
        phone: "(+91) - 9823252793",
        email: "karunakar@mapfilters.com",
        lat: 24.4539,
        lng: 54.3773
    },
    {
        id: "loc-7",
        name: "MAP FILTERS Saudi Arabia",
        country: "Saudi Arabia",
        state: "Riyadh Region",
        city: "Riyadh",
        industry: "Laboratories",
        productCategory: "Laboratory Furniture",
        certification: "ISO 14644",
        type: "Lab & Cleanroom Partner",
        address: "Industrial City, Riyadh, KSA",
        phone: "(+91) - 9823252793",
        email: "karunakar@mapfilters.com",
        lat: 24.7136,
        lng: 46.6753
    },
    {
        id: "loc-8",
        name: "MAP FILTERS Dammam",
        country: "Saudi Arabia",
        state: "Eastern Province",
        city: "Dammam",
        industry: "Pharmaceutical Industries",
        productCategory: "AMC Services",
        certification: "cGMP Compliant",
        type: "Industrial Cleanroom Support",
        address: "King Abdulaziz Industrial Area, Dammam, KSA",
        phone: "(+91) - 9823252793",
        email: "karunakar@mapfilters.com",
        lat: 26.4207,
        lng: 50.0888
    },
    {
        id: "loc-9",
        name: "MAP FILTERS Qatar",
        country: "Qatar",
        state: "Doha",
        city: "Doha",
        industry: "Healthcare",
        productCategory: "Modular OT",
        certification: "ISO 9001:2008",
        type: "Hospital & Cleanroom Service",
        address: "Industrial Zone, Doha, Qatar",
        phone: "(+91) - 9823252793",
        email: "karunakar@mapfilters.com",
        lat: 25.2854,
        lng: 51.5310
    },
    {
        id: "loc-10",
        name: "MAP FILTERS Oman (Muscat)",
        country: "Oman",
        state: "Muscat",
        city: "Muscat",
        industry: "Allied Industries",
        productCategory: "HVAC Systems",
        certification: "ISO 9001:2008",
        type: "Cleanroom HVAC Partner",
        address: "Rusayl Industrial Area, Muscat, Oman",
        phone: "(+91) - 9823252793",
        email: "karunakar@mapfilters.com",
        lat: 23.5880,
        lng: 58.3829
    },
    {
        id: "loc-11",
        name: "MAP FILTERS Sohar",
        country: "Oman",
        state: "Al Batinah",
        city: "Sohar",
        industry: "Chemical Industries",
        productCategory: "Clean Rooms",
        certification: "ISO 14644",
        type: "Turnkey Cleanroom Center",
        address: "Freezone Industrial Zone, Sohar, Oman",
        phone: "(+91) - 9823252793",
        email: "karunakar@mapfilters.com",
        lat: 24.3461,
        lng: 56.7075
    }
];
