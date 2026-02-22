
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
  { name: 'Agente de IA', path: '/servicos/agente-ia' },
  { name: 'Banco de Dados', path: '/servicos/banco-dados' },
  { name: 'Mensagens Programadas', path: '/servicos/mensagens-programadas' },
  { name: 'Plataforma de Chat', path: '/servicos/plataforma-chat' },
  { name: 'Disparo Automático', path: '/servicos/disparo-automatico' },
  { name: 'Agendamento Inteligente', path: '/servicos/agendamento-inteligente' },
  { name: 'Relatórios e Analytics', path: '/servicos/analytics' },
  { name: 'Seven RH Platform', path: '/servicos/seven-rh' },
  { name: 'Criação de Sites', path: '/servicos/criacao-sites' }];


  return (
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-none z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img alt="Seven Logo" className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain" src="/lovable-uploads/b9afb84a-3bed-4896-b91b-f31b70123483.png" />
            
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Início</Link>
            
            <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                Serviços
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isServicesOpen &&
              <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-xl shadow-lg py-2 animate-fade-in">
                  {services.map((service, index) =>
                <Link
                  key={index}
                  to={service.path}
                  className="block px-4 py-2 text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors">

                      {service.name}
                    </Link>
                )}
                </div>
              }
            </div>
            
            <Link to="/sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre Nós</Link>
            
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground">

            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen &&
      <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="px-4 py-2 space-y-2">
            <Link to="/" className="block py-2 text-muted-foreground" onClick={() => setIsOpen(false)}>Início</Link>
            <div className="py-2">
              <button
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className="flex items-center justify-between w-full text-muted-foreground">

                Serviços
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen &&
            <div className="pl-4 mt-2 space-y-2">
                  {services.map((service, index) =>
              <Link
                key={index}
                to={service.path}
                className="block py-2 text-sm text-muted-foreground"
                onClick={() => setIsOpen(false)}>

                      {service.name}
                    </Link>
              )}
                </div>
            }
            </div>
            <Link to="/sobre" className="block py-2 text-muted-foreground" onClick={() => setIsOpen(false)}>Sobre Nós</Link>
            <a href="/#precos" className="block py-2 text-muted-foreground" onClick={() => setIsOpen(false)}>Preços</a>
          </div>
        </div>
      }
    </nav>);

};

export default Navigation;