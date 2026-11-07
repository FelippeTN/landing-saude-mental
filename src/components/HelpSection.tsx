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
        <div>
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
          {contacts.map((contact) => (
            <li key={contact.number} className="rounded-[2rem] bg-card p-6">
              <a
                href={`tel:${contact.number}`}
                className="rounded-lg text-5xl font-black tracking-tight"
                aria-label={`Ligar para ${contact.name}, número ${contact.number}`}
              >
                {contact.number}
              </a>
              <p className="mt-2 text-xl font-extrabold">{contact.name}</p>
              <p className="mt-1 text-pretty">{contact.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
