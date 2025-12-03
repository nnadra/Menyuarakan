import React from 'react'
import Card1 from '../assets/images/card-1.svg'
import Card2 from '../assets/images/card-2.svg'
import Card3 from '../assets/images/card-3.svg'
import { motion } from "framer-motion";
import AboutUsImg from '../assets/images/aboutUsImg.svg'


const LandingPage = () => {
  return (
    <div>
    <div className="w-full flex flex-col items-center text-center font-sans mt-18 mb-15 px-4">

      {/* TITLE */}
      <h1 className="text-[44px] leading-tight font-semibold text-green-900">
        Dorong perubahan untuk lingkungan, <br /> mulai dari laporanmu.
      </h1>

      {/* DESCRIPTION */}
      <p className="text-gray-500 mt-6 max-w-2xl">
        Mulai dari satu foto, laporanmu bisa bantu memperbaiki lingkungan,
        meningkatkan kesadaran, dan mendorong tindakan nyata di lingkungan kamu.
      </p>

      {/* SCROLL DOWN BUTTON */}
      <div className="flex flex-col items-center mt-10 animate-bounce">
        <div className="w-12 h-12 border border-green-300 rounded-full flex items-center justify-center text-green-700 font-semibold">
          0
        </div>
        <span className="text-green-700 text-sm mt-2">Scroll Down</span>
      </div>

      {/* CARDS WRAPPER */}
      <div className="relative flex items-center justify-center mt-18">

        {/* CARD 1 */}
        <div className="
         rounded-3xl
          w-[320px] rotate-[-8deg]
          transition-all duration-300 
          hover:rotate-2 hover:-translate-y-2 
        ">
          <img src={Card1} alt="Card1" className="w-full" />
        </div>

        {/* CARD 2 */}
        <div className="
        rounded-3xl
          w-[330px] z-10
          transition-all duration-300 
          hover:-translate-y-3 hover:shadow-xl
        ">
          <img src={Card2} alt="Card2" className="w-full" />
        </div>

        {/* CARD 3 */}
        <div className="
            rounded-3xl
            w-[320px] rotate-[8deg]
            transition-all duration-300 
            hover:rotate-2 hover:-translate-y-2 
        ">
          <img src={Card3} alt="Card3" className="w-full" />
        </div>

      </div>
        </div>


    {/* ABOUT SECTION */}
    <section className="w-full py-20 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          <span className="bg-green-200 px-4 py-2 rounded-full text-black w-fit block">
            About Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Kami membantu masyarakat
            menangani masalah sampah
            secara cepat dan terarah.
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed">
            Platform yang membantu kamu menyuarakan dan menjaga lingkungan
            dengan cara paling sederhana
          </p>
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
    </div>
  )
}

export default LandingPage

