import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

export function Layout() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("exampilot_token");
    localStorage.removeItem("exampilot_demo_mode");
    navigate("/login");
  }

  const demoMode = localStorage.getItem("exampilot_demo_mode") === "1";

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `ep-nav-link ${isActive ? "ep-nav-link-active" : ""}`;

  return (
    <div className="ep-shell">
      <div className="pointer-events-none fixed inset-0 -z-10 ep-grid-bg opacity-40" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
          <Link to="/csharp" className="group flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-cyan-400/15 text-sm font-bold text-cyan-300 ring-1 ring-cyan-400/30 transition group-hover:scale-105">
              EP
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-white">
              ExamPilot
            </span>
          </Link>

          <nav className="flex flex-wrap items-center justify-end gap-1 text-sm">
            <NavLink to="/" end className={linkClass}>
              Dashboard
            </NavLink>
            <NavLink to="/learning" className={linkClass}>
              Lernen
            </NavLink>
            <NavLink to="/csharp" className={linkClass}>
              C# Dojo
            </NavLink>
            <NavLink to="/curriculum" className={linkClass}>
              Lehrplan
            </NavLink>
            <button onClick={logout} className="ep-btn-ghost ml-2 !py-2 !text-xs">
              Logout
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        {demoMode && (
          <div className="ep-panel-soft mb-6 animate-fade-up border-cyan-400/20 px-4 py-3 text-sm text-cyan-100">
            <span className="font-semibold text-cyan-200">Demo-Modus:</span> C# Dojo läuft ohne
            Backend. Für Dashboard/Login brauchst du die API auf Port 5000.
          </div>
        )}
        <Outlet />
      </main>
    </div>
  );
}
