import { projects, type ProjectType, type Project } from "@/data/portfolio";
import { SectionTitle } from "./SectionTitle";
import { TerminalWindow } from "./TerminalWindow";

const typeLabels: Record<ProjectType, string> = {
  STUDY: "STUDY",
  FREELANCE: "FREELANCE",
  PERSONAL: "PERSONAL",
  PROFESSIONAL: "PROFESSIONAL",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <div
      className="animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <TerminalWindow title={project.name}>
        {/* Project header */}
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-red font-bold text-base sm:text-lg tracking-wider">
              {project.name}
            </span>

            <span className={"text-gray-400"}>
              [{typeLabels[project.type]}]
            </span>

            <span className={project.isDeployed ? "text-green" : "text-red"}>
              [{project.isDeployed ? "DEPLOYED" : "BUILDING"}]
            </span>
          </div>
          <p className="text-sm text-fg-dim leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Divider */}
        <div className="my-4 border-t border-dashed border-fg-muted/40" />

        {/* Tech list */}
        <div className="mb-5">
          <p className="text-xs text-fg-muted mb-2 tracking-wider">
            // TECH STACK
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-xs sm:text-sm border border-fg-muted/50 px-2 py-0.5 text-fg-dim hover:text-green hover:border-green/50 transition-colors duration-150"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-fg-muted/60 px-4 py-2 text-xs sm:text-sm tracking-wider text-fg hover:border-green hover:text-green transition-colors duration-150"
            >
              [ {link.label} ]
            </a>
          ))}
        </div>
      </TerminalWindow>
    </div>
  );
}

export function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10">
      <SectionTitle label="PROJECTS" id="projects" />

      <div className="space-y-8">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* Hint for adding more */}
      <p className="text-xs text-fg-muted/60 mt-6 text-center">
        // more projects will be added here
      </p>
    </section>
  );
}
