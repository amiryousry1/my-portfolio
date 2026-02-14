'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Button } from "./ui/moving-border";

const projects = [
    {
        id: 1,
        title: 'SaaS Dashboard AI',
        description: 'لوحة تحكم ذكية للشركات بتستخدم الذكاء الاصطناعي لتحليل البيانات وتوقع النتائج. تصميم مودرن وسريع جداً.',
        tags: ['Next.js', 'Tailwind', 'OpenAI'],
        link: '/work/1'
    },
    {
        id: 2,
        title: 'Vibe E-commerce',
        description: 'متجر إلكتروني بتجربة 3D غامرة. مش مجرد بيع وشراء، دي تجربة تسوق العميل بيستمتع بيها.',
        tags: ['React Three Fiber', 'Stripe', 'Supabase'],
        link: '/work/2'
    },
    {
        id: 3,
        title: 'Smart Agency Portfolio',
        description: 'موقع لوكالة تسويق بيعكس قوتهم في السوق. أنيميشنز وتفاعلات بتشد العين من أول لحظة.',
        tags: ['Framer Motion', 'React', 'GSAP'],
        link: '/work/3'
    }
];

export default function WorkSection() {
    return (
        <section id="work" className="py-32 bg-gradient-to-br from-[#020617] via-[#051120] to-[#020617] relative">
            {/* Background Gradient */}
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#020617] to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F242A] border border-[#183B44] text-[#22d3ee] text-xs font-semibold tracking-wide uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
                        PROJECTS
                    </div>
                    <h2 className="text-3xl font-bold text-white sm:text-5xl mb-4">
                        أعمال تتحدث عن نفسها
                    </h2>
                    <p className="text-lg text-white/60 max-w-2xl mx-auto">
                        كل مشروع كان تحدي، وكل حل كان إبداع. دي عينة بسيطة من اللي أقدر أعمله.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {projects.map((project, index) => (
                        <Link href={project.link} key={index} className="block group">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative bg-[#0A192F] border border-white/5 rounded-2xl overflow-hidden hover:border-[#22d3ee]/50 transition-all duration-300 h-full flex flex-col group-hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
                            >
                                <p className="text-foreground/70 leading-relaxed mb-8 flex-grow">
                                    {project.description}
                                </p>

                                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                                    <span className="text-sm font-medium text-foreground/50 group-hover:text-foreground transition-colors">عرض التفاصيل</span>
                                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        </Link>
                    ))}
            </div>

            <div className="mt-12 text-center md:hidden">
                <Link href="/work" className="inline-flex items-center gap-2 text-accent font-bold">
                    شوف كل المشاريع <ArrowUpRight className="w-5 h-5" />
                </Link>
            </div>
        </div>
        </section >
    );
}
