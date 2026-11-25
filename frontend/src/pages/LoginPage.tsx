import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";
import { AuthShell } from "../components/AuthShell";
import { login } from "../api/auth";

function startDemoLearning(navigate: ReturnType<typeof useNavigate>) {
  localStorage.setItem("exampilot_token", "demo-local-learning");
  localStorage.setItem("exampilot_demo_mode", "1");
  navigate("/csharp");
}

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("demo@exampilot.dev");
  const [password, setPassword] = useState("password123");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");

    try {
      const result = await login({ email, password });
      localStorage.setItem("exampilot_token", result.token);
      localStorage.removeItem("exampilot_demo_mode");
      navigate("/");
    } catch (err) {
      if (isAxiosError(err) && !err.response) {
        setError(
          "Backend nicht erreichbar (localhost:5000). Nutze unten „Ohne Login C# lernen“."
        );
        return;
      }
      setError("Login fehlgeschlagen. Prüfe Zugangsdaten oder registriere dich neu.");
    }
  }

  return (
    <AuthShell
      brandTitle="Lernen, das sich gut anfühlt."
      brandSubtitle="C# und .NET Framework verstehen — mit klaren Erklärungen, Walkthroughs und Übungen für deine Klassenarbeit."
    >
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-2xl font-semibold text-white">Willkommen zurück</h2>
        <p className="mt-2 text-sm text-slate-400">Melde dich an oder starte direkt im Demo-Modus.</p>

        {error && (
          <div className="mt-5 rounded-xl border border-rose-400/30 bg-rose-500/10 p-3 text-sm text-rose-100">
            {error}
          </div>
        )}

        <label className="mt-6 block text-sm font-medium text-slate-300">E-Mail</label>
        <input
          className="ep-input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label className="mt-4 block text-sm font-medium text-slate-300">Passwort</label>
        <input
          type="password"
          className="ep-input"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button className="ep-btn-primary mt-6 w-full">Einloggen</button>

        <button
          type="button"
          onClick={() => startDemoLearning(navigate)}
          className="ep-btn-secondary mt-3 w-full"
        >
          Ohne Login C# lernen
        </button>

        <p className="mt-4 text-center text-xs leading-5 text-slate-500">
          Empfohlen für die Klassenarbeit: Demo starten — kein Backend nötig.
        </p>

        <p className="mt-5 text-center text-sm text-slate-400">
          Noch kein Konto?{" "}
          <Link to="/register" className="font-semibold text-cyan-300 hover:text-cyan-200">
            Registrieren
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}
