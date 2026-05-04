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
    <div>
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">AP1 / AP2 Lernsystem</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Programmierer-Pruefung meistern</h1>
        <p className="mt-3 max-w-3xl text-slate-400">
          Alles Wichtige ist direkt in der App: Kapitel, Beispiele, Pruefungstipps, Karteikarten,
          Uebungen und Simulationen. Oeffne ein Modul und lerne es dort komplett durch.
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl">
          <p className="text-sm text-slate-400">Module</p>
          <p className="mt-2 text-3xl font-bold text-white">{learningCatalog.length}</p>
          <p className="mt-2 text-xs text-slate-500">AP1, AP2, Code und WiSo</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl">
          <p className="text-sm text-slate-400">Abgeschlossen</p>
          <p className="mt-2 text-3xl font-bold text-white">{doneCount}</p>
          <p className="mt-2 text-xs text-slate-500">Nur abhaken, wenn du es erklaeren kannst</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl">
          <p className="text-sm text-slate-400">Lernfortschritt</p>
          <p className="mt-2 text-3xl font-bold text-white">{completion}%</p>
          <p className="mt-2 text-xs text-slate-500">Lokal in deinem Browser gespeichert</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl">
          <p className="text-sm text-slate-400">Methode</p>
          <p className="mt-2 text-3xl font-bold text-white">4 Schritte</p>
          <p className="mt-2 text-xs text-slate-500">Lesen, Karten, Simulation, Abhaken</p>
        </div>
      </section>

      <section className="mt-8 border-y border-slate-800 py-4">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold ${
                activeFilter === filter
                  ? "bg-emerald-500 text-slate-950"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800"
              }`}
            >
              {filter === "ALL" ? "Alle" : trackLabels[filter]}
            </button>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2">
        {visibleModules.map((module) => {
          const isDone = doneModules.has(module.id);

          return (
            <article
              key={module.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl"
            >
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <span className="rounded bg-slate-800 px-2 py-1 text-emerald-300">
                  {module.examPart}
                </span>
                <span className="rounded bg-slate-800 px-2 py-1 text-blue-300">
                  {trackLabels[module.track]}
                </span>
                <span className="rounded bg-slate-800 px-2 py-1 text-slate-300">
                  {module.level}
                </span>
                {isDone && (
                  <span className="rounded bg-emerald-500 px-2 py-1 text-slate-950">
                    Gelernt
                  </span>
                )}
              </div>

              <h2 className="mt-4 text-2xl font-bold">{module.title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">{module.whyItMatters}</p>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center text-xs text-slate-400">
                <div className="rounded-lg bg-slate-950 p-3">
                  <p className="text-lg font-bold text-white">{module.explanation.length}</p>
                  Kapitel
                </div>
                <div className="rounded-lg bg-slate-950 p-3">
                  <p className="text-lg font-bold text-white">{module.quiz.length}</p>
                  Karten
                </div>
                <div className="rounded-lg bg-slate-950 p-3">
                  <p className="text-lg font-bold text-white">{module.practice.length}</p>
                  Uebungen
                </div>
              </div>

              <Link
                to={`/learning/${module.id}`}
                className="mt-5 inline-flex w-full justify-center rounded-lg bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
              >
                Modul oeffnen
              </Link>
            </article>
          );
        })}
      </section>
    </div>
  );
}
