import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MessageSquare, CheckCircle, Clock } from 'lucide-react';

const ScheduledMessages = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(165_70%_38%/0.1),transparent_70%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-2xl mb-6">
              <MessageSquare className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Mensagens <span className="text-gradient">Programadas</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sistema de comunicação automatizada com agendamento inteligente e personalização avançada
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold text-foreground">O que é?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa plataforma de mensagens programadas permite criar campanhas de comunicação automatizadas, 
                com agendamento inteligente baseado em comportamento do usuário e eventos específicos.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Envie mensagens personalizadas no momento certo, através dos canais preferidos dos seus clientes, 
                maximizando engajamento e conversão.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold text-foreground mb-6">Benefícios</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Agendamento inteligente baseado em dados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Personalização em massa</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Múltiplos canais (WhatsApp, Email, SMS)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Análise de performance em tempo real</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Segmentação avançada de público</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Exemplos de Uso</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Marketing</h3>
                <p className="text-muted-foreground">
                  Campanhas de e-mail marketing, lembretes de carrinho abandonado e promoções sazonais automáticas
                </p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Relacionamento</h3>
                <p className="text-muted-foreground">
                  Aniversários, follow-ups pós-compra e mensagens de engajamento baseadas em comportamento
                </p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Operacional</h3>
                <p className="text-muted-foreground">
                  Notificações de status, alertas de sistema e comunicados importantes programados
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-card/30 backdrop-blur-sm border border-primary/20 rounded-3xl p-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-3xl font-bold text-foreground mb-6">Automatize sua comunicação</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato e descubra como mensagens programadas podem transformar seu relacionamento com clientes
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

export default ScheduledMessages;
