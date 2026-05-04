import { Link, Outlet, useNavigate } from "react-router-dom";

export function Layout() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("exampilot_token");
    navigate("/login");
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <header className="border-b border-slate-800 bg-slate-900/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-xl font-bold tracking-tight">
            ExamPilot
          </Link>
          <nav className="flex items-center gap-4 text-sm text-slate-300">
            <Link to="/" className="hover:text-white">
              Dashboard
            </Link>
            <Link to="/learning" className="hover:text-white">
              Lernen
            </Link>
            <Link to="/curriculum" className="hover:text-white">
              Lehrplan
            </Link>
            <button
              onClick={logout}
              className="rounded-lg bg-slate-800 px-3 py-2 hover:bg-slate-700"
            >
              Logout
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-8">
        <Outlet />
      </main>
    </div>
  );
}
