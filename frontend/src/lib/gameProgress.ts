export type BadgeId =
  | "first-blood"
  | "combo-3"
  | "combo-5"
  | "streak-3"
  | "csharp-starter"
  | "csharp-oop"
  | "csharp-algo"
  | "xp-500"
  | "xp-1500"
  | "quiz-master"
  | "perfect-run"
  | "module-hunter";

export interface Badge {
  id: BadgeId;
  title: string;
  description: string;
  icon: string;
}

export interface GameProgress {
  xp: number;
  level: number;
  streak: number;
  bestStreak: number;
  lastPlayDate: string | null;
  totalCorrect: number;
  totalAnswered: number;
  perfectRuns: number;
  badges: BadgeId[];
  moduleXp: Record<string, number>;
  challengeBest: Record<string, number>;
  completedExercises: string[];
}

const STORAGE_KEY = "exampilot_game_progress_v1";

export const BADGES: Badge[] = [
  { id: "first-blood", title: "Erster Treffer", description: "Erste Aufgabe richtig", icon: "⚡" },
  { id: "combo-3", title: "Combo x3", description: "3 richtige hintereinander", icon: "🔥" },
  { id: "combo-5", title: "Combo x5", description: "5 richtige hintereinander", icon: "💥" },
  { id: "streak-3", title: "3-Tage-Serie", description: "An 3 Tagen gelernt", icon: "📅" },
  { id: "csharp-starter", title: "C# Starter", description: "Erstes C#-Modul abgeschlossen", icon: "💻" },
  { id: "csharp-oop", title: "OOP Scout", description: "OOP-Modul gemeistert", icon: "🧩" },
  { id: "csharp-algo", title: "Algo Fighter", description: "Algorithmus-Modul gemeistert", icon: "🧠" },
  { id: "xp-500", title: "500 XP", description: "500 XP gesammelt", icon: "⭐" },
  { id: "xp-1500", title: "1500 XP", description: "1500 XP gesammelt", icon: "🌟" },
  { id: "quiz-master", title: "Quiz-Meister", description: "50 richtige Antworten", icon: "🎯" },
  { id: "perfect-run", title: "Perfekter Lauf", description: "Modul ohne Fehler", icon: "💎" },
  { id: "module-hunter", title: "Modul-Jaeger", description: "5 Module mit XP", icon: "🗺️" }
];

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function daysBetween(a: string, b: string) {
  const start = new Date(`${a}T00:00:00`);
  const end = new Date(`${b}T00:00:00`);
  return Math.round((end.getTime() - start.getTime()) / 86_400_000);
}

export function xpForLevel(level: number) {
  return Math.round(90 * level * 1.3);
}

export function levelFromXp(xp: number) {
  let level = 1;
  let remaining = xp;
  while (remaining >= xpForLevel(level) && level < 99) {
    remaining -= xpForLevel(level);
    level += 1;
  }
  return { level, intoLevel: remaining, needed: xpForLevel(level) };
}

export function defaultProgress(): GameProgress {
  return {
    xp: 0,
    level: 1,
    streak: 0,
    bestStreak: 0,
    lastPlayDate: null,
    totalCorrect: 0,
    totalAnswered: 0,
    perfectRuns: 0,
    badges: [],
    moduleXp: {},
    challengeBest: {},
    completedExercises: []
  };
}

export function readProgress(): GameProgress {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return defaultProgress();
  try {
    const parsed = JSON.parse(raw) as Partial<GameProgress>;
    return {
      ...defaultProgress(),
      ...parsed,
      badges: Array.isArray(parsed.badges) ? parsed.badges : [],
      moduleXp: parsed.moduleXp ?? {},
      challengeBest: parsed.challengeBest ?? {},
      completedExercises: Array.isArray(parsed.completedExercises) ? parsed.completedExercises : []
    };
  } catch {
    return defaultProgress();
  }
}

export function writeProgress(progress: GameProgress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  window.dispatchEvent(new CustomEvent("exampilot-progress", { detail: progress }));
}

function unlock(progress: GameProgress, badge: BadgeId) {
  if (!progress.badges.includes(badge)) progress.badges = [...progress.badges, badge];
}

export function touchStreak(progress: GameProgress) {
  const today = todayKey();
  if (progress.lastPlayDate === today) return progress;
  if (!progress.lastPlayDate) progress.streak = 1;
  else {
    const gap = daysBetween(progress.lastPlayDate, today);
    progress.streak = gap === 1 ? progress.streak + 1 : 1;
  }
  progress.lastPlayDate = today;
  progress.bestStreak = Math.max(progress.bestStreak, progress.streak);
  if (progress.streak >= 3) unlock(progress, "streak-3");
  return progress;
}

export interface AwardInput {
  xp: number;
  correct?: boolean;
  answered?: boolean;
  combo?: number;
  moduleId?: string;
  exerciseId?: string;
  perfect?: boolean;
  badgeHints?: BadgeId[];
}

export function awardProgress(input: AwardInput) {
  const progress = touchStreak(readProgress());
  const gained = Math.max(0, Math.round(input.xp));
  progress.xp += gained;
  progress.level = levelFromXp(progress.xp).level;

  if (input.answered) progress.totalAnswered += 1;
  if (input.correct) {
    progress.totalCorrect += 1;
    if (progress.totalCorrect === 1) unlock(progress, "first-blood");
    if (progress.totalCorrect >= 50) unlock(progress, "quiz-master");
  }
  if ((input.combo ?? 0) >= 3) unlock(progress, "combo-3");
  if ((input.combo ?? 0) >= 5) unlock(progress, "combo-5");
  if (input.moduleId) {
    progress.moduleXp[input.moduleId] = (progress.moduleXp[input.moduleId] ?? 0) + gained;
    if (Object.keys(progress.moduleXp).length >= 5) unlock(progress, "module-hunter");
  }
  if (input.exerciseId && !progress.completedExercises.includes(input.exerciseId)) {
    progress.completedExercises = [...progress.completedExercises, input.exerciseId];
  }
  if (input.perfect) {
    progress.perfectRuns += 1;
    unlock(progress, "perfect-run");
  }
  input.badgeHints?.forEach((badge) => unlock(progress, badge));
  if (progress.xp >= 500) unlock(progress, "xp-500");
  if (progress.xp >= 1500) unlock(progress, "xp-1500");

  writeProgress(progress);
  return { progress, gained, levelInfo: levelFromXp(progress.xp) };
}

export function accuracy(progress: GameProgress) {
  if (!progress.totalAnswered) return 0;
  return Math.round((progress.totalCorrect / progress.totalAnswered) * 100);
}
