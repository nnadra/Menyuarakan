import React, { useState } from 'react';
import { Menu, X, Send } from 'lucide-react'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "About Us", "How it Works", "Laporkan Sampah"];

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between px-6 md:px-10 py-5 font-sans">

        {/* Logo */}
        <div className="bg-lime-100 px-6 py-3 rounded-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-md">
          <h1 className="text-green-900 font-semibold text-lg tracking-wide">
            LOGO
          </h1>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-12 text-lg text-black">
          
          {menuItems.map((item) => (
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
                  w-0 h-0.5 bg-green-700 
                  transition-all duration-300 
                  group-hover:w-full
                "
              />
            </span>
          ))}

        </div>

        {/* Auth Buttons Desktop */}
        <div className="hidden md:flex items-center gap-4">

          {/* Sign up */}
          <button
            className="
              px-6 py-2 rounded-full border border-green-800 text-green-800 
              transition-all duration-300
              hover:bg-green-800 hover:text-white 
              hover:-translate-y-0.5
              active:translate-y-0
            "
          >
            Sign up
          </button>

          {/* Sign in */}
          <button
            className="
              px-6 py-2 rounded-full bg-lime-100 text-green-800
              transition-all duration-300
              hover:bg-lime-200 hover:-translate-y-0.5
              active:translate-y-0
            "
          >
            Sign in
          </button>

        </div>

        {/* Hamburger Menu (Mobile) */}
        <button 
          className="md:hidden text-green-900 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col items-start px-8 py-4 space-y-4 border-t border-gray-100 bg-white">
          
          {/* Menu Items Mobile */}
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '-')}`} // Contoh link
              className="text-lg font-medium text-black hover:text-green-700 w-full py-1 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          {/* Auth Buttons Mobile (Full width) */}
          <div className="pt-4 space-y-3 w-full">
            <button
              className="
                w-full px-4 py-2 rounded-full border border-green-800 text-green-800 
                transition-all duration-300 text-center
                hover:bg-green-800 hover:text-white
              "
              onClick={() => setIsMenuOpen(false)}
            >
              Sign up
            </button>
            <button
              className="
                w-full px-4 py-2 rounded-full bg-lime-100 text-green-800
                transition-all duration-300 text-center
                hover:bg-lime-200
              "
              onClick={() => setIsMenuOpen(false)}
            >
              Sign in
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;