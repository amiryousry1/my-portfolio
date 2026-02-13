'use client';

import { motion } from 'framer-motion';

const brands = [
    'TechCorp', 'InvestAI', 'VibeStudio', 'NextGen', 'AlphaApp'
];

export default function CredibilitySection() {
    return (
        <section className="py-10 bg-primary/50 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                    <p className="text-foreground/40 font-bold text-sm tracking-widest uppercase whitespace-nowrap">
                        شركات بتثق في شغلي
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {brands.map((brand, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="text-xl font-bold text-foreground hover:text-accent cursor-default"
                            >
                                {brand}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
