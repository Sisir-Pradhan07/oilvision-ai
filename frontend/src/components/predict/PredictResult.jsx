import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, BrainCircuit } from "lucide-react";
import generateReport from "../../utils/generateReport";
import { Download } from "lucide-react";
import GlassCard from "../ui/GlassCard";
import SectionTitle from "../ui/SectionTitle";

function PredictResult({ result, loading, inputs }) {
  return (
    <GlassCard className="p-8 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

      <SectionTitle
        title="AI Prediction"
        subtitle="Machine Learning Forecast"
      />

      {loading && (
        <div className="flex h-80 items-center justify-center">
          <div className="flex flex-col items-center gap-5">
  <div className="h-14 w-14 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>

  <div className="text-center">
    <p className="text-xl font-semibold text-white">
      AI is analyzing the market...
    </p>

    <p className="mt-2 text-slate-400">
      Generating oil price forecast
    </p>
  </div>
</div>
        </div>
      )}

      {!loading && !result && (
        <div className="flex h-80 flex-col items-center justify-center text-center">

          <BrainCircuit
            size={60}
            className="mb-6 text-blue-500"
          />

          <h3 className="text-2xl font-semibold text-white">
            AI Forecast Ready
          </h3>

          <p className="mt-3 max-w-sm text-slate-400">
            Enter the latest market indicators to generate an AI-powered forecast for India's oil price.
            <span className="text-blue-400"> Predict Oil Price</span>.
          </p>

        </div>
      )}

      {!loading && result && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >

          <div className="flex items-center gap-2">

            <CheckCircle2
              className="text-green-400"
              size={20}
            />

            <span className="text-green-400">
              AI Forecast Generated
            </span>

          </div>

          <div>

  <p className="text-lg font-medium text-slate-400">
    Predicted Oil Price
  </p>

  <h2 className="mt-3 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-6xl font-black text-transparent">
    ₹ {Number(result.predicted_price).toLocaleString()}
  </h2>
  <div className="mt-6 flex justify-center">
  <button
    onClick={() => generateReport(result, inputs)}
    className="flex items-center gap-2 rounded-xl border border-blue-500 bg-blue-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
  >
    <Download size={18} />
    Download Prediction Report
  </button>
</div>

  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400">
    <CheckCircle2 size={16} />
    Forecast Ready
  </div>

</div>
<hr className="border-slate-800" />

          <div className="space-y-4">

            <Info
              label="Model"
              value={result.model}
            />

            <Info
              label="Version"
              value={result.version}
            />

            <Info
              label="Accuracy"
              value="98.59%"
            />

            <Info
              label="Generated"
              value={new Date().toLocaleTimeString()}
            />

          </div>

          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-5">

            <div className="mb-2 flex items-center gap-2">

              <Sparkles
                size={18}
                className="text-blue-400"
              />

              <span className="font-semibold text-white">
                AI Insight
              </span>

            </div>

          <p className="leading-7 text-slate-300">
  OilVision AI analyzed Brent crude prices, the USD/INR exchange rate,
  global oil demand, and geopolitical conditions to estimate the
  expected Indian oil price based on current market inputs.
</p>

          </div>

        </motion.div>
      )}

    </GlassCard>
  );
}

function Info({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4 transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-900">

      <span className="text-slate-400">
        {label}
      </span>

      <span className="font-semibold text-white">
        {value}
      </span>
 
    </div>
  );
}

export default PredictResult;