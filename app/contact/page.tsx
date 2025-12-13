"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-remin-clear">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-20">

                {/* Left: Info */}
                <div className="flex-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-remin-blue font-bold tracking-widest uppercase text-sm mb-4 block">
                            Contact Us
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif text-remin-text mb-8 leading-tight">
                            당신의 이야기에<br />
                            귀 기울입니다.
                        </h1>
                        <p className="text-remin-text/60 leading-relaxed mb-12 font-light">
                            서비스 이용 중 불편한 점이 있거나<br />
                            리민에게 전하고 싶은 이야기가 있다면 언제든 편하게 말씀해 주세요.<br />
                            고요하고 따뜻한 마음으로 답변 드리겠습니다.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-xl border border-remin-text/5 text-remin-blue">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-remin-text mb-1">Email</h3>
                                    <p className="text-remin-text/60 font-light">support@remin.com</p>
                                    <p className="text-remin-text/60 font-light">partners@remin.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-xl border border-remin-text/5 text-remin-blue">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-remin-text mb-1">Office</h3>
                                    <p className="text-remin-text/60 font-light">
                                        Seoul, Republic of Korea<br />
                                        Gangnam-gu, Teheran-ro 123
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Form */}
                <div className="flex-1">
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 md:p-12 rounded-3xl border border-remin-text/5 shadow-sm space-y-6"
                    >
                        <div>
                            <label className="block text-sm font-bold text-remin-text mb-2">Name</label>
                            <input type="text" className="w-full p-4 bg-remin-text/[0.02] border border-remin-text/10 rounded-xl outline-none focus:border-remin-blue transition-colors" placeholder="홍길동" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-remin-text mb-2">Email</label>
                            <input type="email" className="w-full p-4 bg-remin-text/[0.02] border border-remin-text/10 rounded-xl outline-none focus:border-remin-blue transition-colors" placeholder="user@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-remin-text mb-2">Category</label>
                            <select className="w-full p-4 bg-remin-text/[0.02] border border-remin-text/10 rounded-xl outline-none focus:border-remin-blue transition-colors text-remin-text/60">
                                <option>서비스 이용 문의</option>
                                <option>결제 및 환불</option>
                                <option>제휴 제안</option>
                                <option>기타</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-remin-text mb-2">Message</label>
                            <textarea rows={5} className="w-full p-4 bg-remin-text/[0.02] border border-remin-text/10 rounded-xl outline-none focus:border-remin-blue transition-colors resize-none" placeholder="내용을 입력해 주세요." />
                        </div>

                        <button type="submit" className="w-full py-4 bg-remin-text text-white font-bold rounded-xl hover:bg-remin-blue transition-colors flex items-center justify-center gap-2">
                            Send Message <ArrowRight size={18} />
                        </button>
                    </motion.form>
                </div>

            </div>
        </main>
    );
}
