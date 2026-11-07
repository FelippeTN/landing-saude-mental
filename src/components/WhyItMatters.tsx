import { keyFacts, surveyNote } from '../content/evidence'
import { revealOrder } from '../hooks/useReveal'

export function WhyItMatters() {
  return (
    <section
      id="importancia"
      aria-labelledby="importancia-titulo"
      className="bg-fundo px-5 py-16 sm:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="importancia-titulo"
          data-reveal
          className="mx-auto max-w-2xl text-center text-3xl font-extrabold tracking-tight text-balance sm:text-4xl"
        >
          Por que falar sobre isso?
        </h2>
        <p data-reveal className="mx-auto mt-4 max-w-2xl text-center text-lg text-pretty">
          Manter um tratamento pode ser difícil, e as dificuldades são comuns.
          Informação clara e apoio ajudam a tornar o uso de medicamentos mais
          seguro.
        </p>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {keyFacts.map((fact, index) => (
            <li key={fact.value} data-reveal style={revealOrder(index)}>
              <div className="cartao flex h-full flex-col rounded-[2rem] bg-secao p-7 sm:p-8">
                <p className="bg-gradient-to-br from-texto to-texto/60 bg-clip-text text-5xl leading-none font-black tracking-tighter text-transparent sm:text-6xl">
                  {fact.value}
                </p>
                <p className="mt-4 text-lg text-pretty">{fact.description}</p>
                <p className="mt-auto pt-4 text-sm font-bold text-pretty opacity-70">
                  Fonte: {fact.source}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-3xl text-center text-pretty">
          {surveyNote}
        </p>
      </div>
    </section>
  )
}
