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
                    Blue is<br />
                    <span className="text-remin-blue italic">The Stable Wave.</span>
                </h1>
                <p className="text-lg text-remin-text/60 leading-relaxed max-w-2xl mx-auto font-light whitespace-pre-line break-keep">
                    re:min 역시 감정을 억제하거나 지우려 하지 않습니다.<br />
                    대신 감정이 지나갈 수 있도록 리듬을 설계하는 브랜드입니다.<br />
                    우리는 감정을 하나의 파동으로 바라봅니다.<br />
                    파동은 통제할수록 커지고, 흐르게 두면 서서히 감쇠됩니다.<br />
                    re:min은 이 감정의 파동이 가장 안정적인 리듬으로 바뀌는 순간을 디자인합니다.
                </p>
            </motion.div>

            {/* 2. Core Values Grid - Updated Content */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative">
                {/* Decorative Line */}
                <div className="hidden md:block absolute top-[60px] left-0 w-full h-[1px] bg-remin-text/10" />

                {/* Section 1: The Color of Flow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-remin-clear relative z-10 pt-8 md:pt-16"
                >
                    <span className="text-xs font-mono text-remin-text/40 mb-4 block">01</span>
                    <h3 className="text-2xl font-bold text-remin-text mb-6">
                        흐름의 색<br />
                        <span className="text-sm font-normal text-remin-text/50 font-serif">The Color of Flow</span>
                    </h3>
                    <p className="text-remin-text/70 font-light leading-relaxed text-sm break-keep whitespace-pre-line">
                        리민 블루는 완전히 멈춘 고요의 색이 아닙니다.
                        리민 블루는 감정의 파동이 가장 안정적인 흐름으로 바뀔때의 색입니다.

                        사람의 감정이 가장 깊이 이완된 순간, 열화상 카메라에서 붉은 열기가 사라진 자리에 차분하고 깊은 파란색이 감지되었습니다.
                    </p>
                </motion.div>

                {/* Section 2: Reminal Blue */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="bg-remin-clear relative z-10 pt-8 md:pt-16"
                >
                    <span className="text-xs font-mono text-remin-text/40 mb-4 block">02</span>
                    <h3 className="text-2xl font-bold text-remin-text mb-6">
                        리미널 블루<br />
                        <span className="text-sm font-normal text-remin-text/50 font-serif">Reminal Blue</span>
                    </h3>
                    <p className="text-remin-text/70 font-light leading-relaxed text-sm break-keep whitespace-pre-line">
                        리민의 브랜드 컬러인 ‘리미널 블루(Reminal Blue)’는 바로 그 절대적인 안정의 순간을 포착한 색입니다.

                        엄마의 품처럼, 달궈진 마음을 식혀주는 이 잔잔한 파랑 안에서 당신은 온전한 휴식을 경험하게 될 것입니다.
                    </p>
                </motion.div>
            </div>

            {/* 3. Footer Quote */}
            <motion.blockquote
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-40 max-w-2xl mx-auto text-center border-t border-b border-remin-text/10 py-16"
            >
                <p className="text-remin-text/80 font-serif text-xl md:text-2xl italic leading-relaxed">
                    "Blue is The Stable Wave."
                </p>
            </motion.blockquote>
        </main >
    );
}
