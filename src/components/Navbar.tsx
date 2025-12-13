import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { ModalType } from '../types';
import Button from './Button';

interface NavbarProps {
  onOpenModal: (type: ModalType) => void;
  onNavigate: (view: 'landing' | 'diagnostic') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof NAV_LINKS[0]) => {
    e.preventDefault();
    
    if (link.href === '#diagnostic') {
      onNavigate('diagnostic');
    } else {
      const targetId = link.href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b-2 ${scrolled ? 'bg-void/90 backdrop-blur-md border-black py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative">
        {/* Logo */}
        <a 
          href="/" 
          onClick={handleLogoClick}
          className="block group relative z-10 no-underline"
        >
          <span className="flex items-center gap-2 font-display font-bold text-2xl tracking-tighter text-white group-hover:opacity-80 transition-opacity">
            <span style={{ fontSize: '28px' }}>🧊</span> FLOWST8
          </span>
        </a>

        {/* Desktop Links - Absolutely Centered */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className={`font-sans text-sm font-medium transition-colors uppercase tracking-wide cursor-pointer ${
                link.isSpecial 
                  ? 'text-mint-start hover:text-white border-b border-mint-start/30 hover:border-mint-start' 
                  : 'text-gray-400 hover:text-mint-start'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4 relative z-10">
          {/* CTA */}
          <Button onClick={() => onOpenModal(ModalType.BOOKING)} className="hidden md:block">
            Book Strategy Call
          </Button>
          
          {/* Mobile Menu Icon */}
          <button className="md:hidden text-off-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;