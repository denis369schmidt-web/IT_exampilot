import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/auth";

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
      navigate("/");
    } catch {
      setError("Registrierung fehlgeschlagen. Nutze eine andere E-Mail.");
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl"
      >
        <h1 className="text-3xl font-bold">Konto erstellen</h1>
        <p className="mt-2 text-slate-400">
          Starte deinen persönlichen IHK-Lerntracker.
        </p>

        {error && (
          <div className="mt-6 rounded-lg border border-red-900 bg-red-950 p-3 text-sm text-red-200">
            {error}
          </div>
        )}

        <label className="mt-6 block text-sm text-slate-300">Name</label>
        <input
          className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label className="mt-4 block text-sm text-slate-300">E-Mail</label>
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
          Registrieren
        </button>

        <p className="mt-4 text-center text-sm text-slate-400">
          Schon registriert?{" "}
          <Link to="/login" className="text-blue-400 hover:text-blue-300">
            Einloggen
          </Link>
        </p>
      </form>
    </div>
  );
}
