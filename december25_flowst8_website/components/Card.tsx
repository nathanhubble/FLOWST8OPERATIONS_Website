import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = true }) => {
  return (
    <div className={`
      glass-panel border-2 border-black p-6 md:p-8
      ${hoverEffect ? 'hover:-translate-y-1 hover:shadow-hard transition-all duration-300' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;