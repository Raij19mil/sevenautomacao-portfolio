import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logoImage from '@/assets/logo-seven-3d.png';

gsap.registerPlugin(ScrollTrigger);

const HeroLogo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Parallax scroll effect like Lando Norris site
    gsap.to(containerRef.current, {
      y: 200,
      scale: 0.8,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, []);

  useEffect(() => {
    if (!logoRef.current || !glowRef.current) return;

    if (isHovered) {
      gsap.to(logoRef.current, {
        scale: 1.05,
        duration: 0.4,
        ease: 'power2.out',
      });
      gsap.to(glowRef.current, {
        opacity: 1,
        scale: 1.1,
        duration: 0.4,
        ease: 'power2.out',
      });
    } else {
      gsap.to(logoRef.current, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
      gsap.to(glowRef.current, {
        opacity: 0,
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    }
  }, [isHovered]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center"
    >
      {/* Glow effect on hover */}
      <div 
        ref={glowRef}
        className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none"
      >
        <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-primary/20 blur-3xl" />
      </div>

      {/* Main logo */}
      <img
        ref={logoRef}
        src={logoImage}
        alt="Seven Logo"
        className="relative z-10 w-[280px] h-[280px] md:w-[380px] md:h-[380px] object-contain cursor-pointer transition-[filter] duration-300"
        style={{
          filter: isHovered 
            ? 'drop-shadow(0 0 30px hsl(var(--primary) / 0.5))' 
            : 'drop-shadow(0 0 10px hsl(var(--primary) / 0.2))',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />

      {/* Subtle animated border on hover */}
      <div 
        className={`absolute z-0 w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border border-primary/20 transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
        }`}
      />
      <div 
        className={`absolute z-0 w-[360px] h-[360px] md:w-[460px] md:h-[460px] rounded-full border border-primary/10 transition-all duration-700 ${
          isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
        }`}
      />
    </div>
  );
};

export default HeroLogo;
