"use client";

import { motion } from 'framer-motion';
import { Palette, Bot, Code2, Smartphone } from 'lucide-react';
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { cn } from '@/lib/utils';

const Skeleton = ({ className }: { className?: string }) => (
    <div className={cn("flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 animate-pulse border border-white/5", className)}></div>
);

const services = [
    {
        title: 'Product Design',
        description: 'تصميم واجهات وتجربة مستخدم (UI/UX) مش بس شكلها حلو، دي "شغالة" وبتحل مشاكل. بعمل Design Systems كاملة.',
        header: <Skeleton className="bg-gradient-to-br from-purple-500/20 to-blue-500/20" />,
        icon: <Palette className="w-6 h-6" />,
        className: "md:col-span-2",
    },
    {
        title: 'AI-powered MVPs',
        description: 'بحول فكرتك لمنتج شغال (MVP) في وقت قياسي باستخدام أدوات الذكاء الاصطناعي.',
        header: <Skeleton className="bg-gradient-to-br from-pink-500/20 to-rose-500/20" />,
        icon: <Bot className="w-6 h-6" />,
        className: "md:col-span-1",
    },
    {
        title: 'Vibe Coding',
        description: 'كود "Vibe" نضيف، سريع، وكله حركة. بستخدم أحدث التكنولوجيات عشان أخلي الموقع "حي".',
        header: <Skeleton className="bg-gradient-to-br from-amber-500/20 to-yellow-500/20" />,
        icon: <Code2 className="w-6 h-6" />,
        className: "md:col-span-1",
    },
    {
        title: 'Mobile Apps',
        description: 'تطبيقات موبايل (iOS & Android) بتصميمات عصرية وأداء ممتاز.',
        header: <Skeleton className="bg-gradient-to-br from-green-500/20 to-emerald-500/20" />,
        icon: <Smartphone className="w-6 h-6" />,
        className: "md:col-span-2",
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-32 bg-[#050C16] relative overflow-hidden">
            {/* Background Element */}
            <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold sm:text-5xl mb-6 text-white"
                    >
                        بعمل إيه؟
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-white/70 leading-relaxed"
                    >
                        أنا مش بس بصمم، أنا ببنيلك المنتج كامل. عندي الـ Stack اللي يخلينا نتحرك بسرعة.
                    </motion.p>
                </div>

                <BentoGrid className="max-w-4xl mx-auto">
                    {services.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={item.className}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
}
