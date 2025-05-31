
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pronto para transformar seu negócio? Fale conosco e descubra como podemos ajudar
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Telefone</h3>
                <p className="text-gray-300">(11) 99999-9999</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">E-mail</h3>
                <p className="text-gray-300">contato@autotech.com.br</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">Endereço</h3>
                <p className="text-gray-300">São Paulo, SP - Brasil</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">Nome</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">E-mail</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">Mensagem</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Como podemos ajudar você?"
                ></textarea>
              </div>
              
              <button className="w-full bg-accent hover:bg-orange-light text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
