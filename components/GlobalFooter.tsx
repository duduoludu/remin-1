"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function GlobalFooter() {
    return (
        <footer className="w-full bg-white pt-24 pb-12 px-6 md:px-12 border-t border-remin-text/5 relative overflow-hidden">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16 mb-24 relative z-10">

                {/* Col 1: Brand Identity */}
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="block mb-8">
                        <span className="font-serif text-3xl font-bold text-remin-text">remin.</span>
                    </Link>
                    <p className="text-remin-text/60 font-light leading-relaxed mb-8">
                        From chaos to clarity.<br />
                        감정의 파동을 잠재우는<br />
                        가장 사적인 의식.
                    </p>
                    <div className="flex gap-4">
                        {/* Social Placeholders */}
                        <a
                            href="https://www.instagram.com/remin.official/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-remin-text/5 hover:bg-remin-blue/10 transition-colors flex items-center justify-center cursor-pointer"
                        >
                            <span className="text-xs font-bold text-remin-text">IG</span>
                        </a>
                        <div className="w-10 h-10 rounded-full bg-remin-text/5 hover:bg-remin-blue/10 transition-colors flex items-center justify-center cursor-pointer">
                            <span className="text-xs font-bold text-remin-text">YT</span>
                        </div>
                    </div>
                </div>

                {/* Col 2: Sitemap */}
                <div>
                    <h4 className="text-sm font-bold tracking-widest uppercase text-remin-blue mb-8">Explore</h4>
                    <ul className="space-y-4">
                        <li><Link href="/about" className="text-remin-text/70 hover:text-remin-blue transition-colors">Brand Story</Link></li>
                        <li><Link href="/goods" className="text-remin-text/70 hover:text-remin-blue transition-colors">Remin Object</Link></li>
                        <li><Link href="/team" className="text-remin-text/70 hover:text-remin-blue transition-colors">The Team</Link></li>
                        <li><Link href="/notice" className="text-remin-text/70 hover:text-remin-blue transition-colors">Notice</Link></li>
                    </ul>
                </div>

                {/* Col 3: Legal & Support */}
                <div>
                    <h4 className="text-sm font-bold tracking-widest uppercase text-remin-blue mb-8">Support</h4>
                    <ul className="space-y-4">
                        <li><Link href="/privacy" className="text-remin-text/70 hover:text-remin-blue transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/terms" className="text-remin-text/70 hover:text-remin-blue transition-colors">Terms of Service</Link></li>
                        <li><Link href="/contact" className="text-remin-text/70 hover:text-remin-blue transition-colors">Contact Us</Link></li>
                        <li><Link href="/faq" className="text-remin-text/70 hover:text-remin-blue transition-colors">FAQ</Link></li>
                    </ul>
                </div>

                {/* Col 4: Newsletter */}
                <div className="col-span-1 md:col-span-1">
                    <h4 className="text-sm font-bold tracking-widest uppercase text-remin-blue mb-8">Newsletter</h4>
                    <p className="text-remin-text/60 text-sm mb-6">
                        리민의 새로운 소식과<br />평온한 영감을 받아보세요.
                    </p>
                    <div className="flex border-b border-remin-text/20 pb-2">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="flex-1 bg-transparent outline-none text-remin-text placeholder:text-remin-text/30"
                        />
                        <button className="text-remin-text hover:text-remin-blue transition-colors">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Legal */}
            <div className="max-w-7xl mx-auto border-t border-remin-text/10 pt-12 flex flex-col md:flex-row justify-between items-center text-xs text-remin-text/40 font-mono">
                <p>© 2024 re:min Inc. All rights reserved.</p>
                <p className="mt-4 md:mt-0">Seoul, Republic of Korea</p>
            </div>

            {/* Visual Decor */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-remin-blue/5 to-transparent rounded-full blur-3xl pointer-events-none translate-x-1/2 translate-y-1/2" />
        </footer>
    );
}
