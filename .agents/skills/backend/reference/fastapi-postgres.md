# FastAPI and Postgres

Conventions for the default stack. Deviate when the project already has a pattern.

## Layout

```
app/
  main.py                 # app factory, middleware, routers
  core/config.py          # pydantic-settings, one Settings instance
  core/db.py              # engine, session factory, get_session dependency
  features/orders/
    router.py service.py schemas.py models.py repository.py
  workers/
```

## Settings

```python
class Settings(BaseSettings):
    database_url: PostgresDsn
    environment: Literal["dev", "staging", "prod"]
    model_config = SettingsConfigDict(env_file=".env", extra="ignore")
```

No `os.getenv` scattered through the code. Fail at boot when a required value is missing.

## Sessions

- One session per request, injected as a dependency, closed in `finally`.
- Async (`asyncpg` + `AsyncSession`) when the workload is I/O bound; sync is simpler and fine for low traffic. Do not mix drivers.
- Pool: `pool_size` ≈ workers × expected concurrent queries, plus `max_overflow`. Watch `pg_stat_activity`; a pool larger than the database can handle is a self-inflicted outage.

## Queries

- SQLAlchemy 2 style: `select(Order).where(...)`, not legacy `session.query`.
- Eager-load relationships used in the response (`selectinload`) to avoid N+1.
- `expire_on_commit=False` for async, or re-fetch after commit.
- Paginate by cursor (`created_at`, `id`), not `OFFSET` on large tables.
- Run `EXPLAIN (ANALYZE, BUFFERS)` for any new query on a table over ~100k rows.

## Transactions

- The service owns the transaction; repositories never call `commit()`.
- Keep external calls outside the unit of work. Use an outbox for "write row and publish".
- One retry for serialization failures or deadlocks; do not retry arbitrary errors.

## Schemas

- Pydantic models for input and output, separate from SQLAlchemy models.
- `response_model` set on every endpoint so internal fields cannot leak.
- Use `Annotated[..., Field(...)]` for bounds and descriptions.
- Timestamps timezone-aware UTC; serialize ISO-8601.

## Migrations

- Alembic for everything; autogenerate, then read and fix the migration by hand.
- One concern per migration; never edit a revision that ran in production.
- Additive first: nullable column → backfill → switch reads → drop old.
- Test up and down against a production-shaped database before deploy.

## Auth dependency

```python
async def current_user(token: str = Depends(bearer), db: AsyncSession = Depends(get_session)) -> User:
    ...  # verify, load, raise 401
```

Authorization lives in the service, using the loaded user and the target row — not in a decorator that only checks a role string.

## Errors

Register one exception handler that returns the shared envelope. Do not let a validation error return FastAPI's default shape while other errors use yours.

## Testing

- Real Postgres via docker or testcontainers; SQLite is not Postgres.
- Each test in a transaction that rolls back, or a schema per worker.
- One integration test through the ASGI client per endpoint, including the denied case.
- Freeze time explicitly when testing expiry; reset it afterward.

## Pitfalls

| Symptom | Cause |
|---|---|
| `MissingGreenlet` | lazy load in async — eager-load instead |
| Stale response | `expire_on_commit` / session cached object |
| Duplicate rows | read-modify-write without a unique constraint |
| Timezone drift | `timestamp without time zone` |
| Pool exhaustion | sessions not closed, or external calls inside one |
