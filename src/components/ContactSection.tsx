'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-slate-50 rounded-3xl p-12 border border-slate-100 shadow-sm"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-6 font-headings">عندك فكرة؟ يلا ننفذها</h2>
                    <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto">
                        مستني أسمع منك. سواء عندك مشروع كامل أو مجرد فكرة عايز تتناقش فيها، ابعتلي وهرد عليك في أقرب وقت.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="mailto:contact@example.com"
                            className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all hover:-translate-y-1"
                        >
                            <Mail className="w-5 h-5" />
                            abdo@example.com
                        </a>
                        <a
                            href="#"
                            className="flex items-center gap-2 px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 hover:border-slate-300 transition-all hover:-translate-y-1"
                        >
                            <Linkedin className="w-5 h-5 text-[#0077b5]" />
                            LinkedIn
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
