'use client';

import { motion } from 'framer-motion';
import { Search, Sparkles, Pencil, Zap, Rocket } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: 'فهم المشكلة (The \'Why\')',
        description: 'مبكتبش سطر كود قبل ما أفهم إحنا بنحل إيه ولمين. لازم نحدد "الوجع" الحقيقي عند المستخدم.',
        icon: Search,
        color: 'text-blue-400',
        bg: 'bg-blue-400/10',
        border: 'border-blue-400/20'
    },
    {
        id: 2,
        title: 'تحديد الإحساس ( The Vibe)',
        description: 'المنتج مش بس وظيفة، ده إحساس. بحدد الـ Look & Feel اللي يخلي المستخدم مرتاح ومبسوط وهو بيستخدمه.',
        icon: Sparkles,
        color: 'text-amber-400',
        bg: 'bg-amber-400/10',
        border: 'border-amber-400/20'
    },
    {
        id: 3,
        title: 'تصميم التجربة (Design)',
        description: 'برسم الـ Flow والـ UI/UX. بركز على البساطة والوضوح، وإن كل زرار يكون في مكانه الصح.',
        icon: Pencil,
        color: 'text-purple-400',
        bg: 'bg-purple-400/10',
        border: 'border-purple-400/20'
    },
    {
        id: 4,
        title: 'تنفيذ بالـ AI (Build)',
        description: 'بستخدم أدوات الذكاء الاصطناعي (Claude, GPT-4) عشان أكتب كود نضيف، سريع، و Scalable في وقت قياسي.',
        icon: Zap,
        color: 'text-green-400',
        bg: 'bg-green-400/10',
        border: 'border-green-400/20'
    },
    {
        id: 5,
        title: 'إطلاق وتحسين (Launch)',
        description: 'بنطلع للنور! بس الرحلة مابتنتهيش هنا. بتابع الأداء وبحسن النتايج بناءً على داتا حقيقية.',
        icon: Rocket,
        color: 'text-red-400',
        bg: 'bg-red-400/10',
        border: 'border-red-400/20'
    }
];

export default function ProcessPage() {
    return (
        <main className="min-h-screen bg-primary pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Header */}
            <section className="text-center max-w-4xl mx-auto mb-20 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10" />
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-foreground mb-6"
                >
                    إزاي <span className="text-accent">بفكر وبنفذ؟</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto"
                >
                    مش مجرد خطوات محفوظة، دي عقلية (Mindset) بضمن بيها إننا بنبني المنتج الصح، بالطريقة الصح.
                </motion.p>
            </section>

            {/* Timeline Steps */}
            <div className="max-w-4xl mx-auto relative">
                {/* Connecting Line */}
                <div className="absolute right-[28px] md:right-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/0 via-accent/20 to-accent/0" />

                <div className="space-y-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                            className={`flex flex-col md:flex-row gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Step Indicator (Center) */}
                            <div className="absolute right-0 md:right-1/2 translate-x-1/2 w-14 h-14 rounded-full bg-[#0A192F] border-4 border-[#0A192F] z-10 flex items-center justify-center">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step.bg} ${step.color} border ${step.border} shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                                    <step.icon className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Content Card */}
                            <div className="flex-1 md:w-1/2 pr-20 md:pr-0 md:px-12">
                                <div className={`p-6 md:p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 group ${index % 2 === 0 ? 'text-right' : 'md:text-left text-right'
                                    }`}>
                                    <div className={`text-5xl font-bold text-white/5 mb-4 select-none absolute top-4 ${index % 2 === 0 ? 'left-6' : 'md:right-6 left-6 md:left-auto'
                                        }`}>
                                        0{step.id}
                                    </div>
                                    <h3 className={`text-2xl font-bold text-foreground mb-4 relative z-10 group-hover:text-accent transition-colors`}>
                                        {step.title}
                                    </h3>
                                    <p className="text-foreground/70 leading-relaxed relative z-10">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Spacer for alternate side */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-center mt-24"
            >
                <p className="text-foreground/50 mb-6">عجبتك الطريقة؟</p>
                <a
                    href="/#contact"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-8 text-sm font-bold text-primary transition-transform hover:scale-105 hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                >
                    يلا نبدأ مشروعك
                </a>
            </motion.div>
        </main>
    );
}
