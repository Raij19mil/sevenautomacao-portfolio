import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Bot, CheckCircle, MessageCircle, Settings, SlidersHorizontal } from 'lucide-react';

const AgentBot = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(165_70%_38%/0.1),transparent_70%)]"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-2xl mb-6">
              <Bot className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Agente <span className="text-gradient">Bot</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Bots inteligentes para WhatsApp e outros canais, desenvolvidos sob demanda do jeito que você precisa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold text-foreground">O que é?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Criamos agentes bot completos para automação do seu WhatsApp e outros canais de
                atendimento, capazes de responder automaticamente, qualificar leads, agendar atendimentos
                e encaminhar conversas para humanos quando necessário.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ideal para empresas que querem atender com agilidade sem perder a personalização,
                escalando o atendimento sem aumentar a equipe.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold text-foreground mb-6">Benefícios</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Respostas automáticas e instantâneas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Qualificação automática de leads</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Integração com CRMs e APIs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Transferência inteligente para humanos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Personalização total do fluxo</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Diferenciais</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:scale-105 transition-all">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4">
                  <Bot className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Bots Inteligentes para WhatsApp</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Criamos agentes bot completos para automação do seu WhatsApp, capazes de responder automaticamente,
                  qualificar leads, agendar atendimentos e encaminhar conversas para humanos quando necessário.
                </p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:scale-105 transition-all">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4">
                  <Settings className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Personalização Total</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Oferecemos esse serviço da maneira que o cliente pedir. Seja um bot simples de respostas automáticas
                  ou uma solução complexa com integração a CRMs, APIs e inteligência artificial avançada.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Como Funciona</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 text-2xl font-bold text-primary">1</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Entendemos sua Necessidade</h3>
                <p className="text-muted-foreground">Analisamos seu processo de atendimento e definimos juntos o escopo do bot ideal para o seu negócio.</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 text-2xl font-bold text-primary">2</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Desenvolvimento Sob Demanda</h3>
                <p className="text-muted-foreground">Construímos o agente bot com as funcionalidades, integrações e comportamentos que você solicitou.</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 text-2xl font-bold text-primary">3</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Entrega e Acompanhamento</h3>
                <p className="text-muted-foreground">Entregamos o bot pronto, fazemos testes e ajustes finos conforme o seu feedback em tempo real.</p>
              </div>
            </div>
          </div>

          <div className="text-center bg-card/30 backdrop-blur-sm border border-primary/20 rounded-3xl p-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-3xl font-bold text-foreground mb-6">Pronto para ter seu próprio Agente Bot?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato e desenvolvemos um bot personalizado — do jeito que você precisa — para o seu negócio
            </p>
            <a
              href="https://wa.me/qr/S2LLH6YRFMOGN1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-glow text-primary-foreground font-bold py-5 px-10 rounded-xl text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_40px_hsl(165_70%_38%/0.4)] border border-primary/20"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgentBot;
