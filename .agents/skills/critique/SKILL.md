---
name: critique
description: Use after a website change to review the whole site and fix what is broken — content, structure, links, metadata, consistency, and the path to the primary action. Website-level, not a single-screen visual critique (use design-critique) or a diff review (use review).
---

# Website critique

Run after a change, before calling the site done. The output is a fixed site, not a list of opinions.

## 1. Scope

Inventory every route a visitor can reach: navigation, footer, sitemap, in-page links. Name the one action the site exists to drive. A page that does not serve it is a finding.

## 2. Crawl

```bash
npx playwright screenshot --full-page http://localhost:5199 home.png
curl -s -o /dev/null -w "%{http_code} %{url_effective}\n" <each route>
```

Check status codes, redirects, 404s, console errors, failed assets, mixed content, `mailto:` links, and external links.

## 3. Content

- Does each page answer who it is for, what it does, and what to do next?
- Stale copy after the change: old counts, removed features, dates, screenshots.
- Contradictions between pages (pricing, limits, promises).
- Placeholder text, lorem, TODO, fake names, links to unbuilt pages.
- CTAs are verb + object and consistent across the site.
- Numbers have units and a source.

## 4. Flow

- A stranger can reach the primary action in one click from the landing page.
- Navigation labels match page titles. No dead ends or orphan pages.
- Back button, mobile menu, and in-page anchors work.
- Forms have labels, validation, and success and error states.
- Nothing important lives only in a footer or behind a hover.

## 5. Metadata and crawlability

- Unique title and description per page, canonical, OG image, one `<h1>`.
- `robots.txt`, sitemap, 404 page, favicon, language attribute.
- Defer deep SEO work to `seo-meta`.

## 6. Consistency

- Header, footer, spacing, and type behave the same on every page.
- One term per concept across the site.
- Dark mode, if present, covers every page — not just the landing page.
- Empty, loading, and error states exist wherever data appears.

## 7. Fix

Log every fault with URL, evidence, and severity (blocker / high / medium). Then:

1. Fix blockers first, one commit each.
2. Re-run the exact check that failed.
3. Add a guard against regression: a Playwright assertion, a link check in CI, or a content test.
4. Re-crawl the affected pages, then the whole site.

Do not redesign while fixing. Do not rewrite unrelated copy. If a fix needs a product decision, list it separately instead of guessing.

## 8. Report

```
Verdict: shippable | fixes applied

Fixed
- /pricing: "40 skills" updated to 44; CTA now "Install the skills".
- /docs: 404 on /agents -> redirected to /AGENTS.md.

Left open
- /blog has no canonical (needs a decision on the URL scheme).

Checked
- 12 routes, 38 links, console clean, mobile 360.
```

## Boundaries

- Visual hierarchy of one screen: `design-critique`.
- Interactive app flows and state: `qa`.
- Breakpoints and overflow: `responsive-audit`.
- Code diff: `review`.
