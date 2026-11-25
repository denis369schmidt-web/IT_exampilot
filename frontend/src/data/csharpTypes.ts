export type CsharpLevel = "Starter" | "Azubi" | "Prüfungsnah" | "Boss";

export type ExerciseKind =
  | "multipleChoice"
  | "fillBlank"
  | "spotBug"
  | "orderCode"
  | "predictOutput";

export interface MultipleChoiceExercise {
  id: string;
  kind: "multipleChoice";
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  xp: number;
}

export interface FillBlankExercise {
  id: string;
  kind: "fillBlank";
  prompt: string;
  code: string;
  blanks: Array<{ id: string; answer: string; alternatives?: string[] }>;
  explanation: string;
  xp: number;
}

export interface SpotBugExercise {
  id: string;
  kind: "spotBug";
  prompt: string;
  code: string;
  buggyLine: number;
  fix: string;
  explanation: string;
  xp: number;
}

export interface OrderCodeExercise {
  id: string;
  kind: "orderCode";
  prompt: string;
  lines: string[];
  correctOrder: number[];
  explanation: string;
  xp: number;
}

export interface PredictOutputExercise {
  id: string;
  kind: "predictOutput";
  prompt: string;
  code: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  xp: number;
}

export type CsharpExercise =
  | MultipleChoiceExercise
  | FillBlankExercise
  | SpotBugExercise
  | OrderCodeExercise
  | PredictOutputExercise;

export interface CsharpFlashcard {
  front: string;
  back: string;
}

export interface CsharpModule {
  id: string;
  order: number;
  title: string;
  level: CsharpLevel;
  examFocus: string;
  whyItMatters: string;
  minutes: number;
  goals: string[];
  theory: string[];
  remember: string[];
  codeExamples: Array<{ title: string; code: string; note: string }>;
  pitfalls: string[];
  flashcards: CsharpFlashcard[];
  exercises: CsharpExercise[];
  badgeHint?: "csharp-starter" | "csharp-oop" | "csharp-algo";
}

export const csharpLevelColors: Record<CsharpLevel, string> = {
  Starter: "text-emerald-300",
  Azubi: "text-cyan-300",
  Prüfungsnah: "text-amber-300",
  Boss: "text-rose-300"
};
