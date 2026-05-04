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
    <div>
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-400">Portfolio Project</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">IHK Lern-Dashboard</h1>
        <p className="mt-3 max-w-2xl text-slate-400">
          Tracke AP1, AP2 und Projekt-Themen mit Fortschritt, Schwierigkeit und Status.
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-4">
        <StatCard label="Themen" value={summary.totalTopics} hint="Alle gespeicherten Lernbereiche" />
        <StatCard label="Gesamtfortschritt" value={`${summary.averageProgress}%`} hint="Durchschnitt aller Themen" />
        <StatCard label="AP1" value={`${summary.ap1Progress}%`} hint="Prüfungsbereich AP1" />
        <StatCard label="AP2" value={`${summary.ap2Progress}%`} hint="Prüfungsbereich AP2" />
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[360px_1fr]">
        <form
          onSubmit={handleCreateTopic}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl"
        >
          <h2 className="text-xl font-semibold">Neues Thema</h2>

          <label className="mt-5 block text-sm text-slate-300">Titel</label>
          <input
            className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />

          <label className="mt-4 block text-sm text-slate-300">Kategorie</label>
          <input
            className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            required
          />

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-slate-300">Prüfung</label>
              <select
                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
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
                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
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
            className="mt-2 w-full"
          />

          <label className="mt-4 block text-sm text-slate-300">Notizen</label>
          <textarea
            className="mt-2 h-28 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
          />

          <button className="mt-5 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold hover:bg-blue-500">
            Thema speichern
          </button>
        </form>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
          <h2 className="text-xl font-semibold">Lernthemen</h2>

          <div className="mt-5 space-y-4">
            {topics.length === 0 && (
              <p className="rounded-xl border border-dashed border-slate-700 p-6 text-center text-slate-400">
                Noch keine Themen vorhanden. Lege dein erstes IHK-Thema an.
              </p>
            )}

            {topics.map((topic) => (
              <article
                key={topic.id}
                className="rounded-xl border border-slate-800 bg-slate-950 p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold">{topic.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {topic.category} · {topic.examPart} · {topic.difficulty}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDeleteTopic(topic.id)}
                    className="rounded-lg bg-red-950 px-3 py-2 text-sm text-red-200 hover:bg-red-900"
                  >
                    Löschen
                  </button>
                </div>

                <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: `${topic.progress}%` }}
                  />
                </div>

                <p className="mt-2 text-sm text-slate-400">{topic.progress}% abgeschlossen</p>

                {topic.notes && (
                  <p className="mt-3 rounded-lg bg-slate-900 p-3 text-sm text-slate-300">
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
