import { FormEvent, useEffect, useState } from "react";
import { createTopic, deleteTopic, getDashboardSummary, getTopics } from "../api/topics";
import { StatCard } from "../components/StatCard";
import { DashboardSummary, Topic } from "../types";

const initialSummary: DashboardSummary = {
  totalTopics: 0,
  averageProgress: 0,
  ap1Progress: 0,
  ap2Progress: 0,
  hardOpenTopics: 0,
  completedTopics: 0,
  inProgressTopics: 0,
  notStartedTopics: 0
};

export function DashboardPage() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [summary, setSummary] = useState<DashboardSummary>(initialSummary);
  const [title, setTitle] = useState("SQL Joins");
  const [category, setCategory] = useState("Datenbanken");
  const [examPart, setExamPart] = useState("AP2");
  const [difficulty, setDifficulty] = useState("MEDIUM");
  const [progress, setProgress] = useState(50);
  const [notes, setNotes] = useState("");

  async function loadData() {
    const [topicsData, summaryData] = await Promise.all([
      getTopics(),
      getDashboardSummary()
    ]);

    setTopics(topicsData);
    setSummary(summaryData);
  }

  useEffect(() => {
    loadData();
  }, []);

  async function handleCreateTopic(event: FormEvent) {
    event.preventDefault();

    await createTopic({
      title,
      category,
      examPart,
      difficulty,
      status: progress === 100 ? "DONE" : progress > 0 ? "IN_PROGRESS" : "NOT_STARTED",
      progress,
      notes
    });

    setTitle("");
    setNotes("");
    setProgress(0);
    await loadData();
  }

  async function handleDeleteTopic(id: string) {
    await deleteTopic(id);
    await loadData();
  }

  return (
    <div className="space-y-8">
      <section className="ep-panel relative overflow-hidden p-7 md:p-9">
        <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl animate-drift" />
        <p className="relative text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
          Portfolio Project
        </p>
        <h1 className="font-display relative mt-3 text-4xl font-bold text-white md:text-5xl">
          IHK Lern-Dashboard
        </h1>
        <p className="relative mt-3 max-w-2xl text-base leading-7 text-slate-400">
          Tracke AP1, AP2 und Projekt-Themen mit Fortschritt, Schwierigkeit und Status.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        <StatCard label="Themen" value={summary.totalTopics} hint="Alle gespeicherten Lernbereiche" />
        <StatCard
          label="Gesamtfortschritt"
          value={`${summary.averageProgress}%`}
          hint="Durchschnitt aller Themen"
        />
        <StatCard label="AP1" value={`${summary.ap1Progress}%`} hint="Prüfungsbereich AP1" />
        <StatCard label="AP2" value={`${summary.ap2Progress}%`} hint="Prüfungsbereich AP2" />
      </section>

      <section className="grid gap-6 lg:grid-cols-[360px_1fr]">
        <form onSubmit={handleCreateTopic} className="ep-panel p-6">
          <h2 className="font-display text-xl font-semibold text-white">Neues Thema</h2>

          <label className="mt-5 block text-sm text-slate-300">Titel</label>
          <input
            className="ep-input"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />

          <label className="mt-4 block text-sm text-slate-300">Kategorie</label>
          <input
            className="ep-input"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            required
          />

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-slate-300">Prüfung</label>
              <select
                className="ep-input"
                value={examPart}
                onChange={(event) => setExamPart(event.target.value)}
              >
                <option value="AP1">AP1</option>
                <option value="AP2">AP2</option>
                <option value="PROJECT">Projekt</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-slate-300">Schwere</label>
              <select
                className="ep-input"
                value={difficulty}
                onChange={(event) => setDifficulty(event.target.value)}
              >
                <option value="EASY">Leicht</option>
                <option value="MEDIUM">Mittel</option>
                <option value="HARD">Schwer</option>
              </select>
            </div>
          </div>

          <label className="mt-4 block text-sm text-slate-300">Fortschritt: {progress}%</label>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={(event) => setProgress(Number(event.target.value))}
            className="mt-2 w-full accent-cyan-400"
          />

          <label className="mt-4 block text-sm text-slate-300">Notizen</label>
          <textarea
            className="ep-input h-28 resize-none"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
          />

          <button className="ep-btn-primary mt-5 w-full">Thema speichern</button>
        </form>

        <div className="ep-panel p-6">
          <h2 className="font-display text-xl font-semibold text-white">Lernthemen</h2>

          <div className="mt-5 space-y-4">
            {topics.length === 0 && (
              <p className="rounded-2xl border border-dashed border-white/15 p-6 text-center text-slate-400">
                Noch keine Themen vorhanden. Lege dein erstes IHK-Thema an.
              </p>
            )}

            {topics.map((topic) => (
              <article key={topic.id} className="ep-panel-soft p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{topic.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {topic.category} · {topic.examPart} · {topic.difficulty}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDeleteTopic(topic.id)}
                    className="rounded-xl border border-rose-400/20 bg-rose-950/40 px-3 py-2 text-sm text-rose-200 hover:bg-rose-900/50"
                  >
                    Löschen
                  </button>
                </div>

                <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400"
                    style={{ width: `${topic.progress}%` }}
                  />
                </div>

                <p className="mt-2 text-sm text-slate-400">{topic.progress}% abgeschlossen</p>

                {topic.notes && (
                  <p className="mt-3 rounded-xl border border-white/5 bg-slate-900/80 p-3 text-sm text-slate-300">
                    {topic.notes}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
