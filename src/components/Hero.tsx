'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Rocket, PlayCircle } from 'lucide-react';
import Link from 'next/link';
import { BackgroundBeams } from './ui/background-beams';
import BlurIn from './ui/blur-in';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050C16]">
            <BackgroundBeams />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full pt-20">
                {/* Top Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-medium mb-8 backdrop-blur-md"
                >
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span>SENIOR PRODUCT DESIGNER & VIBE ENGINEER</span>
                </motion.div>

                {/* Main Headlines */}
                <div className="mb-8 space-y-4">
                    <BlurIn
                        word="بصمم تجارب..."
                        className="text-6xl md:text-9xl font-bold text-white tracking-tighter leading-none"
                        duration={1}
                    />
                    <div className="relative inline-block">
                        <BlurIn
                            word="مش شاشات."
                            className="text-6xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent via-amber-200 to-accent tracking-tighter leading-none"
                            duration={1.5}
                        />
                        {/* Glow under text */}
                        <div className="absolute inset-0 bg-accent/20 blur-[100px] -z-10" />
                    </div>
                </div>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed mb-12"
                >
                    بحول الأفكار المعقدة لمنتجات <span className="text-white font-semibold">ذكية</span>، <span className="text-white font-semibold">سهلة</span>، ولها <span className="text-accent">روح (Vibe)</span>.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
                >
                    <Link
                        href="/work"
                        className="group relative px-10 py-5 bg-accent text-primary rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105"
                    >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative">شوف شغلي</span>
                    </Link>

                    <Link
                        href="/contact"
                        className="group px-10 py-5 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-3 backdrop-blur-sm"
                    >
                        <span>احكيلي فكرتك</span>
                        <Rocket className="w-5 h-5 group-hover:-translate-y-1 transition-transform text-accent" />
                    </Link>
                </motion.div>

                {/* Abstract Visual Anchor (Liquid/Orb Vibe) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 1.5 }}
                    className="mt-20 relative w-full max-w-3xl aspect-[16/9] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#050C16]"
                >
                    {/* Abstract Content Placeholder - mimicking the Asset Defense / Liquid feel */}
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] animate-pulse" />

                    {/* Mock UI Elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <PlayCircle className="w-16 h-16 text-white/20 mx-auto mb-4" />
                            <p className="text-white/20 text-sm font-mono tracking-widest uppercase">Showreel 2026</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
