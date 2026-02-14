'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Presentation, Palette, Code2, Rocket } from 'lucide-react';

const steps = [
    {
        icon: Lightbulb,
        title: '1. الاستكشاف',
        description: 'بفهم منك الفكرة والهدف.'
    },
    {
        icon: Presentation,
        title: '2. التخطيط',
        description: 'مش بنرمي كود وخلاص. بنحط خطة إزاي الذكاء الاصطناعي هيخدم البيزنس بتاعك.'
    },
    {
        icon: Palette,
        title: '3. تصميم الـ Vibe',
        description: 'بنعمل واجهات مش بس شكلها حلو، دي "بتحسسك" بالمنتج. تجربة مستخدم سلسة وممتعة.'
    },
    {
        icon: Code2,
        title: '4. التطوير الذكي (The Build)',
        description: 'بكتب كود نضيف (Clean Code) وبدمج موديلات AI عشان نخلي التطبيق أذكى وأسرع.'
    },
    {
        icon: Rocket,
        title: '5. الإطلاق (The Blast)',
        description: 'بنتأكد إن كل حاجة تمام، وبنطلع لايف. ومش بس كده، بتابع معاك عشان نكبر.'
    }
];

export default function ProcessSection() {
    return (
        <section id="process" className="py-32 bg-gradient-to-br from-[#020617] via-[#051120] to-[#020617] relative overflow-hidden">
            {/* Cyan Glow */}
            <div className="absolute top-1/2 left-1/2 w-[600px] h-[400px] bg-[#22d3ee]/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F242A] border border-[#183B44] text-[#22d3ee] text-xs font-semibold tracking-wide uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
                        PROCESS
                    </div>
                    <h2 className="text-3xl font-bold text-white sm:text-5xl mb-6">
                        الرحلة من "فكرة" لـ "منتج"
                    </h2>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
                        خطوات ثابتة، مدروسة، وبتوصل لنتيجة.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line */}
                    <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#22d3ee]/30 to-transparent -z-10 opacity-30" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-20 h-20 bg-[#0A192F] border border-white/10 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-[#22d3ee] group-hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300 z-10 relative">
                                    <step.icon className="w-8 h-8 text-white/40 group-hover:text-[#22d3ee] transition-colors duration-300" />
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-sm text-white/50 leading-relaxed min-h-[4rem]">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
