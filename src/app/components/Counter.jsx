'use client';

import { useEffect, useRef, useState } from 'react';

const Counter = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef(null);

  const animateCounter = (id, start, end, duration) => {
    let current = start;
    const element = document.getElementById(id);
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));

    const timer = setInterval(() => {
      current += increment;
      element.textContent = current + (id === 'clients' || id === 'projects' ? '+' : '');
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateCounter('companies', 0, 157, 2000);
            animateCounter('clients', 0, 1000, 2000);
            animateCounter('projects', 0, 200, 2000);
            setHasAnimated(true);
            observer.unobserve(counterRef.current);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={counterRef}
      className="parallax py-8 sm:py-12 md:py-16 mt-20" >
      <div className="w-[90%] sm:w-[80%] md:w-[70%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          {/* Companies Counter */}
          <div className="flex flex-col items-center">
            <span id="companies" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              0
            </span>
            <p className="text-base sm:text-lg md:text-xl font-bold text-white drop-shadow-lg mt-2">
              Companies
            </p>
          </div>

          {/* Clients Counter */}
          <div className="flex flex-col items-center">
            <span id="clients" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              0
            </span>
            <p className="text-base sm:text-lg md:text-xl font-bold text-white drop-shadow-lg mt-2">
              Clients
            </p>
          </div>

          {/* Projects Counter */}
          <div className="flex flex-col items-center">
            <span id="projects" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
              0
            </span>
            <p className="text-base sm:text-lg md:text-xl font-bold text-white drop-shadow-lg mt-2">
              Projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;