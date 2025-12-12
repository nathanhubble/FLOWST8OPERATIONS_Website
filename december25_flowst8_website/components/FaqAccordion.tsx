import React, { useState } from 'react';
import { FaqItem } from '../types';
import { Plus, Minus } from 'lucide-react';

const FaqAccordion: React.FC<{ items: FaqItem[] }> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {items.map((item, index) => (
        <div 
          key={index} 
          className="border-2 border-black bg-[#15171c] hover:bg-[#1a1c23] transition-colors"
        >
          <button
            className="w-full flex justify-between items-center p-6 text-left"
            onClick={() => toggle(index)}
          >
            <span className="font-display font-bold text-lg text-off-white">{item.question}</span>
            {openIndex === index ? (
              <Minus className="text-mint-start w-5 h-5 flex-shrink-0" />
            ) : (
              <Plus className="text-gray-500 w-5 h-5 flex-shrink-0" />
            )}
          </button>
          
          <div 
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="p-6 pt-0 text-gray-400 font-sans leading-relaxed">
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqAccordion;