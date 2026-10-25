---
name: backend
description: Use when designing or building any backend/server code — APIs, database schema, auth, background jobs, infra choices. Evaluate the stack rather than defaulting to a managed BaaS. Ships a stack matrix, auth, reliability, security, and FastAPI/Postgres references.
---

# Backend

## Reference

| File | Open when |
|---|---|
| `reference/stack-matrix.md` | Choosing a runtime, database, host, queue, or BaaS. |
| `reference/auth.md` | Sessions, tokens, passwords, permissions, multi-tenancy. |
| `reference/reliability.md` | Transactions, retries, idempotency, timeouts, races. |
| `reference/security.md` | Input, SQL, secrets, SSRF, headers, logging, dependencies. |
| `reference/fastapi-postgres.md` | Concrete conventions for the default stack. |

## Stack choice: evaluate, don't default

- A managed BaaS (Supabase, Firebase) is defensible for a throwaway prototype where speed beats control. Say so explicitly and name the tradeoff: vendor lock-in, auth/RLS limits, migration cost at scale.
- Own backend when you need control over schema, migrations, query performance, or non-trivial business logic.
- **Default when unspecified:** PostgreSQL + Python/FastAPI. Deviate for a stated reason, not habit.

## Structure

- Organize by feature, not by layer: `app/features/orders/{router,service,schemas,models}.py`.
- Routers parse and delegate. No queries or business rules in the handler.
- API schemas are separate from DB models; never serialize a DB row directly.
- Config in one typed settings module reading env vars. No scattered `os.getenv`.

## Data

- Migrations for every schema change. No manual edits.
- FKs, NOT NULL, UNIQUE, and CHECK enforced in the database.
- Index every FK and every column used in a hot `WHERE` / `JOIN` / `ORDER BY`.
- Pool connections explicitly; one unpooled connection per request is a outage waiting for load.
- See the `db-design` skill for schema and migration detail.

## Security (non-negotiable)

- Passwords: argon2id or bcrypt. Never MD5/SHA, never homemade.
- Validate every input at the boundary. The frontend's validation is a convenience, not a control.
- Authorization is per object: can this user access *this* row, not just "is logged in".
- Parameterized SQL only. No string interpolation, ever.
- Secrets from the environment or a manager. Never in the repo or a client bundle.
- Rate limit auth, reset, and expensive endpoints.
- Generic errors to clients; full detail in server logs only.
- Least privilege for the DB user and every service credential.
- Details and the full checklist: `reference/security.md`.

## Async work

- Anything slow or unreliable (email, webhooks, exports) goes to a queue, not the request cycle.
- Jobs are idempotent; duplicates and retries are normal, not exceptional.
- Every outbound call has a timeout, and retries have a budget.

## API

- Resource names, plural, no verbs: `/orders/{id}`.
- Version from the start when external consumers exist.
- One error envelope across all endpoints.
- Pagination bounded and cursor-based for growing collections.

## Testing

- Unit-test business logic without the database.
- Integration-test queries against a real Postgres. Over-mocking the DB hides broken SQL.
- Test the denial case, not only the happy path.
