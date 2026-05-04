import { prisma } from "../../prisma/client";

function average(values: number[]) {
  if (values.length === 0) return 0;
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
}

export async function getDashboardSummary(userId: string) {
  const topics = await prisma.topic.findMany({
    where: {
      userId
    },
    select: {
      progress: true,
      examPart: true,
      difficulty: true,
      status: true
    }
  });

  const ap1Topics = topics.filter((topic) => topic.examPart === "AP1");
  const ap2Topics = topics.filter((topic) => topic.examPart === "AP2");
  const hardOpenTopics = topics.filter(
    (topic) => topic.difficulty === "HARD" && topic.status !== "DONE"
  ).length;

  return {
    totalTopics: topics.length,
    averageProgress: average(topics.map((topic) => topic.progress)),
    ap1Progress: average(ap1Topics.map((topic) => topic.progress)),
    ap2Progress: average(ap2Topics.map((topic) => topic.progress)),
    hardOpenTopics,
    completedTopics: topics.filter((topic) => topic.status === "DONE").length,
    inProgressTopics: topics.filter((topic) => topic.status === "IN_PROGRESS").length,
    notStartedTopics: topics.filter((topic) => topic.status === "NOT_STARTED").length
  };
}
