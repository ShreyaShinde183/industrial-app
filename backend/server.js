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
    list.unshift(data); // Add newest first
    fs.writeFileSync(DB_FILE, JSON.stringify(list, null, 2));
}

// 1. POST Endpoint: Receive Quote Request from the Modal Form
app.post('/api/quote', (req, res) => {
    const { name, company, email, phone, product, quantity, notes, details, source } = req.body;

    const newQuote = {
        id: Date.now(),
        type: 'RFQ_QUOTE',
        name: name || 'Anonymous',
        company: company || 'N/A',
        email: email || 'N/A',
        phone: phone || 'N/A',
        product: product || 'General Cleanroom',
        quantity: quantity || 'N/A',
        notes: notes || details || '',
        source: source || 'Website',
        submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };

    saveInquiry(newQuote);
    console.log('\n==============================');
    console.log('✅ NEW QUOTE REQUEST RECEIVED:');
    console.log(JSON.stringify(newQuote, null, 2));
    console.log('==============================\n');

    res.json({ success: true, message: 'Quote received successfully!' });
});

// 2. POST Endpoint: Receive Quick Footer Inquiry
app.post('/api/inquiry', (req, res) => {
    const { name, contact, product, details } = req.body;

    const newInquiry = {
        id: Date.now(),
        type: 'FOOTER_INQUIRY',
        name: name || 'Anonymous',
        contact: contact || 'N/A',
        product: product || 'General Inquiry',
        details: details || '',
        submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };

    saveInquiry(newInquiry);
    console.log('\n==============================');
    console.log('✅ NEW FOOTER INQUIRY RECEIVED:');
    console.log(JSON.stringify(newInquiry, null, 2));
    console.log('==============================\n');

    res.json({ success: true, message: 'Inquiry received successfully!' });
});

// 3. GET Endpoint: Return JSON data of all inquiries
app.get('/api/inquiries', (req, res) => {
    res.json(getInquiries());
});

// 4. GET Endpoint: Visual Admin Dashboard to see inquiries in browser
app.get(['/', '/admin'], (req, res) => {
    const inquiries = getInquiries();

    const rows = inquiries.length === 0
        ? `<tr><td colspan="8" style="text-align:center; padding: 2rem; color: #64748b;">No quote requests or inquiries received yet. Submit a form on http://localhost:5173 to test!</td></tr>`
        : inquiries.map((q, i) => `
            <tr style="border-bottom: 1px solid #e2e8f0;">
                <td style="padding: 12px 16px; font-weight: 600; color: #0f172a;">#${inquiries.length - i}</td>
                <td style="padding: 12px 16px;">
                    <span style="display: inline-block; padding: 3px 8px; border-radius: 999px; font-size: 11px; font-weight: 700; background: ${q.type === 'RFQ_QUOTE' ? '#dcfce7; color: #166534' : '#e0e7ff; color: #3730a3'};">
                        ${q.type}
                    </span>
                </td>
                <td style="padding: 12px 16px; font-weight: 600; color: #0f172a;">
                    ${q.name}
                    ${q.company && q.company !== 'N/A' ? `<div style="font-size: 12px; font-weight: 400; color: #64748b;">🏢 ${q.company}</div>` : ''}
                </td>
                <td style="padding: 12px 16px;">
                    <div><a href="mailto:${q.email}" style="color: #0284c7; text-decoration: none;">✉️ ${q.email || q.contact}</a></div>
                    ${q.phone ? `<div style="font-size: 12px; margin-top: 3px;"><a href="tel:${q.phone}" style="color: #16a34a; text-decoration: none;">📞 ${q.phone}</a></div>` : ''}
                </td>
                <td style="padding: 12px 16px; font-weight: 500; color: #00632e;">
                    ${q.product}
                    ${q.quantity && q.quantity !== 'N/A' ? `<div style="font-size: 12px; color: #64748b;">Area: ${q.quantity}</div>` : ''}
                </td>
                <td style="padding: 12px 16px; font-size: 12px; color: #475569; max-width: 260px; word-break: break-word;">
                    ${q.notes || q.details || '—'}
                </td>
                <td style="padding: 12px 16px; font-size: 12px; color: #64748b; white-space: nowrap;">
                    ${q.submittedAt}
                </td>
            </tr>
        `).join('');

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>MAP FILTERS Leads & Quotes Dashboard</title>
            <style>
                * { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }
                body { background: #f8fafc; color: #0f172a; padding: 2rem 1.5rem; }
                .container { max-width: 1200px; margin: 0 auto; }
                .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 1px solid #e2e8f0; }
                .title-wrap h1 { font-size: 22px; color: #00632e; display: flex; align-items: center; gap: 8px; }
                .title-wrap p { font-size: 13px; color: #64748b; margin-top: 4px; }
                .btn { display: inline-flex; align-items: center; gap: 6px; padding: 8px 14px; border-radius: 6px; background: #00632e; color: #fff; text-decoration: none; font-size: 13px; font-weight: 600; }
                .btn:hover { background: #004d24; }
                .card { background: #fff; border-radius: 8px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
                table { width: 100%; border-collapse: collapse; text-align: left; font-size: 13px; }
                thead th { background: #f1f5f9; padding: 12px 16px; font-weight: 700; color: #475569; border-bottom: 2px solid #e2e8f0; }
                .badge-count { background: #e8f7ee; color: #00632e; font-weight: 700; padding: 2px 8px; border-radius: 999px; font-size: 12px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <div class="title-wrap">
                        <h1>🌿 MAP FILTERS — Leads & Quotes Dashboard</h1>
                        <p>Real-time backend storage for Cleanroom & HVAC quote requests.</p>
                    </div>
                    <div>
                        <span class="badge-count">${inquiries.length} Inquiries Total</span>
                    </div>
                </div>

                <div class="card">
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Type</th>
                                <th>Customer & Company</th>
                                <th>Contact Details</th>
                                <th>Product & Scope</th>
                                <th>Requirements / Notes</th>
                                <th>Timestamp</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${rows}
                        </tbody>
                    </table>
                </div>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`🚀 Cleanroom Backend running on http://localhost:${PORT}`);
    console.log(`📊 View Leads Dashboard at: http://localhost:${PORT}/admin`);
    console.log(`📦 JSON API at: http://localhost:${PORT}/api/inquiries`);
});
