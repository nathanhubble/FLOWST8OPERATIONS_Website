import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale-up' | 'fade-in';
    delay?: number;
    duration?: number;
    className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 0.8,
    className = ''
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [isVisible]);

    const getAnimationClass = () => {
        if (!isVisible) return 'opacity-0';

        const baseClasses = 'transition-all';
        const durationClass = `duration-${Math.round(duration * 1000)}`;

        switch (animation) {
            case 'fade-up':
                return `${baseClasses} ${durationClass} animate-fadeInUp`;
            case 'fade-down':
                return `${baseClasses} ${durationClass} animate-fadeInDown`;
            case 'fade-left':
                return `${baseClasses} ${durationClass} animate-fadeInLeft`;
            case 'fade-right':
                return `${baseClasses} ${durationClass} animate-fadeInRight`;
            case 'scale-up':
                return `${baseClasses} ${durationClass} animate-scaleIn`;
            case 'fade-in':
                return `${baseClasses} ${durationClass} opacity-100`;
            default:
                return `${baseClasses} ${durationClass} animate-fadeInUp`;
        }
    };

    return (
        <div
            ref={elementRef}
            className={`${getAnimationClass()} ${className}`}
            style={{
                transitionDelay: `${delay}ms`
            }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
