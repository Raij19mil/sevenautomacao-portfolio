
import { useState } from 'react';
import { Menu, X, Bot } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-primary">AutoTech</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-primary transition-colors">Início</a>
            <a href="#servicos" className="text-gray-700 hover:text-primary transition-colors">Serviços</a>
            <a href="#precos" className="text-gray-700 hover:text-primary transition-colors">Preços</a>
            <a href="#contato" className="text-gray-700 hover:text-primary transition-colors">Contato</a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <a href="#inicio" className="block py-2 text-gray-700">Início</a>
            <a href="#servicos" className="block py-2 text-gray-700">Serviços</a>
            <a href="#precos" className="block py-2 text-gray-700">Preços</a>
            <a href="#contato" className="block py-2 text-gray-700">Contato</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
