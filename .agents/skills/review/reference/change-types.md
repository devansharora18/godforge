# Change-type checklists

Open the section that matches the diff. Each item is a question with a yes/no answer; a "no" is a finding.

## API endpoint

- Authn and per-object authz present.
- Input schema validates and bounds every field.
- Status codes match the outcome (201/204/409/422).
- Error envelope consistent with the rest of the API.
- Pagination bounded; no unbounded list.
- Idempotency for retried writes.
- Timeout set on outbound calls.
- At least one integration test through the router.

## Database migration

- Additive first; destructive steps deferred to a later release.
- Reversible, or explicitly marked with a tested restore.
- No long lock on a large table (adding a non-null column with a default, rewriting an index).
- Backfill batched and resumable.
- Old readers still work during the deploy window.
- Seed/fixture updated.
- Query plan checked for the new access path.

## UI change

- All four states exist: default, loading, empty, error.
- Keyboard reachable; focus visible; labels bound.
- Contrast measured.
- 360px checked; no horizontal overflow.
- Copy is specific; CTA is verb + object.
- Async actions cannot double-submit.

## Config / infra

- Secret from the environment or a manager, never the repo.
- Default is safe (deny, closed, off).
- Change is reversible with a named command.
- Rollout is gradual or behind a flag when it can break traffic.
- Monitoring covers the new failure mode.

## Dependency upgrade

- Read the changelog for breaking changes, not just the version bump.
- Lockfile committed.
- Full suite green.
- Bundle or image size change noted if significant.
- License compatible.
- Rollback is a version pin.

## Auth / permissions

- Deny by default; new paths fail closed.
- Existing sessions behave correctly after the change.
- Logout and revocation still work.
- Audit log records the new action.
- Tested with two users and two roles.

## Background job

- Idempotent under duplicate delivery.
- Retries with backoff and a dead-letter path.
- Timeout and max runtime bounded.
- Failure is observable (metric, log, alert).
- Payload versioned if it outlives the deploy.

## Public contract

- Versioned; breaking change is a new version.
- Deprecation window and migration note.
- Consumers identified before merge.
