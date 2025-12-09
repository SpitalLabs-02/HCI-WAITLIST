import React from "react"
import { useState } from "react";

import logo from "../assets/LogoIcon.png";


export function Header() {
   const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-3">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="HCI Logo"
            className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
          />
          <h1 className="text-sm sm:text-base md:text-lg font-semibold leading-snug">
            HUMMINGBIRD
            <br />
            CARE INITIATIVE
          </h1>
        </div>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-4">
            <a href="#who" className="text-sm hover:underline">
              Who
            </a>
            <a href="#mission" className="text-sm hover:underline">
              Mission
            </a>
            <a href="#how" className="text-sm hover:underline">
              How
            </a>
          </nav>

          <a
            href="https://bit.ly/HCI-WAITLIST"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#357ABB] hover:bg-blue-700 h-[48px] px-5 flex items-center text-white text-sm font-medium"
          >
             Join the Waitlist
          </a>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen((s) => !s)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="p-2 rounded-md hover:bg-gray-100 inline-flex items-center justify-center"
          >
            {menuOpen ? (
              // close icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // hamburger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
       {/* Mobile dropdown */}
      <div
        className={
          "md:hidden transition-max-height duration-200 ease-in-out overflow-hidden bg-white shadow-md " +
          (menuOpen ? "max-h-[500px]" : "max-h-0")
        }
      >
        <div className="px-4 pt-4 pb-6 space-y-4">
          <nav className="flex flex-col gap-2">
            <a
              href="#who"
              onClick={() => setMenuOpen(false)}
              className="text-base px-2 py-2 rounded hover:bg-gray-50"
            >
              Who
            </a>
            <a
              href="#mission"
              onClick={() => setMenuOpen(false)}
              className="text-base px-2 py-2 rounded hover:bg-gray-50"
            >
              Mission
            </a>
            <a
              href="#how"
              onClick={() => setMenuOpen(false)}
              className="text-base px-2 py-2 rounded hover:bg-gray-50"
            >
              How
            </a>
          </nav>

          <a
            href="https://bit.ly/HCI-WAITLIST"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block text-center rounded-full bg-[#357ABB] hover:bg-blue-700 px-5 py-3 text-white font-medium"
          >
            Join the Waitlist
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;