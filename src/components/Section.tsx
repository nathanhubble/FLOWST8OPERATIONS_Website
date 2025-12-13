import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  // Default to py-32 unless overridden in className
  const defaultPadding = className.includes('py-') ? '' : 'py-32';
  
  return (
    <section id={id} className={`${defaultPadding} px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default Section;