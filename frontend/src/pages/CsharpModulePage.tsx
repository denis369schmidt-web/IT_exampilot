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

  const tabs = [
    ["theory", "Theorie"],
    ["walk", "Verstehen"],
    ["practice", "Üben"],
    ["cards", "Karteikarten"],
    ["pitfalls", "Fallen"]
  ] as const;

  return (
    <div className="space-y-6">
      {toast && (
        <div className="fixed right-6 top-20 z-50 animate-fade-up rounded-xl bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950 shadow-glow">
          {toast}
        </div>
      )}

      <Link
        to="/csharp"
        className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
      >
        ← Zurück zum C# Dojo
      </Link>

      <section className="ep-panel relative overflow-hidden p-6 md:p-8">
        <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="relative flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className={`ep-chip ${csharpLevelColors[module.level]}`}>{module.level}</span>
              <span className="ep-chip text-slate-300">Modul {module.order}</span>
              <span className="ep-chip text-emerald-300">
                {doneCount}/{module.exercises.length} Übungen
              </span>
              {combo > 1 && (
                <span className="ep-chip animate-pulse border-orange-400/40 bg-orange-400/20 text-orange-200">
                  Combo x{combo}
                </span>
              )}
            </div>
            <h1 className="font-display mt-4 text-3xl font-bold text-white md:text-4xl">
              {module.title}
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-400">{module.whyItMatters}</p>
            <p className="mt-2 text-xs text-slate-500">{module.examFocus}</p>
          </div>

          <div className="ep-panel-soft min-w-[140px] px-5 py-4 text-center">
            <p className="font-display text-3xl font-bold text-white">{completion}%</p>
            <p className="mt-1 text-xs text-slate-400">Fortschritt</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-800">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                style={{ width: `${completion}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-wrap gap-2">
        {tabs.map(([id, label]) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
              tab === id
                ? "bg-cyan-400 text-slate-950 shadow-glow"
                : "border border-white/10 bg-slate-900/60 text-slate-300 hover:bg-slate-800"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "theory" && (
        <section className="grid gap-5 animate-fade-up">
          {module.analogy && (
            <article className="ep-panel border-amber-400/25 bg-amber-500/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                Lehrer · Bild im Kopf
              </p>
              <p className="mt-3 text-base leading-7 text-amber-50">{module.analogy}</p>
            </article>
          )}

          {module.teacherTalk && module.teacherTalk.length > 0 && (
            <article className="ep-panel border-sky-400/25 bg-sky-500/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-300">
                Lehrer erklärt
              </p>
              <div className="mt-4 space-y-4 text-sm leading-7 text-sky-50">
                {module.teacherTalk.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </article>
          )}

          <div className="grid gap-5 lg:grid-cols-2">
            <article className="ep-panel p-5">
              <h2 className="font-display text-xl font-bold text-white">Sachlich auf den Punkt</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300">
                {module.theory.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </article>
            <article className="ep-panel p-5">
              <h2 className="font-display text-xl font-bold text-white">Lernziele</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                {module.goals.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-cyan-400">▹</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <h3 className="mt-6 text-lg font-bold text-cyan-300">Merke</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                {module.remember.map((item) => (
                  <li key={item} className="rounded-xl border border-white/5 bg-slate-950/70 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {module.proTips && module.proTips.length > 0 && (
            <article className="ep-panel border-emerald-400/25 bg-emerald-500/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                Profi-Coder Tipps
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-emerald-50">
                {module.proTips.map((item) => (
                  <li key={item}>▸ {item}</li>
                ))}
              </ul>
            </article>
          )}

          {module.checkUnderstanding && module.checkUnderstanding.length > 0 && (
            <article className="ep-panel border-violet-400/25 bg-violet-500/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
                Verstehst du es? — laut beantworten
              </p>
              <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-7 text-violet-50">
                {module.checkUnderstanding.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </article>
          )}

          <div className="grid gap-5">
            {module.codeExamples.map((example) => (
              <article key={example.title} className="ep-panel p-5">
                <h2 className="font-display text-xl font-bold text-white">{example.title}</h2>
                <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/5 bg-slate-950 p-4 font-mono text-sm leading-7 text-emerald-200">
                  {example.code}
                </pre>
                <p className="mt-3 text-sm text-slate-400">{example.note}</p>
              </article>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {module.walkthrough && (
              <button onClick={() => setTab("walk")} className="ep-btn-ghost">
                Schritt-für-Schritt verstehen →
              </button>
            )}
            <button onClick={() => setTab("practice")} className="ep-btn-primary">
              Jetzt interaktiv üben →
            </button>
          </div>
        </section>
      )}

      {tab === "walk" && (
        <section className="animate-fade-up">
          {module.walkthrough ? (
            <CodeWalkthrough
              title={module.walkthrough.title}
              code={module.walkthrough.code}
              steps={module.walkthrough.steps}
            />
          ) : (
            <div className="ep-panel p-5 text-sm text-slate-400">
              Für dieses Modul gibt es noch keinen Walkthrough. Nutze Theorie + Trace-Übungen.
            </div>
          )}
        </section>
      )}

      {tab === "practice" && exercise && (
        <section className="grid gap-5 animate-fade-up">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-slate-400">
              Übung {exerciseIndex + 1} / {module.exercises.length}
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setExerciseIndex((value) => Math.max(0, value - 1))}
                className="ep-btn-ghost !py-2"
              >
                Zurück
              </button>
              <button
                onClick={() =>
                  setExerciseIndex((value) => Math.min(module.exercises.length - 1, value + 1))
                }
                className="ep-btn-ghost !py-2"
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
        <section className="animate-fade-up">
          <div className="ep-panel p-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl font-bold text-white">Karteikarten</h2>
              <p className="text-sm text-slate-400">
                {cardIndex + 1} / {module.flashcards.length}
              </p>
            </div>
            <button
              onClick={() => setShowBack((value) => !value)}
              className="mt-5 min-h-56 w-full rounded-2xl border border-white/10 bg-slate-950/80 p-8 text-left transition hover:border-cyan-400/50 hover:shadow-glow"
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
                className="ep-btn-ghost"
              >
                Zurück
              </button>
              <button
                onClick={() => {
                  setCardIndex((value) => (value + 1) % module.flashcards.length);
                  setShowBack(false);
                }}
                className="ep-btn-primary"
              >
                Nächste
              </button>
            </div>
          </div>
        </section>
      )}

      {tab === "pitfalls" && (
        <section className="grid gap-4 animate-fade-up md:grid-cols-2">
          {module.pitfalls.map((item) => (
            <article
              key={item}
              className="ep-panel border-rose-400/20 bg-rose-950/25 p-5 text-sm leading-7 text-rose-100"
            >
              ⚠ {item}
            </article>
          ))}
        </section>
      )}
    </div>
  );
}
