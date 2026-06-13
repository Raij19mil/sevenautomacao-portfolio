import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const MadLibsContact = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [process, setProcess] = useState('');

  const message = `Olá! Sou ${name || '[nome]'}, da ${company || '[empresa]'}, quero automatizar ${process || '[processo]'}.`;
  const waUrl = `https://wa.me/qr/S2LLH6YRFMOGN1?text=${encodeURIComponent(message)}`;

  const inputClass =
    'inline-block bg-transparent border-b-2 border-primary/40 focus:border-primary outline-none text-primary px-2 py-1 min-w-[8ch] transition-colors';

  return (
    <section className="bg-background py-28 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono-label mb-6">— Vamos conversar</p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] tracking-tight">
          Olá! Sou{' '}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="seu nome"
            className={inputClass}
            style={{ width: `${Math.max(name.length || 8, 8) + 1}ch` }}
          />
          , da{' '}
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="sua empresa"
            className={inputClass}
            style={{ width: `${Math.max(company.length || 11, 11) + 1}ch` }}
          />
          , quero automatizar{' '}
          <input
            type="text"
            value={process}
            onChange={(e) => setProcess(e.target.value)}
            placeholder="qual processo"
            className={inputClass}
            style={{ width: `${Math.max(process.length || 13, 13) + 1}ch` }}
          />
          .
        </h2>

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-semibold hover:bg-primary/90 transition-colors"
          style={{ borderRadius: 4 }}
        >
          Enviar no WhatsApp
          <ArrowRight className="w-4 h-4" strokeWidth={2} />
        </a>
      </div>
    </section>
  );
};

export default MadLibsContact;
