import { useEffect, useState } from 'react';

const WORDS = ['rápida', 'inteligente', 'segura'];

const DynamicWord = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-background py-28 md:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[6vw] md:text-[4.5vw] lg:text-[4vw] font-bold leading-[0.95] tracking-tight text-foreground">
          Automatize seu negócio
          <br />
          de forma{' '}
          <span className="relative inline-block align-baseline">
            <span
              key={index}
              className="inline-block bg-primary text-primary-foreground px-4 md:px-6 py-1 animate-fade-in"
              style={{ borderRadius: 4 }}
            >
              {WORDS[index]}
            </span>
          </span>
        </h2>
        <p className="mt-8 font-mono-label">— Performance · Inteligência · Resultado</p>
      </div>
    </section>
  );
};

export default DynamicWord;
