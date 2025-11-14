import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Básico",
      price: "R$399,90",
      implementation: "R$799,90",
      features: [
        "Agente de IA integrada com Planilhas",
        "Suporte via WhatsApp"
      ],
      popular: false
    },
    {
      name: "Intermediário", 
      price: "R$599,90",
      implementation: "R$799,90",
      features: [
        "Agente de IA integrada com banco de dados",
        "Mensagens programadas ou agendamento de mensagens",
        "Suporte prioritário via WhatsApp"
      ],
      popular: true
    },
    {
      name: "Plus",
      price: "R$799,90", 
      implementation: "R$799,90",
      features: [
        "Agente de IA integrada com banco de dados",
        "Mensagens programadas com interface de agendamento",
        "Disparo automático de mensagens",
        "Suporte prioritário via WhatsApp"
      ],
      popular: false
    },
    {
      name: "Interprise",
      price: "Sob consulta",
      implementation: "Personalizado",
      subtitle: "Sua automação do seu jeito",
      features: [
        "Agente de IA integrada com banco de dados",
        "Mensagens programadas",
        "Disparo de mensagens automático",
        "Funcionalidades personalizadas",
        "Suporte dedicado via WhatsApp"
      ],
      popular: false
    }
  ];

  return (
    <section id="precos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Assinaturas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal para suas necessidades de automação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-card border rounded-2xl p-8 relative ${
                plan.popular ? 'ring-2 ring-primary scale-105 border-primary' : 'border-border'
              } hover:scale-105 transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Mais Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                {plan.subtitle && (
                  <p className="text-muted-foreground text-sm mb-4">{plan.subtitle}</p>
                )}
                <div className="text-3xl font-bold text-primary mb-2">
                  {plan.price}
                </div>
                <div className="text-muted-foreground text-sm">
                  /mês
                </div>
              </div>

              <div className="mb-8">
                <div className="text-muted-foreground text-sm mb-2">Implementação:</div>
                <div className="text-xl font-semibold text-foreground">
                  {plan.implementation}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="https://wa.me/qr/S2LLH6YRFMOGN1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold transition-all transform hover:scale-105 block text-center"
              >
                Escolher Plano
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            Todos os planos incluem atualizações gratuitas
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
