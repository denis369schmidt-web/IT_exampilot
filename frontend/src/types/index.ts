export type ExamPart = "AP1" | "AP2" | "PROJECT";
export type Difficulty = "EASY" | "MEDIUM" | "HARD";
export type TopicStatus = "NOT_STARTED" | "IN_PROGRESS" | "DONE";

export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface Topic {
  id: string;
  title: string;
  category: string;
  examPart: ExamPart;
  difficulty: Difficulty;
  status: TopicStatus;
  progress: number;
  notes?: string;
  lastPracticed?: string;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardSummary {
  totalTopics: number;
  averageProgress: number;
  ap1Progress: number;
  ap2Progress: number;
  hardOpenTopics: number;
  completedTopics: number;
  inProgressTopics: number;
  notStartedTopics: number;
}
