import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { learningCatalog, trackLabels, LearningTrack } from "../data/learningCatalog";

const filters: Array<LearningTrack | "ALL"> = ["ALL", "AP1", "AP2", "PROGRAMMING", "WISO"];

function readDoneModules() {
  const raw = localStorage.getItem("exampilot_learning_done");
  if (!raw) return new Set<string>();

  try {
    const parsed = JSON.parse(raw);
    return new Set(Array.isArray(parsed) ? parsed.filter((item) => typeof item === "string") : []);
  } catch {
    return new Set<string>();
  }
}

export function LearningPage() {
  const [activeFilter, setActiveFilter] = useState<LearningTrack | "ALL">("ALL");
  const [doneModules] = useState<Set<string>>(() => readDoneModules());

  const visibleModules = useMemo(() => {
    if (activeFilter === "ALL") return learningCatalog;
    return learningCatalog.filter((module) => module.track === activeFilter);
  }, [activeFilter]);

  const doneCount = doneModules.size;
  const completion = Math.round((doneCount / learningCatalog.length) * 100);

  return (
    <div className="space-y-8">
      <section className="ep-panel relative overflow-hidden p-7 md:p-9">
        <div className="pointer-events-none absolute -left-10 -top-16 h-52 w-52 rounded-full bg-emerald-400/15 blur-3xl animate-drift" />
        <p className="relative text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
          AP1 / AP2 Lernsystem
        </p>
        <h1 className="font-display relative mt-3 text-4xl font-bold text-white md:text-5xl">
          Programmierer-Prüfung meistern
        </h1>
        <p className="relative mt-3 max-w-3xl text-base leading-7 text-slate-400">
          Alles Wichtige ist direkt in der App: Kapitel, Beispiele, Prüfungstipps, Karteikarten,
          Übungen und Simulationen. Öffne ein Modul und lerne es dort komplett durch.
        </p>
        <Link to="/csharp" className="ep-btn-secondary relative mt-6">
          Priority: C# Dojo — interaktiv & prüfungsnah üben
        </Link>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {[
          ["Module", learningCatalog.length, "AP1, AP2, Code und WiSo"],
          ["Abgeschlossen", doneCount, "Nur abhaken, wenn du es erklären kannst"],
          ["Lernfortschritt", `${completion}%`, "Lokal in deinem Browser gespeichert"],
          ["Methode", "4 Schritte", "Lesen, Karten, Simulation, Abhaken"]
        ].map(([label, value, hint]) => (
          <div key={label} className="ep-panel-soft p-5">
            <p className="text-sm text-slate-400">{label}</p>
            <p className="font-display mt-2 text-3xl font-bold text-white">{value}</p>
            <p className="mt-2 text-xs text-slate-500">{hint}</p>
          </div>
        ))}
      </section>

      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
              activeFilter === filter
                ? "bg-emerald-400 text-slate-950 shadow-glow"
                : "border border-white/10 bg-slate-900/60 text-slate-300 hover:bg-slate-800"
            }`}
          >
            {filter === "ALL" ? "Alle" : trackLabels[filter]}
          </button>
        ))}
      </div>

      <section className="grid gap-5 md:grid-cols-2">
        {visibleModules.map((module) => {
          const isDone = doneModules.has(module.id);

          return (
            <article
              key={module.id}
              className="ep-panel group p-6 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-400/30"
            >
              <div className="flex flex-wrap gap-2">
                <span className="ep-chip text-emerald-300">{module.examPart}</span>
                <span className="ep-chip text-cyan-300">{trackLabels[module.track]}</span>
                <span className="ep-chip text-slate-300">{module.level}</span>
                {isDone && (
                  <span className="ep-chip border-emerald-400/30 bg-emerald-400/15 text-emerald-200">
                    Gelernt
                  </span>
                )}
              </div>

              <h2 className="font-display mt-4 text-2xl font-bold text-white">{module.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">{module.whyItMatters}</p>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs text-slate-400">
                <div className="rounded-xl border border-white/5 bg-slate-950/70 p-3">
                  <p className="font-display text-lg font-bold text-white">
                    {module.explanation.length}
                  </p>
                  Kapitel
                </div>
                <div className="rounded-xl border border-white/5 bg-slate-950/70 p-3">
                  <p className="font-display text-lg font-bold text-white">{module.quiz.length}</p>
                  Karten
                </div>
                <div className="rounded-xl border border-white/5 bg-slate-950/70 p-3">
                  <p className="font-display text-lg font-bold text-white">{module.practice.length}</p>
                  Übungen
                </div>
              </div>

              <Link
                to={`/learning/${module.id}`}
                className="ep-btn mt-5 w-full bg-emerald-400 text-slate-950 hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                Modul öffnen
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
}
