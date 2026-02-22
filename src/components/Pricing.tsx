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
          scrub: 1
        },
        y: 100,
        opacity: 0
      });

      // Subtitle animation
      gsap.from(subtitleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1
        },
        y: 80,
        opacity: 0
      });

      // Pricing cards animation
      gsap.from('.pricing-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'top 20%',
          scrub: 1
        },
        y: 100,
        opacity: 0,
        stagger: 0.15
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
    "Suporte via WhatsApp"],

    popular: false
  },
  {
    name: "Intermediário",
    price: "R$599,90",
    implementation: "R$799,90",
    features: [
    "Agente de IA integrada com banco de dados",
    "Mensagens programadas ou agendamento de mensagens",
    "Suporte prioritário via WhatsApp"],

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
    "Suporte prioritário via WhatsApp"],

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
    "Suporte dedicado via WhatsApp"],

    popular: false
  }];


  return (
    <section ref={sectionRef} id="precos" className="py-32 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(165_70%_38%/0.08),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(165_70%_38%/0.08),transparent_60%)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-foreground mb-4">

          </h2>
          <p ref={subtitleRef} className="text-xl text-muted-foreground max-w-3xl mx-auto">

          </p>
        </div>

        <div className="relative">
          {/* Floating Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8 items-stretch">
              {plans.map((plan, index) =>
              <div
                key={index}
                className="pricing-card flex-[0_0_90%] sm:flex-[0_0_70%] lg:flex-[0_0_45%] xl:flex-[0_0_30%] min-w-0">

                  





























































                </div>
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-card/90 backdrop-blur-md border border-primary/20 rounded-full p-4 hover:bg-primary/10 hover:border-primary/40 transition-all hover:scale-110 shadow-lg z-10"
            aria-label="Previous plan">

            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-card/90 backdrop-blur-md border border-primary/20 rounded-full p-4 hover:bg-primary/10 hover:border-primary/40 transition-all hover:scale-110 shadow-lg z-10"
            aria-label="Next plan">

            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>);

};

export default Pricing;