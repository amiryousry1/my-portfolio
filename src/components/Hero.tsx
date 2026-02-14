'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowLeft, Rocket } from 'lucide-react';
import Link from 'next/link';
import { AuroraBackground } from './ui/aurora-background';
import BlurIn from './ui/blur-in';

export default function Hero() {
    return (
        <AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-bold mb-4 backdrop-blur-sm">
                    <Sparkles className="w-4 h-4" />
                    <span className="uppercase tracking-wider">Product Designer | Founder of Yusr Academy | AI-driven UX</span>
                </div>

                {/* Headlines using BlurIn */}
                <div className="text-center space-y-2 mb-6">
                    <BlurIn
                        word="بصمم تجارب..."
                        className="text-5xl md:text-8xl font-bold text-white tracking-tight"
                        duration={1.5}
                    />
                    <BlurIn
                        word="مش شاشات"
                        className="text-5xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 tracking-tight"
                        duration={1.5}
                    />
                </div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="text-xl md:text-2xl text-neutral-200 py-4 max-w-2xl text-center leading-relaxed"
                >
                    بحول الأفكار المعقدة لمنتجات <span className="text-accent font-bold">سهلة</span>، <span className="text-accent font-bold">ذكية</span>، و<span className="text-accent font-bold">بتبيع</span>.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 w-full"
                >
                    <Link
                        href="/work"
                        className="px-8 py-4 bg-accent text-primary rounded-full font-bold text-lg hover:bg-accent/90 transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:-translate-y-1 w-full sm:w-auto text-center"
                    >
                        شوف شغلي
                    </Link>
                    <Link
                        href="/contact"
                        className="group px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-accent transition-all w-full sm:w-auto flex items-center justify-center gap-2"
                    >
                        احكيلي فكرتك
                        <Rocket className="w-4 h-4 group-hover:-translate-y-1 transition-transform text-cyan-400" />
                    </Link>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-[-150px] md:bottom-[-200px] left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
                >
                    <ArrowLeft className="w-6 h-6 -rotate-90" />
                </motion.div>
            </motion.div>
        </AuroraBackground>
    );
}
