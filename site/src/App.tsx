import { usePageMotion } from './lib/motion'
import { useTheme, ThemeToggle } from './components/ThemeToggle'
import { CommandBlock } from './components/CommandBlock'
import { Tablet } from './components/Tablet'
import { RepoContents } from './components/RepoContents'
import { Law } from './components/Law'
import { Rite } from './components/Rite'
import { Band } from './components/Band'
import { Catalogue } from './components/Catalogue'
import { Colophon } from './components/Colophon'
import { INSTALL_CMD, REPO } from './lib/constants'
import { skills } from './data/content'

export default function App() {
  const { theme, toggle } = useTheme()
  usePageMotion()

  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-brass focus:px-4 focus:py-2 focus:text-[14px] focus:text-brass-ink"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-rule bg-ground">
        <div className="mx-auto flex h-14 max-w-page items-center justify-between gap-4 px-5 sm:px-8">
          <a href="#top" className="font-display text-[19px] font-semibold leading-none">
            GodForge
          </a>

          <nav aria-label="Sections" className="hidden items-center gap-6 text-[14px] text-soft md:flex">
            {[
              ['#repo', 'In the repo'],
              ['#law', 'The process'],
              ['#skills', 'Skills'],
            ].map(([href, text]) => (
              <a key={href} href={href} className="transition-colors hover:text-brass">
                {text}
              </a>
            ))}
            <a href={REPO} target="_blank" rel="noreferrer" className="transition-colors hover:text-brass">
              GitHub
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle theme={theme} onToggle={toggle} />
            <a
              href="#install"
              className="border-b border-ink pb-0.5 text-[14px] transition-colors hover:border-brass hover:text-brass"
            >
              Install
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <section id="top" className="mx-auto max-w-page px-5 pb-14 pt-12 sm:px-8 sm:pt-20">
          <h1
            data-hero
            className="max-w-[24ch] text-[clamp(2.5rem,6.2vw,6rem)] leading-[1.06]"
          >
            A workflow your coding agent follows.
          </h1>

          <div
            data-hero
            className="mt-10 grid gap-10 border-t border-rule pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:items-start lg:gap-20"
          >
            <div className="min-w-0">
              <p className="max-w-[44ch] text-[17px] leading-[1.65] text-soft">
                {skills.length} Markdown skills and one AGENTS.md, installed in a single command.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-2 text-[15px]">
                <a
                  href={`${REPO}/blob/main/AGENTS.md`}
                  className="border-b border-ink pb-0.5 transition-colors hover:border-brass hover:text-brass"
                >
                  Read AGENTS.md
                </a>
                <a
                  href="#skills"
                  className="border-b border-rule pb-0.5 text-soft transition-colors hover:border-ink hover:text-ink"
                >
                  See all {skills.length} skills
                </a>
              </div>

              <p className="mt-7 text-[14px] leading-6 text-soft">
                Works with Claude Code, Cursor, and OpenCode.
              </p>
            </div>

            <div className="min-w-0">
              <Tablet>
                <CommandBlock command={INSTALL_CMD} label="Copy the install command" />
              </Tablet>
              <p className="mt-3 max-w-[36ch] text-[13.5px] leading-5 text-soft">
                Copies AGENTS.md and .agents/skills/ into the current directory.
              </p>
            </div>
          </div>
        </section>

        <RepoContents />
        <Law />
        <Rite />
        <Band />
        <Catalogue />
      </main>

      <Colophon />
    </div>
  )
}
