"use client";

import { motion } from "framer-motion";
import { Download, Instagram } from "lucide-react";

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
                    className="text-4xl md:text-6xl font-bold mb-8 leading-tight font-clash"
                >
                    불안한 파동을<br />안정적인 흐름으로.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-white/80 mb-12 font-light"
                >
                    리민에서 오직 나에게 집중하는 시간을 가져보세요.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button className="px-8 py-4 bg-white text-remin-blue rounded-full font-bold text-lg hover:bg-white/90 transition-colors shadow-lg flex items-center justify-center gap-2">
                        <Download size={20} />
                        <span>앱 다운로드</span>
                    </button>
                    <button className="px-8 py-4 bg-white/20 backdrop-blur-md text-white border border-white/40 rounded-full font-bold text-lg hover:bg-white/30 transition-colors shadow-lg flex items-center justify-center gap-2">
                        <Instagram size={20} />
                        <span>공식 인스타그램</span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

