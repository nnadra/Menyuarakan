import React from 'react'
import GoogleIcon from '../assets/images/icons/google-icon.svg'
import AppleIcon from '../assets/images/icons/apple-icon.svg'
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-full max-w-md mx-auto flex flex-col items-center text-center py-10">

  {/* Title */}
  <h1 className="text-3xl font-semibold text-[#111]">Sign up to your account</h1>

  {/* Google & Apple Buttons */}
  <div className="flex justify-between w-full mt-8 mb-6 gap-4">
    <div className="flex items-center gap-2 border border-[#D1D1D6] rounded-xl px-4 py-2 w-1/2 cursor-pointer hover:shadow-md transition">
      <img src={GoogleIcon} alt="google" className="w-5"/>
      <span className="text-sm">Sign Up with Google</span>
    </div>

    <div className="flex items-center gap-2 border border-[#D1D1D6] rounded-xl px-4 py-2 w-1/2 cursor-pointer hover:shadow-md transition">
      <img src={AppleIcon} alt="apple" className="w-5"/>
      <span className="text-sm">Sign Up with Apple</span>
    </div>
  </div>

  {/* Divider Text */}
  <p className="text-sm text-[#6B7280] mb-4">Or with email</p>

  {/* Name Input */}
  <div className="w-full mb-4 text-left">
    <input
      type="text"
      placeholder="Put your name here"
      className="w-full border border-[#D1D1D6] rounded-xl px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[#009A76]"
    />
  </div>

  {/* Username */}
  <div className="w-full mb-4 text-left">
    <input
      type="text"
      placeholder="Username"
      className="w-full border border-[#D1D1D6] rounded-xl px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[#009A76]"
    />
  </div>

   {/* Email */}
  <div className="w-full mb-4 text-left">
    <input
      type="text"
      placeholder="Email"
      className="w-full border border-[#D1D1D6] rounded-xl px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[#009A76]"
    />
  </div>

  {/* Password */}
  <div className="w-full mb-4 text-left">
    <input
      type="password"
      placeholder="Password"
      className="w-full border border-[#D1D1D6] rounded-xl px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-[#009A76]"
    />
  </div>

  {/* Button */}
  <button
    type="submit"
    className="w-full bg-[#009A76] text-white py-3 rounded-xl font-medium text-sm hover:bg-[#008163] transition"
  >
    Submit
  </button>

  {/* Sign Up */}
  <p className="text-sm mt-4 text-[#111]">
    Already have an account?  <Link to="/signin" className="font-semibold cursor-pointer">
  Sign In
</Link>
  </p>

</div>

  )
}

export default SignUp
