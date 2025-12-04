import React, { useEffect, useRef, useState } from 'react';

const HeroBackground: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate path progress based on scroll
    // We want the "flow" to move as user scrolls down
    const progress = Math.min(Math.max(scrollY / 800, 0), 1);

    // Path definitions for the "workflow" lines
    // These are curved bezier paths connecting nodes
    const paths = [
        // Center flow
        "M 500 0 C 500 100, 500 200, 500 300 C 500 400, 200 500, 200 600",
        // Right branch
        "M 500 300 C 500 400, 800 500, 800 600",
        // Left branch split
        "M 200 600 C 200 700, 100 800, 100 900",
        // Left branch split 2
        "M 200 600 C 200 700, 300 800, 300 900",
    ];

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 pointer-events-none overflow-hidden opacity-40"
            style={{ zIndex: 0 }}
        >
            <svg
                viewBox="0 0 1000 1000"
                preserveAspectRatio="xMidYMin slice"
                className="w-full h-full"
            >
                <defs>
                    <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6CC2B5" stopOpacity="0" />
                        <stop offset="50%" stopColor="#6CC2B5" stopOpacity="1" />
                        <stop offset="100%" stopColor="#6CC2B5" stopOpacity="0" />
                    </linearGradient>

                    <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Static Background Lines (Faint) */}
                {paths.map((d, i) => (
                    <path
                        key={`bg-${i}`}
                        d={d}
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                ))}

                {/* Animated Flow Lines */}
                {paths.map((d, i) => {
                    // Calculate offset for animation effect
                    // Different speeds/offsets for variety
                    const dashLength = 1000;
                    const offset = (scrollY * (1 + i * 0.2)) % dashLength;

                    return (
                        <path
                            key={`flow-${i}`}
                            d={d}
                            fill="none"
                            stroke="url(#flowGradient)"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeDasharray={`100 ${dashLength}`}
                            strokeDashoffset={-offset}
                            filter="url(#glow)"
                            className="transition-all duration-75 ease-linear"
                        />
                    );
                })}

                {/* Nodes (Circles) */}
                <circle cx="500" cy="0" r="6" fill="#111827" />
                <circle cx="500" cy="300" r="8" fill="#111827" className="animate-pulse" />
                <circle cx="200" cy="600" r="8" fill="#111827" className="animate-pulse" />
                <circle cx="800" cy="600" r="6" fill="#6B7280" />
                <circle cx="100" cy="900" r="6" fill="#6B7280" />
                <circle cx="300" cy="900" r="6" fill="#6B7280" />

            </svg>
        </div>
    );
};

export default HeroBackground;
