"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function FounderSection() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        color: 'white',
        background: `
          radial-gradient(ellipse 70% 50% at 50% 50%, rgba(20, 100, 45, 0.45) 0%, transparent 60%),
          #050d07
        `
      }}
    >
      {/* Grid */}
      <div
        className="w-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-[420px_420px]"
      >
        {/* Seamless Top transition from NorthStar section (#050d07) */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 150, zIndex: 0, pointerEvents: 'none',
          background: 'linear-gradient(to bottom, #050d07 0%, transparent 100%)',
        }} />

        {/* TOP-LEFT: Title */}
        <div
          className="flex flex-col justify-end p-8 pb-10 md:p-[48px_72px_56px] min-h-[300px] md:min-h-0 border-b md:border-r border-white/10 relative overflow-hidden text-center md:text-left"
        >
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
          }} />
          <div className="relative z-10 flex flex-col items-center md:items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="flex items-center gap-2 mb-4 md:mb-5"
            >
              <div className="w-[6px] h-[6px] md:w-[8px] md:h-[8px] bg-white flex-shrink-0" />
              <span className="text-[10px] md:text-[11px] tracking-[0.18em] font-sans font-semibold uppercase">
                THE DRIVING FORCE
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="text-5xl md:text-[60px] font-normal leading-[1.05] m-0"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Leslie Martinich
            </motion.h2>
          </div>
        </div>

        {/* TOP-RIGHT: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative overflow-hidden h-[400px] md:h-auto border-b border-white/10"
        >
          <Image
            src="/ss.png"
            alt="Leslie Martinich"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
          <div style={{
            position: 'absolute', inset: 0, zIndex: -1,
            background: 'linear-gradient(135deg, #3a4a40 0%, #5a6a60 100%)',
          }} />
        </motion.div>

        {/* BOTTOM-LEFT: Bio */}
        <div
          className="relative overflow-hidden flex flex-col justify-center p-8 md:p-[56px_72px] min-h-[400px] md:min-h-0 border-b md:border-b-0 md:border-r border-white/10 text-center md:text-left"
        >
          <div style={{
            position: 'absolute', zIndex: 0,
            left: '-15%', bottom: '-20%',
            width: '65%', height: '65%',
            borderRadius: '50%',
            filter: 'blur(90px)',
            opacity: 0.55,
            background: 'radial-gradient(circle, rgba(15,80,35,0.85) 0%, rgba(5,40,15,0) 70%)',
          }} />
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="text-base md:text-[17px] leading-[1.75] font-light text-white/85 mb-6 md:mb-[24px]"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Leslie Martinich is a leadership expert with 20+ years of experience who founded the Institute of Trusted Leadership to address the global crisis of trust in organizations.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="text-base md:text-[17px] leading-[1.75] font-light text-white/85 m-0"
              style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
            >
              Through evidence-based, practical approaches, her work develops leaders, transforms cultures, and scales trusted leadership worldwide.
            </motion.p>
          </div>
        </div>

        {/* BOTTOM-RIGHT: Meet Leslie CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="relative overflow-hidden flex items-start justify-center md:justify-start p-12 md:p-[56px_64px] min-h-[300px] md:min-h-0 cursor-pointer group"
        >
          <div className="relative z-10">
            <h3 className="text-4xl md:text-[52px] font-normal leading-[1.1] m-0 flex items-center gap-4 transition-transform group-hover:translate-x-2" style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Meet Leslie
              <span className="text-3xl md:text-[46px] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </h3>
          </div>
        </motion.div>
      </div>

      {/* Timeline Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
        className="w-full flex flex-col sm:flex-row items-center justify-center p-5 font-mono gap-4 sm:gap-0 relative z-10"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <span className="text-[15px] font-bold text-white sm:mr-[14px]">01</span>
        <div className="w-[100px] sm:w-[200px] border-t-2 border-dashed border-white/30" />
        <span className="text-[15px] text-white/45 sm:mx-[14px]">02</span>
        <div className="w-[100px] sm:w-[200px] border-t-2 border-dashed border-white/30" />
        <span className="text-[15px] text-white/45 sm:ml-[14px]">03</span>
      </motion.div>
    </section>
  );
}