import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Pricing />
      <div className="relative bg-secondary py-20 text-center overflow-hidden animate-fade-in">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(165_70%_38%/0.1),transparent_70%)]"></div>
        <div className="relative max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Pronto para o <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">futuro</span>?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
            Junte-se à nova geração de empresas que automatizam com inteligência. 
            Fale com a gente no WhatsApp e descubra como a Seven pode transformar seu negócio.
          </p>
          <a 
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
