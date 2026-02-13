'use client';

import { motion } from 'framer-motion';
import { Palette, Bot, Code2 } from 'lucide-react';

const services = [
    {
        icon: <Palette className="w-8 h-8" />,
        title: 'Product Design',
        description: 'تصميم واجهات وتجربة مستخدم (UI/UX) مش بس شكلها حلو، دي "شغالة" وبتحل مشاكل. بعمل Design Systems كاملة تخلي المنتج بتاعك جاهز للتطوير.',
        tags: ['Figma', 'Prototyping', 'Design Systems']
    },
    {
        icon: <Bot className="w-8 h-8" />,
        title: 'AI-powered MVPs',
        description: 'بحول فكرتك لمنتج شغال (MVP) في وقت قياسي باستخدام أدوات الذكاء الاصطناعي. بختار الموديل المناسب وببني "Agent" يخدم البيزنس.',
        tags: ['LLMs Integration', 'Prompt Engineering', 'Automation']
    },
    {
        icon: <Code2 className="w-8 h-8" />,
        title: 'Vibe Coding',
        description: 'كود "Vibe" نضيف، سريع، وكله حركة. بستخدم أحدث التكنولوجيات عشان أخلي الموقع "حي" وتجربته تعلق مع المستخدم.',
        tags: ['Next.js', 'Tailwind', 'Framer Motion']
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
                        className="text-4xl font-bold sm:text-5xl mb-6 text-foreground"
                    >
                        بعمل إيه؟
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-foreground/70 leading-relaxed"
                    >
                        أنا مش بس بصمم، أنا ببنيلك المنتج كامل. عندي الـ Stack اللي يخلينا نتحرك بسرعة.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-300 flex flex-col"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-foreground/70 leading-relaxed mb-8 flex-grow">
                                {service.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {service.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-foreground/60">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
