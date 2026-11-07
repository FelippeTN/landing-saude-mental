import { useEffect, type CSSProperties } from 'react'

/** Atraso escalonado para itens revelados em sequência (usa `--i` no CSS). */
export function revealOrder(index: number) {
  return { '--i': index } as CSSProperties
}

/**
 * Observa todos os elementos com `data-reveal` e adiciona a classe `visivel`
 * quando entram na tela. Cada elemento é revelado uma única vez.
 */
export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('visivel'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('visivel')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])
}
