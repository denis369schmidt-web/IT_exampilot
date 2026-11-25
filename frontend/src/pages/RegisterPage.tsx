import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";
import { AuthShell } from "../components/AuthShell";
import { register } from "../api/auth";

function startDemoLearning(navigate: ReturnType<typeof useNavigate>) {
  localStorage.setItem("exampilot_token", "demo-local-learning");
  localStorage.setItem("exampilot_demo_mode", "1");
  navigate("/csharp");
}

export function RegisterPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("Demo User");
  const [email, setEmail] = useState("demo@exampilot.dev");
  const [password, setPassword] = useState("password123");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setError("");

    try {
      const result = await register({ name, email, password });
      localStorage.setItem("exampilot_token", result.token);
      localStorage.removeItem("exampilot_demo_mode");
      navigate("/");
    } catch (err) {
      if (isAxiosError(err) && !err.response) {
        setError("Backend nicht erreichbar. Nutze unten „Ohne Login C# lernen“.");
        return;
      }
      setError("Registrierung fehlgeschlagen. Andere E-Mail versuchen oder Backend starten.");
    }
  }

  return (
    <AuthShell
      brandTitle="Dein Lernraum für C#."
      brandSubtitle="Lege ein Konto an — oder spring direkt in den Dojo-Demo-Modus und lerne ohne Setup."
    >
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-2xl font-semibold text-white">Konto erstellen</h2>
        <p className="mt-2 text-sm text-slate-400">Für Tracker & Fortschritt mit Backend.</p>

        {error && (
          <div className="mt-5 rounded-xl border border-rose-400/30 bg-rose-500/10 p-3 text-sm text-rose-100">
            {error}
          </div>
        )}

        <label className="mt-6 block text-sm font-medium text-slate-300">Name</label>
        <input className="ep-input" value={name} onChange={(event) => setName(event.target.value)} />

        <label className="mt-4 block text-sm font-medium text-slate-300">E-Mail</label>
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

        <button className="ep-btn-primary mt-6 w-full">Registrieren</button>

        <button
          type="button"
          onClick={() => startDemoLearning(navigate)}
          className="ep-btn-secondary mt-3 w-full"
        >
          Ohne Login C# lernen
        </button>

        <p className="mt-5 text-center text-sm text-slate-400">
          Schon registriert?{" "}
          <Link to="/login" className="font-semibold text-cyan-300 hover:text-cyan-200">
            Einloggen
          </Link>
        </p>
      </form>
    </AuthShell>
  );
}
