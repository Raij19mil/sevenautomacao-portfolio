import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import sevenVIcon from '@/assets/seven-v-icon.png';

gsap.registerPlugin(ScrollTrigger);

const services = [
  'Agentes de IA',
  'Automações',
  'Dashboards',
  'Criação de Sites',
  'Banco de Dados',
  'Mensagens Programadas',
  'Plataforma de Chat',
  'Disparo Automático',
  'Agendamento Inteligente',
  'Analytics',
];

const HeroLogo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const vRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(vRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
      });

      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
      });

      gsap.from('.marquee-track', {
        opacity: 0,
        duration: 1,
        delay: 0.8,
        ease: 'power2.out',
      });

      gsap.to(containerRef.current, {
        y: 80,
        opacity: 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const marqueeItems = [...services, ...services];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Dark background */}
      <div className="absolute inset-0 bg-background" />

      {/* Subtle radial glow behind V */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(165_70%_38%/0.06),transparent_60%)]" />

      {/* Large V watermark */}
      <img
        ref={vRef as any}
        src={sevenVIcon}
        alt="Seven V"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[50vw] max-w-[500px] h-auto opacity-[0.08]"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1
          ref={titleRef}
          className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider uppercase text-foreground"
        >
          SEJA BEM VINDO A{' '}
          <span className="text-primary">SEVEN</span>
        </h1>
      </div>

      {/* Scrolling services marquee at bottom */}
      <div className="absolute bottom-16 left-0 right-0 overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
          {marqueeItems.map((service, i) => (
            <span
              key={i}
              className="inline-flex items-center mx-6 text-sm md:text-base text-muted-foreground/60 uppercase tracking-widest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-4" />
              {service}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroLogo;
