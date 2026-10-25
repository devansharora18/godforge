# Security review

Start from the attacker's position: what in this diff can they control, and where does that value end up?

## Access control

- Every new route has an authn check and a per-object authz check. "Logged in" is not "allowed".
- Object lookups are scoped by owner or tenant: `WHERE id = ? AND account_id = ?`. Missing scope is an IDOR.
- Admin routes check the role at the handler, not only by hiding the link.
- Default deny: an unrecognized role or missing claim fails closed, not open.
- Horizontal (another user's data) and vertical (lower role reaching higher) escalation both tested.

## Input

- Validated at the boundary by a schema with types, bounds, and required fields. Unknown fields rejected where it matters.
- Size caps on bodies, arrays, and string lengths; pagination has a max.
- File uploads: extension alone is not validation; check content type and magic bytes, cap size, generate the stored filename, store outside the webroot.
- Unicode normalized before comparison; no case-fold surprises in identifiers.
- No `eval`, no dynamic `require`, no shell string interpolation of user input.
- XML/HTML parsed with entity expansion disabled.

## Injection

- SQL: parameters or ORM only. A single f-string query is a blocker.
- Shell: argument arrays, never `shell=True` with interpolated input.
- Templates: autoescaping on; `|safe` justified in a comment.
- Logs and headers: strip CR/LF from user values.
- Deserialization: no `pickle`, no `yaml.load` without `SafeLoader`, no PHP object unserialize.

## SSRF and outbound calls

- User-supplied URLs go through an allowlist of hosts and schemes.
- Block link-local and metadata ranges (169.254.169.254, `::1`, private CIDRs) and resolve-then-connect to avoid DNS rebinding.
- Webhooks: verify the signature, enforce a timestamp window, and make handlers idempotent.

## Secrets and crypto

- No keys, tokens, or connection strings in the diff, tests, fixtures, or client bundle. If one lands, rotate it and say so.
- Passwords: argon2id or bcrypt with a sane cost. No MD5/SHA-1, no homemade schemes.
- Randomness from the OS CSPRNG, never `Math.random()` for tokens.
- Comparison of secrets in constant time.
- TLS verified on every outbound call; no `verify=False`.

## Sessions and tokens

- Cookies: `HttpOnly`, `Secure`, `SameSite=Lax` or stricter, scoped path.
- Access tokens short-lived; refresh tokens rotated and revocable; logout invalidates server-side.
- JWT: signature verified, `alg` pinned, `exp`/`iss`/`aud` checked, no secrets in claims.
- CSRF protection for cookie-authenticated state changes.

## Abuse

- Rate limit on auth, password reset, search, exports, and anything expensive.
- Account enumeration avoided: same response and timing for unknown vs wrong.
- Lockout or exponential backoff on repeated failure, without becoming a DoS vector.

## Headers, CORS, logging

- CORS: explicit origins; `*` never combined with credentials.
- CSP, `X-Content-Type-Options`, HSTS where appropriate.
- Logs contain no passwords, tokens, card numbers, or full request bodies; PII redacted.

## Supply chain

- New dependency justified; lockfile updated; `npm audit` / `pip-audit` clean for high severity.
- Package name checked for typosquatting; install scripts reviewed.
