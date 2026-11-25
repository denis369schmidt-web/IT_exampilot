interface StatCardProps {
  label: string;
  value: string | number;
  hint?: string;
}

export function StatCard({ label, value, hint }: StatCardProps) {
  return (
    <div className="ep-panel-soft p-5 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-400/25">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="font-display mt-2 text-3xl font-bold text-white">{value}</p>
      {hint && <p className="mt-2 text-xs text-slate-500">{hint}</p>}
    </div>
  );
}
