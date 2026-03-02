'use client';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-teal-950 to-blue-950 pt-32 pb-20 px-8 flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-12 text-xs font-semibold text-gray-400 uppercase tracking-widest">
          ■ Built on Solid Ground
        </div>
        
        <h1 className="text-6xl md:text-7xl font-serif text-white mb-16 leading-tight">
          Building Leaders –<br />
          <span className="text-gray-600 italic font-light">the</span> World Can Trust.
        </h1>

        <div className="absolute bottom-20 right-8 max-w-sm text-right">
          <p className="text-gray-300 text-base leading-relaxed">
            Where purpose meets people. Where organizations transform through trusted leadership, continuous learning, & human responsibility.
          </p>
        </div>

        <div className="absolute bottom-8 left-8 flex flex-col items-start gap-2">
          <p className="text-cyan-400 text-sm font-light">Scroll to Discover</p>
          <svg className="w-6 h-6 text-cyan-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
