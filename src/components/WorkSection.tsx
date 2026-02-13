'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

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
        <section id="work" className="py-32 bg-[#050B14]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-foreground sm:text-5xl mb-4">
                            أعمال تتحدث عن نفسها
                        </h2>
                        <p className="text-lg text-foreground/70 max-w-2xl">
                            دي عينة بسيطة من مشاريع اشتغلت عليها. كل مشروع كان تحدي، وكل حل كان إبداع.
                        </p>
                    </div>
                    <Link href="/work" className="hidden md:flex items-center gap-2 text-accent font-bold hover:tracking-wide transition-all">
                        شوف كل المشاريع <ArrowUpRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Link href={project.link} key={index} className="block">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-white/5 rounded-3xl overflow-hidden border border-white/10 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 h-full"
                            >
                                {/* Card Content */}
                                <div className="p-8 h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex gap-2 flex-wrap">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-foreground/60 rounded-full text-xs font-medium">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <ExternalLink className="w-5 h-5 text-foreground/40 group-hover:text-accent transition-colors" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                                        {project.title}
                                    </h3>

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
        </section>
    );
}
