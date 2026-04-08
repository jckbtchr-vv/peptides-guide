# GEO Audit Report: Peptides Guide

**Audit Date:** April 8, 2026
**URL:** https://peptides-guide.com
**Business Type:** Publisher / Educational Encyclopedia
**Pages Analyzed:** 49 (via sitemap)

---

## Executive Summary

**Overall GEO Score: 45/100 (Poor — but fixable)**

The content quality is genuinely excellent — well-structured, research-backed, highly citable prose with proper JSON-LD schema. However, three critical issues are sabotaging visibility: (1) **Cloudflare is blocking all AI crawlers** via robots.txt, making the site invisible to ChatGPT, Claude, and Perplexity, (2) **zero brand authority** — brand new domain with no backlinks, no mentions anywhere, and (3) **no author attribution or dates** on any content, which tanks E-E-A-T for health/medical topics (YMYL).

The good news: the content foundation is top-tier. Fixing the Cloudflare issue alone would dramatically improve AI visibility. Adding author credentials and building initial backlinks would push this into "Good" territory within 30 days.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 75/100 | 25% | 18.75 |
| Brand Authority | 8/100 | 20% | 1.60 |
| Content E-E-A-T | 52/100 | 20% | 10.40 |
| Technical GEO | 45/100 | 15% | 6.75 |
| Schema & Structured Data | 72/100 | 10% | 7.20 |
| Platform Optimization | 5/100 | 10% | 0.50 |
| **Overall GEO Score** | | | **45/100** |

---

## Critical Issues (Fix Immediately)

### 1. Cloudflare Blocking All AI Crawlers
**Severity: CRITICAL — This single issue makes the entire site invisible to AI systems**

Cloudflare's bot protection is injecting `Disallow: /` directives for GPTBot, ClaudeBot, Google-Extended, PerplexityBot, and others into robots.txt. This overrides your Next.js `robots.ts` which explicitly allows them.

The robots.txt currently contains **conflicting directives** — Cloudflare blocks them first, then your config allows them. Most crawlers will respect the first (blocking) directive.

**Fix:** In Cloudflare dashboard → Security → Bots → Configure Bot Management:
- Add GPTBot, ClaudeBot, Claude-Web, PerplexityBot, Google-Extended, Applebot-Extended, cohere-ai to the **allow list**
- Or disable "AI Scrapers and Crawlers" blocking under Security → Settings
- Verify by fetching `https://peptides-guide.com/robots.txt` after changes

### 2. Zero Brand Authority / Backlinks
**Severity: CRITICAL for ranking**

The domain is brand new with zero referring domains, zero mentions on Reddit, YouTube, LinkedIn, Wikipedia, or any platform that AI systems use for entity recognition. Google's algorithm heavily weights backlinks for YMYL (Your Money Your Life) health content.

**Fix:** See 30-Day Action Plan below.

### 3. No Author Attribution (YMYL Content)
**Severity: CRITICAL for Google ranking**

This is health/medical content — Google classifies it as YMYL. Google's Quality Rater Guidelines explicitly require identifiable authors with verifiable credentials for health content. Currently: no author names, no bios, no credentials, no "reviewed by" badges anywhere on the site.

**Fix:** Add an author/editorial team to the About page with real credentials. Add `Person` schema. Add "Reviewed by [Name], [Credential]" to each peptide page.

---

## High Priority Issues

### 4. No Publication or Last Updated Dates
Every peptide page lacks a publication date and "last reviewed" timestamp. Both Google and AI systems use dates to assess content freshness — critical for medical/research content where information changes rapidly.

**Fix:** Add `datePublished` and `dateModified` to page metadata and visible on each page.

### 5. No `speakable` Schema
The site targets AI extraction but doesn't mark key passages as `speakable` — the schema that tells voice assistants and AI which passages to read aloud or cite.

**Fix:** Add `speakable` property to the MedicalWebPage schema pointing to the overview and FAQ sections.

### 6. Missing `www` CNAME / Redirect
No `www.peptides-guide.com` configuration. Both should resolve, with one redirecting to the canonical.

---

## Medium Priority Issues

### 7. Content Depth Gaps
Some peptide pages (skin/hair category especially) are thinner than healing/metabolic pages. Argireline and AHK-Cu have fewer citations and less research depth.

### 8. No Internal Search JSON-LD
Missing `SearchAction` schema on the homepage that would enable sitelinks searchbox in Google results.

### 9. Category Pages Are Thin
Category pages have a description + peptide card list but no substantive content. Adding 200-400 words of category-level overview content (explaining the category, how peptides in it work together, common stacking patterns) would improve both SEO and AI citability.

### 10. No Canonical Cross-References for Multi-Category Peptides
GHK-Cu appears in Longevity, Skin & Hair, and Healing & Recovery. BPC-157 appears in Healing and Immune/Gut. The cross-listing is good for UX but there's no explicit canonical signal about which is the "primary" listing for search engines.

---

## Low Priority Issues

### 11. Some Images Missing (No OG Images)
No Open Graph images for social sharing. Peptide pages have no visual content (molecular structure diagrams, mechanism illustrations).

### 12. No RSS Feed
An RSS feed would help content aggregators and some AI systems discover new content.

### 13. Footer Disclaimer Could Be Stronger
The footer disclaimer is good but could include specific regulatory references (FDA 21 CFR) for additional legal protection.

---

## Category Deep Dives

### AI Citability (75/100)

**Strengths:**
- Excellent content structure: clear H2 sections, short factual paragraphs, definition-style prose
- FAQ sections with schema on every peptide page — the #1 pattern AI systems extract
- "Quick Facts" structured data blocks are trivially parseable
- Specific numerical claims: "14.9% mean weight loss over 68 weeks" — highly quotable
- Protocol tables with discrete data points (dose, frequency, cycle)
- Citations with DOIs, journal names, years — provenance data AI needs

**Weaknesses:**
- No author attribution makes citation provenance weaker
- Long mechanism-of-action paragraphs could be broken into shorter, more extractable blocks
- Overview paragraphs sometimes bury the key claim 2-3 sentences in (lead with the answer)

**Example of highly citable passage (Semaglutide):**
> "Clinical trials show average weight loss of 14.9% of body weight over 68 weeks at the 2.4 mg weekly dose (STEP 1 trial)."

This is perfect — specific, sourced, self-contained. More passages like this.

### Brand Authority (8/100)

**Current state:** Zero. Brand new domain, no backlinks, no social presence, no mentions anywhere.

**What AI systems look for:**
- Wikipedia mentions or dedicated page
- Reddit discussions mentioning the site
- YouTube references
- LinkedIn company page
- Citations from other authoritative health sites
- Presence on health-specific platforms (PubMed, ResearchGate mentions)

**None of these exist yet.** This is expected for a new site but it's the #1 barrier to both Google ranking and AI citation.

### Content E-E-A-T (52/100)

**Strong:**
- Methodology section on About page
- Explicit "we don't sell anything" positioning
- Clear disclaimers on every page
- Distinguishes preclinical from clinical evidence
- Cites peer-reviewed sources with DOIs
- Acknowledges limitations honestly

**Weak:**
- **No identified authors** — fatal for YMYL health content
- No editorial board or advisory panel
- No "reviewed by" credentials on peptide pages
- No publication dates
- No LinkedIn/social proof of expertise
- About page discusses methodology but not who wrote it

### Technical GEO (45/100)

**Strong:**
- Next.js SSG = fast, fully rendered HTML (no JS-rendering issues for crawlers)
- Sitemap.xml properly configured with 49 URLs and priorities
- llms.txt file present and well-structured
- Clean URL structure (/peptides/bpc-157)
- Mobile responsive
- Fast load times (static generation)

**Critical failure:**
- **Cloudflare robots.txt blocking ALL AI crawlers** — GPTBot, ClaudeBot, PerplexityBot, Google-Extended all receive `Disallow: /`
- This makes the llms.txt and all other AI optimizations moot

### Schema & Structured Data (72/100)

**Implemented:**
- `WebSite` schema on homepage
- `MedicalWebPage` schema on peptide pages (with `Drug` entity)
- `FAQPage` schema on every peptide page (5 Q&As each)
- `CollectionPage` schema on category pages
- `BreadcrumbList` schema via structured breadcrumbs
- `Article` schema on guide pages

**Missing:**
- `Person` schema for authors
- `datePublished` / `dateModified` properties
- `speakable` property on MedicalWebPage
- `SearchAction` schema on homepage
- `MedicalAudience` could be expanded
- No `sameAs` linking to social profiles
- No `ReviewedBy` or `author` properties

### Platform Optimization (5/100)

Zero presence on any platform that AI systems train on or cite:
- No YouTube channel
- No Reddit presence (r/peptides, r/Nootropics)
- No Wikipedia mention
- No LinkedIn company page
- No Twitter/X account
- No podcast mentions
- No Substack or newsletter

---

## Quick Wins (Implement This Week)

1. **Fix Cloudflare AI crawler blocking** — 5 minutes in Cloudflare dashboard. Unlocks all AI visibility instantly.
2. **Add author/editorial attribution** — Create a named editor with credentials (even if minimal). Add to About page + Person schema.
3. **Add dates to all pages** — `datePublished` and `dateModified` in metadata and visible on page.
4. **Create a Reddit post** in r/Peptides or r/Nootropics introducing the resource — instant brand mention on a platform AI systems heavily cite.
5. **Add `speakable` schema** to overview sections of peptide pages.

## 30-Day Action Plan

### Week 1: Fix Critical Technical + E-E-A-T Issues
- [ ] Fix Cloudflare robots.txt — allow all AI crawlers
- [ ] Add author name + credentials to About page
- [ ] Add `Person` schema with `sameAs` links
- [ ] Add "Reviewed by [Name]" to every peptide page header
- [ ] Add `datePublished` and `dateModified` to all pages
- [ ] Add `speakable` schema to MedicalWebPage
- [ ] Verify robots.txt is clean after Cloudflare changes

### Week 2: Build Initial Brand Authority
- [ ] Create LinkedIn company page for Peptides Guide
- [ ] Post to r/Peptides, r/Nootropics, r/Biohacking introducing the resource
- [ ] Create Twitter/X account, post key peptide facts with links
- [ ] Submit site to DMOZ-successor directories and health resource lists
- [ ] Reach out to 3-5 peptide/biohacking podcasts or newsletters for mentions

### Week 3: Content Depth + Category SEO
- [ ] Add 300-400 word overview content to each category page
- [ ] Add `SearchAction` schema to homepage
- [ ] Create OG images for social sharing (use next/og or Vercel OG)
- [ ] Add FAQ schema to category pages
- [ ] Thicken thinner peptide pages (AHK-Cu, Argireline, Kisspeptin)

### Week 4: Platform Expansion + Monitoring
- [ ] Create a YouTube video (even simple) covering "Top 5 Peptides for Recovery" or similar
- [ ] Submit sitemap to Google Search Console, Bing Webmaster Tools
- [ ] Set up Google Search Console and monitor indexing
- [ ] Check if AI systems (ChatGPT, Perplexity) are starting to cite the site
- [ ] Write 1-2 guest posts on health/biohacking sites linking back

---

## Google Ranking Assessment

**Will this rank on Google?** Here's the honest breakdown:

### What's Working For You
- **Content quality is genuinely top-tier** — better than 90% of peptide content online
- **Site architecture is textbook** — hub & spoke, clean URLs, proper internal linking
- **Technical foundation is excellent** — SSG, fast, semantic HTML, proper schema
- **No commercial intent** — Google tends to favor non-commercial health resources
- **FAQ schema on every page** — strong for featured snippets
- **Comprehensive coverage** — 36 peptides is more than any single competitor page

### What's Working Against You
- **Brand new domain** — zero domain authority, zero backlinks
- **YMYL content without author credentials** — Google's strictest quality filter
- **No indexed pages yet** (if crawlers are blocked)
- **Competing against established sites** — WebMD, Examine.com, PubChem, Wikipedia all rank for peptide queries
- **No user engagement signals** — no reviews, comments, or social proof

### Realistic Timeline
- **Month 1-2:** Pages get indexed (after fixing Cloudflare). Long-tail queries start appearing (e.g., "BPC-157 mechanism of action", "FOXO4-DRI senolytic peptide")
- **Month 3-6:** With backlink building, start ranking for mid-tail queries ("BPC-157 dosing", "semaglutide vs tirzepatide")
- **Month 6-12:** With consistent authority building, competitive queries become possible ("BPC-157 guide", "peptide encyclopedia")
- **12+ months:** Head terms like "BPC-157" or "semaglutide" require significant domain authority

### The AI Angle (Your Advantage)
Traditional Google SEO will take months. But **AI search is your biggest opportunity:**
- Perplexity, ChatGPT search, and Google AI Overviews are actively looking for well-structured, citable health content
- Your FAQ schema + structured data + comprehensive coverage is exactly what AI systems prefer to cite
- Once Cloudflare stops blocking crawlers, AI systems may start citing you within weeks, not months
- AI citations create a flywheel: AI cites you → users visit → engagement signals → Google ranks you higher

**Bottom line:** Fix the Cloudflare issue and add author credentials this week. Those two changes alone could double your score from 45 to 70+ and unlock the AI citation flywheel.

---

## Appendix: Competitive Landscape

| Competitor | Strengths | Weaknesses vs. You |
|---|---|---|
| Examine.com | Massive DA, established brand, human-reviewed | Paywalled, less peptide-specific depth |
| PubChem | Authoritative, government source | Raw data, not user-friendly, no protocols |
| Wikipedia | Highest DA, AI training data | No dosing, no protocols, often incomplete for newer peptides |
| Reddit r/Peptides | High engagement, community trust | Unstructured, anecdotal, no quality control |
| Vendor blogs | SEO-optimized | Commercial bias, sell products, less trustworthy |

**Your positioning:** The structured, non-commercial encyclopedia that fills the gap between Wikipedia (too sparse) and vendor blogs (too biased). This is a defensible niche.
