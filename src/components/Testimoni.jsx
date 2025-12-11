import React from "react";
import { motion } from "framer-motion";
import ClingImgs from "../assets/images/cling.svg"; 
import ElemenTestimoni from "../assets/images/elemen-testimoni.svg";

const testimoniesCol1 = [
  {
    name: "Bagas Wicaksono",
    role: "Pegawai Kantoran",
    bg: "#C8F3E1",
    text: "Nggak nyangka lapor soal sampah bisa seperaktis ini. Begitu laporan diverifikasi...",
  },
  {
    name: "Alya Ramadhani",
    role: "Ibu Rumah Tangga",
    bg: "#DDE6FF",
    text: "Dulu saya malas lapor karena prosedurnya ribet. Tapi lewat web ini semuanya simpel...",
  },
  {
    name: "Dimas Hendra",
    role: "Mahasiswa",
    bg: "#D8FFC8",
    text: "Awalnya saya cuma coba-coba lapor, tapi ternyata sistemnya gampang...",
  },
];

const testimoniesCol2 = [
  {
    name: "Nadia Putri",
    role: "Mahasiswi",
    bg: "#E8FFD0",
    text: "Sebelum pakai Trash Whisperer, saya sering lihat tumpukan sampah...",
  },
  {
    name: "Nur Azzahra",
    role: "Mahasiswi",
    bg: "#C8FFF2",
    text: "Setelah beberapa kali lapor kejadian sampah liar, saya merasa platform ini membantu...",
  },
];

const TestiCard = ({ name, role, text, bg }) => (
  <div className="p-6 rounded-3xl max-w-md shadow-md font-sans" style={{ background: bg }}>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-[#A1B4FF]" />
      <div className="flex flex-col">
        <h2 className="text-[#0F281C] font-semibold text-lg">{name}</h2>
        <p className="text-[#2F3E5C] text-sm">{role}</p>
      </div>
      <div className="ml-auto flex items-center gap-1">
        <span className="text-yellow-500 text-lg">★</span>
        <span className="text-[#2F3E5C] font-medium">5.0</span>
      </div>
    </div>

    <div className="border-t border-black/10 my-4"></div>

    <p className="text-[#1F2A44] leading-relaxed italic">“{text}”</p>
  </div>
);

const Testimoni = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20">
      <div className="flex justify-between gap-10 items-center">
        
        {/* Left */}
        <div className="flex items-center gap-6">
  {/* Animated Banana + Stars */}
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="relative"
  >
    {/* Banana floating */}
    <motion.img
      src={ElemenTestimoni}
      alt="Banana mascot"
      className="w-[150px] md:w-[170px]"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    />


    {/* Decorative star 2 */}
    <motion.img
      src={ClingImgs}
      alt=""
      className="absolute bottom-0 right-2 w-6"
      animate={{ y: [0, 6, 0] }}
      transition={{ duration: 3, repeat: Infinity, delay: 0.7 }}
    />
  </motion.div>

  {/* Yellow Card (static) */}
  <div className="bg-[#FFF7E8] p-6 rounded-3xl max-w-xl shadow-sm">
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


        {/* Right */}
        <div className="flex gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-6">
            {testimoniesCol1.map((t, i) => (
              <TestiCard key={i} {...t} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-6 mt-10">
            {testimoniesCol2.map((t, i) => (
              <TestiCard key={i} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
