"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import LivingCloud from "./ui/LivingCloud";

export default function GridSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Parallax logic
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

    // Magnetic logic for the orb
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const springConfig = { damping: 20, stiffness: 300 };
    const magneticX = useSpring(0, springConfig);
    const magneticY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            const centerX = innerWidth / 2;
            const centerY = innerHeight / 2;
            // Only activate roughly in the center area where the orb is likely to be
            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;

            // Limit the pull range
            if (Math.abs(distanceX) < 500 && Math.abs(distanceY) < 500) {
                magneticX.set(distanceX * 0.1);
                magneticY.set(distanceY * 0.1);
            } else {
                magneticX.set(0);
                magneticY.set(0);
            }
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [magneticX, magneticY]);


    // Color Copy Interaction
    const [copied, setCopied] = useState(false);

    const handleCopyColor = () => {
        navigator.clipboard.writeText("#6DA0E1");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section ref={containerRef} className="relative w-full min-h-[120vh] bg-remin-clear flex items-center justify-center p-6 md:p-24 overflow-hidden">

            {/* Background Gradient Mesh (Subtle) & Living Clouds */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white to-transparent opacity-30" />
                <LivingCloud className="top-[10%] left-[-10%] w-[500px] h-[500px]" duration={25} />
                <LivingCloud className="bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-indigo-100/30" delay={2} duration={30} />
            </div>

            <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left: Philosophy & Origin */}
                <motion.div
                    style={{ y: y1 }}
                    className="flex flex-col justify-center"
                >
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "100px" }}
                        transition={{ duration: 1 }}
                        className="h-[1px] bg-remin-blue mb-8"
                    />

                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-remin-blue font-bold tracking-[0.2em] uppercase text-xs mb-6 block"
                    >
                        The Origin
                    </motion.span>

                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-remin-text mb-8 leading-[0.9]">
                        Blue is<br />
                        <span className="italic text-remin-blue/80">The Clear Sky.</span>
                    </h2>

                    <div className="space-y-6 text-lg md:text-xl font-light text-remin-text/70 leading-relaxed whitespace-pre-line break-keep">
                        <p>
                            리민(Remin)의 이야기는 하늘을 떠다니는<br />
                            <strong>'구름'</strong>에서 시작되었습니다.
                        </p>
                        <p>
                            번개가 치고, 비가 내리고, 바람에 흩어지는 구름은<br />
                            마치 시시각각 변하는 우리의 <strong>감정</strong>과 닮아 있습니다.
                        </p>
                        <p>
                            하지만 구름 뒤에는 언제나 변하지 않는<br />
                            맑고 고요한 하늘이 존재합니다.<br />
                            우리는 그 완전한 평온의 색을 <span className="underline decoration-remin-blue decoration-1 underline-offset-4">Remin Blue</span>라 부릅니다.
                        </p>
                    </div>

                    <div className="mt-12 flex gap-12 font-mono text-xs text-remin-text/40">
                        {/* Color codes */}
                        <div className="cursor-pointer hover:text-remin-blue transition-colors" onClick={handleCopyColor} title="Click to copy HEX">
                            <span className="block font-bold text-remin-blue mb-1">HEX</span>
                            #6DA0E1
                        </div>
                        <div>
                            <span className="block font-bold text-remin-blue mb-1">RGB</span>
                            109, 160, 225
                        </div>
                        <div>
                            <span className="block font-bold text-remin-blue mb-1">CMYK</span>
                            54, 30, 0, 0
                        </div>
                    </div>
                </motion.div>

                {/* Right: The Object (Visual Metaphor) */}
                <div className="relative h-[600px] flex items-center justify-center">

                    {/* The "Chaos" background circle (faint) */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[400px] h-[400px] rounded-full border border-remin-text/5 rotate-12"
                    />

                    {/* The Orb (Core) - Interactive */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 1 }}
                        style={{ x: magneticX, y: magneticY }}
                        onClick={handleCopyColor}
                        className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-[#6DA0E1] to-[#4A7AC0] shadow-[0_20px_100px_rgba(109,160,225,0.4)] backdrop-blur-3xl flex items-center justify-center group cursor-pointer"
                    >
                        {/* Interactive Shine */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="text-center z-10 pointer-events-none transition-all duration-300">
                            <span className={`block text-white font-serif italic text-2xl opacity-90 mb-1 transition-all duration-300 ${copied ? 'translate-y-[-10px] opacity-0' : 'translate-y-0 opacity-100'}`}>
                                Pure Quiet
                            </span>
                            <span className={`block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl whitespace-nowrap transition-all duration-300 ${copied ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                                Copied! ✨
                            </span>
                            <span className={`block text-white/60 text-xs mt-2 transition-opacity duration-300 ${copied ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`}>
                                Click to copy color
                            </span>
                        </div>
                    </motion.div>

                    {/* Floating Labels */}
                    <motion.div
                        style={{ y: y2, x: 50 }}
                        className="absolute top-20 right-0 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 text-xs font-bold text-remin-text/50 shadow-sm"
                    >
                        Visual Tranquility
                    </motion.div>
                    <motion.div
                        style={{ y: y1, x: -50 }}
                        className="absolute bottom-40 left-10 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 text-xs font-bold text-remin-text/50 shadow-sm"
                    >
                        Clear Harmony
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
