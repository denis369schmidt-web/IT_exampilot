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
        front: `Erklaere: ${item}`,
        back: module.explanation[0]
      })),
      ...module.examTips.slice(0, 2).map((item) => ({
        front: "Welche Pruefungsfalle oder welcher Tipp passt hier?",
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
    <div>
      <Link to="/learning" className="text-sm font-semibold text-emerald-300 hover:text-emerald-200">
        Zurueck zur Lernuebersicht
      </Link>

      <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded bg-slate-800 px-2 py-1 text-emerald-300">{module.examPart}</span>
            <span className="rounded bg-slate-800 px-2 py-1 text-blue-300">{trackLabels[module.track]}</span>
            <span className="rounded bg-slate-800 px-2 py-1 text-slate-300">{module.level}</span>
          </div>
          <h1 className="mt-3 text-4xl font-bold tracking-tight">{module.title}</h1>
          <p className="mt-3 max-w-3xl text-slate-400">{module.whyItMatters}</p>
        </div>

        <button
          onClick={toggleDone}
          className={`rounded-lg px-5 py-3 text-sm font-semibold ${
            isDone ? "bg-emerald-500 text-slate-950" : "bg-slate-800 text-slate-200 hover:bg-slate-700"
          }`}
        >
          {isDone ? "Gelernt" : "Als gelernt markieren"}
        </button>
      </div>

      <section className="mt-8 border-y border-slate-800 py-4">
        <div className="flex flex-wrap gap-3">
          {[
            ["chapter", "Kapitel"],
            ["cards", "Karteikarten"],
            ["exam", "Pruefungssimulation"]
          ].map(([tab, label]) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as Tab)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold ${
                activeTab === tab
                  ? "bg-emerald-500 text-slate-950"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </section>

      {activeTab === "chapter" && (
        <section className="mt-8 grid gap-5">
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
              <h2 className="text-xl font-bold">Erklaerung</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-slate-300">
                {module.explanation.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
              <h2 className="text-xl font-bold">Beispiele</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                {module.examples.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
              <h2 className="text-xl font-bold">Das musst du koennen</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                {module.learn.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
              <h2 className="text-xl font-bold">Pruefungstipps</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                {module.examTips.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
              <h2 className="text-xl font-bold">Uebungen</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                {module.practice.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-900 bg-emerald-950/30 p-6 shadow-xl">
            <h2 className="text-xl font-bold text-emerald-200">Abschluss-Check</h2>
            <p className="mt-3 text-sm leading-7 text-emerald-50">{module.proof}</p>
          </div>
        </section>
      )}

      {activeTab === "cards" && (
        <section className="mt-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-bold">Karteikarten</h2>
              <p className="text-sm text-slate-400">
                {cardIndex + 1} / {cards.length}
              </p>
            </div>

            <button
              onClick={() => setShowCardAnswer((value) => !value)}
              className="mt-6 min-h-64 w-full rounded-2xl border border-slate-700 bg-slate-950 p-8 text-left hover:border-emerald-500"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">
                {showCardAnswer ? "Antwort" : "Frage"}
              </p>
              <p className="mt-4 text-2xl font-bold leading-9 text-white">
                {showCardAnswer ? currentCard.back : currentCard.front}
              </p>
              <p className="mt-6 text-sm text-slate-500">Karte anklicken, um umzudrehen.</p>
            </button>

            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={previousCard}
                className="rounded-lg bg-slate-800 px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-700"
              >
                Vorherige
              </button>
              <button
                onClick={nextCard}
                className="rounded-lg bg-emerald-500 px-4 py-3 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
              >
                Naechste Karte
              </button>
            </div>
          </div>
        </section>
      )}

      {activeTab === "exam" && (
        <section className="mt-8 grid gap-5">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-xl font-bold">Pruefungssimulation</h2>
                <p className="mt-2 text-sm text-slate-400">
                  Beantworte erst im Kopf oder auf Papier. Dann loese auf und markiere ehrlich, was du konntest.
                </p>
              </div>
              <div className="rounded-xl bg-slate-950 px-5 py-3 text-center">
                <p className="text-2xl font-bold text-white">{examScore}%</p>
                <p className="text-xs text-slate-500">sicher beantwortet</p>
              </div>
            </div>
          </div>

          {module.quiz.map((item, index) => {
            const answerShown = shownAnswers.has(index);
            const known = knownAnswers.has(index);

            return (
              <article key={item.question} className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-emerald-300">Aufgabe {index + 1}</p>
                    <h3 className="mt-2 text-xl font-bold">{item.question}</h3>
                  </div>
                  <button
                    onClick={() => toggleKnown(index)}
                    className={`rounded-lg px-4 py-2 text-sm font-semibold ${
                      known ? "bg-emerald-500 text-slate-950" : "bg-slate-800 text-slate-200 hover:bg-slate-700"
                    }`}
                  >
                    {known ? "Konnte ich" : "Noch unsicher"}
                  </button>
                </div>

                {answerShown && (
                  <p className="mt-5 rounded-xl bg-slate-950 p-4 text-sm leading-7 text-slate-300">
                    {item.answer}
                  </p>
                )}

                <button
                  onClick={() => toggleExamAnswer(index)}
                  className="mt-5 rounded-lg bg-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-slate-700"
                >
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
