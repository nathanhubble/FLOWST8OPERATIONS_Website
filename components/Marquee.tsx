import React from 'react';

const Marquee: React.FC = () => {
    const tools = [
        'ChatGPT', 'Claude AI', 'Gemini', 'Make.com', 'Zapier', 'n8n',
        'Airtable', 'Google Workspace', 'HubSpot', 'Salesforce',
        'Monday.com', 'Asana', 'QuickBooks', 'Apify', 'Slack',
        'Notion', 'ClickUp', 'Stripe', 'Webflow', 'Shopify'
    ];

    // Triple duplication for seamless infinite scroll
    const tripleTools = [...tools, ...tools, ...tools];

    return (
        <div className="relative w-full overflow-hidden bg-gradient-to-r from-teal-600 to-sage border-y border-teal-700 py-3">
            <div className="flex animate-marquee whitespace-nowrap">
                {tripleTools.map((tool, idx) => (
                    <span
                        key={idx}
                        className="mx-8 text-white font-bold text-sm tracking-wide uppercase flex-shrink-0"
                    >
                        {tool}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
