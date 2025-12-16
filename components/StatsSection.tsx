"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
    { id: 1, value: "12,000", label: "Active Users", desc: "매일 리민과 함께하는 사람들" },
    { id: 2, value: "98%", label: "Satisfaction", desc: "평온함을 되찾은 사용자 비율" },
    { id: 3, value: "03", label: "Minutes", desc: "하루에 필요한 최소의 시간" },
];

export default function StatsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="w-full py-32 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: i * 0.2, duration: 0.8 }}
                        className="py-8 md:py-0 px-4"
                    >
                        <motion.div
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={isInView ? { scale: 1, opacity: 1 } : {}}
                            transition={{ type: "spring", stiffness: 100, delay: 0.2 + (i * 0.1) }}
                            className="text-6xl md:text-8xl font-clash font-bold text-remin-blue mb-4 block"
                        >
                            {stat.value}
                        </motion.div>
                        <h3 className="text-xl font-bold text-remin-text mb-2 uppercase tracking-widest font-clash">{stat.label}</h3>
                        <p className="text-remin-text/50 font-light">{stat.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-50 via-transparent to-transparent pointer-events-none" />
        </section>
    );
}
