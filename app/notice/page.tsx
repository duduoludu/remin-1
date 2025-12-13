"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const notices = [
    {
        id: 1,
        date: "2024.12.14",
        title: "Remin App 2.0 업데이트 안내",
        content: "리민 앱이 2.0 버전으로 업데이트되었습니다. 이제 '호흡 가이드' 기능을 오프라인에서도 사용할 수 있습니다. 앱스토어에서 지금 바로 확인해보세요."
    },
    {
        id: 2,
        date: "2024.12.01",
        title: "연말 배송 지연 안내",
        content: "연말 물량 증가로 인해 Remin Object 배송이 평소보다 2-3일 지연될 수 있습니다. 맑은 마음으로 기다려주시면 감사하겠습니다."
    },
    {
        id: 3,
        date: "2024.11.15",
        title: "오프라인 팝업 스토어 오픈",
        content: "이번 주 주말, 성수동에서 리민의 첫 번째 팝업 스토어가 열립니다. 안개를 걷어내는 특별한 공간 경험을 준비했습니다."
    },
];

export default function NoticePage() {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggle = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <main className="w-full min-h-screen pt-32 px-6 md:px-12 pb-20 max-w-4xl mx-auto">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-20 text-center"
            >
                <span className="text-remin-blue font-bold tracking-widest uppercase mb-4 block">Notice</span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-remin-text">
                    News & Updates
                </h1>
            </motion.div>

            {/* List */}
            <div className="flex flex-col border-t border-remin-text/10">
                {notices.map((item, i) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="border-b border-remin-text/10"
                    >
                        <button
                            onClick={() => toggle(item.id)}
                            className="w-full py-8 flex items-center justify-between group text-left hover:bg-gray-50/50 transition-colors px-4 rounded-xl"
                        >
                            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8">
                                <span className="text-sm text-remin-text/40 font-mono">{item.date}</span>
                                <span className="text-lg md:text-xl font-medium text-remin-text group-hover:text-remin-blue transition-colors">
                                    {item.title}
                                </span>
                            </div>
                            <ChevronDown
                                className={`text-remin-text/40 transition-transform duration-300 ${openId === item.id ? "rotate-180" : ""}`}
                            />
                        </button>

                        <AnimatePresence>
                            {openId === item.id && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden bg-gray-50/50 rounded-b-xl"
                                >
                                    <div className="p-6 md:p-8 pt-0 text-remin-text/70 leading-relaxed max-w-2xl px-4 md:px-16 pb-8">
                                        {item.content}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

        </main>
    );
}
