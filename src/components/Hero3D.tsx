import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, useTexture, Environment } from '@react-three/drei';
import { Suspense, useState, useRef, useEffect } from 'react';
import { Bot, Database, Zap, MessageSquare, Calendar, BarChart, Users, Sparkles } from 'lucide-react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logoSeven3D from '@/assets/logo-seven-3d.png';
gsap.registerPlugin(ScrollTrigger);
const ParticleField = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 20;
  }
  useFrame(state => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });
  return <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#2dd4bf" transparent opacity={0.6} sizeAttenuation />
    </points>;
};
const Logo3DPlane = ({
  isHovered
}: {
  isHovered: boolean;
}) => {
  const texture = useTexture(logoSeven3D);
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  useFrame(state => {
    if (meshRef.current) {
      // Continuous floating animation
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      if (isHovered) {
        meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.1;
      } else {
        meshRef.current.rotation.y += 0.003;
      }
    }

    // Pulsing glow effect
    if (glowRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      glowRef.current.scale.set(scale, scale, 1);
    }
  });
  return <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <group>
        {/* Outer glow */}
        <mesh ref={glowRef} position={[0, 0, -0.3]}>
          <planeGeometry args={[7.5, 7.5]} />
          <meshStandardMaterial color="#14b8a6" transparent opacity={isHovered ? 0.15 : 0.08} emissive="#14b8a6" emissiveIntensity={0.5} side={THREE.DoubleSide} />
        </mesh>
        
        {/* Main logo */}
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <planeGeometry args={[7, 7]} />
          <meshStandardMaterial map={texture} transparent opacity={1} side={THREE.DoubleSide} emissive="#14b8a6" emissiveIntensity={isHovered ? 0.7 : 0.3} metalness={0.95} roughness={0.05} />
        </mesh>
        
        {/* Animated glow rings */}
        {isHovered && <>
            <mesh position={[0, 0, -0.6]}>
              <torusGeometry args={[3.8, 0.02, 16, 100]} />
              <meshStandardMaterial color="#14b8a6" emissive="#14b8a6" emissiveIntensity={1.5} transparent opacity={0.6} />
            </mesh>
            <mesh position={[0, 0, -0.7]} rotation={[0, 0, Math.PI / 4]}>
              <torusGeometry args={[4.2, 0.015, 16, 100]} />
              <meshStandardMaterial color="#2dd4bf" emissive="#2dd4bf" emissiveIntensity={1.2} transparent opacity={0.4} />
            </mesh>
          </>}
      </group>
    </Float>;
};
const TechSymbol = ({
  position,
  icon: Icon,
  delay,
  index
}: {
  position: [number, number, number];
  icon: any;
  delay: number;
  index: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  useFrame(state => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5 + index;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + index;
    }
    if (glowRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.2;
      glowRef.current.scale.set(scale, scale, scale);
    }
  });
  return <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8} floatingRange={[-0.2, 0.2]}>
      <group position={position}>
        {/* Outer glow sphere */}
        <mesh ref={glowRef}>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshStandardMaterial color="#2dd4bf" emissive="#2dd4bf" emissiveIntensity={0.8} transparent opacity={0.3} />
        </mesh>
        
        {/* Main octahedron */}
        <mesh ref={meshRef}>
          <octahedronGeometry args={[0.15, 0]} />
          <meshStandardMaterial color="#2dd4bf" emissive="#2dd4bf" emissiveIntensity={1} transparent opacity={0.9} metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Connection lines - thinner */}
        <mesh>
          <cylinderGeometry args={[0.005, 0.005, 0.5, 8]} />
          <meshStandardMaterial color="#2dd4bf" emissive="#2dd4bf" emissiveIntensity={0.5} transparent opacity={0.3} />
        </mesh>
      </group>
    </Float>;
};
const Scene = ({
  isHovered,
  mousePosition
}: {
  isHovered: boolean;
  mousePosition: {
    x: number;
    y: number;
  };
}) => {
  const symbolPositions: [number, number, number][] = [[-4, 3, -1], [4, 3, -1], [-4, -3, -1], [4, -3, -1], [-3, 0, -2], [3, 0, -2], [0, 4, -1.5], [0, -4, -1.5]];
  const lightRef = useRef<THREE.PointLight>(null);
  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.x = mousePosition.x * 5;
      lightRef.current.position.y = mousePosition.y * 5;
    }
  });
  return <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <pointLight ref={lightRef} position={[0, 0, 5]} intensity={1.5} color="#2dd4bf" distance={15} />
      <pointLight position={[-5, -5, -2]} intensity={0.5} color="#14b8a6" />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={0.5} color="#2dd4bf" />
      
      <Suspense fallback={null}>
        <ParticleField />
        <Logo3DPlane isHovered={isHovered} />
        
        {isHovered && symbolPositions.map((pos, idx) => <TechSymbol key={idx} position={pos} icon={Bot} delay={idx * 0.1} index={idx} />)}
      </Suspense>
      
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={!isHovered} autoRotateSpeed={0.5} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} enableDamping dampingFactor={0.05} />
    </>;
};
const Hero3D = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    // GSAP animations for text elements with scroll triggers
    const ctx = gsap.context(() => {
      // Initial fade in animation
      gsap.from('.text-corner', {
        opacity: 0,
        y: 80,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.3
      });
      gsap.from('.hero-badge', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: 'back.out(1.7)',
        delay: 0.5
      });

      // Parallax scroll effects for text corners
      gsap.to('.text-corner', {
        scrollTrigger: {
          trigger: '#inicio',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        },
        y: -100,
        opacity: 0.3,
        stagger: 0.1
      });

      // 3D canvas parallax
      gsap.to('.hero-3d-canvas', {
        scrollTrigger: {
          trigger: '#inicio',
          start: 'top top',
          end: 'bottom top',
          scrub: 2
        },
        y: 150,
        scale: 0.8,
        opacity: 0.5
      });

      // Smooth scroll behavior
      gsap.to(window, {
        scrollTrigger: {
          trigger: '#inicio',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    });
    return () => ctx.revert();
  }, []);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * 2 - 1;
    const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    setMousePosition({
      x,
      y
    });
  };
  const icons = [{
    Icon: Bot,
    label: 'IA'
  }, {
    Icon: Database,
    label: 'Dados'
  }, {
    Icon: Zap,
    label: 'Automação'
  }, {
    Icon: MessageSquare,
    label: 'Chat'
  }, {
    Icon: Calendar,
    label: 'Agenda'
  }, {
    Icon: BarChart,
    label: 'Analytics'
  }, {
    Icon: Users,
    label: 'RH'
  }, {
    Icon: Sparkles,
    label: 'Inovação'
  }];
  return <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-background text-foreground overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(165_70%_38%/0.12),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,hsl(165_70%_38%/0.08),transparent_60%)]" />
      
      {/* Top Left - Title */}
      <div className="text-corner absolute top-24 md:top-32 left-8 md:left-16 z-10 max-w-sm md:max-w-md">
        <div className="hero-badge inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-semibold text-xs md:text-sm mb-3">
          A nova geração
        </div>
        <h1 ref={titleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Automação
          <span className="block bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Inteligente
          </span>
        </h1>
      </div>

      {/* Top Right - Description */}
      <div className="text-corner absolute top-24 md:top-32 right-8 md:right-16 z-10 max-w-xs md:max-w-sm text-right">
        <p ref={subtitleRef} className="text-sm md:text-base text-muted-foreground leading-relaxed">
          Transformamos processos com tecnologia de ponta e inovação constante.
        </p>
      </div>

      {/* Bottom Left - Features */}
      

      {/* Bottom Right - CTA */}
      <div className="text-corner absolute bottom-24 md:bottom-32 right-8 md:right-16 z-10">
        <a ref={ctaRef} href="https://wa.me/qr/S2LLH6YRFMOGN1" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary hover:bg-primary-glow text-primary-foreground px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base transition-all transform hover:scale-105 text-center hover:shadow-[0_0_40px_hsl(165_70%_38%/0.4)] border border-primary/20">
          Começar Agora
        </a>
      </div>

      {/* Center - 3D Canvas (Full screen) */}
      <div className="relative w-full h-screen hero-3d-canvas">
        <div className="absolute inset-0 cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onMouseMove={handleMouseMove}>
          <Canvas camera={{
          position: [0, 0, 8],
          fov: 50
        }} gl={{
          antialias: true,
          alpha: true
        }}>
            <Scene isHovered={isHovered} mousePosition={mousePosition} />
          </Canvas>
        </div>

        {/* Tech icons overlay - circular pattern */}
        {isHovered && <div className="absolute inset-0 pointer-events-none">
            {icons.map(({
          Icon,
          label
        }, idx) => {
          const angle = idx / icons.length * Math.PI * 2;
          const radius = 30; // percentage from center
          const x = 50 + Math.cos(angle) * radius;
          const y = 50 + Math.sin(angle) * radius;
          return <div key={idx} className="absolute animate-fade-in" style={{
            left: `${x}%`,
            top: `${y}%`,
            transform: 'translate(-50%, -50%)',
            animationDelay: `${idx * 0.1}s`
          }}>
                  <div className="flex flex-col items-center gap-1 text-primary">
                    <div className="bg-primary/10 border border-primary/20 rounded-full p-2 backdrop-blur-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold">{label}</span>
                  </div>
                </div>;
        })}
          </div>}
      </div>
    </section>;
};
export default Hero3D;