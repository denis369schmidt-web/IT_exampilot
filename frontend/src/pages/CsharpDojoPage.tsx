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
    <div>
      <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-sky-950 p-6 shadow-2xl md:p-8">
        <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl animate-drift" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-40 w-40 rounded-full bg-emerald-400/10 blur-3xl animate-drift-delayed" />

        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">
          C# Dojo · .NET Framework · 1. Klassenarbeit
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
          .NET Framework wirklich verstehen
        </h1>
        <p className="mt-4 max-w-3xl text-slate-300">
          Für deine erste Klassenarbeit in Visual Studio: klassisches Main-Gerüst, Console,
          Windows Forms, Events und Logik — mit Walkthroughs und Speicher-Trace, nicht nur Quiz.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-5">
          {[
            ["Module", stats.modules],
            ["Übungen", stats.exercises],
            ["Walkthroughs", stats.walkthroughs],
            ["Karten", stats.flashcards],
            ["Min.", stats.minutes]
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-black/30 px-4 py-3 text-center">
              <p className="text-2xl font-bold text-white">{value}</p>
              <p className="text-xs text-slate-400">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm text-slate-400">Dein Fortschritt</p>
              <p className="text-2xl font-bold text-white">
                Level {progress.level} · {progress.xp} XP
              </p>
            </div>
            <p className="text-sm text-slate-400">
              Trefferquote {accuracy(progress)}% · Serie {progress.streak} Tage
            </p>
          </div>
          <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-500"
              style={{ width: `${Math.min(100, (levelInfo.intoLevel / levelInfo.needed) * 100)}%` }}
            />
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-5">
        <h2 className="text-2xl font-bold text-white">7-Tage Plan · .NET Framework KA</h2>
        <p className="mt-2 text-sm text-slate-400">
          Nach der Mittagspause starten: Tag 1 Visual Studio + Main, dann Console, if/Schleifen,
          Arrays, WinForms, Simulation. Jeden Tag Walkthrough + Übungen + Checkliste.
        </p>
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {klassenarbeitPlan.map((day) => (
            <article
              key={day.day}
              className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                Tag {day.day} · {day.minutes} Min
              </p>
              <h3 className="mt-2 text-lg font-bold text-white">{day.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{day.focus}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {day.moduleIds.map((id) => (
                  <Link
                    key={id}
                    to={`/csharp/${id}`}
                    className="rounded-md bg-slate-900 px-2 py-1 text-[11px] font-semibold text-cyan-300 hover:bg-slate-800"
                  >
                    {id.replace("cs-", "")}
                  </Link>
                ))}
              </div>
              <ul className="mt-3 space-y-1 text-xs text-slate-400">
                {day.checklist.map((item) => (
                  <li key={item}>☐ {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <div className="flex flex-wrap gap-2">
          {(["netfx", "klassenarbeit", "von-null", "pruefung", "all"] as PathFilter[]).map((value) => (
            <button
              key={value}
              onClick={() => setPath(value)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold ${
                path === value
                  ? "bg-cyan-400 text-slate-950"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800"
              }`}
            >
              {pathLabels[value]}
            </button>
          ))}
        </div>

        <div className="mt-5 grid gap-4">
          {visibleModules.map((module) => {
            const completion = moduleCompletion.find((item) => item.id === module.id);
            return (
              <article
                key={module.id}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl transition hover:-translate-y-0.5 hover:border-cyan-500/40"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 text-xs font-semibold">
                      <span className="rounded bg-slate-800 px-2 py-1 text-slate-300">
                        #{module.order}
                      </span>
                      <span className={`rounded bg-slate-800 px-2 py-1 ${csharpLevelColors[module.level]}`}>
                        {module.level}
                      </span>
                      <span className="rounded bg-slate-800 px-2 py-1 text-cyan-300">
                        {module.minutes} Min
                      </span>
                      {module.walkthrough && (
                        <span className="rounded bg-emerald-500/20 px-2 py-1 text-emerald-300">
                          Walkthrough
                        </span>
                      )}
                      <span className="rounded bg-slate-800 px-2 py-1 text-slate-300">
                        {module.exercises.length} Übungen
                      </span>
                    </div>
                    <h3 className="mt-3 text-2xl font-bold text-white">{module.title}</h3>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                      {module.whyItMatters}
                    </p>
                  </div>

                  <div className="min-w-[180px]">
                    <div className="mb-2 flex justify-between text-xs text-slate-400">
                      <span>Fortschritt</span>
                      <span>
                        {completion?.done}/{completion?.total}
                      </span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                      <div
                        className="h-full bg-cyan-400 transition-all"
                        style={{ width: `${completion?.pct ?? 0}%` }}
                      />
                    </div>
                    <Link
                      to={`/csharp/${module.id}`}
                      className="mt-4 inline-flex w-full justify-center rounded-xl bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-300"
                    >
                      Lernen & verstehen
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-5">
        <h2 className="text-xl font-bold">Badges</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {BADGES.map((badge) => {
            const unlocked = progress.badges.includes(badge.id);
            return (
              <div
                key={badge.id}
                className={`rounded-xl border px-4 py-3 ${
                  unlocked
                    ? "border-amber-400/40 bg-amber-500/10"
                    : "border-slate-800 bg-slate-950 opacity-60"
                }`}
              >
                <p className="text-lg">
                  {badge.icon} {badge.title}
                </p>
                <p className="mt-1 text-xs text-slate-400">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
