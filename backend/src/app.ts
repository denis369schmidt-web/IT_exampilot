import cors from "cors";
import express from "express";
import { env } from "./config/env";
import { authRoutes } from "./modules/auth/auth.routes";
import { topicRoutes } from "./modules/topics/topic.routes";
import { dashboardRoutes } from "./modules/dashboard/dashboard.routes";
import { errorMiddleware } from "./middleware/error.middleware";

const app = express();

app.use(
  cors({
    origin: env.corsOrigin,
    credentials: true
  })
);
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "ExamPilot API is running"
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/topics", topicRoutes);
app.use("/api/dashboard", dashboardRoutes);

app.use(errorMiddleware);

export default app;
