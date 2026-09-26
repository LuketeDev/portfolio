interface SectionTitleProps {
  label: string;
  id: string;
}

/**
 * Renders a [ SECTION ] style header with a divider line beneath it.
 */
export function SectionTitle({ label, id }: SectionTitleProps) {
  return (
    <div id={id} className="scroll-mt-20 mb-6">
      <div className="flex items-center gap-3">
        <span className="text-green font-bold tracking-wider">[ {label} ]</span>
        <span className="flex-1 h-px bg-fg-muted/40" />
      </div>
    </div>
  );
}
