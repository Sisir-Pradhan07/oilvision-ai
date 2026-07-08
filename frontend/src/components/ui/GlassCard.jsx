function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}

export default GlassCard;