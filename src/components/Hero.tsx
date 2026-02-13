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
                    className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-8 leading-[1.2]"
                >
                    أنا Product Designer…
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-200">
                        وبحوّل الأفكار لمنتجات شغّالة بالـ AI
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl sm:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                    من أول التفكير في المشكلة، لحد تصميم وتنفيذ MVP حقيقي باستخدام <span className="text-accent font-bold">Vibe Coding</span>
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                >
                    <Link
                        href="/work"
                        className="px-8 py-4 bg-accent text-primary rounded-full font-bold text-lg hover:bg-accent/90 transition-all hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:-translate-y-1 w-full sm:w-auto text-center"
                    >
                        شوف شغلي
                    </Link>
                    <Link
                        href="/contact"
                        className="group px-8 py-4 bg-transparent border border-foreground/10 text-foreground rounded-full font-bold text-lg hover:bg-white/5 hover:border-accent transition-all w-full sm:w-auto flex items-center justify-center gap-2"
                    >
                        خلّينا نبني حاجة
                        <Rocket className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
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
            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/30 animate-bounce"
            >
                <ArrowLeft className="w-6 h-6 -rotate-90" />
            </motion.div>
        </section>
    );
}
