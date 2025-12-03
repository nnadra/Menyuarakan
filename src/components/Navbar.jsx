import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-5 font-sans">

      {/* Logo */}
      <div className="bg-lime-100 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-md">
        <h1 className="text-green-900 font-semibold text-lg tracking-wide">
          LOGO
        </h1>
      </div>

      {/* Menu */}
      <div className="flex items-center gap-12 text-lg text-black">
        
        {["Home", "About Us", "How it Works", "Report"].map((item) => (
          <span
            key={item}
            className="
              relative cursor-pointer 
              transition-all duration-300 
              hover:text-green-700
            "
          >
            {item}

            {/* Animated underline */}
            <span
              className="
                absolute left-0 -bottom-1 
                w-0 h-2 bg-green-700 
                transition-all duration-300 
                hover:w-full
              "
            />
          </span>
        ))}

      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4">

        {/* Sign up - outline + hover anim */}
        <button
          className="
            px-6 py-2 rounded-full border border-green-800 text-green-800 
            transition-all duration-300
            hover:bg-green-800 hover:text-white 
            hover:-translate-y-2
            active:translate-y-0
          "
        >
          Sign up
        </button>

        {/* Sign in - filled + hover anim */}
        <button
          className="
            px-6 py-2 rounded-full bg-lime-100 text-green-800
            transition-all duration-300
            hover:bg-lime-200 hover:-translate-y-2
            active:translate-y-0
          "
        >
          Sign in
        </button>

      </div>
    </div>
  )
}

export default Navbar
