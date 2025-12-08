import { CATEGORIES } from "../data/reportCategories";
import { Send } from 'lucide-react';
import { Link } from "react-router-dom";

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <div className="max-w-5xl mx-auto px-6 py-18">

        {/* Header */}
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-3">
          Kategori Laporan Sampah
        </h1>
        <p className="text-gray-600 text-center max-w-xl mx-auto mb-6">
          Lihat jenis-jenis masalah sampah yang bisa kamu laporkan.
        </p>
        <div className="rounded-xl bg-[#EAFFCC]/40 border border-[#77CC00]/80 text-gray-600 py-4 px-6 md:px-10 text-center max-w-2xl mx-auto mb-10">
          <p>Laporkan kondisi yang benar-benar mengganggu atau berpotensi bahaya. Sistem kami akan cek apakah laporanmu relevan dan butuh tindak lanjut, biar yang penting bisa diprioritaskan.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {CATEGORIES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl hover:shadow-md hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-20 h-20 rounded-2xl bg-[#E8F5E9] flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover pt-2"
                  />
                </div>
              </div>

              <h2 className="text-lg font-semibold text-gray-800 text-center">
                {item.label}
              </h2>
              <p className="text-sm text-gray-600 text-center mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link to="/" className="block w-full md:w-auto mx-auto">
            <button className="cursor-pointer flex mx-auto items-center justify-center gap-2 hover:gap-4 bg-[#009A76] text-white px-5 py-3 rounded-lg hover:bg-[#008163] transition-all duration-300 w-full md:w-auto">
              <Send size={20}/>
              Mulai Laporkan Sekarang
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
