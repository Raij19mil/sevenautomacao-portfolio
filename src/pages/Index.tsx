import Navigation from '../components/Navigation';
import HeroLogo from '../components/HeroLogo';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import DynamicWord from '../components/DynamicWord';
import Testimonials from '../components/Testimonials';
import MadLibsContact from '../components/MadLibsContact';
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
  link: '/servicos/agente-ia'
},
{
  icon: BarChart,
  title: 'Dashboards & Analytics',
  description: 'Desenvolvemos painéis visuais com dados em tempo real para que você tome decisões baseadas em números, não em achismos. Métricas claras e acionáveis.',
  link: '/servicos/analytics'
},
{
  icon: Globe,
  title: 'Sites Modernos',
  description: 'Criamos sites rápidos, responsivos e otimizados para conversão. Design moderno que transmite profissionalismo e gera resultados para o seu negócio.',
  link: '/servicos/criacao-sites'
}];


const Index = () => {
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const ctaTitleRef = useRef<HTMLHeadingElement>(null);
  const ctaTextRef = useRef<HTMLParagraphElement>(null);
  const ctaButtonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ctaTitleRef.current, {
        scrollTrigger: { trigger: ctaSectionRef.current, start: 'top 80%', end: 'top 30%', scrub: 1 },
        y: 80, opacity: 0
      });
      gsap.from(ctaTextRef.current, {
        scrollTrigger: { trigger: ctaSectionRef.current, start: 'top 75%', end: 'top 30%', scrub: 1 },
        y: 60, opacity: 0
      });
      gsap.from(ctaButtonRef.current, {
        scrollTrigger: { trigger: ctaSectionRef.current, start: 'top 70%', end: 'top 30%', scrub: 1 },
        y: 40, opacity: 0, scale: 0.9
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroLogo />

      <DynamicWord />

      {/* Services Highlights — Chinafy-style colored asymmetric cards */}
      <section className="py-24 px-4 md:px-8 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="font-mono-label mb-3">— Soluções</p>
            <p className="text-2xl md:text-3xl text-foreground max-w-2xl">
              Conheça como transformamos a rotina de empresas com soluções sob medida
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              const palettes = [
                // 1: graphite / warm
                { bg: 'bg-[#1A1A1A]', accent: 'text-foreground', span: 'md:col-span-2', minH: 'min-h-[340px]' },
                // 2: green primary tint (hero card)
                { bg: 'bg-primary', accent: 'text-primary-foreground', span: 'md:col-span-4', minH: 'min-h-[340px]' },
                // 3: cool dark
                { bg: 'bg-[#0F1A18]', accent: 'text-foreground', span: 'md:col-span-6', minH: 'min-h-[260px]' },
              ];
              const p = palettes[i];
              const isPrimary = i === 1;
              return (
                <Link
                  key={i}
                  to={item.link}
                  className={`group relative ${p.bg} ${p.span} ${p.minH} p-8 md:p-10 flex flex-col justify-between overflow-hidden border border-border hover:border-primary transition-colors`}
                  style={{ borderRadius: 4 }}
                >
                  <div className="flex items-start justify-between">
                    <Icon className={`w-9 h-9 ${p.accent}`} strokeWidth={1.5} />
                    <ArrowRight
                      className={`w-5 h-5 ${p.accent} opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all`}
                      strokeWidth={1.5}
                    />
                  </div>

                  <div>
                    <h3 className={`text-3xl md:text-4xl font-bold ${p.accent} mb-4 tracking-tight leading-[1.05]`}>
                      {item.title}
                    </h3>
                    <p
                      className={`${isPrimary ? 'text-primary-foreground/85' : 'text-muted-foreground'} text-sm md:text-base leading-relaxed max-w-xl`}
                    >
                      {item.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>


      <Services />
      <Portfolio />
      

      {/* CTA Section */}
      <div ref={ctaSectionRef} className="relative bg-secondary py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(165_70%_38%/0.1),transparent_70%)]"></div>
        <div className="relative max-w-4xl mx-auto px-4">
          
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
            className="inline-flex items-center justify-center bg-primary hover:bg-primary-glow text-primary-foreground font-bold py-5 px-10 rounded-xl text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_40px_hsl(165_70%_38%/0.4)] border border-primary/20">

            Falar no WhatsApp
          </a>
        </div>
      </div>
      <Footer />
    </div>);

};

export default Index;