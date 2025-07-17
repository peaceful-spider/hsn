import { gsap } from "gsap";

export function initSlider(sliderContainerRef, sliderRef) {
  const sliderContainer = sliderContainerRef.current;
  const slider = sliderRef.current;
  const cards = slider.querySelectorAll(".card");
  const cardWidth = 300; // Fixed card width
  const marginRight = -150; // Fixed margin for spacing
  const totalWidth = (cardWidth + marginRight) * cards.length;

  // Apply skew animation based on screen size
  if (typeof window !== "undefined") {
    const isMobile = window.innerWidth <= 768;
    const skewX = isMobile ? 15 : 30;
    const skewY = isMobile ? 15 : -10;

    gsap.to(sliderContainer, {
      skewX: skewX,
      skewY: skewY,
      duration: 2.5,
      ease: "ease", // Matches CSS transition: transform 2.5s (default ease)
    });
  }

  // GSAP animation for infinite scroll
  gsap.to(slider, {
    x: -totalWidth,
    duration: 20,
    ease: "linear",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
    },
  });
}