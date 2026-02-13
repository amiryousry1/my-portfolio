'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Code2, Rocket } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 bg-primary">
            {/* Background Decor */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]" />
            </div>

            <div className="max-w-5xl mx-auto text-center z-10 pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-8 backdrop-blur-sm"
                >
                    <Sparkles className="w-4 h-4" />
                    <span>SENIOR AI PRODUCT DESIGNER & VIBE ENGINEER</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]"
                >
                    بصمم منتجات
                    <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-200">
                        تغیّر السوق
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl sm:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
                >
                    أنا مش بس مصمم، أنا شريكك التقني. بستخدم الذكاء الاصطناعي عشان أحول الفكرة اللي في خيالك لمنتج حقيقي، شغال، وبيجيب فلوس.
                    <span className="text-accent font-medium block mt-2">من غير رغي كتير، شغل بيتحس.</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <Link href="#work" className="group relative px-8 py-4 bg-accent text-primary rounded-full font-bold text-lg transition-all hover:bg-accent/90 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center gap-2">
                        شوف الإبداع
                        <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                    </Link>

                    <Link href="#contact" className="px-8 py-4 bg-transparent text-foreground border border-foreground/20 rounded-full font-medium text-lg transition-all hover:border-accent hover:text-accent hover:bg-accent/5">
                        احجز استشارة
                    </Link>
                </motion.div>

                {/* Stats / Trust Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70"
                >
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-white">50+</span>
                        <span className="text-sm text-gray-400">مشروع ناجح</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-white">100%</span>
                        <span className="text-sm text-gray-400">رضا العملاء</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-white">10x</span>
                        <span className="text-sm text-gray-400">سرعة التطوير</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-white">24/7</span>
                        <span className="text-sm text-gray-400">دعم فني</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
