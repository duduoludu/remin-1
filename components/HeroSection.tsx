"use client";

import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Mouse Reveal Effect
    const mouseX = useMotionValue(0); // Initialize off-center or center
    const mouseY = useMotionValue(0);

    // Smooth mouse movement for the mask
    const smoothX = useSpring(mouseX, { damping: 20, stiffness: 200 });
    const smoothY = useSpring(mouseY, { damping: 20, stiffness: 200 });

    useEffect(() => {
        // Set initial position to center for aesthetic start
        if (typeof window !== "undefined") {
            mouseX.set(window.innerWidth / 2);
            mouseY.set(window.innerHeight / 2);
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Scroll Animations: Fog lifts UP rapidly
    const fogY = useTransform(scrollY, [0, 500], ["0%", "-100%"]);

    // As fog lifts, the Blue Background stays fixed? Or moves slightly?
    // Let's keep the container fixed and just move content or opacity.

    return (
        <motion.div
            ref={containerRef}
            className="fixed inset-0 z-50 h-screen w-full overflow-hidden"
            style={{ y: fogY }}
        >
            {/* 1. Base Layer: REMIN BLUE SKY (The Hidden Truth) */}
            {/* Vivid, beautiful blue gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#6DA0E1] via-[#8AB6E9] to-[#F4F6F8] z-0" />

            {/* 2. Abstract Blue Clouds (Decoration on the Sky) */}
            <div className="absolute inset-0 z-0 opacity-40">
                <motion.div
                    animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-white blur-[80px] rounded-full"
                />
            </div>

            {/* 3. Fog Layer (The Obstacle) - Masked by Mouse */}
            {/* Masking: Transparent at mouse (hole), Black elsewhere (visible fog) */}
            <motion.div
                className="absolute inset-0 z-10 bg-slate-200/90 backdrop-blur-md"
                style={{
                    maskImage: useTransform(
                        [smoothX, smoothY],
                        ([x, y]) => `radial-gradient(circle 350px at ${x}px ${y}px, transparent 0%, black 100%)`
                    ) as any,
                    WebkitMaskImage: useTransform(
                        [smoothX, smoothY],
                        ([x, y]) => `radial-gradient(circle 350px at ${x}px ${y}px, transparent 0%, black 100%)`
                    ) as any,
                }}
            >
                {/* Texture/Noise inside the fog to make it look like "Fog" not just gray div */}
                <div className="absolute inset-0 opacity-50 bg-[url('/noise.png')] mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Optional: Subtle suggestion in the fog */}
                    <span className="text-remin-text/10 font-serif text-9xl blur-sm select-none">FOG</span>
                </div>
            </motion.div>

            {/* 4. Content (Text) */}
            <div className="relative z-30 flex flex-col items-center justify-center h-full text-center px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="text-xl md:text-2xl font-serif text-remin-text mb-8 leading-relaxed font-light"
                >
                    요동치는 감정의 파동 속에서,<br />
                    가장 고요한 중심을 발견합니다.
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className="text-4xl md:text-6xl font-bold font-sans text-remin-text tracking-tight leading-tight mb-4"
                >
                    흐린 하늘도<br />당신의 날씨입니다.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.4 }}
                    className="text-remin-text/80 text-sm md:text-base font-medium tracking-wide max-w-lg mx-auto leading-relaxed mt-4"
                >
                    스크롤하여 안개를 걷어내고<br />
                    본연의 파란 하늘을 마주하세요.
                </motion.p>

                {/* Scroll Hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-12 flex flex-col items-center gap-2"
                >
                    <span className="text-sm text-remin-text font-bold tracking-widest uppercase animate-pulse">
                        Scroll / Move Mouse
                    </span>
                    <div className="w-[1px] h-12 bg-remin-text/50" />
                </motion.div>
            </div>

        </motion.div>
    );
}
