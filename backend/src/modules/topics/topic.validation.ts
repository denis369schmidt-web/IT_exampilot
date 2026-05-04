import { z } from "zod";

export const createTopicSchema = z.object({
  body: z.object({
    title: z.string().min(2).max(120),
    category: z.string().min(2).max(80),
    examPart: z.enum(["AP1", "AP2", "PROJECT"]),
    difficulty: z.enum(["EASY", "MEDIUM", "HARD"]),
    status: z.enum(["NOT_STARTED", "IN_PROGRESS", "DONE"]).optional(),
    progress: z.number().int().min(0).max(100).optional(),
    notes: z.string().max(2000).optional(),
    lastPracticed: z.string().datetime().optional()
  })
});

export const updateTopicSchema = z.object({
  body: z.object({
    title: z.string().min(2).max(120).optional(),
    category: z.string().min(2).max(80).optional(),
    examPart: z.enum(["AP1", "AP2", "PROJECT"]).optional(),
    difficulty: z.enum(["EASY", "MEDIUM", "HARD"]).optional(),
    status: z.enum(["NOT_STARTED", "IN_PROGRESS", "DONE"]).optional(),
    progress: z.number().int().min(0).max(100).optional(),
    notes: z.string().max(2000).optional().nullable(),
    lastPracticed: z.string().datetime().optional().nullable()
  })
});

export const topicIdSchema = z.object({
  params: z.object({
    id: z.string().uuid()
  })
});
