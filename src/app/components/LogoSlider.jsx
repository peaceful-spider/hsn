import React from 'react';

const logos = [
  {
    name: 'ACME',
    svg: (
      <svg className="w-full h-screen" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="80" height="40" rx="5" fill="#4F46E5"/>
        <text x="50" y="35" fontFamily="Arial" fontSize="14" fill="white" textAnchor="middle">ACME</text>
      </svg>
    )
  },
  {
    name: 'EcoTech',
    svg: (
      <svg className="w-full h-full" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="30" r="25" fill="#10B981"/>
        <text x="50" y="35" fontFamily="Arial" fontSize="12" fill="white" textAnchor="middle">EcoTech</text>
      </svg>
    )
  },
  {
    name: 'PEAK',
    svg: (
      <svg className="w-full h-full" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,10 80,40 20,40" fill="#F59E0B"/>
        <text x="50" y="35" fontFamily="Arial" fontSize="10" fill="white" textAnchor="middle">PEAK</text>
      </svg>
    )
  },
  {
    name: 'Bubble',
    svg: (
      <svg className="w-full h-full" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="15" width="60" height="30" rx="15" fill="#EC4899"/>
        <text x="50" y="35" fontFamily="Arial" fontSize="12" fill="white" textAnchor="middle">Bubble</text>
      </svg>
    )
  },
  {
    name: 'BlockCo',
    svg: (
      <svg className="w-full h-full" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="30" height="30" fill="#3B82F6"/>
        <rect x="55" y="15" width="30" height="30" fill="#8B5CF6"/>
        <text x="50" y="35" fontFamily="Arial" fontSize="10" fill="white" textAnchor="middle">BlockCo</text>
      </svg>
    )
  },
  {
    name: 'Pulse',
    svg: (
      <svg className="w-full h-full" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <path d="M30,15 Q50,5 70,15 Q90,25 70,45 Q50,55 30,45 Q10,25 30,15" fill="#EF4444"/>
        <text x="50" y="35" fontFamily="Arial" fontSize="10" fill="white" textAnchor="middle">Pulse</text>
      </svg>
    )
  },
  {
    name: 'Duo',
    svg: (
      <svg className="w-full h-full" viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
        <circle cx="35" cy="30" r="20" fill="#6366F1"/>
        <circle cx="65" cy="30" r="20" fill="#8B5CF6"/>
        <text x="50" y="35" fontFamily="Arial" fontSize="10" fill="white" textAnchor="middle">Duo</text>
      </svg>
    )
  }
];

const LogoSlider = () => {
  return (
    <div className="relative w-[80%] mx-auto overflow-hidden mt-20">
         <div className="text-center">
                  <h1 className="text-[20px] font-bold mb-20 bg-gradient-to-r from-[#96bcd4] to-[#a77777] bg-clip-text text-transparent md:text-[2rem]">
                    MEET OUT PARTNERS
                  </h1>
                  
                </div>
      <div className="absolute top-0 left-0 w-[15%] h-full bg-gradient-to-r from-black to-transparent pointer-events-none z-10 md:w-[10%]"></div>
      <div className="absolute top-0 right-0 w-[15%] h-full bg-gradient-to-l from-black to-transparent pointer-events-none z-10 md:w-[10%]"></div>
      <div 
        className="flex w-[calc(150px*14)] animate-[slide_30s_linear_infinite] hover:animation-pause"
      >
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div 
            key={`logo-${index}`} 
            className="flex items-center justify-center w-[150px] h-[100px] p-4 transition-transform duration-300 hover:scale-125 hover:z-10"
          >
            {logo.svg}
          </div>
        ))}
        {/* Duplicate set for seamless looping */}
        {logos.map((logo, index) => (
          <div 
            key={`logo-duplicate-${index}`} 
            className="flex items-center justify-center w-[150px] h-[100px] p-4 transition-transform duration-300 hover:scale-125 hover:z-10"
          >
            {logo.svg}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;