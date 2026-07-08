import GlassCard from "../ui/GlassCard";

function PredictionHistoryCard({ history }) {
  return (
    <GlassCard className="p-8">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Recent Predictions
      </h2>

      <div className="space-y-4">
        {history.slice(0, 5).map((item, index) => (
          <div
  key={index}
  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 transition hover:border-blue-500/40 hover:bg-slate-900"
>
          
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-400">
                {item.timestamp}
              </span>

              <span className="text-xl font-bold text-blue-400">
                ₹ {item.predicted_price}
              </span>
            </div>

            <div className="mt-3 text-sm text-slate-300">
              {item.inputs ? (
  <div className="mt-3 text-sm text-slate-300">
    Year: {item.inputs.year} • Brent: {item.inputs.brent_oil} • USD/INR: {item.inputs.usd_inr}
  </div>
) : (
  <div className="mt-3 text-sm text-slate-300">
    Year: {item.year}
  </div>
)}
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

export default PredictionHistoryCard;