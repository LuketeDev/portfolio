import { profile } from '@/data/portfolio';
import { SectionTitle } from './SectionTitle';

export function Contact() {
  const contactLinks = [
    { label: 'GITHUB', url: profile.links.github, external: true },
    { label: 'LINKEDIN', url: profile.links.linkedin, external: true },
    { label: 'EMAIL', url: `mailto:${profile.links.email}`, external: false },
  ];

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10">
      <SectionTitle label="CONTACT" id="contact" />

      <div className="border border-fg-muted/60 bg-bg-panel/40 p-5 sm:p-8 max-w-2xl">
        {/* Top border */}
        <div className="flex items-center gap-2 text-xs text-fg-muted mb-4">
          <span>+</span>
          <span className="flex-1 border-t border-fg-muted/40" />
          <span>+</span>
        </div>

        <p className="text-sm text-fg-dim mb-5">
          <span className="text-green">$</span> ./connect.sh
        </p>

        <div className="space-y-3">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              {...(link.external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className="flex items-center gap-3 text-sm text-fg-dim hover:text-green transition-colors duration-150 group"
            >
              <span className="text-green w-4">&gt;</span>
              <span className="tracking-wider w-24 shrink-0 group-hover:text-green transition-colors">
                {link.label.toLowerCase()}
              </span>
              <span className="text-fg-muted group-hover:text-green-dim transition-colors truncate">
                {link.url.replace(/^mailto:/, '')}
              </span>
            </a>
          ))}
        </div>

        {/* Bottom border */}
        <div className="flex items-center gap-2 text-xs text-fg-muted mt-5">
          <span>+</span>
          <span className="flex-1 border-t border-fg-muted/40" />
          <span>+</span>
        </div>
      </div>
    </section>
  );
}
