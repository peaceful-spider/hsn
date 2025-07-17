"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { initSlider } from "./utils/slider";
import "./styles/slider.css";
import image from 'next/image';

const slides = [
  {
    image: "/images/P1.jpg",
    alt: "Tech 1",
    link: "/images/P1.jpg", // Replace with your actual link
  },
  {
    image: "/images/P2.jpg",
    alt: "Tech 1",
    link: "/images/P1.jpg", // Replace with your actual link
  },
  {
    image: "/images/P3.jpg",
    alt: "Tech 1",
    link: "/images/P1.jpg", // Replace with your actual link
  },
  {
    image: "/images/P4.jpg",
    alt: "Tech 1",
    link: "/images/P6.jpg", // Replace with your actual link
  },
  {
    image: "/images/P7.jpg",
    alt: "Tech 1",
    link: "/images/P1.jpg", // Replace with your actual link
  },
  {
    image: "/images/P8.jpg",
    alt: "Tech 1",
    link: "/images/P1.jpg", // Replace with your actual link
  },
  {
    image: "/images/P9.jpg",
    alt: "Tech 1",
    link: "/images/P1.jpg", // Replace with your actual link
  },
  {
    image: "/images/P11.jpg",
    alt: "Tech 1",
    link: "/images/P1.jpg", // Replace with your actual link
  },
  {
    image: "/images/P12.jpg",
    alt: "Tech 1",
    link: "/images/P1.jpg", // Replace with your actual link
  },
  {
    image: "/images/P13.jpg",
    alt: "Tech 1",
    link: "/images/P1.jpg", // Replace with your actual link
  },
  {
    image: "/images/P14.jpg",
    alt: "Tech 1",
    link: "/images/P1.jpg", // Replace with your actual link
  },
  {
    image: "/images/P6.jpg",
    alt: "Tech 1",
    link: "/images/P1.jpg", // Replace with your actual link
  },
  {
    image: "/images/P15.jpg",
    alt: "Tech 1",
    link: "/images/P1.jpg", // Replace with your actual link
  },
];

export default function HeroSlider() {
  const sliderContainerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderContainerRef.current && sliderRef.current) {
      initSlider(sliderContainerRef, sliderRef);
    }
  }, []);

  return (
    <section className="hero -top-[200px] h-[500px]">
      <div className="slider-container" ref={sliderContainerRef}>
        <div className="slider" ref={sliderRef}>
          {[...slides, ...slides].map((slide, index) => (
            <Link href={slide.link} key={index} className="card">
              <img src={slide.image} alt={slide.alt} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}