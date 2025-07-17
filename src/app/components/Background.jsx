"use client";

import { useEffect, useRef } from 'react';

const Background = () => {
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
        this.x = Math.random() * canvas.width; // Random x across entire page
        this.y = Math.random() * canvas.height; // Random y across entire page
        const isMobile = canvas.width < 640;
        const maxAngle = isMobile ? Math.PI / 6 : Math.PI / 3; // ±30° mobile, ±60° desktop
        const angle = (Math.random() - 0.5) * maxAngle;
        const scale = isMobile ? 0.4 : 0.8;
        const speed = (Math.random() * 0.3 + 0.1) * scale;
        this.speedX = Math.cos(angle) * speed;
        this.speedY = Math.sin(angle) * speed;
        this.size = (Math.random() * 1.2 + 0.3) * (isMobile ? 0.6 : 1);
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
    const particleCount = canvas.width < 640 ? 40 : 60; // Fewer particles on mobile

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw radial gradient background
      const isMobile = canvas.width < 640;
      const innerRadius = isMobile ? canvas.height * 0.03 : canvas.height * 0.05; // Smaller grey radius
      const outerRadius = isMobile ? canvas.height * 0.8 : canvas.height * 0.9; // 90% black
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, 0, innerRadius,
        canvas.width / 2, 0, outerRadius
      );
      gradient.addColorStop(1, '#000000'); // Black
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
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    />
  );
};

export default Background;