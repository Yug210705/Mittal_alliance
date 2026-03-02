'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-[80px] md:py-[40px] border-b border-white/10">
            {/* Logo Area */}
            <div className="flex items-center gap-3 md:gap-4 z-50">
                <span className="font-serif text-[32px] md:text-[44px] italic font-bold tracking-widest text-white leading-none">
                    I.T.L
                </span>
                <div className="flex flex-col font-serif text-[12px] md:text-[16px] leading-[1.2] text-white font-medium">
                    <span>Institute for</span>
                    <span>Trusted Leadership</span>
                </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-[40px] text-[16px] font-serif text-white/50">
                <Link href="#" className="text-white hover:text-white transition-colors">
                    The Institute
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                    Our Approach
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                    Ecosystem
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                    Insights
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                </Link>
            </nav>

            {/* Mobile Menu Toggle Button */}
            <button
                className="md:hidden flex flex-col items-center justify-center w-8 h-8 z-50 gap-[6px]"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle Menu"
            >
                <div className={`w-6 h-[2px] bg-white transition-transform duration-300 origin-center ${isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
                <div className={`w-6 h-[2px] bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <div className={`w-6 h-[2px] bg-white transition-transform duration-300 origin-center ${isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
            </button>

            {/* Mobile Navigation Overlay */}
            <div className={`fixed inset-0 bg-[#020d14] z-40 flex flex-col items-center justify-center p-6 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full md:hidden'}`}>
                <nav className="flex flex-col items-center gap-8 text-[24px] font-serif text-white/70">
                    <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="text-white hover:text-white transition-colors">
                        The Institute
                    </Link>
                    <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">
                        Our Approach
                    </Link>
                    <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">
                        Ecosystem
                    </Link>
                    <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">
                        Insights
                    </Link>
                    <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">
                        Contact Us
                    </Link>
                </nav>
            </div>
        </header>
    );
}
