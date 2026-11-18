import { CommandBlock } from './CommandBlock'
import { Tablet } from './Tablet'
import { INSTALL_CMD, REPO } from '../lib/constants'

const links = [
  ['GitHub', REPO],
  ['AGENTS.md', `${REPO}/blob/main/AGENTS.md`],
  ['MIT License', `${REPO}/blob/main/LICENSE`],
] as const

export function Colophon() {
  return (
    <footer id="install" className="border-t border-rule">
      <div className="mx-auto grid max-w-page gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
        <div className="min-w-0">
          <h2 className="max-w-[24ch] text-[clamp(1.9rem,3.2vw,2.75rem)] leading-[1.1]">
            Install it into the repository you are in.
          </h2>
          <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.7] text-soft">
            Copies AGENTS.md and .agents/skills/ into the current directory. Re-running the command
            updates them.
          </p>

          <div className="mt-7 space-y-4">
            <Tablet>
              <CommandBlock command={INSTALL_CMD} label="Copy the install command" />
            </Tablet>
            <Tablet>
              <CommandBlock
                command={`${INSTALL_CMD} -s -- ./path/to/repo`}
                label="Copy the install command for a specific path"
              />
            </Tablet>
          </div>
          <p className="mt-4 text-[14px] leading-6 text-soft">
            The second form installs into another path. Nothing in that repository is deleted.
          </p>
        </div>

        <div className="min-w-0 lg:pt-2">
          <p className="font-display text-[22px] font-semibold leading-none">GodForge</p>
          <ul className="mt-6 border-t border-rule">
            {links.map(([name, href]) => (
              <li key={name} className="border-b border-rule">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-baseline justify-between gap-4 py-3 text-[15px] transition-colors hover:text-brass"
                >
                  {name}
                  <span aria-hidden="true" className="font-mono text-[12px] text-soft">
                    {href.replace(REPO, '')}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-[34ch] text-[14px] leading-6 text-soft">
            Fork it, add a SKILL.md, open a pull request.
          </p>
        </div>
      </div>
    </footer>
  )
}
