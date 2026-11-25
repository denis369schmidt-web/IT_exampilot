import { Link, Navigate, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { learningCatalog, trackLabels } from "../data/learningCatalog";

type Tab = "chapter" | "cards" | "exam";

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

function writeDoneModules(doneModules: Set<string>) {
  localStorage.setItem("exampilot_learning_done", JSON.stringify([...doneModules]));
}

export function LearningModulePage() {
  const { moduleId } = useParams();
  const module = learningCatalog.find((item) => item.id === moduleId);
  const [activeTab, setActiveTab] = useState<Tab>("chapter");
  const [cardIndex, setCardIndex] = useState(0);
  const [showCardAnswer, setShowCardAnswer] = useState(false);
  const [shownAnswers, setShownAnswers] = useState<Set<number>>(new Set());
  const [knownAnswers, setKnownAnswers] = useState<Set<number>>(new Set());
  const [doneModules, setDoneModules] = useState<Set<string>>(() => readDoneModules());

  const cards = useMemo(() => {
    if (!module) return [];

    return [
      ...module.quiz.map((item) => ({
        front: item.question,
        back: item.answer
      })),
      ...module.learn.slice(0, 3).map((item) => ({
        front: `Erkläre: ${item}`,
        back: module.explanation[0]
      })),
      ...module.examTips.slice(0, 2).map((item) => ({
        front: "Welche Prüfungsfalle oder welcher Tipp passt hier?",
        back: item
      }))
    ];
  }, [module]);

  if (!module) {
    return <Navigate to="/learning" replace />;
  }

  const selectedModule = module;
  const isDone = doneModules.has(selectedModule.id);
  const currentCard = cards[cardIndex];
  const examScore = Math.round((knownAnswers.size / selectedModule.quiz.length) * 100);

  function toggleDone() {
    const next = new Set(doneModules);

    if (next.has(selectedModule.id)) {
      next.delete(selectedModule.id);
    } else {
      next.add(selectedModule.id);
    }

    setDoneModules(next);
    writeDoneModules(next);
  }

  function nextCard() {
    setCardIndex((current) => (current + 1) % cards.length);
    setShowCardAnswer(false);
  }

  function previousCard() {
    setCardIndex((current) => (current === 0 ? cards.length - 1 : current - 1));
    setShowCardAnswer(false);
  }

  function toggleExamAnswer(index: number) {
    const next = new Set(shownAnswers);

    if (next.has(index)) {
      next.delete(index);
    } else {
      next.add(index);
    }

    setShownAnswers(next);
  }

  function toggleKnown(index: number) {
    const next = new Set(knownAnswers);

    if (next.has(index)) {
      next.delete(index);
    } else {
      next.add(index);
    }

    setKnownAnswers(next);
  }

  return (
    <div className="space-y-6">
      <Link
        to="/learning"
        className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
      >
        ← Zurück zur Lernübersicht
      </Link>

      <section className="ep-panel relative overflow-hidden p-6 md:p-8">
        <div className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full bg-emerald-400/15 blur-3xl" />
        <div className="relative flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="ep-chip text-emerald-300">{module.examPart}</span>
              <span className="ep-chip text-cyan-300">{trackLabels[module.track]}</span>
              <span className="ep-chip text-slate-300">{module.level}</span>
            </div>
            <h1 className="font-display mt-4 text-3xl font-bold text-white md:text-4xl">
              {module.title}
            </h1>
            <p className="mt-3 max-w-3xl text-base leading-7 text-slate-400">{module.whyItMatters}</p>
          </div>

          <button
            onClick={toggleDone}
            className={
              isDone
                ? "ep-btn bg-emerald-400 text-slate-950 hover:bg-emerald-300"
                : "ep-btn-ghost"
            }
          >
            {isDone ? "Gelernt" : "Als gelernt markieren"}
          </button>
        </div>
      </section>

      <div className="flex flex-wrap gap-2">
        {(
          [
            ["chapter", "Kapitel"],
            ["cards", "Karteikarten"],
            ["exam", "Prüfungssimulation"]
          ] as const
        ).map(([tab, label]) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
              activeTab === tab
                ? "bg-emerald-400 text-slate-950 shadow-glow"
                : "border border-white/10 bg-slate-900/60 text-slate-300 hover:bg-slate-800"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {activeTab === "chapter" && (
        <section className="grid gap-5 animate-fade-up">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="ep-panel p-6">
              <h2 className="font-display text-xl font-bold text-white">Erklärung</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300">
                {module.explanation.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>

            <div className="ep-panel p-6">
              <h2 className="font-display text-xl font-bold text-white">Beispiele</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                {module.examples.map((item) => (
                  <li key={item}>– {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <div className="ep-panel p-6">
              <h2 className="font-display text-xl font-bold text-white">Das musst du können</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                {module.learn.map((item) => (
                  <li key={item}>– {item}</li>
                ))}
              </ul>
            </div>

            <div className="ep-panel p-6">
              <h2 className="font-display text-xl font-bold text-white">Prüfungstipps</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                {module.examTips.map((item) => (
                  <li key={item}>– {item}</li>
                ))}
              </ul>
            </div>

            <div className="ep-panel p-6">
              <h2 className="font-display text-xl font-bold text-white">Übungen</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                {module.practice.map((item) => (
                  <li key={item}>– {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="ep-panel border-emerald-400/25 bg-emerald-500/10 p-6">
            <h2 className="font-display text-xl font-bold text-emerald-200">Abschluss-Check</h2>
            <p className="mt-3 text-sm leading-7 text-emerald-50">{module.proof}</p>
          </div>
        </section>
      )}

      {activeTab === "cards" && (
        <section className="animate-fade-up">
          <div className="ep-panel p-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-xl font-bold text-white">Karteikarten</h2>
              <p className="text-sm text-slate-400">
                {cardIndex + 1} / {cards.length}
              </p>
            </div>

            <button
              onClick={() => setShowCardAnswer((value) => !value)}
              className="mt-6 min-h-64 w-full rounded-2xl border border-white/10 bg-slate-950/80 p-8 text-left transition hover:border-emerald-400/50 hover:shadow-glow"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                {showCardAnswer ? "Antwort" : "Frage"}
              </p>
              <p className="mt-4 text-2xl font-bold leading-9 text-white">
                {showCardAnswer ? currentCard.back : currentCard.front}
              </p>
              <p className="mt-6 text-sm text-slate-500">Karte anklicken, um umzudrehen.</p>
            </button>

            <div className="mt-5 flex flex-wrap gap-3">
              <button onClick={previousCard} className="ep-btn-ghost">
                Vorherige
              </button>
              <button
                onClick={nextCard}
                className="ep-btn bg-emerald-400 text-slate-950 hover:-translate-y-0.5 hover:bg-emerald-300"
              >
                Nächste Karte
              </button>
            </div>
          </div>
        </section>
      )}

      {activeTab === "exam" && (
        <section className="grid gap-5 animate-fade-up">
          <div className="ep-panel p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-display text-xl font-bold text-white">Prüfungssimulation</h2>
                <p className="mt-2 text-sm text-slate-400">
                  Beantworte erst im Kopf oder auf Papier. Dann löse auf und markiere ehrlich, was
                  du konntest.
                </p>
              </div>
              <div className="ep-panel-soft px-5 py-3 text-center">
                <p className="font-display text-2xl font-bold text-white">{examScore}%</p>
                <p className="text-xs text-slate-500">sicher beantwortet</p>
              </div>
            </div>
          </div>

          {module.quiz.map((item, index) => {
            const answerShown = shownAnswers.has(index);
            const known = knownAnswers.has(index);

            return (
              <article key={item.question} className="ep-panel p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-emerald-300">Aufgabe {index + 1}</p>
                    <h3 className="font-display mt-2 text-xl font-bold text-white">
                      {item.question}
                    </h3>
                  </div>
                  <button
                    onClick={() => toggleKnown(index)}
                    className={
                      known
                        ? "ep-btn bg-emerald-400 text-slate-950 hover:bg-emerald-300"
                        : "ep-btn-ghost"
                    }
                  >
                    {known ? "Konnte ich" : "Noch unsicher"}
                  </button>
                </div>

                {answerShown && (
                  <p className="mt-5 rounded-2xl border border-white/5 bg-slate-950/80 p-4 text-sm leading-7 text-slate-300">
                    {item.answer}
                  </p>
                )}

                <button onClick={() => toggleExamAnswer(index)} className="ep-btn-ghost mt-5">
                  {answerShown ? "Antwort verbergen" : "Antwort anzeigen"}
                </button>
              </article>
            );
          })}
        </section>
      )}
    </div>
  );
}
