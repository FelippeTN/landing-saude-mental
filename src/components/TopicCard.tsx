import type { Topic } from '../content/topics'
import { TopicIcon } from './TopicIcon'

type TopicCardProps = {
  topic: Topic
  onOpen: () => void
}

export function TopicCard({ topic, onOpen }: TopicCardProps) {
  return (
    <article className="flex h-full flex-col items-start rounded-[2rem] bg-card p-7 transition-transform duration-200 hover:-translate-y-1 sm:p-8">
      <span className="flex size-16 items-center justify-center rounded-full bg-fundo">
        <TopicIcon name={topic.icon} className="size-9" />
      </span>
      <h3 className="mt-6 text-2xl font-extrabold tracking-tight text-balance">
        {topic.title}
      </h3>
      <p className="mt-3 mb-7 text-lg text-pretty">{topic.summary}</p>
      <button
        type="button"
        onClick={onOpen}
        aria-haspopup="dialog"
        className="botao mt-auto w-full"
      >
        {topic.buttonLabel}
      </button>
    </article>
  )
}
