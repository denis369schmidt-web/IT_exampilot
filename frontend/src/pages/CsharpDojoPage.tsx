import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import {
  csharpLevelColors,
  modulesForPath,
  totalCsharpStats,
  type CsharpPath
} from "../data/csharpCatalog";
import { klassenarbeitPlan, pathLabels } from "../data/csharpStudyPlan";
import {
  accuracy,
  BADGES,
  levelFromXp,
  readProgress,
  type GameProgress
} from "../lib/gameProgress";

type PathFilter = CsharpPath | "all";

export function CsharpDojoPage() {
  const stats = useMemo(() => totalCsharpStats(), []);
  const [progress, setProgress] = useState<GameProgress>(() => readProgress());
  const [path, setPath] = useState<PathFilter>("netfx");

  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<GameProgress>).detail;
      if (detail) setProgress(detail);
    };
    window.addEventListener("exampilot-progress", handler);
    return () => window.removeEventListener("exampilot-progress", handler);
  }, []);

  const levelInfo = levelFromXp(progress.xp);
  const doneExercises = new Set(progress.completedExercises);
  const visibleModules = modulesForPath(path);
  const moduleCompletion = visibleModules.map((module) => {
    const total = module.exercises.length;
    const done = module.exercises.filter((item) => doneExercises.has(item.id)).length;
    return { id: module.id, done, total, pct: total ? Math.round((done / total) * 100) : 0 };
  });

  return (
    <div className="space-y-8">
      <section className="ep-panel relative overflow-hidden p-7 md:p-9">
        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl animate-drift" />
        <div className="pointer-events-none absolute -bottom-24 left-10 h-56 w-56 rounded-full bg-emerald-400/15 blur-3xl animate-drift-delayed" />

        <p className="relative text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
          C# Dojo · .NET Framework
        </p>
        <h1 className="font-display relative mt-4 max-w-3xl text-4xl font-bold text-white md:text-5xl">
          Verstehen. Üben. <span className="ep-shimmer">Sicher werden.</span>
        </h1>
        <p className="relative mt-4 max-w-2xl text-base leading-7 text-slate-300">
          Lehrer-Erklärungen, Profi-Tipps und interaktive Übungen — gebaut für deine erste
          Klassenarbeit unter .NET Framework.
        </p>

        <div className="relative mt-7 grid grid-cols-2 gap-3 md:grid-cols-5">
          {[
            ["Module", stats.modules],
            ["Übungen", stats.exercises],
            ["Walkthroughs", stats.walkthroughs],
            ["Karten", stats.flashcards],
            ["Min.", stats.minutes]
          ].map(([label, value]) => (
            <div key={label} className="ep-panel-soft px-4 py-3 text-center">
              <p className="font-display text-2xl font-bold text-white">{value}</p>
              <p className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">{label}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-6 ep-panel-soft p-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm text-slate-400">Dein Fortschritt</p>
              <p className="font-display text-2xl font-bold text-white">
                Level {progress.level}
                <span className="ml-2 text-base font-semibold text-cyan-300">{progress.xp} XP</span>
              </p>
            </div>
            <p className="text-sm text-slate-400">
              Trefferquote {accuracy(progress)}% · Serie {progress.streak} Tage
            </p>
          </div>
          <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-slate-800/90">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 transition-all duration-500"
              style={{ width: `${Math.min(100, (levelInfo.intoLevel / levelInfo.needed) * 100)}%` }}
            />
          </div>
        </div>
      </section>

      <section className="ep-panel border-amber-400/20 p-6 md:p-7">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
              Wochenplan
            </p>
            <h2 className="font-display mt-2 text-2xl font-bold text-white">
              7 Tage · .NET Framework KA
            </h2>
          </div>
        </div>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
          Tag für Tag: Visual Studio → Main → Console → if/Schleifen → Arrays → WinForms →
          Simulation.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {klassenarbeitPlan.map((day) => (
            <article
              key={day.day}
              className="group ep-panel-soft p-4 transition duration-200 hover:-translate-y-1 hover:border-amber-300/30"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-300">
                Tag {day.day} · {day.minutes} Min
              </p>
              <h3 className="font-display mt-2 text-lg font-semibold text-white">{day.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{day.focus}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {day.moduleIds.map((id) => (
                  <Link
                    key={id}
                    to={`/csharp/${id}`}
                    className="rounded-md bg-cyan-400/10 px-2 py-1 text-[11px] font-semibold text-cyan-200 ring-1 ring-cyan-400/20 transition hover:bg-cyan-400/20"
                  >
                    {id.replace(/^cs-|^netfx-/, "")}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <div className="flex flex-wrap gap-2">
          {(["netfx", "klassenarbeit", "von-null", "pruefung", "all"] as PathFilter[]).map(
            (value) => (
              <button
                key={value}
                onClick={() => setPath(value)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  path === value
                    ? "bg-cyan-400 text-slate-950 shadow-glow"
                    : "border border-white/10 bg-slate-900/60 text-slate-300 hover:bg-slate-800"
                }`}
              >
                {pathLabels[value]}
              </button>
            )
          )}
        </div>

        <div className="mt-5 grid gap-4">
          {visibleModules.map((module, index) => {
            const completion = moduleCompletion.find((item) => item.id === module.id);
            return (
              <article
                key={module.id}
                className="ep-panel group p-5 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/35"
                style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <span className="ep-chip text-slate-300">#{module.order}</span>
                      <span className={`ep-chip ${csharpLevelColors[module.level]}`}>
                        {module.level}
                      </span>
                      <span className="ep-chip text-cyan-300">{module.minutes} Min</span>
                      {module.walkthrough && (
                        <span className="ep-chip text-emerald-300">Walkthrough</span>
                      )}
                      <span className="ep-chip text-slate-300">
                        {module.exercises.length} Übungen
                      </span>
                    </div>
                    <h3 className="font-display mt-3 text-2xl font-semibold text-white">
                      {module.title}
                    </h3>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                      {module.whyItMatters}
                    </p>
                  </div>

                  <div className="min-w-[200px]">
                    <div className="mb-2 flex justify-between text-xs text-slate-400">
                      <span>Fortschritt</span>
                      <span>
                        {completion?.done}/{completion?.total}
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all"
                        style={{ width: `${completion?.pct ?? 0}%` }}
                      />
                    </div>
                    <Link to={`/csharp/${module.id}`} className="ep-btn-primary mt-4 w-full">
                      Lernen & verstehen
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="ep-panel p-6">
        <h2 className="font-display text-xl font-bold text-white">Badges</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {BADGES.map((badge) => {
            const unlocked = progress.badges.includes(badge.id);
            return (
              <div
                key={badge.id}
                className={`rounded-2xl border px-4 py-3 transition ${
                  unlocked
                    ? "border-amber-300/40 bg-amber-400/10 shadow-[0_0_24px_rgba(251,191,36,0.12)]"
                    : "border-white/10 bg-slate-950/50 opacity-55"
                }`}
              >
                <p className="font-display text-base font-semibold text-white">
                  {badge.icon} {badge.title}
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-400">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
