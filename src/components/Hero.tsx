import { Bot, Zap, Rocket } from 'lucide-react';
const Hero = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center bg-background text-foreground pt-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary rounded-full blur-[150px] opacity-40"></div>
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-primary rounded-full blur-[120px] opacity-30"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Automação
              <span className="block text-primary">Inteligente</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transforme seu negócio com soluções de automação personalizadas. 
              Agentes de IA integrados com banco de dados e mensagens programadas 
              para otimizar seus processos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/qr/S2LLH6YRFMOGN1" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 text-center">
                Começar Agora
              </a>
              
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-xl p-6 transform rotate-2 hover:rotate-0 transition-transform">
                <Bot className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">IA Integrada</h3>
                <p className="text-sm text-muted-foreground">Agentes inteligentes com banco de dados</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 transform -rotate-2 hover:rotate-0 transition-transform mt-8">
                <Zap className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Automação</h3>
                <p className="text-sm text-muted-foreground">Processos automatizados e eficientes</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 transform rotate-1 hover:rotate-0 transition-transform -mt-4">
                <Rocket className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2 text-foreground">Crescimento</h3>
                <p className="text-sm text-muted-foreground">Escale seu negócio rapidamente sem se precu   </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;