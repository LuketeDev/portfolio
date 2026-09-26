import { engineeringConcepts, engineeringLogs } from '@/data/portfolio';
import { SectionTitle } from './SectionTitle';

export function Engineering() {
  return (
    <section className="mx-auto max-w-5xl px-4 sm:px-6 py-10">
      <SectionTitle label="ENGINEERING" id="engineering" />

      {/* Concepts list */}
      <div className="border border-fg-muted/60 bg-bg-panel/40 p-5 sm:p-8 mb-6">
        <p className="text-sm text-fg-dim mb-4">
          <span className="text-green">$</span> ./project --print-concepts
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
          {engineeringConcepts.map((concept) => (
            <div key={concept} className="flex items-center gap-2 text-sm">
              <span className="text-green">&gt;</span>
              <span className="text-fg tracking-wider">{concept}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Logs */}
      <div className="border border-fg-muted/60 bg-bg-panel/40 p-5 sm:p-8">
        <p className="text-sm text-fg-dim mb-4">
          <span className="text-green">$</span> ./gradlew build --status
        </p>
        <div className="space-y-3">
          {engineeringLogs.map((log, i) => (
            <div key={i} className="text-sm animate-fade-in" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="text-fg-dim">
                <span className="text-green">$</span> {log.command.replace('$ ', '')}
              </div>
              <div className="flex items-center gap-2 mt-1 ml-4">
                <span
                  className={`text-xs font-bold tracking-wider ${
                    log.status === 'ok' ? 'text-green' : 'text-red'
                  }`}
                >
                  [OK]
                </span>
                <span className="text-fg-dim">{log.result}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 border-t border-dashed border-fg-muted/40 pt-3">
          <p className="text-xs text-fg-muted">
            * only known, verified results are shown here.
          </p>
        </div>
      </div>
    </section>
  );
}
