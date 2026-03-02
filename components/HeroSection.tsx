"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function HeroSection() {
    return (
        <section
            className="relative min-h-[100vh] flex flex-col px-6 md:px-[80px] pt-[120px] md:pt-[150px] overflow-hidden"
            style={{
                background: `
                    radial-gradient(ellipse 60% 80% at 90% 50%, rgba(10, 130, 110, 0.4) 0%, transparent 60%),
                    radial-gradient(ellipse 60% 60% at 10% 20%, rgba(5, 20, 30, 0.8) 0%, transparent 60%),
                    linear-gradient(to bottom, #020609 0%, #031518 100%)
                `,
            }}
        >
            <div className="relative z-10 w-full mx-auto flex flex-col h-full grow justify-between">

                {/* Top Text area */}
                <div className="mt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="flex items-center justify-center md:justify-start gap-2 mb-6 md:mb-8 text-white text-[9px] md:text-[11px] font-semibold tracking-[0.2em]"
                        style={{ fontFamily: 'sans-serif' }}
                    >
                        <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] bg-white flex-shrink-0"></div>
                        <span>BUILT ON SOLID GROUND</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                        className="text-4xl sm:text-5xl md:text-[72px] leading-[1.2] md:leading-[1.1] text-white tracking-tight text-center md:text-left"
                        style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 400 }}
                    >
                        Building Leaders –<br className="hidden md:block" />
                        <span
                            className="text-3xl sm:text-4xl md:text-[64px] block md:inline mt-2 md:mt-0"
                            style={{
                                fontFamily: 'Georgia, "Times New Roman", serif',
                                fontStyle: 'italic',
                                fontWeight: 300,
                                color: 'rgba(200, 200, 200, 0.6)',
                                marginRight: '16px',
                            }}
                        >for</span>
                        <span className="block md:inline" style={{ fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 400 }}>
                            the World Can Trust.
                        </span>
                    </motion.h1>
                </div>

                {/* Right aligned description */}
                <div className="flex justify-center md:justify-end mt-12 md:mt-24 mb-16 md:mb-32">
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                        className="max-w-[100%] md:max-w-[480px] text-center md:text-right text-white text-base md:text-[18px]"
                        style={{
                            fontFamily: 'Georgia, "Times New Roman", serif',
                            lineHeight: '1.6',
                            fontWeight: 300,
                            color: 'rgba(255,255,255,0.85)',
                        }}
                    >
                        What happens when people, technology & ideas<br className="hidden md:block" />
                        transform through trusted leadership, profound<br className="hidden md:block" />
                        learning & human responsibility.
                    </motion.p>
                </div>

                {/* Bottom indicator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                    className="flex justify-between items-center w-full pb-6 pt-6 mt-auto"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}
                >
                    <span
                        className="text-white text-xs md:text-[14px]"
                        style={{
                            fontFamily: 'Georgia, "Times New Roman", serif',
                            fontWeight: 300,
                            letterSpacing: '0.02em',
                        }}
                    >
                        Scroll to Discover
                    </span>
                    <motion.svg
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white w-4 h-4 md:w-[18px] md:h-[18px]"
                    >
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </motion.svg>
                </motion.div>

            </div>
        </section>
    );
}