import { rules } from '../data/content'
import { REPO } from '../lib/constants'

export function Law() {
  return (
    <section id="law" className="border-t border-rule">
      <div className="mx-auto grid max-w-page gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:gap-20">
        <div className="min-w-0 lg:sticky lg:top-24 lg:self-start">
          <h2 className="max-w-[20ch] text-[clamp(1.9rem,3.2vw,2.75rem)] leading-[1.1]">
            Five rules, applied by every skill.
          </h2>
          <p className="mt-5 max-w-[40ch] text-[15px] leading-[1.7] text-soft">
            AGENTS.md is the file your agent reads first. It sets the process, the size of one change,
            and what counts as done.
          </p>
          <a
            href={`${REPO}/blob/main/AGENTS.md`}
            className="mt-4 inline-block border-b border-ink pb-0.5 text-[15px] transition-colors hover:border-brass hover:text-brass"
          >
            Read the full text
          </a>

          <figure className="mt-12 border-l border-brass pl-5">
            <blockquote className="max-w-[38ch] text-[16.5px] leading-[1.6]">
              “/snap is a last resort, not a habit. One word skips the ceremony when you know exactly
              what you want. The standards still apply.”
            </blockquote>
            <figcaption className="label mt-3">README, Commandments</figcaption>
          </figure>
        </div>

        <ol className="min-w-0 border-t border-brass/40">
          {rules.map((rule) => (
            <li
              key={rule.numeral}
              className="grid grid-cols-[2rem_1fr] gap-x-4 border-b border-rule py-6 sm:grid-cols-[3rem_1fr] sm:gap-x-6"
            >
              <span className="font-display text-[32px] leading-none text-brass">{rule.numeral}</span>
              <div>
                <h3 className="text-[19px] leading-snug sm:text-[20px]">{rule.title}</h3>
                <p className="mt-1.5 max-w-[58ch] text-[15px] leading-[1.7] text-soft">{rule.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
