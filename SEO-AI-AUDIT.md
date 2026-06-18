# SEO + AI Search Audit — Remedial Waterproofing Perth
**Audit date:** 2026-06-18  
**Branch audited:** `claude/serene-lamport-vfnwmv` (branched from `main` tip `46b45a1`)  
**Scope:** Read-only. No code changes made in this phase.

> **Note on skill files:** `PWSS-REMEDIAL-SEO-SKILL.md` and `PWSS-DESIGN-SKILL.md` were not present in the repository. This audit is based on direct codebase analysis, schema.org standards, Google Search Central guidelines, and Google Ads quality score best practices. Flag this to the team — if these skill files exist elsewhere, re-run the audit against them.

---

## Summary Scorecard

| Category | Status | Notes |
|---|---|---|
| 1. On-Page SEO | ✅ PASS | H1 correct, hierarchy clean, meta tags present |
| 2. Structured Data | ⚠️ PARTIAL | 3 of 4 schema types present; missing WebPage/speakable; FAQPage accurate |
| 3. Semantic HTML / AI-Extraction Readiness | ✅ PASS | Strong use of `<article>`, `<section>`, `<main>`; entity explicit in text |
| 4. Technical SEO | ❌ FAIL | No robots.txt, no 404 page, sitemap incomplete |
| 5. Performance | ⚠️ PARTIAL | Hero image optimised; GA4 loaded correctly; minor font fallback concern |
| 6. Content Quality | ✅ PASS | No clichéd openers; clear CTAs; good keyword density |

---

## 1. On-Page SEO

### H1
**PASS.** Exactly one H1 exists across the single-page site, in `Hero.tsx`:

```
Remedial Waterproofing Perth
```

The full primary keyword "Remedial Waterproofing Perth" is present verbatim, rendered as a single heading with the word "Perth" styled via a `<span>` — the text content is still a single continuous string for crawlers.

### Heading Hierarchy
**PASS.** Hierarchy is sequential and correct:

- `<h1>` — Hero: "Remedial Waterproofing Perth"
- `<h2>` — Section headings: "What Is Remedial Waterproofing?", "Our Remedial Waterproofing Services", "Completed Projects", "Why Choose Remedial Waterproofing Perth", "Remedial Waterproofing Across Perth", "Frequently Asked Questions", "Get a Free Assessment"
- `<h3>` — Sub-items within sections (service cards, FAQ questions, suburb names, case study titles, contact details)

No levels are skipped. No `<h2>` appears inside a section where there's already an `<h1>`.

### Meta Title & Description
**PASS.**

- **Title:** "Remedial Waterproofing Perth | PWSS Remedial Division" — 56 chars, within the ~60-char recommended limit. Primary keyword leads.
- **Description:** "Expert remedial waterproofing in Perth. Leak investigation, membrane replacement, balcony repairs & more. Backed by Perth Waterproofing & Silicone Solutions. Call 1300 271 425." — 176 chars. Slightly over the ~160-char soft limit; Google may truncate at "Solutions." in search results. Not critical but worth trimming.
- **OG title and description** are present and correctly set.

### Canonical Tag
**PASS.** Set in `layout.tsx`:

```ts
alternates: {
  canonical: "https://perthwaterproofingremedial.com",
}
```

Self-referencing, correct domain, no trailing slash (consistent with the `url` in `openGraph`).

---

## 2. Structured Data

### Schemas Implemented vs Required

| Schema Type | Status | Notes |
|---|---|---|
| ProfessionalService / LocalBusiness | ✅ Present | `localBusinessSchema` in `schema.ts`, injected in `page.tsx` |
| FAQPage | ✅ Present | `faqSchema` in `FAQ.tsx`, schema matches visible text exactly |
| Service | ✅ Present | `serviceSchema` in `schema.ts`, injected in `page.tsx` |
| WebPage / speakable | ❌ Missing | Not implemented anywhere |

### parentOrganization
**PASS.** Correctly implemented in `localBusinessSchema`:

```ts
parentOrganization: {
  '@type': 'Organization',
  name: 'Perth Waterproofing & Silicone Solutions',
  url: 'https://www.perthwss.com.au/',
},
```

The `name` matches the legal entity name used in `COMPANY.legalName` and in visible body copy.

### FAQPage Accuracy
**PASS.** The `faqSchema` is generated directly from the same `faqs` array that renders the visible accordion answers — `faqs.map(faq => ...)`. Schema content is word-for-word identical to visible text. No paraphrasing or divergence.

### Schema Validation Issues

1. **`telephone` format:** `'+611300271425'` — this is technically correct E.164 format. However, 1300 numbers are not standard mobile/geographic numbers; some validators flag this. Low risk, but consider testing at validator.schema.org.

2. **Missing `@id` on LocalBusiness:** Schema.org recommends a stable `@id` URI (e.g., `"https://perthwaterproofingremedial.com/#organization"`) for entity disambiguation. Without it, Google may have trouble connecting the entity across pages.

3. **Missing `WebPage` / `speakable` schema:** Not implemented. `speakable` is relevant for AI assistants (Google Assistant, AI Overviews) to identify which page content is authoritative for voice/AI retrieval. Low urgency for now, but a gap if AI search optimisation is a goal.

4. **Service schema `areaServed` is `State: Western Australia`** — while not wrong, the LocalBusiness already lists specific cities. Using `State` for the Service schema is a missed opportunity to reinforce suburb-level targeting.

---

## 3. Semantic HTML / AI-Extraction Readiness

### Semantic Elements
**PASS.** The site uses semantic HTML consistently:

- `<main>` wraps all page content in `page.tsx`
- `<header>` is used in `Navbar.tsx`
- `<footer>` used in `Footer.tsx`
- `<section>` with `aria-label` attributes used in every section component
- `<article>` used correctly inside `ProblemFraming`, `ServiceAreas`, `FAQ` — wrapping self-contained topical content

No `<div>` soup on critical semantic boundaries.

### FAQ Answer Self-Containment
**PASS.** All 8 FAQ answers are self-contained. Each answer can be read in isolation and makes sense without referencing other parts of the page. No "as mentioned above" or cross-referencing language found.

**One note:** The FAQ implementation hides the answer content visually using `AnimatePresence` with `height: 0`. The developer has added a `sr-only` fallback (`{!isOpen && <div className="sr-only" aria-hidden="true">`) but marked it `aria-hidden="true"` — this means screen readers won't read it when collapsed. This is fine for GA/SEO crawler purposes (the schema carries the text), but is an accessibility consideration. The `FAQPage` JSON-LD contains the full text regardless, which is what Google uses for rich results.

### Entity Relationship to PWSS in Visible Text
**PASS.** The PWSS entity relationship is stated explicitly multiple times in visible body copy:

- Hero: *"Backed by Perth Waterproofing & Silicone Solutions"*
- ProblemFraming: *"Remedial Waterproofing Perth is a division of Perth Waterproofing & Silicone Solutions"*
- FAQ Q8: *"Remedial Waterproofing Perth is a division of Perth Waterproofing & Silicone Solutions (PWSS)..."*
- Footer: *"Remedial Waterproofing Perth is a division of Perth Waterproofing & Silicone Solutions"*

This is strong — the entity relationship is reinforced in four separate visible locations.

### Suburbs in Natural Sentence Form
**PASS.** Suburbs appear in natural sentence form in multiple places:

- ProblemFraming: *"...in Perth, Joondalup, Fremantle, Rockingham, and the wider metro area"*
- ServiceAreas: *"From Joondalup in the north to Mandurah in the south, and from Fremantle on the coast to Midland in the east"*
- FAQ Q4: *"...including Perth CBD, Joondalup, Osborne Park, Subiaco, Canning Vale, Fremantle, Rockingham, Mandurah, and Midland"*

Not only listed — named in prose context.

---

## 4. Technical SEO

### Sitemap
**PARTIAL.** `src/app/sitemap.ts` exists and will generate `/sitemap.xml` at runtime. However:

- Only one URL is listed: `https://perthwaterproofingremedial.com`
- This is technically correct for a single-page app (all content is on the homepage)
- **No `lastModified` date is hardcoded** — it uses `new Date()` which will return the server render time on each request. This means the `lastModified` value changes on every render, which can cause unnecessary crawl budget consumption. Recommend fixing to a static ISO date string that's updated on content deploys.

### robots.txt
**FAIL.** No `robots.txt` file exists at `/public/robots.txt` and no `robots.ts` route handler exists. Without robots.txt, crawlers default to allowing everything — this is not catastrophically wrong, but:

- Google Ads quality score audits look for explicit crawl permission
- Googlebot will show "No robots.txt" in Search Console which can appear as a warning
- Recommended minimum content: `User-agent: *\nAllow: /\nSitemap: https://perthwaterproofingremedial.com/sitemap.xml`

### 404 Page
**FAIL.** No `src/app/not-found.tsx` exists. Next.js will fall back to a default framework 404 — it will work but it is unstyled, has no CTA, and misses a conversion opportunity for mistyped URLs.

### Internal Links
**PASS.** All internal links use anchor hash targets (`#services`, `#contact`, `#faq`, etc.) consistently throughout Navbar, Footer, MobileMenu, and CTAs. No broken `href` values found. The logo links back to `/` correctly.

---

## 5. Performance (SEO / Ads Quality Score)

### LCP Risks
**PASS (with note).**

- The hero image (`/hero.webp`) uses Next.js `<Image>` with `fill` and `priority` — this correctly preloads the LCP candidate.
- The `priority` prop triggers `fetchpriority="high"` and a `<link rel="preload">` in the `<head>`.
- The image format is `.webp` — good for compression.

**Note:** The hero section uses a `min-h-[75vh]` with a `fill` image. On small viewports, LCP is the hero image. On very tall viewports, the above-fold content shifts slightly. Not a critical issue but worth monitoring with CrUX data post-launch.

### Layout Shift Risks
**PARTIAL.**

- Hero image uses `fill` layout — no explicit `width`/`height` but Next.js handles aspect ratio with fill mode via absolute positioning within a relative container. No CLS risk here.
- All other `<Image>` components (`pwss-logo.png`, `Symbol-logo.png`, `FullLogo_resized.png`) have explicit `width` and `height` props — correctly sized.
- **Font loading:** Montserrat and Inter are loaded via `next/font/google` with `display: "swap"`. Swap can cause FOUT (flash of unstyled text) which technically registers as CLS. This is standard practice and acceptable, but worth noting.
- **Partner logo** in Footer uses `<img>` (not `<Image>`) without width/height attributes: `<img src={partner.logo} alt={partner.name} className="h-10 w-auto ..." />`. This can cause layout shift as the browser doesn't know the image dimensions before load. **Recommend adding explicit `width` and `height` props or switching to `<Image>`.**

### GA4 Script Loading
**PASS.** The `<GoogleAnalytics gaId="G-N49QLFTD63" />` component from `@next/third-parties` is placed after `</body>` inside `<html>` in `layout.tsx`. The `@next/third-parties` implementation uses Next.js `<Script strategy="afterInteractive">` internally, which defers script loading until after the page is interactive. This means:

- GA4 does **not** block the critical rendering path
- GA4 does **not** affect LCP
- GA4 does **not** count as a render-blocking resource

Confirmed: no negative impact on Core Web Vitals from this implementation.

---

## 6. Content Quality

### Clichéd Openers
**PASS.** None found. No "Welcome to...", "At PWSS, we believe...", or "Are you looking for..." openers. Every section leads with a concrete statement, definition, or direct value claim.

### Filler Paragraphs
**PASS.** All body paragraphs contain either keyword targets, entity information, or actionable detail. No pure padding paragraphs detected.

### CTA Density
**PASS.** Each major section has a clear CTA:

- Hero → "Book a Free Inspection" + "Our Services"
- ServicesGrid → Phone CTA
- CaseStudies → (visual proof, CTA present via Navbar)
- CTABanner → "Book a Free Inspection" + phone
- WhyChooseUs → flows naturally to CTABanner above
- FAQ → "Get in Touch"
- ContactForm → the form itself is the CTA

No section longer than approximately one viewport height lacks a conversion prompt. The sticky Navbar phone link provides a persistent CTA on all scroll positions.

---

## Prioritised Fix List

### Critical (affects crawlability, indexing, or ad quality score)

1. **Add `robots.txt`** — Create `/public/robots.txt` with `Allow: /` and a `Sitemap:` directive. One file, five minutes.

2. **Add `not-found.tsx`** — A branded 404 page with a "Return to homepage" and phone CTA. Prevents cold traffic from bouncing on mistyped URLs.

### Important (affects SEO performance and structured data quality)

3. **Fix `sitemap.ts` lastModified** — Change `new Date()` to a static ISO date string (e.g., `new Date('2026-06-18')`). Update it manually on content deploys to signal fresh content without thrashing crawl cache.

4. **Add `@id` to LocalBusiness schema** — Add `"@id": "https://perthwaterproofingremedial.com/#organization"` to `localBusinessSchema`. This enables entity disambiguation in Google's Knowledge Graph.

5. **Fix `<img>` in Footer PARTNERS map** — The `<img>` tag for partner logos has no `width`/`height`. Add explicit dimensions or switch to `<Image>` to prevent layout shift.

6. **Trim meta description** — Current description is ~176 chars; trim to ≤160 to avoid truncation in SERPs. Suggested: Remove "Call 1300 271 425." and rely on the phone number visible in the sitelink.

### Nice-to-Have (AI search optimisation, future-proofing)

7. **Add `WebPage` + `speakable` schema** — Implement a `WebPage` JSON-LD block with `speakable` pointing to the hero and FAQ sections. Helps AI Overviews and Google Assistant identify authoritative content blocks.

8. **Add `image` property to LocalBusiness schema** — Include the logo URL to improve Knowledge Panel appearance.

9. **Consider `HowTo` schema for the investigation process** — The "investigation-led approach" described in WhyChooseUs could be marked up as a HowTo to target featured snippets for "how does remedial waterproofing work" queries.

10. **Add `review`/`aggregateRating` when reviews are available** — Currently no review markup. Once client Google reviews exist, adding AggregateRating to the LocalBusiness schema will enable star display in SERPs.
