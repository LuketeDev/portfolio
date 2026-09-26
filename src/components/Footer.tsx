export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto max-w-5xl px-4 sm:px-6 py-10">
      <div className="flex items-center gap-2 text-xs text-fg-muted mb-4">
        <span className="flex-1 border-t border-fg-muted/40" />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-fg-muted">
        <span className="tracking-wider">
          --------------------------------------------------
        </span>
        <span className="text-fg-dim">
          <span className="text-green">[</span> SYSTEM STATUS: ONLINE{' '}
          <span className="text-green">]</span>
        </span>
        <span className="tracking-wider hidden sm:inline">
          --------------------------------------------------
        </span>
      </div>

      <p className="text-center text-xs text-fg-muted/60 mt-4">
        EOF // {year} {'//'} built with Java mindset &amp; React
      </p>
    </footer>
  );
}
