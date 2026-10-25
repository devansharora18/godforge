# Reliability

Most production incidents are the same five mistakes: no timeout, a retry that duplicates a write, a transaction that wraps a network call, a race without a constraint, and a queue that loses work on deploy.

## Transactions

- One transaction per request or job unit. Keep it short.
- No external HTTP, email, or file upload inside a transaction — it holds locks and cannot roll back the outside world.
- Know your isolation level. Read-committed is the default; use `SELECT ... FOR UPDATE` or a unique constraint for correctness, not hope.
- A write outside the transaction that can fail means you need an outbox.

## Idempotency

- Mutating endpoints accept an `Idempotency-Key`; store key → result and replay the first response.
- Queue consumers are idempotent by a natural key or a processed-events table.
- Webhooks are delivered more than once. Verify the signature, dedupe by event ID, and return 2xx quickly.
- Retried payments, emails, and invites are the classic duplicates.

## Retries

- Retry only idempotent operations, or ones protected by a key.
- Exponential backoff with jitter, capped attempts, and a dead-letter destination.
- Do not retry 4xx except 408/429; do retry timeouts and 5xx.
- A retry storm is worse than the original failure. Add a circuit breaker for a dependency that is down.

## Timeouts

Set all three: connect, read, and total. The server timeout must be shorter than the client's, so the client receives a real error instead of a severed connection.

- DB statement timeout (e.g. 5s) and lock timeout.
- HTTP client timeout (e.g. 10s) on every call.
- Job max runtime; kill and retry rather than hang.

## Queues

- At-least-once delivery: duplicates are normal.
- Visibility timeout longer than the job's worst case, or the job runs twice.
- Failed jobs go to a dead letter queue with the payload and error; alert on depth, not on existence.
- Drain on shutdown: stop accepting, finish in-flight, then exit.
- Version the payload if queued work can outlive a deploy.

## Races and constraints

- A unique index is the only reliable guard against double-create under concurrency.
- Optimistic concurrency: a `version` column and `WHERE version = ?`.
- Pessimistic: `SELECT ... FOR UPDATE` in a short transaction.
- Counters: `UPDATE ... SET n = n + 1`, not read-modify-write in application code.

## Failure isolation

- One slow dependency must not exhaust the thread/connection pool. Bulkheads and circuit breakers.
- Health check is liveness only; readiness checks dependencies.
- Degrade explicitly: cached read, queued write, or a clear 503 with `Retry-After`.

## Verify

- Kill the dependency mid-request in staging and watch the behavior.
- Run the same job twice and confirm one effect.
- Deploy during a queue drain and confirm nothing is lost.
