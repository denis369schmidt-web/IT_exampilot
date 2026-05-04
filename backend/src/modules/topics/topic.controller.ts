import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware";
import {
  createTopicSchema,
  topicIdSchema,
  updateTopicSchema
} from "./topic.validation";
import {
  createTopic,
  deleteTopic,
  getTopicById,
  listTopics,
  updateTopic
} from "./topic.service";

export async function getTopics(req: AuthRequest, res: Response) {
  const topics = await listTopics(req.user!.id);

  return res.status(200).json({
    topics
  });
}

export async function postTopic(req: AuthRequest, res: Response) {
  const parsed = createTopicSchema.parse({ body: req.body });
  const topic = await createTopic(req.user!.id, parsed.body);

  return res.status(201).json({
    topic
  });
}

export async function getTopic(req: AuthRequest, res: Response) {
  const parsed = topicIdSchema.parse({ params: req.params });
  const topic = await getTopicById(req.user!.id, parsed.params.id);

  return res.status(200).json({
    topic
  });
}

export async function putTopic(req: AuthRequest, res: Response) {
  const idParsed = topicIdSchema.parse({ params: req.params });
  const bodyParsed = updateTopicSchema.parse({ body: req.body });

  const topic = await updateTopic(req.user!.id, idParsed.params.id, bodyParsed.body);

  return res.status(200).json({
    topic
  });
}

export async function removeTopic(req: AuthRequest, res: Response) {
  const parsed = topicIdSchema.parse({ params: req.params });
  const result = await deleteTopic(req.user!.id, parsed.params.id);

  return res.status(200).json(result);
}
