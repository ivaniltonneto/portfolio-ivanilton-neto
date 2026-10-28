/**
 * Fonte única de conteúdo do portfólio (ver ADR-002).
 *
 * Regra editorial: toda afirmação profissional aqui precisa ter origem verificável:
 * - currículo (out/2026);
 * - commits e documentos do próprio autor nos repositórios do LogixSphere;
 * - certificados em Code/certificado;
 * - relato direto do autor (marcado como tal no texto).
 * Componentes não contêm texto factual — só leem daqui.
 */

export type LayerId = 'back' | 'arq' | 'ia';

export interface Layer {
  id: LayerId;
  name: string;
  short: string;
  /** Desde quando a camada aparece na trajetória documentada. */
  since: string;
  summary: string;
}

/** As três camadas, da base para o topo. */
export const layers: Layer[] = [
  {
    id: 'back',
    name: 'Back-end',
    short: 'Back-end',
    since: 'abr 2023',
    summary: 'APIs RESTful, microsserviços e desempenho em produção.',
  },
  {
    id: 'arq',
    name: 'Arquitetura de software',
    short: 'Arquitetura',
    since: 'mai 2025',
    summary: 'Análise técnica, design arquitetural e alinhamento com o negócio.',
  },
  {
    id: 'ia',
    name: 'IA aplicada',
    short: 'IA',
    since: 'abr 2026',
    summary: 'Arquitetura multiagente, RAG, privacidade e auditoria.',
  },
];

export const person = {
  name: 'Ivanilton Neto',
  fullName: 'Ivanilton Sebastião de Souza Neto',
  role: 'Tech Lead em back-end, arquitetura de software e IA',
  location: 'Juazeiro do Norte, CE',
  lede:
    'Comecei na ArcH mantendo APIs, microsserviços e sistemas legados em produção, e depois passei a analisar e desenhar a arquitetura desses sistemas. Em 2026, liderei tecnicamente uma plataforma de IA para o setor jurídico regulado e trabalho no back-end, na esteira de entrega e na segurança de uma plataforma de operações logísticas.',
  photoAlt: 'Ivanilton Neto, sorrindo, de braços cruzados, diante de uma parede clara.',
  revision: 'outubro de 2026',
  revisionISO: '2026-10',
};

export const contact = {
  email: 'ivaniltonnetodev@gmail.com',
  linkedin: {
    label: 'linkedin.com/in/ivanilton-neto-a712a379',
    href: 'https://www.linkedin.com/in/ivanilton-neto-a712a379',
  },
  github: { label: 'github.com/ivaniltonneto', href: 'https://github.com/ivaniltonneto' },
};

/* ------------------------------------------------------------------ */
/* Trajetória                                                          */
/* ------------------------------------------------------------------ */

export interface Role {
  id: string;
  title: string;
  org: string;
  orgNote?: string;
  mode?: string;
  start: { label: string; iso: string };
  end: { label: string; iso: string; current?: boolean };
  /** Camada principal primeiro. */
  layers: LayerId[];
  context: string;
  duties: string[];
  tech: string[];
  caseIds?: string[];
}

export const roles: Role[] = [
  {
    id: 'logixsphere',
    title: 'Engenheiro de software, back-end e DevOps',
    org: 'LogixSphere',
    orgNote: 'BA Express, Reino Unido',
    mode: 'Remoto, em equipe',
    start: { label: 'mai 2026', iso: '2026-05' },
    end: { label: 'atual', iso: '2026-10', current: true },
    layers: ['back', 'arq'],
    context:
      'Plataforma de gestão de operações logísticas: planejamento semanal, operação diária, faturamento e balanceamento de rotas de entrega. Back-end em Node.js e TypeScript, front-end em Next.js.',
    duties: [
      'Desenho e implantação da esteira de CI/CD build-once, deploy-many para back-end e front-end, com artefato imutável, releases por SHA e rollback.',
      'Correções de segurança no microsserviço de ingestão de dados: isolamento multi-tenant, RLS no PostgreSQL, rate limiting distribuído e rotação de tokens.',
      'Otimizações de desempenho sem mudança de comportamento: compressão HTTP, eliminação de consultas N+1 e memoização no middleware de respostas.',
      'Implementação de partes do Route Balancer: processamento assíncrono de uploads, classificação Pre-12, métricas por rota e regras de autorização.',
      'Documentação técnica: mapa de contratos entre front-end e back-end, documento de decisão sobre armazenamento de arquivos e runbooks de incidentes.',
      'Revisão de pull requests contra a tarefa no Jira, a arquitetura do projeto e os gates de teste, lint e typecheck.',
    ],
    tech: ['Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'Redis', 'Next.js', 'GitHub Actions', 'PM2'],
    caseIds: ['esteira-entrega', 'multi-tenant'],
  },
  {
    id: 'tech-lead',
    title: 'Tech Lead',
    org: 'Family UK',
    orgNote: 'Projeto internacional',
    mode: 'Tempo integral, remoto',
    start: { label: 'abr 2026', iso: '2026-04' },
    end: { label: 'out 2026', iso: '2026-10' },
    layers: ['ia', 'arq', 'back'],
    context:
      'Liderança técnica no desenvolvimento de uma plataforma de inteligência artificial voltada para o setor jurídico regulado.',
    duties: [
      'Desenvolvimento de arquitetura multiagente e de sistemas de RAG em larga escala.',
      'Implementação de pipelines de processamento de dados com foco rigoroso em privacidade e conformidade com a GDPR.',
      'Estruturação do back-end com Python, FastAPI e bancos de dados vetoriais.',
      'Segurança de dados sensíveis e auditoria imutável.',
    ],
    tech: ['Python', 'FastAPI', 'Bancos vetoriais'],
    caseIds: ['ia-regulada'],
  },
  {
    id: 'arquitetura',
    title: 'Analista de Arquitetura de Soluções e Software',
    org: 'ArcH',
    start: { label: 'mai 2025', iso: '2025-05' },
    end: { label: 'mar 2026', iso: '2026-03' },
    layers: ['arq', 'back'],
    context:
      'Arquitetura de soluções e de software: estratégia técnica, análise de sistemas existentes e design de evolução.',
    duties: [
      'Desenvolver e implementar estratégias arquiteturais alinhadas aos objetivos de negócio.',
      'Realizar análises técnicas aprofundadas de sistemas, com foco em otimização, escalabilidade e desempenho.',
      'Atuar em iniciativas de design arquitetural, buscando robustez e evolução sustentável das aplicações.',
      'Colaborar com equipes multidisciplinares na integração de soluções técnicas.',
    ],
    tech: [],
  },
  {
    id: 'backend',
    title: 'Desenvolvedor Back-end',
    org: 'ArcH',
    start: { label: 'abr 2023', iso: '2023-04' },
    end: { label: 'mai 2025', iso: '2025-05' },
    layers: ['back'],
    context:
      'Desenvolvimento e sustentação de serviços em produção, incluindo um sistema financeiro de cobrança legado e suas integrações.',
    duties: [
      'Desenvolvimento e manutenção de APIs RESTful.',
      'Desenvolvimento e manutenção de microsserviços.',
      'Monitoramento de desempenho e resolução de gargalos em produção.',
      'Desenvolvimento de soluções web com React, Next.js, Node.js e .NET.',
    ],
    tech: ['Node.js', 'TypeScript', 'SQL Server', 'PostgreSQL', '.NET', 'React', 'Next.js'],
    caseIds: ['cobranca-legado'],
  },
];

/* ------------------------------------------------------------------ */
/* Estudos de caso                                                     */
/* ------------------------------------------------------------------ */

export interface CaseField {
  label: string;
  /** `null` = não há registro público; o site diz isso explicitamente. */
  body: string | string[] | null;
  /** Texto mostrado quando `body` é null. */
  empty?: string;
}

export interface MapZone {
  id: string;
  name: string;
  items: string[];
  evidence: string;
}

export interface CaseStudy {
  id: string;
  layer: LayerId;
  layers: LayerId[];
  title: string;
  roleRef: string;
  period: string;
  /** De onde vêm as afirmações do caso. */
  scope: string;
  fields: CaseField[];
  map?: { boundary: string; zones: MapZone[]; crosscut: MapZone; caption: string };
}

export const cases: CaseStudy[] = [
  {
    id: 'ia-regulada',
    layer: 'ia',
    layers: ['ia', 'arq', 'back'],
    title: 'IA para um setor em que dados são regulados',
    roleRef: 'Tech Lead, Family UK',
    period: 'abr–out 2026',
    scope:
      'Fonte: currículo. Volumes, métricas e topologia do sistema não são públicos e não aparecem aqui.',
    fields: [
      {
        label: 'Contexto e objetivo',
        body: 'Plataforma de inteligência artificial para o setor jurídico regulado, desenvolvida para a Family UK, num projeto internacional em que atuei como Tech Lead.',
      },
      {
        label: 'Necessidade',
        body: 'Recuperar e processar informação com IA num domínio em que o tratamento de dados sensíveis é regulado e precisa ser auditável.',
      },
      {
        label: 'Restrições',
        body: [
          'Conformidade com a GDPR.',
          'Dados sensíveis, com exigência de segurança.',
          'Auditoria imutável das operações.',
          'Recuperação de informação em larga escala.',
        ],
      },
      {
        label: 'Decisões de arquitetura',
        body: [
          'Arquitetura multiagente.',
          'Sistemas de RAG em larga escala.',
          'Bancos de dados vetoriais no back-end.',
          'Pipelines de processamento de dados com foco em privacidade e GDPR.',
          'Trilha de auditoria imutável.',
        ],
      },
      {
        label: 'Implementação',
        body: 'Back-end em Python com FastAPI, integrado a bancos de dados vetoriais. Liderança técnica do desenvolvimento.',
      },
      { label: 'Resultado', body: null },
    ],
    map: {
      boundary: 'Family UK: plataforma de IA, setor jurídico regulado',
      caption:
        'Mapa de responsabilidades, não diagrama de topologia. Agrupa o que o currículo documenta. Não mostra fluxos, serviços nem fornecedores reais.',
      zones: [
        {
          id: 'agentes',
          name: 'Agentes',
          items: ['Arquitetura multiagente'],
          evidence: 'Desenvolvimento de arquitetura multiagente e de sistemas de RAG em larga escala.',
        },
        {
          id: 'recuperacao',
          name: 'Recuperação',
          items: ['RAG em larga escala', 'Bancos vetoriais'],
          evidence: 'Estruturação do back-end com Python, FastAPI e bancos de dados vetoriais.',
        },
        {
          id: 'dados',
          name: 'Dados',
          items: ['Pipelines de processamento', 'GDPR'],
          evidence:
            'Implementação de pipelines de processamento de dados com foco rigoroso em privacidade e conformidade com a GDPR.',
        },
        {
          id: 'servico',
          name: 'Serviço',
          items: ['Python', 'FastAPI'],
          evidence: 'Estruturação do back-end com Python, FastAPI e bancos de dados vetoriais.',
        },
      ],
      crosscut: {
        id: 'auditoria',
        name: 'Transversal',
        items: ['Segurança de dados sensíveis', 'Auditoria imutável'],
        evidence: 'Foco em segurança de dados sensíveis e auditoria imutável.',
      },
    },
  },
  {
    id: 'multi-tenant',
    layer: 'back',
    layers: ['back', 'arq'],
    title: 'Fechar o vazamento entre clientes num serviço de ingestão',
    roleRef: 'LogixSphere, BA Express',
    period: 'mai–jun 2026',
    scope:
      'Fonte: meus commits no repositório do microsserviço e o relatório de auditoria do projeto. Detalhes de infraestrutura e de clientes ficam de fora.',
    fields: [
      {
        label: 'Contexto e objetivo',
        body: 'Microsserviço em Node.js e TypeScript que recebe planilhas com dados financeiros de várias empresas (multi-tenant) e os grava na plataforma.',
      },
      {
        label: 'Necessidade',
        body: 'Uma auditoria de segurança e revisão de código encontrou dois contextos de tenant convivendo no mesmo processo: um token válido de uma empresa podia gravar dados em nome de outra. O limitador de taxa também só agia depois da autenticação.',
      },
      {
        label: 'Restrições',
        body: [
          'Dados financeiros de múltiplas empresas, sob LGPD e GDPR.',
          'Serviço já em uso, recebendo dados reais.',
          'Planilhas tratadas como entrada não confiável.',
        ],
      },
      {
        label: 'Decisões',
        body: [
          'Um único contexto de tenant por requisição. O tenant nunca vem do corpo do upload.',
          'Row-Level Security no PostgreSQL como segunda barreira.',
          'Rate limiting global antes da autenticação, distribuído via Redis, com fallback em memória.',
          'Cache de validação de tokens com circuit breaker. Tokens guardados como hash, com rotação.',
          'Parser de planilhas trocado e protegido contra prototype pollution.',
        ],
      },
      {
        label: 'Implementação',
        body: 'Node.js, TypeScript, Express, PostgreSQL e Redis. Testes unitários e de integração para isolamento de tenant, tokens, rate limit, cache, ingestão e health check, além de shutdown gracioso e endpoint de readiness.',
      },
      {
        label: 'Resultado',
        body: 'O relatório de auditoria do projeto registra o backlog de correções P0, P1 e P2 como concluído em junho de 2026.',
      },
    ],
  },
  {
    id: 'esteira-entrega',
    layer: 'arq',
    layers: ['arq', 'back'],
    title: 'O mesmo artefato do CI até a produção',
    roleRef: 'LogixSphere, BA Express',
    period: 'jul–set 2026',
    scope: 'Fonte: meus commits nos workflows e os documentos da esteira (desenho, artefato e relatório de implantação).',
    fields: [
      {
        label: 'Contexto e objetivo',
        body: 'Back-end e front-end rodando em VMs com PM2. O deploy dependia de um pacote montado à mão. O objetivo era tornar a entrega repetível, rastreável e reversível.',
      },
      {
        label: 'Necessidade',
        body: 'Saber exatamente qual código está em cada ambiente e conseguir voltar uma versão sem reconstruir nada no servidor.',
      },
      {
        label: 'Restrições',
        body: [
          'Deploy em VM, sem containers.',
          'O build do Next.js embute as variáveis públicas, então o front-end precisa de um artefato por ambiente.',
          'Segredos não podem viajar dentro do artefato.',
          'Cota de armazenamento de artefatos no GitHub.',
        ],
      },
      {
        label: 'Decisões',
        body: [
          'Build-once, deploy-many: o CI valida (lint, typecheck, testes, build) e empacota um artefato imutável com checksum.',
          'O servidor não compila nem instala dependências, só promove o artefato.',
          'Releases por SHA, com links atual e anterior para rollback imediato.',
          'Health check que expõe versão e SHA do release.',
          'Segredos ficam fora do artefato, num diretório compartilhado do servidor.',
        ],
      },
      {
        label: 'Implementação',
        body: 'GitHub Actions com workflows reutilizáveis e runners self-hosted, PM2 e Next.js em modo standalone. O desenho do artefato foi aprovado pelos leads antes de qualquer script.',
      },
      {
        label: 'Resultado',
        body: 'Esteira em uso nos ambientes de desenvolvimento e produção. Falhas reais de operação, como a cota de artefatos e uma quebra de runner com Node 24, foram corrigidas e registradas como runbook.',
      },
    ],
  },
  {
    id: 'cobranca-legado',
    layer: 'back',
    layers: ['back'],
    title: 'Corrigir um sistema de cobrança sem especificação',
    roleRef: 'Desenvolvedor Back-end, ArcH',
    period: '2023–2025',
    scope:
      'Fonte: meu relato da experiência. O cliente e os nomes internos dos serviços não são divulgados.',
    fields: [
      {
        label: 'Contexto e objetivo',
        body: 'Sistema financeiro de cobrança ligado ao setor imobiliário, com front-end em JavaScript puro. Eu era praticamente o único responsável pelo back-end.',
      },
      {
        label: 'Necessidade',
        body: 'Cobranças duplicadas, clientes que já tinham pago sendo cobrados de novo e inconsistências nas procedures usadas em relatórios.',
      },
      {
        label: 'Restrições',
        body: [
          'Sem documentação de requisitos adequada nem ambiente de homologação estruturado.',
          'Framework interno com helpers de acesso a dados que aceitavam apenas a conexão e a query.',
          'SQL Server e PostgreSQL convivendo com stored procedures.',
        ],
      },
      {
        label: 'Abordagem',
        body: [
          'Investigar o comportamento real do sistema e a implementação existente antes de corrigir.',
          'Separar falha de aplicação de falha de ambiente: log de transações cheio no SQL Server, limite de conexões no PostgreSQL, restrições de VPN e DNS.',
        ],
      },
      {
        label: 'Integrações',
        body: [
          'Envio de negativações à Serasa em microbatches, com arquivos posicionais transmitidos por FTP.',
          'Diagnóstico de um callback da Zenvia que não acionava a API ao fim de atendimentos por WhatsApp.',
        ],
      },
      {
        label: 'Resultado',
        body: 'Depois das correções, o sistema passou a receber principalmente novas funcionalidades, em vez do mesmo volume de correções recorrentes. É um relato qualitativo, sem métrica registrada.',
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Método                                                              */
/* ------------------------------------------------------------------ */

export const method = {
  intro:
    'Documento sistemas em níveis de zoom, no modelo C4, e registro decisões antes de implementá-las: contexto, alternativas, decisão e consequências. Trabalho com DDD e arquitetura modular.',
  records: [
    {
      title: 'Onde guardar imagens e PDFs',
      where: 'LogixSphere, ago 2026',
      kind: 'Documento de decisão técnica',
      summary:
        'Compara banco de dados, disco do servidor e object storage em velocidade, backup, custo, segurança e crescimento. Recomenda object storage com metadados no banco, reaproveitando o que o chat do sistema já usava.',
    },
    {
      title: 'Artefato de build e estrutura de releases',
      where: 'LogixSphere, jul 2026',
      kind: 'Contrato entre CI e CD',
      summary:
        'Define o que é o artefato, como é nomeado e versionado, quanto tempo é retido e como fica no servidor. Aprovado pelos leads antes da implementação.',
    },
    {
      title: 'Mapa de contratos entre front‑end e back‑end',
      where: 'LogixSphere, 2026',
      kind: 'Inventário e diagnóstico',
      summary:
        'Cruza 294 chamadas do front-end com 247 rotas do back-end e aponta endpoints não confirmados, chamadas legadas e rotas paralelas, com recomendação para cada caso.',
    },
  ],
  why: 'O exemplo abaixo é o LogixSphere, a partir do conjunto C4 documentado no projeto com base no código e no banco. Hosts, credenciais e dados de clientes ficam de fora.',
  c4: [
    {
      id: 'contexto',
      name: 'Contexto',
      caption: 'Quem usa a plataforma e do que ela depende fora dela.',
    },
    {
      id: 'conteineres',
      name: 'Contêineres',
      caption: 'O que roda separadamente. A API concentra as regras; o front-end só conversa com ela.',
    },
    {
      id: 'componentes',
      name: 'Componentes',
      caption: 'Dentro da API. Fluxos novos passam por use cases e regras de domínio; os legados seguem core, service e repository.',
    },
    {
      id: 'codigo',
      name: 'Código',
      caption: 'Layout de releases no servidor, definido no contrato entre CI e CD. Rollback é trocar um link.',
    },
  ],
  adrsTitle: 'Decisões da esteira de entrega',
  adrsSource: 'LogixSphere, jul 2026. Registradas no documento de desenho da esteira de CI/CD.',
  adrs: [
    {
      id: 'ADR-01',
      title: 'Automatizar sobre VM e PM2 antes de migrar para contêineres',
      context: 'A produção roda em VMs com PM2 e o deploy era manual. Dava para aproveitar e migrar para contêineres ao mesmo tempo.',
      decision: 'Manter VM e PM2 e automatizar a esteira sobre eles. Contêineres ficam como evolução futura.',
      consequences: 'Evita trocar processo e plataforma de uma vez. Abre mão, por ora, da paridade total de ambiente. O artefato versionado é a ponte para uma imagem depois.',
    },
    {
      id: 'ADR-02',
      title: 'CI e CD em workflows separados',
      context: 'Um único job que compila e publica mistura validação com entrega.',
      decision: 'O CI valida e gera o artefato. O CD só publica.',
      consequences: 'O CI protege a branch antes do merge e o deploy pode ser repetido sem recompilar. Em troca, o artefato precisa ser transportado entre workflows.',
    },
    {
      id: 'ADR-03',
      title: 'Build-once, deploy-many',
      context: 'Builds feitos em máquinas e momentos diferentes podem divergir.',
      decision: 'Compilar uma vez no CI e promover o mesmo artefato de homologação para produção.',
      consequences: 'O que foi testado é exatamente o que vai para produção, sem npm nem build no servidor. Exige armazenar e versionar artefatos.',
    },
    {
      id: 'ADR-04',
      title: 'Mesmo fluxo de branches nos três repositórios',
      context: 'Back-end e front-end usavam branches diferentes para o mesmo papel.',
      decision: 'feature para CI, develop para desenvolvimento, production para produção, igual em todos.',
      consequences: 'Menos erro operacional e gatilhos iguais no template. Custo de uma migração única de convenção.',
    },
    {
      id: 'ADR-05',
      title: 'Um workflow reutilizável central',
      context: 'Cópias da esteira em cada repositório divergem com o tempo.',
      decision: 'Um template parametrizado consumido pelos três repositórios.',
      consequences: 'Correções de segurança e processo num lugar só. Cria dependência de um template versionado.',
    },
    {
      id: 'ADR-06',
      title: 'Aprovação e segredos por ambiente',
      context: 'Credenciais viviam acopladas às máquinas e não havia ponto de controle antes da produção.',
      decision: 'GitHub Environments com revisores obrigatórios em produção e segredos por ambiente.',
      consequences: 'Ponto de controle auditável antes da produção. A migração das credenciais existentes precisa ser planejada.',
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Competências × evidências (ADR-003)                                  */
/* ------------------------------------------------------------------ */

/** Colunas da matriz: de onde vem a evidência. */
export const sources = [
  { id: 'ls', name: 'LogixSphere', note: '2026', kind: 'exercised' },
  { id: 'tl', name: 'Tech Lead', note: '2026', kind: 'exercised' },
  { id: 'arq', name: 'Arquitetura, ArcH', note: '2025–26', kind: 'exercised' },
  { id: 'be', name: 'Back-end, ArcH', note: '2023–25', kind: 'exercised' },
  { id: 'estudo', name: 'Cursos e graduação', note: 'estudado', kind: 'studied' },
] as const;

export type SourceId = (typeof sources)[number]['id'];

export interface Skill {
  name: string;
  layer: LayerId;
  in: SourceId[];
}

export interface SkillGroup {
  name: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'Back-end e APIs',
    skills: [
      { name: 'Node.js', layer: 'back', in: ['ls', 'be', 'estudo'] },
      { name: 'TypeScript', layer: 'back', in: ['ls', 'be', 'estudo'] },
      { name: 'Express', layer: 'back', in: ['ls', 'estudo'] },
      { name: 'Python', layer: 'back', in: ['tl', 'estudo'] },
      { name: 'FastAPI', layer: 'back', in: ['tl', 'estudo'] },
      { name: 'Django', layer: 'back', in: ['estudo'] },
      { name: '.NET', layer: 'back', in: ['be'] },
      { name: 'APIs RESTful', layer: 'back', in: ['ls', 'be', 'estudo'] },
      { name: 'PostgreSQL', layer: 'back', in: ['ls', 'be', 'estudo'] },
      { name: 'SQL Server e stored procedures', layer: 'back', in: ['be'] },
      { name: 'Redis', layer: 'back', in: ['ls'] },
      { name: 'NoSQL', layer: 'back', in: ['estudo'] },
      { name: 'Programação orientada a objetos', layer: 'back', in: ['estudo'] },
    ],
  },
  {
    name: 'Arquitetura e sistemas distribuídos',
    skills: [
      { name: 'Microsserviços', layer: 'arq', in: ['ls', 'be', 'estudo'] },
      { name: 'Isolamento multi-tenant', layer: 'arq', in: ['ls'] },
      { name: 'Integrações entre sistemas', layer: 'arq', in: ['ls', 'be'] },
      { name: 'Análise de desempenho e gargalos', layer: 'arq', in: ['ls', 'arq', 'be'] },
      { name: 'Design arquitetural e registros de decisão', layer: 'arq', in: ['ls', 'arq', 'estudo'] },
      { name: 'Contratos entre front‑end e back‑end', layer: 'arq', in: ['ls'] },
      { name: 'Arquitetura multiagente', layer: 'ia', in: ['tl', 'estudo'] },
    ],
  },
  {
    name: 'Inteligência artificial e dados',
    skills: [
      { name: 'IA generativa', layer: 'ia', in: ['tl', 'estudo'] },
      { name: 'RAG', layer: 'ia', in: ['tl', 'estudo'] },
      { name: 'Bancos de dados vetoriais', layer: 'ia', in: ['tl', 'estudo'] },
      { name: 'Pipelines de processamento de dados', layer: 'ia', in: ['tl'] },
      { name: 'Privacidade, GDPR e LGPD', layer: 'ia', in: ['tl', 'ls', 'estudo'] },
      { name: 'Auditoria imutável', layer: 'ia', in: ['tl'] },
      { name: 'Ciência de dados', layer: 'ia', in: ['estudo'] },
    ],
  },
  {
    name: 'Infraestrutura e cloud',
    skills: [
      { name: 'CI/CD com GitHub Actions', layer: 'back', in: ['ls', 'estudo'] },
      { name: 'PM2 e deploy em VM', layer: 'back', in: ['ls', 'be'] },
      { name: 'Docker', layer: 'back', in: ['be', 'estudo'] },
      { name: 'Kubernetes', layer: 'back', in: ['be', 'estudo'] },
      { name: 'AWS', layer: 'back', in: ['estudo'] },
    ],
  },
  {
    name: 'Front-end e complementares',
    skills: [
      { name: 'React', layer: 'back', in: ['ls', 'be', 'estudo'] },
      { name: 'Next.js', layer: 'back', in: ['ls', 'be', 'estudo'] },
      { name: 'HTML e CSS', layer: 'back', in: ['estudo'] },
    ],
  },
  {
    name: 'Liderança e colaboração',
    skills: [
      { name: 'Liderança técnica', layer: 'arq', in: ['tl'] },
      { name: 'Revisão de código', layer: 'arq', in: ['ls'] },
      { name: 'Colaboração com equipes multidisciplinares', layer: 'arq', in: ['arq'] },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Formação                                                            */
/* ------------------------------------------------------------------ */

export const degree = {
  title: 'Bacharelado em Análise e Desenvolvimento de Sistemas',
  institution: 'UNINASSAU, Centro Universitário Maurício de Nassau',
  period: '2025 – 2027',
  status: 'Em andamento',
  subjects: [
    'Programação',
    'Algoritmos e estruturas de dados',
    'Sistemas operacionais',
    'Banco de dados',
    'Inteligência artificial',
    'Ciência de dados',
    'Arquitetura de sistemas',
    'Engenharia de software',
  ],
};

export interface Course {
  name: string;
  issuer?: string;
  hours?: string;
  date?: string;
  /** Há certificado conferido. */
  certified?: boolean;
}

export const courses: Course[] = [
  { name: 'Formação em Desenvolvimento Full Stack', issuer: 'Kenzie Academy Brasil', hours: '2.000 h', certified: true },
  { name: 'ArcHExpert Infinity', issuer: 'ArcHAI', hours: '120 h', date: 'jul 2025', certified: true },
  { name: 'ArcHStarter', issuer: 'ArcHOffice', hours: '5 h 50 min', date: 'jul 2025', certified: true },
  { name: 'Descubra a Nuvem', issuer: 'DIO', hours: '2 h', date: 'set 2023', certified: true },
  { name: 'Curso Completo de Banco de Dados e SQL' },
  { name: 'Programação Orientada a Objetos' },
  { name: 'Algoritmos e Lógica de Programação' },
  { name: 'JavaScript & TypeScript Completo' },
  { name: 'React.js e Next.js Completo' },
];

export const languages = [
  { name: 'Português', level: 'Nativo' },
  { name: 'Inglês', level: 'Intermediário' },
];
