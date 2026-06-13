
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
    <nav className="fixed top-0 w-full z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* LEFT: pill cluster */}
        <div className="hidden md:flex items-center gap-2">
          <div className="flex items-center bg-background/70 backdrop-blur-xl border border-border/60 rounded-full overflow-hidden">
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                onClick={() => setIsServicesOpen((v) => !v)}
                className="flex items-center gap-1.5 px-5 py-2.5 text-xs uppercase tracking-[0.14em] text-foreground hover:text-primary transition-colors"
              >
                <Menu className="w-3.5 h-3.5" strokeWidth={1.5} />
                Menu
                <ChevronDown className={`w-3 h-3 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} strokeWidth={1.5} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 w-64 pt-3 animate-fade-in">
                  <div className="bg-background/95 backdrop-blur-xl border border-border rounded-md py-2">
                    <Link to="/" onClick={() => setIsServicesOpen(false)} className="block px-4 py-2 text-xs uppercase tracking-[0.1em] text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors">Início</Link>
                    <Link to="/sobre" onClick={() => setIsServicesOpen(false)} className="block px-4 py-2 text-xs uppercase tracking-[0.1em] text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors">Sobre Nós</Link>
                    <div className="my-1 border-t border-border/60" />
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.path}
                        onClick={() => setIsServicesOpen(false)}
                        className="block px-4 py-2 text-xs uppercase tracking-[0.08em] text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="w-px h-5 bg-border/60" />
            <a
              href="https://wa.me/qr/S2LLH6YRFMOGN1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs uppercase tracking-[0.14em] text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {/* CENTER: logo */}
        <Link to="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
          <img alt="Seven Logo" className="w-9 h-9 md:w-10 md:h-10 object-contain" src={logo} />
        </Link>

        {/* RIGHT: language-style pill */}
        <div className="hidden md:flex items-center bg-background/70 backdrop-blur-xl border border-border/60 rounded-full">
          <Link to="/" className="px-4 py-2.5 text-xs uppercase tracking-[0.14em] text-primary">PT</Link>
          <span className="w-px h-5 bg-border/60" />
          <a href="https://wa.me/qr/S2LLH6YRFMOGN1" target="_blank" rel="noopener noreferrer" className="px-4 py-2.5 text-xs uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors">WA</a>
        </div>

        {/* MOBILE toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden ml-auto p-2.5 bg-background/70 backdrop-blur-xl border border-border/60 rounded-full text-foreground"
        >
          {isOpen ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-3 bg-background/95 backdrop-blur-xl border border-border rounded-md">
          <div className="px-4 py-3 space-y-1">
            <Link to="/" className="block py-2 text-xs uppercase tracking-[0.14em] text-muted-foreground" onClick={() => setIsOpen(false)}>Início</Link>
            <div className="py-1">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full py-2 text-xs uppercase tracking-[0.14em] text-muted-foreground"
              >
                Serviços
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} strokeWidth={1.5} />
              </button>
              {isServicesOpen && (
                <div className="pl-3 mt-1 space-y-1">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      to={service.path}
                      className="block py-2 text-[11px] uppercase tracking-[0.1em] text-muted-foreground"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/sobre" className="block py-2 text-xs uppercase tracking-[0.14em] text-muted-foreground" onClick={() => setIsOpen(false)}>Sobre Nós</Link>
            <a href="/#precos" className="block py-2 text-xs uppercase tracking-[0.14em] text-muted-foreground" onClick={() => setIsOpen(false)}>Preços</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
