import React from 'react'
import Card1 from '../assets/images/card-1.svg'
import Card2 from '../assets/images/card-2.svg'
import Card3 from '../assets/images/card-3.svg'


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

        {/* CARD 2 (CENTER - MAIN) */}
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

    <div></div>
    </div>
  )
}

export default LandingPage

