import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '', 
  children, 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    // Primary: Electric Blue gradient with glow
    primary: "bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] hover:scale-[1.02] border border-transparent",
    
    // Secondary: Darker, glassmorphic
    secondary: "bg-surface-highlight text-text border border-white/10 hover:border-primary/50 hover:text-white hover:bg-surface-highlight/80 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)]",
    
    // Outline: Subtle border
    outline: "bg-transparent border border-primary text-primary hover:bg-primary/10",
    
    // Ghost: Minimal
    ghost: "bg-transparent text-text-muted hover:text-white hover:bg-white/5"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-semibold tracking-wide"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};