import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-5 font-sans">
      
      {/* Logo */}
      <div className="bg-lime-100 px-6 py-3 rounded">
        <h1 className="text-green-900 font-semibold text-lg tracking-wide">
          LOGO
        </h1>
      </div>

      {/* Menu */}
      <div className="flex items-center gap-12 text-lg text-black">
        <span className="font-semibold">Home</span>
        <span>About Us</span>
        <span>How it Works</span>
        <span>Report</span>
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center gap-4">
        {/* Sign up - outline */}
        <button className="px-6 py-2 rounded-full border border-green-800 text-green-800">
          Sign up
        </button>

        {/* Sign in - filled */}
        <button className="px-6 py-2 rounded-full bg-lime-100 text-green-800">
          Sign in
        </button>
      </div>

    </div>
  )
}

export default Navbar
