'use client';

import { motion } from 'framer-motion';
import { Terminal, Cpu, Zap } from 'lucide-react';

const features = [
    {
        icon: Terminal,
        title: 'مهندس برمجيات',
        description: 'بكتب كود نضيف، قابل للتطوير، وسهل للصيانة. مش بس بجري ورا التريند.'
    },
    {
        icon: Cpu,
        title: 'AI Native',
        description: 'بستخدم الذكاء الاصطناعي في كل خطوة عشان أسرع الشغل وأحسن الجودة.'
    },
    {
        icon: Zap,
        title: 'Vibe Engineer',
        description: 'مش بس وظيفة، ده أسلوب حياة. بهتم بالإحساس والتفاصيل اللي بتفرق في التجربة.'
    }
];

export default function AboutSection() {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4"
                    >
                        مش مجرد مبرمج، شريك في الرحلة
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        هدفي مش بس إني أعمل موقع أو تطبيق، هدفي إني أساعدك تبني بيزنس حقيقي ومنتج الناس تحبه. بدمج الخبرة التقنية مع فهم البيزنس والـ UX.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all"
                        >
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                                <feature.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
