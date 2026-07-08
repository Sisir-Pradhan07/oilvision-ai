import GlassCard from "../ui/GlassCard";

function MetricsCard({ metrics }) {
  const metricsData = [
  ["R² Score", metrics.r2],
  ["RMSE", metrics.rmse],
  ["MAE", metrics.mae],
];

  return (
    <GlassCard className="p-8">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Model Performance
      </h2>

      <div className="space-y-4">

        {metricsData.map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between rounded-xl bg-slate-950 p-4"
          >
            <span className="text-slate-400">{label}</span>

            <span className="font-semibold text-white">
              {value}
            </span>
          </div>
        ))}

      </div>

    </GlassCard>
  );
}

export default MetricsCard;