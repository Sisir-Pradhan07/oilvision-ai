import { motion } from "framer-motion";
import {
  CalendarDays,
  TrendingUp,
  Fuel,
  DollarSign,
  Globe2,
  ShieldAlert,
} from "lucide-react";
import GlassCard from "../ui/GlassCard";

function PredictionHistoryCard({ history }) {
  return (
    <GlassCard className="p-8">

      {/* Header */}
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

      {/* History */}
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
            whileHover={{ y: -1 }}
            className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-4 transition-all duration-300 hover:border-blue-500/40 hover:bg-slate-900/80"
          >

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              {/* Prediction Details */}
              <div className="min-w-0">

                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CalendarDays
                    size={15}
                    className="shrink-0 text-slate-500"
                  />

                  <span>
                    {item.timestamp}
                  </span>
                </div>

                {item.inputs ? (
  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">

    <span className="flex items-center gap-1.5">
      <span>Year</span>
      <strong className="font-medium text-slate-300">
        {item.inputs.year}
      </strong>
    </span>

    <span className="hidden text-slate-700 sm:inline">
      •
    </span>

    <span className="flex items-center gap-1.5">
      <Fuel size={13} />
      <span>Brent</span>
      <strong className="font-medium text-slate-300">
        ${item.inputs.brent_oil}
      </strong>
    </span>

    <span className="hidden text-slate-700 sm:inline">
      •
    </span>

    <span className="flex items-center gap-1.5">
      <DollarSign size={13} />
      <span>USD/INR</span>
      <strong className="font-medium text-slate-300">
        ₹{item.inputs.usd_inr}
      </strong>
    </span>

    <span className="hidden text-slate-700 sm:inline">
      •
    </span>

    <span className="flex items-center gap-1.5">
      <Globe2 size={13} />
      <span>Demand</span>
      <strong className="font-medium text-slate-300">
        {item.inputs.global_demand ?? "--"} mb/d
      </strong>
    </span>

    <span className="hidden text-slate-700 sm:inline">
      •
    </span>

    <span className="flex items-center gap-1.5">
      <ShieldAlert size={13} />
      <span>Geopolitical</span>
      <strong
        className={
          item.inputs.global_conflict === 1
            ? "font-medium text-yellow-400"
            : "font-medium text-emerald-400"
        }
      >
        {item.inputs.global_conflict === 1
          ? "Conflict"
          : "No Conflict"}
      </strong>
    </span>

  </div>
) : (
                  <div className="mt-3 text-xs text-slate-500">
                    Year:{" "}
                    <span className="font-medium text-slate-300">
                      {item.year}
                    </span>
                  </div>

                )}

              </div>

              {/* Predicted Price */}
              <div className="shrink-0 sm:text-right">

                <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
                  Predicted Price
                </p>

                <p className="mt-1 text-xl font-bold text-blue-400 transition-colors duration-300 group-hover:text-cyan-300">
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