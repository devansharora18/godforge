import type { SVGProps } from 'react'

type Icon = (props: SVGProps<SVGSVGElement>) => JSX.Element

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

export const Copy: Icon = (props) => (
  <svg {...base} aria-hidden="true" {...props}>
    <rect x="9" y="9" width="11" height="11" />
    <path d="M15 5.5V4H4v11h1.5" />
  </svg>
)

export const Check: Icon = (props) => (
  <svg {...base} aria-hidden="true" {...props}>
    <path d="M4.5 12.5 9.5 17.5 19.5 6.5" />
  </svg>
)

export const Plus: Icon = (props) => (
  <svg {...base} aria-hidden="true" {...props}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const Sun: Icon = (props) => (
  <svg {...base} aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4" />
  </svg>
)

export const Moon: Icon = (props) => (
  <svg {...base} aria-hidden="true" {...props}>
    <path d="M20.5 13.4A8.5 8.5 0 1 1 10.6 3.5a6.6 6.6 0 0 0 9.9 9.9Z" />
  </svg>
)
