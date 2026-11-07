import { careNetworkNote, careServices } from '../content/evidence'
import { revealOrder } from '../hooks/useReveal'

export function CareNetwork() {
  return (
    <section
      id="rede"
      aria-labelledby="rede-titulo"
      className="bg-fundo px-5 py-16 sm:px-8 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="rede-titulo"
          data-reveal
          className="mx-auto max-w-2xl text-center text-3xl font-extrabold tracking-tight text-balance sm:text-4xl"
        >
          Onde buscar cuidado no SUS
        </h2>
        <p data-reveal className="mx-auto mt-4 max-w-2xl text-center text-lg text-pretty">
          Você pode tirar dúvidas sobre o medicamento em diferentes pontos da
          rede de saúde.
        </p>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {careServices.map((service, index) => (
            <li key={service.name} data-reveal style={revealOrder(index % 2)}>
              <div className="cartao h-full rounded-[2rem] bg-secao p-7">
                <h3 className="text-xl font-extrabold tracking-tight text-balance">
                  {service.name}
                </h3>
                <p className="mt-2 text-lg text-pretty">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-pretty">
          {careNetworkNote}
        </p>
      </div>
    </section>
  )
}
