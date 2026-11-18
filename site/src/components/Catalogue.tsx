import { Fragment, useState } from 'react'
import { skills } from '../data/content'
import { Plus } from './icons'
import { REPO } from '../lib/constants'

type Entry = { skill: (typeof skills)[number]; folio: number }
type Group = { name: string; entries: Entry[] }

const groups: Group[] = []
skills.forEach((skill, i) => {
  const entry = { skill, folio: i + 1 }
  const last = groups[groups.length - 1]
  if (last && last.name === skill.group) last.entries.push(entry)
  else groups.push({ name: skill.group, entries: [entry] })
})

export function Catalogue() {
  const [open, setOpen] = useState<string | null>(skills[0]?.name ?? null)

  return (
    <section id="skills" className="border-t border-rule">
      <div className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-[24ch] text-[clamp(1.9rem,3.2vw,2.75rem)] leading-[1.1]">
            {skills.length} skills, in {groups.length} groups.
          </h2>
          <p className="max-w-[44ch] text-[15px] leading-[1.7] text-soft">
            Open a row for what it covers and when your agent summons it. The name column is the whole
            index your agent matches against.
          </p>
        </div>

        <div className="mt-10 border-t border-brass/40">
          {groups.map((group) => (
            <Fragment key={group.name}>
              <div className="flex items-baseline gap-3 border-b border-rule py-2.5">
                <h3 className="label">{group.name}</h3>
                <span aria-hidden="true" className="leader" />
                <span className="font-mono text-[12px] leading-5 tabular-nums text-soft">
                  {group.entries.length}
                </span>
              </div>

              <ul>
                {group.entries.map(({ skill, folio }) => {
                  const isOpen = open === skill.name
                  const panelId = `skill-${skill.name}`

                  return (
                    <li key={skill.name} className="border-b border-rule">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? null : skill.name)}
                        className="group grid w-full grid-cols-[1.75rem_1fr_auto] items-baseline gap-x-3 py-4 text-left transition-colors hover:text-brass md:grid-cols-[2.5rem_13rem_1fr_auto] md:gap-x-5"
                      >
                        <span className="font-mono text-[12px] leading-6 tabular-nums text-soft">
                          {String(folio).padStart(2, '0')}
                        </span>
                        <span className="text-[18px] leading-none">{skill.name}</span>
                        <span className="hidden text-[15px] leading-6 text-soft md:block">
                          {skill.summary}
                        </span>
                        <Plus
                          className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? 'rotate-45 text-brass' : 'text-soft'}`}
                        />
                      </button>

                      {isOpen && (
                        <div
                          id={panelId}
                          className="grid gap-3 pb-5 md:grid-cols-[2.5rem_13rem_1fr] md:gap-x-5"
                        >
                          <span aria-hidden="true" className="hidden md:block" />
                          <span aria-hidden="true" className="hidden md:block" />
                          <div>
                            <p className="max-w-[58ch] text-[15px] leading-6">{skill.summoned}</p>
                            <a
                              href={`${REPO}/blob/main/.agents/skills/${skill.name}/SKILL.md`}
                              target="_blank"
                              rel="noreferrer"
                              className="mt-3 inline-block border-b border-rule font-mono text-[12px] leading-5 text-soft transition-colors hover:border-brass hover:text-brass"
                            >
                              .agents/skills/{skill.name}/SKILL.md
                            </a>
                          </div>
                        </div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
