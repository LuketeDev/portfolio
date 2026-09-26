import { useEffect, useState } from 'react';

const SECTIONS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'STACK', href: '#stack' },
  { label: 'ENGINEERING', href: '#engineering' },
  { label: 'CONTACT', href: '#contact' },
];

export function NavBar() {
  const [active, setActive] = useState<string>('');
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setBooted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    SECTIONS.forEach((s) => {
      const el = document.querySelector(s.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-fg-muted/40 bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2 text-sm font-bold tracking-wider shrink-0">
          <span className="text-green">/</span>
          <span className="text-fg">luke</span>
          <span className="text-fg-muted">.</span>
          <span className="text-fg-dim">sh</span>
        </a>

        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto" aria-label="Sections">
          {SECTIONS.map((s) => (
            <a
              key={s.href}
              href={s.href}
              className={`px-2 py-1 text-xs sm:text-sm tracking-wider transition-colors duration-150 whitespace-nowrap ${
                active === s.href.slice(1)
                  ? 'text-green border-b border-green'
                  : 'text-fg-dim hover:text-fg'
              }`}
            >
              {booted ? `[ ${s.label} ]` : '[ ... ]'}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
