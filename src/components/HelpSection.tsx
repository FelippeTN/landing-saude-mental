import { revealOrder } from '../hooks/useReveal'

const contacts = [
  {
    number: '188',
    name: 'CVV',
    description: 'Apoio emocional e prevenção do suicídio. Ligação gratuita, 24 horas.',
  },
  {
    number: '192',
    name: 'SAMU',
    description: 'Atendimento de urgência e emergência. Ligação gratuita, 24 horas.',
  },
]

export function HelpSection() {
  return (
    <section
      aria-labelledby="ajuda-titulo"
      className="bg-secao px-5 py-16 sm:px-8 md:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div data-reveal>
          <h2
            id="ajuda-titulo"
            className="text-3xl font-extrabold tracking-tight text-balance sm:text-4xl"
          >
            Você não precisa passar por isso sem apoio.
          </h2>
          <p className="mt-4 text-lg text-pretty">
            Se tiver dúvidas sobre o seu medicamento, fale com quem prescreveu ou
            com a sua equipe de saúde. Em uma situação de urgência, peça ajuda
            agora.
          </p>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {contacts.map((contact, index) => (
            <li key={contact.number} data-reveal style={revealOrder(index + 1)}>
              <div className="cartao flex h-full flex-col rounded-[2rem] bg-card p-6">
                <p className="text-5xl leading-none font-black tracking-tighter">
                  {contact.number}
                </p>
                <p className="mt-3 text-xl font-extrabold">{contact.name}</p>
                <p className="mt-1 mb-5 text-pretty">{contact.description}</p>
                <a
                  href={`tel:${contact.number}`}
                  className="botao mt-auto w-full bg-fundo"
                  aria-label={`Ligar para ${contact.name}, número ${contact.number}`}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="size-5"
                  >
                    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8Z" />
                  </svg>
                  Ligar
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
