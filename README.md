# Portfólio — Ivanilton Neto

Site estático em Astro. Uma página, sem back-end, sem rastreamento.

**Conceito: "Corte transversal".** A trajetória documentada no currículo sobe por três camadas:
back-end (2023), arquitetura de software (2025) e IA aplicada (2026). O site inteiro é desenhado
sobre esse corte. Cada camada tem uma cor, e essa cor só significa a camada: na pilha da abertura,
nos cargos, nos casos e na matriz de competências. O seletor "Ver camada" realça uma delas na página toda.

## Rodar

```bash
npm install
npm run dev       # http://localhost:4321
npm run check     # typecheck (astro check)
npm run build     # gera dist/
npm run preview   # serve dist/ localmente
```

Node 18.20+ (testado com Node 22).

## Publicar

O build gera HTML estático em `dist/`. Qualquer hospedagem estática serve.

1. Defina o domínio final em `SITE_URL` (canonical, Open Graph e sitemap dependem dele):
   `SITE_URL=https://seu-dominio.dev npm run build`.
   Sem a variável, o padrão é `https://portfolio-ivanilton-neto.vercel.app`.
2. Atualize a linha `Sitemap:` em `public/robots.txt` com o mesmo domínio.
3. Opções:
   - **Vercel / Netlify / Cloudflare Pages:** importe o repositório. Build `npm run build`, saída `dist`, variável `SITE_URL`.
   - **GitHub Pages (site de usuário):** repositório `ivaniltonneto.github.io` com a action oficial `withastro/action`.
     Num repositório de projeto, adicione `base: '/nome-do-repo'` em `astro.config.mjs`.

## Estrutura

```
src/
  data/profile.ts        fonte única de conteúdo (todo texto factual vive aqui)
  styles/tokens.css      cor, tipo, espaço; modo claro e escuro
  styles/global.css      reset, grid de seção, camadas, lente
  layouts/Base.astro     <head>, SEO, Open Graph, JSON-LD
  components/            uma seção por arquivo + StackDiagram e CaseMap
  scripts/lens.ts        lente de camadas e menu ativo
  pages/                 index, 404, sitemap.xml
src/assets/               foto (otimizada no build pelo astro:assets)
public/                  favicon, og.png, robots.txt
```

Para atualizar o portfólio, edite `src/data/profile.ts`. Os componentes não contêm texto factual.

## Regras editoriais

- Toda afirmação profissional precisa de origem verificável: currículo, commits e documentos do próprio autor, certificados ou relato direto (marcado como tal). Nada de métricas estimadas.
- Nomes internos de serviços, hosts, pessoas e dados de clientes não entram no site.
- Campo de estudo de caso sem registro público fica com `body: null`. O site diz isso explicitamente, em vez de preencher.
- Competências registram **onde** aparecem (trabalho exercido ou estudo), nunca um nível.

## Decisões (ADRs)

A seção Método do site mostra as ADRs da esteira do LogixSphere (`method.adrs`). As decisões deste site ficam aqui:

- **ADR-001 Site estático, sem back-end.** O conteúdo muda poucas vezes por ano e não guarda dado de usuário. Sem servidor para manter; toda atualização passa por build.
- **ADR-002 Fonte única de conteúdo.** Todo texto factual fica em `src/data/profile.ts`; componentes só apresentam.
- **ADR-003 Evidência no lugar de nível.** Competências registram onde foram exercidas ou estudadas, nunca uma nota.
- **ADR-004 JavaScript só onde há interação.** Sem JS, tudo continua legível; a lente de camadas é um recurso a mais.

## Acessibilidade

- HTML semântico, link para pular ao conteúdo, foco visível.
- Abas do C4 com navegação por setas, Home e End; mapa do caso com `aria-pressed` e região `aria-live`.
- Sem JavaScript, tudo continua legível: a lente some e as abas viram seções empilhadas.
- `prefers-reduced-motion` desliga a única animação (montagem da pilha na abertura).
- Contraste AA das cores de camada sobre o fundo nos dois temas.
