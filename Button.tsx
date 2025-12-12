import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-3 font-display font-bold text-sm uppercase tracking-wider border-2 border-black transition-all duration-200 active:translate-y-0 active:shadow-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-br from-mint-start to-mint-end text-void hover:-translate-y-1 hover:shadow-hard",
    secondary: "bg-off-white text-void hover:-translate-y-1 hover:shadow-hard",
    outline: "bg-transparent text-off-white border-off-white hover:bg-off-white hover:text-void hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#EAEAEA]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;