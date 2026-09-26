import { profile } from '@/data/portfolio';
import { Cursor } from './Cursor';

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-4 sm:px-6 pt-10 sm:pt-16 pb-12">
      {/* Boot line */}
      <div className="text-xs sm:text-sm text-fg-dim mb-6 animate-type-in">
        <p>
          <span className="text-green">$</span> whoami
        </p>
      </div>

      {/* Main hero box */}
      <div className="border border-fg-muted/60 bg-bg-panel/60 p-6 sm:p-10 animate-fade-in">
        {/* Top border decoration */}
        <div className="flex items-center gap-2 mb-6 text-fg-muted text-xs">
          <span className="text-green">+</span>
          <span className="flex-1 border-t border-fg-muted/40" />
          <span className="text-green">+</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-bold tracking-wider text-fg mb-2 leading-tight">
          {profile.name}
        </h1>
        <h2 className="text-sm sm:text-lg font-medium tracking-[0.2em] text-green mb-6">
          {profile.role}
          <Cursor />
        </h2>

        <p className="text-sm sm:text-base text-fg-dim leading-relaxed mb-4 max-w-2xl">
          {profile.tagline}
        </p>

        {/* Keywords line */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-fg-muted mb-8">
          {profile.keywords.map((kw, i) => (
            <span key={kw} className="flex items-center gap-3">
              <span className="text-red">{kw}</span>
              {i < profile.keywords.length - 1 && <span className="text-fg-muted/50">|</span>}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-fg-muted/60 px-4 py-2 text-xs sm:text-sm tracking-wider text-fg hover:border-green hover:text-green transition-colors duration-150"
          >
            [ GITHUB ]
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-fg-muted/60 px-4 py-2 text-xs sm:text-sm tracking-wider text-fg hover:border-green hover:text-green transition-colors duration-150"
          >
            [ LINKEDIN ]
          </a>
          <a
            href={`mailto:${profile.links.email}`}
            className="border border-fg-muted/60 px-4 py-2 text-xs sm:text-sm tracking-wider text-fg hover:border-green hover:text-green transition-colors duration-150"
          >
            [ EMAIL ]
          </a>
        </div>

        {/* Bottom border decoration */}
        <div className="flex items-center gap-2 mt-8 text-fg-muted text-xs">
          <span className="text-green">+</span>
          <span className="flex-1 border-t border-fg-muted/40" />
          <span className="text-green">+</span>
        </div>
      </div>
    </section>
  );
}
