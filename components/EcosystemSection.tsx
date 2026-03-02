"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function EcosystemSection() {
    return (
        <section
            className="relative min-h-[100vh] flex flex-col items-center overflow-hidden px-6 md:px-10 pt-24 pb-[140px] text-white"
            style={{
                background: '#020609', // Transition from previous section
            }}
        >
            {/* Background Gradients to match the image */}
            <div className="absolute inset-0 z-0 pointer-events-none" style={{
                background: `
                    radial-gradient(ellipse 60% 60% at 85% 60%, rgba(2, 45, 100, 0.45) 0%, transparent 60%),
                    radial-gradient(ellipse 70% 50% at 15% 90%, rgba(0, 100, 70, 0.25) 0%, transparent 60%),
                    radial-gradient(ellipse 80% 80% at 50% 20%, rgba(8, 25, 50, 0.8) 0%, transparent 70%),
                    radial-gradient(circle at 95% 95%, rgba(0, 160, 120, 0.5) 0%, rgba(0, 80, 150, 0.3) 30%, transparent 60%),
                    #020b16
                `,
            }} />

            {/* Seamless Top transition from previous section */}
            <div className="absolute top-0 left-0 right-0 h-[100px] md:h-[200px] z-0 pointer-events-none" style={{
                background: 'linear-gradient(to bottom, #020b16 0%, transparent 100%)',
            }} />

            <div className="relative z-10 w-full max-w-[1200px] flex flex-col items-center">

                {/* Header Container */}
                <div className="text-center mb-10 md:mb-[60px] flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="flex items-center gap-2 mb-4 md:mb-5"
                    >
                        <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] bg-white shrink-0" />
                        <span className="text-[10px] md:text-[11px] tracking-[0.18em] font-sans font-semibold uppercase">
                            Built on Solid Ground
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className="text-[40px] leading-[1.1] md:text-[56px] font-normal mb-6 md:mb-[24px]" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
                    >
                        One Vision.<br className="hidden md:block" />
                        Four Pathways to Impact.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                        className="text-base md:text-[16px] leading-[1.6] font-light max-w-full md:max-w-[800px] m-0 text-white/85" style={{ fontFamily: 'sans-serif' }}
                    >
                        The Institute of Trusted Leadership operates through an integrated ecosystem of specialized
                        divisions, each designed to address different aspects of leadership development and
                        organizational transformation.
                    </motion.p>
                </div>

                {/* Cards Container */}
                <div className="flex flex-col xl:flex-row items-stretch gap-6 w-full justify-center px-0 md:px-5">

                    {/* Left Huge Card (Luca) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                        className="relative w-full xl:w-[580px] shrink-0 bg-[#061725] rounded-xl border border-[rgba(25,110,160,0.35)] overflow-hidden flex flex-col shadow-[0_10px_40px_rgba(0,0,0,0.3)]"
                    >
                        {/* Tab "Open to all" - Absolute positioned overlapping the image */}
                        <div className="absolute top-0 left-0 bg-[#1c5e96] p-[10px_16px] md:p-[12px_20px] rounded-br-xl flex items-center gap-2 z-10 border-r border-b border-white/10">
                            <div className="w-[4px] h-[4px] md:w-[6px] md:h-[6px] bg-white shrink-0" />
                            <span className="text-[9px] md:text-[10px] tracking-[0.12em] font-sans font-bold uppercase">
                                Open To All
                            </span>
                        </div>

                        {/* Image area completely spanning the top */}
                        <div className="w-full h-[240px] md:h-[340px] bg-[#f5f8fa] relative flex justify-center items-center">
                            <img src="/ss2.png" alt="Luca The Leader Interface" className="w-full h-full object-cover" />
                        </div>

                        {/* Thin division line */}
                        <div className="w-full h-[1px] bg-white/5" />

                        {/* Text Content Area */}
                        <div className="flex flex-col p-6 pb-8 md:p-[32px_36px_40px] grow">
                            <div className="flex justify-between items-start mb-2 md:mb-2">
                                <h3 className="text-[26px] md:text-[32px] font-normal m-0 text-white" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                    LUCA The Leader
                                </h3>
                                <div className="text-[20px] md:text-[24px] font-light cursor-pointer opacity-80 leading-none">↗</div>
                            </div>

                            <p className="text-[16px] md:text-[18px] text-white/85 mb-4 md:mb-5 tracking-[0.01em]" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                Where Leadership Awareness Begins
                            </p>

                            <p className="text-[13px] md:text-[14.5px] text-white/45 leading-[1.6] font-light m-0 pr-0 md:pr-5" style={{ fontFamily: 'sans-serif' }}>
                                Our flagship CSR initiative bringing trusted leadership awareness to
                                communities, organizations, and emerging leaders. Start your journey with free
                                resources, assessments, and community connection.
                            </p>
                        </div>
                    </motion.div>

                    {/* Narrow Vertical Cards Wrapper */}
                    <div className="flex flex-col md:flex-row gap-5 grow">
                        {[
                            {
                                label: 'FOR\nORGANIZATIONS',
                                title: 'MARTINICH CONSULTING',
                                subtitle: 'Strategic Leadership Partnerships',
                            },
                            {
                                label: 'FOR INDIVIDUALS\n& TEAMS',
                                title: 'MARTINICH INSTITUTE',
                                subtitle: 'Learning That Transforms',
                            },
                            {
                                label: 'FOR RESEARCH &\nINNOVATION',
                                title: 'MARTINICH R&D',
                                subtitle: 'Innovation Meets Insight',
                            }
                        ].map((card, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 + (idx * 0.15) }}
                                key={idx}
                                className="flex-1 rounded-xl border border-[rgba(25,110,160,0.35)] overflow-hidden flex flex-col bg-[#051622]"
                            >
                                {/* Header Tab */}
                                <div className="bg-[#0d2844] p-5 md:p-[28px_20px] min-h-[auto] md:min-h-[120px] border-b border-white/5 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0">
                                    <div className="w-[6px] h-[6px] bg-white shrink-0 mb-0 md:mb-4 hidden md:block" />
                                    <h4 className="text-[10px] md:text-[10px] font-bold tracking-[0.08em] text-white m-0 whitespace-pre-line leading-[1.5]" style={{ fontFamily: 'sans-serif' }}>
                                        {card.label.replace('\n', ' ')}
                                    </h4>
                                </div>

                                {/* Vertical Text Section - rotate for desktop, normal for mobile text */}
                                <div className="grow relative flex justify-center items-center py-8 md:py-[40px] px-6 md:px-0">

                                    {/* Mobile layout (Horizontal text) */}
                                    <div className="flex md:hidden flex-col items-center gap-2 text-center w-full">
                                        <h3 className="text-[20px] font-normal text-white m-0 tracking-[0.04em]" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                            {card.title}
                                        </h3>
                                        <span className="text-[14px] text-white/70 m-0" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                            {card.subtitle}
                                        </span>
                                    </div>

                                    {/* Desktop layout (Vertical Text) */}
                                    <div className="hidden md:flex items-center gap-4" style={{ transform: 'rotate(-180deg)', writingMode: 'vertical-rl' }}>
                                        <h3 className="text-[22px] font-normal text-white m-0 tracking-[0.04em] whitespace-nowrap" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                            {card.title}
                                        </h3>
                                        <span className="text-[16px] text-white/70 m-0 whitespace-nowrap" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                                            {card.subtitle}
                                        </span>
                                    </div>

                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom dark fade to prep for footer */}
            <div className="absolute bottom-0 left-0 right-0 h-[100px] md:h-[15%] z-0 pointer-events-none" style={{
                background: 'linear-gradient(to bottom, transparent, #020804)',
            }} />
        </section>
    );
}
