import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, ChevronRight, Check, ArrowRight,
  Settings, BarChart, Code, Clock, Zap, Database,
  Users, Briefcase, Rocket, ChevronDown, MessageSquare
} from 'lucide-react';
import { Button } from './components/ui/Button';
import { FadeIn } from './components/ui/FadeIn';
import { Marquee } from './components/Marquee';
import { InteractiveDemo } from './components/InteractiveDemo';
import { ModalOverlay } from './components/Modals';
import { ModalType } from './types';

// --- ANIMATED BACKGROUND COMPONENT ---
const CyberGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const particles: { x: number, y: number, vx: number, vy: number }[] = [];
    const particleCount = Math.min(Math.floor(width * height / 12000), 100); // Responsive count

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw Dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? '#2dd4bf' : '#10b981'; // Primary / Secondary
        ctx.fill();

        // Draw Connections to other particles
        particles.slice(i + 1).forEach(p2 => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(45, 212, 191, ${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });

        // Draw Connections to Mouse
        const mdx = p.x - mouseRef.current.x;
        const mdy = p.y - mouseRef.current.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDist < 200) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(16, 185, 129, ${0.3 * (1 - mDist / 200)})`; // Brighter interaction
          ctx.lineWidth = 0.8;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.stroke();
        }
      });

      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40 mix-blend-screen"
    />
  );
};

// --- DATA ---
const SERVICES = [
  {
    title: "Training & Workshops",
    description: "Empower your team to leverage AI tools effectively. We demystify the tech and teach practical, day-to-day application.",
    icon: <Users className="w-8 h-8 text-primary" />,
    features: [
      "Team upskilling workshops",
      "Prompt engineering mastery",
      "Platform-specific training (ChatGPT, CRMs, Google, and more)"
    ],
    accent: "border-primary/20 hover:border-primary/50"
  },
  {
    title: "Consultancy & Audits",
    description: "We deep-dive into your operations, map workflows, find bottlenecks, and deliver an actionable roadmap with quantified ROI.",
    icon: <BarChart className="w-8 h-8 text-secondary" />,
    features: [
      "Quick Strike Audits (1-2 week assessment identifying highest impact automations)",
      "Transformation Audits (Multi-phase evaluation, risk analysis & solution architecture)",
      "ROI & Cost of Inaction Analysis"
    ],
    accent: "border-secondary/20 hover:border-secondary/50"
  },
  {
    title: "Custom Development",
    description: "We build the intelligent systems that run your business 24/7. Robust, scalable, and designed for real-world complexity.",
    icon: <Code className="w-8 h-8 text-white" />,
    features: [
      "Complex Make/Zapier/n8n scenarios",
      "AI Agent development",
      "Custom API integrations & workflows"
    ],
    accent: "border-white/20 hover:border-white/50"
  }
];

const EXAMPLES = [
  { title: "Lead Qualification", desc: "Pipelines that instantly enrich, score, qualify, and route leads based on behaviour.", icon: <Zap className="text-secondary" /> },
  { title: "Content Systems", desc: "Automated creation & distribution workflows across social platforms.", icon: <Database className="text-primary" /> },
  { title: "Intelligent Outreach", desc: "Personalised outreach systems & inquiry response systems using LLMs.", icon: <MessageSquare className="text-pink-400" /> },
  { title: "1-Click Client Onboarding", desc: "Generate contracts, project folders, welcome emails, and task boards with a single trigger.", icon: <Users className="text-accent" /> },
  { title: "Multi-Platform CRM Sync", desc: "Keep CRMs, databases, project management, and billing systems perfectly synchronised.", icon: <Settings className="text-white" /> },
  { title: "Auto-Generated Reports", desc: "Compile weekly metrics from 5+ sources into a formatted PDF summary — delivered on schedule.", icon: <BarChart className="text-green-400" /> },
];

const FAQS = [
  { q: "Do I need technical experience?", a: "No. We handle the technical complexities. Our training is designed to be accessible for non-technical teams." },
  { q: "What do I get from the free discovery call?", a: "A clear roadmap of where your inefficiencies are and a calculated ROI for fixing them." },
  { q: "What types of businesses do you support?", a: "We work with SMBs of any sector, size, or revenue level." },
  { q: "Difference between workshops, consultancy, and development?", a: "Workshops teach you. Consultancy plans the strategy. Development builds the machine." },
  { q: "Can you work with our existing tools?", a: "Yes. We specialise in integrating tools you already use like Slack, HubSpot, and Google Workspace." },
  { q: "How long does automation take?", a: "Quick wins take 1-2 weeks. Transformation systems can take 4-8+ weeks." },
  { q: "What if my workflows are messy?", a: "That's normal. Part of our 'Consultancy' phase is cleaning and standardising processes before automating them." },
  { q: "How much does it cost?", a: "Education and workshops are fixed fee. Consultancy and audits start from £1k. Custom development is quoted based on scope and complexity." },
  { q: "Can you train my team after workflows are built?", a: "Absolutely. We provide in-person training, Loom video libraries, and live handover sessions." },
  { q: "Do you offer ongoing support?", a: "Yes, we offer retainer packages for maintenance and iterative improvements." },
];

// --- SUB-COMPONENTS ---

const HeroSection = ({ onBook }: { onBook: () => void }) => (
  <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-background">
    {/* Animated Cyber Grid Background */}
    <CyberGrid />

    {/* Subtle Gradient Overlay for Text Readability */}
    <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10 text-center">
      <FadeIn delay={150}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-8 shadow-[0_0_10px_rgba(45,212,191,0.2)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Accepting New Clients for Q4
        </div>
      </FadeIn>

      <FadeIn delay={200} className="relative">
        <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight tracking-tight mb-8 text-white drop-shadow-2xl">
          Systemise Your Work. <br />
          <span className="text-gradient-brand animate-glow">Scale Your Impact.</span>
        </h1>
      </FadeIn>

      <FadeIn delay={300}>
        <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          FLOWST8 OPERATIONS eliminates the manual work slowing your team down through expert <span className="text-white font-medium">AI training, automation, and operational consulting</span>.
        </p>
      </FadeIn>

      <FadeIn delay={400} className="flex flex-col sm:flex-row sm:items-stretch justify-center gap-6">
        <Button size="lg" onClick={onBook} className="w-full sm:w-auto text-lg whitespace-nowrap px-8">
          Book Your Free Discovery Call <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
        </Button>
        <Button variant="secondary" size="lg" onClick={() => document.getElementById('examples')?.scrollIntoView({ behavior: 'smooth' })} className="w-full sm:w-auto text-lg whitespace-nowrap px-8">
          See Real Workflow Examples
        </Button>
      </FadeIn>


    </div>

    <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
  </section>
);

const SectionHeading = ({ children, subtitle, center = true }: { children?: React.ReactNode, subtitle?: string, center?: boolean }) => (
  <div className={`mb-16 ${center ? 'text-center' : ''}`}>
    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white tracking-tight">{children}</h2>
    {subtitle && <p className="text-text-muted text-xl max-w-2xl mx-auto font-light">{subtitle}</p>}
  </div>
);

// --- MAIN COMPONENT ---

export default function App() {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openModal = (type: ModalType) => setModalType(type);
  const closeModal = () => setModalType(null);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-background min-h-screen text-text selection:bg-primary selection:text-white font-sans">

      {/* HEADER - Floating Glass Bar */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-4xl transition-all">
        <div className="glass-panel rounded-full px-6 md:px-8 py-3 flex items-center justify-between shadow-2xl border border-white/10 bg-surface/80">
          <div className="text-xl font-display font-bold tracking-tight text-white flex items-center gap-2">
            FLOWST8 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">OPERATIONS</span><span className="text-white">.</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Services</button>
            <button onClick={() => scrollToSection('process')} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">How it Works</button>
            <button onClick={() => scrollToSection('examples')} className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Examples</button>
            <Button size="sm" onClick={() => openModal('booking')} className="shadow-none py-2 px-4 rounded-full">Book Discovery Call</Button>
          </nav>

          <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-background pt-32 px-4 md:hidden animate-in slide-in-from-right duration-200">
          <div className="flex flex-col space-y-6 text-xl font-display font-bold">
            <button onClick={() => scrollToSection('services')} className="text-left border-b border-white/10 pb-4 text-white">Services</button>
            <button onClick={() => scrollToSection('process')} className="text-left border-b border-white/10 pb-4 text-white">How it Works</button>
            <button onClick={() => scrollToSection('examples')} className="text-left border-b border-white/10 pb-4 text-white">Examples</button>
            <button onClick={() => { setMobileMenuOpen(false); openModal('contact'); }} className="text-left border-b border-white/10 pb-4 text-white">Contact</button>
            <Button fullWidth onClick={() => { setMobileMenuOpen(false); openModal('booking'); }}>Book Call</Button>
          </div>
        </div>
      )}

      <main>
        <HeroSection onBook={() => openModal('booking')} />

        <FadeIn direction="up" delay={200}>
          <Marquee />
        </FadeIn>

        {/* AUDIENCE PILLS */}
        <section className="py-16 border-b border-white/5 bg-surface/20">
          <div className="container mx-auto px-4 text-center">
            <FadeIn delay={100}>
              <p className="text-text-muted text-sm font-semibold uppercase tracking-widest mb-8">Built for ambitious teams tired of the busy work</p>
              <div className="flex flex-wrap justify-center gap-4">
                {["Founders", "Operations Leads", "Growth Teams", "Agencies", "Consultants", "SaaS Companies"].map((tag, i) => (
                  <div key={i} className="px-6 py-2.5 rounded-full border border-white/5 bg-surface-highlight text-gray-300 hover:border-primary/50 hover:text-white hover:shadow-[0_0_15px_rgba(45,212,191,0.2)] transition-all cursor-default text-sm font-medium">
                    {tag}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <FadeIn delay={200}>
          <InteractiveDemo />
        </FadeIn>

        {/* BENEFITS */}
        <section className="py-20 bg-background relative">
          <div className="container mx-auto px-4">
            <FadeIn>
              <SectionHeading subtitle="We don't just build zaps. We build scalable operating systems.">
                Why Work With Us
              </SectionHeading>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { h: "Expertise That Scales", p: "We combine technical engineering with business logic. Your automations won't just work; they'll handle growth without breaking.", i: <Rocket className="w-6 h-6 text-primary" /> },
                { h: "Tailored to Your Reality", p: "We audit your specific workflows and tech stack to uncover the highest ROI opportunities — no cookie-cutters.", i: <Settings className="w-6 h-6 text-secondary" /> },
                { h: "Sustainable Growth", p: "By removing manual bottlenecks, we unlock your team's capacity to focus on high-value strategy and creative work.", i: <BarChart className="w-6 h-6 text-accent" /> }
              ].map((b, i) => (
                <FadeIn key={i} delay={i * 100} className="p-8 rounded-3xl bg-surface border border-white/5 hover:border-primary/30 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 group">
                  <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-primary/20 transition-colors">
                    {b.i}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 font-display text-white">{b.h}</h3>
                  <p className="text-text-muted leading-relaxed text-lg">{b.p}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-20 relative bg-surface/20">
          <div className="container mx-auto px-4">
            <FadeIn>
              <SectionHeading subtitle="From upskilling your team to building your entire operating system.">
                Our Core Services
              </SectionHeading>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {SERVICES.map((s, i) => (
                <FadeIn key={i} delay={i * 100} className={`glass-panel p-8 md:p-10 rounded-3xl border ${s.accent} group relative overflow-hidden transition-all duration-500`}>
                  <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-125 duration-700 pointer-events-none">
                    {s.icon}
                  </div>
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-8 p-4 bg-white/5 w-fit rounded-2xl border border-white/5">{s.icon}</div>
                    <h3 className="text-2xl font-bold font-display mb-4 text-white">{s.title}</h3>
                    <p className="text-text-muted mb-8 text-lg">{s.description}</p>
                    <ul className="space-y-4 mb-10 flex-grow">
                      {s.features.map((f, fi) => (
                        <li key={fi} className="flex items-start text-sm text-gray-300">
                          <div className="mt-1 mr-3 p-0.5 rounded-full bg-primary/20">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" fullWidth onClick={() => openModal('booking')} className="mt-auto group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                      Learn More <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS TIMELINE */}
        <section id="process" className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

          <div className="container mx-auto px-4 relative z-10">
            <FadeIn>
              <SectionHeading center>How Development Works</SectionHeading>
            </FadeIn>

            <div className="max-w-5xl mx-auto mt-12 relative">
              {/* Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent" />

              {[
                { step: "01", title: "Discovery & Mapping", desc: "We audit your current state, interview key stakeholders, and map every manual process to identify high-impact automation opportunities." },
                { step: "02", title: "Design & Build", desc: "Our engineers architect the solution using best-in-class tools (Make, OpenAI, n8n, etc.), rigorously testing for edge cases and failure points." },
                { step: "03", title: "Deploy & Support", desc: "We launch the system, train your team, and provide ongoing support for monitoring, error-handling, and continuous improvement as your needs evolve." }
              ].map((item, i) => (
                <FadeIn key={i} direction={i % 2 === 0 ? 'left' : 'right'} className={`flex flex-col md:flex-row items-center justify-between mb-20 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="w-full md:w-5/12 mb-8 md:mb-0">
                    <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors shadow-xl">
                      <h3 className="text-2xl font-bold font-display mb-3 text-white">{item.title}</h3>
                      <p className="text-text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>

                  <div className="w-16 h-16 rounded-full bg-surface border-4 border-background outline outline-2 outline-primary flex items-center justify-center text-primary font-bold z-10 relative shadow-[0_0_20px_rgba(45,212,191,0.4)] text-xl">
                    {item.step}
                  </div>

                  <div className="w-full md:w-5/12 hidden md:block" />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* EXAMPLES GRID */}
        <section id="examples" className="py-20 bg-surface/30">
          <div className="container mx-auto px-4">
            <FadeIn>
              <SectionHeading subtitle="Real workflows we've designed for clients.">What We Can Build</SectionHeading>
            </FadeIn>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EXAMPLES.map((ex, i) => (
                <FadeIn key={i} delay={i * 50}>
                  <div className="group p-8 rounded-2xl bg-surface border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all hover:-translate-y-1 hover:shadow-xl">
                    <div className="mb-5 p-3 bg-surface-highlight w-fit rounded-xl border border-white/5 group-hover:scale-110 transition-transform">{ex.icon}</div>
                    <h4 className="text-xl font-bold mb-3 text-white">{ex.title}</h4>
                    <p className="text-text-muted text-sm leading-relaxed">{ex.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={300} className="mt-16 text-center">
              <p className="text-text-muted mb-8 font-medium text-lg">And many, many more...</p>
              <p className="font-light text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">If you can imagine it, we can build it.</p>
            </FadeIn>
          </div>
        </section>

        {/* FEATURED CTA: DISCOVERY CALL */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="bg-gradient-to-br from-surface to-background border border-white/10 rounded-[2.5rem] p-8 md:p-20 relative overflow-hidden shadow-2xl">
                {/* Decorative Blobs */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

                <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white">The Free Discovery Call</h2>
                    <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                      Stop guessing. Let's review your actual workflows and calculate the real ROI of automation.
                    </p>
                    <ul className="space-y-6 mb-10">
                      <li className="flex items-center text-lg text-gray-200"><div className="mr-4 p-1 rounded-full bg-green-500/20"><Check className="text-green-400 w-4 h-4" /></div> Audit current bottlenecks and time sinks</li>
                      <li className="flex items-center text-lg text-gray-200"><div className="mr-4 p-1 rounded-full bg-green-500/20"><Check className="text-green-400 w-4 h-4" /></div> Identify immediate 'Quick Win' opportunities</li>
                      <li className="flex items-center text-lg text-gray-200"><div className="mr-4 p-1 rounded-full bg-green-500/20"><Check className="text-green-400 w-4 h-4" /></div> Quantify time and cost savings and identify new revenue opportunities</li>
                      <li className="flex items-center text-lg text-gray-200"><div className="mr-4 p-1 rounded-full bg-green-500/20"><Check className="text-green-400 w-4 h-4" /></div> Outline an actionable next-step plan</li>
                    </ul>
                    <Button size="lg" onClick={() => openModal('booking')} className="text-lg px-10 py-5">Book Your Free Discovery Call</Button>
                  </div>

                  <div className="bg-surface/50 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-inner">
                    <div className="flex items-start mb-8">
                      <div className="p-3 bg-secondary/20 rounded-xl text-secondary mr-6"><Settings className="w-8 h-8" /></div>
                      <div>
                        <h4 className="font-bold text-xl text-white">Why is this free?</h4>
                        <p className="text-gray-400 text-base mt-3 leading-relaxed">
                          We lead with value. Most agencies gatekeep their knowledge. We believe if we show you the roadmap, you'll trust us to build the car.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="p-3 bg-primary/20 rounded-xl text-primary mr-6"><Clock className="w-8 h-8" /></div>
                      <div>
                        <h4 className="font-bold text-xl text-white">No Obligation</h4>
                        <p className="text-gray-400 text-base mt-3 leading-relaxed">
                          You walk away with actionable insights whether you hire us or not.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <FadeIn>
              <SectionHeading center>Common Questions</SectionHeading>
              <div className="space-y-4">
                {FAQS.map((faq, i) => (
                  <div key={i} className="border border-white/5 rounded-2xl bg-surface overflow-hidden hover:border-white/10 transition-colors">
                    <details className="group">
                      <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                        <span className="font-medium text-lg text-white">{faq.q}</span>
                        <span className="transition-transform duration-300 group-open:rotate-180 p-1 rounded-full bg-white/5 group-hover:bg-white/10">
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        </span>
                      </summary>
                      <div className="text-text-muted px-6 pb-6 pt-0 animate-in slide-in-from-top-2 leading-relaxed">
                        {faq.a}
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-32 relative text-center overflow-hidden">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <FadeIn>
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 text-white tracking-tight">
                Ready To Stop Doing Everything <br />
                <span className="text-text-muted">The Hard Way?</span>
              </h2>
              <div className="flex flex-col items-center">
                <Button size="lg" onClick={() => openModal('booking')} className="text-lg px-12 py-5 shadow-[0_0_40px_rgba(45,212,191,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)]">
                  Book Your Free Discovery Call
                </Button>
                <p className="mt-8 text-gray-500 text-sm font-medium tracking-wide">No pressure, no jargon - just clarity.</p>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-surface py-12">
        <div className="container mx-auto px-4">
          <FadeIn direction="up">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-8 md:mb-0 text-center md:text-left">
                <div className="text-2xl font-display font-bold tracking-tight mb-2 text-white">
                  FLOWST8 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">OPERATIONS</span><span className="text-white">.</span>
                </div>
                <p className="text-gray-500 text-sm">Systemise Your Work. Scale Your Impact.</p>
              </div>

              <div className="flex space-x-10 text-sm text-gray-400 font-medium">
                <button onClick={() => openModal('about')} className="hover:text-primary transition-colors">About</button>
                <button onClick={() => openModal('contact')} className="hover:text-primary transition-colors">Contact</button>
                <button onClick={() => openModal('privacy')} className="hover:text-primary transition-colors">Privacy</button>
              </div>
            </div>
            <div className="mt-12 text-center text-xs text-gray-600">
              &copy; {new Date().getFullYear()} FLOWST8 OPERATIONS. All rights reserved.
            </div>
          </FadeIn>
        </div>
      </footer>

      <ModalOverlay type={modalType} onClose={closeModal} />

      {/* Small MessageSquare for Contact fixed on mobile */}
      <button
        onClick={() => openModal('contact')}
        className="md:hidden fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg z-40 border border-white/20"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

    </div>
  );
}