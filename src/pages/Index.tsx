import Navigation from '../components/Navigation';
import HeroLogo from '../components/HeroLogo';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Bot, BarChart, Globe, ArrowRight } from 'lucide-react';
import sevenLogo from '@/assets/seven-logo-text.png';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    icon: Bot,
    title: 'Automações Inteligentes',
    description: 'Criamos fluxos automatizados que eliminam tarefas repetitivas e aceleram processos. Desde chatbots com IA até integrações entre sistemas, tudo pensado para sua operação rodar sozinha.',
    link: '/servicos/agente-ia',
  },
  {
    icon: BarChart,
    title: 'Dashboards & Analytics',
    description: 'Desenvolvemos painéis visuais com dados em tempo real para que você tome decisões baseadas em números, não em achismos. Métricas claras e acionáveis.',
    link: '/servicos/analytics',
  },
  {
    icon: Globe,
    title: 'Sites Modernos',
    description: 'Criamos sites rápidos, responsivos e otimizados para conversão. Design moderno que transmite profissionalismo e gera resultados para o seu negócio.',
    link: '/servicos/criacao-sites',
  },
];

const Index = () => {
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const ctaTitleRef = useRef<HTMLHeadingElement>(null);
  const ctaTextRef = useRef<HTMLParagraphElement>(null);
  const ctaButtonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ctaTitleRef.current, {
        scrollTrigger: { trigger: ctaSectionRef.current, start: 'top 80%', end: 'top 30%', scrub: 1 },
        y: 80, opacity: 0,
      });
      gsap.from(ctaTextRef.current, {
        scrollTrigger: { trigger: ctaSectionRef.current, start: 'top 75%', end: 'top 30%', scrub: 1 },
        y: 60, opacity: 0,
      });
      gsap.from(ctaButtonRef.current, {
        scrollTrigger: { trigger: ctaSectionRef.current, start: 'top 70%', end: 'top 30%', scrub: 1 },
        y: 40, opacity: 0, scale: 0.9,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroLogo />

      {/* Services Highlights */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <img src={sevenLogo} alt="Seven" className="h-10 md:h-12 mx-auto mb-4 object-contain" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça como transformamos a rotina de empresas com soluções sob medida
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <Link
                key={i}
                to={item.link}
                className="group bg-card/30 border border-primary/10 rounded-2xl p-8 hover:border-primary/40 transition-all hover:shadow-[0_0_30px_hsl(165_70%_38%/0.15)]"
              >
                <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                  Saiba mais <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <Portfolio />
      <Pricing />

      {/* CTA Section */}
      <div ref={ctaSectionRef} className="relative bg-secondary py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(165_70%_38%/0.1),transparent_70%)]"></div>
        <div className="relative max-w-4xl mx-auto px-4">
          <img src={sevenLogo} alt="Seven" className="h-10 md:h-12 mx-auto mb-6 object-contain opacity-60" />
          <h2 ref={ctaTitleRef} className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Pronto para o <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">futuro</span>?
          </h2>
          <p ref={ctaTextRef} className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Com 2 anos de experiência desenvolvendo automações, dashboards e sites, estamos prontos para transformar o seu negócio. Fale com a gente no WhatsApp.
          </p>
          <a
            ref={ctaButtonRef}
            href="https://wa.me/qr/S2LLH6YRFMOGN1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary-glow text-primary-foreground font-bold py-5 px-10 rounded-xl text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_40px_hsl(165_70%_38%/0.4)] border border-primary/20"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;