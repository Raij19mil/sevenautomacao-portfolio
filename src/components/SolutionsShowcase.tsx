import { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import automationImg from '@/assets/solution-automation.jpg';
import dashboardImg from '@/assets/solution-dashboard.jpg';
import websiteImg from '@/assets/solution-website.jpg';

gsap.registerPlugin(ScrollTrigger);

type Card = {
  tag: string;
  title: string;
  description: string;
  image: string;
  link: string;
  variant: 'dark' | 'light' | 'primary';
};

const cards: Card[] = [
  {
    tag: 'Automação',
    title: 'Fluxos que rodam sozinhos',
    description:
      'Chatbots com IA, integrações e disparos automáticos. Sua operação trabalhando 24/7 sem esforço manual.',
    image: automationImg,
    link: '/servicos/agente-ia',
    variant: 'dark',
  },
  {
    tag: 'Dashboards',
    title: 'Decisões com dados reais',
    description:
      'Painéis visuais em tempo real. Métricas claras, acionáveis e conectadas à sua operação.',
    image: dashboardImg,
    link: '/servicos/analytics',
    variant: 'light',
  },
  {
    tag: 'Sites',
    title: 'Presença digital que converte',
    description:
      'Sites modernos, rápidos e responsivos. Design pensado para gerar resultado, não só impressionar.',
    image: websiteImg,
    link: '/servicos/criacao-sites',
    variant: 'primary',
  },
];

const SolutionsShowcase = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 40%',
          scrub: 1,
        },
        y: 60,
        opacity: 0,
      });
      gsap.from('.solution-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 20%',
          scrub: 1,
        },
        y: 80,
        opacity: 0,
        stagger: 0.1,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const variantClasses: Record<Card['variant'], { bg: string; text: string; sub: string; tag: string }> = {
    dark: {
      bg: 'bg-[#141414]',
      text: 'text-foreground',
      sub: 'text-muted-foreground',
      tag: 'bg-foreground/5 text-foreground border-foreground/10',
    },
    light: {
      bg: 'bg-[#EFEAE0]',
      text: 'text-[#1a1a1a]',
      sub: 'text-[#1a1a1a]/70',
      tag: 'bg-[#1a1a1a]/5 text-[#1a1a1a] border-[#1a1a1a]/10',
    },
    primary: {
      bg: 'bg-primary',
      text: 'text-primary-foreground',
      sub: 'text-primary-foreground/85',
      tag: 'bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20',
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-background border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="font-mono-label mb-4">— Soluções</p>
            <h2
              ref={headingRef}
              className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05] max-w-3xl"
            >
              É aqui que a gente entra.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mt-5">
              Transformamos a rotina de empresas com tecnologia sob medida — do
              primeiro fluxo automatizado ao site que converte.
            </p>
          </div>

          <div className="hidden md:flex gap-3">
            <button
              onClick={scrollPrev}
              aria-label="Anterior"
              className="w-12 h-12 rounded-full border border-border hover:border-primary hover:text-primary text-foreground flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Próximo"
              className="w-12 h-12 rounded-full border border-border hover:border-primary hover:text-primary text-foreground flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pl-4 md:pl-8">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5 md:gap-6 pr-4 md:pr-8">
            {cards.map((card, i) => {
              const v = variantClasses[card.variant];
              return (
                <Link
                  to={card.link}
                  key={i}
                  className={`solution-card group flex-[0_0_85%] sm:flex-[0_0_60%] lg:flex-[0_0_42%] ${v.bg} rounded-[28px] overflow-hidden flex flex-col min-h-[520px] md:min-h-[580px] relative transition-transform duration-500 hover:-translate-y-1`}
                >
                  <div className="p-7 md:p-9 flex items-start justify-between">
                    <span
                      className={`inline-flex items-center text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full border ${v.tag}`}
                    >
                      {card.tag}
                    </span>
                    <span
                      className={`w-10 h-10 rounded-full border ${v.tag} flex items-center justify-center group-hover:rotate-45 transition-transform duration-300`}
                    >
                      <ArrowUpRight className={`w-4 h-4 ${v.text}`} />
                    </span>
                  </div>

                  <div className="px-7 md:px-9 pb-6">
                    <h3
                      className={`text-3xl md:text-[2.5rem] font-bold leading-[1.05] tracking-tight ${v.text} mb-4`}
                    >
                      {card.title}
                    </h3>
                    <p className={`text-sm md:text-base leading-relaxed ${v.sub} max-w-md`}>
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-auto px-5 pb-5">
                    <div className="overflow-hidden rounded-[20px] aspect-[16/10]">
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        width={800}
                        height={500}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex md:hidden gap-3 mt-8 px-0">
          <button
            onClick={scrollPrev}
            aria-label="Anterior"
            className="w-11 h-11 rounded-full border border-border text-foreground flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Próximo"
            className="w-11 h-11 rounded-full border border-border text-foreground flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsShowcase;
