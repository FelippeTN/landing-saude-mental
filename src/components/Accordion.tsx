import { useId, useState } from 'react'
import type { QuestionAnswer } from '../content/topics'

type AccordionProps = {
  items: QuestionAnswer[]
}

export function Accordion({ items }: AccordionProps) {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-linha overflow-hidden rounded-3xl bg-secao">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const buttonId = `${baseId}-pergunta-${index}`
        const panelId = `${baseId}-resposta-${index}`

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 px-5 py-3 text-left font-extrabold transition-colors duration-200 hover:bg-card/50 active:bg-card"
              >
                {item.question}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  aria-hidden="true"
                  className={`size-5 shrink-0 opacity-60 transition-transform duration-[400ms] ease-ios ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows] duration-[400ms] ease-ios ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <div
                  className={`px-5 pb-5 transition-[opacity,transform] duration-[400ms] ease-ios ${
                    isOpen ? 'opacity-100' : '-translate-y-1 opacity-0'
                  }`}
                >
                  <p>{item.answer}</p>
                  {item.items && (
                    <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-texto">
                      {item.items.map((listItem) => (
                        <li key={listItem}>{listItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
