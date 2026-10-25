# Auth and permissions

## Sessions or tokens

| Need | Use |
|---|---|
| Web app, same origin | server session + `HttpOnly` cookie |
| Mobile / third-party API | short-lived access token + rotating refresh |
| Service to service | scoped API key or mTLS |
| SSO | OIDC with PKCE |

Do not put a JWT in `localStorage`. If you must, the XSS blast radius is the whole account.

## Cookies

`HttpOnly`, `Secure`, `SameSite=Lax` (or `Strict`), scoped path, short expiry, and a signed value. Session ID regenerated on login. Logout deletes the server-side session, not just the cookie.

CSRF protection is required for cookie-authenticated state changes: double-submit token, origin check, or `SameSite` plus a custom header.

## Passwords

- argon2id (preferred) or bcrypt with a current cost. Never SHA/MD5, never a homemade scheme.
- Minimum length 12, no composition rules, check against a breached-password list.
- Constant-time comparison. The same response and timing for unknown user and wrong password.
- Reset tokens: 32+ random bytes, hashed at rest, single use, 15–60 minute expiry.
- Do not email a temporary password.

## Tokens

- Access 5–15 minutes; refresh 7–30 days, rotated on every use.
- Store refresh tokens hashed; support revocation per device.
- JWT: pin `alg`, verify signature, `exp`, `iss`, `aud`; never trust `role` from an unverified token.
- Logout invalidates the refresh token server-side; "delete the client token" is not logout.

## Authorization

Choose the simplest model that fits:

- **RBAC** — roles per workspace. Start here.
- **ABAC** — attributes (plan, region, ownership) for rules that vary by context.
- **ReBAC** — relationship graphs (documents shared with teams) when access is per object.

Implementation rules:

- Deny by default. Unknown role or missing claim fails closed.
- Check at the service layer with the actual row: `WHERE id = ? AND account_id = ?`.
- Admin endpoints check the role server-side; hiding the button is not authorization.
- Every query that returns user data is scoped by tenant, including counts and exports.
- Background jobs carry the tenant/actor context; they do not run as superuser by accident.

## Multi-tenancy

Pick one: shared schema with `tenant_id` (default, cheap), schema per tenant, database per tenant.

- Every table has `tenant_id`, every query filters it, and a composite index starts with it.
- Enforce with RLS or a repository layer that cannot be bypassed — not by remembering.
- Tenant isolation gets an integration test with two tenants.

## OAuth / OIDC

- `state` (and PKCE) on every authorization request.
- Validate the `id_token`: signature, issuer, audience, expiry, nonce.
- Never accept an email as identity without a verified claim.
- Store the provider's subject ID, not the email, as the account key.

## API keys

Prefix + random secret, store only a hash, show once, support rotation and scopes, and rate limit per key. Treat a leaked key as an incident with a rotation runbook.
