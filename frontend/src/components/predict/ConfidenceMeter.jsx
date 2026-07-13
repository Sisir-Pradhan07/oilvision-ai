import { motion } from "framer-motion";

function ConfidenceMeter({ value = 98.59 }) {
  const radius = 58;
  const stroke = 8;

  const normalizedRadius = radius - stroke * 0.5;

  const circumference = normalizedRadius * 2 * Math.PI;

  const progress = (value / 100) * circumference;

  const color =
    value >= 95
      ? "#22c55e"
      : value >= 85
      ? "#eab308"
      : "#ef4444";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
    >
      <h3 className="mb-6 text-center text-lg font-semibold text-white">
        Prediction Confidence
      </h3>

      <div className="flex justify-center">

        <div className="relative">

          <svg
            height={radius * 2}
            width={radius * 2}
            className="-rotate-90"
          >
            <circle
              stroke="#1e293b"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />

            <motion.circle
              stroke={color}
              fill="transparent"
              strokeWidth={stroke}
              strokeLinecap="round"
              strokeDasharray={`${progress} ${circumference}`}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              initial={{ strokeDasharray: `0 ${circumference}` }}
              animate={{
                strokeDasharray: `${progress} ${circumference}`,
              }}
              transition={{ duration: 2 }}
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <span className="text-2xl font-black text-white">
              {value.toFixed(2)}%
            </span>

            <span className="mt-1 text-xs text-slate-400">
              Confidence
            </span>

          </div>

        </div>

      </div>

      <div className="mt-5 text-center">

        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            value >= 95
              ? "bg-green-500/10 text-green-400"
              : value >= 85
              ? "bg-yellow-500/10 text-yellow-400"
              : "bg-red-500/10 text-red-400"
          }`}
        >
          {value >= 95
            ? "High Confidence"
            : value >= 85
            ? "Medium Confidence"
            : "Low Confidence"}
        </span>

      </div>
    </motion.div>
  );
}

export default ConfidenceMeter;