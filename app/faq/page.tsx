"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "리민(Remin)은 어떤 서비스인가요?",
        answer: "리민은 요동치는 감정을 있는 그대로 기록하고, 시각적 호흡 가이드를 통해 평온함을 되찾도록 돕는 멘탈케어 플랫폼입니다. 날씨에 비유된 감정 아이콘으로 하루를 기록하고, 감정 패턴을 분석하여 맞춤형 솔루션을 제공받을 수 있습니다."
    },
    {
        question: "서비스 비용은 무료인가요?",
        answer: "기본적인 감정 기록과 호흡 가이드 기능은 무료로 제공됩니다. 심층 분석 리포트와 전문가 1:1 상담, 프리미엄 콘텐츠(굿즈 등)는 멤버십 구독을 통해 이용하실 수 있습니다."
    },
    {
        question: "제 감정 기록은 안전하게 보관되나요?",
        answer: "네, 리민은 사용자의 개인정보와 감정 기록을 철저하게 암호화하여 관리합니다. 오직 본인만이 기록을 열람할 수 있으며, 어떠한 경우에도 외부로 유출되지 않습니다."
    },
    {
        question: "탈퇴 후 재가입이 가능한가요?",
        answer: "네, 탈퇴 후 언제든지 재가입이 가능합니다. 단, 탈퇴 시 기존의 모든 감정 기록과 분석 데이터는 즉시 파기되어 복구가 불가능하니 신중하게 결정해 주세요."
    },
    {
        question: "리민 블루(Remin Blue) 굿즈는 어디서 구매하나요?",
        answer: "굿즈(Remin Object) 페이지에서 다양한 오브제를 확인하실 수 있습니다. 현재 온라인 스토어를 통해서만 구매 가능하며, 오프라인 팝업 스토어 일정은 공지사항(Notice)을 통해 안내드립니다."
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-remin-clear">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <span className="text-remin-blue font-bold tracking-widest uppercase text-sm mb-4 block">
                        Support
                    </span>
                    <h1 className="text-4xl md:text-5xl font-serif text-remin-text mb-6">
                        FAQ
                    </h1>
                    <p className="text-remin-text/60 font-light leading-relaxed">
                        자주 묻는 질문들을 모았습니다.<br />
                        궁금한 점이 해결되지 않았다면 Contact Us를 이용해 주세요.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-remin-text/10 rounded-2xl bg-white overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-remin-text/[0.02] transition-colors"
                            >
                                <span className={`text-lg md:text-xl font-medium ${openIndex === index ? 'text-remin-blue' : 'text-remin-text'}`}>
                                    {faq.question}
                                </span>
                                <span className="text-remin-text/40">
                                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>

                            <motion.div
                                initial={false}
                                animate={{ height: openIndex === index ? "auto" : 0 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 md:p-8 pt-0 text-remin-text/70 leading-relaxed font-light whitespace-pre-line border-t border-remin-text/5 mt-2">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
