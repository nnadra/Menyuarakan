import React from "react";
import { motion } from "framer-motion";
import ClingImgs from "../assets/images/cling.svg";
import ElemenTestimoni from "../assets/images/elemen-testimoni.svg";

const testimoniesCol1 = [
  {
    name: "Bagas Wicaksono",
    role: "Pegawai Kantoran",
    bg: "#CCFFF3",
    rating: 5.0,
    text: `Nggak nyangka lapor soal sampah bisa seperaktis ini. Begitu laporan diverifikasi, poin langsung masuk. Pas ditukar ke dompet digital pertama kali, saya langsung merasa platform ini bener-bener ngebantu.`,
  },
  {
    name: "Alya Ramadhani",
    role: "Ibu Rumah Tangga",
    bg: "#CFD9FC",
    rating: 4.8,
    text: `Dulu saya malas lapor karena prosedurnya ribet. Tapi lewat web ini semuanya simpel. Saya udah beberapa kali dapet poin dari laporan, dan semuanya bisa dicairin ke dompet digital. Berasa menang sekalian bantu lingkungan.`,
  },
  {
    name: "Dimas Hendra",
    role: "Mahasiswa",
    bg: "#EAFFCC",
    rating: 5.0,
    text: `Awalnya saya cuma coba-coba lapor, tapi ternyata sistemnya gampang dan poinnya beneran masuk ke dompet digital. Rasanya dihargai sebagai warga yang peduli lingkungan.`,
  },
];

const testimoniesCol2 = [
  {
    name: "Nadia Putri",
    role: "Mahasiswi",
    bg: "#EAFFCC",
    rating: 5.0,
    text: `Sebelum pakai Trash Whisperer, saya sering lihat tumpukan sampah dan bingung harus lapor ke siapa. Setelah coba, semuanya jauh lebih mudah. Tinggal foto, kirim, tunggu verifikasi, dapat poin.`,
  },
  {
    name: "Nur Azzahra",
    role: "Mahasiswi",
    bg: "#CCFFF3",
    rating: 5.0,
    text: `Setelah beberapa kali lapor kejadian sampah liar, saya merasa platform ini sangat membantu. Websitenya mudah dipahami dan proses pencairan poin ke dompet digital juga cepat.`,
  },
  {
    name: "Reza Putra",
    role: "Mahasiswa",
    bg: "#CFD9FC",
    rating: 4.9,
    text: `Saya selalu merasa peduli lingkungan, tapi bingung harus mulai dari mana. Web ini membantu saya menemukan langkah pertama, dan dari situ semuanya jadi lebih mudah dijalani.`,
  },
];

const TestiCard = ({ name, role, text, bg, rating }) => (
  <div
    className="p-6 rounded-2xl max-w-md shadow-md font-sans snap-center shrink-0 w-80 md:w-auto"
    style={{ background: bg }}
  >
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-[#A1B4FF]" />
      <div>
        <h2 className="text-[#0F281C] font-semibold text-lg">{name}</h2>
        <p className="text-[#2F3E5C] text-sm">{role}</p>
      </div>
      <div className="ml-auto flex items-center gap-1">
        <span className="text-yellow-500 text-lg">★</span>
        <span className="text-[#2F3E5C] font-medium">{rating.toFixed(1)}</span>
      </div>
    </div>

    <div className="border-t border-black/10 my-4" />
    <p className="text-[#1F2A44] leading-relaxed italic">“{text}”</p>
  </div>
);

const InfiniteColumn = ({ items, direction = "up", speed = 25 }) => {
  const duplicated = [...items, ...items];
  const dir = direction === "up" ? "up" : "down";

  return (
    <div className="overflow-hidden h-[480px] md:h-[520px] lg:h-[600px] rounded-2xl relative">
      <div
        className={`flex flex-col gap-6 infinite-scroll-${dir}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {duplicated.map((t, i) => (
          <TestiCard key={i} {...t} />
        ))}
      </div>
    </div>
  );
};
const Testimoni = () => {
  return (
    <section className="w-full px-6 md:px-10 py-10">

      {/* MOBILE (<768px) */}
      <div className="md:hidden">
        {/* Header */}
        <div className="relative mb-10">
          <div className="bg-[#FFF7E8] p-5 rounded-2xl shadow-sm">
            <div className="inline-block bg-[#CFF7E6] px-4 py-1 rounded-full text-sm mb-2">
              Testimonial
            </div>
            <h2 className="text-2xl font-bold leading-tight">
              Cerita orang-orang yang bergerak untuk bumi
            </h2>
            <p className="mt-2 text-gray-700">
              Langkah kecil bisa membawa dampak besar.
            </p>
          </div>
        </div>

        {/* Mobile horizontal scroll */}
        <div className="mt-6 rounded-2xl overflow-x-auto flex gap-5 pb-4 snap-x snap-mandatory scrollbar-hide">
          {[...testimoniesCol1, ...testimoniesCol2].map((t, i) => (
            <TestiCard key={i} {...t} />
          ))}
        </div>
      </div>


      {/* TABLET (768–1023px) */}
      <div className="hidden md:flex lg:hidden flex-col gap-10">

        {/* Pisang + Title di atas */}
        <div className="relative flex flex-col items-center">
          <motion.img
            src={ElemenTestimoni}
            className="w-[120px] mb-4"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <div className="bg-[#FFF7E8] p-6 rounded-2xl max-w-lg shadow-sm text-center">
            <div className="inline-block bg-[#CFF7E6] px-4 py-1 rounded-full text-sm mb-2">
              Testimonial
            </div>
            <h2 className="text-3xl font-bold leading-tight">
              Cerita orang-orang <br /> yang bergerak untuk bumi
            </h2>
            <p className="mt-2 text-gray-700">
              Langkah kecil bisa membawa dampak besar.
            </p>
          </div>
        </div>

        {/* Infinite columns — but shorter height */}
        <div className="flex gap-6">
          <div className="overflow-hidden h-[60vh] rounded-2xl w-1/2">
            <div className="flex flex-col gap-6 infinite-scroll-up" style={{ animationDuration: "40s" }}>
              {[...testimoniesCol1, ...testimoniesCol1].map((t, i) => (
                <TestiCard key={i} {...t} />
              ))}
            </div>
          </div>

          <div className="overflow-hidden h-[60vh] rounded-2xl w-1/2">
            <div className="flex flex-col gap-6 infinite-scroll-down" style={{ animationDuration: "40s" }}>
              {[...testimoniesCol2, ...testimoniesCol2].map((t, i) => (
                <TestiCard key={i} {...t} />
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* DESKTOP (>=1024px) */}
      <div className="hidden lg:flex justify-between gap-10 items-center">

        {/* Left */}
        <div className="relative flex items-center gap-6 w-[40%]">
          <motion.div
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={ElemenTestimoni}
              className="w-[170px]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.img
              src={ClingImgs}
              className="absolute bottom-0 right-2 w-6"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.7 }}
            />
          </motion.div>

          <div className="bg-[#FFF7E8] p-6 rounded-2xl max-w-xl shadow-sm ml-[125px] relative z-10">
            <div className="inline-block bg-[#CFF7E6] px-4 py-1 rounded-full text-sm mb-2">
              Testimonial
            </div>
            <h2 className="text-3xl font-bold leading-tight">
              Cerita orang-orang <br /> yang bergerak untuk bumi
            </h2>
            <p className="mt-2 text-gray-700">
              Langkah kecil bisa membawa dampak besar.
            </p>
          </div>
        </div>

        {/* Right infinite scroll */}
        <div className="flex gap-6 w-[60%]">
          <InfiniteColumn items={testimoniesCol1} direction="up" speed={45} />
          <InfiniteColumn items={testimoniesCol2} direction="down" speed={45} />
        </div>
      </div>
    </section>
  );
};


export default Testimoni;