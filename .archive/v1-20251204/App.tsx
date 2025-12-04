import React, { useState, useEffect } from 'react';
import {
  Menu, X, CheckCircle, ChevronDown, ChevronUp,
  Clock, TrendingUp, Zap, Mail, Database, Users,
  FileText, Calendar, ArrowRight, Play, Sparkles,
  MessageSquare, Bell
} from 'lucide-react';
import { getCalApi } from "@calcom/embed-react";
import Button from './components/Button';
import WorkflowIdeator from './components/WorkflowIdeator';
import Logo from './components/Logo';
import Marquee from './components/Marquee';
import ScrollReveal from './components/ScrollReveal';
import HeroBackground from './components/HeroBackground';
import { BENEFITS, PROCESS_STEPS, WORKFLOW_EXAMPLES, FAQS, APP_NAME, SERVICES } from './constants';
import { IconType } from './types';

// Icon mapping helper
const getIcon = (type: IconType, className: string = "w-6 h-6") => {
  switch (type) {
    case IconType.CLOCK: return <Clock className={className} />;
    case IconType.SCALE: return <TrendingUp className={className} />;
    case IconType.CREATIVE: return <Zap className={className} />;
    case IconType.MAIL: return <Mail className={className} />;
    case IconType.DATABASE: return <Database className={className} />;
    case IconType.USER: return <Users className={className} />;
    case IconType.FILE: return <FileText className={className} />;
    case IconType.CALENDAR: return <Calendar className={className} />;
    case IconType.CHECK: return <CheckCircle className={className} />;
    default: return <Zap className={className} />;
  }
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  // Cal.com Integration
  const CAL_LINK = "flowst8operations/discovery-call";

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "discovery" });
      cal("ui", { "theme": "light", "styles": { "branding": { "brandColor": "#14b8a6" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, []);

  const handleBookCall = async () => {
    const cal = await getCalApi({ "namespace": "discovery" });
    cal("modal", {
      calLink: CAL_LINK,
      config: {
        "layout": "month_view",
        "theme": "light"
      }
    });
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    scrollToSection(id);
  };

  const toggleAbout = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  const togglePrivacy = () => {
    setIsPrivacyOpen(!isPrivacyOpen);
  };

  return (
    <div className="min-h-screen font-sans text-charcoal bg-offwhite overflow-x-hidden selection:bg-sage selection:text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-charcoal border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer text-white" onClick={() => window.scrollTo(0, 0)}>
              <Logo />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#benefits" onClick={(e) => handleNavClick(e, 'benefits')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Why Work With Us</a>
              <a href="#examples" onClick={(e) => handleNavClick(e, 'examples')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">What We Build</a>
              <div className="mt-8">
                <Button onClick={handleBookCall} variant="secondary" fullWidth className="text-lg py-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  Book My Free Discovery Call
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-charcoal border-b border-white/10">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">Services</a>
              <a href="#benefits" onClick={(e) => handleNavClick(e, 'benefits')} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">Why Work With Us</a>
              <a href="#examples" onClick={(e) => handleNavClick(e, 'examples')} className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-md">What We Build</a>
              <div className="pt-4">
                <Button onClick={handleBookCall} fullWidth variant="secondary">Book Discovery Call</Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden bg-offwhite">
        <HeroBackground />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6 animate-fadeInUp">
            Level Up Your Team's <br />
            Capabilities with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage to-teal-600">
              AI & Automation
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            Training to upskill your team. Consultancy to map what's possible. Development to build the systems that scale.
            <br /><br />
            Remove the manual work that slows you down.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <Button onClick={handleBookCall} className="bg-softorange text-charcoal hover:bg-orange-400 hover:shadow-lg hover:-translate-y-1 border-none transition-all duration-300">
              Book Your Free Discovery Call
            </Button>
            <Button variant="outline" onClick={() => scrollToSection('examples')} className="hover:bg-gray-50 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              See Example Workflows
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4 text-sm text-gray-500 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <img key={i} className="w-8 h-8 rounded-full border-2 border-white object-cover animate-float" style={{ animationDelay: `${i * 0.2}s` }} src={`https://picsum.photos/100/100?random=${i}`} alt="User" />
              ))}
            </div>
            <p>Trusted by founders & teams that used to be swamped</p>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <Marquee />

      {/* Target Audience (Dark Contrast) */}
      <ScrollReveal animation="fade-up">
        <section className="py-16 bg-charcoal text-white border-y border-gray-800">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-white">Built for Small Teams, Smart Teams, and Ambitious Businesses</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10">
              We support founders, operations teams, and growing companies who need to move faster. Whether you need training to upskill internally, strategic guidance to map opportunities, or systems built to automate repetitive work — we meet you where you are.
            </p>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {["Founders", "Operations Teams", "Service Providers", "Coaches & Consultants", "Small Business Ops", "Marketing Teams", "Growth Teams", "Teams that have outgrown manual work 📈"].map((tag) => (
                <span
                  key={tag}
                  className="px-6 py-2.5 bg-gray-800 text-gray-200 rounded-full text-sm font-medium border border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-sage hover:bg-white hover:text-charcoal cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Interactive AI Demo Section (Light Contrast) */}
      <ScrollReveal animation="fade-up">
        <section className="pt-16 pb-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1 bg-sage/20 text-teal-800 text-xs font-bold rounded-full mb-4 tracking-wide uppercase">
              Try the Technology
            </div>
            <h2 className="font-heading text-3xl font-bold mb-2">See What's Possible</h2>
            <WorkflowIdeator />
          </div>
        </section>
      </ScrollReveal>

      {/* Benefits (Tint Contrast) */}
      <ScrollReveal animation="fade-up">
        <section id="benefits" className="pt-16 pb-24 px-4 sm:px-6 lg:px-8 bg-sage/10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Why Work With Us</h2>
              <div className="w-20 h-1 bg-sage"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {BENEFITS.map((benefit, idx) => (
                <ScrollReveal key={idx} animation="scale-up" delay={idx * 100}>
                  <div className="group p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                    <div className="w-12 h-12 bg-charcoal text-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-sage group-hover:rotate-6 transition-all duration-300">
                      {getIcon(benefit.icon)}
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Services Section (Light Contrast) */}
      <ScrollReveal animation="fade-up">
        <section id="services" className="py-24 bg-white border-y border-gray-200 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">How We Help</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">Three ways we support your team, depending on where you are and what you need.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICES.map((service, idx) => (
                <ScrollReveal key={idx} animation={idx % 2 === 0 ? 'fade-left' : 'fade-right'} delay={idx * 100}>
                  <div className="group flex flex-col h-full p-8 bg-offwhite rounded-2xl border border-gray-100 hover:border-sage hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-sage transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                    <div className="border-t border-gray-200 pt-6">
                      <ul className="space-y-3">
                        {service.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-3 text-sm text-gray-700 font-medium">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-500 font-medium">Need something custom? <a href="mailto:nathanhubble.nh@gmail.com" className="text-sage hover:text-teal-700 font-bold transition-colors">Get in touch.</a></p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* How it Works (Dark Contrast) */}
      <ScrollReveal animation="fade-up">
        <section id="process" className="py-24 bg-charcoal text-offwhite px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-16 text-center">How Automation Development Works</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-800 -z-0"></div>

              {PROCESS_STEPS.map((step, idx) => (
                <ScrollReveal key={idx} animation="scale-up" delay={idx * 150}>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-gray-900 rounded-full border-4 border-charcoal flex items-center justify-center mb-6 shadow-xl">
                      <span className="font-heading text-3xl font-bold text-softorange">{step.number}</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400 max-w-xs">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Examples (Light Contrast) */}
      <ScrollReveal animation="fade-up">
        <section id="examples" className="py-24 px-4 sm:px-6 lg:px-8 bg-offwhite">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">What We Can Build</h2>
                <p className="text-gray-600 max-w-xl">
                  From simple time-savers to fully automated operational systems. Here are common builds we deliver for teams wanting smoother, faster workflows.
                </p>
              </div>
              <a href="#audit" onClick={(e) => handleNavClick(e, 'audit')} className="hidden md:block text-sage font-medium hover:text-teal-700 flex items-center gap-2 mt-4 md:mt-0">
                Get a custom build <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {WORKFLOW_EXAMPLES.map((item, idx) => (
                <ScrollReveal key={idx} animation="fade-up" delay={idx * 50}>
                  <div className="group flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-sage hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <div className="text-sage mt-1 group-hover:scale-110 transition-transform duration-300">
                      {getIcon(item.icon, "w-5 h-5")}
                    </div>
                    <span className="font-medium text-charcoal">{item.title}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Offer / Audit (Tint Contrast) */}
      <ScrollReveal animation="fade-up">
        <section id="audit" className="py-24 px-4 sm:px-6 lg:px-8 bg-sage/10 relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sage/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-sage/20">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">The Free Discovery Call</h2>
                <p className="text-gray-600 mb-6">
                  A 20-minute session where we explore your operations, identify opportunities for improvement, and show you what's possible through training, strategic planning, or automation.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Review your current workflows and capabilities",
                    "Identify where training, strategy, or automation can help most",
                    "Show where AI and smart systems save time and cost",
                    "Provide an actionable next-step plan"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                      <CheckCircle className="w-5 h-5 text-sage flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button onClick={handleBookCall} fullWidth className="bg-softorange text-charcoal hover:bg-orange-500 border-none">
                  Book Your Free Discovery Call
                </Button>
                <p className="text-center text-xs text-gray-400 mt-4">No commitment required. You keep the roadmap.</p>
              </div>
              <div className="bg-charcoal p-10 md:p-12 flex flex-col justify-center text-white relative">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <h3 className="font-heading text-2xl font-bold mb-4 relative z-10">Why is this free?</h3>
                <p className="text-gray-400 relative z-10 mb-6">
                  We lead with value. Most teams don't realise how much time can be saved until they see a clear map of what's holding them back and what can be automated today.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ (Light Contrast) */}
      <ScrollReveal animation="fade-up">
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-12 text-center">Common Questions</h2>
            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-medium text-charcoal hover:bg-gray-50 transition-colors"
                  >
                    {faq.question}
                    {openFaqIndex === idx ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </button>
                  {openFaqIndex === idx && (
                    <div className="p-5 pt-0 text-gray-600 bg-gray-50 border-t border-gray-100 whitespace-pre-line">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Final CTA (Dark Contrast) */}
      <section className="py-24 bg-charcoal text-white text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8">
            Ready To Stop Doing Everything The Hard Way?
          </h2>
          <Button onClick={handleBookCall} className="bg-sage text-charcoal hover:bg-teal-400 border-none text-lg px-8 py-4">
            Book Your Free Discovery Call
          </Button>
          <p className="mt-6 text-gray-400">No pressure, no jargon — just clarity.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-gray-500 text-sm border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Logo className="text-white brightness-0 invert opacity-70" />
          </div>
          <div className="flex gap-8">
            <button onClick={toggleAbout} className="hover:text-white transition-colors">About</button>
            <a href="mailto:nathanhubble.nh@gmail.com" className="hover:text-white transition-colors">Contact</a>
            <button onClick={togglePrivacy} className="hover:text-white transition-colors">Privacy</button>
          </div>
          <div>
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </div>
        </div>
      </footer>

      {/* About Modal */}
      {isAboutOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={toggleAbout}>
          <div className="bg-white rounded-2xl max-w-lg w-full p-8 shadow-2xl relative" onClick={e => e.stopPropagation()}>
            <button onClick={toggleAbout} className="absolute top-4 right-4 text-gray-400 hover:text-charcoal transition-colors">
              <X className="w-6 h-6" />
            </button>
            <h3 className="font-heading text-2xl font-bold mb-4 text-charcoal">About FLOWST8 OPERATIONS</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We are a dedicated team of automation experts passionate about helping founders, creatives, and small teams reclaim their time.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded on the belief that creative work shouldn't be bogged down by repetitive admin, we build custom systems using tools like Make, Zapier, and AI to streamline operations. Whether you're a solo operator or a growing agency, we design workflows that scale with you.
            </p>
            <Button onClick={toggleAbout} variant="primary" fullWidth>Close</Button>
          </div>
        </div>
      )}

      {/* Privacy Policy Modal */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={togglePrivacy}>
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-2xl relative max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <button onClick={togglePrivacy} className="absolute top-4 right-4 text-gray-400 hover:text-charcoal transition-colors">
              <X className="w-6 h-6" />
            </button>
            <h3 className="font-heading text-2xl font-bold mb-6 text-charcoal">Privacy Policy</h3>

            <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <p><strong>Last Updated: {new Date().getFullYear()}</strong></p>

              <p>
                At FLOWST8 OPERATIONS, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>

              <h4 className="font-bold text-charcoal text-base mt-4">1. Information We Collect</h4>
              <p>
                We may collect personal information that you voluntarily provide to us when you book a discovery call, sign up for a newsletter, or contact us. This may include your name, email address, phone number, and details about your business processes.
              </p>

              <h4 className="font-bold text-charcoal text-base mt-4">2. How We Use Your Information</h4>
              <p>
                We use the information we collect to:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Provide, operate, and maintain our services.</li>
                  <li>Improve, personalise, and expand our website.</li>
                  <li>Communicate with you, including for customer service, updates, and marketing purposes.</li>
                  <li>Process your transactions and manage your orders.</li>
                </ul>
              </p>

              <h4 className="font-bold text-charcoal text-base mt-4">3. Data Security</h4>
              <p>
                We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
              </p>

              <h4 className="font-bold text-charcoal text-base mt-4">4. Third-Party Services</h4>
              <p>
                We may use third-party tools (such as Google Analytics, scheduling software, or automation platforms) to facilitate our services. These parties have their own privacy policies governing their use of your data.
              </p>

              <h4 className="font-bold text-charcoal text-base mt-4">5. Contact Us</h4>
              <p>
                If you have any questions about this Privacy Policy, please contact us via the contact form on this website.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <Button onClick={togglePrivacy} variant="primary" fullWidth>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;