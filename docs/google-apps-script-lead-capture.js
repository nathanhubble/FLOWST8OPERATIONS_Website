/**
 * CONTAINER-BOUND SCRIPT VERSION
 * 
 * This script should be created FROM WITHIN your Google Sheet:
 * 1. Open your Google Sheet (FLOWST8 Website Leads)
 * 2. Go to Extensions → Apps Script
 * 3. Delete any existing code and paste this entire file
 * 4. Click Save (Ctrl+S / Cmd+S)
 * 5. Run the "setup" function to create headers
 * 6. Deploy → New Deployment → Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 7. Click Deploy, authorize when prompted
 * 8. Copy the URL and add to Vercel as VITE_GOOGLE_SHEETS_ENDPOINT
 */

/**
 * Run this first to set up the sheet headers
 */
function setup() {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName('FLOWST8 Leads');

    if (!sheet) {
        sheet = ss.insertSheet('FLOWST8 Leads');
    }

    // Set headers
    sheet.getRange(1, 1, 1, 17).setValues([[
        'Timestamp', 'Name', 'Email', 'Website', 'Business Type',
        'Monthly Revenue', 'Team Size', 'Friction Hours', 'Tech Stack',
        'Reallocation Focus', 'Revenue Impact', 'Operational Waste (£/mo)',
        'Missed Revenue (£/mo)', 'Total Leakage (£/mo)', 'Efficiency Score',
        'Annual Leakage (£/yr)', 'Lead Source'
    ]]);
    sheet.getRange(1, 1, 1, 17).setFontWeight('bold');

    Logger.log('✅ Setup complete! Headers created.');
    Logger.log('Now go to Deploy → New Deployment → Web App');
}

/**
 * Handles POST requests from the website diagnostic tool
 */
function doPost(e) {
    try {
        const ss = SpreadsheetApp.getActiveSpreadsheet();
        let sheet = ss.getSheetByName('FLOWST8 Leads');

        if (!sheet) {
            sheet = ss.insertSheet('FLOWST8 Leads');
            sheet.getRange(1, 1, 1, 17).setValues([[
                'Timestamp', 'Name', 'Email', 'Website', 'Business Type',
                'Monthly Revenue', 'Team Size', 'Friction Hours', 'Tech Stack',
                'Reallocation Focus', 'Revenue Impact', 'Operational Waste (£/mo)',
                'Missed Revenue (£/mo)', 'Total Leakage (£/mo)', 'Efficiency Score',
                'Annual Leakage (£/yr)', 'Lead Source'
            ]]);
            sheet.getRange(1, 1, 1, 17).setFontWeight('bold');
        }

        const data = JSON.parse(e.postData.contents);

        // Label mappings for readability
        const scopeLabels = { 'agency': 'Service/Agency', 'saas': 'SaaS/Tech', 'ecom': 'E-Commerce', 'trad': 'Traditional' };
        const stackLabels = { 'disconnected': 'Disconnected', 'patchwork': 'Patchwork', 'integrated': 'Integrated' };
        const reallocationLabels = { 'sales': 'Sales', 'delivery': 'Delivery', 'marketing': 'Marketing', 'product': 'Product', 'retention': 'Retention' };
        const revenueLabels = { 10000: '<£10k', 50000: '£10k-50k', 200000: '£50k-200k', 250000: '£200k+' };
        const teamLabels = { 1: 'Solo', 3: '2-5', 12: '6-20', 30: '20+' };
        const frictionLabels = { 2: '<5hrs', 7: '5-10hrs', 15: '10-20hrs', 25: '20+hrs' };
        const impactLabels = { 15: '£0-25', 35: '£25-50', 75: '£50-100', 175: '£100-250', 300: '£250+' };

        sheet.appendRow([
            data.timestamp || new Date().toISOString(),
            data.name || '',
            data.email || '',
            data.url || '',
            scopeLabels[data.scope] || data.scope || '',
            revenueLabels[data.revenue] || data.revenue || '',
            teamLabels[data.team] || data.team || '',
            frictionLabels[data.friction] || data.friction || '',
            stackLabels[data.stack] || data.stack || '',
            reallocationLabels[data.reallocation] || data.reallocation || '',
            impactLabels[data.impact] || data.impact || '',
            data.operationalWaste || 0,
            data.revenueUplift || 0,
            data.totalLeakage || 0,
            data.efficiencyScore || 0,
            data.annualLeakage || 0,
            'Website Diagnostic'
        ]);

        return ContentService.createTextOutput(JSON.stringify({ success: true }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        console.error('Error:', error);
        return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.message }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

/**
 * Handles GET requests (for testing the endpoint)
 */
function doGet(e) {
    return ContentService.createTextOutput('FLOWST8 Lead Capture Webhook is active!')
        .setMimeType(ContentService.MimeType.TEXT);
}
