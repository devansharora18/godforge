import { rite } from '../data/content'

export function Rite() {
  return (
    <section id="rite" className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-20">
      <div data-reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="label">05 — The rite</p>
          <h2 className="mt-3 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[0.98]">
            The index is cheap.
            <span className="block italic text-soft">The detail is not.</span>
          </h2>
        </div>
        <p className="max-w-[40ch] text-[14px] leading-6 text-soft">
          The whole point: a skill costs nothing until it is matched. Then your agent reads only the
          file that applies to the work in front of it.
        </p>
      </div>

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <ol className="ml-1 space-y-8 border-l border-rule pl-8">
          {rite.map((step) => (
            <li key={step.numeral} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[calc(2rem+4px)] top-[7px] h-2 w-2 bg-ember"
              />
              <span className="font-mono text-[10.5px] uppercase tracking-label text-ember">{step.numeral}</span>
              <h3 className="mt-1.5 font-serif text-[24px] leading-tight">{step.title}</h3>
              <p className="mt-1.5 max-w-[42ch] text-[13.5px] leading-6 text-soft">{step.body}</p>
            </li>
          ))}
        </ol>

        <div data-reveal className="border border-rule">
          <div className="flex items-baseline justify-between border-b border-rule px-4 py-2.5">
            <span className="label">SKILL.md — backend</span>
            <span className="label">yaml</span>
          </div>
          <pre className="hide-scrollbar overflow-x-auto px-4 py-5 font-mono text-[11px] leading-[1.9] text-ink sm:text-[12px]">
            <span className="text-soft">{'---\n'}</span>
            {'name: backend\n'}
            <span className="text-soft">{'description: Use when designing or building any\n'}</span>
            <span className="text-soft">{'  backend/server code — APIs, database schema,\n'}</span>
            <span className="text-soft">{'  auth, background jobs, infra choices.\n'}</span>
            <span className="text-soft">{'---\n\n'}</span>
            <span className="text-ember">{'# Backend\n'}</span>
            {'\nEvaluate the stack rather than defaulting to\n'}
            {'a managed BaaS. Security is baked in, not\n'}
            {'bolted on after review.\n'}
          </pre>
          <div className="border-t border-rule bg-raise px-4 py-4">
            <p className="label">Mirrored for discovery</p>
            <ul className="mt-2 space-y-1 font-mono text-[11px] leading-5 text-soft">
              <li>.agents/skills/backend/SKILL.md</li>
              <li>.opencode/skills/backend/SKILL.md</li>
              <li>.claude/skills/backend/SKILL.md</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
