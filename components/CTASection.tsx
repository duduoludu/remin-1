"use client";

import { motion } from "framer-motion";

export default function CTASection() {
    return (
        <section className="w-full py-32 bg-remin-blue relative overflow-hidden text-white">
            {/* Background Decorative Circles */}
            <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-white/10 blur-[100px]" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-white/10 blur-[80px]" />

            <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
                >
                    마음의 날씨를<br />지금 바꿔보세요.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-white/80 mb-12 font-light"
                >
                    리민과 함께라면 흐린 마음도 언제든 맑아질 수 있습니다.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button className="px-8 py-4 bg-white text-remin-blue rounded-full font-bold text-lg hover:bg-white/90 transition-colors shadow-lg flex items-center justify-center gap-2">
                        {/* Placeholder for Apple Logo */}
                        <span>App Store</span>
                    </button>
                    <button className="px-8 py-4 bg-white/20 backdrop-blur-md text-white border border-white/40 rounded-full font-bold text-lg hover:bg-white/30 transition-colors shadow-lg flex items-center justify-center gap-2">
                        {/* Placeholder for Google Play Logo */}
                        <span>Google Play</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
