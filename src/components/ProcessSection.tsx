'use client';

import { motion } from 'framer-motion';
import { Lightbulb, PenTool, Layout, Rocket, LineChart } from 'lucide-react';

const steps = [
    {
        icon: Lightbulb,
        title: '1. فهم المشكلة',
        description: 'بنقعد سوا نفهم أصل المشكلة ومين الجمهور المستهدف.'
    },
    {
        icon: PenTool,
        title: '2. تحديد الـ Vibe',
        description: 'بنحدد إحساس المنتج والهوية البصرية المناسبة.'
    },
    {
        icon: Layout,
        title: '3. تصميم بالـ AI',
        description: 'بستخدم أدوات AI عشان أطلع نماذج أولية (Prototypes) بسرعة.'
    },
    {
        icon: Rocket,
        title: '4. تنفيذ سريع',
        description: 'بنكتب الكود وبنبني الـ MVP في وقت قياسي.'
    },
    {
        icon: LineChart,
        title: '5. إطلاق وتحسين',
        description: 'بننزل السوق، بناخد Feedback، وبنحسن المنتج.'
    }
];

export default function ProcessSection() {
    return (
        <section id="process" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">طريقة شغلي</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        خطوات واضحة وسريعة عشان نحول الفكرة لمنتج شغال.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-slate-100 -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                <div className="w-24 h-24 bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:border-blue-100 group-hover:bg-blue-50 transition-all z-10 shadow-sm">
                                    <step.icon className="w-8 h-8 text-slate-400 group-hover:text-blue-600 transition-colors" />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-sm text-slate-600">
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
