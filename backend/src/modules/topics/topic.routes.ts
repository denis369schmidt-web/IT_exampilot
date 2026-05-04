import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware";
import {
  getTopic,
  getTopics,
  postTopic,
  putTopic,
  removeTopic
} from "./topic.controller";

export const topicRoutes = Router();

topicRoutes.use(requireAuth);

topicRoutes.get("/", getTopics);
topicRoutes.post("/", postTopic);
topicRoutes.get("/:id", getTopic);
topicRoutes.put("/:id", putTopic);
topicRoutes.delete("/:id", removeTopic);
