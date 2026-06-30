## Plano — Seção de Conformidade Lei nº 14.300/2022

Nova seção enxuta e estética entre `NumerosSection` e `ComparativoSection`, fundo claro (transição natural do bloco escuro de Números para o Comparativo).

### Layout (desktop, 2 colunas)

```
┌──────────────────────────────────────────────────────────────┐
│  MARCO LEGAL E SEGURANÇA JURÍDICA                            │
│                                          ┌────────────────┐  │
│  Um modelo regulamentado                 │ 🛡  GERAÇÃO     │  │
│  pela legislação brasileira.             │    DISTRIBUÍDA │  │
│                                          │  Lei nº         │  │
│  A Sundeal opera no modelo de            │  14.300/2022   │  │
│  geração distribuída, amparado pela      └────────────────┘  │
│  Lei nº 14.300/2022. Você recebe...      ┌────────────────┐  │
│                                          │ ⚖  Segurança..  │  │
│                                          ├────────────────┤  │
│                                          │ 🛡  Compensação │  │
│                                          ├────────────────┤  │
│                                          │ 🌿 Sem obras    │  │
│                                          └────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

Mobile: empilhado, copy em cima, selo + badges abaixo.

### Estética

- Fundo claro `linear-gradient(180deg, #f6f7f2 → #eef0e6 → #f6f7f2)` com 2 glows radiais verdes suaves
- Hairlines finos no topo e base (gradient horizontal verde transparente) para "selar" a faixa
- Headline com a palavra **regulamentado** em gradient verde (mesmo padrão das outras seções: `hsl(72 73% 36% → 42% → 46%)`)
- Card de selo legal em branco com sombra premium, ícone `ShieldCheck` em quadrado com gradient verde escuro
- 3 badges glassmorphism (branco translúcido + blur) com micro-hover `translate-x-1`
- Animações Framer Motion: fade-up no texto, fade-right escalonado nos badges (delay 0.25 + 0.08·i)
- Tipografia: Mont-Bold no h2 e nos títulos dos badges, Montserrat no corpo
- Sem CTA (não compete com Indicação/Contato) — é puro reforço de confiança

### Copy (reduzida)

- **Eyebrow:** Marco legal e segurança jurídica
- **H2:** Um modelo *regulamentado* pela legislação brasileira.
- **Parágrafo:** A Sundeal opera no modelo de **geração distribuída**, amparado pela **Lei nº 14.300/2022**. Você recebe o desconto via compensação de créditos diretamente na sua fatura — sem instalar nada no seu imóvel.
- **Selo:** Geração Distribuída · Lei nº 14.300/2022 · Marco Legal da Microgeração e Minigeração Distribuída no Brasil
- **Badges:** Segurança jurídica · Compensação por créditos · Sem obras no imóvel

### Arquivos

1. Criar `src/components/ConformidadeSection.tsx` (componente completo já desenhado)
2. Editar `src/pages/Index.tsx`: importar e renderizar `<ConformidadeSection />` entre `<NumerosSection />` e `<ComparativoSection />`

Pronto para implementar — é só aprovar.
