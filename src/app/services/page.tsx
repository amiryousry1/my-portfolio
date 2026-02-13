'use client';

import { motion } from 'framer-motion';
import { Palette, Bot, Code2, Users, ArrowUpRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        id: 1,
        title: 'Product Design (MVPs)',
        description: 'بحول الفكرة المجنونة لمنتج حقيقي قابل للاستخدام. مش مجرد شاشات حلوة، لكن تجربة مستخدم (UX) مدروسة عشان نحل مشكلة حقيقية.',
        useCase: 'مثال: عندك فكرة تطبيق توصيل وعايز Prototype تعرضه على مستثمرين.',
        icon: Palette,
        color: 'text-blue-400',
        bg: 'bg-blue-400/10'
    },
    {
        id: 2,
        title: 'AI-Powered Prototyping',
        description: 'بستخدم أدوات الذكاء الاصطناعي عشان أبني نماذج تفاعلية (Prototypes) في وقت قياسي. ده بيوفر أسابيع من الشغل التقليدي.',
        useCase: 'مثال: بدل ما ناخد شهر في التصميم، هناخد أسبوع واحد ونطلع بنتيجة مبهرة.',
        icon: Bot,
        color: 'text-purple-400',
        bg: 'bg-purple-400/10'
    },
    {
        id: 3,
        title: 'Vibe Coding',
        description: 'بكتب كود (React/Next.js) بيركز على "الإحساس" والـ Micro-interactions. الموقع مش بس بيشتغل، الموقع "بيتنفس" معاك.',
        useCase: 'مثال: موقع بورتفليو أو Landing Page عايزها تخطف العين من أول ثانية.',
        icon: Code2,
        color: 'text-amber-400',
        bg: 'bg-amber-400/10'
    },
    {
        id: 4,
        title: 'UX Strategy & Audit',
        description: 'لو عندك منتج شغال بس مش بيحقق نتايج، بحلله وبطلع المشاكل (Pain Points) وبقترح حلول فورية لتحسين التجربة.',
        useCase: 'مثال: مستخدمين كتير بيمشوا من صفحة الدفع؟ هقولك ليه ونحلها إزاي.',
        icon: Users,
        color: 'text-green-400',
        bg: 'bg-green-400/10'
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-primary pt-24 pb-20 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <section className="text-center max-w-4xl mx-auto mb-20 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10" />
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-foreground mb-6"
                >
                    بقدم إيه <span className="text-accent">بالظبط؟</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-foreground/70 leading-relaxed max-w-2xl mx-auto"
                >
                    مش "بتاع كله". أنا بركز في الحتت اللي بضيف فيها قيمة حقيقية وسرعة ملموسة.
                </motion.p>
            </section>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-[#0A192F]/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col"
                    >
                        <div className="mb-6 flex justify-between items-start">
                            <div className={`p-4 rounded-2xl ${service.bg} ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className="w-8 h-8" />
                            </div>
                            <Sparkles className="w-5 h-5 text-white/5 group-hover:text-accent transition-colors" />
                        </div>

                        <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                            {service.title}
                        </h3>

                        <p className="text-foreground/70 text-lg leading-relaxed mb-8 flex-grow">
                            {service.description}
                        </p>

                        <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-sm">
                            <p className="text-foreground/90 font-medium flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                {service.useCase}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="max-w-4xl mx-auto text-center bg-gradient-to-b from-transparent to-accent/5 p-12 rounded-3xl border border-white/5"
            >
                <h2 className="text-3xl font-bold text-foreground mb-6">
                    عندك فكرة وعايز تطلعها للنور؟
                </h2>
                <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
                    سواء كانت مجرد فكرة على ورق، أو منتج موجود وعايز تطوره. أنا جاهز أسمعك.
                </p>
                <Link
                    href="/#contact"
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-accent px-10 text-lg font-bold text-primary transition-transform hover:scale-105 hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
                >
                    خلينا نتكلم
                    <ArrowUpRight className="w-5 h-5" />
                </Link>
            </motion.div>
        </main>
    );
}
