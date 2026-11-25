import { useMemo, useState } from "react";
import type { WalkthroughStep } from "../../data/csharpTypes";

interface CodeWalkthroughProps {
  title: string;
  code: string;
  steps: WalkthroughStep[];
}

export function CodeWalkthrough({ title, code, steps }: CodeWalkthroughProps) {
  const [index, setIndex] = useState(0);
  const lines = useMemo(() => code.split("\n"), [code]);
  const step = steps[index];
  const progress = Math.round(((index + 1) / steps.length) * 100);

  return (
    <div className="ep-panel border-cyan-400/25 p-5 md:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Verstehen · Walkthrough
          </p>
          <h3 className="font-display mt-1 text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-sm text-slate-400">
          Schritt {index + 1} / {steps.length}
        </p>
      </div>

      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/5 bg-slate-950 p-4 font-mono text-sm leading-8">
        {lines.map((line, lineIndex) => {
          const lineNo = lineIndex + 1;
          const active = step?.line === lineNo;
          return (
            <div
              key={`${lineNo}-${line}`}
              className={`rounded-lg px-2 transition ${
                active
                  ? "bg-cyan-400/20 text-cyan-100 ring-1 ring-cyan-400/50"
                  : "text-emerald-200/90"
              }`}
            >
              <span className="mr-3 inline-block w-6 text-slate-500">{lineNo}</span>
              {line || " "}
            </div>
          );
        })}
      </pre>

      <div className="mt-4 animate-fade-up rounded-2xl border border-white/10 bg-slate-950/70 p-4">
        <p className="font-display text-lg font-bold text-white">{step.title}</p>
        <p className="mt-2 text-sm leading-7 text-slate-300">{step.explain}</p>
        {step.memory && (
          <p className="mt-3 rounded-xl bg-cyan-500/10 px-3 py-2 font-mono text-sm text-cyan-200">
            Speicher/Stand: {step.memory}
          </p>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          onClick={() => setIndex((value) => Math.max(0, value - 1))}
          className="ep-btn-ghost"
        >
          Zurück
        </button>
        <button
          onClick={() => setIndex((value) => Math.min(steps.length - 1, value + 1))}
          className="ep-btn-primary"
        >
          Nächster Schritt
        </button>
        <button onClick={() => setIndex(0)} className="ep-btn-ghost">
          Von vorn
        </button>
      </div>
    </div>
  );
}
