import React from 'react';

const Marquee: React.FC = () => {
    // Tool logos optimized for prospects - High quality brand colors
    const toolLogos = [
        // AI & Automation Core
        { name: 'OpenAI', logo: 'https://cdn.simpleicons.org/openai/10A37F' },
        { name: 'Make', logo: 'https://cdn.simpleicons.org/make/6D00CC' },
        { name: 'Zapier', logo: 'https://cdn.simpleicons.org/zapier/FF4A00' },
        { name: 'n8n', logo: 'https://cdn.simpleicons.org/n8n/EA4B71' },

        // Data & Spreadsheets
        { name: 'Airtable', logo: 'https://cdn.simpleicons.org/airtable/18BFFF' },
        { name: 'Google Sheets', logo: 'https://cdn.simpleicons.org/googlesheets/34A853' },
        { name: 'Microsoft Excel', logo: 'https://cdn.simpleicons.org/microsoftexcel/217346' },

        // Project Management
        { name: 'Notion', logo: 'https://cdn.simpleicons.org/notion/000000' },
        { name: 'ClickUp', logo: 'https://cdn.simpleicons.org/clickup/7B68EE' },
        { name: 'Asana', logo: 'https://cdn.simpleicons.org/asana/F06A6A' },
        { name: 'Monday.com', logo: 'https://cdn.simpleicons.org/monday/FF3D57' },

        // Communication
        { name: 'Slack', logo: 'https://cdn.simpleicons.org/slack/4A154B' },
        { name: 'Microsoft Teams', logo: 'https://cdn.simpleicons.org/microsoftteams/6264A7' },
        { name: 'Gmail', logo: 'https://cdn.simpleicons.org/gmail/EA4335' },

        // CRM & Sales
        { name: 'HubSpot', logo: 'https://cdn.simpleicons.org/hubspot/FF7A59' },
        { name: 'Salesforce', logo: 'https://cdn.simpleicons.org/salesforce/00A1E0' },

        // Finance & Payments
        { name: 'Xero', logo: 'https://cdn.simpleicons.org/xero/13B5EA' },
        { name: 'Stripe', logo: 'https://cdn.simpleicons.org/stripe/635BFF' },
        { name: 'QuickBooks', logo: 'https://cdn.simpleicons.org/quickbooks/2CA01C' },

        // E-commerce
        { name: 'Shopify', logo: 'https://cdn.simpleicons.org/shopify/7AB55C' },
        { name: 'WooCommerce', logo: 'https://cdn.simpleicons.org/woocommerce/96588A' },
    ];

    // Triple duplication for seamless infinite scroll
    const tripleLogos = [...toolLogos, ...toolLogos, ...toolLogos];

    return (
        <div className="relative w-full overflow-hidden bg-gradient-to-r from-teal-600 to-sage border-y border-teal-700 py-6">
            {/* Single Row - Left to Right */}
            <div className="flex animate-marquee whitespace-nowrap">
                {tripleLogos.map((tool, idx) => (
                    <div
                        key={`top-${idx}`}
                        className="mx-3 flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-xl hover:scale-110 transition-all duration-300 border border-white/20"
                    >
                        <img
                            src={tool.logo}
                            alt={tool.name}
                            className="w-10 h-10 object-contain"
                            title={tool.name}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
