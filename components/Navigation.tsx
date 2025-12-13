"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
    { title: "Home", href: "/" },
    { title: "Brand Story", href: "/about" },
    { title: "Remin Goods", href: "/goods" },
    { title: "Team", href: "/team" },
    { title: "Notice", href: "/notice" },
];

import LivingCloud from "@/components/ui/LivingCloud";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Handle Scroll for Header Style
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        // Trigger once on mount to check initial position
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Fixed Header with Dynamic Scroll Effect */}
            <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${isScrolled
                ? "h-[70px] md:h-[80px] bg-white/40 backdrop-blur-md border-b border-white/20"
                : "h-[80px] md:h-[100px] bg-transparent border-transparent"
                }`}>
                <div className="max-w-[1200px] mx-auto px-5 h-full flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group h-full">
                        <img
                            src="/remin/logo.png"
                            alt="Remin"
                            className="h-8 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                        />
                        <span className="hidden text-xl md:text-2xl font-serif font-bold text-remin-text">Remin.</span>
                    </Link>

                    {/* Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`p-3 rounded-full transition-all duration-300 group ${isScrolled ? "hover:bg-black/5" : "hover:bg-white/10"
                            }`}
                        aria-label="Menu"
                    >
                        <div className="relative w-6 h-6 md:w-8 md:h-8">
                            <Menu className={`absolute inset-0 w-full h-full transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'} text-remin-text`} />
                            <X className={`absolute inset-0 w-full h-full transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'} text-remin-text`} />
                        </div>
                    </button>
                </div>
            </header>

            {/* Full Screen Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-[90] bg-remin-clear/90 backdrop-blur-xl flex flex-col pointer-events-auto overflow-y-auto"
                    >
                        {/* Living Clouds Background in Menu */}
                        <div className="absolute inset-0 z-0 pointer-events-none">
                            <LivingCloud
                                color="bg-blue-100"
                                size="w-[500px] h-[500px]"
                                className="top-[-10%] left-[-10%] opacity-40 blur-[80px]"
                                speed={25}
                            />
                            <LivingCloud
                                color="bg-indigo-100"
                                size="w-[600px] h-[600px]"
                                className="bottom-[-10%] right-[-10%] opacity-40 blur-[80px]"
                                speed={30}
                            />
                            <LivingCloud
                                color="bg-white"
                                size="w-[300px] h-[300px]"
                                className="top-[40%] left-[60%] opacity-30 blur-[60px]"
                                speed={20}
                            />
                        </div>

                        {/* Top Spacer for Header area */}
                        <div className="h-[100px] w-full flex-shrink-0" />

                        {/* Centered Navigation */}
                        <div className="flex-1 flex items-center justify-center relative z-10 w-full">
                            <nav className="flex flex-col gap-6 md:gap-8 text-center text-remin-text">
                                {navLinks.map((link, index) => (
                                    <Link key={link.href} href={link.href}>
                                        <motion.div
                                            initial={{ y: 50, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: 20, opacity: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.5 }}
                                            className="text-4xl md:text-6xl font-serif font-bold hover:text-remin-blue transition-colors cursor-pointer"
                                        >
                                            {link.title}
                                        </motion.div>
                                    </Link>
                                ))}
                            </nav>
                        </div>

                        {/* Footer Info (Static Position) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex-shrink-0 pb-12 w-full text-center text-remin-text/40 text-sm relative z-10"
                        >
                            <Link href="/" className="inline-flex items-center justify-center gap-2 mb-4 group opacity-80 hover:opacity-100 transition-opacity">
                                <img src="/remin/logo.png" alt="Remin" className="h-6 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }} />
                                <span className="hidden font-serif font-bold text-lg">Remin.</span>
                            </Link>
                            <div className="space-y-1">
                                <p>Based in Seoul</p>
                                <p>© 2024 Remin</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
