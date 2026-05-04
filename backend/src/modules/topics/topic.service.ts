import { prisma } from "../../prisma/client";
import { ApiError } from "../../utils/ApiError";

export async function listTopics(userId: string) {
  return prisma.topic.findMany({
    where: {
      userId
    },
    orderBy: {
      updatedAt: "desc"
    }
  });
}

export async function createTopic(
  userId: string,
  input: {
    title: string;
    category: string;
    examPart: "AP1" | "AP2" | "PROJECT";
    difficulty: "EASY" | "MEDIUM" | "HARD";
    status?: "NOT_STARTED" | "IN_PROGRESS" | "DONE";
    progress?: number;
    notes?: string;
    lastPracticed?: string;
  }
) {
  return prisma.topic.create({
    data: {
      ...input,
      progress: input.progress ?? 0,
      lastPracticed: input.lastPracticed ? new Date(input.lastPracticed) : undefined,
      userId
    }
  });
}

export async function getTopicById(userId: string, topicId: string) {
  const topic = await prisma.topic.findFirst({
    where: {
      id: topicId,
      userId
    }
  });

  if (!topic) {
    throw new ApiError(404, "Topic not found");
  }

  return topic;
}

export async function updateTopic(
  userId: string,
  topicId: string,
  input: {
    title?: string;
    category?: string;
    examPart?: "AP1" | "AP2" | "PROJECT";
    difficulty?: "EASY" | "MEDIUM" | "HARD";
    status?: "NOT_STARTED" | "IN_PROGRESS" | "DONE";
    progress?: number;
    notes?: string | null;
    lastPracticed?: string | null;
  }
) {
  await getTopicById(userId, topicId);

  return prisma.topic.update({
    where: {
      id: topicId
    },
    data: {
      ...input,
      lastPracticed:
        input.lastPracticed === undefined
          ? undefined
          : input.lastPracticed === null
            ? null
            : new Date(input.lastPracticed)
    }
  });
}

export async function deleteTopic(userId: string, topicId: string) {
  await getTopicById(userId, topicId);

  await prisma.topic.delete({
    where: {
      id: topicId
    }
  });

  return {
    success: true
  };
}
