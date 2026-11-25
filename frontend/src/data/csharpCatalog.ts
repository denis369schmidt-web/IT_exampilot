import { csharpCatalogPart1 } from "./csharpCatalogPart1";
import { csharpCatalogPart2 } from "./csharpCatalogPart2";
import { csharpCatalogPart3 } from "./csharpCatalogPart3";
import type { CsharpExercise, CsharpModule } from "./csharpTypes";

export type {
  CsharpExercise,
  CsharpFlashcard,
  CsharpLevel,
  CsharpModule,
  ExerciseKind
} from "./csharpTypes";
export { csharpLevelColors } from "./csharpTypes";

export const csharpCatalog: CsharpModule[] = [
  ...csharpCatalogPart1,
  ...csharpCatalogPart2,
  ...csharpCatalogPart3
].sort((a, b) => a.order - b.order);

export function getCsharpModule(id: string) {
  return csharpCatalog.find((module) => module.id === id);
}

export function countExercises(module: CsharpModule) {
  return module.exercises.length;
}

export function totalCsharpStats() {
  const exercises = csharpCatalog.reduce((sum, module) => sum + module.exercises.length, 0);
  const flashcards = csharpCatalog.reduce((sum, module) => sum + module.flashcards.length, 0);
  const minutes = csharpCatalog.reduce((sum, module) => sum + module.minutes, 0);
  return {
    modules: csharpCatalog.length,
    exercises,
    flashcards,
    minutes
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
    default:
      return "Übung";
  }
}
