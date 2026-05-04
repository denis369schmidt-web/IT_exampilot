import { Request, Response } from "express";
import { loginSchema, registerSchema } from "./auth.validation";
import { getCurrentUser, loginUser, registerUser } from "./auth.service";
import { AuthRequest } from "../../middleware/auth.middleware";

export async function register(req: Request, res: Response) {
  const parsed = registerSchema.parse({ body: req.body });
  const result = await registerUser(parsed.body);

  return res.status(201).json(result);
}

export async function login(req: Request, res: Response) {
  const parsed = loginSchema.parse({ body: req.body });
  const result = await loginUser(parsed.body);

  return res.status(200).json(result);
}

export async function me(req: AuthRequest, res: Response) {
  const user = await getCurrentUser(req.user!.id);

  return res.status(200).json({
    user
  });
}
