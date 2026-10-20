import { CommandBlock } from './CommandBlock'
import { ArrowUpRight } from './icons'
import { INSTALL_CMD, REPO } from '../lib/constants'

export function Close() {
  return (
    <section id="forge" className="bg-term text-term-fg">
      <div className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-16">
          <div data-reveal>
            <p className="label text-term-fg/70">06 — Forge the repo</p>
            <h2 className="mt-4 font-serif text-[clamp(2.5rem,5.2vw,4.5rem)] leading-[0.94]">
              Drop the law.
              <span className="block italic text-term-fg/65">Summon the skills.</span>
            </h2>
          </div>

          <div>
            <CommandBlock command={INSTALL_CMD} label="Copy the install command" inverse />
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              <a
                href={REPO}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 border-b border-term-fg/40 pb-0.5 text-[13px] text-term-fg transition-colors hover:border-ember hover:text-ember"
              >
                View on GitHub <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
              <span className="font-mono text-[10.5px] uppercase tracking-label text-term-fg/70">
                MIT · no dependencies
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
