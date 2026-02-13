'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Send, ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
    const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormState('submitting');
        // Simulate network request
        setTimeout(() => {
            setFormState('success');
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-primary pt-24 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative z-10">
                {/* Left Column: Text & Links */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex flex-col justify-center"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                        جاهز نشتغل <br />
                        <span className="text-accent">سوا؟ 🤝</span>
                    </h1>
                    <p className="text-xl text-foreground/70 mb-12 leading-relaxed">
                        عندك فكرة مشروع؟ عايز تبني MVP؟ ولا بس عايز تقول أهلاً؟
                        <br />
                        أنا متاح ومتحمس أسمع منك.
                    </p>

                    <div className="space-y-6">
                        <a
                            href="mailto:amir.yousry@example.com"
                            className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/20"
                        >
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-foreground/50 font-medium">ابعتلي إيميل</p>
                                <p className="text-lg font-bold">amir.yousry@example.com</p>
                            </div>
                        </a>

                        <a
                            href="https://linkedin.com/in/amiryousry"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/20"
                        >
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                                <Linkedin className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-foreground/50 font-medium">Linked In</p>
                                <p className="text-lg font-bold">Amir Yousry</p>
                            </div>
                        </a>

                        <a
                            href="https://github.com/amiryousry1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/20"
                        >
                            <div className="w-12 h-12 rounded-full bg-gray-500/10 flex items-center justify-center text-gray-400 group-hover:scale-110 transition-transform">
                                <Github className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-foreground/50 font-medium">GitHub</p>
                                <p className="text-lg font-bold">@amiryousry1</p>
                            </div>
                        </a>
                    </div>
                </motion.div>

                {/* Right Column: Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-[#0A192F]/50 backdrop-blur-xl p-8 md:p-10 rounded-[32px] border border-white/10 shadow-2xl"
                >
                    {formState === 'success' ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-20">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-6"
                            >
                                <Send className="w-10 h-10" />
                            </motion.div>
                            <h3 className="text-2xl font-bold text-white mb-2">وصلتني رسالتك! 🚀</h3>
                            <p className="text-white/60">هرد عليك في أقرب وقت ممكن.</p>
                            <button
                                onClick={() => setFormState('idle')}
                                className="mt-8 text-accent hover:underline text-sm font-medium"
                            >
                                ابعت رسالة تانية
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">الاسم</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-white/20"
                                    placeholder="اسمك الكريم"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">الإيميل</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-white/20"
                                    placeholder="example@gmail.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">الرسالة</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all placeholder:text-white/20 resize-none"
                                    placeholder="عايز نبني إيه سوا؟"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={formState === 'submitting'}
                                className="w-full bg-accent text-primary font-bold py-4 rounded-xl hover:bg-accent/90 transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {formState === 'submitting' ? (
                                    'جاري الإرسال...'
                                ) : (
                                    <>
                                        يلا نبدأ
                                        <ArrowRight className="w-5 h-5 rtl:rotate-180" />
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </main>
    );
}
