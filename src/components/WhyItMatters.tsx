import { keyFacts, surveyNote } from '../content/evidence'

export function WhyItMatters() {
  return (
    <section
      aria-labelledby="importancia-titulo"
      className="bg-fundo px-5 py-16 sm:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="importancia-titulo"
          className="mx-auto max-w-2xl text-center text-3xl font-extrabold tracking-tight text-balance sm:text-4xl"
        >
          Por que falar sobre isso?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-pretty">
          Manter um tratamento pode ser difícil, e as dificuldades são comuns.
          Informação clara e apoio ajudam a tornar o uso de medicamentos mais
          seguro.
        </p>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {keyFacts.map((fact) => (
            <li key={fact.value} className="rounded-[2rem] bg-secao p-7">
              <p className="text-4xl font-black tracking-tight sm:text-5xl">
                {fact.value}
              </p>
              <p className="mt-3 text-lg text-pretty">{fact.description}</p>
              <p className="mt-3 text-sm font-bold text-pretty">
                Fonte: {fact.source}
              </p>
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
