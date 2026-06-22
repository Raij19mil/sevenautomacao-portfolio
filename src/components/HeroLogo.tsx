import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import notebookAsset from '@/assets/novo-media.png.asset.json';

gsap.registerPlugin(ScrollTrigger);

const HeroLogo = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
      });
      gsap.from(subRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.9,
        delay: 0.25,
        ease: 'power3.out',
      });
      gsap.from(imgRef.current, {
        x: 80,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: 'power3.out',
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

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] lg:min-h-screen flex flex-col overflow-hidden bg-background pt-24 md:pt-28 lg:pt-32 pb-0"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,hsl(165_70%_38%/0.10),transparent_60%)]" />

      {/* Top label */}
      <div className="relative z-10 px-5 sm:px-6 md:px-12 lg:px-20 mb-6 md:mb-10 lg:mb-16 flex items-center justify-between text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.2em] text-muted-foreground font-mono">
        <span>— Bem vindo</span>
        <span>Automação · Tecnologia</span>
      </div>

      {/* Main two-column layout — phrase left, notebook right */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 lg:gap-6 items-end px-5 sm:px-6 md:px-12 lg:px-20 pb-0">
        {/* LEFT — headline */}
        <div className="max-w-2xl pb-8 md:pb-16 lg:pb-24">
          <h1
            ref={titleRef}
            className="text-[12vw] sm:text-[10vw] md:text-[6.5vw] lg:text-[5.5vw] xl:text-[5vw] font-bold leading-[0.92] tracking-tight text-foreground"
          >
            <span className="relative inline-block">
              <span className="relative z-10 text-primary-foreground px-2 md:px-3">Agora{'\u00a0'}</span>
              <span className="absolute inset-0 bg-primary rounded-sm -z-0" aria-hidden />
            </span>
            <br />
            O Futuro,
          </h1>
          <p
            ref={subRef}
            className="mt-4 md:mt-6 lg:mt-8 text-sm sm:text-base md:text-lg text-muted-foreground max-w-sm md:max-w-md leading-relaxed"
          >
            Automação inteligente, dashboards e plataformas sob medida para
            empresas que querem operar no futuro — hoje.
          </p>

          <div className="mt-6 md:mt-8 flex flex-wrap gap-2.5 md:gap-3">
            <a
              href="https://wa.me/qr/S2LLH6YRFMOGN1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary hover:bg-primary-glow text-primary-foreground px-5 md:px-7 py-3 md:py-3.5 rounded-full font-semibold text-sm md:text-base transition-all"
            >
              Começar agora
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center border border-border hover:border-primary text-foreground px-5 md:px-7 py-3 md:py-3.5 rounded-full font-semibold text-sm md:text-base transition-all"
            >
              Ver soluções
            </a>
          </div>
        </div>

        {/* RIGHT — notebook image */}
        <div ref={imgRef} className="relative w-full flex justify-center lg:justify-end items-end -mb-1">
          <img
            src={notebookAsset.url}
            alt="Plataforma Seven em um notebook"
            className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[520px] lg:max-w-[560px] xl:max-w-[640px] h-auto object-contain"
          />
        </div>
      </div>

    </section>
  );
};

export default HeroLogo;
