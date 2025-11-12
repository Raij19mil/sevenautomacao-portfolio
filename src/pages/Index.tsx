
import Hero from '../components/Hero';
import Services from '../components/Services';
import Pricing from '../components/Pricing';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Pricing />
      <div className="bg-secondary py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Pronto para automatizar seu negócio?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Entre em contato conosco pelo WhatsApp e descubra como podemos transformar seus processos
          </p>
          <a 
            href="https://wa.me/qr/S2LLH6YRFMOGN1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
