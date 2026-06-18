import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Repeat, CheckCircle, Calendar, MessageSquare, Link2, BarChart3 } from 'lucide-react';

const FollowUp = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(25_95%_53%/0.1),transparent_70%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-followup rounded-2xl mb-6">
              <Repeat className="w-10 h-10 text-followup-foreground" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Plataforma de <span className="text-gradient">Followup</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Sistema inteligente de follow-up automatizado para manter seus clientes engajados e nunca perder uma oportunidade de negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold text-foreground">O que é?</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Plataforma de Followup é uma solução completa para gestão de acompanhamento de clientes,
                combinando automação inteligente com integrações poderosas para garantir que nenhum lead
                seja esquecido.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com painel administrativo completo, agendamentos automáticos e integração nativa com
                Chatwoot e WhatTicket, você mantém a comunicação fluida e personalizada em cada etapa
                do funil de vendas.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-followup/20 rounded-2xl p-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold text-foreground mb-6">Benefícios</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-followup flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Follow-up automatizado sem interrupções</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-followup flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Painel administrativo com métricas em tempo real</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-followup flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Integração nativa com Chatwoot e WhatTicket</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-followup flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Agendamentos inteligentes de mensagens</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-followup flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">Gestão completa de clientes e status</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Funcionalidades Principais</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card/30 backdrop-blur-sm border border-followup/20 rounded-2xl p-6 hover:scale-105 transition-all hover:shadow-[0_0_30px_hsl(25_95%_53%/0.3)]">
                <Calendar className="w-10 h-10 text-followup mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Agendamentos</h3>
                <p className="text-muted-foreground">
                  Programe mensagens de follow-up automaticamente com base em triggers e comportamentos do cliente
                </p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-followup/20 rounded-2xl p-6 hover:scale-105 transition-all hover:shadow-[0_0_30px_hsl(25_95%_53%/0.3)]">
                <MessageSquare className="w-10 h-10 text-followup mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Mensagens Inteligentes</h3>
                <p className="text-muted-foreground">
                  Personalize templates de mensagens com variáveis dinâmicas para comunicação humanizada
                </p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-followup/20 rounded-2xl p-6 hover:scale-105 transition-all hover:shadow-[0_0_30px_hsl(25_95%_53%/0.3)]">
                <Link2 className="w-10 h-10 text-followup mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Integrações</h3>
                <p className="text-muted-foreground">
                  Conecte-se com Chatwoot, WhatTicket e webhooks para fluxos de atendimento unificados
                </p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-followup/20 rounded-2xl p-6 hover:scale-105 transition-all hover:shadow-[0_0_30px_hsl(25_95%_53%/0.3)]">
                <BarChart3 className="w-10 h-10 text-followup mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Dashboard</h3>
                <p className="text-muted-foreground">
                  Visualize clientes, mensagens enviadas, pendentes e enviados em tempo real
                </p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-followup/20 rounded-2xl p-6 hover:scale-105 transition-all hover:shadow-[0_0_30px_hsl(25_95%_53%/0.3)]">
                <Repeat className="w-10 h-10 text-followup mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Automação</h3>
                <p className="text-muted-foreground">
                  Crie fluxos automáticos de follow-up baseados em respostas, tempo ou ações específicas
                </p>
              </div>
              <div className="bg-card/30 backdrop-blur-sm border border-followup/20 rounded-2xl p-6 hover:scale-105 transition-all hover:shadow-[0_0_30px_hsl(25_95%_53%/0.3)]">
                <CheckCircle className="w-10 h-10 text-followup mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-3">Status Tracking</h3>
                <p className="text-muted-foreground">
                  Acompanhe o status de cada mensagem: enviada, entregue, lida ou respondida
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-card/30 backdrop-blur-sm border border-followup/20 rounded-3xl p-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-3xl font-bold text-foreground mb-6">Nunca mais perca um lead</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato e descubra como a Plataforma de Followup pode transformar seu relacionamento com clientes
            </p>
            <a 
              href="https://wa.me/qr/S2LLH6YRFMOGN1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-followup hover:bg-followup/90 text-followup-foreground font-bold py-5 px-10 rounded-xl text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_40px_hsl(25_95%_53%/0.4)] border border-followup/20"
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

export default FollowUp;