import { rite } from '../data/content'

export function Rite() {
  return (
    <section id="rite" className="border-t border-rule">
      <div className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-[22ch] text-[clamp(1.9rem,3.2vw,2.75rem)] leading-[1.1]">
            Only the matched skill is read.
          </h2>
          <p className="max-w-[46ch] text-[15px] leading-[1.7] text-soft">
            Your agent sees a list of names with one line each. The file behind a name is opened when
            a task calls for it.
          </p>
        </div>

        <ol className="mt-10 grid border-t border-brass/40 sm:grid-cols-3">
          {rite.map((step, index) => (
            <li
              key={step.numeral}
              className={
                index === 0
                  ? 'py-6 sm:pr-6'
                  : 'border-t border-rule py-6 sm:border-l sm:border-t-0 sm:px-6'
              }
            >
              <span className="font-mono text-[12px] leading-5 text-brass">{step.numeral}</span>
              <h3 className="mt-2 text-[19px] leading-snug">{step.title}</h3>
              <p className="mt-1.5 max-w-[34ch] text-[15px] leading-[1.7] text-soft">{step.body}</p>
            </li>
          ))}
        </ol>

        <p className="mt-6 max-w-[62ch] text-[14px] leading-6 text-soft">
          Each match reads one path:{' '}
          <code className="font-mono text-[12.5px] text-ink">.agents/skills/&lt;name&gt;/SKILL.md</code>.
        </p>
      </div>
    </section>
  )
}
