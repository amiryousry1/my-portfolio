'use client';

import { motion } from 'framer-motion';
import { Target, Lightbulb, Zap, ArrowLeft } from 'lucide-react';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-primary pt-20">
            {/* Header Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold text-foreground mb-6"
                    >
                        عن الـ <span className="text-accent">Vibe</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-foreground/70 leading-relaxed font-light"
                    >
                        مش قصة حياة، دي قصة "طريقة تفكير".
                    </motion.p>
                </div>
            </section>

            {/* Section 1: Who am I? */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-2 h-full bg-accent" />
                        <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
                            <Target className="w-8 h-8 text-accent" />
                            أنا مين؟
                        </h2>
                        <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-light">
                            "أنا Product Designer مهتم ببناء منتجات حقيقية، وبستخدم الـ AI كأداة مش كبديل للتفكير."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 2: How I work? */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 relative">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-4">بشتغل إزاي؟</h2>
                        <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="p-8 rounded-2xl bg-primary border border-white/5 hover:border-accent/30 transition-all"
                        >
                            <h3 className="text-xl font-bold text-accent mb-4">1. المشكلة أولاً</h3>
                            <p className="text-foreground/70 leading-relaxed">
                                قبل ما نكتب سطر كود أو نرسم شاشة، لازم نفهم إحنا بنحل إيه ولمين.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="p-8 rounded-2xl bg-primary border border-white/5 hover:border-accent/30 transition-all"
                        >
                            <h3 className="text-xl font-bold text-accent mb-4">2. الـ Vibe قبل الـ Features</h3>
                            <p className="text-foreground/70 leading-relaxed">
                                الناس بتنسى المميزات، بس مابتنساش الإحساس. بصمم التجربة اللي تخلي المستخدم "مرتاح".
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-8 rounded-2xl bg-primary border border-white/5 hover:border-accent/30 transition-all"
                        >
                            <h3 className="text-xl font-bold text-accent mb-4">3. التنفيذ بالـ AI</h3>
                            <p className="text-foreground/70 leading-relaxed">
                                بستخدم أدوات الذكاء الاصطناعي عشان أسرع التنفيذ، مش عشان أكسل. السرعة بتدينا فرصة نجرب ونحسن أكتر.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 3: Why Vibe Coding? */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-accent/10 to-transparent p-12 rounded-[3rem] border border-accent/20 relative"
                    >
                        <Zap className="w-12 h-12 text-accent mx-auto mb-6" />
                        <h2 className="text-4xl font-bold text-foreground mb-8">ليه Vibe Coding؟</h2>
                        <p className="text-2xl md:text-3xl text-foreground/90 font-bold leading-relaxed mb-8">
                            "لأن السرعة، والوضوح، والاختبار <br /> أهم من الكمال."
                        </p>
                        <p className="text-foreground/60 text-lg">
                            في عالم الـ AI، اللي بيسبق هو اللي بيجرب أسرع. والـ Vibe Coding هو طريقتي عشان أخليك تسبق.
                        </p>
                    </motion.div>

                    <div className="mt-16">
                        <a href="/#contact" className="inline-flex items-center gap-2 text-accent font-bold text-lg hover:underline underline-offset-8">
                            <ArrowLeft className="w-5 h-5" />
                            يلا نبدأ الرحلة
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
