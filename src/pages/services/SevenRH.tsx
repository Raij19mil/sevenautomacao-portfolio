import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Users, CheckCircle, Target } from 'lucide-react';

const SevenRH = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(260_70%_58%/0.1),transparent_70%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-seven rounded-2xl mb-6">
              <Users className="w-10 h-10 text-seven-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Seven <span className="bg-gradient-to-r from-seven to-seven/70 bg-clip-text text-transparent">RH Platform</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Plataforma completa de Recursos Humanos para gestão de pessoas, recrutamento e desenvolvimento de talentos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold text-foreground">O que é?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Seven RH Platform é uma solução completa para gestão de recursos humanos, combinando 
                tecnologia de ponta com as melhores práticas de gestão de pessoas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Do recrutamento ao desenvolvimento contínuo, nossa plataforma centraliza todos os processos 
                de RH, tornando a gestão de pessoas mais estratégica e eficiente.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-seven/20 rounded-2xl p-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold text-foreground mb-6">Benefícios</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-seven flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Recrutamento e seleção otimizados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-seven flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Gestão de performance e desenvolvimento</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-seven flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Controle de ponto e folha de pagamento</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-seven flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Treinamento e capacitação integrados</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-seven flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Analytics de people para decisões estratégicas</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Módulos Principais</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card/30 backdrop-blur-sm border border-seven/20 rounded-2xl p-6 hover:scale-105 transition-all hover:shadow-[0_0_30px_hsl(260_70%_58%/0.3)]">
                <Target className="w-10 h-10 text-seven mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Recrutamento</h3>
                <p className="text-muted-foreground">
                  ATS completo, triagem automática de currículos, agendamento de entrevistas e onboarding digital
                </p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-seven/20 rounded-2xl p-6 hover:scale-105 transition-all hover:shadow-[0_0_30px_hsl(260_70%_58%/0.3)]">
                <Target className="w-10 h-10 text-seven mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Gestão</h3>
                <p className="text-muted-foreground">
                  Avaliação de desempenho, PDI, feedback 360°, gestão de benefícios e folha de pagamento
                </p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-seven/20 rounded-2xl p-6 hover:scale-105 transition-all hover:shadow-[0_0_30px_hsl(260_70%_58%/0.3)]">
                <Target className="w-10 h-10 text-seven mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Desenvolvimento</h3>
                <p className="text-muted-foreground">
                  LMS integrado, trilhas de aprendizado, certificações e acompanhamento de evolução
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-card/30 backdrop-blur-sm border border-seven/20 rounded-3xl p-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-3xl font-bold text-foreground mb-6">Revolucione sua gestão de pessoas</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato e descubra como a Seven RH Platform pode transformar o RH da sua empresa
            </p>
            <a 
              href="https://wa.me/qr/S2LLH6YRFMOGN1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-seven hover:bg-seven/90 text-seven-foreground font-bold py-5 px-10 rounded-xl text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_40px_hsl(260_70%_58%/0.4)] border border-seven/20"
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

export default SevenRH;
