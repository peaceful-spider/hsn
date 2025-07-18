"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image'; // Import Next.js Image component



const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = canvas.width / 2; // Start at top center
        this.y = 0;
        const angle = Math.random() * Math.PI * 2; // Circular spread
        const scale = canvas.width < 640 ? 0.5 : 1; // Scale speed for small screens
        const speed = (Math.random() * 0.5 + 0.2) * scale;
        this.speedX = Math.cos(angle) * speed;
        this.speedY = Math.sin(angle) * speed;
        this.size = (Math.random() * 1.5 + 0.5) * (canvas.width < 640 ? 0.7 : 1); // Smaller particles on mobile
        this.opacity = 0.6;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap particles around edges
        if (this.x > canvas.width) this.x -= canvas.width;
        if (this.x < 0) this.x += canvas.width;
        if (this.y > canvas.height) this.y -= canvas.height;
        if (this.y < 0) this.y += canvas.height;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(128, 128, 128, ${this.opacity})`; // Grey color
        ctx.fill();
      }
    }

    const particles = [];
    const particleCount = canvas.width < 640 ? 1 : 3; // Fewer particles on mobile

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw radial gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, 0, canvas.height * 0.1, // 10% radius for grey
        canvas.width / 2, 0, canvas.height * 0.7  // 90% black
      );
      gradient.addColorStop(0, '#2b2b2b'); // Lighter grey
      gradient.addColorStop(1, 'transparent'); // Black
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="relative h-[650px] flex justify-center items-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      />
      <Image
        src="/images/HsnHeroImg.png" // Path to your image in the public folder
        alt="HSN Logo"
        width={300} // Adjust based on your image's dimensions
        height={300} // Adjust based on your image's dimensions
        className="z-10 w-64 md:w-80 lg:w-[30%] h-auto object-contain animate-scaleIn"
        priority // Prioritize loading for hero image
      />
    </section>
  );
};

export default HeroSection;
