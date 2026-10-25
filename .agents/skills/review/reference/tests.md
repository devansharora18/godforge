# Test smells

A passing suite is not evidence. These are the patterns that pass while the bug ships.

## Red flags in the diff

- **Asserts the mock**: `expect(repo.save).toHaveBeenCalled()` with no assertion on the result or the stored state.
- **No failing path**: only the happy case for a change whose risk is failure.
- **Snapshot blindness**: an updated snapshot committed without a human reading the diff.
- **Sleep as sync**: `waitForTimeout(2000)` instead of waiting for a state or an element.
- **Order dependence**: passes alone, fails in the suite (shared database, global state, fixed clock).
- **Over-mocking**: the database, the HTTP client, and the clock are all mocked, so the test proves the mocks agree.
- **No assertion**: a test that runs code and ends. It cannot fail.
- **Testing the framework**: asserting that `useState` updates state.
- **Brittle selectors**: CSS classes or DOM indexes instead of roles and labels.
- **Frozen time without a reset**: the next test inherits it.

## What each change needs

| Change | Minimum |
|---|---|
| Bug fix | a test that fails on the old code and passes on the new |
| New endpoint | happy path, validation failure, unauthenticated, forbidden (other user) |
| Branching logic | one case per branch, including the default |
| Migration | up on seeded data, down, and a query that proves the shape |
| Async/queue | duplicate delivery is harmless; a failed job is retried |
| Money/permissions | boundary values and the denial case |

## Prove the test tests

Revert the fix (or comment the branch) and run the new test. It must fail. If it passes, the test is decoration.

## Naming

Name the behavior, not the method: `rejects an expired reset token`, not `test_validate_2`.

## Flakiness

- No real network, no real clock, no shared mutable fixtures.
- Each test creates its own data and cleans up, or runs in a transaction that rolls back.
- Retries hide races; fix the race, do not add `retries: 3`.

## Review question

"What would have to break for this suite to go red?" If the answer is "nothing short of deleting a file", the tests do not cover the change.
