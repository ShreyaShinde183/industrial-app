const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const DB_FILE = path.join(__dirname, 'inquiries.json');

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to read inquiries
function getInquiries() {
    if (!fs.existsSync(DB_FILE)) return [];
    try {
        return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
    } catch {
        return [];
    }
}

// Helper function to save inquiries
function saveInquiry(data) {
    const list = getInquiries();
    list.push(data);
    fs.writeFileSync(DB_FILE, JSON.stringify(list, null, 2));
}

// 1. POST Endpoint: Receive Quote Request from the Modal Form
app.post('/api/quote', (req, res) => {
    const { name, email, phone, product, details, source } = req.body;

    const newQuote = {
        id: Date.now(),
        type: 'RFQ_QUOTE',
        name,
        email,
        phone,
        product,
        details,
        source: source || 'Website',
        submittedAt: new Date().toISOString()
    };

    saveInquiry(newQuote);
    console.log('✅ New Quote Received:', newQuote);

    res.json({ success: true, message: 'Quote received successfully!' });
});

// 2. POST Endpoint: Receive Quick Footer Inquiry
app.post('/api/inquiry', (req, res) => {
    const { name, contact, product, details } = req.body;

    const newInquiry = {
        id: Date.now(),
        type: 'FOOTER_INQUIRY',
        name,
        contact,
        product,
        details,
        submittedAt: new Date().toISOString()
    };

    saveInquiry(newInquiry);
    console.log('✅ New Inquiry Received:', newInquiry);

    res.json({ success: true, message: 'Inquiry received successfully!' });
});

// 3. GET Endpoint: View all submitted quotes (Admin view)
app.get('/api/inquiries', (req, res) => {
    res.json(getInquiries());
});

app.listen(PORT, () => {
    console.log(`🚀 Cleanroom Backend running on http://localhost:${PORT}`);
});
