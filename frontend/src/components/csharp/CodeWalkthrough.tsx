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

  return (
    <div className="rounded-2xl border border-cyan-500/30 bg-slate-900 p-5 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Verstehen · Walkthrough
          </p>
          <h3 className="mt-1 text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-sm text-slate-400">
          Schritt {index + 1} / {steps.length}
        </p>
      </div>

      <pre className="mt-4 overflow-x-auto rounded-xl border border-slate-700 bg-slate-950 p-4 font-mono text-sm leading-8">
        {lines.map((line, lineIndex) => {
          const lineNo = lineIndex + 1;
          const active = step?.line === lineNo;
          return (
            <div
              key={`${lineNo}-${line}`}
              className={`rounded px-2 transition ${
                active ? "bg-cyan-400/20 text-cyan-100 ring-1 ring-cyan-400/50" : "text-emerald-200/90"
              }`}
            >
              <span className="mr-3 inline-block w-6 text-slate-500">{lineNo}</span>
              {line || " "}
            </div>
          );
        })}
      </pre>

      <div className="mt-4 animate-fade-up rounded-xl border border-slate-700 bg-slate-950 p-4">
        <p className="text-lg font-bold text-white">{step.title}</p>
        <p className="mt-2 text-sm leading-7 text-slate-300">{step.explain}</p>
        {step.memory && (
          <p className="mt-3 rounded-lg bg-cyan-500/10 px-3 py-2 font-mono text-sm text-cyan-200">
            Speicher/Stand: {step.memory}
          </p>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          onClick={() => setIndex((value) => Math.max(0, value - 1))}
          className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-700"
        >
          Zurück
        </button>
        <button
          onClick={() => setIndex((value) => Math.min(steps.length - 1, value + 1))}
          className="rounded-lg bg-cyan-400 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-cyan-300"
        >
          Nächster Schritt
        </button>
        <button
          onClick={() => setIndex(0)}
          className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-700"
        >
          Von vorn
        </button>
      </div>
    </div>
  );
}
