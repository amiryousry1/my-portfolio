'use client';

import { motion } from 'framer-motion';
import { Terminal, Cpu, Zap, Heart } from 'lucide-react';

const features = [
    {
        icon: Terminal,
        title: 'Senior Engineer',
        description: 'بكتب Systems تعيش وتكبر.'
    },
    {
        icon: Cpu,
        title: 'AI Native',
        description: 'بستخدم الذكاء الاصطناعي كدراع يمين.'
    },
    {
        icon: Zap,
        title: 'Vibe Architect',
        description: 'الناس بتنسى الكلام، بس مابتنساش الإحساس. بصمم تجربة بتلمس القلب قبل العين.'
    }
];

export default function AboutSection() {
    return (
        <section id="about" className="py-32 bg-primary relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-accent/5 to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-bold mb-8"
                        >
                            <Heart className="w-4 h-4" />
                            <span>About Me</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl font-bold text-foreground sm:text-6xl mb-8 leading-tight"
                        >
                            مش مجرد مبرمج، <br />
                            <span className="text-accent">أنا شريكك في الرحلة</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-foreground/70 mb-8 leading-relaxed font-light"
                        >
                            هدفي مش بس إني أعمل موقع شكله حلو. هدفي إني أساعدك تبني بيزنس حقيقي، منتج الناس تحبه وتستخدمه. أنا بدمج الخبرة التقنية التقيلة (Code) مع فهم عميق للبيزنس (Product) ولمسة فنية (Vibe).
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="p-6 border-r-4 border-accent bg-white/5 rounded-l-2xl"
                        >
                            <p className="text-foreground/90 italic text-lg">
                                "التكنولوجيا وسيلة، مش غاية. الغاية هي إننا نغير حياة الناس للأحسن."
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all flex items-start gap-4"
                            >
                                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{feature.title}</h3>
                                    <p className="text-foreground/70 leading-relaxed text-sm">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
