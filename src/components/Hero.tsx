'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ArrowLeft, PlayCircle, TrendingUp, Palette, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { AuroraBackground } from '@/components/ui/aurora-background';
import { cn } from '@/lib/utils';

export default function Hero() {
    // 3D Card State
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left - width / 2);
        mouseY.set(clientY - top - height / 2);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]), { stiffness: 150, damping: 20 });
    const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]), { stiffness: 150, damping: 20 });

    // Glare Effect
    const glareX = useTransform(rotateY, [-15, 15], [0, 100]);
    const glareY = useTransform(rotateX, [15, -15], [0, 100]);
    const glareOpacity = useTransform(mouseY, [-300, 300], [0, 0.4]);

    // Parallax for floating elements (Subtle movement against mouse)
    const parallaxX = useSpring(useTransform(mouseX, [-500, 500], [20, -20]), { stiffness: 100, damping: 20 });
    const parallaxY = useSpring(useTransform(mouseY, [-500, 500], [20, -20]), { stiffness: 100, damping: 20 });

    return (
        <AuroraBackground className="min-h-screen !h-auto overflow-hidden">
            <section className="relative z-10 w-full min-h-screen flex items-center justify-center py-20 lg:py-0">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full items-center">

                    {/* RIGHT: Content Side (Text) - 1st on Mobile, 2nd on Desktop (RTL layout) */}
                    <div className="order-1 lg:order-1 flex flex-col items-center lg:items-end text-center lg:text-right">

                        {/* Magnetic Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[#22d3ee] text-xs font-bold tracking-wide uppercase cursor-pointer group shadow-[0_0_20px_-10px_#22d3ee]"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#22d3ee] animate-pulse shadow-[0_0_10px_#22d3ee]" />
                            <span className="group-hover:tracking-widest transition-all duration-300">متاح للعمل على مشاريع جديدة</span>
                        </motion.div>

                        {/* Heavy Headline with Staggered Reveal */}
                        <div className="relative mb-8">
                            <motion.h1
                                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="text-5xl sm:text-7xl lg:text-9xl font-black text-white leading-[1.1] tracking-tighter"
                            >
                                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                                    من أول فكرة
                                </span>
                                <br />
                                <span className="inline-block relative z-10">
                                    <span className="absolute -inset-2 bg-[#22d3ee]/20 blur-2xl rounded-full opacity-0 animate-pulse delay-1000" />
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#22d3ee] to-[#0ea5e9]">
                                        لمنتج شغال...
                                    </span>
                                </span>
                            </motion.h1>

                            <motion.h2
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white/80 mt-2"
                            >
                                وأنا معاك <span className="text-white underline decoration-[#22d3ee]/50 decoration-wavy decoration-2 underline-offset-8">خطوة بخطوة</span>
                            </motion.h2>
                        </div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="text-lg lg:text-2xl text-white/60 leading-relaxed max-w-2xl mb-10 font-light"
                        >
                            بحول الأفكار المعقدة لمنتجات <span className="text-white font-semibold">سهلة</span>، <span className="text-white font-semibold">ذكية</span>، <span className="text-white font-semibold">وبتبيع</span>.
                            بساعد الشركات الناشئة ورواد الأعمال يبنوا منتجات بيحبها المستخدمين.
                        </motion.p>

                        {/* Magnetic CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="flex flex-row-reverse gap-6 w-full sm:w-auto"
                        >
                            <Link href="/work" className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-[#22d3ee] to-[#0ea5e9] rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                                <button className="relative px-8 py-4 bg-[#020617] rounded-xl leading-none flex items-center divide-x divide-zinc-600">
                                    <span className="flex items-center space-x-5">
                                        <ArrowLeft className="w-5 h-5 rotate-180 text-gray-100 group-hover:-translate-x-1 transition-transform" />
                                        <span className="pr-6 text-gray-100 font-bold group-hover:text-[#22d3ee] transition-colors">شوف شغلي</span>
                                    </span>
                                </button>
                            </Link>

                            <Link href="/contact" className="group">
                                <button className="relative px-8 py-4 bg-transparent border border-white/10 rounded-xl leading-none flex items-center gap-2 overflow-hidden">
                                    <span className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <span className="relative text-white font-medium group-hover:text-white transition-colors">احكيلي فكرتك</span>
                                </button>
                            </Link>
                        </motion.div>
                    </div>


                    {/* LEFT: Visual Side (The Heavy 3D Card) */}
                    <div className="relative order-2 lg:order-2 flex justify-center lg:justify-start perspective-[2000px]">

                        {/* 3D Card Container */}
                        <motion.div
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d",
                            }}
                            className="relative w-[350px] sm:w-[450px] aspect-[4/5] rounded-[2rem] bg-[#0F172A] border border-white/10 shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] cursor-pointer group"
                        >
                            {/* Glare Overlay */}
                            <motion.div
                                style={{
                                    background: `radial-gradient(circle at ${50}% ${50}%, rgba(255,255,255,0.15) 0%, transparent 80%)`,
                                    opacity: glareOpacity,
                                    rotateX: useTransform(rotateX, r => -r), // Counter rotate glare
                                    rotateY: useTransform(rotateY, r => -r),
                                    x: glareX,
                                    y: glareY,
                                    pointerEvents: 'none'
                                }}
                                className="absolute inset-0 rounded-[2rem] z-50 mix-blend-overlay"
                            />

                            {/* Card Content Layer - Popout Effect */}
                            <div
                                style={{ transform: "translateZ(50px)" }}
                                className="absolute inset-0 rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#1E293B] to-[#020617]"
                            >
                                {/* Abstract Geometric Background inside Card */}
                                <div className="absolute inset-0 opacity-30">
                                    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(34,211,238,0.1)_0%,transparent_50%)] animate-[spin_10s_linear_infinite]" />
                                    <div className="absolute bottom-[-20%] right-[-20%] w-[300px] h-[300px] bg-[#22d3ee]/20 blur-[80px]" />
                                </div>

                                {/* Main Content inside Card */}
                                <div className="h-full flex flex-col items-center justify-between p-8 relative z-10">

                                    {/* Top: Availability Badge */}
                                    <div className="w-full flex justify-end">
                                        <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                            <span className="text-[10px] text-green-400 font-bold uppercase tracking-wider">Online</span>
                                        </div>
                                    </div>

                                    {/* Center: User Image with Hexagon/Circle Frame */}
                                    <div className="relative group-hover:scale-110 transition-transform duration-500">
                                        <div className="absolute inset-0 bg-[#22d3ee] blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity" />
                                        <div className="w-40 h-40 rounded-full border-2 border-white/10 p-1 relative overflow-hidden bg-black/50 backdrop-blur-sm">
                                            <Image
                                                src="/me.png"
                                                alt="Amir Yousry"
                                                fill
                                                className="object-cover rounded-full"
                                            />
                                        </div>
                                        {/* Floating Orbit Particles */}
                                        <div className="absolute inset-0 animate-[spin_4s_linear_infinite]">
                                            <div className="absolute top-0 left-1/2 w-2 h-2 bg-[#22d3ee] rounded-full blur-[1px] shadow-[0_0_10px_#22d3ee]" />
                                        </div>
                                    </div>

                                    {/* Bottom: Info */}
                                    <div className="text-center w-full bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/5 transform transition-transform group-hover:translate-y-[-10px]">
                                        <h3 className="text-3xl font-bold text-white mb-2">أمير يسري</h3>
                                        <p className="text-[#22d3ee] font-medium tracking-wide text-sm mb-4">ENGINEER OF VIBES</p>

                                        <div className="flex justify-center gap-3">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#22d3ee] hover:text-black transition-colors cursor-pointer">
                                                    {i === 1 ? <Sparkles className="w-4 h-4" /> : i === 2 ? <Zap className="w-4 h-4" /> : <Palette className="w-4 h-4" />}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Parallax Elements OUTSIDE the card via translateZ, but moved by parallaxX/Y hooks */}
                            <motion.div
                                style={{ x: parallaxX, y: parallaxY, transform: "translateZ(80px)" }}
                                className="absolute -right-8 top-1/4 bg-[#1E293B] p-4 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-3 z-20"
                            >
                                <div className="w-10 h-10 bg-[#22d3ee]/20 text-[#22d3ee] rounded-full flex items-center justify-center">
                                    <TrendingUp size={20} />
                                </div>
                                <div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase">Growth</div>
                                    <div className="text-white font-bold text-lg">+124%</div>
                                </div>
                            </motion.div>

                            <motion.div
                                style={{ x: useTransform(parallaxX, v => -v), y: useTransform(parallaxY, v => -v), transform: "translateZ(60px)" }}
                                className="absolute -left-8 bottom-1/4 bg-[#1E293B] p-4 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-3 z-20"
                            >
                                <div className="w-10 h-10 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center">
                                    <Sparkles size={20} />
                                </div>
                                <div>
                                    <div className="text-[10px] text-gray-400 font-bold uppercase">Creativity</div>
                                    <div className="text-white font-bold text-lg">High</div>
                                </div>
                            </motion.div>

                        </motion.div>
                    </div>

                </div>
            </section>
        </AuroraBackground>
    );
}
