const paths = [
  {
    path: 'AGENTS.md',
    count: '1',
    what: 'The routing table and the five process rules. Your agent reads this before it starts.',
  },
  {
    path: '.agents/skills/',
    count: '44',
    what: 'One folder per skill, each holding a SKILL.md whose frontmatter says when to summon it.',
  },
  {
    path: '.agents/skills/*/reference/',
    count: '5',
    what: 'Longer material, inside five of the skills. Opened only after that skill is chosen.',
  },
] as const

export function RepoContents() {
  return (
    <section id="repo" className="border-t border-rule">
      <div className="mx-auto max-w-page px-5 py-16 sm:px-8 sm:py-24">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-[24ch] text-[clamp(1.9rem,3.2vw,2.75rem)] leading-[1.1]">
            What the command writes.
          </h2>
          <p className="max-w-[46ch] text-[15px] leading-[1.7] text-soft">
            Two paths at the repository root, plus reference files inside some skills. Nothing else is
            touched.
          </p>
        </div>

        <table className="mt-10 w-full border-t border-brass/40 text-left">
          <caption className="sr-only">The paths the installer writes into a repository</caption>
          <thead className="max-sm:hidden">
            <tr className="border-b border-rule">
              <th scope="col" className="label py-2.5 pr-4 font-normal">
                Path
              </th>
              <th scope="col" className="label hidden py-2.5 pr-6 font-normal sm:table-cell">
                Count
              </th>
              <th scope="col" className="label py-2.5 font-normal">
                What it is
              </th>
            </tr>
          </thead>
          <tbody>
            {paths.map((row) => (
              <tr key={row.path} className="border-b border-rule max-sm:block max-sm:py-4">
                <th
                  scope="row"
                  className="w-[38%] py-5 pr-4 align-top font-mono text-[13px] font-normal leading-6 sm:w-[26%] max-sm:block max-sm:w-auto max-sm:p-0"
                >
                  {row.path}
                </th>
                <td className="hidden py-5 pr-6 align-top sm:table-cell">
                  <span className="font-display text-[26px] font-semibold leading-none">{row.count}</span>
                </td>
                <td className="py-5 text-[15px] leading-[1.7] text-soft max-sm:block max-sm:p-0 max-sm:pt-1.5">{row.what}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
