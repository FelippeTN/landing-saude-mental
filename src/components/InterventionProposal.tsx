import {
  interventionAxes,
  proposalAudience,
  proposalIndicators,
  proposalLimits,
  proposalObjective,
  proposalSetting,
  proposalSteps,
} from '../content/evidence'

const summary = [
  { label: 'Objetivo', text: proposalObjective },
  { label: 'Público', text: proposalAudience },
  { label: 'Local sugerido', text: proposalSetting },
]

export function InterventionProposal() {
  return (
    <section
      id="proposta"
      aria-labelledby="proposta-titulo"
      className="scroll-mt-4 bg-secao px-5 py-16 sm:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="proposta-titulo"
          className="mx-auto max-w-2xl text-center text-3xl font-extrabold tracking-tight text-balance sm:text-4xl"
        >
          Proposta de intervenção para o uso racional de medicamentos
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-pretty">
          Esta é uma proposta para serviços de saúde, baseada nas fontes do site.
          Ela ainda não é um serviço disponível.
        </p>

        <dl className="mt-12 grid gap-6 md:grid-cols-3">
          {summary.map((item) => (
            <div key={item.label} className="rounded-[2rem] bg-card p-7">
              <dt className="text-xl font-black tracking-tight">{item.label}</dt>
              <dd className="mt-2 text-lg text-pretty">{item.text}</dd>
            </div>
          ))}
        </dl>

        <h3 className="mt-16 text-2xl font-extrabold tracking-tight text-balance">
          Sete eixos de ação
        </h3>
        <ol className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {interventionAxes.map((axis, index) => (
            <li key={axis.title} className="flex flex-col rounded-[2rem] bg-fundo p-7">
              <span
                aria-hidden="true"
                className="flex size-11 items-center justify-center rounded-full bg-botao text-lg font-black"
              >
                {index + 1}
              </span>
              <h4 className="mt-4 text-xl font-extrabold tracking-tight text-balance">
                {axis.title}
              </h4>
              <p className="mt-2 text-pretty">{axis.action}</p>
              <p className="mt-3 text-sm font-bold text-pretty">
                Base: {axis.basis}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight text-balance">
              Etapas sugeridas
            </h3>
            <ol className="mt-6 space-y-4">
              {proposalSteps.map((step) => (
                <li key={step.title} className="rounded-3xl bg-fundo p-5">
                  <h4 className="text-lg font-extrabold">
                    {step.title} ({step.duration})
                  </h4>
                  <p className="mt-1 text-pretty">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold tracking-tight text-balance">
              Como acompanhar os resultados
            </h3>
            <ul className="mt-6 list-disc space-y-2 pl-5 text-lg marker:text-texto">
              {proposalIndicators.map((indicator) => (
                <li key={indicator}>{indicator}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border-2 border-texto p-5">
          <h3 className="text-lg font-black">Limites desta proposta</h3>
          <p className="mt-1 text-pretty">{proposalLimits}</p>
        </div>
      </div>
    </section>
  )
}
