import React from 'react';
import { TECH_STACK } from '../constants';

const Marquee: React.FC = () => {
  return (
    <div className="w-full bg-transparent border-y-2 border-black py-12 overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
      {/* 
        Scroll container:
        - animate-scroll handles the infinite loop
        - Removed hover:paused to ensure continuous movement
      */}
      <div className="flex w-max animate-scroll items-center">
        {/* Repeating the list 4 times ensures seamless looping on large (4K) screens */}
        {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, index) => (
          <div 
            key={`${tech.name}-${index}`} 
            className="flex-shrink-0 mx-8 md:mx-12 select-none"
          >
            <img 
              src={tech.logo} 
              alt={tech.name} 
              title={tech.name}
              className="h-[40px] w-auto opacity-50 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-110 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;