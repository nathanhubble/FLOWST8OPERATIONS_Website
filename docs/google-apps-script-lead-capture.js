/**
 * Google Apps Script - Lead Capture Webhook for FLOWST8 Diagnostic Tool
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com
 * 2. Create a new project
 * 3. Replace Code.gs with this content
 * 4. Deploy > New Deployment > Web App
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Copy the deployment URL
 * 6. Add to .env.local as VITE_GOOGLE_SHEETS_ENDPOINT=<your_url>
 * 
 * The script will automatically create columns if they don't exist.
 */

function doPost(e) {
    try {
        // Get or create the spreadsheet and sheet
        const ss = SpreadsheetApp.getActiveSpreadsheet();
        let sheet = ss.getSheetByName('FLOWST8 Leads');

        if (!sheet) {
            sheet = ss.insertSheet('FLOWST8 Leads');
            // Add headers
            sheet.getRange(1, 1, 1, 17).setValues([[
                'Timestamp',
                'Name',
                'Email',
                'Website',
                'Business Type',
                'Monthly Revenue',
                'Team Size',
                'Friction Hours',
                'Tech Stack',
                'Reallocation Focus',
                'Revenue Impact',
                'Operational Waste (£/mo)',
                'Missed Revenue (£/mo)',
                'Total Leakage (£/mo)',
                'Efficiency Score',
                'Annual Leakage (£/yr)',
                'Lead Source'
            ]]);
            sheet.getRange(1, 1, 1, 17).setFontWeight('bold');
        }

        // Parse the incoming data
        const data = JSON.parse(e.postData.contents);

        // Map business type codes to labels
        const scopeLabels = {
            'agency': 'Service / Agency',
            'saas': 'SaaS / Tech',
            'ecom': 'E-Commerce',
            'trad': 'Traditional / Brick & Mortar'
        };

        // Map stack codes to labels
        const stackLabels = {
            'disconnected': 'Scattergun (Disconnected)',
            'patchwork': 'Patchwork (Loose Zaps)',
            'integrated': 'Integrated (Systemised)'
        };

        // Map reallocation codes to labels
        const reallocationLabels = {
            'sales': 'Sales / Outreach',
            'delivery': 'Client Delivery',
            'marketing': 'Marketing / Content',
            'product': 'Product Dev',
            'retention': 'Retention'
        };

        // Format revenue ranges
        const revenueLabels = {
            10000: '< £10k',
            50000: '£10k - £50k',
            200000: '£50k - £200k',
            250000: '£200k+'
        };

        // Format team sizes
        const teamLabels = {
            1: 'Just Me',
            3: 'Small Team (2-5)',
            12: 'Growing (6-20)',
            30: 'Scaling (20+)'
        };

        // Format friction hours
        const frictionLabels = {
            2: '< 5 Hours',
            7: '5 - 10 Hours',
            15: '10 - 20 Hours',
            25: '20+ Hours'
        };

        // Format impact
        const impactLabels = {
            15: '£0 - £25',
            35: '£25 - £50',
            75: '£50 - £100',
            175: '£100 - £250',
            300: '£250+'
        };

        // Append the row
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
            'Diagnostic Tool'
        ]);

        return ContentService
            .createTextOutput(JSON.stringify({ success: true }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        return ContentService
            .createTextOutput(JSON.stringify({ success: false, error: error.message }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

// Test function to verify deployment
function doGet(e) {
    return ContentService
        .createTextOutput('FLOWST8 Lead Capture Webhook is active.')
        .setMimeType(ContentService.MimeType.TEXT);
}
