'use client';

export default function Methodology() {
  return (
    <section className="bg-black px-8 py-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-start">
          <div>
            <div className="mb-6 text-xs font-semibold text-gray-400 uppercase tracking-widest">
              ■ Our Methodology
            </div>
            <h2 className="text-5xl font-serif text-white">How We Transform Leadership</h2>
          </div>
          <div>
            <p className="text-gray-300 text-base leading-relaxed">
              Trusted leadership isn't built on theory alone. Our integrated approach combines rigorous research, practical training to create lasting organizational change.
            </p>
          </div>
        </div>

        {/* Three columns with dark boxes */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="flex flex-col">
            <div className="bg-blue-900/30 h-32 mb-8 rounded"></div>
            <h3 className="text-2xl font-serif text-white mb-6">Research & Insights</h3>
            <ul className="text-gray-400 text-sm space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Evidence-based leadership models</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Continuous innovation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Data-driven understanding</span>
              </li>
            </ul>
          </div>

          {/* Middle column */}
          <div className="flex flex-col md:mt-16">
            <div className="bg-blue-900/30 h-32 mb-8 rounded"></div>
            <h3 className="text-2xl font-serif text-white mb-6">Training & Development</h3>
            <ul className="text-gray-400 text-sm space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Practical skill-building</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Certification programs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Organizational transformation</span>
              </li>
            </ul>
          </div>

          {/* Right column */}
          <div className="flex flex-col md:mt-32">
            <div className="bg-blue-900/30 h-32 mb-8 rounded"></div>
            <h3 className="text-2xl font-serif text-white mb-6">Consulting & Implementation</h3>
            <ul className="text-gray-400 text-sm space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Strategic partnership</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Custom solutions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1">•</span>
                <span>Measurable impact</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
