'use client';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-cyan-900/30 z-50">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="text-white font-serif text-xl font-bold">ITL</div>
          <div className="text-xs text-gray-300 leading-tight">
            <div>Institute for</div>
            <div>Trusted Leadership</div>
          </div>
        </div>
        <div className="flex items-center gap-12">
          <a href="#" className="text-gray-300 hover:text-white text-sm transition">The Institute</a>
          <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition">Our Approach</a>
          <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition">Ecosystem</a>
          <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition">Insights</a>
          <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}
