import { useId, useState } from 'react'
import type { QuestionAnswer } from '../content/topics'

type AccordionProps = {
  items: QuestionAnswer[]
}

export function Accordion({ items }: AccordionProps) {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        const buttonId = `${baseId}-pergunta-${index}`
        const panelId = `${baseId}-resposta-${index}`

        return (
          <div
            key={item.question}
            className={`rounded-3xl transition-colors duration-200 ${
              isOpen ? 'bg-card' : 'bg-secao'
            }`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 rounded-3xl px-5 py-3 text-left font-extrabold"
              >
                {item.question}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="3"
                  aria-hidden="true"
                  className={`size-5 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="px-5 pb-5">
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
