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
  const [doneModules, setDoneModules] = useState<Set<string>>(() => readDoneModules());

  const visibleModules = useMemo(() => {
    if (activeFilter === "ALL") return learningCatalog;
    return learningCatalog.filter((module) => module.track === activeFilter);
  }, [activeFilter]);

  const doneCount = doneModules.size;
  const completion = Math.round((doneCount / learningCatalog.length) * 100);

  function toggleDone(id: string) {
    const next = new Set(doneModules);

    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }

    setDoneModules(next);
    localStorage.setItem("exampilot_learning_done", JSON.stringify([...next]));
  }

  return (
    <div>
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-400">AP1 / AP2 Lernsystem</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Programmierer-Pruefung meistern</h1>
        <p className="mt-3 max-w-3xl text-slate-400">
          Arbeite dich durch die Module, mache die Uebungen und hake ab, was du wirklich erklaeren kannst.
          Diese Seite verbindet IHK-Pruefungsbereiche mit praktischer Fullstack-Entwicklung an ExamPilot.
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
          <p className="text-sm text-slate-400">Naechster Fokus</p>
          <p className="mt-2 text-3xl font-bold text-white">1 Modul</p>
          <p className="mt-2 text-xs text-slate-500">Lieber taeglich klein als selten riesig</p>
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

      <section className="mt-8 grid gap-5">
        {visibleModules.map((module) => {
          const isDone = doneModules.has(module.id);

          return (
            <article
              key={module.id}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
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
                  </div>
                  <h2 className="mt-3 text-2xl font-bold">{module.title}</h2>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                    {module.whyItMatters}
                  </p>
                </div>

                <button
                  onClick={() => toggleDone(module.id)}
                  className={`rounded-lg px-4 py-3 text-sm font-semibold ${
                    isDone
                      ? "bg-emerald-500 text-slate-950"
                      : "bg-slate-800 text-slate-200 hover:bg-slate-700"
                  }`}
                >
                  {isDone ? "Gelernt" : "Abhaken"}
                </button>
              </div>

              <div className="mt-6 grid gap-5 lg:grid-cols-3">
                <div>
                  <h3 className="font-semibold text-slate-100">Lernen</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-400">
                    {module.learn.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-100">Ueben</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-400">
                    {module.practice.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-100">Kannst du es?</h3>
                  <p className="mt-3 rounded-xl bg-slate-950 p-4 text-sm leading-6 text-slate-300">
                    {module.proof}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
