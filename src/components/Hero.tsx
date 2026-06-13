import { BrainCircuit as Bot, Send as Zap, Hexagon as Sparkles } from 'lucide-react';
const Hero = () => {
  return <section id="inicio" className="relative min-h-screen flex items-center bg-background text-foreground pt-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-primary/40 rounded-full blur-[150px] animate-glow"></div>
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-primary/30 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(165_70%_38%/0.15),transparent_70%)]"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-sm mb-4 animate-slide-up">
              A nova geração de automação
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Automação
              <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Inteligente</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A Seven é a juventude em formato de automação. Transformamos processos com tecnologia de ponta, 
              criando soluções que conectam sua empresa ao futuro. Somos modernos, inovadores e profissionais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/qr/S2LLH6YRFMOGN1" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 text-center hover:shadow-[0_0_40px_hsl(165_70%_38%/0.4)] border border-primary/20">
                Começar Agora
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 transform rotate-2 hover:rotate-0 hover:scale-105 hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_hsl(165_70%_38%/0.3)]">
                <Bot className="w-12 h-12 text-primary mb-4 animate-float" />
                <h3 className="text-lg font-bold mb-2 text-foreground">IA Integrada</h3>
                <p className="text-sm text-muted-foreground">Agentes inteligentes com banco de dados</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 transform -rotate-2 hover:rotate-0 hover:scale-105 hover:border-primary/40 transition-all duration-300 mt-8 hover:shadow-[0_0_30px_hsl(165_70%_38%/0.3)]">
                <Zap className="w-12 h-12 text-primary mb-4 animate-float" style={{ animationDelay: '0.5s' }} />
                <h3 className="text-lg font-bold mb-2 text-foreground">Automação</h3>
                <p className="text-sm text-muted-foreground">Processos automatizados e eficientes</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 transform rotate-1 hover:rotate-0 hover:scale-105 hover:border-primary/40 transition-all duration-300 -mt-4 hover:shadow-[0_0_30px_hsl(165_70%_38%/0.3)]">
                <Sparkles className="w-12 h-12 text-primary mb-4 animate-float" style={{ animationDelay: '1s' }} />
                <h3 className="text-lg font-bold mb-2 text-foreground">Inovação</h3>
                <p className="text-sm text-muted-foreground">Tecnologia de ponta sempre</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;