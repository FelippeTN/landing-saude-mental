// Todo o texto de saúde dos modais fica aqui, para facilitar a revisão.
// Conteúdo educativo geral: deve ser revisado por um profissional de saúde antes da publicação.

export type QuestionAnswer = {
  question: string
  answer: string
  items?: string[]
}

export type TabAlert = {
  title: string
  description: string
  items: string[]
}

export type TopicTab = {
  id: string
  label: string
  alert?: TabAlert
  questions: QuestionAnswer[]
}

export type TopicIconName = 'calendar' | 'bell' | 'steps'

export type Topic = {
  id: string
  icon: TopicIconName
  title: string
  summary: string
  buttonLabel: string
  intro: string
  tabs: TopicTab[]
  reminder: string
}

export const topics: Topic[] = [
  {
    id: 'adesao',
    icon: 'calendar',
    title: 'Adesão a psicofármacos',
    summary:
      'Por que manter o tratamento nem sempre é simples e o que pode ajudar no dia a dia.',
    buttonLabel: 'Entender a adesão',
    intro:
      'Psicofármacos são medicamentos usados no cuidado da saúde mental. Manter o uso combinado pode ser difícil, e tudo bem precisar de ajuda com isso.',
    tabs: [
      {
        id: 'o-que-e',
        label: 'O que é',
        questions: [
          {
            question: 'O que significa adesão ao tratamento?',
            answer:
              'É seguir o plano que você construiu com a sua equipe de saúde: usar o medicamento como foi combinado, ir às consultas e contar como está se sentindo. Não é obediência. É uma parceria em que a sua opinião conta.',
          },
          {
            question: 'Por que o efeito pode demorar?',
            answer:
              'Muitos psicofármacos agem de forma gradual, e alguns podem levar semanas para mostrar o benefício completo. O tempo varia conforme o medicamento e a pessoa. Pergunte a quem prescreveu o que esperar e quando reavaliar.',
          },
          {
            question: 'Preciso continuar mesmo me sentindo bem?',
            answer:
              'Sentir-se melhor pode ser justamente um sinal de que o tratamento está funcionando. Por isso, a decisão de manter, ajustar ou encerrar o uso deve ser tomada junto com a equipe de saúde.',
          },
          {
            question: 'É comum ter dificuldade para manter o tratamento?',
            answer:
              'Sim. Uma revisão brasileira cita a estimativa de que cerca de 40% a 60% das pessoas não seguem o tratamento medicamentoso como foi prescrito (Santos, 2019, citado por Araújo et al., 2023). A dificuldade é comum e merece apoio, não julgamento.',
          },
        ],
      },
      {
        id: 'sinais',
        label: 'Sinais',
        questions: [
          {
            question: 'Como perceber que está difícil manter o tratamento?',
            answer: 'Alguns sinais merecem atenção:',
            items: [
              'Esquecer doses com frequência',
              'Usar o medicamento só nos dias ruins',
              'Mudar a dose ou o horário por conta própria',
              'Adiar a renovação da receita ou evitar consultas',
            ],
          },
          {
            question: 'O que costuma atrapalhar?',
            answer: 'As dificuldades são comuns e têm várias origens:',
            items: [
              'Rotina corrida e esquecimento',
              'Efeitos incômodos do medicamento',
              'Medo de dependência ou preconceito',
              'Custo ou dificuldade de acesso',
              'Dúvidas sobre o tratamento',
              'Sintomas como desânimo e dificuldade de concentração',
            ],
          },
          {
            question: 'Esquecer uma dose significa que eu falhei?',
            answer:
              'Não. Isso acontece com muita gente. Não dobre a dose seguinte por conta própria: o que fazer depende do medicamento. Confira a bula ou pergunte à farmácia ou à equipe de saúde.',
          },
        ],
      },
      {
        id: 'o-que-fazer',
        label: 'O que fazer',
        questions: [
          {
            question: 'O que pode ajudar na rotina?',
            answer: 'Teste o que combina com o seu dia a dia:',
            items: [
              'Colocar um alarme no celular',
              'Associar o medicamento a um hábito, como escovar os dentes',
              'Usar uma caixinha organizadora semanal',
              'Anotar a data de renovar a receita',
              'Pedir apoio a alguém de confiança',
            ],
          },
          {
            question: 'Como conversar com quem prescreveu?',
            answer:
              'Conte com sinceridade como tem sido, inclusive se você deixou de usar o medicamento. Essa informação ajuda a ajustar o plano, e você pode perguntar:',
            items: [
              'Para que serve este medicamento?',
              'Em quanto tempo devo notar alguma melhora?',
              'O que faço se esquecer uma dose?',
              'Existe uma opção mais simples para a minha rotina?',
            ],
          },
          {
            question: 'E se o custo for o problema?',
            answer:
              'Conte isso à equipe de saúde. Ela pode avaliar alternativas e orientar sobre o acesso a medicamentos pelo SUS, inclusive na unidade básica de saúde ou no CAPS da sua região.',
          },
          {
            question: 'Não entendi como usar o medicamento. O que faço?',
            answer:
              'Peça para explicarem de novo, quantas vezes precisar. Confirme a quantidade, os horários e a duração do uso antes de sair da consulta ou da farmácia. Muitas pessoas têm essa dúvida.',
          },
          {
            question: 'Como o farmacêutico pode ajudar?',
            answer:
              'O farmacêutico pode explicar como usar e guardar o medicamento, quais reações observar e quais combinações evitar. Também pode ajudar você a organizar a rotina do tratamento.',
          },
          {
            question: 'Tenho mais de um médico. O que muda?',
            answer:
              'Leve a lista de tudo o que você usa a todas as consultas, inclusive medicamentos sem receita, chás e suplementos. Assim, os profissionais conseguem identificar repetições e combinações arriscadas.',
          },
          {
            question: 'Posso usar outro medicamento por conta própria?',
            answer:
              'É melhor perguntar antes. A automedicação pode causar interações e piorar o quadro, mesmo quando o produto parece inofensivo. A farmácia ou a equipe de saúde podem orientar você.',
          },
        ],
      },
    ],
    reminder:
      'Se algo no plano não está funcionando para você, fale com a sua equipe de saúde. O tratamento pode ser ajustado.',
  },
  {
    id: 'reacoes-adversas',
    icon: 'bell',
    title: 'Reações adversas',
    summary:
      'Como diferenciar um efeito passageiro de um sinal de alerta e o que fazer em cada caso.',
    buttonLabel: 'Entender as reações',
    intro:
      'Todo medicamento pode causar efeitos indesejados. Saber reconhecê-los ajuda você a agir com segurança e a conversar melhor com a sua equipe de saúde.',
    tabs: [
      {
        id: 'o-que-e',
        label: 'O que é',
        questions: [
          {
            question: 'O que é uma reação adversa?',
            answer:
              'É um efeito indesejado que pode surgir com o uso do medicamento. Pode ser leve e passageiro ou, em casos menos comuns, grave.',
          },
          {
            question: 'Todo mundo vai ter reações?',
            answer:
              'Não. Isso depende do medicamento, da dose, de outras condições de saúde e de cada organismo. Uma lista longa na bula não quer dizer que você terá todos aqueles efeitos.',
          },
          {
            question: 'As reações desaparecem com o tempo?',
            answer:
              'Alguns efeitos diminuem nas primeiras semanas, enquanto o corpo se adapta. Outros podem continuar ou aparecer mais tarde. Se algo incomodar, conte à equipe de saúde, mesmo que pareça pequeno.',
          },
          {
            question: 'Todos os antidepressivos têm os mesmos efeitos?',
            answer:
              'Não. Um estudo publicado na The Lancet em 2025 reuniu 151 pesquisas, com mais de 58 mil pessoas e 30 antidepressivos, a maioria com cerca de 8 semanas de duração. Entre alguns medicamentos, a diferença média chegou a cerca de 4 kg no peso e 21 batimentos por minuto na frequência cardíaca (King’s College London, 2025). Os autores não classificam medicamentos como bons ou ruins: o objetivo é escolher junto com a equipe e acompanhar quando for preciso. Não troque nem pare o medicamento por conta própria.',
          },
        ],
      },
      {
        id: 'sinais',
        label: 'Sinais',
        alert: {
          title: 'Procure atendimento urgente se houver',
          description:
            'Ligue para o SAMU (192) ou vá a um pronto-socorro, sem esperar a próxima consulta. Para apoio emocional, o CVV atende 24 horas pelo número 188.',
          items: [
            'Inchaço no rosto, nos lábios ou na garganta, ou falta de ar',
            'Pensamentos de suicídio ou de se machucar',
            'Febre alta com rigidez muscular ou confusão',
            'Desmaio, convulsão ou palpitações fortes',
            'Agitação intensa ou mudança súbita e extrema de humor',
            'Tremores, suor intenso, agitação, febre ou rigidez, principalmente horas depois de iniciar ou aumentar um medicamento',
            'Em quem usa lítio: vômitos ou diarreia intensos, tremores fortes, desequilíbrio ou confusão',
            'Em quem usa ácido valproico: confusão de início súbito, sonolência intensa ou vômitos',
          ],
        },
        questions: [
          {
            question: 'Quais efeitos são mais comuns?',
            answer: 'Variam conforme o medicamento, mas podem incluir:',
            items: [
              'Náusea ou dor de cabeça',
              'Sonolência ou insônia',
              'Tontura ou boca seca',
              'Mudanças no apetite ou no peso',
              'Mudanças no desejo ou na função sexual',
              'Inquietação',
            ],
          },
          {
            question: 'Quando falar com a equipe em breve?',
            answer:
              'Entre em contato se um efeito não melhora, piora ou atrapalha o trabalho, o sono ou os relacionamentos. Assuntos como peso e vida sexual também fazem parte do cuidado e podem ser conversados.',
          },
        ],
      },
      {
        id: 'o-que-fazer',
        label: 'O que fazer',
        questions: [
          {
            question: 'Devo parar o medicamento se tiver uma reação?',
            answer:
              'Em situações não urgentes, fale com a equipe de saúde antes de parar, porque a interrupção por conta própria também tem riscos. Diante de um sinal de alerta, procure atendimento imediatamente e informe quais medicamentos você usa.',
          },
          {
            question: 'O que anotar para contar na consulta?',
            answer: 'Um registro simples ajuda bastante:',
            items: [
              'O que você sentiu e quando começou',
              'A intensidade e quanto tempo durou',
              'O horário em que usou o medicamento',
              'Outros medicamentos, chás, suplementos ou álcool',
            ],
          },
          {
            question: 'O que a equipe de saúde pode fazer?',
            answer:
              'Dependendo do caso, ela pode acompanhar a evolução, ajustar a dose ou o horário, tratar o efeito ou trocar o medicamento. Por isso, vale a pena contar o que está acontecendo.',
          },
          {
            question: 'Preciso contar quais medicamentos uso em outros atendimentos?',
            answer:
              'Sim, inclusive no pronto-socorro e em consultas de outras especialidades. Algumas combinações aumentam o risco de reações graves. Avise também sobre álcool e outras drogas: essa informação serve para cuidar de você com segurança.',
          },
          {
            question: 'Uso lítio. Por que preciso de cuidado extra?',
            answer:
              'Pequenas mudanças podem aumentar a quantidade de lítio no corpo. Desidratação, uso irregular, álcool, dieta pobre em sal e alguns remédios para pressão elevam o risco. Mantenha os exames combinados e fale logo com a equipe se tiver vômitos, diarreia ou outra situação que possa causar desidratação.',
          },
          {
            question: 'Posso comunicar a reação às autoridades de saúde?',
            answer:
              'Sim. A Anvisa recebe notificações de eventos adversos pelo VigiMed, que também pode ser usado por pacientes. Isso não substitui o atendimento e ajuda a monitorar a segurança dos medicamentos.',
          },
        ],
      },
    ],
    reminder:
      'Na dúvida sobre um sintoma, fale com a sua equipe de saúde. Em caso de urgência, ligue para o SAMU (192).',
  },
  {
    id: 'descontinuacao',
    icon: 'steps',
    title: 'Descontinuação inadequada',
    summary:
      'Por que parar por conta própria pode trazer riscos e como encerrar o uso com segurança.',
    buttonLabel: 'Entender a descontinuação',
    intro:
      'Querer parar um medicamento é legítimo e pode ser conversado. O cuidado está na forma de fazer isso: com planejamento e acompanhamento.',
    tabs: [
      {
        id: 'o-que-e',
        label: 'O que é',
        questions: [
          {
            question: 'O que é descontinuação inadequada?',
            answer:
              'É interromper ou reduzir o medicamento sem orientação profissional, seja de uma vez ou aos poucos por conta própria. É diferente de uma descontinuação planejada com a equipe de saúde.',
          },
          {
            question: 'Por que as pessoas param por conta própria?',
            answer:
              'Os motivos são compreensíveis: sentir-se bem, ter efeitos incômodos, sentir que o medicamento não ajuda, enfrentar custos ou ter medo de depender dele. Contar o seu motivo à equipe ajuda a buscar uma solução.',
          },
          {
            question: 'Por que parar de repente pode ser arriscado?',
            answer:
              'O corpo pode ter se adaptado ao medicamento, e a saída repentina pode causar sintomas. Também pode haver retorno ou piora do quadro tratado. O risco varia conforme o medicamento, a dose e o tempo de uso, e em alguns casos pode ser sério.',
          },
          {
            question: 'O que os estudos mostram sobre não seguir o tratamento?',
            answer:
              'No caso dos antidepressivos, não seguir o tratamento foi associado a mais risco de recaída, internações e idas ao pronto-socorro, além de sintomas mais graves (Ho et al., 2016, citado por Araújo et al., 2023). Por isso, vale procurar ajuda ao primeiro sinal de dificuldade.',
          },
        ],
      },
      {
        id: 'sinais',
        label: 'Sinais',
        alert: {
          title: 'Procure atendimento urgente se houver',
          description:
            'Ligue para o SAMU (192) ou vá a um pronto-socorro. Para apoio emocional, o CVV atende 24 horas pelo número 188.',
          items: [
            'Pensamentos de suicídio ou de se machucar',
            'Convulsão ou confusão mental',
            'Agitação intensa ou ver e ouvir coisas que os outros não percebem',
          ],
        },
        questions: [
          {
            question: 'O que pode acontecer depois de parar?',
            answer: 'Dependendo do medicamento, podem surgir:',
            items: [
              'Tontura ou náusea',
              'Insônia ou sonhos muito vívidos',
              'Ansiedade ou irritabilidade',
              'Sensação parecida com a de uma gripe',
              'Sensação de “choques” na cabeça ou no corpo',
            ],
          },
          {
            question: 'Como diferenciar descontinuação e recaída?',
            answer:
              'Sintomas de descontinuação costumam surgir pouco depois de parar ou reduzir o medicamento e podem incluir sensações físicas novas. Na recaída, os sintomas do quadro original voltam, muitas vezes de forma mais gradual. Nem sempre é fácil diferenciar, e a avaliação deve ser feita por um profissional.',
          },
        ],
      },
      {
        id: 'o-que-fazer',
        label: 'O que fazer',
        questions: [
          {
            question: 'Quero parar. Por onde começo?',
            answer:
              'Marque uma conversa com quem prescreveu e conte o seu motivo. Vocês podem avaliar se é o momento certo, quais são os riscos e se há outras opções, como ajustar a dose ou trocar o medicamento.',
          },
          {
            question: 'Como funciona uma redução planejada?',
            answer:
              'Quando indicada, a redução é feita de forma gradual e no ritmo adequado ao seu caso. O plano também define o que observar e quando entrar em contato. Evite copiar o esquema de outra pessoa, porque ele pode não servir para você.',
          },
          {
            question: 'Já parei por conta própria. E agora?',
            answer:
              'Não há motivo para culpa. Fale com a equipe de saúde assim que puder e conte quando parou e como tem se sentido. Não retome a dose anterior por conta própria sem orientação. Diante de um sinal de alerta, procure atendimento urgente.',
          },
          {
            question: 'E se a receita ou o medicamento acabar?',
            answer:
              'Procure a equipe de saúde antes de acabar, se possível. Sem acesso a quem prescreveu, busque a unidade básica de saúde ou o CAPS da sua região para receber orientação.',
          },
        ],
      },
    ],
    reminder:
      'Antes de parar ou reduzir um medicamento, fale com a sua equipe de saúde. Encerrar o uso com segurança é um plano que vocês podem fazer juntos.',
  },
]
