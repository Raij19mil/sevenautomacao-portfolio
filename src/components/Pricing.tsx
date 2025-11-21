import { Check, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Pricing = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'center',
    slidesToScroll: 1
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

      // Pricing cards animation
      gsap.from('.pricing-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 20%',
          scrub: 1,
        },
        y: 100,
        opacity: 0,
        stagger: 0.15,
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

  const plans = [
    {
      name: "Básico",
      price: "R$399,90",
      implementation: "R$799,90",
      features: [
        "Agente de IA integrada com Planilhas",
        "Suporte via WhatsApp"
      ],
      popular: false
    },
    {
      name: "Intermediário", 
      price: "R$599,90",
      implementation: "R$799,90",
      features: [
        "Agente de IA integrada com banco de dados",
        "Mensagens programadas ou agendamento de mensagens",
        "Suporte prioritário via WhatsApp"
      ],
      popular: true
    },
    {
      name: "Plus",
      price: "R$799,90", 
      implementation: "R$799,90",
      features: [
        "Agente de IA integrada com banco de dados",
        "Mensagens programadas com interface de agendamento",
        "Disparo automático de mensagens",
        "Suporte prioritário via WhatsApp"
      ],
      popular: false
    },
    {
      name: "Interprise",
      price: "Sob consulta",
      implementation: "Personalizado",
      subtitle: "Sua automação do seu jeito",
      features: [
        "Agente de IA integrada com banco de dados",
        "Mensagens programadas",
        "Disparo de mensagens automático",
        "Funcionalidades personalizadas",
        "Suporte dedicado via WhatsApp"
      ],
      popular: false
    }
  ];

  return (
    <section ref={sectionRef} id="precos" className="py-32 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(165_70%_38%/0.08),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(165_70%_38%/0.08),transparent_60%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Assinaturas
          </h2>
          <p ref={subtitleRef} className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal para suas necessidades de automação
          </p>
        </div>

        <div className="relative">
          {/* Floating Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8 items-stretch">
              {plans.map((plan, index) => (
                <div 
                  key={index}
                  className="pricing-card flex-[0_0_90%] sm:flex-[0_0_70%] lg:flex-[0_0_45%] xl:flex-[0_0_30%] min-w-0"
                >
                  <div 
                    className={`bg-card/40 backdrop-blur-md border rounded-3xl p-8 relative h-full flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_hsl(165_70%_38%/0.2)] ${
                      plan.popular 
                        ? 'border-primary/40 shadow-[0_10px_40px_hsl(165_70%_38%/0.15)]' 
                        : 'border-primary/10 hover:border-primary/30'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-primary to-primary-glow text-primary-foreground px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-[0_0_20px_hsl(165_70%_38%/0.4)]">
                          <Star className="w-4 h-4 fill-current" />
                          Mais Popular
                        </div>
                      </div>
                    )}
                    
                    <div className="text-center mb-8 flex-shrink-0">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {plan.name}
                      </h3>
                      {plan.subtitle && (
                        <p className="text-muted-foreground text-sm mb-4">{plan.subtitle}</p>
                      )}
                      <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-2">
                        {plan.price}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        /mês
                      </div>
                    </div>

                    <div className="mb-8 pb-8 border-b border-primary/10 flex-shrink-0">
                      <div className="text-muted-foreground text-xs mb-2">Implementação:</div>
                      <div className="text-lg font-semibold text-foreground">
                        {plan.implementation}
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mt-0.5">
                            <Check className="w-3 h-3 text-primary" />
                          </div>
                          <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="https://wa.me/qr/S2LLH6YRFMOGN1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-4 px-6 rounded-xl font-bold text-center transition-all border ${
                        plan.popular
                          ? 'bg-primary hover:bg-primary-glow text-primary-foreground border-primary/20 hover:shadow-[0_0_30px_hsl(165_70%_38%/0.4)]'
                          : 'bg-card/50 hover:bg-primary/10 text-foreground border-primary/20 hover:border-primary/40'
                      }`}
                    >
                      Escolher Plano
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-card/90 backdrop-blur-md border border-primary/20 rounded-full p-4 hover:bg-primary/10 hover:border-primary/40 transition-all hover:scale-110 shadow-lg z-10"
            aria-label="Previous plan"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-card/90 backdrop-blur-md border border-primary/20 rounded-full p-4 hover:bg-primary/10 hover:border-primary/40 transition-all hover:scale-110 shadow-lg z-10"
            aria-label="Next plan"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
