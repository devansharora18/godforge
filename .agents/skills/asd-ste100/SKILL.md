---
name: asd-ste100
description: Use for documentation, error messages, release notes, and UI copy that must be unambiguous — ASD-STE100 Simplified Technical English: one instruction per sentence, approved vocabulary, active voice, no noun clusters. Not for marketing copy (use docs or ui-ux) or conversational replies (use asd).
---

# ASD-STE100 Simplified Technical English

A controlled language for instructions that must not be misread. This is a working summary, not the official dictionary — for compliance, use the published ASD-STE100 specification.

## The rules that matter most

1. **One instruction per sentence.** If it has "and then", split it.
2. **20 words maximum** in an instruction, 25 in descriptive text.
3. **Active voice, imperative** for procedures: "Remove the cover", not "The cover must be removed".
4. **One word, one meaning.** Use the same verb every time. No elegant variation.
5. **Approved vocabulary.** Prefer the simple verb: start (not begin or initiate), use (not utilize), make (not generate) when the meaning is the same.
6. **No noun cluster longer than three words.** "Front panel access cover" becomes "cover on the front panel".
7. **No -ing forms** where a simple tense works. No stacked modals ("should be able to").
8. **No idioms, metaphor, humour, or Latin abbreviations** (e.g., i.e., etc.).
9. **Keep articles and subjects.** "Press the button", not "Button pressed".
10. **Put warnings before the step**, with the condition and the consequence: "If the power is on, injury can occur. Set the switch to OFF."

## Structure

- One topic per paragraph, six sentences maximum.
- Use a vertical list for three or more steps.
- Start each step with the verb.
- State the result after the action when it is not obvious.
- Define a term the first time it appears. Keep a glossary per project.

## Apply to

- **Error messages:** what failed, the cause if known, the exact action.
- **CLI help and API docs:** one sentence per flag, one example per call.
- **Release notes and migrations:** what changed, what to do, in that order.
- **UI copy:** labels and helper text, not brand headlines.

## Check before shipping

```
Sentences over 20 words:            0
Passive constructions in procedures: 0
Synonyms for the same action:       0
Noun clusters over 3 words:         0
Idioms or Latin abbreviations:      0
```

Read it aloud. If a sentence can be parsed two ways, rewrite it.

## Not for

Marketing, brand voice, headlines, or conversational replies. STE100 removes personality on purpose. Use `docs` for general documentation and `asd` for person-to-person clarity.
