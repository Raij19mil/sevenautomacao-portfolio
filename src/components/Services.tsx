import { Bot, Database, MessageSquare, Zap, Calendar, BarChart, MessagesSquare, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps'
  });

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation on scroll
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
        y: 100,
        opacity: 0,
      });

      // Subtitle animation
      gsap.from(subtitleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
        y: 80,
        opacity: 0,
      });

      // Cards staggered animation
      gsap.from('.service-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 20%',
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        stagger: 0.1,
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

  const services = [
    {
      icon: Bot,
      title: "Agente de IA",
      description: "Assistentes virtuais inteligentes para atendimento automatizado e suporte ao cliente 24/7.",
      color: "primary",
      link: '/servicos/agente-ia'
    },
    {
      icon: Database,
      title: "Integração com Banco de Dados",
      description: "Conecte seus dados de forma segura e eficiente para análises e automações avançadas.",
      color: "primary",
      link: '/servicos/banco-dados'
    },
    {
      icon: MessageSquare,
      title: "Mensagens Programadas",
      description: "Sistema de comunicação automatizada com agendamento e personalização avançada.",
      color: "primary",
      link: '/servicos/mensagens-programadas'
    },
    {
      icon: MessagesSquare,
      title: "Plataforma de Chat",
      description: "Sistema completo de chat em tempo real para comunicação eficiente com seus clientes.",
      color: "primary",
      link: '/servicos/plataforma-chat'
    },
    {
      icon: Zap,
      title: "Disparo Automático",
      description: "Automatize envios de mensagens, e-mails e notificações baseados em triggers específicos.",
      color: "primary",
      link: '/servicos/disparo-automatico'
    },
    {
      icon: Calendar,
      title: "Agendamento Inteligente",
      description: "Sistema de agendamento com IA para otimizar horários e recursos disponíveis.",
      color: "primary",
      link: '/servicos/agendamento-inteligente'
    },
    {
      icon: BarChart,
      title: "Relatórios e Analytics",
      description: "Dashboards completos com métricas em tempo real para acompanhar performance.",
      color: "primary",
      link: '/servicos/analytics'
    },
    {
      icon: Users,
      title: "Seven RH Platform",
      description: "Plataforma completa de Recursos Humanos para gestão de pessoas, recrutamento e desenvolvimento de talentos.",
      color: "seven",
      link: '/servicos/seven-rh'
    }
  ];

  return (
    <section ref={sectionRef} id="servicos" className="py-20 bg-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(165_70%_38%/0.05),transparent_70%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p ref={subtitleRef} className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas de automação para transformar a forma como você trabalha
          </p>
        </div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {services.map((service, index) => (
                <a
                  href={service.link}
                  key={index}
                  className="service-card flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
                >
                  <div className="bg-card/30 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 h-full hover:border-primary/40 hover:scale-105 transition-all group hover:shadow-[0_0_30px_hsl(165_70%_38%/0.15)]">
                    <div className={`w-16 h-16 ${service.color === 'seven' ? 'bg-seven' : 'bg-primary/10'} border ${service.color === 'seven' ? 'border-seven' : 'border-primary/20'} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <service.icon className={`w-8 h-8 ${service.color === 'seven' ? 'text-seven' : 'text-primary'}`} />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                      {service.description}
                    </p>
                    <span className="text-primary font-semibold group-hover:text-primary-glow transition-colors text-sm">
                      Saiba mais →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-full p-3 hover:bg-primary/10 hover:border-primary/40 transition-all hover:scale-110 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-full p-3 hover:bg-primary/10 hover:border-primary/40 transition-all hover:scale-110 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
