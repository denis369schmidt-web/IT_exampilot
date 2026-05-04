import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware";
import { summary } from "./dashboard.controller";

export const dashboardRoutes = Router();

dashboardRoutes.use(requireAuth);
dashboardRoutes.get("/summary", summary);
