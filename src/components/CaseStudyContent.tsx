'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Zap, Brain, Layout, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function CaseStudyContent({ project }: { project: any }) {
    return (
        <main className="min-h-screen bg-primary pt-24 pb-20 px-4 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <section className="max-w-5xl mx-auto mb-20">
                <Link href="/work" className="inline-flex items-center gap-2 text-foreground/50 hover:text-accent mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    رجوع للمشاريع
                </Link>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-foreground mb-6"
                >
                    {project.title}
                </motion.h1>

                <div className="flex flex-wrap gap-6 text-foreground/60 mb-12 border-b border-white/5 pb-12">
                    <div>
                        <span className="block text-xs uppercase tracking-wider text-accent mb-1">الدور</span>
                        <span className="font-medium text-foreground">{project.role}</span>
                    </div>
                    <div>
                        <span className="block text-xs uppercase tracking-wider text-accent mb-1">المدة</span>
                        <span className="font-medium text-foreground">{project.duration}</span>
                    </div>
                    <div>
                        <span className="block text-xs uppercase tracking-wider text-accent mb-1">الأدوات</span>
                        <span className="font-medium text-foreground">{project.tools.join(', ')}</span>
                    </div>
                </div>

                {/* Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20"
                >
                    <div className="md:col-span-2">
                        <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                            <Lightbulb className="w-6 h-6 text-accent" />
                            Overview
                        </h2>
                        <p className="text-xl text-foreground/80 leading-relaxed">
                            {project.overview}
                        </p>
                    </div>
                </motion.div>

                {/* Problem & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="p-8 rounded-3xl bg-red-500/5 border border-red-500/10"
                    >
                        <h3 className="text-xl font-bold text-red-400 mb-4">المشكلة (The Pain)</h3>
                        <p className="text-foreground/70 leading-relaxed">
                            {project.problem}
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="p-8 rounded-3xl bg-green-500/5 border border-green-500/10"
                    >
                        <h3 className="text-xl font-bold text-green-400 mb-4">الحل (The Fix)</h3>
                        <p className="text-foreground/70 leading-relaxed">
                            {project.solution}
                        </p>
                    </motion.div>
                </div>

                {/* Vibe & AI Role */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-full bg-accent/10 text-accent">
                            <Brain className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground">
                            لمسة الـ AI & Vibe
                        </h2>
                    </div>
                    <div className="bg-[#0A192F]/50 border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                            {project.process.map((step: any, index: number) => (
                                <div key={index}>
                                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-sm font-bold text-foreground mb-4 border border-white/10">
                                        {index + 1}
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Results */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-12">النتيجة بالأرقام</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {project.results.map((result: any, index: number) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10"
                            >
                                <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-4" />
                                <p className="text-lg font-medium text-foreground">{result}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </section>
        </main>
    );
}
