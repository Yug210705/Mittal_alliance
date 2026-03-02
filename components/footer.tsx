'use client';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-white font-serif text-lg mb-2">ITL</div>
            <p className="text-gray-500 text-sm">Institute for Trusted Leadership</p>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase">Company</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase">Resources</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition">Research</a></li>
              <li><a href="#" className="hover:text-white transition">Insights</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase">Legal</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-600 text-xs">
          <p>&copy; 2024 Institute for Trusted Leadership. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
