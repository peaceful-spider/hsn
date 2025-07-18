'use client';

import React from 'react';

const logos = [
  { name: 'ACME', svg: <img src='/logos/1.png' alt="ACME Logo 1" className="w-32 h-20 object-contain" /> },
  { name: 'ACME', svg: <img src='/logos/2.png' alt="ACME Logo 2" className="w-32 h-20 object-contain" /> },
  { name: 'ACME', svg: <img src='/logos/3.png' alt="ACME Logo 3" className="w-32 h-20 object-contain" /> },
  { name: 'ACME', svg: <img src='/logos/4.png' alt="ACME Logo 4" className="w-32 h-20 object-contain" /> },
  { name: 'ACME', svg: <img src='/logos/5.png' alt="ACME Logo 5" className="w-32 h-20 object-contain" /> },
  { name: 'ACME', svg: <img src='/logos/6.png' alt="ACME Logo 6" className="w-32 h-20 object-contain" /> },
  { name: 'ACME', svg: <img src='/logos/7.png' alt="ACME Logo 7" className="w-32 h-20 object-contain" /> },
  { name: 'ACME', svg: <img src='/logos/8.png' alt="ACME Logo 8" className="w-32 h-20 object-contain" /> },
  { name: 'ACME', svg: <img src='/logos/9.png' alt="ACME Logo 9" className="w-32 h-20 object-contain" /> },
  { name: 'ACME', svg: <img src='/logos/10.png' alt="ACME Logo 10" className="w-32 h-20 object-contain" /> },
  { name: 'ACME', svg: <img src='/logos/11.png' alt="ACME Logo 11" className="w-32 h-20 object-contain" /> },
  { name: 'ACME', svg: <img src='/logos/1.png' alt="ACME Logo 12" className="w-32 h-20 object-contain" /> },
];

const LogoSlider = () => {
  return (
    <div className="relative w-[80%] max-w-[1200px] mx-auto overflow-hidden mt-20">
      <div className="text-center">
        <h1 className="text-[20px] font-bold mb-20 bg-gradient-to-r from-[#96bcd4] to-[#a77777] bg-clip-text text-transparent md:text-[2rem]">
          MEET OUR PARTNERS
        </h1>
      </div>
      <div className="absolute top-0 left-0 w-[15%] h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10 md:w-[10%]"></div>
      <div className="absolute top-0 right-0 w-[15%] h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10 md:w-[10%]"></div>
      <div
        className="flex w-[calc(200px*24)] animate-[slide_30s_linear_infinite] hover:animation-pause"
      >
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div
            key={`logo-${index}`}
            className="flex items-center justify-center w-[200px] h-[120px] p-4 transition-transform duration-300 hover:scale-125 hover:z-10"
          >
            {logo.svg}
          </div>
        ))}
        {/* Duplicate set for seamless looping */}
        {logos.map((logo, index) => (
          <div
            key={`logo-duplicate-${index}`}
            className="flex items-center justify-center w-[200px] h-[120px] p-4 transition-transform duration-300 hover:scale-125 hover:z-10"
          >
            {logo.svg}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;