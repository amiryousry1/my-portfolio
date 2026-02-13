'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const services = [
    'تصميم واجهات احترافية',
    'تطوير MVP سريع',
    'استشارات في المنتج والـ UX',
    'تحسين تجربة المستخدم',
    'دمج الذكاء الاصطناعي',
    'بناء الهوية البصرية (Vibe)'
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6 sm:text-4xl leading-tight">
                            جاهز أساعدك في إيه؟
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                            سواء كنت مؤسس شركة ناشئة محتاج MVP، أو صاحب عمل عايز تطور منتجك الحالي، أنا هنا عشان أساعدك توصل لهدفك بأسرع وقت وبأعلى جودة.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                    <span className="font-medium">{service}</span>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-10">
                            <a href="#contact" className="inline-block px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-100 transition-colors">
                                اطلب خدمة
                            </a>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-2xl bg-slate-800 border border-slate-700 p-8 flex items-center justify-center">
                            <span className="text-slate-500">مساحة لصورة أو رسم توضيحي</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
