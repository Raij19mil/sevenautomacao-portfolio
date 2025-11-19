import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, useTexture } from '@react-three/drei';
import { Suspense, useState } from 'react';
import { Bot, Database, Zap, MessageSquare, Calendar, BarChart, Users, Sparkles } from 'lucide-react';
import * as THREE from 'three';
import logo3d from '@/assets/logo-3d.png';

const Logo3DPlane = ({ isHovered }: { isHovered: boolean }) => {
  const texture = useTexture(logo3d);
  
  return (
    <Float
      speed={2}
      rotationIntensity={0.3}
      floatIntensity={0.5}
    >
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial 
          map={texture} 
          transparent 
          opacity={isHovered ? 0.7 : 1}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
};

const TechSymbol = ({ position, icon: Icon, delay }: { position: [number, number, number], icon: any, delay: number }) => {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.8}
      floatingRange={[-0.2, 0.2]}
    >
      <mesh position={position}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial 
          color="#2dd4bf" 
          emissive="#2dd4bf"
          emissiveIntensity={0.5}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
};

const Scene = ({ isHovered }: { isHovered: boolean }) => {
  const symbolPositions: [number, number, number][] = [
    [-3, 2, -1],
    [3, 2, -1],
    [-3, -2, -1],
    [3, -2, -1],
    [-2, 0, -2],
    [2, 0, -2],
    [0, 3, -1.5],
    [0, -3, -1.5],
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#2dd4bf" />
      
      <Suspense fallback={null}>
        <Logo3DPlane isHovered={isHovered} />
        
        {isHovered && symbolPositions.map((pos, idx) => (
          <TechSymbol 
            key={idx} 
            position={pos} 
            icon={Bot}
            delay={idx * 0.1}
          />
        ))}
      </Suspense>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate={!isHovered}
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
};

const Hero3D = () => {
  const [isHovered, setIsHovered] = useState(false);

  const icons = [
    { Icon: Bot, label: 'IA' },
    { Icon: Database, label: 'Dados' },
    { Icon: Zap, label: 'Automação' },
    { Icon: MessageSquare, label: 'Chat' },
    { Icon: Calendar, label: 'Agenda' },
    { Icon: BarChart, label: 'Analytics' },
    { Icon: Users, label: 'RH' },
    { Icon: Sparkles, label: 'Inovação' },
  ];

  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-background text-foreground overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(165_70%_38%/0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(165_70%_38%/0.1),transparent_70%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-sm mb-4 animate-slide-up">
              A nova geração de automação
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Automação
              <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Inteligente
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A Seven é a juventude em formato de automação. Transformamos processos com tecnologia de ponta, 
              criando soluções que conectam sua empresa ao futuro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/qr/S2LLH6YRFMOGN1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 text-center hover:shadow-[0_0_40px_hsl(165_70%_38%/0.4)] border border-primary/20"
              >
                Começar Agora
              </a>
            </div>
          </div>

          {/* Right side - 3D Canvas */}
          <div className="relative h-[600px] animate-fade-in">
            <div 
              className="absolute inset-0 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                <Scene isHovered={isHovered} />
              </Canvas>
            </div>

            {/* Tech icons overlay */}
            {isHovered && (
              <div className="absolute inset-0 pointer-events-none">
                {icons.map(({ Icon, label }, idx) => {
                  const angle = (idx / icons.length) * Math.PI * 2;
                  const radius = 180;
                  const x = Math.cos(angle) * radius + 50;
                  const y = Math.sin(angle) * radius + 50;
                  
                  return (
                    <div
                      key={idx}
                      className="absolute animate-fade-in"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)',
                        animationDelay: `${idx * 0.1}s`,
                      }}
                    >
                      <div className="flex flex-col items-center gap-1 text-primary">
                        <div className="bg-primary/10 border border-primary/30 rounded-full p-2 backdrop-blur-sm">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-semibold">{label}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Hover instruction */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center">
              <p className="text-sm text-muted-foreground animate-fade-in">
                {isHovered ? 'Explore nossa tecnologia' : 'Passe o mouse para interagir'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3D;
