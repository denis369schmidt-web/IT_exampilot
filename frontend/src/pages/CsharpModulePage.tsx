import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { CodeWalkthrough } from "../components/csharp/CodeWalkthrough";
import { ExercisePlayer } from "../components/csharp/ExercisePlayer";
import { getCsharpModule, csharpLevelColors } from "../data/csharpCatalog";
import {
  awardProgress,
  readProgress,
  type GameProgress
} from "../lib/gameProgress";

type Tab = "theory" | "walk" | "practice" | "cards" | "pitfalls";

export function CsharpModulePage() {
  const { moduleId } = useParams();
  const module = getCsharpModule(moduleId ?? "");
  const [tab, setTab] = useState<Tab>("theory");
  const [cardIndex, setCardIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const [progress, setProgress] = useState<GameProgress>(() => readProgress());
  const [combo, setCombo] = useState(0);
  const [toast, setToast] = useState<string | null>(null);
  const [exerciseIndex, setExerciseIndex] = useState(0);

  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent<GameProgress>).detail;
      if (detail) setProgress(detail);
    };
    window.addEventListener("exampilot-progress", handler);
    return () => window.removeEventListener("exampilot-progress", handler);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 2500);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const doneSet = useMemo(
    () => new Set(progress.completedExercises),
    [progress.completedExercises]
  );

  if (!module) return <Navigate to="/csharp" replace />;

  const exercise = module.exercises[exerciseIndex];
  const doneCount = module.exercises.filter((item) => doneSet.has(item.id)).length;
  const completion = Math.round((doneCount / module.exercises.length) * 100);

  return (
    <div>
      {toast && (
        <div className="fixed right-6 top-20 z-50 animate-fade-up rounded-xl bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950 shadow-2xl">
          {toast}
        </div>
      )}

      <Link to="/csharp" className="text-sm font-semibold text-cyan-300 hover:text-cyan-200">
        Zurück zum C# Dojo
      </Link>

      <div className="mt-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            <span className={`rounded bg-slate-800 px-2 py-1 ${csharpLevelColors[module.level]}`}>
              {module.level}
            </span>
            <span className="rounded bg-slate-800 px-2 py-1 text-slate-300">
              Modul {module.order}
            </span>
            <span className="rounded bg-slate-800 px-2 py-1 text-emerald-300">
              {doneCount}/{module.exercises.length} Übungen
            </span>
            {combo > 1 && (
              <span className="rounded bg-orange-500 px-2 py-1 text-slate-950 animate-pulse">
                Combo x{combo}
              </span>
            )}
          </div>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">{module.title}</h1>
          <p className="mt-3 max-w-3xl text-slate-400">{module.whyItMatters}</p>
          <p className="mt-2 text-xs text-slate-500">{module.examFocus}</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-4 text-center">
          <p className="text-3xl font-bold text-white">{completion}%</p>
          <p className="text-xs text-slate-400">Modul-Fortschritt</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 border-y border-slate-800 py-4">
        {(
          [
            ["theory", "Theorie"],
            ["walk", "Verstehen"],
            ["practice", "Üben"],
            ["cards", "Karteikarten"],
            ["pitfalls", "Fallen"]
          ] as const
        ).map(([id, label]) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold ${
              tab === id ? "bg-cyan-400 text-slate-950" : "bg-slate-900 text-slate-300 hover:bg-slate-800"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "theory" && (
        <section className="mt-6 grid gap-5">
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <h2 className="text-xl font-bold">Erklärung</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300">
                {module.theory.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </article>
            <article className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <h2 className="text-xl font-bold">Lernziele</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                {module.goals.map((item) => (
                  <li key={item}>▹ {item}</li>
                ))}
              </ul>
              <h3 className="mt-6 text-lg font-bold text-cyan-300">Merke</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {module.remember.map((item) => (
                  <li key={item} className="rounded-lg bg-slate-950 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="grid gap-5">
            {module.codeExamples.map((example) => (
              <article
                key={example.title}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-5 animate-fade-up"
              >
                <h2 className="text-xl font-bold">{example.title}</h2>
                <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 font-mono text-sm leading-7 text-emerald-200">
                  {example.code}
                </pre>
                <p className="mt-3 text-sm text-slate-400">{example.note}</p>
              </article>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {module.walkthrough && (
              <button
                onClick={() => setTab("walk")}
                className="rounded-xl bg-slate-100 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-white"
              >
                Schritt-für-Schritt verstehen →
              </button>
            )}
            <button
              onClick={() => setTab("practice")}
              className="rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-300"
            >
              Jetzt interaktiv üben →
            </button>
          </div>
        </section>
      )}

      {tab === "walk" && (
        <section className="mt-6">
          {module.walkthrough ? (
            <CodeWalkthrough
              title={module.walkthrough.title}
              code={module.walkthrough.code}
              steps={module.walkthrough.steps}
            />
          ) : (
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 text-sm text-slate-400">
              Für dieses Modul gibt es noch keinen Walkthrough. Nutze Theorie + Trace-Übungen.
            </div>
          )}
        </section>
      )}

      {tab === "practice" && exercise && (
        <section className="mt-6 grid gap-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-slate-400">
              Übung {exerciseIndex + 1} / {module.exercises.length}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setExerciseIndex((value) => Math.max(0, value - 1))}
                className="rounded-lg bg-slate-800 px-3 py-2 text-sm hover:bg-slate-700"
              >
                Zurück
              </button>
              <button
                onClick={() =>
                  setExerciseIndex((value) => Math.min(module.exercises.length - 1, value + 1))
                }
                className="rounded-lg bg-slate-800 px-3 py-2 text-sm hover:bg-slate-700"
              >
                Weiter
              </button>
            </div>
          </div>

          <ExercisePlayer
            key={exercise.id}
            exercise={exercise}
            alreadyDone={doneSet.has(exercise.id)}
            onSolved={(result) => {
              const nextCombo = result.correct ? combo + 1 : 0;
              setCombo(nextCombo);
              const award = awardProgress({
                xp: result.xp + (nextCombo >= 3 ? 5 : 0),
                answered: true,
                correct: result.correct,
                combo: nextCombo,
                moduleId: module.id,
                exerciseId: result.correct ? exercise.id : undefined,
                perfect: result.correct && doneCount + 1 === module.exercises.length,
                badgeHints: result.correct && module.badgeHint ? [module.badgeHint] : undefined
              });
              setProgress(award.progress);
              setToast(
                result.correct
                  ? `+${award.gained} XP${nextCombo >= 3 ? ` · Combo x${nextCombo}` : ""}`
                  : `+${award.gained} XP — Erklärung lesen & nochmal`
              );
            }}
          />
        </section>
      )}

      {tab === "cards" && (
        <section className="mt-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Karteikarten</h2>
              <p className="text-sm text-slate-400">
                {cardIndex + 1} / {module.flashcards.length}
              </p>
            </div>
            <button
              onClick={() => setShowBack((value) => !value)}
              className="mt-5 min-h-56 w-full rounded-2xl border border-slate-700 bg-slate-950 p-8 text-left transition hover:border-cyan-400"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                {showBack ? "Antwort" : "Frage"}
              </p>
              <p className="mt-4 text-2xl font-bold leading-9 text-white">
                {showBack ? module.flashcards[cardIndex].back : module.flashcards[cardIndex].front}
              </p>
              <p className="mt-6 text-sm text-slate-500">Tippen zum Umdrehen</p>
            </button>
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => {
                  setCardIndex((value) => (value === 0 ? module.flashcards.length - 1 : value - 1));
                  setShowBack(false);
                }}
                className="rounded-lg bg-slate-800 px-4 py-3 text-sm font-semibold"
              >
                Zurück
              </button>
              <button
                onClick={() => {
                  setCardIndex((value) => (value + 1) % module.flashcards.length);
                  setShowBack(false);
                }}
                className="rounded-lg bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950"
              >
                Nächste
              </button>
            </div>
          </div>
        </section>
      )}

      {tab === "pitfalls" && (
        <section className="mt-6 grid gap-4 md:grid-cols-2">
          {module.pitfalls.map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-rose-900/50 bg-rose-950/20 p-5 text-sm leading-7 text-rose-100"
            >
              ⚠ {item}
            </article>
          ))}
        </section>
      )}
    </div>
  );
}
