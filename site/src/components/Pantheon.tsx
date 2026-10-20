import { useState } from 'react'
import { skills } from '../data/content'
import { ArrowUpRight, Plus } from './icons'
import { REPO } from '../lib/constants'

export function Pantheon() {
  const [open, setOpen] = useState<string | null>('architecture')

  return (
    <section id="pantheon" className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-20">
      <div data-reveal className="flex flex-col gap-6 border-b border-ink pb-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="label">03 — The pantheon</p>
          <h2 className="mt-3 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[0.98]">
            Seven skills, dormant
            <span className="block italic text-soft">until the task calls for one.</span>
          </h2>
        </div>
        <p className="max-w-[40ch] text-[14px] leading-6 text-soft">
          Each entry is a <code className="font-mono text-[12.5px] text-ink">SKILL.md</code> with frontmatter
          at the top. Open a row to see what it covers and when your agent summons it.
        </p>
      </div>

      <ul className="border-b border-rule">
        {skills.map((skill) => {
          const isOpen = open === skill.name
          const panelId = `skill-${skill.name}`
          return (
            <li key={skill.name} className="border-b border-rule last:border-b-0">
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : skill.name)}
                  className="group grid w-full grid-cols-[2rem_1fr_auto] items-baseline gap-x-4 py-5 text-left md:grid-cols-[2.5rem_10rem_1fr_auto] md:gap-x-6"
                >
                  <span
                    className={`font-mono text-[11px] leading-6 transition-colors ${isOpen ? 'text-ember' : 'text-soft'}`}
                  >
                    {skill.numeral}
                  </span>
                  <span
                    className={`font-serif text-[24px] leading-none transition-colors md:text-[26px] ${isOpen ? 'text-ember' : 'group-hover:text-ember'}`}
                  >
                    {skill.name}
                  </span>
                  <span className="hidden text-[13px] leading-6 text-soft md:block">{skill.summary}</span>
                  <Plus
                    className={`h-4 w-4 text-soft transition-transform duration-200 ${isOpen ? 'rotate-45 text-ember' : 'group-hover:text-ink'}`}
                  />
                </button>
              </h3>

              {isOpen && (
                <div id={panelId} className="grid gap-4 pb-6 md:grid-cols-[2.5rem_10rem_1fr] md:gap-x-6">
                  <span aria-hidden="true" className="hidden md:block" />
                  <span aria-hidden="true" className="hidden md:block" />
                  <div>
                    <p className="label text-ember">Summoned when</p>
                    <p className="mt-1.5 max-w-[56ch] text-[14px] leading-6 text-ink">{skill.summoned}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
                      <code className="font-mono text-[11.5px] text-soft">
                        .agents/skills/{skill.name}/SKILL.md
                      </code>
                      <a
                        href={`${REPO}/blob/main/.agents/skills/${skill.name}/SKILL.md`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 border-b border-rule pb-0.5 text-[12.5px] text-soft transition-colors hover:border-ember hover:text-ember"
                      >
                        Open SKILL.md <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </li>
          )
        })}
      </ul>

      <p className="mt-4 font-mono text-[10.5px] uppercase tracking-label text-soft">
        Nothing is loaded speculatively · the index is always cheap
      </p>
    </section>
  )
}
