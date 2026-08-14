import { motion } from "framer-motion";
import { CalendarDays, TrendingUp } from "lucide-react";
import GlassCard from "../ui/GlassCard";

function PredictionHistoryCard({ history }) {
  return (
    <GlassCard className="p-8">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Recent Predictions
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Latest generated forecasts
          </p>
        </div>

        <div className="rounded-xl bg-blue-500/10 p-2 text-blue-400">
          <TrendingUp size={20} />
        </div>
      </div>

      <div className="space-y-3">
        {history.slice(0, 5).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.35,
              delay: index * 0.06,
            }}
            className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-4 transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-900/80"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              
              <div className="min-w-0">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CalendarDays size={15} className="text-slate-500" />
                  <span>{item.timestamp}</span>
                </div>

                {item.inputs ? (
                  <div className="mt-2 text-sm text-slate-400">
                    Year:{" "}
                    <span className="text-slate-300">
                      {item.inputs.year}
                    </span>

                    <span className="mx-2 text-slate-700">•</span>

                    Brent:{" "}
                    <span className="text-slate-300">
                      ${item.inputs.brent_oil}
                    </span>

                    <span className="mx-2 text-slate-700">•</span>

                    USD/INR:{" "}
                    <span className="text-slate-300">
                      ₹{item.inputs.usd_inr}
                    </span>
                  </div>
                ) : (
                  <div className="mt-2 text-sm text-slate-400">
                    Year:{" "}
                    <span className="text-slate-300">
                      {item.year}
                    </span>
                  </div>
                )}
              </div>

              <div className="shrink-0">
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Predicted Price
                </p>

                <p className="mt-1 text-xl font-bold text-blue-400 transition group-hover:text-cyan-300">
                  ₹{" "}
                  {Number(item.predicted_price).toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
}

export default PredictionHistoryCard;