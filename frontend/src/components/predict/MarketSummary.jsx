import {
  TrendingUp,
  TrendingDown,
  Fuel,
  DollarSign,
  Globe2,
  ShieldAlert,
} from "lucide-react";

function MarketSummary({ inputs }) {
  if (!inputs) return null;

  const brent =
    inputs.Brent_Oil_Price_US_b > 100
      ? "High"
      : inputs.Brent_Oil_Price_US_b < 60
      ? "Low"
      : "Stable";

  const usd =
    inputs.USD_INR > 90
      ? "Weak INR"
      : inputs.USD_INR < 75
      ? "Strong INR"
      : "Stable INR";

  const demand =
    inputs.Global_Oil_Demand_mb_d > 105
      ? "Strong Demand"
      : "Moderate Demand";

  const trend =
    inputs.Brent_Oil_Price_US_b > 100 ||
    inputs.Global_Conflict === 1
      ? "Upward Pressure"
      : "Stable Market";

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">

      <h3 className="mb-6 text-xl font-bold text-white">
        📊 Market Summary
      </h3>

      <div className="space-y-4">

        <Row
          icon={<Fuel size={18} />}
          label="Brent Oil"
          value={brent}
        />

        <Row
          icon={<DollarSign size={18} />}
          label="USD / INR"
          value={usd}
        />

        <Row
          icon={<Globe2 size={18} />}
          label="Global Demand"
          value={demand}
        />

        <Row
          icon={<ShieldAlert size={18} />}
          label="Geopolitical Status"
          value={
            inputs.Global_Conflict
              ? "Conflict"
              : "No Conflict"
          }
        />

        <Row
          icon={
            trend === "Upward Pressure"
              ? <TrendingUp size={18}/>
              : <TrendingDown size={18}/>
          }
          label="Expected Trend"
          value={trend}
        />

      </div>

    </div>
  );
}

function Row({ icon, label, value }) {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-3 text-slate-300">

        {icon}

        {label}

      </div>

      <span className="font-semibold text-cyan-400">
        {value}
      </span>

    </div>
  );
}

export default MarketSummary;