import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <img
      src="/logo.png"
      alt="FLOWST8 OPERATIONS"
      className={`h-12 w-auto object-contain ${className}`}
    />
  );
};

export default Logo;