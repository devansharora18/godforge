# Interaction

Motion and states are where a polished screen becomes trustworthy.

## Affordances

- Anything clickable looks clickable without hover: underline, border, fill, or position.
- Hover-only actions need a tap equivalent, always.
- Disabled controls explain why, in text or a tooltip that is keyboard reachable.
- Links that navigate look different from buttons that act.

## Feedback

| Action | Response |
|---|---|
| Button press | visible state within 100ms |
| Save | optimistic update or a spinner inside the button, then confirmation |
| Delete | confirmation for irreversible, undo for reversible |
| Load > 1s | skeleton shaped like the content |
| Failure | inline message at the point of failure, with a retry |

No spinner replaces a whole page. No toast is the only record of an error.

## States to check

- Default, hover, focus-visible, active, disabled.
- Loading, empty, error, partial.
- Long content: 100 rows, a 200-character name, zero results.
- Slow network: 3G throttle, then retry.
- Double submit: the second click must not create a second record.

## Forms

- Validate on blur, confirm on submit. Do not shout while the user is typing.
- Keep the entered values after an error, always.
- Focus the first invalid field on submit.
- Autocomplete attributes present; correct `type` and `inputmode` on mobile.
- Enter submits; Escape closes a dialog; Tab order follows the visual order.

## Destructive actions

- Named precisely ("Delete 12 orders", not "Confirm").
- Separated from the primary action.
- Require typing the name only when the loss is unrecoverable.
- Undo beats a modal for reversible actions.

## Async truth

- Never show success before the server confirms, unless the failure is recoverable and visible.
- Cancel in-flight requests on unmount; ignore stale responses by sequence, not by hope.
- A refresh mid-flow must not duplicate work (idempotency key on the request).

## Report

```
[Settings] "Delete workspace" is styled like "Save" and sits beside it.
Blocker: one misclick destroys data with no confirmation.
Fix: move to a danger zone below the form, ghost/destructive styling, type-to-confirm.
```
