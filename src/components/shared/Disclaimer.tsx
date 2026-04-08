export function Disclaimer({ text }: { text?: string }) {
  return (
    <aside className="rounded-[var(--radius-md)] bg-[var(--bg-surface)] p-5" role="note">
      <p className="text-[12px] leading-relaxed text-[var(--text-tertiary)]">
        <strong className="text-[var(--text-secondary)] font-medium">Disclaimer: </strong>
        {text ||
          'This content is for educational and informational purposes only. It is not intended as medical advice. Many peptides discussed are not FDA-approved for human use. Consult a qualified healthcare professional before using any peptide.'}
      </p>
    </aside>
  );
}
