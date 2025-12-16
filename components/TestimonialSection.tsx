"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
    { id: 1, text: "불안할 때마다 리민을 켭니다. 파란 원을 보고만 있어도 거칠었던 호흡이 차분해지는 기분이에요.", author: "Graphic Designer, 29" },
    { id: 2, text: "감정 기록이 이렇게 위로가 될 줄 몰랐습니다. 나의 패턴을 알게 되니 막연한 두려움이 사라졌어요.", author: "Product Manager, 34" },
    { id: 3, text: "하루 3분, 나를 위한 가장 사적인 의식. 리민 블루는 이제 저에게 평온함의 상징입니다.", author: "Freelancer, 31" },
];

export default function TestimonialSection() {
    return (
        <section className="w-full py-40 bg-remin-clear relative overflow-hidden">

            {/* Header */}
            <div className="text-center mb-24 relative z-10">
                <span className="text-remin-blue font-bold tracking-widest uppercase mb-4 block">Voices</span>
                <h2 className="text-4xl md:text-5xl font-clash font-bold text-remin-text">Found Calm</h2>
            </div>

            {/* Horizontal Scroll / Grid */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {reviews.map((review, i) => (
                    <motion.div
                        key={review.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="bg-white/40 backdrop-blur-xl border border-white/60 p-10 rounded-[32px] shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col justify-between group"
                    >
                        <Quote className="text-remin-blue/20 mb-6 w-10 h-10" />
                        <p className="text-lg text-remin-text/80 leading-relaxed font-light mb-8 break-keep">
                            "{review.text}"
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-remin-text/10" />
                            <span className="text-sm font-bold text-remin-text/40">{review.author}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-3xl opacity-50 pointer-events-none rotate-12" />
        </section>
    );
}
