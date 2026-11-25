import { useMemo, useState } from "react";
import type { CsharpExercise } from "../../data/csharpTypes";
import { exerciseLabel } from "../../data/csharpCatalog";

interface Result {
  correct: boolean;
  explanation: string;
  xp: number;
}

interface ExercisePlayerProps {
  exercise: CsharpExercise;
  alreadyDone?: boolean;
  onSolved: (result: Result) => void;
}

function normalize(value: string) {
  return value.trim().replace(/\s+/g, " ");
}

export function ExercisePlayer({ exercise, alreadyDone, onSolved }: ExercisePlayerProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [blankAnswers, setBlankAnswers] = useState<Record<string, string>>({});
  const [bugLine, setBugLine] = useState<number | null>(null);
  const [order, setOrder] = useState<number[]>(() => {
    if (exercise.kind !== "orderCode") return [];
    const indexes = exercise.lines.map((_, index) => index);
    for (let i = indexes.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [indexes[i], indexes[j]] = [indexes[j], indexes[i]];
    }
    const alreadyCorrect = indexes.every((value, index) => value === exercise.correctOrder[index]);
    if (alreadyCorrect && indexes.length > 1) {
      [indexes[0], indexes[1]] = [indexes[1], indexes[0]];
    }
    return indexes;
  });
  const [feedback, setFeedback] = useState<Result | null>(null);
  const [shake, setShake] = useState(false);

  const codeLines = useMemo(() => {
    if (
      exercise.kind === "spotBug" ||
      exercise.kind === "predictOutput" ||
      exercise.kind === "traceState"
    ) {
      return exercise.code.split("\n");
    }
    return [];
  }, [exercise]);

  function finish(correct: boolean) {
    const result = {
      correct,
      explanation: exercise.explanation,
      xp: correct ? exercise.xp : Math.max(5, Math.round(exercise.xp * 0.2))
    };
    setFeedback(result);
    if (!correct) {
      setShake(true);
      window.setTimeout(() => setShake(false), 450);
    }
    onSolved(result);
  }

  function check() {
    if (feedback) return;

    if (
      exercise.kind === "multipleChoice" ||
      exercise.kind === "predictOutput" ||
      exercise.kind === "traceState"
    ) {
      if (selected === null) return;
      finish(selected === exercise.correctIndex);
      return;
    }

    if (exercise.kind === "fillBlank") {
      const ok = exercise.blanks.every((blank) => {
        const value = normalize(blankAnswers[blank.id] ?? "");
        const accepted = [blank.answer, ...(blank.alternatives ?? [])].map((item) =>
          normalize(item).toLowerCase()
        );
        return accepted.includes(value.toLowerCase());
      });
      finish(ok);
      return;
    }

    if (exercise.kind === "spotBug") {
      if (bugLine === null) return;
      finish(bugLine === exercise.buggyLine);
      return;
    }

    if (exercise.kind === "orderCode") {
      const ok = order.every((value, index) => value === exercise.correctOrder[index]);
      finish(ok);
    }
  }

  function moveOrder(index: number, direction: -1 | 1) {
    const target = index + direction;
    if (target < 0 || target >= order.length) return;
    const next = [...order];
    [next[index], next[target]] = [next[target], next[index]];
    setOrder(next);
  }

  return (
    <div className={`ep-panel p-5 md:p-6 ${shake ? "animate-shake" : ""}`}>
      <div className="flex flex-wrap items-center gap-2">
        <span className="ep-chip text-cyan-300">{exerciseLabel(exercise.kind)}</span>
        <span className="ep-chip text-slate-300">+{exercise.xp} XP</span>
        {alreadyDone && (
          <span className="ep-chip border-emerald-400/30 bg-emerald-400/15 text-emerald-200">
            Schon gelöst
          </span>
        )}
      </div>

      <h3 className="font-display mt-4 text-xl font-bold text-white md:text-2xl">
        {exercise.prompt}
      </h3>

      {(exercise.kind === "predictOutput" ||
        exercise.kind === "fillBlank" ||
        exercise.kind === "spotBug" ||
        exercise.kind === "traceState") && (
        <pre className="mt-4 overflow-x-auto rounded-2xl border border-white/5 bg-slate-950 p-4 font-mono text-sm leading-7 text-emerald-200">
          {exercise.kind === "fillBlank"
            ? exercise.code
            : codeLines.map((line, index) => {
                const lineNo = index + 1;
                const active = exercise.kind === "spotBug" && bugLine === lineNo;
                return (
                  <button
                    key={`${line}-${index}`}
                    type="button"
                    disabled={exercise.kind !== "spotBug" || Boolean(feedback)}
                    onClick={() => setBugLine(lineNo)}
                    className={`block w-full rounded-lg px-2 text-left transition ${
                      exercise.kind === "spotBug" ? "hover:bg-rose-500/10" : ""
                    } ${active ? "bg-rose-500/20 ring-1 ring-rose-400" : ""}`}
                  >
                    <span className="mr-3 inline-block w-6 text-slate-500">{lineNo}</span>
                    {line || " "}
                  </button>
                );
              })}
        </pre>
      )}

      {exercise.kind === "traceState" && (
        <p className="mt-4 text-sm font-semibold text-cyan-200">{exercise.question}</p>
      )}

      {exercise.kind === "multipleChoice" ||
      exercise.kind === "predictOutput" ||
      exercise.kind === "traceState" ? (
        <div className="mt-4 grid gap-2">
          {exercise.options.map((option, index) => {
            const active = selected === index;
            const showCorrect = feedback && index === exercise.correctIndex;
            const showWrong = feedback && active && index !== exercise.correctIndex;
            return (
              <button
                key={option}
                disabled={Boolean(feedback)}
                onClick={() => setSelected(index)}
                className={`rounded-xl border px-4 py-3 text-left text-sm transition ${
                  showCorrect
                    ? "border-emerald-400 bg-emerald-500/20 text-emerald-100"
                    : showWrong
                      ? "border-rose-400 bg-rose-500/20 text-rose-100"
                      : active
                        ? "border-cyan-400 bg-cyan-500/10 text-white shadow-glow"
                        : "border-white/10 bg-slate-950/70 text-slate-300 hover:border-white/25"
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      ) : null}

      {exercise.kind === "fillBlank" && (
        <div className="mt-4 space-y-3">
          {exercise.blanks.map((blank, index) => (
            <label key={blank.id} className="block text-sm text-slate-300">
              Lücke {index + 1}
              <input
                disabled={Boolean(feedback)}
                value={blankAnswers[blank.id] ?? ""}
                onChange={(event) =>
                  setBlankAnswers((current) => ({ ...current, [blank.id]: event.target.value }))
                }
                className="ep-input font-mono text-cyan-200"
                placeholder="Antwort eingeben"
              />
            </label>
          ))}
        </div>
      )}

      {exercise.kind === "orderCode" && (
        <div className="mt-4 space-y-2">
          {order.map((lineIndex, position) => (
            <div
              key={`${lineIndex}-${position}`}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/70 px-3 py-2 font-mono text-sm text-slate-200"
            >
              <span className="text-slate-500">{position + 1}.</span>
              <span className="flex-1">{exercise.lines[lineIndex]}</span>
              <button
                type="button"
                disabled={Boolean(feedback)}
                onClick={() => moveOrder(position, -1)}
                className="rounded-lg bg-slate-800 px-2 py-1 text-xs hover:bg-slate-700"
              >
                ↑
              </button>
              <button
                type="button"
                disabled={Boolean(feedback)}
                onClick={() => moveOrder(position, 1)}
                className="rounded-lg bg-slate-800 px-2 py-1 text-xs hover:bg-slate-700"
              >
                ↓
              </button>
            </div>
          ))}
        </div>
      )}

      {exercise.kind === "spotBug" && (
        <p className="mt-3 text-sm text-slate-400">Klicke die fehlerhafte Zeile an.</p>
      )}

      {!feedback && (
        <button onClick={check} className="ep-btn-primary mt-5">
          Antwort prüfen
        </button>
      )}

      {feedback && (
        <div
          className={`mt-5 animate-fade-up rounded-2xl border p-4 text-sm leading-6 ${
            feedback.correct
              ? "border-emerald-400/40 bg-emerald-500/10 text-emerald-100"
              : "border-rose-400/40 bg-rose-500/10 text-rose-100"
          }`}
        >
          <p className="font-bold">
            {feedback.correct
              ? `Richtig! +${feedback.xp} XP`
              : `Noch nicht — +${feedback.xp} XP fürs Lernen`}
          </p>
          <p className="mt-2">{feedback.explanation}</p>
          {exercise.kind === "spotBug" && (
            <p className="mt-2 font-mono text-xs text-slate-200">Fix: {exercise.fix}</p>
          )}
        </div>
      )}
    </div>
  );
}
