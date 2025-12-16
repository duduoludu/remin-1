"use client";

import { motion } from "framer-motion";

export default function MainContent() {
    return (
        <section className="relative z-10 w-full min-h-screen pt-[100vh] px-4 md:px-20 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">

                {/* Clear Mind Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-2 aspect-video rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 shadow-lg p-8 flex flex-col justify-center relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-remin-blue/20 rounded-full blur-[60px] group-hover:bg-remin-blue/30 transition-colors" />
                    <h2 className="text-4xl font-serif text-remin-text mb-4 z-10">Clear your mind</h2>
                    <p className="text-lg text-remin-text/80 z-10 max-w-md">
                        Focus on what matters. Let the fog dissipate and find your clarity.
                    </p>
                </motion.div>

                {/* Floating Orb Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="md:col-span-1 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-center relative overflow-hidden min-h-[300px]"
                >
                    {/* 3D Orb Representation */}
                    <motion.div
                        animate={{ y: [-10, 10, -10], rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="w-40 h-40 rounded-full bg-gradient-to-br from-remin-blue to-blue-300 shadow-2xl shadow-remin-blue/40"
                    />
                </motion.div>

                {/* Quote Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="md:col-span-1 aspect-square rounded-2xl bg-remin-text text-white p-8 flex items-center justify-center text-center"
                >
                    <p className="font-serif text-xl italic leading-relaxed">
                        "The mind is like the sky. Clouds come and go, but the sky remains."
                    </p>
                </motion.div>

                {/* Action Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="md:col-span-2 rounded-2xl bg-white/30 backdrop-blur-md border border-white/40 shadow-lg p-8 flex items-center justify-between"
                >
                    <div>
                        <h3 className="text-2xl font-bold mb-2">Start your journey</h3>
                        <p className="text-remin-text/70">Find your re:min Blue today.</p>
                    </div>
                    <button className="px-6 py-3 bg-remin-blue text-white rounded-full hover:bg-blue-500 transition-colors font-semibold">
                        Get Started
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
