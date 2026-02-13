'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const navLinks = [
    { name: 'الرئيسية', href: '/', type: 'link' },
    { name: 'من أنا', href: '/about', type: 'link' },
    { name: 'أعمالي', href: '/work', type: 'link' },
    { name: 'العمليات', href: '/process', type: 'link' },
    { name: 'خدماتي', href: '/#services', type: 'scroll' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === '/';

    // Handle scroll for hash links if on homepage
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        if (isHome && href.includes('#')) {
            e.preventDefault();
            const id = href.split('#')[1];
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
            }
        } else {
            setIsOpen(false);
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-foreground tracking-tighter">
                            AMIR <span className="text-accent">|</span> VIBE ENGINEER
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex space-x-8 space-x-reverse">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className={`px-3 py-2 text-sm font-medium transition-colors ${pathname === link.href ? 'text-accent' : 'text-foreground/80 hover:text-accent'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center">
                        <Link
                            href="/#contact"
                            onClick={(e) => handleScroll(e, '/#contact')}
                            className="bg-accent text-primary px-6 py-2.5 rounded-full text-sm font-bold hover:bg-accent/90 transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]"
                        >
                            تواصل معايا
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground hover:text-accent p-2"
                        >
                            <span className="sr-only">Open menu</span>
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-primary/95 border-b border-accent/10 overflow-hidden backdrop-blur-xl"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleScroll(e, link.href)}
                                    className={`block px-3 py-2 rounded-md text-base font-medium hover:text-accent hover:bg-white/5 ${pathname === link.href ? 'text-accent' : 'text-foreground'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/#contact"
                                onClick={(e) => handleScroll(e, '/#contact')}
                                className="block px-3 py-2 rounded-md text-base font-bold text-primary bg-accent hover:bg-accent/90 mt-4 text-center"
                            >
                                تواصل معايا
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
