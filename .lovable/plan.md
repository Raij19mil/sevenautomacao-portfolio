
## Objetivo
Aplicar a estética Partnom (preto dominante, tipografia display Space Grotesk, verde #1DA583 como único acento) sem tocar em textos, rotas, JSX estrutural ou lógica.

## Arquivos a modificar

### 1. `index.html`
- Adicionar `<link>` do Google Fonts para **Space Grotesk** (300, 400, 500, 700) e **Space Mono** (400, 700) no `<head>`.
- Nenhuma outra alteração.

### 2. `src/index.css` (reescrita dos tokens, mesma estrutura)
- Atualizar variáveis HSL para refletir a paleta Partnom:
  - `--background` → `#0A0A0A` (0 0% 4%)
  - `--card` / `--popover` → `#141414` (0 0% 8%)
  - `--secondary` / `--muted` / elevated → `#1A1A1A` (0 0% 10%)
  - `--foreground` → `#F0EFEB` (40 11% 93%)
  - `--muted-foreground` → `#888888` (0 0% 53%)
  - `--border` / `--input` → `#222222` (0 0% 13%)
  - `--primary` / `--accent` / `--ring` / `--primary-glow` → `#1DA583` (162 70% 38%) — mantém único acento verde, removendo a variação "glow" mais clara para não criar gradientes coloridos.
  - `--radius` → `0.25rem` (4px, estética tech reta)
- Substituir `--gradient-primary` e `--gradient-hero` por cores sólidas (sem gradientes), mantendo as variáveis para não quebrar imports.
- Remover `box-shadow` decorativas dos utilitários `.card-glow` / `.card-glow-hover` (passam a usar apenas border sutil em `#1DA583`).
- Atualizar `body` font-family para `'Space Grotesk'` + fallback.
- Adicionar tokens utilitários globais:
  - `::selection { background: rgba(29,165,131,0.27); color: #F0EFEB; }`
  - Scrollbar customizada (thumb `#1DA58388`, track `#141414`).
  - Classes utilitárias: `.font-mono-label` (Space Mono 11px, tracking 0.14em, uppercase), `.hero-dash` (#1DA583, weight 300).
- Forçar headings (`h1,h2,h3,h4`) com `font-family: 'Space Grotesk'`, `font-weight: 700`, `letter-spacing: -0.02em`, `line-height: 0.95`.

### 3. `tailwind.config.ts`
- Adicionar `fontFamily`: `display: ['Space Grotesk', ...]`, `mono: ['Space Mono', ...]`.
- Reduzir `borderRadius.lg` para `var(--radius)` (já vira 4px). Sem outras mudanças estruturais.
- Atualizar keyframe `glow` para usar apenas border accent, removendo shadow colorida intensa.

### 4. Nenhum componente JSX será editado
Todos os componentes (`Hero`, `Navigation`, `Portfolio`, `Services`, `Pricing`, `Contact`, `Footer`) já consomem tokens semânticos (`bg-background`, `text-foreground`, `border-border`, `bg-primary`, etc.). Trocar os tokens em `index.css` propaga automaticamente a nova identidade sem alterar markup nem texto.

## Restrições respeitadas
- Zero alterações em textos, rotas, imports, lógica ou estrutura JSX.
- Sem novas bibliotecas (fontes via CDN Google Fonts).
- Sem gradientes coloridos; verde apenas como acento.
- `border-radius` máximo 6px; sem box-shadow decorativa.

## Verificação pós-execução
Screenshot do `/` em viewport atual e confirmação visual: fundo `#0A0A0A` dominante, verde como acento em hover/bordas, hero em Space Grotesk bold uppercase, cards com border sutil `#222`.

## Pontos para sua aprovação
1. Confirma que a troca global dos tokens (sem editar JSX) é aceitável? Isso é a única forma de respeitar "não alterar componentes" e ainda redesenhar.
2. Devo manter a animação `marquee` do hero atual (texto rolando) ou também neutralizar para a estética Partnom mais estática? (recomendo manter — é só apresentação).
3. Posso remover as `box-shadow` verdes existentes (`card-glow`, `shadow-glow`) já que a referência não usa shadows? Os componentes continuarão funcionando, apenas perderão o brilho.
