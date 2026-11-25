import type { ReactNode } from "react";

export function AuthShell({
  brandTitle,
  brandSubtitle,
  children
}: {
  brandTitle: string;
  brandSubtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="ep-shell relative flex min-h-screen items-center justify-center px-6 py-10">
      <div className="pointer-events-none absolute inset-0 ep-grid-bg opacity-70" />
      <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl animate-drift" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-emerald-400/15 blur-3xl animate-drift-delayed" />

      <div className="relative z-10 grid w-full max-w-5xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <section className="animate-fade-up text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300/90">
            ExamPilot
          </p>
          <h1 className="font-display mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
            <span className="ep-shimmer">{brandTitle}</span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-slate-300 lg:mx-0">
            {brandSubtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            <span className="ep-chip text-cyan-200">.NET Framework</span>
            <span className="ep-chip text-emerald-200">C# verstehen</span>
            <span className="ep-chip text-slate-300">Interaktiv üben</span>
          </div>
        </section>

        <section className="ep-panel animate-fade-up p-7 md:p-8">{children}</section>
      </div>
    </div>
  );
}
