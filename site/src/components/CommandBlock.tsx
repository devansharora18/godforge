import { useEffect, useRef, useState } from 'react'
import { Check, Copy } from './icons'

/** Wrap long URLs at path separators instead of mid-token. */
const breakable = (command: string) =>
  command.split(/(?<=\/)/).map((part, i) => (
    <span key={i}>
      {part}
      <wbr />
    </span>
  ))

export function CommandBlock({
  command,
  label = 'Copy command',
  inverse = false,
}: {
  command: string
  label?: string
  inverse?: boolean
}) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<number>()

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command)
    } catch {
      return
    }
    setCopied(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <div className={`flex items-stretch border ${inverse ? 'border-term-fg/25 bg-white/[0.04]' : 'border-rule bg-raise'}`}>
      <code
        className={`min-w-0 flex-1 break-words px-4 py-3.5 font-mono text-[12.5px] leading-6 ${inverse ? 'text-term-fg' : 'text-ink'}`}
      >
        <span aria-hidden="true" className="mr-2 select-none text-ember">$</span>
        {breakable(command)}
      </code>
      <button
        type="button"
        onClick={copy}
        aria-label={label}
        className={`flex shrink-0 items-center gap-2 border-l px-3 font-mono text-[10.5px] uppercase tracking-label transition-colors sm:px-4 ${
          inverse
            ? 'border-term-fg/25 text-term-fg/70 hover:bg-white/10 hover:text-term-fg'
            : 'border-rule text-soft hover:bg-paper hover:text-ink'
        }`}
      >
        {copied ? <Check className="h-3.5 w-3.5 text-ember" /> : <Copy className="h-3.5 w-3.5" />}
        <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
      </button>
      <span aria-live="polite" className="sr-only">{copied ? 'Command copied to clipboard' : ''}</span>
    </div>
  )
}
