"use client";

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Button } from './ui/moving-border';

export default function ContactSection() {
    return (
        <section id="contact" className="py-32 bg-[#050C16] relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        جاهز تبدأ؟
                    </h2>
                    <p className="text-xl text-white/50 mb-12 max-w-xl mx-auto">
                        لو عندك فكرة، متخليهاش في دماغك. ابعتلي وخلينا نتناقش إزاي نحولها لواقع.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a href="mailto:contact@amiryousry.com">
                            <Button
                                borderRadius="2rem"
                                className="bg-accent text-primary border-transparent font-bold"
                            >
                                <Mail className="w-5 h-5 mr-2" />
                                ابعت إيميل
                            </Button>
                        </a>

                        <div className="flex gap-4">
                            <a
                                href="https://linkedin.com/in/amiryousry"
                                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-accent transition-all hover:scale-110"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a
                                href="https://github.com/amiryousry1"
                                className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-accent transition-all hover:scale-110"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
