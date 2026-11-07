import type { ReactNode } from 'react'
import type { TopicIconName } from '../content/topics'

type TopicIconProps = {
  name: TopicIconName
  className?: string
}

const iconPaths: Record<TopicIconName, ReactNode> = {
  calendar: (
    <>
      <rect x="8" y="12" width="32" height="28" rx="7" />
      <path d="M8 21h32M17 7v9M31 7v9" />
      <path d="m18 30 4.5 4.5L31 26" />
    </>
  ),
  bell: (
    <>
      <path d="M24 7c-7.5 0-12 5.5-12 12.5 0 7-2 10.5-5 13.5h34c-3-3-5-6.5-5-13.5C36 12.5 31.5 7 24 7Z" />
      <path d="M19.5 39a4.8 4.8 0 0 0 9 0" />
    </>
  ),
  steps: <path d="M7 40h9v-9h8v-9h8v-9h9" />,
}

export function TopicIcon({ name, className }: TopicIconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.5"
      aria-hidden="true"
      className={className}
    >
      {iconPaths[name]}
    </svg>
  )
}
