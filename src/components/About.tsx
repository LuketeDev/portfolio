import { profile } from '@/data/portfolio';
import { SectionTitle } from './SectionTitle';

export function About() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10">
      <SectionTitle label="ABOUT" id="about" />

      <div className="border border-fg-muted/60 bg-bg-panel/40 p-5 sm:p-8">
        {/* Command line header */}
        <p className="text-sm text-fg-dim mb-4">
          <span className="text-green">$</span> cat about.txt
        </p>

        {/* Divider */}
        <div className="flex items-center gap-2 mb-4 text-fg-muted/40">
          <span className="flex-1 border-t border-dashed border-fg-muted/40" />
        </div>

        {/* Content */}
        <div className="space-y-1">
          {profile.about.map((line, i) => (
            <p
              key={i}
              className={`text-sm sm:text-base leading-relaxed ${i === 0 ? 'text-fg' : 'text-fg-dim'}`}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-2 mt-4 text-fg-muted/40">
          <span className="flex-1 border-t border-dashed border-fg-muted/40" />
        </div>

        {/* Prompt tail */}
        <p className="text-sm text-fg-dim mt-3">
          <span className="text-green">$</span> <span className="text-fg-muted">_</span>
        </p>
      </div>
    </section>
  );
}
