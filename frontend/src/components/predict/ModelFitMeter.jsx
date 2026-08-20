import { motion } from "framer-motion";

function ModelFitMeter({ value = 0.9859 }) {
  const radius = 58;
  const stroke = 8;

  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;

  const safeValue = Math.min(
    1,
    Math.max(0, Number(value) || 0)
  );

  const progress = safeValue * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
    >
      <h3 className="mb-6 text-center text-lg font-semibold text-white">
        Model Performance
      </h3>

      <div className="flex justify-center">
        <div className="relative">
          <svg
            height={radius * 2}
            width={radius * 2}
            viewBox={`0 0 ${radius * 2} ${radius * 2}`}
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

            <circle
              stroke="#22c55e"
              fill="transparent"
              strokeWidth={stroke}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              strokeDasharray={`${progress} ${circumference}`}
              style={{
                transition:
                  "stroke-dasharray 1.5s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-black text-white">
              {safeValue.toFixed(3)}
            </span>

            <span className="mt-1 text-xs text-slate-400">
              R² Score
            </span>
          </div>
        </div>
      </div>

      <div className="mt-5 text-center">
        <p className="text-sm font-medium text-green-400">
          Strong Model Fit
        </p>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          Indicates how well the model explains patterns in historical oil price data.
        </p>
      </div>
    </motion.div>
  );
}

export default ModelFitMeter;