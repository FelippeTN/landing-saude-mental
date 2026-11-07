// Dados, rede de cuidado, proposta de intervenção e referências do site.
// Regras: todo número tem fonte e data; sem doses, esquemas de retirada ou ranking de medicamentos.
// Conteúdo educativo geral: deve ser revisado por um profissional de saúde antes da publicação.

export type KeyFact = {
  value: string
  description: string
  source: string
}

export const keyFacts: KeyFact[] = [
  {
    value: '40% a 60%',
    description:
      'das pessoas não seguem o tratamento medicamentoso como foi prescrito, segundo estimativa citada em uma revisão brasileira.',
    source: 'Santos, 2019, citado por Araújo et al., 2023',
  },
  {
    value: '58 mil',
    description:
      'pessoas participaram das pesquisas reunidas em um estudo que comparou efeitos físicos de 30 antidepressivos.',
    source: 'The Lancet, 2025, segundo o King’s College London',
  },
  {
    value: '2.836',
    description:
      'Centros de Atenção Psicossocial estavam habilitados no Brasil, em 1.910 municípios, em junho de 2022.',
    source: 'Ministério da Saúde, 2022',
  },
]

export type CareService = {
  name: string
  description: string
}

export const careServices: CareService[] = [
  {
    name: 'Unidade Básica de Saúde (UBS)',
    description:
      'Um bom lugar para começar, principalmente se a sua cidade não tem CAPS. A equipe pode orientar, acompanhar e encaminhar quando for preciso.',
  },
  {
    name: 'Centro de Atenção Psicossocial (CAPS)',
    description:
      'Serviço comunitário e de “porta aberta”, voltado principalmente a transtornos mentais mais graves e persistentes e a necessidades ligadas ao uso de álcool e outras drogas. Há CAPS para adultos e para crianças e adolescentes.',
  },
  {
    name: 'Farmácia',
    description:
      'Na hora de retirar o medicamento, peça ao farmacêutico para explicar como usar, como guardar, quais reações observar e quais combinações evitar.',
  },
  {
    name: 'Consultório na Rua',
    description:
      'Equipes itinerantes que cuidam de pessoas em situação de rua, incluindo necessidades de saúde mental.',
  },
]

export const careNetworkNote =
  'Dados de junho de 2022: 2.836 CAPS em 1.910 municípios e 172 equipes de Consultório na Rua em 117 municípios. A oferta varia conforme o estado e o município, e os números podem ter mudado. Fonte: Ministério da Saúde, 2022.'

export const surveyNote =
  'Ainda faltam dados nacionais recentes. A Pesquisa Nacional de Saúde Mental está em coleta e havia realizado 1.011 entrevistas até 28 de agosto de 2026, com expectativa de cerca de 10 mil ao final (Ministério da Saúde, 2026).'

export type InterventionAxis = {
  title: string
  action: string
  basis: string
}

export const proposalObjective =
  'Promover o uso racional de psicofármacos na rede pública, com decisão compartilhada, identificação precoce de reações adversas e prevenção da interrupção sem orientação.'

export const proposalAudience =
  'Pessoas em tratamento e familiares, além das equipes de CAPS, UBS e farmácia.'

export const proposalSetting = 'Piloto em um CAPS e nas UBS de referência.'

export const interventionAxes: InterventionAxis[] = [
  {
    title: 'Acompanhamento no início',
    action:
      'Orientação farmacêutica ao iniciar ou trocar o medicamento, com novos contatos até o 3º mês.',
    basis: 'Benefício na adesão concentrado nos três primeiros meses (Alves, 2019, citado por Araújo et al., 2023).',
  },
  {
    title: 'Plano compartilhado',
    action:
      'Registrar no Projeto Terapêutico Singular para que serve o medicamento, como usar, o que esperar e as preferências da pessoa.',
    basis: 'Decisão compartilhada (King’s College London, 2025) e participação do usuário (Corrêa et al., 2026).',
  },
  {
    title: 'Atenção às reações adversas',
    action:
      'Registro simples de sintomas, monitoramento de peso, pressão e pulso quando indicado e notificação no VigiMed.',
    basis: 'Diferenças de efeitos físicos entre antidepressivos (King’s College London, 2025) e manejo de reações (Araújo et al., 2023).',
  },
  {
    title: 'Interrupção segura',
    action:
      'Canal “antes de parar, fale com a gente”, busca ativa de quem falta às consultas e redução gradual definida pelo prescritor.',
    basis: 'Abandono do tratamento (Floriano et al., 2026) e riscos da retirada abrupta (Castro; Del-Ben, 2024).',
  },
  {
    title: 'Revisão da medicação',
    action:
      'Lista única de medicamentos, compartilhada entre CAPS, UBS e demais prescritores, para identificar duplicidades e interações.',
    basis: 'Polifarmácia e terapia duplicada (Floriano et al., 2026) e cuidado com mais de um médico (Araújo et al., 2023).',
  },
  {
    title: 'Educação e apoio',
    action:
      'Grupos com usuários e familiares, linguagem simples e combate ao estigma, com alternativas não medicamentosas e atenção às condições sociais.',
    basis: 'Educação em saúde (Araújo et al., 2023), cuidado além do medicamento (Floriano et al., 2026) e estigma (Ministério da Saúde, 2026).',
  },
  {
    title: 'Segurança na urgência',
    action:
      'Cartão de medicamentos para a pessoa carregar e capacitação de UBS e pronto-atendimento sobre reações agudas graves.',
    basis: 'Importância de perguntar sempre quais medicamentos a pessoa usa (Castro; Del-Ben, 2024).',
  },
]

export type ProposalStep = {
  title: string
  duration: string
  description: string
}

export const proposalSteps: ProposalStep[] = [
  {
    title: 'Diagnóstico local',
    duration: '2 meses',
    description:
      'Mapear a equipe, a presença de farmacêutico, os fluxos e as principais dificuldades.',
  },
  {
    title: 'Preparação',
    duration: '1 mês',
    description:
      'Treinar a equipe, criar os materiais e escolher um instrumento validado para medir a adesão.',
  },
  {
    title: 'Piloto',
    duration: '6 meses',
    description: 'Aplicar os eixos em um grupo definido de usuários.',
  },
  {
    title: 'Avaliação',
    duration: '1 mês',
    description: 'Analisar os resultados e decidir ajustes e expansão.',
  },
]

export const proposalIndicators = [
  'Pessoas com plano compartilhado registrado',
  'Contatos realizados até o 3º mês',
  'Adesão, sempre medida com o mesmo instrumento',
  'Reações adversas registradas e notificadas',
  'Interrupções sem orientação',
  'Listas de medicamentos revisadas e problemas resolvidos',
  'Experiência relatada pelos usuários',
]

export const proposalLimits =
  'As fontes sustentam cada eixo separadamente, mas não testaram este conjunto completo. Prazos, cartão de medicamentos e combinação dos eixos são sugestões desta proposta, e as metas devem ser definidas após o diagnóstico local. A proposta precisa de revisão por profissionais de saúde e pela gestão local antes de ser aplicada.'

export type Reference = {
  citation: string
  url: string
  note?: string
}

export const references: Reference[] = [
  {
    citation:
      'Araújo WFR, Fonseca LR, Ribeiro WLS, Sant’Anna C. Impacto da orientação farmacoterapêutica na adesão ao tratamento com psicofármacos: revisão integrativa. Research, Society and Development, 2023;12(12):e59121239266.',
    url: 'https://doi.org/10.33448/rsd-v12i12.39266',
    note: 'Origem dos dados citados de Santos (2019), Alves (2019) e Ho et al. (2016).',
  },
  {
    citation:
      'Castro RAM, Del-Ben CM. Efeitos adversos agudos de medicações utilizadas na psiquiatria. Medicina (Ribeirão Preto), 2024.',
    url: 'https://doi.org/10.11606/issn.2176-7262.rmrp.2024.221674',
  },
  {
    citation:
      'Corrêa LM, Mombelli MA, Reis RA. Adesão de pessoas diagnosticadas com transtorno mental à assistência do Sistema Único de Saúde: revisão de escopo. Interface (Botucatu), 2026;30:e250178.',
    url: 'https://doi.org/10.1590/interface.250178',
    note: 'Consulta limitada ao resumo.',
  },
  {
    citation:
      'Floriano FDF, Pereira LC, Junges JR. A percepção de profissionais sobre os riscos do uso de medicamentos por pacientes com quadros depressivos. Interface (Botucatu), 2026;30:e250533.',
    url: 'https://doi.org/10.1590/interface.250533',
    note: 'Consulta limitada ao resumo.',
  },
  {
    citation:
      'King’s College London. Research establishes wide variation in physical side effects of antidepressants. 22 out. 2025. Comunicado sobre estudo publicado na The Lancet.',
    url: 'https://www.kcl.ac.uk/news/research-establishes-wide-variation-in-physical-side-effects-of-antidepressants',
  },
  {
    citation:
      'Olhar Digital. Estudo compara efeitos colaterais de diferentes antidepressivos. 23 out. 2025.',
    url: 'https://olhardigital.com.br/2025/10/23/medicina-e-saude/estudo-compara-efeitos-colaterais-de-diferentes-antidepressivos/',
  },
  {
    citation:
      'Ministério da Saúde. Dados da Rede de Atenção Psicossocial (RAPS) no Sistema Único de Saúde. Set. 2022.',
    url: 'https://www.gov.br/saude/pt-br/acesso-a-informacao/acoes-e-programas/caps/raps/arquivos/dados-da-rede-de-atencao-psicossocial-raps.pdf/',
  },
  {
    citation:
      'Ministério da Saúde. Pesquisa Nacional de Saúde Mental realiza coleta de dados em 197 municípios. 2026.',
    url: 'https://www.gov.br/saude/pt-br/assuntos/noticias-ms/2026/setembro/pesquisa-nacional-de-saude-mental-realiza-coleta-de-dados-em-197-municipios',
  },
  {
    citation: 'Adesão ao tratamento psicofarmacológico. ResearchGate.',
    url: 'https://www.researchgate.net/publication/250049292_Adesao_ao_tratamento_psicofarmacologico',
    note: 'Leitura complementar: texto não consultado e nenhum dado usado neste site.',
  },
  {
    citation:
      'G1. A comparação dos efeitos colaterais de diferentes antidepressivos, segundo pesquisa. 23 out. 2025.',
    url: 'https://g1.globo.com/saude/saude-mental/noticia/2025/10/23/a-comparacao-dos-efeitos-colaterais-de-diferentes-antidepressivos-segundo-pesquisa.ghtml',
    note: 'Leitura complementar: texto não consultado e nenhum dado usado neste site.',
  },
]
