import { rules } from '../data/content'
import { ArrowUpRight } from './icons'
import { REPO } from '../lib/constants'

export function Law() {
  return (
    <section id="law" className="border-y border-rule bg-raise">
      <div className="mx-auto grid max-w-page gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div data-reveal className="lg:sticky lg:top-24 lg:self-start">
          <p className="label">04 — The law</p>
          <h2 className="mt-3 font-serif text-[clamp(2rem,3.8vw,3.25rem)] leading-[0.98]">
            Short enough to read.
            <span className="block italic text-soft">Long enough to hold.</span>
          </h2>
          <p className="mt-6 max-w-[38ch] text-[14.5px] leading-6 text-soft">
            <code className="font-mono text-[12.5px] text-ink">AGENTS.md</code> is the constitution your
            agent reads first. It sets the process, the size of a change, and what counts as done.
          </p>
          <a
            href={`${REPO}/blob/main/AGENTS.md`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 border-b border-ink pb-0.5 text-[13px] font-medium transition-colors hover:border-ember hover:text-ember"
          >
            Read the full text <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <figure className="mt-10 border-l-2 border-ember pl-5">
            <blockquote className="font-serif text-[19px] leading-[1.35] text-ink">
              “/snap is a last resort, not a habit. One word skips the ceremony when you know exactly
              what you want — the standards still apply.”
            </blockquote>
            <figcaption className="label mt-3 normal-case tracking-normal">README — Commandments</figcaption>
          </figure>
        </div>

        <ol className="border-t border-rule">
          {rules.map((rule) => (
            <li
              key={rule.numeral}
              className="grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-rule py-5 sm:gap-x-6"
            >
              <span className="font-mono text-[11px] leading-6 text-soft">{rule.numeral}</span>
              <div>
                <h3 className="font-serif text-[21px] leading-tight sm:text-[23px]">{rule.title}</h3>
                <p className="mt-2 max-w-[58ch] text-[13.5px] leading-6 text-soft">{rule.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
