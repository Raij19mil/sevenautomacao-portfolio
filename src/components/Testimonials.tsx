import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Cliente Seven',
    role: 'Diretor de Operações',
    text: 'A automação que a Seven implementou eliminou horas de trabalho manual da nossa equipe. Em poucas semanas o ROI já era visível.',
  },
  {
    name: 'Cliente Seven',
    role: 'Gerente Comercial',
    text: 'O agente de IA atende nossos clientes 24/7 com qualidade. Resposta rápida, contextualizada e profissional — exatamente como precisávamos.',
  },
  {
    name: 'Cliente Seven',
    role: 'Founder',
    text: 'Saímos do achismo. Os dashboards entregam métricas em tempo real e mudaram completamente a forma como tomamos decisão.',
  },
  {
    name: 'Cliente Seven',
    role: 'Head de Tecnologia',
    text: 'Equipe técnica forte e atendimento próximo. Entregaram além do escopo combinado, e o suporte continua impecável.',
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="bg-background py-24 px-4 md:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <p className="font-mono-label mb-3">— Depoimentos</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              O que dizem sobre a Seven
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              aria-label="Anterior"
              className="w-11 h-11 border border-border hover:border-primary text-foreground hover:text-primary transition-colors flex items-center justify-center"
              style={{ borderRadius: 4 }}
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Próximo"
              className="w-11 h-11 border border-border hover:border-primary text-foreground hover:text-primary transition-colors flex items-center justify-center"
              style={{ borderRadius: 4 }}
            >
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, i) => (
              <article
                key={i}
                className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_32%] bg-card border border-border p-8 flex flex-col justify-between min-h-[280px]"
                style={{ borderRadius: 4 }}
              >
                <Quote className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                <p className="text-foreground text-base leading-relaxed mb-8">"{t.text}"</p>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground mt-1">{t.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
