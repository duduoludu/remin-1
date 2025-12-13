"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function GoodsPage() {
    return (
        <main className="w-full min-h-screen pt-32 pb-20">

            {/* 1. Product Hero */}
            <section className="px-6 md:px-12 flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-32">

                {/* Visual (Left) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="w-full md:w-1/2 aspect-square bg-gray-100 rounded-[40px] flex items-center justify-center relative overflow-hidden"
                >
                    {/* Simulated Product Image (3D Cube Logic reuse) */}
                    <motion.div
                        animate={{ rotateY: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-48 h-48 md:w-80 md:h-80 bg-remin-blue shadow-[0_20px_60px_rgba(109,160,225,0.5)] transform-style-3d border border-white/20"
                    />

                    {/* Badge */}
                    <div className="absolute top-8 left-8 bg-black text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                        Signature
                    </div>
                </motion.div>

                {/* Info (Right) */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-remin-blue font-bold tracking-widest uppercase mb-4"
                    >
                        Limited Edition
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-serif font-bold text-remin-text mb-8"
                    >
                        Remin<br />Blue Object
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-remin-text/60 mb-12 max-w-md leading-relaxed"
                    >
                        손에 잡히는 평온함.<br />
                        불규칙한 당신의 책상 위, 마음에 중심을 잡아줄 단 하나의 오브제입니다.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <button className="px-12 py-5 bg-remin-text text-white text-lg font-bold rounded-full hover:bg-remin-blue transition-colors shadow-xl">
                            Purchase (Coming Soon)
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* 2. Detail Grid */}
            <section className="px-6 md:px-12 max-w-7xl mx-auto">
                <h3 className="text-2xl font-bold text-remin-text mb-12 border-b border-gray-200 pb-4">Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Material", desc: "Premium Acrylic & Glass" },
                        { title: "Size", desc: "80 x 80 x 80 mm" },
                        { title: "Weight", desc: "350g (Solid Feel)" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 bg-white border border-gray-100 rounded-3xl"
                        >
                            <h4 className="text-sm text-remin-text/40 uppercase tracking-widest mb-4">{item.title}</h4>
                            <p className="text-2xl font-bold text-remin-text">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

        </main>
    );
}
