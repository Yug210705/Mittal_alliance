'use client';

export default function NorthStar() {
  return (
    <section className="bg-gradient-to-br from-teal-900 via-teal-800 to-blue-900 px-8 py-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Left side - Circular diagram */}
          <div className="relative h-96 flex items-center justify-center">
            {/* Dashed circle */}
            <svg className="absolute w-64 h-64" viewBox="0 0 256 256">
              <circle cx="128" cy="128" r="120" fill="none" stroke="rgba(34, 211, 238, 0.2)" strokeDasharray="8,4" strokeWidth="1" />
            </svg>

            {/* Center icon - Triangle */}
            <div className="absolute flex items-center justify-center">
              <svg className="w-32 h-32 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 20h20L12 2z" />
              </svg>
            </div>

            {/* Top icon - Eye */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 5C7 5 2.73 8.11 1 12.5c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C21.27 8.11 17 5 12 5m0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
                </svg>
              </div>
            </div>

            {/* Bottom left icon - Target */}
            <div className="absolute bottom-12 left-4">
              <div className="w-14 h-14 rounded-full bg-gray-600 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Bottom right icon - Trophy */}
            <div className="absolute bottom-12 right-4">
              <div className="w-14 h-14 rounded-full bg-gray-600 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <div className="mb-6 text-xs font-semibold text-cyan-300 uppercase tracking-widest">
              ■ What Drives Us
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-8">Our North Star</h2>
            <h3 className="text-2xl font-serif text-cyan-100 italic mb-6">Vision</h3>
            <p className="text-gray-300 text-base leading-relaxed mb-8">
              A world in which organizations are led by trust and committed to the continuous development of people and purpose.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-cyan-300 text-sm font-light">1/3</span>
              <div className="w-24 h-1 bg-cyan-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
