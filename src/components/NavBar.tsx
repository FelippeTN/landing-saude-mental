import { useEffect, useLayoutEffect, useRef, useState } from 'react'

const navLinks = [
  { id: 'temas', label: 'Temas' },
  { id: 'rede', label: 'Rede de cuidado' },
  { id: 'fontes', label: 'Fontes' },
]

type Indicator = { left: number; width: number } | null

export function NavBar() {
  const sentinelRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState<string | null>(null)
  const [indicator, setIndicator] = useState<Indicator>(null)

  // Mostra a linha e a sombra da barra só depois que a página começa a rolar.
  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return
    const observer = new IntersectionObserver(([entry]) =>
      setScrolled(!entry.isIntersecting),
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  // Destaca o link da seção que está no meio da tela.
  useEffect(() => {
    const visible = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id)
          else visible.delete(entry.target.id)
        }
        const current = navLinks.find((link) => visible.has(link.id))
        setActiveId(current?.id ?? null)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const link of navLinks) {
      const section = document.getElementById(link.id)
      if (section) observer.observe(section)
    }
    return () => observer.disconnect()
  }, [])

  // Posiciona a pílula deslizante sob o link ativo.
  useLayoutEffect(() => {
    const list = listRef.current
    if (!list) return

    function measure() {
      const link = activeId ? linkRefs.current[activeId] : null
      setIndicator(link ? { left: link.offsetLeft, width: link.offsetWidth } : null)
      if (link && list && list.scrollWidth > list.clientWidth) {
        list.scrollTo({
          left: link.offsetLeft - (list.clientWidth - link.offsetWidth) / 2,
          behavior: 'smooth',
        })
      }
    }

    measure()
    const resizeObserver = new ResizeObserver(measure)
    resizeObserver.observe(list)
    return () => resizeObserver.disconnect()
  }, [activeId])

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" className="absolute top-0 h-px w-px" />
      <header
        className={`vidro sticky top-0 z-40 border-b px-5 transition-[border-color,box-shadow] duration-300 sm:px-8 ${
          scrolled ? 'border-linha shadow-suave' : 'border-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4">
          <a
            href="#"
            className="shrink-0 rounded-lg text-lg font-black tracking-tight sm:text-xl"
          >
            Cuidar em Dia
          </a>

          <nav aria-label="Seções da página" className="min-w-0">
            <ul
              ref={listRef}
              className="sem-barra relative flex snap-x gap-1 overflow-x-auto p-1"
            >
              <span
                aria-hidden="true"
                className="absolute top-1 bottom-1 left-0 rounded-full bg-botao shadow-suave transition-[transform,width,opacity] duration-500 ease-ios"
                style={{
                  width: indicator?.width ?? 0,
                  transform: `translateX(${indicator?.left ?? 0}px)`,
                  opacity: indicator ? 1 : 0,
                }}
              />
              {navLinks.map((link) => (
                <li key={link.id} className="shrink-0 snap-start">
                  <a
                    ref={(element) => {
                      linkRefs.current[link.id] = element
                    }}
                    href={`#${link.id}`}
                    aria-current={activeId === link.id ? 'location' : undefined}
                    className="relative flex min-h-9 items-center rounded-full px-3 text-sm font-bold whitespace-nowrap transition-colors duration-200 hover:bg-texto/5 sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
