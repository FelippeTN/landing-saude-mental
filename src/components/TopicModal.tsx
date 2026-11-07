import { useEffect, useId, useRef, type MouseEvent } from 'react'
import type { Topic, TopicTab } from '../content/topics'
import { Accordion } from './Accordion'
import { Tabs } from './Tabs'
import { TopicIcon } from './TopicIcon'

type TopicModalProps = {
  topic: Topic
  onClose: () => void
}

function TabContent({ tab }: { tab: TopicTab }) {
  return (
    <div className="space-y-4">
      {tab.alert && (
        <div className="rounded-3xl border-2 border-texto bg-fundo p-5">
          <h3 className="text-lg font-black">{tab.alert.title}</h3>
          <ul className="mt-2 list-disc space-y-1.5 pl-5">
            {tab.alert.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-3 font-bold">{tab.alert.description}</p>
        </div>
      )}
      <Accordion items={tab.questions} />
    </div>
  )
}

export function TopicModal({ topic, onClose }: TopicModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const pressedOnBackdrop = useRef(false)
  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog && !dialog.open) dialog.showModal()
  }, [])

  // O alvo só é o próprio <dialog> no fundo escurecido. Exigir o mesmo alvo ao pressionar
  // evita fechar o modal quando alguém arrasta uma seleção de texto para fora dele.
  function handleMouseDown(event: MouseEvent<HTMLDialogElement>) {
    pressedOnBackdrop.current = event.target === event.currentTarget
  }

  function handleClick(event: MouseEvent<HTMLDialogElement>) {
    if (pressedOnBackdrop.current && event.target === event.currentTarget) {
      event.currentTarget.close()
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      className="m-auto h-[min(44rem,calc(100dvh-1.5rem))] max-h-none w-[min(46rem,calc(100%-1.5rem))] max-w-none animate-modal flex-col overflow-hidden rounded-[2rem] bg-fundo text-texto open:flex"
    >
      <header className="flex shrink-0 items-start gap-4 bg-secao px-5 py-5 sm:px-8">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-card">
          <TopicIcon name={topic.icon} className="size-7" />
        </span>
        <h2
          id={titleId}
          className="min-w-0 flex-1 self-center text-xl font-black tracking-tight text-balance sm:text-2xl"
        >
          {topic.title}
        </h2>
        <button
          type="button"
          aria-label="Fechar"
          onClick={() => dialogRef.current?.close()}
          className="flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-botao transition-transform duration-150 hover:scale-105"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="3"
            aria-hidden="true"
            className="size-5"
          >
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-6 sm:px-8">
        <p className="pt-5 text-lg text-pretty">{topic.intro}</p>

        <Tabs
          label={`Seções sobre ${topic.title}`}
          items={topic.tabs.map((tab) => ({
            id: tab.id,
            label: tab.label,
            content: <TabContent tab={tab} />,
          }))}
        />

        <p className="mt-6 rounded-3xl bg-secao p-5 font-bold text-pretty">
          {topic.reminder}
        </p>
      </div>
    </dialog>
  )
}
