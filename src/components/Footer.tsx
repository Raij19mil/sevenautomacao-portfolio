
import { Bot, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">AutoTech</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformando negócios através da automação inteligente e soluções personalizadas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-accent transition-colors">Agentes de IA</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Automação</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Integração</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Suporte</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-accent transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Carreiras</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 AutoTech. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
