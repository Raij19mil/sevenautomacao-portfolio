import { ChevronLeft, ChevronRight, Globe, Users } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import dashboardVeiculos from '@/assets/portfolio/dashboard-veiculos.png';
import dashboardRh from '@/assets/portfolio/dashboard-rh.png';
import cardapioDigital from '@/assets/portfolio/cardapio-digital.png';
import chatPlatform from '@/assets/portfolio/chat-platform.png';
import aiConnect from '@/assets/portfolio/ai-connect.png';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Dashboard Superadmin - Veículos',
    category: 'Dashboard',
    description: 'Painel administrativo completo com gestão de empresas, usuários e planos em tempo real.',
    image: dashboardVeiculos,
  },
  {
    title: 'Seven RH Platform',
    category: 'Dashboard',
    description: 'Plataforma completa de RH com gestão de tarefas, triagem inteligente, tickets e métricas de desempenho.',
    image: dashboardRh,
  },
  {
    title: 'Cardápio Digital',
    category: 'Site',
    description: 'Sistema de cardápio digital interativo com seleção de pratos, navegação intuitiva e design elegante.',
    image: cardapioDigital,
  },
  {
    title: 'Plataforma de Chat',
    category: 'Automação',
    description: 'Plataforma de atendimento com integração WhatsApp, Chatwoot e gestão de instâncias automatizada.',
    image: chatPlatform,
  },
  {
    title: 'AI Connect',
    category: 'Dashboard',
    description: 'Painel de configurações de IA com envio automático de imagens, sinal no grupo e gestão de estoque.',
    image: aiConnect,
  },
];

const Portfolio = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    slidesToScroll: 1,
  });

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
        y: 80,
        opacity: 0,
      });
      gsap.from('.portfolio-carousel-wrapper', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1,
        },
        y: 60,
        opacity: 0,
      });
    });
    return () => ctx.revert();
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section ref={sectionRef} id="portfolio" className="py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(165_70%_38%/0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(165_70%_38%/0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Projetos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos trabalhos grandes e pequenos em criação de sites e dashboards
          </p>
        </div>

        {/* Carousel */}
        <div className="relative portfolio-carousel-wrapper">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8 items-stretch">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="portfolio-card flex-[0_0_90%] sm:flex-[0_0_75%] lg:flex-[0_0_60%] xl:flex-[0_0_50%] min-w-0"
                >
                  <div className="bg-card/40 backdrop-blur-md border border-primary/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all hover:shadow-[0_0_40px_hsl(165_70%_38%/0.12)] group">
                    {/* Image */}
                    <div className="aspect-video bg-secondary/50 overflow-hidden">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-muted-foreground text-lg">Em breve</span>
                        </div>
                      )}
                    </div>
                    {/* Info */}
                    <div className="p-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-foreground mt-3 mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-card/90 backdrop-blur-md border border-primary/20 rounded-full p-3 hover:bg-primary/10 hover:border-primary/40 transition-all hover:scale-110 shadow-lg z-10"
            aria-label="Projeto anterior"
          >
            <ChevronLeft className="w-5 h-5 text-primary" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-card/90 backdrop-blur-md border border-primary/20 rounded-full p-3 hover:bg-primary/10 hover:border-primary/40 transition-all hover:scale-110 shadow-lg z-10"
            aria-label="Próximo projeto"
          >
            <ChevronRight className="w-5 h-5 text-primary" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link
            to="/servicos/criacao-sites"
            className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 text-primary font-semibold px-6 py-3 rounded-xl transition-all text-sm"
          >
            <Globe className="w-4 h-4" />
            Criação de Sites
          </Link>
          <Link
            to="/servicos/seven-rh"
            className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 border border-primary/20 hover:border-primary/40 text-primary font-semibold px-6 py-3 rounded-xl transition-all text-sm"
          >
            <Users className="w-4 h-4" />
            Seven RH Platform
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
