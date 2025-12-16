"use client";

import { motion } from "framer-motion";
import { Cloud, PenTool, Music } from "lucide-react";
import ReminGlass from "./ui/ReminGlass";
import LivingCloud from "./ui/LivingCloud";

const features = [
    {
        id: 1,
        category: "Stabilization",
        title: "불안한 마음을\n호흡으로 다스립니다.",
        desc: "예고 없이 찾아오는 불안과 긴장.\n리민의 시각적 가이드를 따라 천천히 숨을 들이마시고 내뱉으세요.\n거친 호흡이 차분해지는 순간, 마음의 날씨도 맑아집니다.",
        icon: Cloud,
        color: "bg-blue-100",
    },
    {
        id: 2,
        category: "Recording",
        title: "오늘의 감정을\n있는 그대로 기록합니다.",
        desc: "모호한 감정에 이름을 붙이는 것만으로도 해소가 시작됩니다.\n매일의 감정 날씨를 아이콘으로 기록하고,\n당신의 마음이 어떤 패턴으로 흐르는지 리포트로 확인하세요.",
        icon: PenTool,
        color: "bg-indigo-100",
    },
    {
        id: 3,
        category: "Solution",
        title: "당신만을 위한\n맞춤형 처방.",
        desc: "지금 당신의 상태에 딱 맞는 플레이리스트와 글귀를 추천합니다.\n우울할 땐 따뜻한 위로를, 불안할 땐 단단한 용기를.\n내 손 안의 주치의가 되어드립니다.",
        icon: Music,
        color: "bg-sky-100",
    },
];

export default function FeatureDetailSection() {
    return (
        <section className="relative w-full py-32 px-6 bg-remin-clear overflow-hidden">
            {/* Floating Background Clouds */}
            <LivingCloud className="top-[10%] left-[-10%] w-[600px] h-[600px] opacity-20" duration={35} />
            <LivingCloud className="bottom-[20%] right-[-5%] w-[500px] h-[500px] bg-blue-100/40" delay={5} duration={40} />

            <div className="max-w-7xl mx-auto flex flex-col gap-40 relative z-10">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-remin-blue font-bold tracking-widest uppercase text-sm mb-4 block font-clash"
                    >
                        Deep Dive
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-remin-text"
                    >
                        감정을 다루는<br />리민만의 방식
                    </motion.h2>
                </div>

                {/* Features Loop */}
                {features.map((feature, index) => (
                    <div
                        key={feature.id}
                        className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
                            }`}
                    >
                        {/* Text Side */}
                        <motion.div
                            initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex-1"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`p-3 rounded-2xl ${feature.color} text-remin-blue`}>
                                    <feature.icon size={24} />
                                </div>
                                <span className="text-remin-text/50 italic font-clash">{feature.category}</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-remin-text mb-6 leading-tigher whitespace-pre-line">
                                {feature.title}
                            </h3>
                            <p className="text-lg text-remin-text/70 leading-relaxed whitespace-pre-line break-keep">
                                {feature.desc}
                            </p>
                        </motion.div>

                        {/* Visual Side (ReminGlass Wrapped) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex-1 w-full aspect-square md:aspect-[4/3]"
                        >
                            <ReminGlass className="w-full h-full flex items-center justify-center p-8">
                                {/* Inner Shapes */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {index === 0 && (
                                        // Breath Circle Animation
                                        <motion.div
                                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                            className="w-40 h-40 rounded-full bg-remin-blue/20 blur-xl"
                                        />
                                    )}
                                    {index === 1 && (
                                        // Grid/Calendar abstraction
                                        <div className="grid grid-cols-3 gap-4 opacity-30">
                                            {[...Array(9)].map((_, i) => (
                                                <div key={i} className="w-12 h-12 rounded-lg bg-remin-blue/40" />
                                            ))}
                                        </div>
                                    )}
                                    {index === 2 && (
                                        // Music Wave abstraction
                                        <div className="flex gap-2 items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    animate={{ height: ["20%", "80%", "20%"] }}
                                                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                                                    className="w-4 bg-remin-blue/40 rounded-full h-20"
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </ReminGlass>
                        </motion.div>
                    </div>
                ))}

            </div>
        </section>
    );
}
