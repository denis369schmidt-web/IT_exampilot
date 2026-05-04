import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/auth";

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
      navigate("/");
    } catch {
      setError("Login fehlgeschlagen. Prüfe deine Zugangsdaten.");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl"
      >
        <h1 className="text-3xl font-bold">ExamPilot</h1>
        <p className="mt-2 text-slate-400">
          Melde dich an und tracke deinen IHK-Lernfortschritt.
        </p>

        {error && (
          <div className="mt-6 rounded-lg border border-red-900 bg-red-950 p-3 text-sm text-red-200">
            {error}
          </div>
        )}

        <label className="mt-6 block text-sm text-slate-300">E-Mail</label>
        <input
          className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label className="mt-4 block text-sm text-slate-300">Passwort</label>
        <input
          type="password"
          className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold hover:bg-blue-500">
          Einloggen
        </button>

        <p className="mt-4 text-center text-sm text-slate-400">
          Noch kein Konto?{" "}
          <Link to="/register" className="text-blue-400 hover:text-blue-300">
            Registrieren
          </Link>
        </p>
      </form>
    </div>
  );
}
