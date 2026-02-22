import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Sparkles, Target, Lightbulb, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(165_70%_38%/0.1),transparent_70%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Sobre a <span className="text-gradient">Seven</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Somos a juventude em formato de automação. Uma empresa moderna que transforma 
              o futuro dos negócios através da tecnologia inteligente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold text-foreground">Nossa História</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">A Seven nasceu da visão de jovens profissionais que enxergaram o potencial transformador da automação e do desenvolvimento inteligente. Combinamos a energia e inovação da nova geração com expertise técnica para criar soluções que realmente fazem diferença.



              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">Não somos apenas mais uma empresa de tecnologia. Somos o futuro acontecendo agora, onde cada linha de código é escrita pensando em gerar esperança e possibilidades para nossos clientes, criamos a partir de ideias inovadoras em conjunto com nossos cliente, para que engrandeça mais ainda a ideia deles.



              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all hover:shadow-[0_0_30px_hsl(165_70%_38%/0.3)]">
                <Sparkles className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Inovação</h3>
                <p className="text-muted-foreground">Tecnologia de ponta sempre</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all hover:shadow-[0_0_30px_hsl(165_70%_38%/0.3)] mt-8">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Foco</h3>
                <p className="text-muted-foreground">Resultados concretos</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all hover:shadow-[0_0_30px_hsl(165_70%_38%/0.3)] -mt-4">
                <Lightbulb className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Visão</h3>
                <p className="text-muted-foreground">Futuro transformador</p>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:scale-105 transition-all hover:shadow-[0_0_30px_hsl(165_70%_38%/0.3)] mt-4">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Pessoas</h3>
                <p className="text-muted-foreground">Equipe jovem e dedicada</p>
              </div>
            </div>
          </div>

          <div className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-3xl p-12 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h2 className="text-3xl font-bold text-foreground mb-6">Nossa Missão</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">Democratizar o acesso ao desenvolvimento inteligente, transformando empresas de todos os tamanhos através de soluções tecnológicas que combinam profissionalismo com a energia da juventude. Criamos esperança através da inovação, provando que o futuro é agora.



            </p>
          </div>

          <div className="mt-20 text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <h2 className="text-3xl font-bold text-foreground mb-8">Pronto para transformar seu negócio?</h2>
            <a
              href="https://wa.me/qr/S2LLH6YRFMOGN1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary-glow text-primary-foreground font-bold py-5 px-10 rounded-xl text-lg transition-all transform hover:scale-105 hover:shadow-[0_0_40px_hsl(165_70%_38%/0.4)] border border-primary/20">

              Fale Conosco
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>);

};

export default About;