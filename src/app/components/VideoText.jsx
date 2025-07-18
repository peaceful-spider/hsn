'use client';

import React, { useEffect, useState } from 'react';

/**
 * A component that displays a video masked within an SVG logo with the word "Creative".
 * The video is only visible within the SVG text, with responsive scaling for all screen sizes.
 *
 * @param {Object} props
 * @param {string} props.src - Video source URL or path (e.g., "/videos/myvideo.mp4")
 * @param {string} [props.className=""] - Additional classes for the container
 * @param {boolean} [props.autoPlay=true] - Autoplay the video
 * @param {boolean} [props.muted=true] - Mute the video
 * @param {boolean} [props.loop=true] - Loop the video
 * @param {"auto" | "metadata" | "none"} [props.preload="auto"] - Video preload behavior
 * @param {React.ElementType} [props.as="div"] - HTML element to render as
 */
export default function VideoLogo({
  src,
  className = '',
  autoPlay = true,
  muted = true,
  loop = true,
  preload = 'auto',
  as: Component = 'div',
}) {
  const [svgMask, setSvgMask] = useState('');

  // SVG logo content for the mask
  const logoSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 80" width="100%" height="100%">
      <g>
        <text
          x="50%"
          y="50%"
          font-family="'Poppins', sans-serif"
          font-weight="720"
          font-size="48"
          fill="white"
          text-anchor="middle"
          dominant-baseline="middle"
          letter-spacing="-0.02em"
        >
          Creative
        </text>
      </g>
    </svg>
  `;

  // Set SVG mask on mount and update on resize
  useEffect(() => {
    setSvgMask(logoSvg);

    const updateSvgMask = () => setSvgMask(logoSvg);
    window.addEventListener('resize', updateSvgMask);
    return () => window.removeEventListener('resize', updateSvgMask);
  }, []);

  const dataUrlMask = `url("data:image/svg+xml;utf8,${encodeURIComponent(svgMask)}")`;

  return (
    <Component
      className={`relative mt-24 lg:left-[5%] lg:w-[90%] h-screen flex items-center justify-center ${className}`}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          mask: `${dataUrlMask} no-repeat center / contain`,
          WebkitMask: `${dataUrlMask} no-repeat center / contain`,
        }}
      >
        <video
          className="w-full h-full object-cover sm:object-contain"
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          preload={preload}
          playsInline
        >
          <source src={src} type="video/mp4" />
          <source src={src.replace('.mp4', '.webm')} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <span className="sr-only">Creative</span>
    </Component>
  );
}