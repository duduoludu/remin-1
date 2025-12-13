"use client";

// import { cn } from "@/lib/utils";

interface ReminGlassProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function ReminGlass({ children, className = "", hoverEffect = false }: ReminGlassProps) {
    return (
        <div
            className={`
                relative overflow-hidden
                bg-white/40 backdrop-blur-xl 
                border border-white/60 
                shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                rounded-[32px]
                ${hoverEffect ? "transition-all duration-300 hover:bg-white/50 hover:shadow-[0_20px_40px_rgba(109,160,225,0.1)] hover:-translate-y-1" : ""}
                ${className}
            `}
        >
            {/* Glossy Reflection (Top-Left) */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

            {children}
        </div>
    );
}
