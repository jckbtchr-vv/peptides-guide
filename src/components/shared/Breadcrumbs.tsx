import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1.5 text-[13px]" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            {item.href ? (
              <Link href={item.href} className="text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors" itemProp="item">
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span className="text-[var(--text-secondary)]" itemProp="name">{item.label}</span>
            )}
            <meta itemProp="position" content={String(i + 1)} />
            {i < items.length - 1 && (
              <span className="text-[var(--text-tertiary)]" aria-hidden>/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
