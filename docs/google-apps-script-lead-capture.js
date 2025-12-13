/**
 * Google Apps Script - Lead Capture Webhook for FLOWST8 Diagnostic Tool
 * 
 * SETUP INSTRUCTIONS:
 * 1. Replace the SPREADSHEET_ID below with your Google Sheet ID
 * 2. Run the "authorize" function FIRST to grant permissions
 * 3. Deploy > New Deployment > Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the deployment URL
 * 5. Add to Vercel as VITE_GOOGLE_SHEETS_ENDPOINT=<your_url>
 */

// ⚠️ YOUR GOOGLE SHEET ID (from the URL)
const SPREADSHEET_ID = '1rm75TKfFZhUs-mrAAq39xdtMGYj3tBAc0vqmypLY74s';

/**
 * RUN THIS FUNCTION FIRST!
 * This will trigger the authorization prompt.
 */
function authorize() {
    // This simple call will trigger Google's authorization dialog
    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    const name = ss.getName();
    Logger.log('✅ Authorization successful! Spreadsheet name: ' + name);

    // Try to get or create the leads sheet
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
        Logger.log('✅ Created "FLOWST8 Leads" sheet with headers');
    } else {
        Logger.log('✅ Found existing "FLOWST8 Leads" sheet');
    }

    Logger.log('🎉 All set! Now create a NEW deployment.');
}

function doPost(e) {
    try {
        const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
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

        // Label mappings
        const labels = {
            scope: { 'agency': 'Service / Agency', 'saas': 'SaaS / Tech', 'ecom': 'E-Commerce', 'trad': 'Traditional' },
            stack: { 'disconnected': 'Scattergun', 'patchwork': 'Patchwork', 'integrated': 'Integrated' },
            reallocation: { 'sales': 'Sales', 'delivery': 'Delivery', 'marketing': 'Marketing', 'product': 'Product', 'retention': 'Retention' },
            revenue: { 10000: '< £10k', 50000: '£10k-50k', 200000: '£50k-200k', 250000: '£200k+' },
            team: { 1: 'Solo', 3: '2-5', 12: '6-20', 30: '20+' },
            friction: { 2: '<5hrs', 7: '5-10hrs', 15: '10-20hrs', 25: '20+hrs' },
            impact: { 15: '£0-25', 35: '£25-50', 75: '£50-100', 175: '£100-250', 300: '£250+' }
        };

        sheet.appendRow([
            data.timestamp || new Date().toISOString(),
            data.name || '',
            data.email || '',
            data.url || '',
            labels.scope[data.scope] || data.scope || '',
            labels.revenue[data.revenue] || data.revenue || '',
            labels.team[data.team] || data.team || '',
            labels.friction[data.friction] || data.friction || '',
            labels.stack[data.stack] || data.stack || '',
            labels.reallocation[data.reallocation] || data.reallocation || '',
            labels.impact[data.impact] || data.impact || '',
            data.operationalWaste || 0,
            data.revenueUplift || 0,
            data.totalLeakage || 0,
            data.efficiencyScore || 0,
            data.annualLeakage || 0,
            'Diagnostic Tool'
        ]);

        return ContentService.createTextOutput(JSON.stringify({ success: true }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        console.error('doPost error:', error);
        return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.message }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

function doGet(e) {
    return ContentService.createTextOutput('FLOWST8 Lead Capture is active.')
        .setMimeType(ContentService.MimeType.TEXT);
}
