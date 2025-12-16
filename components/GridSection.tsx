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
                        className="text-remin-blue font-bold tracking-[0.2em] uppercase text-xs mb-6 block font-clash"
                    >
                        The Origin
                    </motion.span>

                    <h2 className="text-5xl md:text-7xl font-clash font-bold text-remin-text mb-8 leading-[0.9]">
                        Blue is<br />
                        <span className="italic text-remin-blue/80">The Stable Wave.</span>
                    </h2>

                    <div className="space-y-6 text-lg md:text-xl font-light text-remin-text/70 leading-relaxed whitespace-pre-line break-keep">
                        <p>
                            re:min 역시 감정을 억제하거나 지우려 하지 않습니다. 대신 감정이 지나갈 수 있도록 리듬을 설계하는 브랜드입니다.<br />
                            우리는 감정을 하나의 파동으로 바라봅니다. 파동은 통제할수록 커지고, 흐르게 두면 서서히 감쇠됩니다. re:min은 이 감정의 파동이 가장 안정적인 리듬으로 바뀌는 순간을 디자인합니다.
                        </p>
                        <p>
                            리민 블루는 완전히 멈춘 고요의 색이 아닙니다. 리민 블루는 감정의 파동이 가장 안정적인 <strong>흐름</strong>으로 바뀔때의 색입니다.<br />
                            사람의 감정이 가장 깊이 이완된 순간, 열화상 카메라에서 붉은 열기가 사라진 자리에 차분하고 깊은 파란색이 감지되었습니다.
                        </p>
                        <p>
                            리민의 브랜드 컬러인 <span className="underline decoration-remin-blue decoration-1 underline-offset-4">‘리미널 블루(Reminal Blue)’</span>는 바로 그 절대적인 안정의 순간을 포착한 색입니다.<br />
                            엄마의 품처럼, 달궈진 마음을 식혀주는 이 잔잔한 파랑 안에서 당신은 온전한 휴식을 경험하게 될 것입니다.
                        </p>
                    </div>

                    <div className="mt-12 flex gap-12 font-mono text-xs text-remin-text/40">
                        {/* Color codes */}
                        <div className="cursor-pointer hover:text-remin-blue transition-colors" onClick={handleCopyColor} title="Click to copy HEX">
                            <span className="block font-bold text-remin-blue mb-1 font-clash">HEX</span>
                            #6DA0E1
                        </div>
                        <div>
                            <span className="block font-bold text-remin-blue mb-1 font-clash">RGB</span>
                            109, 160, 225
                        </div>
                        <div>
                            <span className="block font-bold text-remin-blue mb-1 font-clash">CMYK</span>
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
                            <span className={`block text-white font-clash italic text-2xl opacity-90 mb-1 transition-all duration-300 ${copied ? 'translate-y-[-10px] opacity-0' : 'translate-y-0 opacity-100'}`}>
                                Pure Quiet
                            </span>
                            <span className={`block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl whitespace-nowrap transition-all duration-300 font-clash ${copied ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
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
                        className="absolute top-20 right-0 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 text-xs font-bold text-remin-text/50 shadow-sm font-clash"
                    >
                        Visual Tranquility
                    </motion.div>
                    <motion.div
                        style={{ y: y1, x: -50 }}
                        className="absolute bottom-40 left-10 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/40 text-xs font-bold text-remin-text/50 shadow-sm font-clash"
                    >
                        Clear Harmony
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
