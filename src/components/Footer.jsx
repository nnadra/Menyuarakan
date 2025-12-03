import { Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#009A76] text-white px-6 py-12 md:px-16 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

        {/* Left: Logo + Quote */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Logo Menyuarakan" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold">Menyuarakan</span>
          </div>

          <p className="text-lg leading-relaxed max-w-xs">
            Lingkungan membaik saat kita ikut bergerak, bukan hanya melihat.
          </p>
        </div>

        {/* Middle: Menu */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Menu</h3>
          <ul className="space-y-2 text-lg">
            <li><a href="#" className="hover:text-teal-200">Beranda</a></li>
            <li><a href="#" className="hover:text-teal-200">About Us</a></li>
            <li><a href="#" className="hover:text-teal-200">Lapor Sampah</a></li>
            <li><a href="#" className="hover:text-teal-200">Trash Whisperer</a></li>
          </ul>
        </div>

        {/* Right: CTA */}
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold leading-snug">
            Buat perubahan mulai dari satu laporan.
          </h3>
          <button className="flex items-center gap-2 bg-teal-100 text-teal-900 px-5 py-3 rounded-lg hover:bg-teal-200 transition">
            <Send size={20}/>
            Mulai Laporkan Sekarang
          </button>
        </div>

      </div>

      <div className="border-t border-white/50 mt-12 pt-6 text-center text-sm">
        Copyright © {new Date().getFullYear()} Menyuarakan. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
