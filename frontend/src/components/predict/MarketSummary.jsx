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

      <h3 className="mb-6 flex items-center gap-2 whitespace-nowrap text-xl font-bold text-white">
  <span>📊</span>
  <span>Market Summary</span>
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
    <div className="flex items-start gap-3">
      <span className="shrink-0 pt-0.5 text-slate-300">
        {icon}
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex flex-col gap-1 min-[430px]:flex-row min-[430px]:items-start min-[430px]:justify-between min-[430px]:gap-3">
          <span className="min-w-0 leading-6 text-slate-300">
            {label}
          </span>

          <span className="shrink-0 whitespace-nowrap font-semibold leading-6 text-cyan-400 min-[430px]:text-right">
            {value}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MarketSummary;