import { Response } from "express";
import { AuthRequest } from "../../middleware/auth.middleware";
import { getDashboardSummary } from "./dashboard.service";

export async function summary(req: AuthRequest, res: Response) {
  const data = await getDashboardSummary(req.user!.id);

  return res.status(200).json(data);
}
