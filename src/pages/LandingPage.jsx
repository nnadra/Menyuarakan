import React from 'react'
import { motion } from "framer-motion";
import { Send, Mouse, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom";
import Card1 from '../assets/images/card-1.svg'
import Card2 from '../assets/images/card-2.svg'
import Card3 from '../assets/images/card-3.svg'
import AboutUsImg from '../assets/images/aboutUsImg.svg'
import BannerImg from '../assets/images/bannerImg.svg'
import HowItWorks from '../components/HowItWorks';
import Testimoni from '../components/Testimoni';


const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* HERO SECTION */}
    <section id='hero' className="w-full flex flex-col items-center text-center font-sans py-16 md:py-24 px-4">

        <h1 className="text-[32px] md:text-[44px] leading-tight font-semibold text-[#003327]">
          Dorong perubahan untuk lingkungan, <br className="hidden md:block" /> mulai dari laporanmu.
        </h1>

        <p className="text-gray-500 mt-4 md:mt-6 max-w-2xl text-base md:text-lg">
          Mulai dari satu foto, laporanmu bisa bantu memperbaiki lingkungan,
          meningkatkan kesadaran, dan mendorong tindakan nyata di lingkungan kamu.
        </p>

        <div className="flex flex-col items-center mt-8 md:mt-10 animate-bounce cursor-pointer">
          <div className="w-12 h-12 bg-[#009A76]/10 rounded-full flex items-center justify-center text-[#009A76] font-semibold">
            <Mouse size={20} className="transform" />
          </div>
          <span className="text-[#009A76] text-sm mt-2">Scroll Down</span>
        </div>

        {/* CARDS WRAPPER */}
        <div className="relative flex flex-col md:flex-row items-center justify-center mt-12 md:mt-18 max-w-4xl w-full">

          {/* Card 1 */}
          <div className="
            relative z-10
            rounded-3xl
            w-[320px] 
            transition-all duration-300 
            hover:rotate-2 hover:-translate-y-2 
            mb-0
          ">
            <img src={Card1} alt="Card1" className="w-full" />
          </div>


          {/* Card 2 (Tengah) */}
          <div className="
            relative z-9
            rounded-3xl
            w-[320px] md:w-[330px] 
            transition-all duration-300 
            hover:-translate-y-3 hover:shadow-xl
            -mt-1 
          ">
            <img src={Card2} alt="Card2" className="w-full" />
          </div>


          {/* Card 3 */}
          <div className="
              relative z-7
              rounded-3xl
              w-[320px] 
              transition-all duration-300 
              hover:rotate-2 hover:-translate-y-2 
              md:mt-0 
          ">
            <img src={Card3} alt="Card3" className="w-full" />
          </div>

        </div>
      </section>


    {/* ABOUT SECTION */}
    <section id='about' className="w-full py-20 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <span className="bg-[#CCFFF3] px-4 py-2 rounded-full text-[#003327] w-fit block">
            About Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#003327]">
            Kami membantu masyarakat
            menangani masalah sampah
            secara cepat dan terarah.
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed mb-14">
            Platform yang membantu kamu menyuarakan dan menjaga lingkungan
            dengan cara paling sederhana
          </p>
          <Link to="/categories" className="block w-full md:w-auto mx-auto">
          <button className="cursor-pointer flex items-center justify-center md:justify-start gap-2 hover:gap-4 bg-[#009A76] text-white px-5 py-3 rounded-lg hover:bg-[#008163] transition-all duration-300 w-full md:w-auto">
              Lihat Kategori Sampah
              <ArrowRight/>
          </button>
          </Link>
        </motion.div>

        {/* RIGHT IMAGE + FLOATING BUBBLE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Floating bubble 1 */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-6 left-0 bg-yellow-50 rounded-xl shadow-md px-4 py-3 text-sm"
          >
            ketemu sampah menumpuk di jalan?  
            <br /> Lapor aja dan dapatkan poin!
          </motion.div>

          {/* Main illustration */}
          <img
            src={AboutUsImg}
            alt="About us illustration"
            className="w-[350px] md:w-[420px]"
          />

          {/* Floating bubble 2 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, 6, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="absolute bottom-6 right-4 bg-yellow-50 rounded-xl shadow-md px-4 py-3 text-sm"
          >
            laporan mudah dengan <br /> “Menyuarakan”
          </motion.div>
        </motion.div>
      </div>
    </section>

    {/* HOW IT WORKS SECTION */}
    <section id='howitworks'>
      <HowItWorks/>
    </section>

    <section>
      <Testimoni/>
    </section>


    {/* BANNER SECTION */}
    <section id='banner' className='w-full py-20 px-6 md:px-20'>
        <div className='py-12 md:py-25 bg-[#BDFF61] rounded-2xl flex flex-col md:flex-row justify-between items-center px-8'> 
          <div className='p-0 md:p-8 text-center md:text-left'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#003327] leading-tight'>Jadi bagian dari solusi</h2>
            <p className='mt-2 mb-10 text-[#003327]'>Lingkungan membaik saat kita ikut bergerak, bukan hanya melihat.</p>
            <button
              onClick={() => navigate("/report")}
              className="cursor-pointer flex items-center justify-center md:justify-start gap-2 hover:gap-4 bg-[#009A76] text-white px-5 py-3 rounded-lg hover:bg-[#008163] transition-all duration-300 w-full md:w-auto"
            >
              <Send size={20}/>
              Mulai Laporkan Sekarang
            </button>
          </div>

          <img
              src={BannerImg}
              alt="Banner illustration"
              className="w-[250px] md:w-[420px] mt-8 md:mt-0"
            />
        </div>

      </section>
    </div>
  )
}

export default LandingPage

