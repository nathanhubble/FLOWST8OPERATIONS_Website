import React from 'react';
import { ServiceItem, FaqItem, CapabilityItem, NavLink } from './types';
import { Zap, Database, BarChart3, Users, Send, Settings, ShieldCheck, Cpu, Code } from 'lucide-react';

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Method', href: '#method' },
  { label: 'Examples', href: '#examples' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Free Efficiency Scan', href: '#diagnostic', isSpecial: true },
];

export const TECH_STACK = [
  { name: 'Make', logo: 'https://cdn.simpleicons.org/make' },
  { name: 'Zapier', logo: 'https://cdn.simpleicons.org/zapier' },
  { name: 'Airtable', logo: 'https://cdn.simpleicons.org/airtable' },
  { name: 'HubSpot', logo: 'https://cdn.simpleicons.org/hubspot' },
  { name: 'Slack', logo: 'https://cdn.simpleicons.org/slack' },
  { name: 'Notion', logo: 'https://cdn.simpleicons.org/notion' },
  { name: 'OpenAI', logo: 'https://cdn.simpleicons.org/openai' },
  { name: 'n8n', logo: 'https://cdn.simpleicons.org/n8n' },
  { name: 'Gmail', logo: 'https://cdn.simpleicons.org/gmail' },
  { name: 'Webflow', logo: 'https://cdn.simpleicons.org/webflow' },
  { name: 'Stripe', logo: 'https://cdn.simpleicons.org/stripe' },
  { name: 'Gemini', logo: 'https://cdn.simpleicons.org/googlegemini' }
];

export const AUDIENCE_TAGS = [
  'SMB Founders',
  'Creative Agencies',
  'Event Production',
  'Finance Firms',
  'Ops Directors',
  'Growth Teams'
];

export const WHY_US_CARDS: ServiceItem[] = [
  {
    title: "Engineered Scalability",
    description: "We combine code with business logic. Systems that handle growth without breaking under pressure.",
    icon: <Database className="w-6 h-6 text-void" />
  },
  {
    title: "Tailored Architecture",
    description: "No cookie-cutters. We audit your specific stack to uncover high-ROI friction points unique to you.",
    icon: <Settings className="w-6 h-6 text-void" />
  },
  {
    title: "Sustainable Velocity",
    description: "Remove bottlenecks. Unlock capacity. Focus on high-value strategy instead of fire-fighting.",
    icon: <Zap className="w-6 h-6 text-void" />
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Training & Workshops",
    description: "Upskilling teams. Prompt engineering mastery. Demystifying the tech stack for non-technical leaders.",
    icon: <Users className="w-6 h-6 text-void" />
  },
  {
    title: "Consultancy & Audits",
    description: "Deep-dive workflow mapping. Bottleneck analysis. Transformation roadmaps backed by data.",
    icon: <ShieldCheck className="w-6 h-6 text-void" />
  },
  {
    title: "Custom Development",
    description: "Building the machine. Complex Make/n8n scenarios. AI Agents. Custom APIs and integrations.",
    icon: <Code className="w-6 h-6 text-void" />
  }
];

export const CAPABILITIES: CapabilityItem[] = [
  { 
    title: "Lead Generation", 
    iconName: "Filter",
    detail: "Enrich and score leads instantly.",
    metric: "Save 10hrs/week"
  },
  { 
    title: "Content Systems", 
    iconName: "FileText",
    detail: "Auto-post across all channels.",
    metric: "5x Output"
  },
  { 
    title: "Intelligent Outreach", 
    iconName: "Send",
    detail: "Personalised at scale.",
    metric: "+20% Response"
  },
  { 
    title: "1-Click Onboarding", 
    iconName: "UserPlus",
    detail: "Contract to Onboarding Sequence in 1 click.",
    metric: "Zero Friction"
  },
  { 
    title: "CRM Sync", 
    iconName: "RefreshCw",
    detail: "Databases always match reality.",
    metric: "100% Accuracy"
  },
  { 
    title: "Auto-Reporting", 
    iconName: "BarChart",
    detail: "KPIs delivered to Slack/Email.",
    metric: "No Manual Entry"
  },
  // New Rows
  {
    title: "Bespoke Internal Apps",
    iconName: "AppWindow",
    detail: "Replace messy spreadsheets with secure, custom-coded web apps and dashboards.",
    metric: "Est. Efficiency: +40%"
  },
  {
    title: "Autonomous AI Agents",
    iconName: "Bot",
    detail: "Deploy intelligent agents to handle support, triage, and scheduling 24/7.",
    metric: "Response Time: Instant"
  },
  {
    title: "Infinite Architecture",
    iconName: "Infinity",
    detail: "If you can imagine the logic, we can write the code. No constraints.",
    metric: "Limitless Scale"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Do I need technical experience?",
    answer: "No. We build the engine; you drive it. We provide full documentation and training for your team to manage the systems we deploy."
  },
  {
    question: "What are the costs involved?",
    answer: "We operate on a project basis or retainer. Audits start at £1.5k. Full system builds typically range from £5k to £20k depending on complexity."
  },
  {
    question: "How long does implementation take?",
    answer: "Quick wins are deployed in 48 hours. Complex ecosystem architecture typically takes 2-4 weeks from discovery to hand-off."
  },
  {
    question: "Do you support the systems after launch?",
    answer: "Yes. We offer monthly maintenance retainers to ensure your APIs stay connected and your workflows evolve with your business."
  }
];

export const FOOTER_LINKS = [
  { label: 'About', key: 'ABOUT' },
  { label: 'Contact', key: 'CONTACT' },
  { label: 'Privacy', key: 'PRIVACY' }
];