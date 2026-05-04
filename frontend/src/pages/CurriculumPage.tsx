import { useMemo, useState } from "react";
import { curriculum, curriculumAreaLabels, CurriculumArea } from "../data/curriculum";

const filters: Array<CurriculumArea | "ALL"> = [
  "ALL",
  "AP1",
  "PROGRAMMING",
  "DATABASES",
  "WEB",
  "PROJECT",
  "WISO"
];

export function CurriculumPage() {
  const [activeFilter, setActiveFilter] = useState<CurriculumArea | "ALL">("ALL");
  const [openUnitId, setOpenUnitId] = useState(curriculum[0].id);

  const visibleUnits = useMemo(() => {
    if (activeFilter === "ALL") return curriculum;
    return curriculum.filter((unit) => unit.area === activeFilter);
  }, [activeFilter]);

  const selectedUnit = curriculum.find((unit) => unit.id === openUnitId) ?? visibleUnits[0] ?? curriculum[0];

  function changeFilter(filter: CurriculumArea | "ALL") {
    setActiveFilter(filter);
    const firstUnit = filter === "ALL" ? curriculum[0] : curriculum.find((unit) => unit.area === filter);
    if (firstUnit) setOpenUnitId(firstUnit.id);
  }

  return (
    <div>
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Schulischer Lehrplan</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Alles lernen fuer Anwendungsentwicklung</h1>
        <p className="mt-3 max-w-3xl text-slate-400">
          Diese Seite ist wie dein digitaler Unterricht: Jede Einheit enthaelt Erklaerung, Fachbegriffe,
          Merksaetze, Schuluebungen, pruefungsnahe Aufgaben und Selbstcheck.
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl">
          <p className="text-sm text-slate-400">Unterrichtseinheiten</p>
          <p className="mt-2 text-3xl font-bold text-white">{curriculum.length}</p>
          <p className="mt-2 text-xs text-slate-500">Grundlagen bis Pruefungsniveau</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl">
          <p className="text-sm text-slate-400">AP1/AP2</p>
          <p className="mt-2 text-3xl font-bold text-white">beides</p>
          <p className="mt-2 text-xs text-slate-500">Arbeitsplatz, Software, Algorithmen, WiSo</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl">
          <p className="text-sm text-slate-400">Lernmodus</p>
          <p className="mt-2 text-3xl font-bold text-white">Schule</p>
          <p className="mt-2 text-xs text-slate-500">Erst verstehen, dann ueben</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 shadow-xl">
          <p className="text-sm text-slate-400">Ziel</p>
          <p className="mt-2 text-3xl font-bold text-white">Bestehen</p>
          <p className="mt-2 text-xs text-slate-500">Mit echtem Verstaendnis</p>
        </div>
      </section>

      <section className="mt-8 border-y border-slate-800 py-4">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => changeFilter(filter)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold ${
                activeFilter === filter
                  ? "bg-cyan-400 text-slate-950"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800"
              }`}
            >
              {filter === "ALL" ? "Alle" : curriculumAreaLabels[filter]}
            </button>
          ))}
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="rounded-2xl border border-slate-800 bg-slate-900 p-4 shadow-xl">
          <h2 className="px-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Einheiten
          </h2>
          <div className="mt-4 grid gap-2">
            {visibleUnits.map((unit) => (
              <button
                key={unit.id}
                onClick={() => setOpenUnitId(unit.id)}
                className={`rounded-lg p-3 text-left text-sm ${
                  selectedUnit.id === unit.id
                    ? "bg-cyan-400 text-slate-950"
                    : "bg-slate-950 text-slate-300 hover:bg-slate-800"
                }`}
              >
                <span className="block font-semibold">{unit.title}</span>
                <span className="mt-1 block text-xs opacity-80">
                  {unit.examFocus} · {unit.schoolLevel}
                </span>
              </button>
            ))}
          </div>
        </aside>

        <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded bg-slate-800 px-2 py-1 text-cyan-300">
              {curriculumAreaLabels[selectedUnit.area]}
            </span>
            <span className="rounded bg-slate-800 px-2 py-1 text-emerald-300">
              {selectedUnit.examFocus}
            </span>
            <span className="rounded bg-slate-800 px-2 py-1 text-slate-300">
              {selectedUnit.schoolLevel}
            </span>
          </div>

          <h2 className="mt-4 text-3xl font-bold">{selectedUnit.title}</h2>

          <div className="mt-6 rounded-xl bg-slate-950 p-5">
            <h3 className="font-semibold text-slate-100">Unterricht</h3>
            <div className="mt-3 space-y-4 text-sm leading-7 text-slate-300">
              {selectedUnit.lesson.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="rounded-xl bg-slate-950 p-5">
              <h3 className="font-semibold text-slate-100">Fachbegriffe</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedUnit.keyTerms.map((term) => (
                  <span key={term} className="rounded bg-slate-800 px-2 py-1 text-sm text-cyan-200">
                    {term}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-slate-950 p-5">
              <h3 className="font-semibold text-slate-100">Merksaetze</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                {selectedUnit.remember.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
              <h3 className="font-semibold text-slate-100">Schuluebungen</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                {selectedUnit.schoolExercises.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-5">
              <h3 className="font-semibold text-slate-100">Pruefungsaufgaben</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                {selectedUnit.examTasks.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-xl border border-cyan-900 bg-cyan-950/30 p-5">
            <h3 className="font-semibold text-cyan-100">Selbstcheck</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-cyan-50">
              {selectedUnit.selfCheck.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
}
