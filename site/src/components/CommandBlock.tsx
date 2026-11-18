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

/** A bare row. The caller supplies the frame (see Tablet). */
export function CommandBlock({ command, label = 'Copy command' }: { command: string; label?: string }) {
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
    <div className="flex flex-col items-stretch sm:flex-row">
      <code className="min-w-0 flex-1 break-words px-4 py-3.5 font-mono text-[11.5px] leading-6 text-ink sm:text-[12.5px]">
        <span aria-hidden="true" className="mr-2 select-none text-brass">
          $
        </span>
        {breakable(command)}
      </code>
      <button
        type="button"
        onClick={copy}
        aria-label={label}
        className="flex shrink-0 items-center justify-center gap-2 border-t border-rule px-4 py-2.5 text-soft transition-colors hover:bg-ground hover:text-brass sm:border-l sm:border-t-0 sm:py-0"
      >
        {copied ? <Check className="h-3.5 w-3.5 text-brass" /> : <Copy className="h-3.5 w-3.5" />}
        <span className="text-[13px]">{copied ? 'Copied' : 'Copy'}</span>
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? 'Command copied to clipboard' : ''}
      </span>
    </div>
  )
}
