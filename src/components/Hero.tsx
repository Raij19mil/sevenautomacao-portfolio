
import { Bot, Zap, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center bg-gradient-to-br from-primary via-secondary to-accent text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Automação
              <span className="block text-accent">Inteligente</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Transforme seu negócio com soluções de automação personalizadas. 
              Agentes de IA integrados com banco de dados e mensagens programadas 
              para otimizar seus processos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-accent hover:bg-orange-light text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105">
                Começar Agora
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all">
                Ver Demonstração
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform rotate-2 hover:rotate-0 transition-transform">
                <Bot className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">IA Integrada</h3>
                <p className="text-sm text-white/80">Agentes inteligentes com banco de dados</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform -rotate-2 hover:rotate-0 transition-transform mt-8">
                <Zap className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">Automação</h3>
                <p className="text-sm text-white/80">Processos automatizados e eficientes</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 transform rotate-1 hover:rotate-0 transition-transform -mt-4">
                <Rocket className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-lg font-semibold mb-2">Crescimento</h3>
                <p className="text-sm text-white/80">Escale seu negócio rapidamente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
