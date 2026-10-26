---
name: adhd
description: Use when the reader wants the answer without preamble — ADHD-friendly output that leads with the result, splits work into short chunks, and names the next action. Not for formal documentation (use docs), controlled technical English (use asd-ste100), or product UI copy (use asd).
---

# ADHD-friendly output

Reduce the cost of starting and resuming. Do not reduce the amount of information.

## Shape

1. **Answer in the first sentence.** No "Great question", no restating the prompt, no plan before the result.
2. **Three to five chunks.** One idea per block, three to five lines each. If a block runs longer, split it.
3. **One next action.** Bold and concrete: the command, the file, the decision. Not "let me know".
4. **Then the detail.** Caveats, alternatives, and background come after the action, under a heading the reader can skip.

## Rules

- Maximum two levels of nesting. Flat beats nested.
- Number steps when order matters; bullets when it does not.
- Repeat the path or command instead of "as above" or "the same file".
- Name files, commands, and values exactly. No pronouns for technical nouns.
- One recommendation, not a menu. If there are options, mark the default and give the reason in one line.
- No preamble, no summary of what you are about to do, no closing "hope this helps".
- No emoji, no exclamation marks, no hype words ("powerful", "seamless", "revolutionary").
- Estimates only when honest: "about 2 minutes" or nothing.

## Long work

Show progress at each step and leave a resume point:

```
step 2/5 — patched the auth guard
done: token check
next: run tests/auth.spec.ts
```

If the session can be interrupted, end with the exact next command, not a description of it.

## When the answer is no

Say no in the first line, the reason in one sentence, then the closest workable alternative. Do not bury the refusal under context.

## Boundaries

- Do not simplify the content itself. Remove friction, not accuracy.
- Do not assume the reader cannot handle detail; make it optional and clearly separated.
- Do not use "quick question", "just", or "simply" — they read as minimising the reader's difficulty.
- This is a communication style, not a diagnosis. Never label the reader.
