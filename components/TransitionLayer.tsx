"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TransitionLayer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Draw SVG lines based on scroll. Sync with HeroSection's lift (roughly 0-500px)
    // We want the grid to start drawing as the fog lifts (around 200px) and finish when fully clear (600px)
    const pathLength = useTransform(scrollY, [200, 600], [0, 1]);
    const opacity = useTransform(scrollY, [100, 300], [0, 1]);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            <svg className="w-full h-full">
                {/* Horizontal Lines */}
                <motion.line
                    x1="0" y1="33%" x2="100%" y2="33%"
                    stroke="rgba(44,62,80, 0.03)" strokeWidth="1"
                    style={{ pathLength, opacity }}
                />
                <motion.line
                    x1="0" y1="66%" x2="100%" y2="66%"
                    stroke="rgba(44,62,80, 0.03)" strokeWidth="1"
                    style={{ pathLength, opacity }}
                />

                {/* Vertical Lines */}
                <motion.line
                    x1="33%" y1="0" x2="33%" y2="100%"
                    stroke="rgba(44,62,80, 0.03)" strokeWidth="1"
                    style={{ pathLength, opacity }}
                />
                <motion.line
                    x1="66%" y1="0" x2="66%" y2="100%"
                    stroke="rgba(44,62,80, 0.03)" strokeWidth="1"
                    style={{ pathLength, opacity }}
                />
            </svg>
        </div>
    );
}
