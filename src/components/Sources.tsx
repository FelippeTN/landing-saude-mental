import { references } from '../content/evidence'

export function Sources() {
  return (
    <section
      id="fontes"
      aria-labelledby="fontes-titulo"
      className="scroll-mt-4 bg-fundo px-5 py-16 sm:px-8 md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="fontes-titulo"
          className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl"
        >
          Fontes
        </h2>
        <p className="mt-4 text-lg text-pretty">
          Este conteúdo é educativo e foi organizado a partir das referências
          abaixo.
        </p>

        <ul className="mt-8 space-y-4">
          {references.map((reference) => (
            <li key={reference.url} className="text-pretty">
              <a
                href={reference.url}
                target="_blank"
                rel="noreferrer"
                className="break-words underline decoration-botao decoration-2 underline-offset-2"
              >
                {reference.citation}
              </a>
              {reference.note && (
                <span className="mt-1 block text-sm font-bold">{reference.note}</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
