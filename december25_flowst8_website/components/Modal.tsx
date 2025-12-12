import React from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'default' | 'large';
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, size = 'default' }) => {
  if (!isOpen) return null;

  const maxWidthClass = size === 'large' ? 'max-w-5xl' : 'max-w-lg';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Content */}
      <div className={`relative bg-void border-2 border-mint-start w-full ${maxWidthClass} shadow-[8px_8px_0px_0px_#000000] animate-[blink_0.2s_ease-in] max-h-[90vh] flex flex-col`}>
        <div className="flex justify-between items-center p-4 border-b-2 border-black bg-[#1a1c23] flex-shrink-0">
          <h3 className="font-display font-bold text-lg text-mint-start uppercase">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-0 overflow-y-auto bg-void">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;