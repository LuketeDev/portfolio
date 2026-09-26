import { ReactNode } from "react";

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

/**
 * A terminal-style window frame with a title bar containing
 * pseudo-traffic-lights rendered as ASCII characters.
 */
export function TerminalWindow({
  title,
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <div className={`border border-fg-muted/60 bg-bg-panel/80 ${className}`}>
      <div className="flex items-center gap-2 border-b border-fg-muted/40 px-4 py-2">
        <span className="text-red-dim text-xs">[--]</span>
        <span className="text-fg-dim text-xs">[--]</span>
        <span className="text-green-dim text-xs">[--]</span>
        <span className="ml-3 text-xs text-fg-dim tracking-wider truncate">
          curl -X GET <span className="text-gray-50">"{title}"</span>
        </span>
      </div>
      <div className="p-4 sm:p-6 overflow-x-auto">{children}</div>
    </div>
  );
}
