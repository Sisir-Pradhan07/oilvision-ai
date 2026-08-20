import { motion } from "framer-motion";

function ModelFitMeter({ value = 0.9859 }) {
  const radius = 58;
  const stroke = 8;

  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  // Ensure R² stays between 0 and 1
  const safeValue = Math.min(
    1,
    Math.max(0, Number(value) || 0)
  );

  // Mathematical conversion:
  // R² 0.9859 → 98.59%
  const percentage = safeValue * 100;

  // Calculate the visible portion of the SVG circle
  const progress = safeValue * circumference;

  const remaining = circumference - progress;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
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
            {/* Background circle */}
            <circle
              stroke="#1e293b"
              fill="transparent"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />

            {/* Animated performance circle */}
            <motion.circle
              stroke="#22c55e"
              fill="transparent"
              strokeWidth={stroke}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
              initial={{
                strokeDasharray: `${0} ${circumference}`,
              }}
              animate={{
                strokeDasharray: `${progress} ${remaining}`,
              }}
             transition={{
  duration: 3.2,
  ease: [0.16, 1, 0.3, 1],
  delay: 0.2,
}}
            />
          </svg>

          {/* Animated percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <span className="text-2xl font-black text-white">
              {percentage.toFixed(2)}%
            </span>

            <span className="mt-1 text-xs text-slate-400">
              R² Score
            </span>
          </motion.div>

        </div>
      </div>

      <div className="mt-5 text-center">
        <p className="text-sm font-medium text-green-400">
          Strong Model Fit
        </p>

        <p className="mt-2 text-xs leading-5 text-slate-500">
          The model explains approximately{" "}
          {percentage.toFixed(2)}% of the variance in the test data.
        </p>
      </div>
    </motion.div>
  );
}

export default ModelFitMeter;