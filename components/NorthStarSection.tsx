"use client";
import React from 'react';
import { motion } from 'framer-motion';

export function NorthStarSection() {
    // All diagram coords are in a fixed viewBox; SVG scales to fill the column
    const VW = 700;  // viewBox width
    const VH = 700;  // viewBox height
    const cx = 350;  // center x in viewBox
    const cy = 360;  // center y in viewBox
    const R = 240;  // circle radius in viewBox units

    const toRad = (deg: number) => (deg * Math.PI) / 180;
    const iconR = 58; // icon circle radius in viewBox units

    // angles: top, bottom-left, bottom-right
    const iconPos = (angle: number) => ({
        x: cx + R * Math.cos(toRad(angle)),
        y: cy + R * Math.sin(toRad(angle)),
    });

    const topIcon = iconPos(-90);
    const blIcon = iconPos(150);
    const brIcon = iconPos(30);

    return (
        <section
            className="relative min-h-[100vh] flex items-center overflow-hidden flex-col md:flex-row"
            style={{
                background: `
                    radial-gradient(ellipse 80% 80% at 20% 40%, rgba(20, 120, 60, 0.85) 0%, transparent 60%),
                    radial-gradient(ellipse 60% 60% at 80% 20%, rgba(0, 100, 120, 0.6) 0%, transparent 55%),
                    radial-gradient(ellipse 50% 50% at 70% 80%, rgba(20, 80, 160, 0.4) 0%, transparent 50%),
                    linear-gradient(to bottom, #031518 0%, #071510 15%, #071510 80%, #050d07 100%)
                `,
            }}
        >
            {/* Seamless Top transition from Hero section */}
            <div className="absolute top-0 left-0 right-0 h-[100px] md:h-[180px] z-0 pointer-events-none" style={{
                background: 'linear-gradient(to bottom, #031518 0%, transparent 100%)',
            }} />

            <div className="relative z-10 w-full flex flex-col md:flex-row items-center min-h-[100vh]">

                {/* Left Side: Circular Diagram — takes up ~55% of width, no padding, bleeds to edge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, x: -50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex-shrink-0 w-full md:w-[55%] h-[50vh] min-h-[400px] md:h-[100vh]"
                >
                    {/* Single SVG filling the entire left column */}
                    <svg
                        width="100%"
                        height="100%"
                        viewBox={`0 0 ${VW} ${VH}`}
                        preserveAspectRatio="xMidYMid meet"
                        style={{ display: 'block' }}
                    >
                        <defs>
                            <filter id="starGlow">
                                <feGaussianBlur stdDeviation="8" result="blur" />
                                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                            </filter>
                        </defs>

                        {/* Dashed circle */}
                        <circle
                            cx={cx} cy={cy} r={R}
                            fill="none"
                            stroke="rgba(255,255,255,0.28)"
                            strokeWidth="1.2"
                            strokeDasharray="5 16"
                        />

                        {/* 3-pointed star centered at cx, cy */}
                        {(() => {
                            const rOut = 150; // Outer radius to the tips
                            const rIn = 45; // Inner control point radius for curve depth

                            const t1 = { x: cx + rOut * Math.cos(toRad(-90)), y: cy + rOut * Math.sin(toRad(-90)) };
                            const t2 = { x: cx + rOut * Math.cos(toRad(30)), y: cy + rOut * Math.sin(toRad(30)) };
                            const t3 = { x: cx + rOut * Math.cos(toRad(150)), y: cy + rOut * Math.sin(toRad(150)) };

                            const c1 = { x: cx + rIn * Math.cos(toRad(-30)), y: cy + rIn * Math.sin(toRad(-30)) };
                            const c2 = { x: cx + rIn * Math.cos(toRad(90)), y: cy + rIn * Math.sin(toRad(90)) };
                            const c3 = { x: cx + rIn * Math.cos(toRad(210)), y: cy + rIn * Math.sin(toRad(210)) };

                            return (
                                <g filter="url(#starGlow)">
                                    <path
                                        d={`M ${t1.x} ${t1.y} Q ${c1.x} ${c1.y} ${t2.x} ${t2.y} Q ${c2.x} ${c2.y} ${t3.x} ${t3.y} Q ${c3.x} ${c3.y} ${t1.x} ${t1.y} Z`}
                                        fill="white"
                                        stroke="white"
                                        strokeWidth="12"
                                        strokeLinejoin="round"
                                    />
                                </g>
                            );
                        })()}

                        {/* Top Icon: Eye — Blue circle */}
                        <circle cx={topIcon.x} cy={topIcon.y} r={iconR} fill="#0576cc" />
                        <circle cx={topIcon.x} cy={topIcon.y} r={iconR} fill="none" stroke="rgba(5,118,204,0.5)" strokeWidth="12" />
                        {/* Eye icon scaled around topIcon */}
                        <g transform={`translate(${topIcon.x - 20}, ${topIcon.y - 20}) scale(1.67)`}>
                            <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="12" cy="12" r="3.5" fill="none" stroke="white" strokeWidth="1.5" />
                        </g>

                        {/* Bottom-Left Icon: Target — Dark */}
                        <circle cx={blIcon.x} cy={blIcon.y} r={iconR} fill="rgba(55,75,63,0.88)" />
                        <circle cx={blIcon.x} cy={blIcon.y} r={iconR} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                        <g transform={`translate(${blIcon.x - 20}, ${blIcon.y - 20}) scale(1.67)`}>
                            <circle cx="12" cy="12" r="10" fill="none" stroke="white" strokeWidth="1.5" />
                            <circle cx="12" cy="12" r="6" fill="none" stroke="white" strokeWidth="1.5" />
                            <circle cx="12" cy="12" r="2" fill="none" stroke="white" strokeWidth="1.5" />
                            <path d="m22 2-6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        </g>

                        {/* Bottom-Right Icon: Trophy — Dark */}
                        <circle cx={brIcon.x} cy={brIcon.y} r={iconR} fill="rgba(55,75,63,0.88)" />
                        <circle cx={brIcon.x} cy={brIcon.y} r={iconR} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                        <g transform={`translate(${brIcon.x - 20}, ${brIcon.y - 20}) scale(1.67)`}>
                            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 22h16" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>
                </motion.div>

                {/* Right Side: Content — takes remaining 45%, padded */}
                <div
                    className="flex-grow flex flex-col justify-center px-8 py-12 md:p-[60px_80px_60px_40px] text-center md:text-left"
                >
                    {/* Label */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="flex items-center justify-center md:justify-start gap-2 mb-6 md:mb-8 text-white uppercase text-[9px] md:text-[11px] font-semibold tracking-[0.18em]"
                        style={{ fontFamily: 'sans-serif' }}
                    >
                        <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] bg-white flex-shrink-0"></div>
                        <span>ABOUT ITL</span>
                    </motion.div>

                    {/* Main heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className="text-white mb-6 md:mb-8 text-5xl md:text-[70px] leading-[1.05] tracking-[-0.01em]"
                        style={{
                            fontFamily: 'Georgia, "Times New Roman", serif',
                            fontWeight: 400,
                        }}
                    >
                        Our North Star
                    </motion.h2>

                    {/* Vision subheading */}
                    <motion.h3
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                        className="text-white mb-4 md:mb-5 text-3xl md:text-[36px] italic font-bold leading-[1.2]"
                        style={{
                            fontFamily: 'Georgia, "Times New Roman", serif',
                        }}
                    >
                        Vision
                    </motion.h3>

                    {/* Body text */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                        className="mb-12 md:mb-16 text-base md:text-[18px] leading-[1.65] font-light text-white/65 max-w-[500px] mx-auto md:mx-0"
                        style={{
                            fontFamily: 'Georgia, "Times New Roman", serif',
                        }}
                    >
                        A world in which organizations are led by trust and
                        committed to the continuous development of people and
                        purpose.
                    </motion.p>

                    {/* Progress indicator */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
                        className="flex items-center justify-center md:justify-start gap-4">
                        <span
                            className="text-white text-xs md:text-[14px] opacity-90"
                            style={{ fontFamily: 'sans-serif', fontWeight: 400 }}
                        >
                            1/3
                        </span>
                        <div
                            className="relative w-[100px] md:w-[120px] h-[2px] bg-white/20"
                        >
                            <motion.div
                                initial={{ width: "0%" }}
                                whileInView={{ width: "33%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                                className="absolute top-0 left-0 h-full bg-[#0576cc]"
                            ></motion.div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}