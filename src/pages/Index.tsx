import Navigation from '../components/Navigation';
import HeroLogo from '../components/HeroLogo';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const ctaSectionRef = useRef<HTMLDivElement>(null);
  const ctaTitleRef = useRef<HTMLHeadingElement>(null);
  const ctaTextRef = useRef<HTMLParagraphElement>(null);
  const ctaButtonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // CTA section animations
      gsap.from(ctaTitleRef.current, {
        scrollTrigger: {
          trigger: ctaSectionRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1
        },
        y: 80,
        opacity: 0
      });

      gsap.from(ctaTextRef.current, {
        scrollTrigger: {
          trigger: ctaSectionRef.current,
          start: 'top 75%',
          end: 'top 30%',
          scrub: 1
        },
        y: 60,
        opacity: 0
      });

      gsap.from(ctaButtonRef.current, {
        scrollTrigger: {
          trigger: ctaSectionRef.current,
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1
        },
        y: 40,
        opacity: 0,
        scale: 0.9
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroLogo />
      <Services />
      <Pricing />
      <div ref={ctaSectionRef} className="relative bg-secondary py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(165_70%_38%/0.1),transparent_70%)]"></div>
        <div className="relative max-w-4xl mx-auto px-4">
          <h2 ref={ctaTitleRef} className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Pronto para o <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">futuro</span>?
          </h2>
          <p ref={ctaTextRef} className="text-xl text-muted-foreground mb-10 leading-relaxed">Junte-se à nova geração de empresas que desenvolvem e automatizam com inteligência. Fale com a gente no WhatsApp e descubra como a Seven pode transformar seu negócio.


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