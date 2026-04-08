import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-[var(--page-max)] mx-auto px-6 py-24 text-center">
      <p className="text-caption mb-4">404</p>
      <h1
        style={{
          fontSize: 'clamp(36px, 6vw, 64px)',
          lineHeight: '0.95',
          letterSpacing: '-0.04em',
          fontWeight: 700,
        }}
        className="mb-6"
      >
        Page not found.
      </h1>
      <p className="text-body mb-10 max-w-md mx-auto">
        This peptide doesn&apos;t exist yet — or the URL is wrong.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/peptides"
          className="inline-flex items-center px-6 py-3 text-[14px] font-medium bg-[var(--text-primary)] text-[var(--bg-root)] rounded-full hover:opacity-80 transition-opacity"
        >
          Browse All Peptides
        </Link>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 text-[14px] font-medium border border-[var(--border-default)] rounded-full hover:bg-[var(--bg-surface)] transition-colors"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
