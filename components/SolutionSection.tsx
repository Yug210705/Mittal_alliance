"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function SolutionSection() {
    return (
        <section className="relative min-h-[100vh] flex flex-col items-center overflow-hidden px-6 py-[72px] md:p-[72px_72px_0] text-white">
            {/* Background */}
            <div className="absolute inset-0 z-0 pointer-events-none" style={{
                background: `
                    radial-gradient(ellipse 90% 65% at 50% 5%, rgba(10,85,38,0.92) 0%, transparent 55%),
                    radial-gradient(ellipse 60% 70% at 50% 55%, rgba(4,50,18,0.65) 0%, transparent 65%),
                    #020c05
                `,
            }} />

            {/* Top dark fade from Founder section (#050d07) into Solution (#020c05) */}
            <div className="absolute top-0 left-0 right-0 h-[100px] md:h-[150px] z-[2] pointer-events-none" style={{
                background: 'linear-gradient(to bottom, #050d07 0%, transparent 100%)',
            }} />

            <div className="relative z-10 w-full max-w-full text-center flex flex-col items-center">

                {/* Label */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="flex items-center justify-center gap-2 mb-4"
                >
                    <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] bg-white shrink-0" />
                    <span className="text-[10px] md:text-[11px] tracking-[0.18em] font-sans font-semibold uppercase">
                        OUR PHILOSOPHY
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                    className="text-[42px] md:text-[60px] font-normal leading-[1.1] mb-5 md:mb-6" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                >
                    <span className="italic mr-2 md:mr-[10px]" style={{ color: 'rgba(170,200,175,0.45)' }}>This is</span>
                    <span>Why We Exist</span>
                </motion.h2>

                {/* Body */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                    className="text-base md:text-[17px] leading-[1.6] md:leading-[1.7] font-light max-w-[600px] mx-auto mb-16 md:mb-[80px]" style={{
                        fontFamily: 'Georgia, "Times New Roman", serif',
                        color: 'rgba(255,255,255,0.58)',
                    }}>
                    Trust transforms everything engagement, innovation, performance, & culture.
                    The Institute of Trusted Leadership scales this impact through research-backed
                    methods, turning trusted leadership into the global standard.
                </motion.p>

                {/* Pillars zone */}
                <div className="relative w-full min-h-0 lg:min-h-[450px] max-w-[1000px] mx-auto flex flex-col lg:block gap-12 lg:gap-0">

                    {/* Dotted horizontal line at bottom with fade edges (Desktop only since it is a line for absolute positioning) */}
                    <div className="hidden lg:block absolute bottom-0 left-[-5%] right-[-5%] h-[2px] z-0" style={{
                        background: 'repeating-linear-gradient(to right, rgba(255,255,255,0.6) 0, rgba(255,255,255,0.6) 3px, transparent 3px, transparent 7px)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                        maskImage: 'linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)',
                    }} />

                    {[
                        {
                            num: '1', label: 'ITL APPROACH',
                            body: 'Evidence-based methodology\ncombining research, training,\nand consulting to build trusted\nleaders.',
                            cssDesktop: 'lg:bottom-[70px] lg:left-[2%]',
                            lineHeight: 70
                        },
                        {
                            num: '2', label: 'OUR ECOSYSTEM',
                            body: 'Four integrated divisions\ndelivering comprehensive\nleadership solutions from\nawareness to transformation.',
                            cssDesktop: 'lg:bottom-[250px] lg:left-[35%]',
                            lineHeight: 250
                        },
                        {
                            num: '3', label: 'GLOBAL IMPACT',
                            body: 'UN SDG-aligned programs\nensuring every initiative creates\nmeasurable social value.',
                            cssDesktop: 'lg:bottom-[140px] lg:left-[68%]',
                            lineHeight: 140
                        },
                    ].map((p, i) => {
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 + (i * 0.15) }}
                                key={p.num}
                                className={`relative lg:absolute flex items-start gap-4 z-[1] w-full lg:w-auto text-left ${p.cssDesktop}`}
                            >

                                {/* Number column */}
                                <div className="shrink-0 w-[60px] md:w-[75px] flex justify-end">
                                    <span className="inline-block text-[90px] md:text-[130px] font-normal leading-[0.75] tracking-[-2px] text-transparent" style={{
                                        fontFamily: '"Times New Roman", Times, serif',
                                        backgroundImage: 'linear-gradient(to bottom, #ffffff 0%, rgba(255,255,255,0.8) 35%, transparent 95%)',
                                        WebkitBackgroundClip: 'text',
                                        backgroundClip: 'text',
                                    }}>{p.num}</span>
                                </div>

                                {/* Text column with vertical line */}
                                <div className="relative pt-[16px] md:pt-[28px] pl-[24px] lg:pl-[28px] w-full md:w-[280px] lg:w-[240px]">
                                    {/* Vertical line rising from the bottom dotted line aligned to left of text (hidden on mobile) */}
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: p.lineHeight + 55 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.6 + (i * 0.15) }}
                                        className="hidden lg:block absolute left-0 w-[2px] top-[55px]" style={{
                                            bottom: -p.lineHeight, // reach all the way down to the horizontal dashed line
                                            background: 'linear-gradient(to top, rgba(235,255,235,0.85) 0%, rgba(255,255,255,0) 100%)',
                                            boxShadow: '0 0 8px rgba(255,255,255,0.5)',
                                        }} />

                                    {/* Left Border line for mobile ONLY to mimic the vertical line */}
                                    <div className="lg:hidden absolute left-0 top-[24px] bottom-[-24px] w-[1px]" style={{
                                        background: 'linear-gradient(to bottom, rgba(235,255,235,0.6) 0%, rgba(255,255,255,0) 100%)',
                                    }} />

                                    <h3 className="text-lg md:text-[21px] font-normal tracking-[0.04em] uppercase mb-2 md:mb-[12px] text-white" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                        {p.label}
                                    </h3>

                                    <p className="text-[13px] md:text-[13.5px] leading-[1.6] font-light m-0 whitespace-pre-line" style={{
                                        fontFamily: 'sans-serif',
                                        color: 'rgba(255,255,255,0.4)',
                                    }}>
                                        {p.body}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="h-20 md:h-[120px]" />
            </div>

            {/* Bottom dark fade smoothly transitioning into Methodology (#040b12 blue) */}
            <div className="absolute bottom-0 left-0 right-0 h-[100px] md:h-[25%] z-[2] pointer-events-none" style={{
                background: 'linear-gradient(to bottom, transparent 0%, rgba(3, 11, 15, 0.7) 50%, #040b12 100%)',
            }} />
        </section>
    );
}