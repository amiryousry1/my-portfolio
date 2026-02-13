'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
            {/* Background Decor */}
            <div className="absolute inset-0 -z-10 opacity-30">
                <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl mix-blend-multiply animate-blob" />
                <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000" />
                <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-4000" />
            </div>

            <div className="max-w-4xl mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50/50 border border-blue-100 text-blue-700 text-sm font-medium mb-6 backdrop-blur-sm"
                >
                    <Sparkles className="w-4 h-4" />
                    <span>AI Product Builder & Vibe Engineer</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-tight"
                >
                    ببني منتجات ذكية
                    <br className="hidden sm:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
                        {" "}باستخدام الـ AI
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    بساعد ستارتابس وأفراد يحوّلوا أفكارهم لمنتجات حقيقية بسرعة ومن غير تعقيد.
                    من الفكرة لحد ما تبقى شغالة، أنا معاك.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <button className="group relative px-8 py-3.5 bg-slate-900 text-white rounded-full font-medium transition-all hover:bg-slate-800 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 flex items-center gap-2">
                        شوف شغلي
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all" />
                    </button>

                    <button className="px-8 py-3.5 bg-white text-slate-700 border border-slate-200 rounded-full font-medium transition-all hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2">
                        خلّينا نشتغل سوا
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
