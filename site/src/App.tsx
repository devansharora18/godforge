import { usePageMotion } from './lib/motion'
import { useTheme, ThemeToggle } from './components/ThemeToggle'
import { CommandBlock } from './components/CommandBlock'
import { Pantheon } from './components/Pantheon'
import { Law } from './components/Law'
import { Rite } from './components/Rite'
import { Close } from './components/Close'
import { ArrowDown, ArrowUpRight, Sigil } from './components/icons'
import { INSTALL_CMD, REPO } from './lib/constants'

export default function App() {
  const { theme, toggle } = useTheme()
  usePageMotion()

  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:font-mono focus:text-[11px] focus:uppercase focus:tracking-label focus:text-paper"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-4 px-5 sm:px-8">
          <a href="#top" className="flex items-center gap-2.5" aria-label="GodForge, back to top">
            <Sigil className="h-[22px] w-[22px] text-ink" />
            <span className="font-serif text-[22px] leading-none tracking-tight">GodForge</span>
            <span className="label ml-1 hidden normal-case tracking-normal sm:inline">v1.0 / MIT</span>
          </a>

          <nav aria-label="Sections" className="hidden items-center gap-7 text-[13px] text-soft md:flex">
            {[
              ['#pantheon', 'Pantheon'],
              ['#law', 'The law'],
              ['#rite', 'The rite'],
            ].map(([href, text]) => (
              <a key={href} href={href} className="transition-colors hover:text-ink">
                {text}
              </a>
            ))}
            <a href={REPO} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 transition-colors hover:text-ink">
              GitHub <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={toggle} />
            <a
              href="#install"
              className="flex h-9 items-center bg-ink px-4 font-mono text-[10.5px] uppercase tracking-label text-paper transition-colors hover:bg-ember"
            >
              Install
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="mx-auto max-w-page px-5 sm:px-8">
          <div className="grid gap-12 border-b border-rule pb-14 pt-12 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-16 lg:pb-16 lg:pt-16">
            <div>
              <p data-hero className="label flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="text-ember">§ 01</span>
                <span>The law and the will</span>
                <span aria-hidden="true" className="hidden h-px w-8 bg-rule sm:block" />
                <span className="hidden sm:inline">AGENTS.md · 7 skills</span>
              </p>

              <h1
                data-hero
                className="mt-7 font-serif text-[clamp(2.75rem,7.2vw,5.5rem)] leading-[0.93] tracking-[-0.02em]"
              >
                One file writes <span className="whitespace-nowrap">the commandments.</span>
                <span className="mt-2 block italic text-soft">
                  Seven skills <span className="whitespace-nowrap">carry out the will.</span>
                </span>
              </h1>

              <p data-hero className="mt-7 max-w-[47ch] text-[16.5px] leading-[1.65] text-soft">
                Your agent invents conventions, skips the small steps, and calls it done. Drop one file
                in the repo and it inherits a process instead — agile by default, incremental by rule,
                security-conscious from the first line.
              </p>

              <div data-hero className="mt-9">
                <div className="mb-2 flex items-baseline justify-between gap-4">
                  <span className="label">The rite of installation</span>
                  <span className="label hidden normal-case tracking-normal sm:inline">from any repo root</span>
                </div>
                <CommandBlock command={INSTALL_CMD} label="Copy the install command" />
                <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[12.5px] text-soft">
                  <span aria-hidden="true" className="h-1.5 w-1.5 bg-ember" />
                  No dependencies. No build step. Re-run to update.
                </p>
              </div>

              <div data-hero className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px]">
                <a
                  href={`${REPO}/blob/main/AGENTS.md`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 border-b border-ink pb-0.5 font-medium text-ink transition-colors hover:border-ember hover:text-ember"
                >
                  Read the law <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href="#pantheon"
                  className="inline-flex items-center gap-1.5 text-soft transition-colors hover:text-ink"
                >
                  Meet the seven <ArrowDown className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Terminal specimen */}
            <aside data-hero className="lg:pt-1">
              <div className="border border-rule bg-term text-term-fg dark:border-term-fg/20">
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
                  <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-label text-term-fg/70">
                    <span aria-hidden="true" className="h-1.5 w-1.5 bg-ember" />
                    install.sh
                  </span>
                  <span className="font-mono text-[10px] text-term-fg/60">zsh — 80×24</span>
                </div>

                <pre className="hide-scrollbar overflow-x-auto px-4 py-5 font-mono text-[10.5px] leading-[1.95] sm:text-[11.5px]">
                  <span className="text-ember">$</span>{' curl -fsSL https://raw.githubusercontent.com/\n'}
                  {'    devansharora18/godforge/main/\n'}
                  {'    install.sh | bash\n\n'}
                  <span className="text-term-fg/60">{'→ fetching godforge…\n→ installing to .…\n\n'}</span>
                  <span className="text-ember">{'✓'}</span>{' installed AGENTS.md + .agents/skills/\n'}
                  {'  (7 skills)\n\n'}
                  <span className="text-term-fg/60">{'  ./AGENTS.md\n  ./.agents/skills/\n'}</span>
                </pre>
              </div>

              <dl className="mt-4 grid grid-cols-3 divide-x divide-rule border-y border-rule">
                {[
                  ['1', 'the law'],
                  ['7', 'the will'],
                  ['0', 'dependencies'],
                ].map(([value, caption]) => (
                  <div key={caption} className="px-3 py-3 first:pl-0">
                    <dt className="font-serif text-[26px] leading-none">{value}</dt>
                    <dd className="label mt-1.5 normal-case tracking-normal">{caption}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-4 text-[12.5px] leading-6 text-soft">
                Works with OpenCode, Claude Code, Cursor — or any agent that reads{' '}
                <code className="font-mono text-[11.5px] text-ink">AGENTS.md</code>.
              </p>
            </aside>
          </div>
        </section>

        {/* Install variant band */}
        <section id="install" className="border-b border-rule bg-raise">
          <div className="mx-auto grid max-w-page gap-6 px-5 py-10 sm:px-8 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:items-center md:gap-12">
            <div>
              <p className="label">02 — Install to a path</p>
              <h2 className="mt-2 font-serif text-[clamp(1.6rem,2.6vw,2rem)] leading-tight">
                Point it at any repository.
              </h2>
            </div>
            <div>
              <CommandBlock
                command={`${INSTALL_CMD} -s -- ./path/to/repo`}
                label="Copy the install command for a specific path"
              />
              <p className="mt-3 text-[12.5px] text-soft">
                Overwrites with the latest version. Nothing is deleted from the target repo.
              </p>
            </div>
          </div>
        </section>

        <Pantheon />
        <Law />
        <Rite />
        <Close />
      </main>

      <footer className="mx-auto max-w-page px-5 sm:px-8">
        <div className="flex flex-col gap-6 py-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2.5">
              <Sigil className="h-5 w-5 text-ink" />
              <span className="font-serif text-[20px] leading-none">GodForge</span>
            </div>
            <p className="mt-3 max-w-[42ch] text-[13px] leading-6 text-soft">
              Skills are just Markdown. Fork it, add a <code className="font-mono text-[12px] text-ink">SKILL.md</code>,
              open a PR.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-[12.5px] sm:items-end">
            <div className="flex gap-5">
              <a href={REPO} target="_blank" rel="noreferrer" className="text-soft transition-colors hover:text-ink">GitHub</a>
              <a href={`${REPO}/blob/main/AGENTS.md`} target="_blank" rel="noreferrer" className="text-soft transition-colors hover:text-ink">AGENTS.md</a>
              <a href={`${REPO}/blob/main/LICENSE`} target="_blank" rel="noreferrer" className="text-soft transition-colors hover:text-ink">MIT License</a>
            </div>
            <p className="font-mono text-[10.5px] uppercase tracking-label text-soft">
              No dependencies · no build step
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
