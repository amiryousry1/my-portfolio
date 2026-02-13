'use client';

import { motion } from 'framer-motion';
import { Sparkles, Zap, Palette, Brain, Rocket, Code2 } from 'lucide-react';

const services = [
    {
        icon: <Brain className="w-6 h-6" />,
        title: 'AI Integration & Agents',
        description: 'بخلي تطبيقك يفكر. بدمج موديلات الذكاء الاصطناعي (LLMs) لعمل وكلاء أذكياء بيخلصوا شغل بدالك.'
    },
    {
        icon: <Palette className="w-6 h-6" />,
        title: 'Premium UX/UI Design',
        description: 'تصميمات مش بس شكلها حلو، دي "بتاكل" السوق. تجربة مستخدم تخلي العميل مايخرجش من عندك.'
    },
    {
        icon: <Rocket className="w-6 h-6" />,
        title: 'Vibe Coding (MVP)',
        description: 'ببني النسخة الأولى من منتجك (MVP) بسرعة البرق، بس بكواليتي شركات كبيرة. كود نضيف، وسريع.'
    },
    {
        icon: <Sparkles className="w-6 h-6" />,
        title: 'Micro-Interactions',
        description: 'التفاصيل الصغيرة اللي بتفرق. حركات وأنيميشنز تخلي تطبيقك "حي" وممتع في الاستخدام.'
    }
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-32 bg-primary relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold sm:text-5xl mb-6 text-foreground"
                    >
                        مش بس كود.. <span className="text-accent">دي تجربة كاملة</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-foreground/70 leading-relaxed"
                    >
                        أنا بقدملك "الخلطة السرية" اللي بتنجح المنتجات العالمية.
                        تصميم شيك، ذكاء اصطناعي، وأداء صاروخي.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-foreground/70 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
