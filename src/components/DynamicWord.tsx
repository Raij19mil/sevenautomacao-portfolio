import { useEffect, useState } from 'react';

const WORDS = ['rápida', 'inteligente', 'segura'];

const DynamicWord = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-28 md:py-40 px-6 overflow-hidden" style={{ backgroundColor: '#0B3A47' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[6vw] md:text-[4.5vw] lg:text-[4vw] font-bold leading-[0.95] tracking-tight text-white">
          Automatize seu negócio
          <br />
          de forma{' '}
          <span className="relative inline-block align-baseline">
            <span
              key={index}
              className="inline-block px-4 md:px-6 py-1 animate-fade-in"
              style={{ borderRadius: 4, backgroundColor: '#ffffff', color: '#0B3A47' }}
            >
              {WORDS[index]}
            </span>
          </span>
        </h2>
        <p className="mt-8 font-mono-label" style={{ color: 'rgba(255,255,255,0.7)' }}>— Performance · Inteligência · Resultado</p>
      </div>
    </section>

  );
};

export default DynamicWord;
