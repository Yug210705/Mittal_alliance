"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function MethodologySection() {
    const BAR_W = 140;

    const items = [
        { title: 'Research & Insights', bullets: ['Evidence-based leadership models', 'Continuous innovation', 'Data-driven understanding'], barH: 480 },
        { title: 'Training & Development', bullets: ['Practical skill-building', 'Certification programs', 'Organizational transformation'], barH: 340 },
        { title: 'Consulting &\nImplementation', bullets: ['Strategic partnership', 'Custom solutions', 'Measurable impact'], barH: 220 },
    ];

    return (
        <section
            className="relative overflow-hidden flex flex-col justify-center text-white px-6 md:px-[80px] pt-[80px] md:pt-20 pb-0 min-h-[100vh]"
            style={{
                background: '#040b12', // Matches Solution's bottom and Ecosystem's top
            }}
        >
            {/* Blue glow — bottom left */}
            <div className="absolute z-0 pointer-events-none w-[100%] md:w-[60%] h-[100%] md:h-[60%] bottom-[-10%] left-[-10%]" style={{
                background: 'radial-gradient(ellipse at 20% 80%, rgba(3,25,65,0.7) 0%, transparent 65%)',
            }} />

            {/* Seamless Top transition from Solution section (#040b12) */}
            <div className="absolute top-0 left-0 right-0 h-[100px] md:h-[150px] z-[0] pointer-events-none" style={{
                background: 'linear-gradient(to bottom, #040b12 0%, transparent 100%)',
            }} />

            <div className="relative z-10 max-w-[1200px] mx-auto w-full flex flex-col md:flex-row gap-[40px] md:gap-14 grow">

                {/* ── Left Column (Headers) ── */}
                <div className="w-full md:w-[40%] shrink-0 md:mt-10 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="flex items-center justify-center md:justify-start gap-2 mb-4 md:mb-5"
                    >
                        <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] bg-white shrink-0" />
                        <span className="text-[10px] md:text-[11px] tracking-[0.18em] font-sans font-semibold uppercase">
                            Our Methodology
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className="text-[40px] leading-[1.1] md:text-[56px] font-normal m-0" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                    >
                        How We Transform<br className="hidden md:block" />Leadership
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                        className="text-[16px] md:text-[18px] leading-[1.6] font-light w-[90%] md:w-full md:max-w-[440px] mt-8 text-center md:text-left text-white/80 mx-auto md:mx-0" style={{
                            fontFamily: 'Georgia, "Times New Roman", serif',
                        }}>
                        Trusted leadership isn't just built on theory. It requires
                        integrated operation, applied strategy, active training, and
                        proven methods to drive lasting change.
                    </motion.p>
                </div>

                {/* ── Right Column (Text + Bars) ── */}
                <div className="w-full md:w-[60%] flex flex-col md:mt-12 z-10">

                    {/* ── Bars zone: Desktop view (Vertical Bars) ── */}
                    <div className="hidden md:flex relative grow min-h-[600px] w-full">
                        <div className="relative flex items-end w-full h-full pb-10 gap-[120px]">
                            {items.map((item, i) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 60 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 + (i * 0.2) }}
                                    key={i} className="flex flex-col items-start justify-end h-full" style={{ width: BAR_W, minHeight: 600 }}
                                >

                                    {/* Text above the bar */}
                                    <div className="pb-6 pl-2 z-10 w-[260px]">
                                        <h3 className="text-[22px] font-normal leading-[1.2] mb-3 text-white whitespace-pre-line" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                            {item.title}
                                        </h3>
                                        <ul className="list-none p-0 m-0">
                                            {item.bullets.map((b, j) => (
                                                <li key={j} className="flex items-start gap-2 text-[12px] leading-[1.5] font-light mb-1 text-white/70" style={{ fontFamily: 'sans-serif' }}>
                                                    <span className="opacity-40 shrink-0 text-[13px]">•</span>{b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* The Bar */}
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: item.barH }}
                                        viewport={{ once: true, margin: "50px" }}
                                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 + (i * 0.2) }}
                                        className="shrink-0 z-0 relative ml-0 border border-white/5 border-b-0" style={{
                                            width: BAR_W,
                                            background: 'linear-gradient(to top, #020609 0%, #081320 100%)',
                                        }} />

                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* ── Mobile view (Stacked List with accent borders) ── */}
                    <div className="md:hidden flex flex-col gap-10 w-full mb-[120px]">
                        {items.map((item, i) => (
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 + (i * 0.2) }}
                                key={i} className="flex flex-col relative pl-5 border-l-[3px] border-[#081320]" style={{
                                    // Using the barH variable intuitively as a gradient intensity marker via the border just for flair
                                    borderImageSource: 'linear-gradient(to bottom, #115d9e, transparent)',
                                    borderImageSlice: 1
                                }}>
                                <h3 className="text-[20px] font-normal leading-[1.2] mb-3 text-white whitespace-pre-line" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                    {item.title}
                                </h3>
                                <ul className="list-none p-0 m-0">
                                    {item.bullets.map((b, j) => (
                                        <li key={j} className="flex items-start gap-2 text-[14px] leading-[1.5] font-light mb-2 text-white/70" style={{ fontFamily: 'sans-serif' }}>
                                            <span className="opacity-40 shrink-0 text-[14px]">•</span>{b}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

            {/* ── Bottom gradient — matches Ecosystem top ── */}
            <div className="absolute bottom-0 left-0 right-0 h-[20%] md:h-[30%] z-[1] pointer-events-none" style={{
                background: 'linear-gradient(to bottom, transparent 0%, #020b16 100%)',
            }} />
        </section>
    );
}