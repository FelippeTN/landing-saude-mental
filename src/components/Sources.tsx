import { references } from '../content/evidence'

export function Sources() {
  return (
    <section
      id="fontes"
      aria-labelledby="fontes-titulo"
      className="bg-fundo px-5 py-16 sm:px-8 md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="fontes-titulo"
          data-reveal
          className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl"
        >
          Fontes
        </h2>
        <p data-reveal className="mt-4 text-lg text-pretty">
          Este conteúdo é educativo e foi organizado a partir das referências
          abaixo.
        </p>

        <ul
          data-reveal
          className="mt-8 divide-y divide-linha overflow-hidden rounded-3xl bg-secao shadow-suave"
        >
          {references.map((reference) => (
            <li key={reference.url} className="text-pretty">
              <a
                href={reference.url}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start justify-between gap-4 px-5 py-4 break-words transition-colors duration-200 hover:bg-card/50 active:bg-card"
              >
                <span>
                  {reference.citation}
                  {reference.note && (
                    <span className="mt-1 block text-sm font-bold opacity-70">
                      {reference.note}
                    </span>
                  )}
                  <span className="sr-only"> (abre em nova aba)</span>
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  aria-hidden="true"
                  className="mt-1 size-4 shrink-0 opacity-50 transition-transform duration-300 ease-ios group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
