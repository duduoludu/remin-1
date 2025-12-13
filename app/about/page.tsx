"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="w-full min-h-screen pt-40 px-6 md:px-24 pb-32 overflow-hidden bg-remin-clear">

            {/* 1. Header: Philosophy */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-4xl mx-auto mb-40 text-center"
            >
                <span className="text-remin-blue font-bold tracking-[0.2em] uppercase text-xs mb-6 block">Our Philosophy</span>
                <h1 className="text-4xl md:text-6xl font-serif text-remin-text leading-[1.2] mb-12 word-keep break-keep">
                    변화하는 구름 너머,<br />
                    <span className="text-remin-blue italic">본연의 맑은 하늘</span>을<br />
                    발견하는 여정.
                </h1>
                <p className="text-lg text-remin-text/60 leading-relaxed max-w-2xl mx-auto font-light whitespace-pre-line break-keep">
                    리민의 시작은 '날씨에 따라 형태가 바뀌는 구름'이<br />
                    우리의 감정과 닮아있다는 발견에서 비롯되었습니다.<br />
                    비가 내리고 바람이 불어 구름의 모양이 바뀌듯,<br />
                    요동치는 감정을 있는 그대로 바라보고 걷어내어<br />
                    마침내 구름 한 점 없는 맑게 갠 하늘을 마주하는 것이 우리의 목표입니다.
                </p>
            </motion.div>

            {/* 2. Core Values Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 relative">
                {/* Decorative Line */}
                <div className="hidden md:block absolute top-[60px] left-0 w-full h-[1px] bg-remin-text/10" />

                {/* Value 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-remin-clear relative z-10 pt-8 md:pt-16"
                >
                    <span className="text-xs font-mono text-remin-text/40 mb-4 block">01</span>
                    <h3 className="text-2xl font-bold text-remin-text mb-6">맑은 조화<br /><span className="text-sm font-normal text-remin-text/50 font-serif">Clear Harmony</span></h3>
                    <p className="text-remin-text/70 font-light leading-relaxed text-sm break-keep">
                        복잡한 감정 속에서도 흔들리지 않는 균형감각을 의미합니다. 리민은 당신이 혼란 속에서도 맑은 하늘과 같은 중심을 잃지 않도록 돕습니다.
                    </p>
                </motion.div>

                {/* Value 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-remin-clear relative z-10 pt-8 md:pt-16"
                >
                    <span className="text-xs font-mono text-remin-text/40 mb-4 block">02</span>
                    <h3 className="text-2xl font-bold text-remin-text mb-6">시각적 치유<br /><span className="text-sm font-normal text-remin-text/50 font-serif">Visual Tranquility</span></h3>
                    <p className="text-remin-text/70 font-light leading-relaxed text-sm break-keep">
                        '리민 블루'는 단순한 색상이 아닙니다. 바라보는 것만으로도 즉각적인 심리적 안정감을 주는 시각적 언어입니다. 불필요한 장식을 배제한 미니멀리즘으로 눈과 마음의 피로를 덜어드립니다.
                    </p>
                </motion.div>

                {/* Value 3 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="bg-remin-clear relative z-10 pt-8 md:pt-16"
                >
                    <span className="text-xs font-mono text-remin-text/40 mb-4 block">03</span>
                    <h3 className="text-2xl font-bold text-remin-text mb-6">역동적 공감<br /><span className="text-sm font-normal text-remin-text/50 font-serif">Dynamic Empathy</span></h3>
                    <p className="text-remin-text/70 font-light leading-relaxed text-sm break-keep">
                        우리는 변화무쌍한 감정의 구름을 부정하지 않습니다. 오히려 그 역동성에 깊이 공감하며, 당신이 변화 속에서 스스로 평온을 발견할 수 있도록 사려 깊은 조언자가 되어드립니다.
                    </p>
                </motion.div>
            </div>

            {/* 3. Tone & Manner Signature */}
            <motion.blockquote
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-40 max-w-2xl mx-auto text-center border-t border-b border-remin-text/10 py-16"
            >
                <p className="text-remin-text/80 font-serif text-xl md:text-2xl italic leading-relaxed">
                    "Calm & Thoughtful Advisor"
                </p>
                <footer className="mt-4 text-sm text-remin-blue tracking-widest uppercase">
                    Remin Tone & Manner
                </footer>
            </motion.blockquote>
        </main >
    );
}
