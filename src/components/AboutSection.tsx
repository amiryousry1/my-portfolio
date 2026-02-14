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
        <section id="about" className="py-32 bg-gradient-to-br from-[#020617] via-[#051120] to-[#020617] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F242A] border border-[#183B44] text-[#22d3ee] text-xs font-bold mb-8"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
                            <span>Who Am I?</span>
                        </motion.div>

                        <h2 className="text-4xl font-bold text-white sm:text-6xl mb-8 leading-tight">
                            مش مجرد مبرمج، <br />
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
