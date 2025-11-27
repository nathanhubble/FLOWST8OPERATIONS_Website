import { BenefitItem, IconType, StepItem, WorkflowItem, FAQItem, ServiceItem } from './types';

export const APP_NAME = "FLOWST8 OPERATIONS";

export const BENEFITS: BenefitItem[] = [
  {
    title: "Expertise That Scales",
    description: "From training your team on AI tools to building custom automation systems, we deliver the knowledge and infrastructure you need to work smarter.",
    icon: IconType.SCALE
  },
  {
    title: "Tailored Solutions",
    description: "Whether you need strategic guidance, hands-on training, or fully built workflows, we adapt to where you are and what you need most.",
    icon: IconType.CREATIVE
  },
  {
    title: "Sustainable Growth",
    description: "Build internal capabilities through training, gain clarity through consultancy, and free up bandwidth through automation — all designed to compound over time.",
    icon: IconType.CLOCK
  }
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Training & Workshops",
    description: "Upskill your team on AI, automation platforms, and modern workflow tools — without overwhelm.",
    points: [
      "Practical, tool-specific sessions",
      "AI and automation literacy",
      "Best practices for efficient operations",
      "Fast capability uplift for teams"
    ]
  },
  {
    title: "Operations Consultancy & Discovery",
    description: "A structured deep-dive into your workflows to identify bottlenecks, manual work, and automation opportunities.",
    points: [
      "Full workflow mapping",
      "Identification of 3–10 high-value opportunities",
      "Strategic roadmap for improvement",
      "Phased recommendations"
    ]
  },
  {
    title: "Automated Workflow Development",
    description: "Custom-built automations and AI workflows designed to save time, reduce costs, and run reliably in the background.",
    points: [
      "Make / Zapier / n8n integrations & custom development",
      "AI-powered agentic workflows",
      "CRM, email, routing, and data-flow builds",
      "Testing, onboarding, and iteration"
    ]
  }
];

export const PROCESS_STEPS: StepItem[] = [
  {
    number: "01",
    title: "Discovery & Mapping",
    description: "We analyse your operations, identify bottlenecks, and surface 3–10 automation opportunities across your tools and processes."
  },
  {
    number: "02",
    title: "Build & Test",
    description: "We design your workflows using AI models, automation platforms, and lightweight integrations. Everything is customised to your systems, team, and goals."
  },
  {
    number: "03",
    title: "Launch & Iterate",
    description: "Your workflows go live, your team gets clear training, and we refine the system as usage grows."
  }
];

export const WORKFLOW_EXAMPLES: WorkflowItem[] = [
  { title: "End-to-end lead generation & qualification pipelines", icon: IconType.MAIL },
  { title: "Hands-free content creation & distribution systems", icon: IconType.FILE },
  { title: "Intelligent lead routing with instant personalized responses", icon: IconType.USER },
  { title: "AI-powered client onboarding & project intake", icon: IconType.CHECK },
  { title: "Automated sales pipelines & CRM sync workflows", icon: IconType.DATABASE },
  { title: "And much, much more - if you can imagine it, we can build it", icon: IconType.CREATIVE },
];

export const FAQS: FAQItem[] = [
  {
    question: "Do I need any technical experience to work with you?",
    answer: "No — everything is built for you. Whether you're new to automation or already using tools like Make or Zapier, we handle the technical work and provide simple training so your team can use and maintain the system confidently."
  },
  {
    question: "What do I get from the free discovery call?",
    answer: "A quick analysis of your workflows, the fastest automation opportunities, potential time/cost savings, and clear next steps. No pressure, and you keep the roadmap."
  },
  {
    question: "What types of businesses do you support?",
    answer: "Any business with repeatable processes or operational bottlenecks. We work with founders, operations teams, service providers, agencies, marketing teams, and more. If your process is buildable and useful, we can automate it."
  },
  {
    question: "What’s the difference between workshops, consultancy, and workflow development?",
    answer: "• Workshops upskill your team on AI and automation tools.\n• Consultancy & discovery maps your workflows and identifies opportunities.\n• Workflow development builds the automations that save time and reduce manual work.\n\nMost clients use all three — but you can start anywhere."
  },
  {
    question: "Can you work with our existing tools and systems?",
    answer: "Yes. We support Make, Zapier, Airtable, Google Workspace, HubSpot, CRMs, scheduling tools, APIs, n8n, Vapi, custom scripts, and more. If a tool can integrate or connect, we can usually automate it."
  },
  {
    question: "How long does it take to build an automation workflow?",
    answer: "Most builds take 1–2 weeks. Simple automations can be completed in a few days. Larger multi-step systems may take longer — but you’ll always get a clear timeline upfront."
  },
  {
    question: "What if my workflows are messy or undocumented?",
    answer: "That’s completely normal. Most clients come to us with inconsistent tools or unclear processes. The discovery phase includes mapping your current setup before we automate anything."
  },
  {
    question: "How much does it cost to work with you?",
    answer: "Pricing depends on project complexity. Workshops are the lightest, discovery sits in the middle, and custom workflow development varies with scope. Everything is priced upfront — no surprises."
  },
  {
    question: "Can you train my team after the workflows are built?",
    answer: "Yes. Every build includes onboarding sessions and optional follow-up workshops so your team feels confident using the system day to day."
  },
  {
    question: "Do you offer ongoing support or maintenance?",
    answer: "Yes. We provide optional support packages for updates, improvements, and optimisation as your systems evolve."
  }
];
