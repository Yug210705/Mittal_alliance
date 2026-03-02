import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export function FounderSection() {
    return (
        <section className="relative w-full overflow-hidden">
            {/* Ensure the section feels part of the flow but it's a grid taking full width */}
            <div className="w-full grid grid-cols-2">

                {/* Top Left: Title */}
                <div className="aspect-video bg-[#020806] flex flex-col justify-center px-16 relative border-r border-b border-white/10">
                    {/* BG Gradient */}
                    <div className="absolute inset-0 pointer-events-none z-0">
                        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#024a35] opacity-30 blur-[100px]"></div>
                    </div>

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-[8px] h-[8px] bg-white"></div>
                            <span className="text-[13px] tracking-wider font-bold uppercase">Meet Our Founder</span>
                        </div>
                        <h2 className="text-[56px] font-serif">
                            Leslie Martinich
                        </h2>
                    </div>
                </div>

                {/* Top Right: Image */}
                <div className="aspect-video relative border-b border-white/10">
                    {/* Placeholder for the true image, styled to approximate the reference */}
                    <div className="absolute inset-0 bg-[#111] flex items-center justify-center overflow-hidden">
                        {/* Note: since we don't have the exact image asset, we can use a gray box or standard Next image placeholder. But let's build the HTML as expected */}
                        <div className="w-full h-full bg-gradient-to-tr from-gray-800 to-gray-600 opacity-60 flex items-center justify-center">
                            <span className="text-white/50">Founder Image</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Left: Bio */}
                <div className="aspect-video relative overflow-hidden flex flex-col justify-center px-16 border-r border-white/10">
                    {/* Green Gradient specifically here */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#024a35] to-[#022116] opacity-80 z-0"></div>
                    <div className="absolute left-[-20%] bottom-[-20%] w-[60%] h-[60%] rounded-full bg-[#024a35] blur-[100px] z-0"></div>

                    <div className="relative z-10 text-[18px] leading-relaxed text-white/90">
                        <p className="mb-6">
                            Leslie Martinich is a leadership expert with 20+ years of experience who founded the Institute of Trusted Leadership to address the global crisis of trust in organizations.
                        </p>
                        <p>
                            Through evidence-based, practical approaches, her work develops leaders, transforms cultures, and scales trusted leadership worldwide.
                        </p>
                    </div>
                </div>

                {/* Bottom Right: Call to action */}
                <div className="aspect-video relative bg-[#023121] flex items-start px-16 py-16 transition-colors hover:bg-[#023f2f] cursor-pointer group">
                    {/* Blue Gradient on Right */}
                    <div className="absolute inset-0 pointer-events-none z-0">
                        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#0077d4] opacity-30 blur-[100px]"></div>
                    </div>

                    <div className="relative z-10 flex items-center gap-4 text-[48px] font-serif group-hover:gap-6 transition-all">
                        <span>Meet Leslie</span>
                        <ArrowUpRight className="w-10 h-10 group-hover:rotate-45 transition-transform" strokeWidth={1.5} />
                    </div>
                </div>

            </div>

            {/* Bottom Timeline Indicator */}
            <div className="w-full bg-[#022116] py-6 flex justify-center items-center gap-6 border-t border-white/10 font-mono text-[16px]">
                <div className="flex items-center gap-4">
                    <span className="text-white font-bold">01</span>
                    <div className="w-[80px] h-[2px] border-b-2 border-dashed border-white/40"></div>
                </div>
                <div className="flex items-center gap-4 opacity-50">
                    <span>02</span>
                    <div className="w-[80px] h-[2px] border-b-2 border-dashed border-white/40"></div>
                </div>
                <div className="flex items-center gap-4 opacity-50">
                    <span>03</span>
                    <div className="w-[80px] h-[2px] opacity-0"></div> {/* Invisible line to balance */}
                </div>
            </div>
        </section>
    );
}
