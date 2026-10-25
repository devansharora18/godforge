# Backend security

Design-level security. For reviewing a specific diff, see the `review` skill's `security.md`.

## Threat model first

Write four lines before code: what you are protecting, who would attack it, what they control, and what a breach costs. If the asset is not worth attacking, do not build a vault around it.

## Trust boundaries

Every arrow is a boundary that needs validation: client → edge, edge → service, service → database, service → third-party, worker → queue.

- Validate on the server at the boundary, even when the client also validates.
- Treat webhooks, queue messages, and imported files as untrusted input.
- Internal networks are not a security control. Authenticate service-to-service calls.

## Data

- Encrypt in transit (TLS, verified) and at rest (disk or column-level for sensitive fields).
- Minimize: do not collect a field without a use. Set retention and actually delete.
- Hash passwords; encrypt tokens and PII that must be recoverable; never log either.
- Backups are encrypted and restore-tested. An untested backup is a rumour.
- Multi-tenant queries are scoped in one place (RLS or repository), not per handler.

## Secrets

- Environment or a secrets manager. No defaults like `changeme` in production; fail to boot if missing.
- Rotate on a schedule and on any suspected leak. Short-lived credentials where possible.
- Separate credentials per environment and per service. Least privilege on the DB user.
- Scan the repo and the container image for secrets in CI.

## Injection and output

- Parameterized SQL; ORM only if it does not build raw fragments.
- Escape output for its context (HTML, attribute, JS, CSV). CSV injection is real.
- Templates autoescape. `|safe` requires a comment explaining the sanitizer.
- No shell interpolation. Argument arrays.
- Deserialization uses safe modes only.

## Outbound requests

- User-supplied URLs are an SSRF vector: allowlist schemes and hosts, block private and metadata ranges, re-check after DNS resolution.
- Sign outbound webhooks; include a timestamp and reject old ones.

## Files

- Size cap, content sniffing, generated filename, storage outside the webroot, served with `Content-Disposition` and a safe content type.
- Images re-encoded server-side. Never trust the extension.
- Signed URLs short-lived; no public bucket with guessable keys.

## Exposure

- Debug off in production; no stack traces, SQL, or internal hostnames in responses.
- Admin, metrics, `/docs`, and job dashboards are authenticated or not exposed.
- CORS explicit; no `*` with credentials.
- Security headers: CSP, HSTS, `X-Content-Type-Options`, frame denial where relevant.

## Abuse and availability

- Rate limit auth, reset, search, exports, and expensive queries.
- Cap payload size and query complexity.
- Cheapest-first rejection: auth before parsing a large body.

## Dependencies

- Lockfiles committed; audit in CI; high/critical findings block the release.
- Pin and review upgrades; a new transitive dependency is still a dependency.
- No install scripts from unvetted packages.

## Checklist

- Threat model written.
- Validation at every boundary.
- Authz per object.
- Secrets from the environment, rotatable.
- TLS verified outbound.
- Logs free of PII and secrets.
- Backups restored once, successfully.
- Debug and internal endpoints closed.
