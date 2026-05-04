import { api } from "./client";
import { DashboardSummary, Topic } from "../types";

export async function getTopics() {
  const response = await api.get<{ topics: Topic[] }>("/topics");
  return response.data.topics;
}

export async function createTopic(input: {
  title: string;
  category: string;
  examPart: string;
  difficulty: string;
  status: string;
  progress: number;
  notes?: string;
}) {
  const response = await api.post<{ topic: Topic }>("/topics", input);
  return response.data.topic;
}

export async function deleteTopic(id: string) {
  await api.delete(`/topics/${id}`);
}

export async function getDashboardSummary() {
  const response = await api.get<DashboardSummary>("/dashboard/summary");
  return response.data;
}
