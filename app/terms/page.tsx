"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-remin-clear">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16 border-b border-remin-text/10 pb-8"
                >
                    <span className="text-remin-blue font-bold tracking-widest uppercase text-sm mb-4 block">
                        Legal
                    </span>
                    <h1 className="text-3xl md:text-4xl font-serif text-remin-text mb-4">
                        이용 약관 (Terms of Service)
                    </h1>
                    <p className="text-remin-text/50 text-sm">
                        최종 업데이트: 2024년 10월 24일
                    </p>
                </motion.div>

                <motion.article
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="prose prose-slate max-w-none text-remin-text/70 font-light"
                >
                    <h3>제 1 조 (목적)</h3>
                    <p>
                        본 약관은 리민(Remin)(이하 "회사")이 제공하는 모든 서비스(이하 "서비스")의 이용 조건 및 절차, 회사와 회원의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                    </p>

                    <h3>제 2 조 (용어의 정의)</h3>
                    <p>
                        1. "서비스"라 함은 구현되는 단말기(PC, 휴대형단말기 등의 각종 유무선 장치를 포함)와 상관없이 회원이 이용할 수 있는 리민의 제반 서비스를 의미합니다.<br />
                        2. "회원"이라 함은 회사의 서비스에 접속하여 본 약관에 따라 회사와 이용계약을 체결하고 회사가 제공하는 서비스를 이용하는 고객을 말합니다.
                    </p>

                    <h3>제 3 조 (약관의 게시와 개정)</h3>
                    <p>
                        1. 회사는 본 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.<br />
                        2. 회사는 "약관의 규제에 관한 법률", "정보통신망 이용촉진 및 정보보호 등에 관한 법률" 등 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.
                    </p>

                    <h3>제 4 조 (서비스의 제공 및 변경)</h3>
                    <p>
                        회사는 회원에게 다음과 같은 서비스를 제공합니다.<br />
                        1. 감정 기록 및 분석 서비스<br />
                        2. 맞춤형 호흡 가이드 및 명상 콘텐츠<br />
                        3. 기타 회사가 추가 개발하거나 제휴를 통해 회원에게 제공하는 일체의 서비스
                    </p>

                    <h3>제 5 조 (책임 제한)</h3>
                    <p>
                        회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
                    </p>
                </motion.article>
            </div>
        </main>
    );
}
