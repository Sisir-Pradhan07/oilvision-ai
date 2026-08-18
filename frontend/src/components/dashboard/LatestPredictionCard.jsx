import GlassCard from "../ui/GlassCard";
import {
  Sparkles,
  Fuel,
  DollarSign,
  Globe2,
  ShieldCheck,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

function LatestPredictionCard({ latest }) {
  if (!latest) return null;

  return (
    <GlassCard className="mb-8 p-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">

        {/* Main Prediction */}
        <div>
          <p className="mb-3 flex items-center gap-2 text-blue-400">
            <Sparkles size={18} />
            Latest Prediction
          </p>

          <h2 className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-5xl font-black text-transparent sm:text-6xl">
            ₹ {Number(latest.predicted_price).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h2>

          <p className="mt-4 text-slate-400">
            Generated forecast for Indian oil price
          </p>

          <p className="mt-2 text-sm text-slate-500">
            {latest.timestamp}
          </p>
        </div>

        {/* Prediction Context */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">

          <div className="mb-4 flex items-center gap-2">
            <BrainCircuit size={18} className="text-cyan-400" />

            <span className="font-semibold text-white">
              Prediction Context
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">

            <ContextItem
              icon={Fuel}
              label="Brent Oil"
              value={`$${latest.inputs.brent_oil}`}
            />

            <ContextItem
              icon={DollarSign}
              label="USD / INR"
              value={`₹${latest.inputs.usd_inr}`}
            />

            <ContextItem
              icon={Globe2}
              label="Global Demand"
              value={`${latest.inputs.global_demand ?? "--"} mb/d`}
            />

            <ContextItem
              icon={ShieldCheck}
              label="Geopolitical"
              value={
                latest.inputs.global_conflict === 1
                  ? "Conflict"
                  : "No Conflict"
              }
            />

          </div>

          <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-4">

            <div>
              <p className="text-xs text-slate-500">
                Model
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Linear Regression
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs text-slate-500">
                R² Score
              </p>

              <p className="mt-1 text-sm font-semibold text-cyan-400">
                98.59%
              </p>
            </div>

          </div>

        </div>
      </div>
    </GlassCard>
  );
}

function ContextItem({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-3">
      <div className="flex items-center gap-2 text-slate-500">
        <Icon size={15} />
        <span className="text-xs">
          {label}
        </span>
      </div>

      <p className="mt-2 text-sm font-semibold text-white">
        {value}
      </p>
    </div>
  );
}

export default LatestPredictionCard;