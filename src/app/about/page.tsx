import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Peptides Guide is an AI-authored, research-sourced peptide encyclopedia. Every claim cites peer-reviewed research. No selling, no affiliate links, no ads.',
};

export default function AboutPage() {
  return (
    <>
      <article className="max-w-[var(--page-max)] mx-auto px-6 py-16">
        <header className="mb-20">
          <p className="text-caption mb-4">About</p>
          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              lineHeight: '1.05',
              letterSpacing: '-0.035em',
              fontWeight: 700,
            }}
          >
            Written by AI.<br />
            Sourced from research.<br />
            <span className="text-[var(--text-tertiary)]">Trusted by design.</span>
          </h1>
        </header>

        <div className="prose-content space-y-16 max-w-xl">
          <section>
            <h2 className="text-subhead mb-4">Who Made This</h2>
            <p>
              This project was prompted by <a href="https://visualizevalue.com" className="underline underline-offset-2 hover:text-[var(--text-primary)] transition-colors">Jack Butcher</a>{' '}(Visualize Value)
              and authored by Claude, Anthropic&apos;s AI assistant. Every peptide profile,
              every mechanism description, every protocol summary — prompted by a human,
              written by AI, sourced from published research.
            </p>
            <p>
              We&apos;re transparent about this because we believe it&apos;s a feature, not a bug.
              AI can synthesize research across hundreds of papers without the conflicts of interest
              that plague the peptide space — no inventory to sell, no affiliate commissions to earn,
              no brand partnerships to protect.
            </p>
          </section>

          <section>
            <h2 className="text-subhead mb-4">The Problem With Peptide Content</h2>
            <p>
              Search for any peptide online and you&apos;ll find vendor websites posing as educational
              resources. Forums full of anecdotal claims. Content farms regurgitating surface-level
              information with affiliate links attached. Even the &quot;good&quot; content is usually written
              by someone selling something.
            </p>
            <p>
              The result: people making health decisions based on marketing copy disguised as science.
            </p>
          </section>

          <section>
            <h2 className="text-subhead mb-4">How This Works</h2>
            <p>
              Every peptide profile on this site follows the same rigorous structure: mechanism of action,
              published research with real citations, commonly used protocols clearly labeled, safety profiles,
              and practical information.
            </p>
            <p>
              All claims are sourced from peer-reviewed journal articles, clinical trial data from PubMed
              and ClinicalTrials.gov, and established pharmacological references. When evidence is limited
              or primarily preclinical, we say so explicitly. When community protocols differ from research
              doses, both are presented and clearly distinguished.
            </p>
          </section>

          <section>
            <h2 className="text-subhead mb-4">What We Don&apos;t Do</h2>
            <ul className="space-y-3 text-[var(--text-secondary)]" style={{ fontSize: '17px', lineHeight: '1.65' }}>
              <li className="flex items-start gap-3">
                <span className="text-[var(--text-tertiary)] shrink-0">&mdash;</span>
                Sell peptides or any products
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--text-tertiary)] shrink-0">&mdash;</span>
                Use affiliate links
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--text-tertiary)] shrink-0">&mdash;</span>
                Run ads
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--text-tertiary)] shrink-0">&mdash;</span>
                Provide medical advice
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--text-tertiary)] shrink-0">&mdash;</span>
                Hype unproven claims
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[var(--text-tertiary)] shrink-0">&mdash;</span>
                Hide what wrote this
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-subhead mb-4">AI Limitations</h2>
            <p>
              AI authorship has real limitations and we acknowledge them. Claude&apos;s training data has a
              knowledge cutoff, which means very recent studies may not be reflected. AI can occasionally
              hallucinate details — we&apos;ve verified citations and core claims, but errors are possible.
              This is a living resource that gets updated as we identify issues.
            </p>
            <p>
              If you spot an error or outdated claim, we want to know. Accuracy matters more than anything else here.
            </p>
          </section>

          <section>
            <h2 className="text-subhead mb-4">The Standard</h2>
            <p>
              We believe AI-authored content held to a rigorous sourcing standard is more trustworthy
              than human-authored content with hidden commercial incentives. The peptide space needed
              a resource that prioritizes accuracy over revenue. This is that resource.
            </p>
          </section>
        </div>

        {/* Changelog */}
        <div className="mt-24 pt-20 border-t border-[var(--border-subtle)] max-w-xl">
          <p className="text-caption mb-4">Changelog</p>
          <h2 className="text-subhead mb-10">Built in public.</h2>

          <div className="space-y-0">
            <div className="flex gap-6 pb-8 border-b border-[var(--border-subtle)]">
              <span className="text-caption shrink-0 w-[80px] pt-0.5">Apr 8</span>
              <div>
                <p className="text-[15px] font-medium mb-1">Comparison page + 5 more peptides</p>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                  Added Semaglutide vs Tirzepatide vs Retatrutide comparison page.
                  New peptides: DSIP, Orforglipron, Suramin, CJC-1295 DAC, Thymalin.
                  Full peptides index page. 42 peptides, 118 pages total.
                </p>
              </div>
            </div>

            <div className="flex gap-6 py-8 border-b border-[var(--border-subtle)]">
              <span className="text-caption shrink-0 w-[80px] pt-0.5">Apr 8</span>
              <div>
                <p className="text-[15px] font-medium mb-1">OG images + TLDRs + Retatrutide</p>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                  Dynamic OG images for every page — black background, white Helvetica.
                  TLDR summaries added to every peptide page. Added Retatrutide (Eli Lilly&apos;s triple agonist).
                </p>
              </div>
            </div>

            <div className="flex gap-6 py-8 border-b border-[var(--border-subtle)]">
              <span className="text-caption shrink-0 w-[80px] pt-0.5">Apr 8</span>
              <div>
                <p className="text-[15px] font-medium mb-1">AI authorship positioning</p>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                  Leaned into transparent AI authorship. Updated About page, footer, and every
                  peptide page to credit &quot;Prompted by Jack Butcher (Visualize Value) · AI-authored by Claude.&quot;
                </p>
              </div>
            </div>

            <div className="flex gap-6 py-8 border-b border-[var(--border-subtle)]">
              <span className="text-caption shrink-0 w-[80px] pt-0.5">Apr 7</span>
              <div>
                <p className="text-[15px] font-medium mb-1">Guides + remaining peptides</p>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                  Three practical guides: Reconstitution, Dosing 101, Peptide Safety.
                  Added Thymosin Beta-4, Pentosan Polysulfate, Cerebrolysin, CJC-1295/Ipamorelin combo.
                  Design polish pass — unified containers, fixed side effects table alignment, consistent spacing.
                </p>
              </div>
            </div>

            <div className="flex gap-6 py-8 border-b border-[var(--border-subtle)]">
              <span className="text-caption shrink-0 w-[80px] pt-0.5">Apr 7</span>
              <div>
                <p className="text-[15px] font-medium mb-1">Content population — 32 peptides</p>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                  Batch-created all peptide data files across 8 categories. Every peptide includes
                  mechanism of action, research summary, citations with DOIs, protocols, side effects,
                  storage info, related peptides, and FAQ sections.
                </p>
              </div>
            </div>

            <div className="flex gap-6 py-8 border-b border-[var(--border-subtle)]">
              <span className="text-caption shrink-0 w-[80px] pt-0.5">Apr 7</span>
              <div>
                <p className="text-[15px] font-medium mb-1">Full site architecture</p>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                  Hub &amp; spoke architecture: 8 category pages, dynamic peptide pages, search,
                  sitemap, robots.txt. JSON-LD schema on every page (MedicalWebPage, FAQPage,
                  CollectionPage, BreadcrumbList). Dark/light mode.
                </p>
              </div>
            </div>

            <div className="flex gap-6 py-8">
              <span className="text-caption shrink-0 w-[80px] pt-0.5">Apr 7</span>
              <div>
                <p className="text-[15px] font-medium mb-1">Initial build</p>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">
                  Created peptides-guide.com from scratch. Next.js 15, Tailwind CSS, Helvetica design system.
                  Apple-inspired typography. llms.txt for AI agents. AI crawler access configured.
                  4 seed peptides (BPC-157, Semaglutide, GHK-Cu, Semax). Deployed to Railway + GitHub.
                </p>
              </div>
            </div>
          </div>

          <p className="text-[13px] text-[var(--text-tertiary)] mt-10">
            Entire site built in a single Claude Code session.
          </p>
        </div>
      </article>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AboutPage',
            name: 'About Peptides Guide',
            description: 'Peptides Guide is an AI-authored, research-sourced peptide encyclopedia built by Claude (Anthropic). Every claim cites peer-reviewed research.',
            isPartOf: {
              '@type': 'WebSite',
              name: 'Peptides Guide',
              url: 'https://peptides-guide.com',
            },
          }),
        }}
      />
    </>
  );
}
