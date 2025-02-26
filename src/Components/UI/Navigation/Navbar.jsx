import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to handle mobile menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full border-b-2 border-[#ADADAD] mb-5 px-4 md:px-8 py-4">
      {/* Logo Section */}
      <div className="flex items-center justify-between w-full md:w-auto">
        <img className="h-10" src="/src/Assets/HomePage/logo-prescripto.png" alt="Logo" />
        {/* Hamburger Menu for Mobile */}
        <button className="md:hidden" onClick={toggleMenu}>
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
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links and Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row gap-4 mt-4 md:mt-0 w-full md:w-auto items-center`}
      >
        <a
          className="flex items-center cursor-pointer p-2 md:p-0 hover:text-[#5F6FFF]"
          onClick={() => navigate('/')}
        >
          HOME
        </a>
        <a
          className="flex items-center cursor-pointer p-2 md:p-0 hover:text-[#5F6FFF]"
          onClick={() => navigate('/allDoctors')}
        >
          ALL DOCTORS
        </a>
        <a
          className="flex items-center cursor-pointer p-2 md:p-0 hover:text-[#5F6FFF]"
          onClick={() => navigate('/aboutus')}
        >
          ABOUT
        </a>
        <a
          className="flex items-center cursor-pointer p-2 md:p-0 hover:text-[#5F6FFF]"
          onClick={() => navigate('/contactus')}
        >
          CONTACT
        </a>

        {/* Create Account Button (Mobile) */}
        <button
          className="md:hidden w-full p-3 bg-[#5F6FFF] rounded-[20px] text-white hover:bg-[#4A5BFF] mt-4"
          onClick={() => navigate('/signup')}
        >
          CREATE ACCOUNT
        </button>
      </div>

      {/* Create Account Button (Desktop) */}
      <div className="hidden md:flex items-center">
        <button
          className="p-3 bg-[#5F6FFF] rounded-[20px] text-white hover:bg-[#4A5BFF]"
          onClick={() => navigate('/signup')}
        >
          CREATE ACCOUNT
        </button>
      </div>
    </div>
  );
};