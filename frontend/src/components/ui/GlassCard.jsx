function GlassCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl border border-slate-800/80 bg-slate-900/60 shadow-lg shadow-black/10 backdrop-blur-xl transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

export default GlassCard;