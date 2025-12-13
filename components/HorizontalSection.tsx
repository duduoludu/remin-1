"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import LivingCloud from "./ui/LivingCloud";
import ReminGlass from "./ui/ReminGlass";
import { ArrowRight } from "lucide-react";

export default function HorizontalSection() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

    // Define card data
    const cards = [
        {
            id: 1,
            title: "심신안정\n가이드",
            desc: "불안한 호흡을 차분하게.\n시각적 가이드와 함께\n천천히 숨을 고르며 마음의 안정을 찾습니다.",
            accentColor: "text-remin-blue",
            visualHint: (
                // Breathing Animation: Expansion and Contraction
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute w-48 h-48 rounded-full bg-blue-100 blur-2xl"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-24 h-24 rounded-full bg-remin-blue/20 border border-remin-blue/30 backdrop-blur-md flex items-center justify-center"
                    >
                        <div className="w-8 h-8 rounded-full bg-white/80 shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
                    </motion.div>
                </div>
            )
        },
        {
            id: 2,
            title: "감정 로그\n& 리포트",
            desc: "오늘의 감정 날씨는 어떤가요?\n감정을 기록하고 패턴을 발견하여\n나를 더 깊이 이해합니다.",
            accentColor: "text-remin-blue",
            visualHint: (
                // Data Stacking / Log List Metaphor
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
                    {/* Background Cards (Past logs) */}
                    <motion.div
                        initial={{ y: 0, opacity: 0.5, scale: 0.9 }}
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="w-40 h-10 rounded-full bg-white/40 border border-white/20 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ y: 0, opacity: 0.7, scale: 0.95 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                        className="w-48 h-12 rounded-full bg-white/60 border border-white/30 backdrop-blur-md"
                    />
                    {/* Active Card (Current log) */}
                    <motion.div
                        className="w-56 h-16 rounded-full bg-gradient-to-r from-remin-blue/20 to-indigo-100/40 border border-white/50 backdrop-blur-xl shadow-lg flex items-center px-4 gap-3"
                    >
                        <div className="w-8 h-8 rounded-full bg-remin-blue/40" />
                        <div className="flex-1 h-2 bg-white/50 rounded-full" />
                        <div className="w-4 h-2 bg-white/30 rounded-full" />
                    </motion.div>
                </div>
            )
        },
        {
            id: 3,
            title: "맞춤형\n솔루션",
            desc: "지금 내 감정에 딱 맞는\n음악, 글귀, 행동 제안으로\n즉각적인 위로를 받습니다.",
            accentColor: "text-remin-blue",
            visualHint: (
                // Changed from diamond to soft blue orb
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-48 h-48 bg-remin-blue/30 rounded-full blur-[30px] shadow-[0_0_60px_rgba(109,160,225,0.4)] group-hover:bg-remin-blue/40 transition-colors duration-700" />
                    {/* Inner Core */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-remin-blue rounded-full blur-[20px] opacity-80" />
                </div>
            )
        },
        {
            id: 4,
            title: "말하기\n연습",
            desc: "마음속에 담아둔 말을 소리 내어 뱉어보세요.\n억눌린 감정을 해소하는\n카타르시스를 경험합니다.",
            accentColor: "text-remin-blue",
            visualHint: (
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <motion.div
                            key={i}
                            animate={{ height: [20, 80, 20] }}
                            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
                            className="w-2 bg-remin-blue/50 rounded-full blur-[2px]"
                        />
                    ))}
                </div>
            )
        },
    ];

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-remin-clear">
            {/* Background Atmosphere */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <LivingCloud className="top-[20%] left-[10%] w-[600px] h-[600px] opacity-20" />
            </div>

            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-12 px-12 md:px-24 items-center">

                    {/* Intro Text Block */}
                    <div className="flex-shrink-0 w-[400px] flex flex-col justify-center">
                        <h3 className="text-5xl font-bold text-remin-text mb-6 tracking-tight leading-tight">
                            How Remin<br />Works
                        </h3>
                        <p className="text-lg text-remin-text/60 font-light tracking-wide">
                            내 감정을 다루는 4가지 방법
                        </p>
                        <div className="flex items-center gap-2 mt-8 text-remin-blue/80 animate-pulse">
                            <span className="text-sm font-medium uppercase tracking-widest">Scroll</span>
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </div>

                    {/* Cards Loop */}
                    {cards.map((card) => (
                        <div key={card.id} className="h-[60vh] w-[450px] flex-shrink-0 group">
                            <ReminGlass className="w-full h-full p-8 md:p-12 flex flex-col justify-between" hoverEffect={true}>
                                <div className="relative z-10">
                                    <span className={`font-bold tracking-widest uppercase text-xs mb-4 block ${card.accentColor}`}>
                                        Step 0{card.id}
                                    </span>
                                    <h3 className="text-3xl md:text-5xl font-serif text-remin-text mb-6">
                                        {card.title}
                                    </h3>
                                    <p className="text-remin-text/70 text-lg leading-relaxed whitespace-pre-line">
                                        {card.desc}
                                    </p>
                                </div>

                                {/* Visual Element (Bottom) */}
                                <div className="relative z-0 h-full w-full mt-4">
                                    {card.visualHint}
                                </div>
                            </ReminGlass>
                        </div>
                    ))}

                    {/* End Space */}
                    <div className="w-[10vw] flex-shrink-0" />
                </motion.div>
            </div>
        </section>
    );
}
