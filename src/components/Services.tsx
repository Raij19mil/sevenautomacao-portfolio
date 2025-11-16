
import { Bot, Database, MessageSquare, Zap, Calendar, BarChart, MessagesSquare, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Agente de IA",
      description: "Assistentes virtuais inteligentes para atendimento automatizado e suporte ao cliente 24/7.",
      color: "primary"
    },
    {
      icon: Database,
      title: "Integração com Banco de Dados",
      description: "Conecte seus dados de forma segura e eficiente para análises e automações avançadas.",
      color: "primary"
    },
    {
      icon: MessageSquare,
      title: "Mensagens Programadas",
      description: "Sistema de comunicação automatizada com agendamento e personalização avançada.",
      color: "primary"
    },
    {
      icon: MessagesSquare,
      title: "Plataforma de Chat",
      description: "Sistema completo de chat em tempo real para comunicação eficiente com seus clientes.",
      color: "primary"
    },
    {
      icon: Zap,
      title: "Disparo Automático",
      description: "Automatize envios de mensagens, e-mails e notificações baseados em triggers específicos.",
      color: "primary"
    },
    {
      icon: Calendar,
      title: "Agendamento Inteligente",
      description: "Sistema de agendamento com IA para otimizar horários e recursos disponíveis.",
      color: "primary"
    },
    {
      icon: BarChart,
      title: "Relatórios e Analytics",
      description: "Dashboards completos com métricas em tempo real para acompanhar performance.",
      color: "primary"
    },
    {
      icon: Users,
      title: "Seven RH Platform",
      description: "Plataforma completa de Recursos Humanos para gestão de pessoas, recrutamento e desenvolvimento de talentos.",
      color: "seven"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soluções completas de automação para transformar a forma como você trabalha
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const serviceLinks: { [key: string]: string } = {
              'Agente de IA': '/servicos/agente-ia',
              'Integração com Banco de Dados': '/servicos/banco-dados',
              'Mensagens Programadas': '/servicos/mensagens-programadas',
              'Plataforma de Chat': '/servicos/plataforma-chat',
              'Disparo Automático': '/servicos/disparo-automatico',
              'Agendamento Inteligente': '/servicos/agendamento-inteligente',
              'Relatórios e Analytics': '/servicos/analytics',
              'Seven RH Platform': '/servicos/seven-rh',
            };
            
            return (
              <a
                href={serviceLinks[service.title]}
                key={index}
                className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/50 hover:scale-105 transition-all group hover:shadow-[0_0_30px_hsl(165_70%_38%/0.2)] animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${service.color === 'seven' ? 'bg-seven' : 'bg-primary'} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-8 h-8 ${service.color === 'seven' ? 'text-seven-foreground' : 'text-primary-foreground'}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="text-primary font-semibold group-hover:text-primary-glow transition-colors">
                  Saiba mais →
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
