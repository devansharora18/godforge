import { useState } from 'react'
import { useTheme, ThemeToggle } from './components/ThemeToggle'

const INSTALL_CMD = 'curl -fsSL https://raw.githubusercontent.com/devansharora18/godforge/main/install.sh | bash'

function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
}
function HammerIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 6.5 18 3a2 2 0 0 1 3 3l-3.5 3.5" /><path d="M15 8l-8 8a2 2 0 0 0 0 3l1 1a2 2 0 0 0 3 0l8-8" /><path d="M9 18l-3 3" /></svg>
}
function LayersIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
}
function ServerIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}><rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><path d="M6 6h.01M6 18h.01" /></svg>
}
function MonitorIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>
}
function PaletteIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}><circle cx="13.5" cy="6.5" r="4.5" /><path d="M12 22a7 7 0 0 1 0-14c1.5 0 3 .5 4 1.5" /><path d="M8 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" /></svg>
}
function FileTextIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></svg>
}
function FileStackIcon(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} {...props}><path d="M8 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" /><path d="M16 2v6h6" /><path d="M10 14h6M10 18h6M10 10h2" /></svg>
}

type Skill = { name: string; desc: string; Icon: React.FC<React.SVGProps<SVGSVGElement>>; accent: string }
const skills: Skill[] = [
  { name: 'architecture', desc: 'Folder structure, layering, file-size discipline. No god files.', Icon: LayersIcon, accent: 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900' },
  { name: 'backend', desc: 'Stack evaluation, Postgres + FastAPI, security by default.', Icon: ServerIcon, accent: 'bg-white text-zinc-900 border border-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-800' },
  { name: 'frontend', desc: 'Vite/Next.js, TypeScript, Tailwind — component & state discipline.', Icon: MonitorIcon, accent: 'bg-white text-zinc-900 border border-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-800' },
  { name: 'ui-ux', desc: 'Vercel-style minimalism, typography, spacing, accessibility.', Icon: PaletteIcon, accent: 'bg-white text-zinc-900 border border-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-800' },
  { name: 'docs', desc: 'Informal understanding docs → formal Markdown, no fluff.', Icon: FileTextIcon, accent: 'bg-white text-zinc-900 border border-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-800' },
  { name: 'pdf', desc: 'Generate PDFs from scratch in Python. Reports, invoices, certs.', Icon: FileStackIcon, accent: 'bg-white text-zinc-900 border border-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 dark:border-zinc-800' },
  { name: 'snap', desc: '/snap — the forbidden word. Skips the process, not the standards.', Icon: ZapIcon, accent: 'bg-amber-400 text-zinc-900 border border-amber-400 dark:bg-amber-400 dark:text-zinc-900 dark:border-amber-400' },
]

export default function App() {
  const { theme, toggle } = useTheme()
  const [copied, setCopied] = useState(false)
  const [copiedAlt, setCopiedAlt] = useState(false)

  const copy = async (text: string, which: 'main' | 'alt') => {
    await navigator.clipboard.writeText(text)
    if (which === 'main') { setCopied(true); setTimeout(() => setCopied(false), 1800) }
    else { setCopiedAlt(true); setTimeout(() => setCopiedAlt(false), 1800) }
  }

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors">
      {/* Top announce bar - snap proof */}
      <div className="w-full bg-zinc-900 dark:bg-black text-zinc-100 text-[12px] tracking-wide border-b border-zinc-800 dark:border-zinc-900">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 py-2.5 flex items-center justify-center gap-2 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium tracking-widest uppercase"><ZapIcon className="h-3 w-3" /> Snap-built</span>
          <span className="hidden sm:inline text-zinc-300">This landing page was forged with a single</span>
          <code className="font-mono bg-white text-zinc-900 px-1.5 py-0.5 rounded text-[12px]">/snap</code>
          <span className="hidden md:inline text-zinc-400">— no steps, no pauses, just will.</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/80 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 h-[56px] flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 grid place-items-center text-[13px] font-bold tracking-tight">◈</div>
            <span className="font-semibold tracking-tight text-[15px] dark:text-white">GodForge</span>
            <span className="hidden sm:inline text-zinc-400 text-[12px] font-mono">v1 · AGENTS.md</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-[13px] text-zinc-600 dark:text-zinc-400">
            <a href="#pantheon" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Pantheon</a>
            <a href="#how" className="hover:text-zinc-900 dark:hover:text-white transition-colors">How it works</a>
            <a href="#commandments" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Commandments</a>
            <a href="https://github.com/devansharora18/godforge" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-white transition-colors">GitHub <span aria-hidden>↗</span></a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={toggle} />
            <a href="https://github.com/devansharora18/godforge" target="_blank" rel="noreferrer" className="hidden sm:inline-flex h-8 items-center rounded-full border border-zinc-200 dark:border-zinc-800 px-3 text-[13px] font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 dark:text-zinc-300 transition-colors">Star on GitHub</a>
            <button onClick={() => copy(INSTALL_CMD, 'main')} className="h-8 rounded-full bg-zinc-900 dark:bg-white px-4 text-[13px] font-medium text-white dark:text-zinc-900 hover:bg-black dark:hover:bg-zinc-100 transition">Copy install</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-[1100px] px-4 sm:px-6 pt-12 sm:pt-16 pb-8">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-1.5 text-[12px]">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-zinc-600 dark:text-zinc-400">Opinionated workflow for AI agents</span>
              <span className="hidden sm:inline h-3 w-px bg-zinc-200 dark:bg-zinc-800" />
              <span className="hidden sm:inline text-zinc-500 dark:text-zinc-500">Drop in. Stop improvising.</span>
            </div>

            <h1 className="mt-6 text-[36px] sm:text-[48px] lg:text-[56px] font-[800] tracking-[-0.03em] leading-[0.95] text-zinc-900 dark:text-white">
              One file writes<br />
              <span className="text-zinc-400 dark:text-zinc-500">the commandments.</span><br />
              Seven skills<br />
              <span className="text-zinc-400 dark:text-zinc-500">carry out the will.</span>
            </h1>

            <p className="mt-5 max-w-[54ch] text-[15px] sm:text-[16px] leading-6 text-zinc-600 dark:text-zinc-400">
              <strong className="font-semibold text-zinc-900 dark:text-zinc-100">GodForge</strong> is an opinionated workflow + 7 domain skills for AI-assisted development.
              Drop <code className="font-mono text-[13px] bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-1.5 py-0.5 rounded">AGENTS.md</code> into a repo and your coding agent inherits a process — agile-first, incremental, security-conscious — instead of guessing from vibes.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => copy(INSTALL_CMD, 'main')} className="h-10 rounded-full bg-zinc-900 dark:bg-white px-5 text-[14px] font-medium text-white dark:text-zinc-900 hover:bg-black dark:hover:bg-zinc-100 transition inline-flex items-center gap-2">
                <span className="hidden sm:inline">curl | bash to forge</span><span className="sm:hidden">Install</span> <span aria-hidden>→</span>
              </button>
              <a href="#pantheon" className="h-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 dark:text-zinc-100 px-5 text-[14px] font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 inline-flex items-center transition-colors">Meet the pantheon</a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-[12px] font-mono text-zinc-500 dark:text-zinc-400">
              <span className="rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-2.5 py-1">AGENTS.md — the law</span>
              <span className="rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-2.5 py-1">.agents/skills — the will</span>
              <span className="rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-2.5 py-1">7 skills · 0 dependencies</span>
            </div>
          </div>

          {/* Terminal card */}
          <div className="lg:sticky lg:top-[72px]">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-[0_8px_30px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/60">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-700" /><span className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-700" /><span className="h-3 w-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                </div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-500 dark:text-zinc-400">The rite of installation</span>
                <span className="text-[11px] font-mono text-zinc-400">zsh</span>
              </div>

              <div className="p-4 sm:p-5">
                <div className="rounded-xl bg-zinc-900 dark:bg-black text-zinc-100 p-4 font-mono text-[13px] leading-5 overflow-x-auto border border-zinc-800 dark:border-zinc-800">
                  <div className="text-zinc-500 text-[11px] tracking-widest uppercase mb-2"># one line, from any repo root</div>
                  <div className="flex items-start gap-3">
                    <span className="text-zinc-500 select-none">$</span>
                    <code className="break-all whitespace-pre-wrap">{INSTALL_CMD}</code>
                  </div>
                </div>
                <button
                  onClick={() => copy(INSTALL_CMD, 'main')}
                  className={`mt-3 w-full h-10 rounded-xl font-medium text-[13px] transition border ${copied ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-black dark:hover:bg-zinc-100 border-zinc-900 dark:border-white'}`}
                >
                  {copied ? '✓ Copied to clipboard' : 'Copy command'}
                </button>

                <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                  {[
                    { v: '1', l: 'File' },
                    { v: '7', l: 'Skills' },
                    { v: '∞', l: 'Repos' },
                  ].map(s => (
                    <div key={s.l} className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-3">
                      <div className="text-[18px] font-bold tracking-tight dark:text-white">{s.v}</div>
                      <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">{s.l}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-3">
                  <div className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Install to a specific path</div>
                  <code className="mt-1 block font-mono text-[12px] leading-5 break-all dark:text-zinc-300">{INSTALL_CMD} -s -- ./path/to/repo</code>
                  <button onClick={() => copy(`${INSTALL_CMD} -s -- ./path/to/repo`, 'alt')} className="mt-2 text-[12px] font-medium underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 hover:decoration-zinc-900 dark:hover:decoration-white dark:text-zinc-300">
                    {copiedAlt ? 'Copied!' : 'Copy variant'}
                  </button>
                </div>

                <p className="mt-3 text-[12px] leading-5 text-zinc-500 dark:text-zinc-400 text-center">Re-run to update. Overwrites with latest. <span className="text-zinc-900 dark:text-zinc-100 font-medium">No dependencies. No build step.</span></p>
              </div>
            </div>

            {/* Proof banner */}
            <div className="mt-3 rounded-xl border border-amber-200 dark:border-amber-900/50 bg-amber-50 dark:bg-amber-950/30 px-4 py-3 flex gap-3">
              <span className="h-7 w-7 rounded-full bg-amber-400 dark:bg-amber-500 grid place-items-center flex-shrink-0"><ZapIcon className="h-3.5 w-3.5 text-zinc-900" /></span>
              <div className="text-[12px] leading-5">
                <div className="font-semibold dark:text-amber-100">Built in one snap</div>
                <div className="text-zinc-600 dark:text-amber-200/70">This entire page was generated by <code className="font-mono bg-white dark:bg-zinc-900 border border-amber-200 dark:border-amber-900 px-1 py-0.5 rounded dark:text-amber-100">/snap make landing page</code> — no incremental steps, no pauses.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-3 text-[12px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          <span>Works with</span>
          <span className="flex flex-wrap gap-2">
            <span className="rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-3 py-1">OpenCode</span>
            <span className="rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-3 py-1">Claude Code</span>
            <span className="rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-3 py-1">Cursor</span>
            <span className="rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-3 py-1">Any AGENTS.md-aware agent</span>
          </span>
          <span className="hidden lg:inline text-zinc-400 normal-case tracking-normal font-sans">Skills mirrored at .opencode/skills & .claude/skills</span>
        </div>
      </section>

      {/* Pantheon */}
      <section id="pantheon" className="mx-auto max-w-[1100px] px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-zinc-500 dark:text-zinc-400">The pantheon</div>
            <h2 className="mt-2 text-[28px] sm:text-[32px] font-bold tracking-tight leading-none dark:text-white">Seven lesser gods.<br /><span className="text-zinc-400 dark:text-zinc-500">One domain each.</span></h2>
          </div>
          <p className="max-w-[42ch] text-[14px] leading-6 text-zinc-600 dark:text-zinc-400">Each skill is a single <code className="font-mono text-[12px] bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-1.5 py-0.5 rounded">SKILL.md</code> with frontmatter. The agent matches task → description → loads detail on demand. No bloat until relevant.</p>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map(s => (
            <div key={s.name} className="group rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 hover:border-zinc-900 dark:hover:border-zinc-600 transition-colors">
              <div className="flex items-center justify-between">
                <div className={`h-9 w-9 rounded-xl grid place-items-center ${s.accent}`}><s.Icon className="h-[18px] w-[18px]" /></div>
                <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400">.agents/skills/{s.name}</span>
              </div>
              <div className="mt-4 text-[15px] font-semibold tracking-tight dark:text-white">{s.name}</div>
              <div className="mt-1 text-[13px] leading-5 text-zinc-600 dark:text-zinc-400">{s.desc}</div>
              <div className="mt-4 inline-flex items-center gap-1 text-[12px] font-medium dark:text-zinc-300">Open SKILL.md <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden>→</span></div>
            </div>
          ))}
          {/* AGENTS.md card */}
          <div className="sm:col-span-2 lg:col-span-3 rounded-2xl bg-zinc-900 dark:bg-black border border-zinc-900 dark:border-zinc-800 text-zinc-100 p-6 sm:p-7 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded-xl bg-white text-zinc-900 grid place-items-center font-bold">§</div>
              <div>
                <div className="font-semibold tracking-tight">AGENTS.md — the law</div>
                <div className="text-[13px] leading-5 text-zinc-400 max-w-[60ch]">Agile by default, waterfall only when scope must lock. Incremental changes, approval per step, minimal code, no filler. Security-conscious from line one.</div>
              </div>
            </div>
            <a href="https://github.com/devansharora18/godforge/blob/main/AGENTS.md" target="_blank" rel="noreferrer" className="shrink-0 inline-flex h-9 items-center rounded-full bg-white px-4 text-[13px] font-medium text-zinc-900 hover:bg-zinc-100 transition-colors">Read the law →</a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-y border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 py-12 sm:py-16">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-zinc-500 dark:text-zinc-400">How the gods are summoned</div>
              <h2 className="mt-2 text-[28px] font-bold tracking-tight dark:text-white">Skills stay dormant<br /><span className="text-zinc-400 dark:text-zinc-500">until the task needs them.</span></h2>
              <ol className="mt-6 space-y-4">
                {[
                  { n: '01', t: 'Agent lists skills', d: 'Via the skill tool — it reads name + description (1–1024 chars) for each of the 7 skills.' },
                  { n: '02', t: 'Matches intent', d: 'Your prompt is compared against each description. Only the relevant skill is loaded.' },
                  { n: '03', t: 'Loads SKILL.md on demand', d: 'Full instructions injected into context only when needed — no context bloat.' },
                ].map(s => (
                  <li key={s.n} className="flex gap-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4">
                    <span className="font-mono text-[12px] font-bold tracking-widest text-zinc-400">{s.n}</span>
                    <div>
                      <div className="text-[14px] font-semibold dark:text-white">{s.t}</div>
                      <div className="text-[13px] leading-5 text-zinc-600 dark:text-zinc-400">{s.d}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden">
              <div className="px-5 py-4 border-b border-zinc-100 dark:border-zinc-800 flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">Frontmatter · SKILL.md</span>
                <span className="text-[11px] font-mono text-zinc-400">yaml</span>
              </div>
              <pre className="p-5 font-mono text-[13px] leading-6 overflow-x-auto text-zinc-800 dark:text-zinc-300">{`---
name: backend
description: Use when designing or building
  any backend/server code — APIs, database
  schema, auth, background jobs, infra choices.
---

# Backend
Evaluate the stack rather than defaulting
to a managed BaaS. Postgres + FastAPI
conventions, security baked in — not bolted on.`}</pre>
              <div className="px-5 pb-5">
                <div className="rounded-xl bg-zinc-900 dark:bg-black text-zinc-300 p-4 font-mono text-[12px] leading-5 border border-zinc-800">
                  <span className="text-zinc-500"># mirrored for tool discovery</span><br />
                  .agents/skills/backend/SKILL.md<br />
                  .opencode/skills/backend/SKILL.md<br />
                  .claude/skills/backend/SKILL.md
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commandments */}
      <section id="commandments" className="mx-auto max-w-[1100px] px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-[28px] font-bold tracking-tight dark:text-white">Commandments</h2>
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400 hidden sm:inline">Carved in AGENTS.md</span>
        </div>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { k: 'Agile, not waterfall', v: 'Lock scope upfront only when it pays — schema, public APIs, security flows. Otherwise iterate.' },
            { k: 'Incremental, reviewable', v: 'One logical step at a time. Approval before the next. Commit-sized, revert-friendly.' },
            { k: 'As little code as possible', v: 'No speculative abstractions, no filler comments, nothing summoned to fill space.' },
            { k: 'Security is not optional', v: 'Baked into backend by default, not bolted on after the fact.' },
          ].map(c => (
            <div key={c.k} className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 bg-white dark:bg-zinc-900">
              <div className="text-[13px] font-semibold tracking-tight dark:text-white">{c.k}</div>
              <div className="mt-2 text-[13px] leading-5 text-zinc-600 dark:text-zinc-400">{c.v}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-2xl border border-zinc-900 dark:border-zinc-800 bg-zinc-900 dark:bg-black text-zinc-100 p-4 sm:p-5 flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
          <div className="text-[13px]"><span className="font-mono bg-white text-zinc-900 px-1.5 py-0.5 rounded text-[12px]">/snap</span> <span className="text-zinc-300">is a last resort, not a habit — one word to skip the ceremony when you know exactly what you want. Standards still apply.</span></div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 shrink-0">Use sparingly</span>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-[1100px] px-4 sm:px-6 pb-6">
        <div className="rounded-[24px] bg-zinc-900 dark:bg-black border border-zinc-900 dark:border-zinc-800 text-white p-6 sm:p-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent pointer-events-none" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-mono uppercase tracking-widest"><HammerIcon className="h-3 w-3" /> Forge your repo now</div>
            <h3 className="mt-3 text-[26px] sm:text-[30px] font-bold tracking-tight leading-none">Drop the law.<br />Summon the skills.</h3>
            <p className="mt-3 text-[13px] leading-5 text-zinc-400 max-w-[48ch]">One command copies <span className="text-white font-medium">AGENTS.md</span> + <span className="text-white font-medium">.agents/skills/</span> into any repo. Re-run to update.</p>
          </div>
          <div className="relative w-full lg:w-[520px] shrink-0">
            <div className="rounded-xl bg-white text-zinc-900 p-3 font-mono text-[13px] flex items-center gap-3">
              <span className="hidden sm:inline text-zinc-400 select-none">$</span>
              <code className="flex-1 truncate">{INSTALL_CMD}</code>
              <button onClick={() => copy(INSTALL_CMD, 'main')} className="shrink-0 h-8 rounded-full bg-zinc-900 px-3 text-[12px] font-medium text-white hover:bg-black">{copied ? 'Copied' : 'Copy'}</button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <a href="https://github.com/devansharora18/godforge" target="_blank" rel="noreferrer" className="h-9 rounded-full bg-white px-4 text-[13px] font-medium text-zinc-900 hover:bg-zinc-100 inline-flex items-center">View on GitHub →</a>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 text-[12px] text-zinc-300"><span className="h-2 w-2 rounded-full bg-emerald-400" /> MIT Licensed</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 mt-6">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 py-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between text-[13px]">
          <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
            <span className="h-6 w-6 rounded-md bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 grid place-items-center text-[11px] font-bold">◈</span>
            <span className="font-medium text-zinc-900 dark:text-white">GodForge</span>
            <span className="text-zinc-400">—</span>
            <span>Skills are just Markdown. Fork it, add a SKILL.md, open a PR.</span>
          </div>
          <div className="flex items-center gap-4 font-mono text-[12px] text-zinc-500 dark:text-zinc-400">
            <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-amber-400" /> This page was forged with <code className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-1 py-0.5 rounded">/snap</code> in one shot</span>
            <a href="https://github.com/devansharora18/godforge" className="hover:text-zinc-900 dark:hover:text-white underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700">github.com/devansharora18/godforge</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
