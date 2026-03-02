'use client';

export default function Pathways() {
  return (
    <section className="bg-gradient-to-b from-blue-950 to-teal-950 px-8 py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="mb-6 text-xs font-semibold text-gray-400 uppercase tracking-widest">
            ■ Built on Solid Ground
          </div>
          <h2 className="text-5xl font-serif text-white mb-6">One Vision.</h2>
          <h2 className="text-5xl font-serif text-white mb-8">Four Pathways to Impact.</h2>
          <p className="text-gray-400 text-base leading-relaxed max-w-3xl mx-auto">
            The Institute of Trusted Leadership operates through an integrated ecosystem of specialized divisions, each designed to address different aspects of leadership development and organizational transformation.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {/* Featured card - LUCA */}
          <div className="md:col-span-2 bg-white rounded-lg p-8 flex flex-col">
            <div className="mb-4 text-xs font-semibold text-blue-900 uppercase tracking-widest bg-blue-100 inline-block px-3 py-1 rounded">
              ■ Open to All
            </div>
            <div className="bg-white border-2 border-gray-200 rounded p-4 mb-6 h-40 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop" 
                alt="LUCA" 
                className="w-full h-full object-cover rounded"
              />
            </div>
            <h3 className="text-3xl font-serif text-black mb-2">LUCA The Leader</h3>
            <p className="text-gray-700 text-sm mb-4">Where Leadership Awareness Begins</p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Our flagship CSR initiative bringing trusted leadership awareness to communities, organizations, and emerging leaders. Start your journey with free resources, assessments, and community connection.
            </p>
            <div className="mt-auto pt-6 text-cyan-600 font-serif text-sm">↗</div>
          </div>

          {/* Three small cards */}
          <div className="flex flex-col">
            <div className="bg-blue-900 text-white px-4 py-3 text-xs font-semibold uppercase tracking-widest mb-4 rounded">
              ■ For Organizations
            </div>
            <div className="bg-black flex-grow rounded mb-6"></div>
            <div className="text-white text-xs font-serif tracking-widest leading-tight text-center">
              MARTINCH CONSULTING<br />Strategic Leadership Partnerships
            </div>
          </div>

          <div className="flex flex-col">
            <div className="bg-blue-900 text-white px-4 py-3 text-xs font-semibold uppercase tracking-widest mb-4 rounded">
              ■ For Individuals & Teams
            </div>
            <div className="bg-black flex-grow rounded mb-6"></div>
            <div className="text-white text-xs font-serif tracking-widest leading-tight text-center">
              MARTINCH INSTITUTE<br />Learning What Transforms
            </div>
          </div>

          <div className="flex flex-col">
            <div className="bg-blue-900 text-white px-4 py-3 text-xs font-semibold uppercase tracking-widest mb-4 rounded">
              ■ For Research & Innovation
            </div>
            <div className="bg-black flex-grow rounded mb-6"></div>
            <div className="text-white text-xs font-serif tracking-widest leading-tight text-center">
              MARTINCH R&D<br />Innovation Meets Insight
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
