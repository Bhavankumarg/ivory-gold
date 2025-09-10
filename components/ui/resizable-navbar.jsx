"use client";
import React, { useState } from "react";
import { Menu, X, User } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      {/* Top Bar */}
      <div className="hidden md:flex justify-end text-sm pr-6 py-2 border-b border-gray-800">
        <span className="mr-4">Working Hours: 10:00 AM to 8:00 PM</span>
        <span className="mr-4">Call: 01234567890</span>
        <span className="flex items-center gap-1">
          <User size={16} /> Login
        </span>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 md:px-8 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png" // replace with your logo
            alt="Ivory & Gold"
            className="h-10 w-auto"
          />
          <span className="text-lg font-serif text-[#d4af37]">Ivory & Gold</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="hover:text-[#d4af37]">
            About Us
          </a>
          <div className="group relative">
            <button className="hover:text-[#d4af37]">Services ▾</button>
            <div className="absolute hidden group-hover:block bg-black text-white mt-2 rounded-lg shadow-lg">
              <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                Service 1
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-800">
                Service 2
              </a>
            </div>
          </div>
          <a href="#" className="hover:text-[#d4af37]">
            Membership
          </a>
          <a href="#" className="hover:text-[#d4af37]">
            Gallery
          </a>
          <a href="#" className="hover:text-[#d4af37]">
            Contact
          </a>
          <button className="bg-[#d4af37] text-black font-medium px-4 py-2 rounded-full">
            Book Appointment
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4 border-t border-gray-800">
          <a href="#" className="block hover:text-[#d4af37]">
            About Us
          </a>
          <a href="#" className="block hover:text-[#d4af37]">
            Services
          </a>
          <a href="#" className="block hover:text-[#d4af37]">
            Membership
          </a>
          <a href="#" className="block hover:text-[#d4af37]">
            Gallery
          </a>
          <a href="#" className="block hover:text-[#d4af37]">
            Contact
          </a>
          <button className="w-full bg-[#d4af37] text-black font-medium px-4 py-2 rounded-full">
            Book Appointment
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
