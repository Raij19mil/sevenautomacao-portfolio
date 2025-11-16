import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MessagesSquare, CheckCircle, Zap } from 'lucide-react';

const ChatPlatform = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(165_70%_38%/0.1),transparent_70%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-2xl mb-6">
              <MessagesSquare className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Plataforma de <span className="text-gradient">Chat</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sistema completo de chat em tempo real para comunicação eficiente e moderna com seus clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold text-foreground">O que é?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Uma plataforma completa de chat que centraliza todas as conversas com seus clientes em um único lugar, 
                integrando múltiplos canais e oferecendo recursos avançados de gerenciamento.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com interface moderna e intuitiva, sua equipe pode atender mais clientes com maior eficiência, 
                enquanto mantém a qualidade e personalização do atendimento.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold text-foreground mb-6">Benefícios</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Centralização de múltiplos canais</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Respostas rápidas e templates</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Distribuição inteligente de atendimentos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Histórico completo de conversas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Métricas de performance da equipe</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Exemplos de Uso</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Atendimento</h3>
                <p className="text-muted-foreground">
                  Suporte ao cliente multicanal com fila inteligente e distribuição automática de tickets
                </p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Vendas</h3>
                <p className="text-muted-foreground">
                  Conversão de leads, qualificação de oportunidades e fechamento de negócios via chat
                </p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Colaboração</h3>
                <p className="text-muted-foreground">
                  Comunicação interna da equipe integrada ao atendimento externo
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-card/30 backdrop-blur-sm border border-primary/20 rounded-3xl p-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-3xl font-bold text-foreground mb-6">Revolucione seu atendimento</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Fale conosco e descubra como nossa plataforma de chat pode transformar a comunicação do seu negócio
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

export default ChatPlatform;
