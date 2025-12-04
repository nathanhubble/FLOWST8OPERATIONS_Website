import React, { useEffect } from 'react';
import { X, Calendar, Mail, Shield, User } from 'lucide-react';
import { ModalType } from '../types';

interface ModalProps {
  type: ModalType;
  onClose: () => void;
}

export const ModalOverlay: React.FC<ModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    // Only lock scroll if a modal type is active
    if (!type) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      // Reset to empty string to revert to CSS file definitions (which has overflow-x: hidden)
      document.body.style.overflow = '';
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-2xl bg-[#1A1A1A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Content Area with Scroll */}
        <div className="overflow-y-auto custom-scrollbar">
          {type === 'booking' && (
            <div className="h-[600px] w-full bg-white">
              <div className="w-full min-h-full flex items-center justify-center text-black">
                {/* In a real scenario, this would be a Cal.com embed */}
                <div className="text-center p-8">
                    <Calendar className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Schedule Your Discovery Call</h3>
                    <p className="text-gray-600 mb-6">This allows us to dive deep into your specific needs.</p>
                    <a 
                      href="https://cal.com/flowst8operations/discovery-call" 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-block bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                      Open Calendar
                    </a>
                    <p className="text-xs text-gray-400 mt-4">(Simulation: In production, Cal.com iframe loads here)</p>
                </div>
              </div>
            </div>
          )}

          {type === 'contact' && (
            <div className="p-8 md:p-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold">Get in Touch</h3>
              </div>
              <p className="text-gray-400 mb-8">
                Whether you have a specific automation in mind or just want to explore possibilities, we're here to help.
              </p>
              <div className="space-y-4">
                <div className="glass-panel p-4 rounded-lg flex items-center justify-between">
                  <span className="text-gray-400">Email</span>
                  <a href="mailto:nathanhubble.nh@gmail.com" className="text-primary hover:underline">nathanhubble.nh@gmail.com</a>
                </div>
              </div>
            </div>
          )}

          {type === 'about' && (
            <div className="p-8 md:p-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-secondary/20 rounded-lg">
                  <User className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-2xl font-display font-bold">About FLOWST8</h3>
              </div>
              <div className="prose prose-invert max-w-none text-gray-400">
                <p className="mb-4">
                  FLOWST8 OPERATIONS was founded on a simple premise: <span className="text-white">Smart teams shouldn't do dumb work.</span>
                </p>
                <p className="mb-4">
                  We are a collective of automation architects, operations consultants, and AI specialists. We don't just build zaps; we restructure how businesses operate to survive and thrive in the AI era.
                </p>
                <p>
                  Our mission is to give you back your time, so you can focus on strategy, creativity, and growth.
                </p>
              </div>
            </div>
          )}

          {type === 'privacy' && (
            <div className="p-8 md:p-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-white/10 rounded-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold">Privacy Policy</h3>
              </div>
              <div className="prose prose-invert max-w-none text-gray-400 text-sm">
                <p>Last updated: October 2024</p>
                <p>At FLOWST8 OPERATIONS, we take your privacy seriously. This policy describes how we collect and use your data.</p>
                <p>1. <strong>Information Collection:</strong> We collect information you provide directly to us via forms and booking tools.</p>
                <p>2. <strong>Use of Information:</strong> We use this to provide services, communicate with you, and improve our offerings.</p>
                <p>3. <strong>Data Security:</strong> We implement standard security measures to protect your data.</p>
                <p>4. <strong>Contact:</strong> For questions, contact nathanhubble.nh@gmail.com.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};