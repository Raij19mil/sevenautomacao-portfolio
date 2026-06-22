import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense, useMemo, useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

/**
 * Minimalist Black Hole
 * - Matte black event horizon sphere
 * - Ethereal accretion disk made of particles + soft ring shells
 * - Subtle gravitational lensing fresnel ring
 * - Idle slow CW rotation, parallax tilt on mouse, OrbitControls for drag
 */

const EventHorizon = () => {
  return (
    <mesh>
      <sphereGeometry args={[1, 64, 64]} />
      <meshBasicMaterial color="#000000" />
    </mesh>
  );
};

// Soft fresnel "lensing" halo on the silhouette edge
const LensingHalo = () => {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        side: THREE.FrontSide,
        blending: THREE.AdditiveBlending,
        uniforms: {
          uColor: { value: new THREE.Color('#cfe6ff') },
        },
        vertexShader: `
          varying vec3 vNormal;
          varying vec3 vViewDir;
          void main() {
            vec4 mv = modelViewMatrix * vec4(position, 1.0);
            vNormal = normalize(normalMatrix * normal);
            vViewDir = normalize(-mv.xyz);
            gl_Position = projectionMatrix * mv;
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          varying vec3 vViewDir;
          uniform vec3 uColor;
          void main() {
            float fres = 1.0 - max(dot(normalize(vNormal), normalize(vViewDir)), 0.0);
            float rim = pow(fres, 3.5);
            float alpha = smoothstep(0.0, 1.0, rim) * 0.55;
            gl_FragColor = vec4(uColor, alpha);
          }
        `,
      }),
    []
  );
  return (
    <mesh scale={1.08}>
      <sphereGeometry args={[1, 64, 64]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

// Soft translucent ring shells for the nebulous look
const RingShell = ({
  inner,
  outer,
  color,
  opacity,
  thickness,
}: {
  inner: number;
  outer: number;
  color: string;
  opacity: number;
  thickness: number;
}) => {
  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        uniforms: {
          uColor: { value: new THREE.Color(color) },
          uOpacity: { value: opacity },
          uInner: { value: inner },
          uOuter: { value: outer },
        },
        vertexShader: `
          varying vec2 vUv;
          varying vec3 vPos;
          void main() {
            vUv = uv;
            vPos = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          varying vec3 vPos;
          uniform vec3 uColor;
          uniform float uOpacity;
          uniform float uInner;
          uniform float uOuter;
          void main() {
            float r = length(vPos.xy);
            float t = (r - uInner) / (uOuter - uInner);
            // soft band, fade at edges
            float band = smoothstep(0.0, 0.25, t) * (1.0 - smoothstep(0.75, 1.0, t));
            // angular subtle variation
            float a = atan(vPos.y, vPos.x);
            float noise = 0.75 + 0.25 * sin(a * 3.0);
            float alpha = band * uOpacity * noise;
            gl_FragColor = vec4(uColor, alpha);
          }
        `,
      }),
    [color, inner, opacity, outer]
  );
  return (
    <mesh rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[inner, outer, 128, 1]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
};

const AccretionParticles = ({ count = 4000 }: { count?: number }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const { geometry, material } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const seeds = new Float32Array(count);

    const colA = new THREE.Color('#ffffff');
    const colB = new THREE.Color('#bcd4ff');
    const colC = new THREE.Color('#7fd9e8'); // subtle cyan accent

    for (let i = 0; i < count; i++) {
      // radius distribution: more density near inner edge
      const r = 1.35 + Math.pow(Math.random(), 1.6) * 1.9; // 1.35 - 3.25
      const theta = Math.random() * Math.PI * 2;
      const thickness = (1 - (r - 1.35) / 1.9) * 0.18 + 0.04;
      const y = (Math.random() - 0.5) * thickness;

      positions[i * 3 + 0] = Math.cos(theta) * r;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = Math.sin(theta) * r;

      const t = Math.random();
      const c = t < 0.7 ? colA : t < 0.95 ? colB : colC;
      colors[i * 3 + 0] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      sizes[i] = Math.random() * 0.035 + 0.012;
      seeds[i] = Math.random() * Math.PI * 2;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('aSeed', new THREE.BufferAttribute(seeds, 1));

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      vertexShader: `
        attribute float aSize;
        attribute float aSeed;
        varying vec3 vColor;
        varying float vAlpha;
        uniform float uTime;
        uniform float uPixelRatio;
        void main() {
          vColor = color;
          // Orbit speed by inverse radius (Keplerian-ish, CW around Y)
          float r = length(position.xz);
          float angle = atan(position.z, position.x);
          float speed = 0.35 / pow(r, 1.1);
          float a = angle - uTime * speed; // negative => clockwise looking from +Y
          vec3 p = vec3(cos(a) * r, position.y, sin(a) * r);

          // subtle vertical breathing
          p.y += sin(uTime * 0.6 + aSeed) * 0.01;

          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = aSize * 300.0 * uPixelRatio / -mv.z;

          // fade by distance to inner/outer
          float fade = smoothstep(1.35, 1.6, r) * (1.0 - smoothstep(2.9, 3.25, r));
          vAlpha = fade;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;
        void main() {
          vec2 c = gl_PointCoord - 0.5;
          float d = length(c);
          float a = smoothstep(0.5, 0.0, d);
          gl_FragColor = vec4(vColor, a * vAlpha * 0.9);
        }
      `,
      vertexColors: true,
    });

    return { geometry, material };
  }, [count]);

  useFrame((_, dt) => {
    material.uniforms.uTime.value += dt;
  });

  useEffect(() => () => {
    geometry.dispose();
    material.dispose();
  }, [geometry, material]);

  return <points ref={pointsRef} geometry={geometry} material={material} />;
};

const BlackHoleGroup = ({
  mouse,
  isDragging,
}: {
  mouse: React.MutableRefObject<{ x: number; y: number }>;
  isDragging: React.MutableRefObject<boolean>;
}) => {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Group>(null);

  useFrame((_, dt) => {
    if (inner.current) {
      // continuous slow CW rotation around Y (looking from +Y, CW = negative)
      inner.current.rotation.y -= dt * 0.08;
    }
    if (group.current && !isDragging.current) {
      // parallax tilt towards mouse, eased
      const targetX = -mouse.current.y * 0.25;
      const targetY = mouse.current.x * 0.35;
      group.current.rotation.x += (targetX - group.current.rotation.x) * 0.05;
      group.current.rotation.y += (targetY - group.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={group}>
      <group ref={inner} rotation={[Math.PI * 0.18, 0, Math.PI * 0.08]}>
        <EventHorizon />
        <LensingHalo />
        <RingShell inner={1.4} outer={2.0} color="#e6f0ff" opacity={0.18} thickness={0.02} />
        <RingShell inner={1.8} outer={2.8} color="#b8d2f0" opacity={0.14} thickness={0.02} />
        <RingShell inner={2.4} outer={3.3} color="#9fd3e0" opacity={0.08} thickness={0.02} />
        <AccretionParticles count={4500} />
      </group>
    </group>
  );
};

const Scene = () => {
  const mouse = useRef({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const { gl } = useThree();

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  useEffect(() => {
    const dom = gl.domElement;
    const down = () => (isDragging.current = true);
    const up = () => {
      // small delay so OrbitControls damping eases out before parallax retakes
      setTimeout(() => (isDragging.current = false), 700);
    };
    dom.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);
    return () => {
      dom.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
    };
  }, [gl]);

  return (
    <>
      <BlackHoleGroup mouse={mouse} isDragging={isDragging} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.6}
        autoRotate={false}
      />
    </>
  );
};

const BlackHole3D = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  return (
    <div className="relative w-full h-full min-h-[420px] aspect-square">
      {ready && (
        <Canvas
          gl={{ antialias: true, alpha: true, premultipliedAlpha: false }}
          dpr={[1, 2]}
          camera={{ position: [0, 0.6, 6.2], fov: 42 }}
          style={{ background: 'transparent' }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
};

export default BlackHole3D;
