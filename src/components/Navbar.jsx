
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from 'lucide-react'; 
import Logo from '../assets/images/logo-menyuarakan.svg';
import React, { useState, useEffect } from 'react';
import { UserCircle } from 'lucide-react';


const Navbar = () => {


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isLogin, setIsLogin] = useState(false);


  const menuItems = [
  { label: "Home", type: "route", target: "/" },
  { label: "About Us", type: "scroll", target: "about" },
  { label: "How it Works", type: "scroll", target: "howitworks" },
  { label: "Laporkan Sampah", type: "scroll", target: "banner" },
];

  const navigate = useNavigate();

  const location = useLocation();
  useEffect(() => {
  setIsLogin(localStorage.getItem("isLogin") === "true");
}, [location.pathname]);


  const goToSection = (id) => {
    if (window.location.pathname !== '/') {
       navigate("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="sticky top-0 z-50 bg-white">
      
      {/* Header Navbar */}
      <div className="flex items-center justify-between px-6 md:px-16 py-5 font-sans">

        {/* Logo */}
        <Link
        to="/"
        className="cursor-pointer transition-all duration-300 hover:text-green-700 relative"
        >
            <img 
              src={Logo}
              alt="Logo Menyuarakan" 
              className="w-16 h-16 object-contain"
            />
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-12 text-lg text-black">
          {menuItems.map((item) => {
            if (item.type === "route") {
              return (
                <Link
                  key={item.label}
                  to={item.target}
                  className="cursor-pointer transition-all duration-300 hover:text-green-700 relative"
                >
                  {item.label}
                </Link>
              );
            }

            if (item.type === "scroll") {
              return (
                <button
                  key={item.label}
                  onClick={() => goToSection(item.target)}
                  className="cursor-pointer bg-transparent border-none transition-all duration-300 hover:text-green-700 relative"
                >
                  {item.label}
                </button>
              );
            }

            return null;
          })}
        </div>


        {/* Auth Buttons Desktop */}
        <div className="hidden md:flex items-center gap-4">
          {isLogin ? (
            <Link to="/dashboard">
              <UserCircle size={32} />
            </Link>
          ) : (
            <>
              <Link  to="/signup" className="px-6 py-2 rounded-full border border-green-800 text-green-800">
                Sign up
              </Link>
              <Link to="/signin" className="px-6 py-2 rounded-full bg-lime-100 text-green-800">
                Sign in
              </Link>
            </>
          )}
        </div>


        {/* Hamburger Menu */}
        <button 
          className="md:hidden text-green-900 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Dropdown */}
    <div 
      className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className="flex flex-col items-start px-8 py-4 space-y-4 border-t border-gray-100 bg-white">

        {menuItems.map((item) => {
          if (item.type === "route") {
            return (
              <Link
                key={item.label}
                to={item.target}
                className="text-lg font-medium text-black hover:text-green-700 w-full py-1 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          }

          if (item.type === "scroll") {
            return (
              <button
                key={item.label}
                onClick={() => {
                  goToSection(item.target);
                  setIsMenuOpen(false);
                }}
                className="text-left text-lg font-medium text-black hover:text-green-700 w-full py-1 transition-colors"
              >
                {item.label}
              </button>
            );
          }

          return null;
        })}

        <div className="pt-4 space-y-3 w-full">

          <Link
            to="/signup"
            className="w-full block text-center px-4 py-2 rounded-full border border-green-800 text-green-800 transition-all duration-300 hover:bg-green-800 hover:text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign up
          </Link>

          <Link
            to="/signin"
            className="w-full block text-center px-4 py-2 rounded-full bg-lime-100 text-green-800 transition-all duration-300 hover:bg-lime-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign in
          </Link>

        </div>

      </div>
    </div>

    </div>
  );
};

export default Navbar;
