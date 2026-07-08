import GlassCard from "../ui/GlassCard";
import {
  Fuel,
  DollarSign,
  Globe2,
  AlertTriangle,
} from "lucide-react";

function MarketSnapshot({ summary }) {
  if (!summary) return null;

  return (
    <GlassCard className="mb-8 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Current Market Snapshot
      </h2>

      <div className="grid gap-4 md:grid-cols-2">

        <SnapshotItem
          icon={<Fuel size={18} />}
          label="Brent Oil"
          value={`$${summary.brent_oil}`}
        />

        <SnapshotItem
          icon={<DollarSign size={18} />}
          label="USD / INR"
          value={`₹${summary.usd_inr}`}
        />

        <SnapshotItem
          icon={<Globe2 size={18} />}
          label="Global Demand"
          value={`${summary.global_demand} mb/d`}
        />

        <SnapshotItem
          icon={<AlertTriangle size={18} />}
          label="Global Conflict"
          value={summary.global_conflict ? "Yes" : "No"}
        />

      </div>
    </GlassCard>
  );
}

function SnapshotItem({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition hover:border-blue-500/40">
      <div className="flex items-center gap-3 text-slate-300">
        <div className="text-blue-400">
          {icon}
        </div>

        <span>{label}</span>
      </div>

      <span className="font-semibold text-white">
        {value}
      </span>
    </div>
  );
}

export default MarketSnapshot;