import React, { useState, useEffect } from 'react';
import { AUDIENCE_TAGS, WHY_US_CARDS, SERVICES, CAPABILITIES, FAQ_ITEMS, FOOTER_LINKS } from './constants';
import { ModalType } from './types';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Button from './components/Button';
import Card from './components/Card';
import Marquee from './components/Marquee';
import Terminal from './components/Terminal';
import FaqAccordion from './components/FaqAccordion';
import Modal from './components/Modal';
import Diagnostic from './components/Diagnostic';
import { ArrowRight, Check, Filter, FileText, Send, UserPlus, RefreshCw, BarChart, Calendar, AppWindow, Bot, Infinity } from 'lucide-react';

// Icon mapping helper
const getIcon = (name: string) => {
  const icons: {[key: string]: React.ReactNode} = {
    'Filter': <Filter className="w-10 h-10 transition-colors duration-300" />,
    'FileText': <FileText className="w-10 h-10 transition-colors duration-300" />,
    'Send': <Send className="w-10 h-10 transition-colors duration-300" />,
    'UserPlus': <UserPlus className="w-10 h-10 transition-colors duration-300" />,
    'RefreshCw': <RefreshCw className="w-10 h-10 transition-colors duration-300" />,
    'BarChart': <BarChart className="w-10 h-10 transition-colors duration-300" />,
    'AppWindow': <AppWindow className="w-10 h-10 transition-colors duration-300" />,
    'Bot': <Bot className="w-10 h-10 transition-colors duration-300" />,
    'Infinity': <Infinity className="w-10 h-10 transition-colors duration-300" />
  };
  return icons[name] || <div />;
};

function App() {
  const [modalState, setModalState] = useState<{ isOpen: boolean; type: ModalType }>({
    isOpen: false,
    type: ModalType.NONE
  });

  // SPA State Management
  const [view, setView] = useState<'landing' | 'diagnostic'>('landing');

  const openModal = (type: ModalType) => setModalState({ isOpen: true, type });
  const closeModal = () => setModalState({ isOpen: false, type: ModalType.NONE });

  // Initialize Cal.com inline embed when booking modal opens
  useEffect(() => {
    if (modalState.type === ModalType.BOOKING) {
      const cal = (window as any).Cal;
      if (cal) {
        cal.ns["discovery-call"]("inline", {
          elementOrSelector: "#my-cal-inline-discovery-call",
          config: { "layout": "month_view" },
          calLink: "flowst8operations/discovery-call",
        });

        cal.ns["discovery-call"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
      }
    }
  }, [modalState.type]);

  const renderModalContent = () => {
    switch (modalState.type) {
      case ModalType.BOOKING:
        return (
          <div className="w-full h-[600px] md:h-[700px] bg-void">
             {/* This container handles the Cal.com embed gracefully */}
             <div style={{width:"100%", height:"100%", overflow:"scroll"}} id="my-cal-inline-discovery-call"></div>
          </div>
        );
      case ModalType.ABOUT:
        return <div className="p-8"><p className="text-gray-300">FLOWST8 is an operations engineering firm established in 2025. We believe in code over chaos.</p></div>;
      case ModalType.CONTACT:
        return <div className="p-8"><p className="text-gray-300">Email us: system@flowst8.ops</p></div>;
      case ModalType.PRIVACY:
        return <div className="p-8"><p className="text-gray-300">Your data is yours. We do not store your blueprint inputs.</p></div>;
      default:
        return null;
    }
  };

  // Render Diagnostic View
  if (view === 'diagnostic') {
    return (
      <div className="min-h-screen bg-void text-off-white font-sans selection:bg-mint-start selection:text-black animate-in fade-in duration-300">
         <Diagnostic 
            onBookAudit={() => openModal(ModalType.BOOKING)} 
            onBack={() => setView('landing')} 
         />
         <Modal 
            isOpen={modalState.isOpen} 
            onClose={closeModal} 
            title={'Schedule Audit'}
            size={'large'}
         >
            {renderModalContent()}
         </Modal>
      </div>
    );
  }

  // Render Home View
  return (
    <div className="min-h-screen bg-void text-off-white font-sans selection:bg-mint-start selection:text-black overflow-x-hidden relative animate-in fade-in duration-300">
      <Navbar onOpenModal={openModal} onNavigate={setView} />

      {/* Hero Section - The Monolith */}
      <div className="relative pt-[180px] pb-[160px] overflow-hidden flex items-center justify-center min-h-[90vh]">
        {/* Infinite Blueprint Background */}
        <div className="blueprint-container">
           <div className="blueprint-floor"></div>
           <div className="blueprint-vignette"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center flex flex-col items-center">
          <span className="inline-block px-3 py-1 mb-8 border border-gray-600 rounded-full bg-[#15171c]/80 backdrop-blur-sm text-xs font-mono text-mint-start tracking-widest uppercase">
            Accepting New Clients for Q4
          </span>
          <h1 className="font-display font-bold text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 drop-shadow-lg">
            THE ARCHITECTURE<br />OF FLOW.
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
            We engineer intelligent, self-sustaining operational ecosystems. Scale your output without scaling the bother.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center w-full flex-wrap">
            <Button onClick={() => openModal(ModalType.BOOKING)} className="min-w-[200px]">
              Book Strategy Call
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="min-w-[200px]">
              Explore Methods
            </Button>
            {/* New Diagnostic CTA - Updated for SPA */}
            <button 
              onClick={() => setView('diagnostic')}
              className="px-6 py-3 min-w-[200px] font-display font-bold text-sm uppercase tracking-wider border-2 border-dashed border-mint-start text-mint-start transition-all duration-200 hover:bg-mint-start hover:text-black hover:-translate-y-1 hover:shadow-hard text-center flex items-center justify-center"
            >
              Run Efficiency Scan
            </button>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <Marquee />

      {/* Automation Terminal */}
      <Section className="py-32">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl mb-4">VISUALISE THE FLOW</h2>
          <p className="text-gray-400">Describe a repetitive task. Our AI will architect the blueprint instantly.</p>
        </div>
        <Terminal />
      </Section>

      {/* Audience Chips - UPDATED (Engineered for the Visionary) */}
      <div className="w-full border-y border-gray-800 bg-[#121419] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="font-display font-bold text-sm uppercase tracking-[0.15em] text-off-white/70 mb-10">
            ENGINEERED FOR THE VISIONARY
          </h3>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {AUDIENCE_TAGS.map(tag => (
              <span 
                key={tag} 
                className="px-5 py-2.5 border border-[#333] bg-white/[0.03] backdrop-blur-sm rounded-[4px] font-display text-xs md:text-sm uppercase text-mint-start tracking-wide transition-all duration-200 cursor-default hover:border-white hover:-translate-y-[2px] hover:shadow-[3px_3px_0px_#000000]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Why Us */}
      <Section id="why-us" className="py-32 relative">
        {/* Massive Watermark - logo2.png */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
           <img 
             src="logo2.png" 
             alt="" 
             className="w-[800px] opacity-[0.03] grayscale max-w-none" 
             onError={(e) => { e.currentTarget.style.display = 'none'; }}
           />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-16 relative z-10">
          <h2 className="font-display font-bold text-4xl md:text-5xl max-w-xl leading-tight">
            WE DON'T JUST PATCH.<br/><span className="text-mint-start">WE ENGINEER.</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {WHY_US_CARDS.map((card, idx) => (
            <Card key={idx} className="bg-[#15171c]">
              <div className="w-12 h-12 bg-mint-start flex items-center justify-center border-2 border-black mb-6 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.1)]">
                {card.icon}
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">{card.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Services */}
      <Section id="services" className="bg-[#121419] border-y-2 border-black py-32">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl">OPERATIONAL INFRASTRUCTURE</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div key={idx} className="group relative bg-void border-2 border-gray-800 p-8 hover:border-mint-start transition-colors duration-300">
               <div className="absolute top-0 right-0 p-2 opacity-20 font-mono text-4xl font-bold group-hover:text-mint-start transition-colors">
                 0{idx + 1}
               </div>
               <div className="mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform origin-left">
                  <div className="text-white">{service.icon}</div>
               </div>
               <h3 className="font-display font-bold text-2xl mb-4 group-hover:text-mint-start transition-colors">{service.title}</h3>
               <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Method */}
      <Section id="method" className="py-32">
         {/* Added Section Header */}
         <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-6 border border-mint-start/30 bg-mint-start/10 rounded-full font-mono text-xs text-mint-start tracking-widest uppercase">
              THE PROTOCOL
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-6 uppercase">
              HOW WE ENGINEER SYSTEMS
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg mb-8 leading-relaxed">
              From audit to deployment. A transparent, phased approach to building your infrastructure.
            </p>
            <div className="w-[100px] h-[1px] bg-[#333] mx-auto"></div>
         </div>

         <div className="grid md:grid-cols-3 gap-4">
            {/* Phase 01 */}
            <div className="group p-6 border-l-4 border-mint-start hover:bg-[#1a1c23] hover:shadow-hard hover:-translate-y-2 transition-all duration-300 cursor-default">
               <span className="block font-mono text-sm text-gray-500 mb-2 group-hover:text-mint-start transition-colors">PHASE 01</span>
               <h3 className="font-display font-bold text-3xl text-off-white group-hover:text-mint-start transition-colors">DISCOVERY</h3>
               <p className="text-gray-400 mt-2 group-hover:text-off-white transition-colors">Audit & Map the ecosystem.</p>
            </div>
            {/* Phase 02 */}
            <div className="group p-6 border-l-4 border-mint-start hover:bg-[#1a1c23] hover:shadow-hard hover:-translate-y-2 transition-all duration-300 cursor-default">
               <span className="block font-mono text-sm text-gray-500 mb-2 group-hover:text-mint-start transition-colors">PHASE 02</span>
               <h3 className="font-display font-bold text-3xl text-off-white group-hover:text-mint-start transition-colors">ARCHITECT</h3>
               <p className="text-gray-400 mt-2 group-hover:text-off-white transition-colors">Design & Build the machine.</p>
            </div>
            {/* Phase 03 */}
            <div className="group p-6 border-l-4 border-mint-start hover:bg-[#1a1c23] hover:shadow-hard hover:-translate-y-2 transition-all duration-300 cursor-default">
               <span className="block font-mono text-sm text-gray-500 mb-2 group-hover:text-mint-start transition-colors">PHASE 03</span>
               <h3 className="font-display font-bold text-3xl text-off-white group-hover:text-mint-start transition-colors">DEPLOY</h3>
               <p className="text-gray-400 mt-2 group-hover:text-off-white transition-colors">Launch & Support velocity.</p>
            </div>
         </div>
      </Section>

      {/* Examples Grid */}
      <Section id="examples" className="bg-[#15171c] py-32">
         <h2 className="font-display font-bold text-4xl mb-12 text-center">WHAT WE BUILD</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, idx) => (
               <div 
                  key={idx} 
                  className="group relative bg-[#15171c] border-2 border-gray-800 hover:border-mint-start hover:bg-[#0F1115] hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-y-2 transition-all duration-300 p-8 flex flex-col items-center justify-center min-h-[280px] overflow-hidden cursor-default"
               >
                  {/* Default State: Icon & Title */}
                  <div className="flex flex-col items-center transition-transform duration-300 group-hover:-translate-y-4">
                     <div className="text-gray-400 group-hover:text-mint-start transition-colors duration-300 mb-4">
                        {getIcon(cap.iconName)}
                     </div>
                     <h4 className="font-display font-bold text-xl text-off-white text-center">{cap.title}</h4>
                  </div>

                  {/* Hover State: Reveal Content */}
                  <div className="absolute bottom-6 left-0 w-full px-6 text-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75">
                     <p className="text-gray-400 text-sm mb-4 leading-relaxed">{cap.detail}</p>
                     <span className="inline-block px-3 py-1 bg-mint-start/10 border border-mint-start/30 rounded-full text-xs font-mono text-mint-start">
                        {cap.metric}
                     </span>
                  </div>
               </div>
            ))}
         </div>
      </Section>

      {/* CTA Discovery - Schematic Blueprint HUD Style */}
      <Section className="py-32">
        <div className="relative bg-void border-2 border-mint-start shadow-[8px_8px_0px_0px_#000000] p-8 md:p-16 flex flex-col md:flex-row gap-12 overflow-hidden blueprint-grid">
           
           {/* Decorative Corner Brackets */}
           <div className="absolute top-[-2px] left-[-2px] w-8 h-8 border-t-4 border-l-4 border-mint-start z-20"></div>
           <div className="absolute top-[-2px] right-[-2px] w-8 h-8 border-t-4 border-r-4 border-mint-start z-20"></div>
           <div className="absolute bottom-[-2px] left-[-2px] w-8 h-8 border-b-4 border-l-4 border-mint-start z-20"></div>
           <div className="absolute bottom-[-2px] right-[-2px] w-8 h-8 border-b-4 border-r-4 border-mint-start z-20"></div>

           {/* Watermark Icon - Fallback if logo2 missing, use Calendar icon */}
           <div className="absolute bottom-[-40px] right-[-40px] w-80 h-80 opacity-[0.05] -rotate-12 pointer-events-none z-0">
              <img src="logo2.png" alt="" className="w-full h-full object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
           </div>

           <div className="flex-1 z-10">
              <h2 className="font-display font-bold text-4xl md:text-5xl mb-6 text-white tracking-tight">
                 READY TO ARCHITECT<br/>YOUR SYSTEM?
              </h2>
              <ul className="space-y-4 mb-8">
                 {['Audit bottlenecks', 'Identify Quick Wins', 'Calculate ROI', 'Actionable Roadmap'].map(item => (
                    <li key={item} className="flex items-center gap-3 font-medium text-lg text-off-white">
                       <div className="text-mint-start"><Check size={24} strokeWidth={3} /></div>
                       {item}
                    </li>
                 ))}
              </ul>
              <Button 
                onClick={() => openModal(ModalType.BOOKING)} 
                className="!bg-gradient-to-br !from-mint-start !to-mint-end !text-black !border-2 !border-black hover:!-translate-y-[2px] hover:!shadow-hard"
              >
                 Schedule Consultation <ArrowRight className="inline ml-2 w-4 h-4"/>
              </Button>
           </div>
           
           {/* Glassmorphism Why Free Box */}
           <div className="md:w-1/3 bg-[rgba(160,240,230,0.05)] backdrop-blur-[5px] border border-dashed border-[#555] p-6 h-fit z-10 relative">
              {/* Small accent for the box */}
              <div className="absolute top-0 right-0 p-2">
                 <div className="w-2 h-2 bg-mint-start rounded-full animate-pulse-glow"></div>
              </div>
              <h4 className="font-display font-bold text-lg mb-2 text-white uppercase tracking-wider">Why is this free?</h4>
              <p className="text-sm leading-relaxed text-gray-300 font-mono">
                 We architect trust. We show you the blueprint before you buy the building. It's the only way we operate.
              </p>
           </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-32">
         <h2 className="font-display font-bold text-4xl text-center mb-16">COMMON QUERIES</h2>
         <FaqAccordion items={FAQ_ITEMS} />
      </Section>

      {/* Footer */}
      <footer className="border-t-2 border-gray-800 bg-[#0a0b0e] py-12">
         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-start gap-4">
               {/* Footer Logo - Text Replacement */}
               <div className="flex items-center gap-2 font-display font-bold text-xl text-white tracking-tighter opacity-80">
                  <span style={{ fontSize: '28px' }}>🧊</span> FLOWST8
               </div>
               <div className="text-gray-500 font-mono text-sm">
                  © 2025 FLOWST8 OPERATIONS. <span className="text-green-500">● System Online</span>
               </div>
            </div>
            <div className="flex gap-8">
               {FOOTER_LINKS.map(link => (
                  <button 
                     key={link.key}
                     onClick={() => openModal(ModalType[link.key as keyof typeof ModalType])}
                     className="text-gray-400 hover:text-white text-sm uppercase font-medium tracking-wider"
                  >
                     {link.label}
                  </button>
               ))}
            </div>
         </div>
      </footer>

      {/* Global Modal */}
      <Modal 
         isOpen={modalState.isOpen} 
         onClose={closeModal} 
         title={modalState.type === ModalType.BOOKING ? 'Schedule Audit' : 
                modalState.type === ModalType.ABOUT ? 'About Us' : 
                modalState.type === ModalType.CONTACT ? 'Contact' : 'Privacy'}
         size={modalState.type === ModalType.BOOKING ? 'large' : 'default'}
      >
         {renderModalContent()}
      </Modal>

    </div>
  );
}

export default App;