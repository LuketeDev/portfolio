import { stack } from "@/data/portfolio";
import { SectionTitle } from "./SectionTitle";

export function Stack() {
  const maxLabel = Math.max(...stack.map((s) => s.label.length));

  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10">
      <SectionTitle label="STACK" id="stack" />

      <div className="border border-fg-muted/60 bg-bg-panel/40 p-5 sm:p-8">
        {/* Command */}
        <p className="text-sm text-fg-dim mb-4">
          <span className="text-green">$</span> cat stack.config
        </p>

        {/* Table header */}
        <div className="flex items-center gap-2 text-xs text-fg-muted mb-2">
          <span>+</span>
          <span className="flex-1 border-t border-fg-muted/30" />
          <span>+</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody>
              {stack.map((entry, i) => (
                <tr
                  key={entry.label}
                  className="border-b border-fg-muted/20 hover:bg-bg-alt/50 transition-colors duration-100"
                >
                  <td className="py-2 pr-4 sm:pr-8 align-top">
                    <span className="text-red tracking-wider whitespace-nowrap">
                      {entry.label.padEnd(maxLabel, " ")}
                    </span>
                  </td>
                  <td className="py-2 text-fg-dim whitespace-nowrap">
                    <span className="text-fg-muted hidden sm:inline">::</span>
                    {entry.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table footer */}
        <div className="flex items-center gap-2 text-xs text-fg-muted mt-2">
          <span>+</span>
          <span className="flex-1 border-t border-fg-muted/30" />
          <span>+</span>
        </div>

        <p className="text-sm text-fg-dim mt-3">
          <span className="text-green">$</span>{" "}
          <span className="text-fg-muted">_</span>
        </p>
      </div>
    </section>
  );
}
