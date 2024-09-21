import React, { useState } from 'react';
import logo from '../assets/react.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-50 via-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-800">
           
            <a href="/" className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-8 w-8" />
              <span>Manzoorify</span>
            </a>
          </div>
         
          <div className="lg:hidden">
            <button
              className="text-gray-800 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex space-x-8 items-center">
            <a href="/" className="text-gray-800 hover:text-blue-600">
              Home
            </a>
            <a href="/" className="text-gray-800 hover:text-blue-600">
              About
            </a>
            <a href="/" className="text-gray-800 hover:text-blue-600">
              Services
            </a>
            <a href="/" className="text-gray-800 hover:text-blue-600">
              Contact
            </a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500">
              Get Started
            </button>
          </div>
        </div>
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'
            }`}
        >
          <div className="flex flex-col space-y-2 px-4 pb-4">
            <a href="/" className="text-gray-800 hover:text-gray-600 py-2 border-b">
              Home
            </a>
            <a href="/about" className="text-gray-800 hover:text-gray-600 py-2 border-b">
              About
            </a>
            <a href="/services" className="text-gray-800 hover:text-gray-600 py-2 border-b">
              Services
            </a>
            <a href="/contact" className="text-gray-800 hover:text-gray-600 py-2 border-b">
              Contact
            </a>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
