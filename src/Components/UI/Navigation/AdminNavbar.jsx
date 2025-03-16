import React from 'react';
import logo from "../../../assets/HomePage/logo-prescripto.png";

export const AdminNav = () => {
  return (
    <div className="flex flex-row justify-between items-center p-4 border-b-2 border-gray-300 bg-white">
      {/* Logo and Admin Label */}
      <div className="flex flex-row items-center">
        <img src={logo} alt="Logo" className="w-24 md:w-32" />
        <span className="text-sm font-semibold text-end translate-y-3 -translate-x-2 hidden md:block">
          Admin
        </span>
      </div>

      {/* Login Button */}
      <div className="flex flex-row justify-end items-center">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Login
        </button>
      </div>
    </div>
  );
};