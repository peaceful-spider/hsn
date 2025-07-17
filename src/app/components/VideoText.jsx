
"use client";

import React, { useEffect, useState } from "react";

/**
 * A component that displays a video masked within text using an SVG mask.
 * The video is only visible within the text, with responsive scaling for all screen sizes.
 *
 * @param {Object} props
 * @param {string} props.src - Video source URL or path (e.g., "/videos/myvideo.mp4")
 * @param {string} [props.className=""] - Additional classes for the container
 * @param {boolean} [props.autoPlay=true] - Autoplay the video
 * @param {boolean} [props.muted=true] - Mute the video
 * @param {boolean} [props.loop=true] - Loop the video
 * @param {"auto" | "metadata" | "none"} [props.preload="auto"] - Video preload behavior
 * @param {React.ReactNode} props.children - Text content for the mask (e.g., "CREATIVE")
 * @param {string | number} [props.fontSize=20] - Font size for text mask (in vw or px)
 * @param {string | number} [props.fontWeight="bold"] - Font weight for text mask
 * @param {string} [props.textAnchor="middle"] - Text alignment (e.g., "start", "middle", "end")
 * @param {string} [props.dominantBaseline="middle"] - Vertical text alignment
 * @param {string} [props.fontFamily="sans-serif"] - Font family for text mask
 * @param {React.ElementType} [props.as="div"] - HTML element to render as
 */
export default function VideoText({
  src,
  className = "",
  autoPlay = true,
  muted = true,
  loop = true,
  preload = "auto",
  children,
  fontSize = 20,
  fontWeight = "bold",
  textAnchor = "middle",
  dominantBaseline = "middle",
  fontFamily = "sans-serif",
  as: Component = "div",
}) {
  const [svgMask, setSvgMask] = useState("");
  const content = React.Children.toArray(children).join("");

  // Generate SVG mask dynamically based on props and update on resize
  useEffect(() => {
    const responsiveFontSize = typeof fontSize === "number" ? `${fontSize}vw` : fontSize;
    const newSvgMask = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><text x="50%" y="50%" font-size="${responsiveFontSize}" font-weight="${fontWeight}" text-anchor="${textAnchor}" dominant-baseline="${dominantBaseline}" font-family="${fontFamily}" fill="white">${content}</text></svg>`;
    setSvgMask(newSvgMask);

    const updateSvgMask = () => setSvgMask(newSvgMask);
    window.addEventListener("resize", updateSvgMask);
    return () => window.removeEventListener("resize", updateSvgMask);
  }, [content, fontSize, fontWeight, textAnchor, dominantBaseline, fontFamily]);

  const dataUrlMask = `url("data:image/svg+xml;utf8,${encodeURIComponent(svgMask)}")`;

  return (
    <Component
      className={`relative  mt-24 lg:left-[5%] lg:w-[90%] h-screen flex items-center justify-center  ${className}`}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          mask: `${dataUrlMask} no-repeat center / contain`,
          WebkitMask: `${dataUrlMask} no-repeat center / contain`, // For older browsers
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
          <source src={src.replace(".mp4", ".webm")} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <span className="sr-only">{content}</span>
    </Component>
  );
}
