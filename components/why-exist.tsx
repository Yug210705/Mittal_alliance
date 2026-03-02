'use client';

export default function WhyExist() {
  return (
    <section className="bg-gradient-to-b from-teal-950 via-teal-900 to-black px-8 py-32">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="mb-6 text-xs font-semibold text-gray-400 uppercase tracking-widest">
            ■ The Solution
          </div>
          <h2 className="text-6xl font-serif text-white mb-8">
            <span className="text-gray-700 italic font-light">This is</span> Why We Exist
          </h2>
          <p className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto">
            Trust transforms everything engagement, innovation, performance, & culture. The Institute of Trusted Leadership scales this impact through research-backed methods, turning trusted leadership into the global standard.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="relative">
          {/* Vertical lines */}
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/30 to-transparent"></div>
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/30 to-transparent"></div>
          <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/30 to-transparent"></div>

          {/* Numbering at top */}
          <div className="grid grid-cols-4 gap-4 mb-16 text-center">
            <div></div>
            <div className="text-gray-500 text-sm font-light">01</div>
            <div className="text-gray-500 text-sm font-light">02</div>
            <div className="text-gray-500 text-sm font-light">03</div>
          </div>

          {/* Three columns */}
          <div className="grid grid-cols-3 gap-8 pt-12">
            <div>
              <div className="text-7xl font-light text-gray-700 mb-4">1</div>
              <h3 className="text-xl font-serif text-white mb-4 uppercase">ITL APPROACH</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Evidence-based methodology combining research, training, and consulting to build trusted leaders.
              </p>
            </div>
            <div>
              <div className="text-7xl font-light text-gray-700 mb-4">2</div>
              <h3 className="text-xl font-serif text-white mb-4 uppercase">OUR ECOSYSTEM</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Four integrated divisions delivering comprehensive leadership solutions from awareness to transformation.
              </p>
            </div>
            <div>
              <div className="text-7xl font-light text-gray-700 mb-4">3</div>
              <h3 className="text-xl font-serif text-white mb-4 uppercase">GLOBAL IMPACT</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                UN SDG-aligned programs ensuring every initiative creates measurable social value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
