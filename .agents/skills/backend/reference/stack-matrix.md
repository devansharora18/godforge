# Stack matrix

Decide from constraints, not fashion. Write the drivers down first: team skills, concurrency, consistency, ops budget, data size, latency, compliance, cost.

## Database

| Choice | Pick when | Avoid when |
|---|---|---|
| PostgreSQL | default: relational data, transactions, JSONB, full-text, extensions | you genuinely need no relations and zero ops |
| SQLite | single writer, embedded, local-first, tests | concurrent writes, multiple app servers |
| MySQL | existing team/ops, read-heavy | you need Postgres-specific types |
| MongoDB | documents are the unit and schema varies per record | you need joins, constraints, or reporting |
| Redis | cache, rate limits, locks, queues | as the source of truth |
| ClickHouse / warehouse | analytics scans over events | transactional writes |

One primary datastore. Every extra store is another consistency problem.

## Runtime

| Choice | Pick when |
|---|---|
| FastAPI (Python) | default; data/ML adjacency, typed schemas, async I/O |
| Node/TypeScript | types shared with the frontend, streaming, edge runtimes |
| Go | high concurrency, small static binary, simple deploys |
| Django / Rails | CRUD-heavy product where the admin and conventions save weeks |

The team's ability to debug it at 3am outranks benchmarks.

## Hosting

- **Single VM + managed Postgres** for the first product. Boring and reversible.
- **Containers** when you need reproducible deploys or more than one service.
- **Serverless** for spiky or near-zero traffic; check cold starts, execution limits, and connection pooling before committing.
- **Kubernetes** only with someone who owns it.

## Queue

| Volume / need | Use |
|---|---|
| Low volume, already on Postgres | a jobs table with `SELECT ... FOR UPDATE SKIP LOCKED` |
| Retries, scheduling, multiple workers | Redis + Celery/RQ/BullMQ |
| Managed, high durability | SQS, Cloud Tasks, Pub/Sub |

At-least-once delivery is the default. Design consumers to be idempotent.

## Managed BaaS

Defensible for a prototype or an internal tool with no sensitive data.

Tradeoffs to state out loud: vendor lock-in, limited migration control, RLS quirks, auth edge cases, cost curve at scale, harder local development.

Migrating off later costs more than starting on Postgres. Choose it for speed and name the exit.

## Anti-patterns

- Microservices before a modular monolith hurts.
- A separate service for auth, email, and files on day one.
- Two databases "for flexibility".
- Serverless functions holding long-lived DB connections.
- Choosing a stack the team cannot operate.
