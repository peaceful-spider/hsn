    "use client";

import { useEffect } from "react";
import "./custom.css";

export default function ResponsiveNavbar() {
  useEffect(() => {
    const menuBtn = document.getElementById("menuBtn");
    const closeMenuBtn = document.getElementById("closeMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuBtn && closeMenuBtn && mobileMenu) {
      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.add("open");
      });
      closeMenuBtn.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
      });
    }
  }, []);

  return (
    <>
      
      <div className="cursor-outline hidden md:block absolute top-32 " ></div>

      <nav className="top-1 absolute left-0 w-full z-50  ">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="logo flex items-center space-x-2 cursor-trigger">
              <img src="/logos/hsn-logo.png"  className="w-[50px] h-[50px]"></img>
            </a>

            <div className="hidden md:flex items-center space-x-8  bg-white/5p-5">
              {['Home', 'Features', 'About', 'Services', 'Contact'].map(link => (
                <a key={link} href="#" className="nav-link text-slate-200 hover:text-[#oo3366] cursor-trigger">{link}</a>
              ))}
            </div>

            <div className="hidden md:block borderAnimates">
              <button className="cursor-trigger">
                Get Started
              </button>
            </div>

            <button className="md:hidden menu-btn text-white focus:outline-none" id="menuBtn">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        <div className="mobile-menu fixed top-0 right-0 h-full w-64 bg-slate-800 z-50 p-6 flex flex-col" id="mobileMenu">
          <div className="flex justify-end mb-8">
            <button className="text-white focus:outline-none" id="closeMenuBtn">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-6">
            {['Home', 'Features', 'About', 'Services', 'Contact'].map(link => (
              <a key={link} href="#" className="text-slate-200 hover:text-blue-400 transition-colors">{link}</a>
            ))}
            <button className="btn-primary mt-4 px-6 py-2 rounded-full text-white font-medium">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      
    </>
  );
}
