"use client";

import { motion } from "framer-motion";

const teamMembers = [
    { id: 1, name: "Kim Dokyeong", role: "App & Web Design / Dev", desc: "Building the digital sanctuary." },
    { id: 2, name: "Song Hyekyeong", role: "Craft & Goods", desc: "Touching the texture of calm." },
    { id: 3, name: "Song Chanjong", role: "Craft & Goods", desc: "Shaping the physical form." },
    { id: 4, name: "Park Sanghee", role: "App Design", desc: "Visualizing the flow of mind." },
    { id: 5, name: "Jang Dayeon", role: "Creative Direction", desc: "Defining the mood of serenity." },
    { id: 6, name: "Moon Junhyeong", role: "Graphic & Poster Design", desc: "Capturing the essence in visuals." },
];

export default function TeamPage() {
    return (
        <main className="w-full min-h-screen pt-32 px-6 md:px-12 pb-20">

            {/* Header */}
            <div className="max-w-7xl mx-auto mb-20 text-center md:text-left">
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-remin-blue font-bold tracking-widest uppercase mb-4 block"
                >
                    The Team
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-serif font-bold text-remin-text mb-8"
                >
                    Cloud Walkers
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-remin-text/60 max-w-2xl font-light"
                >
                    감정의 파동을 이해하는 전문가들입니다.<br />
                    당신이 온전한 평온을 찾을 수 있도록, 보이지 않는 곳에서 길을 만듭니다.
                </motion.p>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, i) => (
                    <motion.div
                        key={member.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + (i * 0.1) }}
                        className="group cursor-pointer"
                    >
                        {/* Profile Image Area */}
                        <div className="w-full aspect-[3/4] bg-gray-100 mb-6 relative overflow-hidden rounded-2xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-200 to-gray-50 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                            {/* Abstract Avatar */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-remin-blue/20 rounded-full blur-xl group-hover:bg-remin-blue/40 transition-colors" />
                        </div>

                        {/* Info */}
                        <h3 className="text-xl font-bold text-remin-text mb-1">{member.name}</h3>
                        <p className="text-sm font-bold text-remin-blue uppercase tracking-widest mb-3">{member.role}</p>
                        <p className="text-sm text-remin-text/50 italic font-serif">"{member.desc}"</p>
                    </motion.div>
                ))}
            </div>

        </main>
    );
}
