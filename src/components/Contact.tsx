
import { Mail, Phone, MapPin, Send, ExternalLink, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar seu negócio? Fale conosco e descubra como podemos ajudar
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold">Telefone</h3>
                <p className="text-muted-foreground">(11) 99999-9999</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold">E-mail</h3>
                <p className="text-muted-foreground">contato@autotech.com.br</p>
              </div>
            </div>

            <a href="https://www.instagram.com/automacoesseven/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Instagram className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold">Instagram</h3>
                <p className="text-muted-foreground">@automacoesseven</p>
              </div>
            </a>

            <a href="https://linktr.ee/sevenauto?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnkcS2-8tr5A2gjxPl4U3U6gkSNWq9O0sC2yYykOuYkOJOaKHS-hM-PnkeBA4_aem_EecYubiKwDUllE_8tQKGiA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <ExternalLink className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-foreground font-semibold">Linktree</h3>
                <p className="text-muted-foreground">Todos os nossos links</p>
              </div>
            </a>
          </div>

          <div className="bg-card border border-border rounded-xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-foreground font-semibold mb-2">Nome</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label className="block text-foreground font-semibold mb-2">E-mail</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label className="block text-foreground font-semibold mb-2">Mensagem</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Como podemos ajudar você?"
                ></textarea>
              </div>
              
              <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
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
