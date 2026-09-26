import { ReactNode } from 'react';

interface AsciiBoxProps {
  children: ReactNode;
  className?: string;
}

/**
 * Renders a container with a subtle ASCII-style single-line border.
 * Uses CSS border rather than literal +--- characters so it stays
 * crisp at every viewport width.
 */
export function AsciiBox({ children, className = '' }: AsciiBoxProps) {
  return (
    <div className={`border border-fg-muted/60 bg-bg-panel/60 ${className}`}>{children}</div>
  );
}
