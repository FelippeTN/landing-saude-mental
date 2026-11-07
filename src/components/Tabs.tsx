import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react'

export type TabItem = {
  id: string
  label: string
  content: ReactNode
}

type TabsProps = {
  items: TabItem[]
  label: string
}

export function Tabs({ items, label }: TabsProps) {
  const baseId = useId()
  const [activeIndex, setActiveIndex] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const activeTab = items[activeIndex]
  const tabId = (id: string) => `${baseId}-aba-${id}`
  const panelId = (id: string) => `${baseId}-painel-${id}`

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const lastIndex = items.length - 1
    const nextIndexByKey: Record<string, number> = {
      ArrowRight: activeIndex === lastIndex ? 0 : activeIndex + 1,
      ArrowLeft: activeIndex === 0 ? lastIndex : activeIndex - 1,
      Home: 0,
      End: lastIndex,
    }
    const nextIndex = nextIndexByKey[event.key]
    if (nextIndex === undefined) return

    event.preventDefault()
    setActiveIndex(nextIndex)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <div>
      <div className="sticky top-0 z-10 -mx-5 bg-fundo/80 px-5 py-3 backdrop-blur-md sm:-mx-8 sm:px-8">
        <div
          role="tablist"
          aria-label={label}
          onKeyDown={handleKeyDown}
          className="relative flex rounded-full bg-card/70 p-1"
        >
          <span
            aria-hidden="true"
            className="absolute top-1 bottom-1 left-1 rounded-full bg-fundo shadow-suave transition-transform duration-[450ms] ease-ios"
            style={{
              width: `calc((100% - 0.5rem) / ${items.length})`,
              transform: `translateX(${activeIndex * 100}%)`,
            }}
          />
          {items.map((item, index) => {
            const isActive = index === activeIndex
            return (
              <button
                key={item.id}
                ref={(element) => {
                  tabRefs.current[index] = element
                }}
                id={tabId(item.id)}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={isActive ? panelId(item.id) : undefined}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                className={`relative min-h-11 flex-1 basis-0 cursor-pointer rounded-full px-2 text-sm font-extrabold transition-opacity duration-200 sm:text-base ${
                  isActive ? '' : 'opacity-70 hover:opacity-100'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </div>
      </div>

      <div
        key={activeTab.id}
        id={panelId(activeTab.id)}
        role="tabpanel"
        aria-labelledby={tabId(activeTab.id)}
        tabIndex={0}
        className="animate-painel rounded-2xl pt-2"
      >
        {activeTab.content}
      </div>
    </div>
  )
}
