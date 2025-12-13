"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
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
                        개인정보 처리방침 (Privacy Policy)
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
                    <h3>1. 개인정보의 처리 목적</h3>
                    <p>
                        리민(Remin)은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.<br />
                        - 회원 가입 및 관리<br />
                        - 서비스 제공 및 콘텐츠 추천<br />
                        - 마케팅 및 광고 활용
                    </p>

                    <h3>2. 처리하는 개인정보의 항목</h3>
                    <p>
                        회사는 다음의 개인정보 항목을 처리하고 있습니다.<br />
                        - 필수항목: 이메일, 비밀번호, 닉네임<br />
                        - 선택항목: 성별, 생년월일, 감정 기록 데이터
                    </p>

                    <h3>3. 개인정보의 파기</h3>
                    <p>
                        회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
                    </p>

                    <h3>4. 권익침해 구제방법</h3>
                    <p>
                        정보주체는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다.
                    </p>
                </motion.article>
            </div>
        </main>
    );
}
