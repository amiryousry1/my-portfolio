'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contact" className="py-32 bg-primary relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 rounded-[3rem] p-12 md:p-20 border border-white/10 backdrop-blur-sm relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />

                    <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                        عندك فكرة؟ <br />
                        <span className="text-accent">تعالى "نـ Vibe" سوا</span>
                    </h2>
                    <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto font-light">
                        مستني إيه؟ الأفكار بتموت لو ماتنفذتش. ابعتلي دلوقتي وخلينا نحول الفكرة لواقع ملموس يكسر الدنيا.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a
                            href="mailto:contact@example.com"
                            className="group flex items-center gap-3 px-8 py-4 bg-accent text-primary rounded-full text-lg font-bold hover:bg-accent/90 transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:-translate-y-1"
                        >
                            <Mail className="w-5 h-5" />
                            ابعتلي إيميل
                            <Send className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-3 px-8 py-4 bg-transparent text-foreground border border-white/10 rounded-full text-lg font-medium hover:bg-white/5 hover:border-accent hover:text-accent transition-all hover:-translate-y-1"
                        >
                            <Linkedin className="w-5 h-5" />
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com/amiryousry1"
                            className="flex items-center gap-3 px-8 py-4 bg-transparent text-foreground border border-white/10 rounded-full text-lg font-medium hover:bg-white/5 hover:border-accent hover:text-accent transition-all hover:-translate-y-1"
                        >
                            <Github className="w-5 h-5" />
                            GitHub
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
