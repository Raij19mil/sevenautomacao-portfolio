
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-primary">AutoTech</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">Início</a>
            <a href="#servicos" className="text-muted-foreground hover:text-primary transition-colors">Serviços</a>
            <a href="#precos" className="text-muted-foreground hover:text-primary transition-colors">Preços</a>
            <a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-2 space-y-2">
            <a href="#inicio" className="block py-2 text-muted-foreground">Início</a>
            <a href="#servicos" className="block py-2 text-muted-foreground">Serviços</a>
            <a href="#precos" className="block py-2 text-muted-foreground">Preços</a>
            <a href="#contato" className="block py-2 text-muted-foreground">Contato</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
