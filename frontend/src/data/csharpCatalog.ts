import { csharpCatalogPart1 } from "./csharpCatalogPart1";
import { csharpCatalogPart2 } from "./csharpCatalogPart2";
import { csharpCatalogPart3 } from "./csharpCatalogPart3";
import { csharpFoundation } from "./csharpFoundation";
import type { CsharpExercise, CsharpModule, CsharpPath } from "./csharpTypes";

export type {
  CsharpExercise,
  CsharpFlashcard,
  CsharpLevel,
  CsharpModule,
  CsharpPath,
  ExerciseKind,
  WalkthroughStep
} from "./csharpTypes";
export { csharpLevelColors } from "./csharpTypes";

function normalize(module: CsharpModule): CsharpModule {
  return {
    ...module,
    path: module.path ?? ["pruefung", "klassenarbeit"]
  };
}

export const csharpCatalog: CsharpModule[] = [
  ...csharpFoundation,
  ...csharpCatalogPart1,
  ...csharpCatalogPart2,
  ...csharpCatalogPart3
]
  .map(normalize)
  .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));

export function getCsharpModule(id: string) {
  return csharpCatalog.find((module) => module.id === id);
}

export function modulesForPath(path: CsharpPath | "all") {
  if (path === "all") return csharpCatalog;
  return csharpCatalog.filter((module) => module.path?.includes(path));
}

export function countExercises(module: CsharpModule) {
  return module.exercises.length;
}

export function totalCsharpStats() {
  const exercises = csharpCatalog.reduce((sum, module) => sum + module.exercises.length, 0);
  const flashcards = csharpCatalog.reduce((sum, module) => sum + module.flashcards.length, 0);
  const minutes = csharpCatalog.reduce((sum, module) => sum + module.minutes, 0);
  const walkthroughs = csharpCatalog.filter((module) => module.walkthrough).length;
  return {
    modules: csharpCatalog.length,
    exercises,
    flashcards,
    minutes,
    walkthroughs
  };
}

export function exerciseLabel(kind: CsharpExercise["kind"]) {
  switch (kind) {
    case "multipleChoice":
      return "Quiz";
    case "fillBlank":
      return "Lückentext";
    case "spotBug":
      return "Bug Hunt";
    case "orderCode":
      return "Code ordnen";
    case "predictOutput":
      return "Output tippen";
    case "traceState":
      return "Speicher-Trace";
    default:
      return "Übung";
  }
}
