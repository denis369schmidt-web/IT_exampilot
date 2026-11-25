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

  const selectedUnit =
    curriculum.find((unit) => unit.id === openUnitId) ?? visibleUnits[0] ?? curriculum[0];

  function changeFilter(filter: CurriculumArea | "ALL") {
    setActiveFilter(filter);
    const firstUnit =
      filter === "ALL" ? curriculum[0] : curriculum.find((unit) => unit.area === filter);
    if (firstUnit) setOpenUnitId(firstUnit.id);
  }

  return (
    <div className="space-y-8">
      <section className="ep-panel relative overflow-hidden p-7 md:p-9">
        <div className="pointer-events-none absolute -right-12 -top-16 h-52 w-52 rounded-full bg-sky-400/15 blur-3xl animate-drift-delayed" />
        <p className="relative text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
          Schulischer Lehrplan
        </p>
        <h1 className="font-display relative mt-3 text-4xl font-bold text-white md:text-5xl">
          Alles lernen für Anwendungsentwicklung
        </h1>
        <p className="relative mt-3 max-w-3xl text-base leading-7 text-slate-400">
          Diese Seite ist wie dein digitaler Unterricht: Jede Einheit enthält Erklärung,
          Fachbegriffe, Merksätze, Schulübungen, prüfungsnahe Aufgaben und Selbstcheck.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {[
          ["Unterrichtseinheiten", curriculum.length, "Grundlagen bis Prüfungsniveau"],
          ["AP1/AP2", "beides", "Arbeitsplatz, Software, Algorithmen, WiSo"],
          ["Lernmodus", "Schule", "Erst verstehen, dann üben"],
          ["Ziel", "Bestehen", "Mit echtem Verständnis"]
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
            onClick={() => changeFilter(filter)}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
              activeFilter === filter
                ? "bg-cyan-400 text-slate-950 shadow-glow"
                : "border border-white/10 bg-slate-900/60 text-slate-300 hover:bg-slate-800"
            }`}
          >
            {filter === "ALL" ? "Alle" : curriculumAreaLabels[filter]}
          </button>
        ))}
      </div>

      <section className="grid gap-6 lg:grid-cols-[320px_1fr]">
        <aside className="ep-panel p-4">
          <h2 className="px-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            Einheiten
          </h2>
          <div className="mt-4 grid gap-2">
            {visibleUnits.map((unit) => (
              <button
                key={unit.id}
                onClick={() => setOpenUnitId(unit.id)}
                className={`rounded-xl p-3 text-left text-sm transition ${
                  selectedUnit.id === unit.id
                    ? "bg-cyan-400 text-slate-950 shadow-glow"
                    : "border border-white/5 bg-slate-950/60 text-slate-300 hover:bg-slate-800"
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

        <article className="ep-panel p-6 animate-fade-up">
          <div className="flex flex-wrap gap-2">
            <span className="ep-chip text-cyan-300">
              {curriculumAreaLabels[selectedUnit.area]}
            </span>
            <span className="ep-chip text-emerald-300">{selectedUnit.examFocus}</span>
            <span className="ep-chip text-slate-300">{selectedUnit.schoolLevel}</span>
          </div>

          <h2 className="font-display mt-4 text-3xl font-bold text-white">{selectedUnit.title}</h2>

          <div className="mt-6 rounded-2xl border border-white/5 bg-slate-950/70 p-5">
            <h3 className="font-display font-semibold text-slate-100">Unterricht</h3>
            <div className="mt-3 space-y-4 text-sm leading-7 text-slate-300">
              {selectedUnit.lesson.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/5 bg-slate-950/70 p-5">
              <h3 className="font-display font-semibold text-slate-100">Fachbegriffe</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {selectedUnit.keyTerms.map((term) => (
                  <span key={term} className="ep-chip text-cyan-200">
                    {term}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/5 bg-slate-950/70 p-5">
              <h3 className="font-display font-semibold text-slate-100">Merksätze</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                {selectedUnit.remember.map((item) => (
                  <li key={item}>– {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
              <h3 className="font-display font-semibold text-slate-100">Schulübungen</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                {selectedUnit.schoolExercises.map((item) => (
                  <li key={item}>– {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
              <h3 className="font-display font-semibold text-slate-100">Prüfungsaufgaben</h3>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                {selectedUnit.examTasks.map((item) => (
                  <li key={item}>– {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-cyan-400/25 bg-cyan-500/10 p-5">
            <h3 className="font-display font-semibold text-cyan-100">Selbstcheck</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-cyan-50">
              {selectedUnit.selfCheck.map((item) => (
                <li key={item}>– {item}</li>
              ))}
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
}
