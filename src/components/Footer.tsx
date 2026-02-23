
import { Instagram, ExternalLink } from 'lucide-react';
import sevenLogo from '@/assets/seven-logo-text.png';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src={sevenLogo} alt="Seven Logo" className="h-8 object-contain" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Transformando negócios através da automação inteligente e soluções personalizadas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Serviços</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Agentes de IA</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Automação</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Integração</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Suporte</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Empresa</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/sobre" className="hover:text-primary transition-colors">Sobre</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-foreground">Entre em Contato</h3>
            <div className="flex flex-col space-y-3">
              <a href="https://www.instagram.com/automacoesseven/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
                <span>@automacoesseven</span>
              </a>
              <a href="https://linktr.ee/sevenauto?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnkcS2-8tr5A2gjxPl4U3U6gkSNWq9O0sC2yYykOuYkOJOaKHS-hM-PnkeBA4_aem_EecYubiKwDUllE_8tQKGiA" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink className="w-5 h-5" />
                <span>Linktree</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>© 2024 Seven. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>);

};

export default Footer;