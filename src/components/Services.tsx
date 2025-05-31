
import { Bot, Database, MessageSquare, Zap, Calendar, BarChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "Agente de IA",
      description: "Assistentes virtuais inteligentes para atendimento automatizado e suporte ao cliente 24/7."
    },
    {
      icon: Database,
      title: "Integração com Banco de Dados",
      description: "Conecte seus dados de forma segura e eficiente para análises e automações avançadas."
    },
    {
      icon: MessageSquare,
      title: "Mensagens Programadas",
      description: "Sistema de comunicação automatizada com agendamento e personalização avançada."
    },
    {
      icon: Zap,
      title: "Disparo Automático",
      description: "Automatize envios de mensagens, e-mails e notificações baseados em triggers específicos."
    },
    {
      icon: Calendar,
      title: "Agendamento Inteligente",
      description: "Sistema de agendamento com IA para otimizar horários e recursos disponíveis."
    },
    {
      icon: BarChart,
      title: "Relatórios e Analytics",
      description: "Dashboards completos com métricas em tempo real para acompanhar performance."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas de automação para transformar a forma como você trabalha
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
