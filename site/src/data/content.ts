export type Skill = {
  name: string
  group: string
  summary: string
  summoned: string
}

export const skills: Skill[] = [
  {
    name: 'architecture',
    group: 'Core',
    summary: 'Folder structure, layering, file-size discipline.',
    summoned: 'Starting a project, adding a module, or restructuring an existing codebase.',
  },
  {
    name: 'frontend',
    group: 'Core',
    summary: 'Vite or Next.js, TypeScript, Tailwind, state.',
    summoned: 'Building or modifying components, pages, routing, or styling.',
  },
  {
    name: 'backend',
    group: 'Core',
    summary: 'Stack matrix, auth, reliability, FastAPI.',
    summoned: 'Designing APIs, schema, authentication, background work, or infra choices.',
  },
  {
    name: 'ui-ux',
    group: 'Core',
    summary: 'Direction library, type, color, anti-patterns.',
    summoned: 'Designing or reviewing a screen, a component, or a polish pass.',
  },
  {
    name: 'docs',
    group: 'Core',
    summary: 'Understanding docs and formal docs, Markdown first.',
    summoned: 'Explaining a codebase, or writing backend and architecture docs.',
  },
  {
    name: 'pdf',
    group: 'Core',
    summary: 'Reports, invoices, certificates — built in Python.',
    summoned: 'A PDF has to be generated from scratch, not edited.',
  },
  {
    name: 'review',
    group: 'Review',
    summary: 'Diff review with security and test checklists.',
    summoned: 'A branch or pull request is about to merge.',
  },
  {
    name: 'investigate',
    group: 'Review',
    summary: 'Reproduce, confirm, fix the cause, add a test.',
    summoned: 'Something is broken and the cause is unknown.',
  },
  {
    name: 'qa',
    group: 'Review',
    summary: 'Run the app, click the flows, log and fix bugs.',
    summoned: 'A feature needs exercising end to end.',
  },
  {
    name: 'verify',
    group: 'Review',
    summary: 'Prove it works with commands and real output.',
    summoned: 'Before anyone is allowed to say "done".',
  },
  {
    name: 'second-opinion',
    group: 'Review',
    summary: 'A cold read of a plan or diff by a fresh agent.',
    summoned: 'The decision is expensive to get wrong.',
  },
  {
    name: 'critique',
    group: 'Review',
    summary: 'Whole-site review after changes, then fixes.',
    summoned: 'A site change shipped and needs a full pass: content, links, metadata, flow.',
  },
  {
    name: 'plan-review',
    group: 'Planning',
    summary: 'Challenge scope, failure modes, and test coverage.',
    summoned: 'A plan exists but no code has been written.',
  },
  {
    name: 'scope-cut',
    group: 'Planning',
    summary: 'Cut to the smallest version worth shipping.',
    summoned: 'The plan cannot fit the time available.',
  },
  {
    name: 'prd',
    group: 'Planning',
    summary: 'Users, scope, non-goals, metrics, acceptance.',
    summoned: 'A one-liner needs to become a product spec.',
  },
  {
    name: 'spec',
    group: 'Planning',
    summary: 'Contracts and schemas fixed before code.',
    summoned: 'An API or data shape has to stop moving.',
  },
  {
    name: 'competitor-teardown',
    group: 'Planning',
    summary: 'Three to five products, compared for gaps.',
    summoned: 'Entering a space and choosing a position.',
  },
  {
    name: 'adr',
    group: 'Planning',
    summary: 'Context, options, decision, consequences.',
    summoned: 'A choice will be expensive to reverse.',
  },
  {
    name: 'guard',
    group: 'Workflow',
    summary: 'Destructive commands blocked, edits fenced.',
    summoned: 'An agent runs unattended.',
  },
  {
    name: 'commit',
    group: 'Workflow',
    summary: 'Logical commits, one line each, no rewrites.',
    summoned: 'The working tree is a mess.',
  },
  {
    name: 'pr-describe',
    group: 'Workflow',
    summary: 'Summary, risks, and a test plan from the diff.',
    summoned: 'Opening a pull request.',
  },
  {
    name: 'release-notes',
    group: 'Workflow',
    summary: 'User-facing changelog, grouped and named.',
    summoned: 'Cutting a version.',
  },
  {
    name: 'rollback',
    group: 'Workflow',
    summary: 'The way back, tested before it is needed.',
    summoned: 'Shipping anything irreversible.',
  },
  {
    name: 'handoff',
    group: 'Workflow',
    summary: 'State, decisions, open items, next command.',
    summoned: 'Ending a session or passing the work on.',
  },
  {
    name: 'memory-notes',
    group: 'Workflow',
    summary: 'docs/PROJECT.md — conventions and gotchas.',
    summoned: 'Future sessions need context that outlives the chat.',
  },
  {
    name: 'scratch',
    group: 'Workflow',
    summary: 'Timeboxed prototype, explicitly not production.',
    summoned: 'One question needs a cheap answer.',
  },
  {
    name: 'refactor',
    group: 'Hygiene',
    summary: 'Same behavior, smaller shape, tests first.',
    summoned: 'The code works but no longer fits.',
  },
  {
    name: 'dead-code',
    group: 'Hygiene',
    summary: 'Unused files, exports, and deps, removed with proof.',
    summoned: 'The tree carries weight nobody uses.',
  },
  {
    name: 'skill-audit',
    group: 'Hygiene',
    summary: 'Triggers, conflicts, and bloat in SKILL.md files.',
    summoned: 'The skill library starts to overlap.',
  },
  {
    name: 'design-system',
    group: 'Design',
    summary: 'Tokens and primitives from drifted screens.',
    summoned: 'Screens stop agreeing with each other.',
  },
  {
    name: 'design-critique',
    group: 'Design',
    summary: 'Per-surface checklists, prioritized fixes.',
    summoned: 'A screen is done and needs a hard look.',
  },
  {
    name: 'motion',
    group: 'Design',
    summary: 'GSAP recipes keyed to the chosen direction.',
    summoned: 'The page needs to move.',
  },
  {
    name: 'seo-meta',
    group: 'Design',
    summary: 'Metadata, OG, sitemap, structured data, vitals.',
    summoned: 'A public page goes live.',
  },
  {
    name: 'responsive-audit',
    group: 'Design',
    summary: '360, 768, 1440, with screenshots as proof.',
    summoned: 'Before shipping any layout.',
  },
  {
    name: 'db-design',
    group: 'Backend',
    summary: 'Keys, constraints, indexes, migrations, plans.',
    summoned: 'A schema changes.',
  },
  {
    name: 'api-review',
    group: 'Backend',
    summary: 'Auth, validation, idempotency, errors, limits.',
    summoned: 'An endpoint ships.',
  },
  {
    name: 'cost',
    group: 'Backend',
    summary: 'Find the expensive few, rightsize, guard.',
    summoned: 'The cloud bill grows faster than usage.',
  },
  {
    name: 'observability',
    group: 'Backend',
    summary: 'Health, metrics, alerts, dashboards.',
    summoned: 'A service needs to be visible from the outside.',
  },
  {
    name: 'explain',
    group: 'Teaching',
    summary: 'What was built, taught at the user level.',
    summoned: 'The user wants to understand, not just run it.',
  },
  {
    name: 'adhd',
    group: 'Communication',
    summary: 'Answer first, short chunks, one next action.',
    summoned: 'The reader wants the result without preamble.',
  },
  {
    name: 'asd',
    group: 'Communication',
    summary: 'Literal language, explicit assumptions, predictable flows.',
    summoned: 'Ambiguity or surprise would cost the reader.',
  },
  {
    name: 'asd-ste100',
    group: 'Communication',
    summary: 'Controlled technical English for docs and errors.',
    summoned: 'Text must not be misread — docs, errors, procedures.',
  },
  {
    name: 'snap',
    group: 'Modes',
    summary: 'Skips the process, not the standards.',
    summoned: 'The current message literally starts with /snap.',
  },
  {
    name: 'autopilot',
    group: 'Modes',
    summary: 'End to end, one commit per change, no check-ins.',
    summoned: 'The current message literally starts with /autopilot.',
  },
]

export const rules = [
  {
    numeral: 'I',
    title: 'Agile over waterfall',
    body: 'Short iterate-and-adjust loops for most work. Lock scope first only when it pays: schema changes, public API contracts, security-sensitive flows.',
  },
  {
    numeral: 'II',
    title: 'One step, then stop',
    body: 'The smallest reviewable change, summarized like a commit. Approval before the next step. Never a big-bang diff.',
  },
  {
    numeral: 'III',
    title: 'As little code as possible',
    body: 'No speculative abstractions, unused config, or comments that restate the line. Edit the existing file before adding a new one.',
  },
  {
    numeral: 'IV',
    title: 'Match the codebase',
    body: 'Follow the surrounding naming, formatting, and patterns. A new convention per step is a bug, not a style choice.',
  },
  {
    numeral: 'V',
    title: 'Security is not optional',
    body: 'Baked into the backend skill by default, not bolted on after review. Auth, validation, and secrets are design inputs.',
  },
]

export const rite = [
  {
    numeral: '01',
    title: 'Install the law',
    body: 'One curl pipe copies AGENTS.md and every skill into the repo. Re-run the same command to update them.',
  },
  {
    numeral: '02',
    title: 'The agent reads the index',
    body: 'It lists each skill and matches your task against a description of 1 to 1024 characters. This is the only thing it sees up front.',
  },
  {
    numeral: '03',
    title: 'Only the relevant skill loads',
    body: 'The matched SKILL.md is pulled into context on demand. Detail stays out of the way until the task actually needs it.',
  },
]
