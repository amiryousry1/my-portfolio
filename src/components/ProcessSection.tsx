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
        <section id="process" className="py-32 bg-secondary relative">
            {/* Background Element */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-primary sm:text-5xl mb-6"
                    >
                        الرحلة من "فكرة" لـ "منتج"
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-primary/70 max-w-2xl mx-auto font-light"
                    >
                        سيستم واضح، خطوات ثابتة، ونتائج مضمونة. عشان وقتك فلوس، وأنا بحترم ده.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-accent/20 -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                <div className="w-24 h-24 bg-secondary border-4 border-white shadow-xl rounded-full flex items-center justify-center mb-8 group-hover:border-accent group-hover:scale-110 transition-all duration-300 z-10 relative">
                                    <step.icon className="w-10 h-10 text-primary/40 group-hover:text-accent transition-colors duration-300" />
                                    <div className="absolute inset-0 rounded-full bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">{step.title}</h3>
                                <p className="text-sm text-primary/70 leading-relaxed font-medium">
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
