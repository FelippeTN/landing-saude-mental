import {
  useEffect,
  useId,
  useRef,
  useState,
  type AnimationEvent,
  type MouseEvent,
  type SyntheticEvent,
} from 'react'
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
  const [closing, setClosing] = useState(false)
  const titleId = useId()

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog && !dialog.open) dialog.showModal()
  }, [])

  // Garante o fechamento mesmo se a animação de saída não chegar a rodar.
  useEffect(() => {
    if (!closing) return
    const timeout = window.setTimeout(() => dialogRef.current?.close(), 450)
    return () => window.clearTimeout(timeout)
  }, [closing])

  // Toca a animação de saída antes de fechar de fato o <dialog>.
  function requestClose() {
    setClosing(true)
  }

  function handleAnimationEnd(event: AnimationEvent<HTMLDialogElement>) {
    if (closing && event.target === event.currentTarget) {
      event.currentTarget.close()
    }
  }

  function handleCancel(event: SyntheticEvent<HTMLDialogElement>) {
    event.preventDefault()
    requestClose()
  }

  // O alvo só é o próprio <dialog> no fundo escurecido. Exigir o mesmo alvo ao pressionar
  // evita fechar o modal quando alguém arrasta uma seleção de texto para fora dele.
  function handleMouseDown(event: MouseEvent<HTMLDialogElement>) {
    pressedOnBackdrop.current = event.target === event.currentTarget
  }

  function handleClick(event: MouseEvent<HTMLDialogElement>) {
    if (pressedOnBackdrop.current && event.target === event.currentTarget) {
      requestClose()
    }
  }

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      data-fechando={closing ? '' : undefined}
      onClose={onClose}
      onCancel={handleCancel}
      onAnimationEnd={handleAnimationEnd}
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      className="folha mx-0 mt-auto mb-0 h-[calc(100dvh-2.5rem)] max-h-none w-full max-w-none flex-col overflow-hidden rounded-t-[2rem] bg-fundo text-texto shadow-elevado open:flex sm:m-auto sm:h-[min(44rem,calc(100dvh-1.5rem))] sm:w-[min(46rem,calc(100%-1.5rem))] sm:rounded-[2rem]"
    >
      <header className="relative flex shrink-0 items-start gap-4 border-b border-linha bg-secao px-5 pt-6 pb-4 sm:px-8 sm:py-5">
        <span
          aria-hidden="true"
          className="absolute top-2 left-1/2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-texto/20 sm:hidden"
        />
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-card shadow-suave">
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
          onClick={requestClose}
          className="flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-texto/10 transition-[transform,background-color] duration-200 ease-ios hover:bg-texto/15 active:scale-90"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="3"
            aria-hidden="true"
            className="size-4"
          >
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </button>
      </header>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pb-6 sm:px-8">
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
