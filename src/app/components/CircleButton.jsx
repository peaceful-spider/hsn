'use client';

import React from 'react';
import styles from './CircleButton.module.css';

const CircleButton = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container w-[90%] flex flex-col md:flex-row items-center justify-between min-h-[70vh] flex-wrap p-4">
        <div className="col1 flex flex-col justify-start items-center md:items-start">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-center md:text-left">Want to start a project?</h1>
          <p className="text-base sm:text-lg w-full sm:w-[500px] text-gray-600 mt-4 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur. Scelerisque cursus eget aliquet vel elit. Suspendisse odio augue.
          </p>
        </div>
        <div className="col2 mt-6 md:mt-0">
          <div className={`${styles.circleButton} rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(0,149,255,0.7)] hover:shadow-[0_15px_30px_rgba(0,149,255,0.9)] transition-shadow duration-300`}>
            <svg viewBox="50 -1 100 202">
              <circle cx="100" cy="100" r="90" />
            </svg>
            <span className="text-white text-base sm:text-lg md:text-xl font-bold tracking-wide text-center z-10">LET'S TALK →</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleButton;