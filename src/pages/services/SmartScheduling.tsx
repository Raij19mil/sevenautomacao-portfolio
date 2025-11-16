import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Calendar, CheckCircle, Clock } from 'lucide-react';

const SmartScheduling = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(165_70%_38%/0.1),transparent_70%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-2xl mb-6">
              <Calendar className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Agendamento <span className="text-gradient">Inteligente</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sistema de agendamento com IA para otimizar horários e recursos disponíveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold text-foreground">O que é?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Plataforma de agendamento que utiliza inteligência artificial para otimizar a alocação 
                de horários, recursos e profissionais, maximizando a eficiência operacional.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                O sistema aprende com padrões históricos e sugere os melhores horários automaticamente, 
                reduzindo conflitos e otimizando a utilização de recursos.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold text-foreground mb-6">Benefícios</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Otimização automática de agenda</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Redução de no-shows com lembretes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Integração com calendários externos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Gestão de múltiplos profissionais</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Relatórios de ocupação e performance</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Exemplos de Uso</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Saúde</h3>
                <p className="text-muted-foreground">
                  Agendamento de consultas, exames e procedimentos com otimização de sala e profissionais
                </p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Serviços</h3>
                <p className="text-muted-foreground">
                  Salões de beleza, academias e prestadores de serviço com gestão inteligente de horários
                </p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all">
                <Clock className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Educação</h3>
                <p className="text-muted-foreground">
                  Agendamento de aulas, mentorias e uso de salas com prevenção de conflitos
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-card/30 backdrop-blur-sm border border-primary/20 rounded-3xl p-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-3xl font-bold text-foreground mb-6">Otimize seus agendamentos</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Fale conosco e descubra como agendamento inteligente pode revolucionar sua operação
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

export default SmartScheduling;
