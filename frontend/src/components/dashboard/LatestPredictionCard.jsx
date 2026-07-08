import GlassCard from "../ui/GlassCard";
import { Sparkles } from "lucide-react";

function LatestPredictionCard({ latest }) {
  if (!latest) return null;

  return (
    <GlassCard className="mb-8 p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="mb-2 flex items-center gap-2 text-blue-400">
            <Sparkles size={18} />
            Latest Prediction
          </p>

          <h2 className="text-5xl font-black text-white">
            ₹ {latest.predicted_price.toLocaleString()}
          </h2>

          <p className="mt-4 text-slate-400">
            Year {latest.inputs.year} • Brent {latest.inputs.brent_oil} •
            USD/INR {latest.inputs.usd_inr}
          </p>

          <p className="mt-2 text-sm text-slate-500">
            {latest.timestamp}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}

export default LatestPredictionCard;