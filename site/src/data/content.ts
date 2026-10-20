export type Skill = {
  numeral: string
  name: string
  summary: string
  summoned: string
}

export const skills: Skill[] = [
  {
    numeral: 'I',
    name: 'architecture',
    summary: 'Folder structure, layering, file-size discipline.',
    summoned: 'Starting a project, adding a module, or restructuring an existing codebase.',
  },
  {
    numeral: 'II',
    name: 'backend',
    summary: 'Stack evaluation, Postgres + FastAPI, auth, jobs.',
    summoned: 'Designing APIs, schema, authentication, background work, or infra choices.',
  },
  {
    numeral: 'III',
    name: 'frontend',
    summary: 'Vite or Next.js, TypeScript, Tailwind, state.',
    summoned: 'Building or modifying components, pages, routing, or styling.',
  },
  {
    numeral: 'IV',
    name: 'ui-ux',
    summary: 'Visual direction, typography, states, accessibility.',
    summoned: 'Designing or reviewing a screen, a component, or a polish pass.',
  },
  {
    numeral: 'V',
    name: 'docs',
    summary: 'Understanding docs and formal docs, Markdown first.',
    summoned: 'Explaining a codebase, or writing backend and architecture docs.',
  },
  {
    numeral: 'VI',
    name: 'pdf',
    summary: 'Reports, invoices, certificates — built in Python.',
    summoned: 'A PDF has to be generated from scratch, not edited.',
  },
  {
    numeral: 'VII',
    name: 'snap',
    summary: 'Skips the process, not the standards.',
    summoned: 'The current message literally starts with /snap. Nothing else triggers it.',
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
    body: 'One curl pipe copies AGENTS.md and all seven skills into the repo. Re-run the same command to update them.',
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
