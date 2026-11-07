function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 480 440"
      aria-hidden="true"
      className="mx-auto w-full max-w-md lg:max-w-none"
    >
      <path
        d="M72 214C60 112 136 34 244 28c106-6 186 62 196 164 10 104-58 196-176 212C142 420 84 322 72 214Z"
        fill="var(--color-card)"
      />

      <g className="origin-center animate-respirar [transform-box:fill-box]">
        <circle cx="240" cy="182" r="112" fill="var(--color-botao)" opacity="0.45" />
        <circle cx="240" cy="182" r="76" fill="var(--color-botao)" />
      </g>

      <path
        d="M34 340c62-62 124-74 192-34 58 34 130 26 220-18v108a24 24 0 0 1-24 24H58a24 24 0 0 1-24-24v-56Z"
        fill="var(--color-botao)"
      />
      <path
        d="M34 386c78-40 156-40 226-14 62 22 122 14 186-16v44a24 24 0 0 1-24 24H58a24 24 0 0 1-24-24v-14Z"
        fill="var(--color-texto)"
      />

      <g fill="none" stroke="var(--color-texto)" strokeLinecap="round" strokeWidth="7">
        <path d="M240 354c0-34 0-52 0-74" />
        <path d="M240 312c-8-24-26-36-50-36 2 24 22 38 50 36Z" fill="var(--color-fundo)" />
        <path d="M240 292c8-24 26-36 50-36-2 24-22 38-50 36Z" fill="var(--color-fundo)" />
      </g>

      <g className="animate-flutuar" fill="var(--color-fundo)">
        <ellipse cx="96" cy="118" rx="42" ry="18" />
        <ellipse cx="122" cy="104" rx="26" ry="18" />
      </g>
      <g
        className="animate-flutuar [animation-delay:-4s]"
        fill="var(--color-fundo)"
      >
        <ellipse cx="392" cy="86" rx="36" ry="15" />
        <ellipse cx="372" cy="74" rx="22" ry="15" />
      </g>
    </svg>
  )
}

export function Hero() {
  return (
    <div className="bg-secao">
      <div className="px-5 sm:px-8">
        <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 py-5">
          <span className="text-xl font-black tracking-tight">Cuidar em Dia</span>
          <a
            href="#temas"
            className="rounded-full px-2 py-1 font-bold underline decoration-botao decoration-4 underline-offset-4"
          >
            Temas
          </a>
        </header>

        <div className="mx-auto grid max-w-6xl items-center gap-10 pt-6 pb-10 lg:grid-cols-2 lg:pt-10 lg:pb-16">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-black tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Entender o tratamento também é cuidar da mente.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-pretty sm:text-xl lg:mx-0">
              Respostas simples e acolhedoras sobre o uso de medicamentos na saúde
              mental, para você conversar com mais confiança com a sua equipe de
              saúde.
            </p>
            <a href="#temas" className="botao mt-8 text-lg">
              Escolher um tema
            </a>
          </div>

          <HeroIllustration />
        </div>
      </div>

      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="block h-10 w-full fill-fundo md:h-20"
      >
        <path d="M0 48c240 40 480 40 720 12s480-40 720 4v16H0Z" />
      </svg>
    </div>
  )
}
