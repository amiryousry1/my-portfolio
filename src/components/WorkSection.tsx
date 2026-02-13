'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
// import Image from 'next/image';

const projects = [
    {
        title: 'SaaS Dashboard MVP',
        description: 'لوحة تحكم لإدارة المشاريع مع تحليلات AI.',
        tags: ['Next.js', 'Tailwind', 'AI Integration'],
        image: '/project1.jpg', // Placeholder
        link: '#'
    },
    {
        title: 'E-commerce Platform',
        description: 'منصة تجارة إلكترونية كاملة مع تجربة مستخدم سلسة.',
        tags: ['React', 'Node.js', 'Stripe'],
        image: '/project2.jpg', // Placeholder
        link: '#'
    }
];

export default function WorkSection() {
    return (
        <section id="work" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">أحدث أعمالي</h2>
                        <p className="text-lg text-slate-600 max-w-2xl">
                            نماذج من مشاريع اشتغلت عليها وحولت فيها الأفكار لواقع.
                        </p>
                    </div>
                    <a href="#" className="hidden sm:flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700">
                        شوف كل المشاريع <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="aspect-video bg-slate-200 relative overflow-hidden">
                                {/* Image Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                    <span>صورة المشروع</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="flex gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 mb-6">
                                    {project.description}
                                </p>
                                <a href={project.link} className="inline-flex items-center gap-2 text-slate-900 font-medium hover:text-blue-600 transition-colors">
                                    زيارة المشروع <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center sm:hidden">
                    <a href="#" className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700">
                        شوف كل المشاريع <ArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
}
