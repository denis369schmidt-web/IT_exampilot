import { Navigate, Route, Routes } from "react-router-dom";
import type { ReactElement } from "react";
import { Layout } from "./components/Layout";
import { CurriculumPage } from "./pages/CurriculumPage";
import { DashboardPage } from "./pages/DashboardPage";
import { LearningModulePage } from "./pages/LearningModulePage";
import { LearningPage } from "./pages/LearningPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";

function ProtectedRoute({ children }: { children: ReactElement }) {
  const token = localStorage.getItem("exampilot_token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<DashboardPage />} />
        <Route path="/learning" element={<LearningPage />} />
        <Route path="/learning/:moduleId" element={<LearningModulePage />} />
        <Route path="/curriculum" element={<CurriculumPage />} />
      </Route>
    </Routes>
  );
}
