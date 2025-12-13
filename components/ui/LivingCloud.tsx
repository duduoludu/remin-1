"use client";

import { motion } from "framer-motion";

interface LivingCloudProps {
    className?: string; // For positioning (top/left) and extra styles
    delay?: number;
    duration?: number; // Keeps backward compatibility, but 'speed' can alias it
    speed?: number;    // Alias for duration
    opacity?: number;
    scale?: number;
    color?: string;    // CSS class for background color, e.g., "bg-blue-100"
    size?: string;     // CSS class for width/height, e.g., "w-[500px] h-[500px]"
}

export default function LivingCloud({
    className = "",
    delay = 0,
    duration = 20,
    speed, // New prop
    opacity = 0.3,
    scale = 1,
    color, // New prop
    size = "w-[300px] h-[300px]" // Default size
}: LivingCloudProps) {
    // Use speed if provided, otherwise fallback to duration
    const finalDuration = speed || duration;

    // Default gradient if no color provided
    const bgClass = color || "bg-gradient-to-br from-remin-blue/40 to-indigo-200/40";

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
                x: [-20, 20, -20],
                y: [-10, 10, -10],
                opacity: opacity,
                scale: scale
            }}
            transition={{
                x: { duration: finalDuration, repeat: Infinity, ease: "easeInOut", delay },
                y: { duration: finalDuration * 1.2, repeat: Infinity, ease: "easeInOut", delay },
                opacity: { duration: 1.5 },
                scale: { duration: 1.5 }
            }}
            className={`absolute blur-[40px] md:blur-[80px] rounded-full pointer-events-none mix-blend-multiply ${bgClass} ${size} ${className}`}
        />
    );
}
