'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, PlayCircle, TrendingUp, Palette } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-visible bg-gradient-to-br from-[#020617] via-[#051120] to-[#020617] py-20 lg:py-0">
            {/* Background Spotlights */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#22d3ee]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#22d3ee]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full items-center">

                {/* LEFT: Visual Side (3D Card & Floating Badges) -> Now Right due to order-2 */}
                <div className="relative order-2 lg:order-2 flex justify-center lg:justify-start">
                    {/* Main 3D Card Container */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, rotateY: -10 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative w-[320px] sm:w-[380px] h-[450px] sm:h-[500px] bg-[#1a1a1a] rounded-3xl shadow-2xl border border-white/5 transform transition-transform hover:scale-[1.02] duration-500 overflow-hidden group perspective-1000"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        {/* Card Image Placeholder (Using a gradient/mockup look) */}
                        <div className="absolute inset-2 rounded-2xl bg-gradient-to-b from-neutral-800 to-neutral-950 overflow-hidden">
                            {/* Mockup Content inside the card */}
                            <div className="h-2/3 bg-neutral-200/5 m-4 rounded-xl flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-neutral-800/50" />
                                {/* Placeholder for User Image */}
                                <div className="w-20 h-20 rounded-full border border-[#22d3ee]/30 overflow-hidden relative">
                                    <Image
                                        src="/my-portfolio/me.png"
                                        alt="Amir Yousry"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            <div className="px-6 py-4">
                                <span className="inline-block px-3 py-1 bg-green-500/10 text-green-400 text-[10px] font-medium rounded-full mb-3 border border-green-500/20">
                                    متاح للعمل ●
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-1">أمير يسري</h3>
                                <p className="text-white/40 text-xs">مصمم واجهات وتجربة مستخدم</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Badge: User Growth */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="absolute bottom-10 -left-6 sm:-left-12 bg-[#1E1E1E]/90 backdrop-blur-md p-4 rounded-2xl border border-white/5 shadow-xl flex items-center gap-4 w-fit pr-8"
                    >
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-[10px] text-white/40 uppercase tracking-wider font-semibold">USER GROWTH</p>
                            <p className="text-white font-bold text-sm">+124% ARR</p>
                        </div>
                    </motion.div>

                    {/* Floating Badge: UI System */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="absolute top-20 -right-6 sm:-right-12 bg-[#1E1E1E]/90 backdrop-blur-md p-3 pl-6 rounded-2xl border border-white/5 shadow-xl flex items-center gap-3 w-fit"
                    >
                        <div>
                            <p className="text-[10px] text-white/40 uppercase tracking-wider font-semibold text-right">UI SYSTEM</p>
                            <p className="text-white font-bold text-sm text-right">Dark Mode V2</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-[#22d3ee]/20 flex items-center justify-center text-[#22d3ee]">
                            <Palette className="w-5 h-5" />
                        </div>
                    </motion.div>
                </div>

                {/* RIGHT: Content Side -> Now Left due to order-1 */}
                <div className="order-1 lg:order-1 flex flex-col items-center lg:items-end text-center lg:text-right">

                    {/* Status Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0F242A] border border-[#183B44] text-[#22d3ee] text-xs font-semibold tracking-wide uppercase"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] animate-pulse" />
                        AVAILABLE FOR PROJECTS
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
                    >
                        من أول فكرة <br />
                        <span className="text-[#22d3ee] relative inline-block">
                            لمنتج شغال...
                            {/* Underline decoration */}
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#22d3ee]/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                            </svg>
                        </span>
                        <br />
                        <span className="text-white">وأنا معاك خطوة بخطوة</span>
                    </motion.h1>

                    {/* Role / Tags */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap justify-center lg:justify-end gap-x-4 gap-y-2 text-[#22d3ee] font-medium text-sm sm:text-base mb-6"
                    >
                        <span>Al-driven UX</span>
                        <span className="text-white/20">|</span>
                        <span>Founder of Yusr Academy</span>
                        <span className="text-white/20">|</span>
                        <span>Product Designer</span>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-lg lg:text-xl text-white/60 leading-relaxed max-w-2xl mb-10"
                    >
                        بحول الأفكار المعقدة لمنتجات سهلة، ذكية، وبتبيع. بساعد الشركات الناشئة ورواد الأعمال يبنوا منتجات بيحبها المستخدمين.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-row-reverse gap-4 w-full sm:w-auto"
                    >
                        <Link
                            href="/work"
                            className="bg-[#22d3ee] text-[#020617] px-8 py-4 rounded-xl font-bold hover:bg-[#1fb8cf] transition-all hover:-translate-y-1 flex items-center gap-2"
                        >
                            شوف شغلي
                            <ArrowLeft className="w-5 h-5 rotate-180" />
                        </Link>

                        <Link
                            href="/contact"
                            className="bg-transparent text-white border border-white/10 px-8 py-4 rounded-xl font-medium hover:bg-white/5 transition-all flex items-center gap-2"
                        >
                            احكيلي فكرتك
                        </Link>
                    </motion.div>

                    {/* Social Proof / Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-12 pt-8 border-t border-white/5 w-full flex flex-row-reverse items-center justify-between lg:justify-start gap-8"
                    >
                        <div className="flex -space-x-3 space-x-reverse">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] bg-neutral-800 flex items-center justify-center text-xs overflow-hidden">
                                    {/* Placeholder avatars */}
                                    <div className={`w-full h-full bg-gradient-to-br ${i === 1 ? 'from-purple-500 to-indigo-500' : i === 2 ? 'from-pink-500 to-rose-500' : 'from-amber-500 to-orange-500'}`} />
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-[#020617] bg-[#1a1a1a] flex items-center justify-center text-xs text-white font-bold">
                                +40
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-white font-bold text-lg">+40</p>
                            <p className="text-white/40 text-xs">مشروع ناجح</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
