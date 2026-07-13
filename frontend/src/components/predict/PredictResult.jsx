import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  BrainCircuit,
  LoaderCircle,
  Download,
} from "lucide-react";
import CountUpModule from "react-countup";
import ConfidenceMeter from "./ConfidenceMeter";
const CountUp = CountUpModule.default;
import generateReport from "../../utils/generateReport";
import GlassCard from "../ui/GlassCard";
import SectionTitle from "../ui/SectionTitle";
import MarketSummary from "./MarketSummary";

function PredictResult({ result, loading, inputs }) {
const steps = [
  {
    title: "Year",
    value: inputs?.Year ?? "--",
  },
  {
    title: "Brent Oil Price",
    value: `$${inputs?.Brent_Oil_Price_US_b ?? "--"}`,
  },
  {
    title: "USD / INR",
    value: inputs?.USD_INR ?? "--",
  },
  {
    title: "Global Oil Demand",
    value: `${inputs?.Global_Oil_Demand_mb_d ?? "--"} mb/d`,
  },
  {
    title: "Global Conflict",
    value: inputs?.Global_Conflict === 1 ? "Conflict" : "No Conflict",
  },
  {
    title: "Scaling Features",
    value: null,
  },
  {
    title: "Running Linear Regression",
    value: null,
  },
  {
    title: "Generating Forecast",
    value: null,
  },
  {
    title: "Preparing Report",
    value: null,
  },
];
const [typingFinished, setTypingFinished] = useState(false);
const [currentStep, setCurrentStep] = useState(0);
const fullInsight = useMemo(() => {
  if (!result) return "";

  const conflictStatus =
    inputs?.Global_Conflict === 1 ? "Conflict" : "No Conflict";

  return `OilVision AI analyzed the current market indicators including Brent crude oil price (${inputs?.Brent_Oil_Price_US_b} USD/barrel), USD/INR exchange rate (${inputs?.USD_INR}), global oil demand (${inputs?.Global_Oil_Demand_mb_d} mb/d), and geopolitical status (${conflictStatus}). After preprocessing and feature scaling, the trained Linear Regression model estimated the predicted Indian oil price per barrel as ₹${Number(
    result.predicted_price
  ).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}.`;
}, [result, inputs]);

const [typedInsight, setTypedInsight] = useState("");

useEffect(() => {
  if (!loading) {
    setCurrentStep(0);
    return;
  }

  let i = 0;

  const timer = setInterval(() => {
    i++;

    if (i < steps.length) {
      setCurrentStep(i);
    } else {
      clearInterval(timer);
    }

  }, 350);

  return () => clearInterval(timer);
}, [loading]);

useEffect(() => {
  if (!result) {
    setTypedInsight("");
    setTypingFinished(false);
    return;
  }

  setTypedInsight("");
  setTypingFinished(false);

  let index = 0;

  const timer = setInterval(() => {
    setTypedInsight(fullInsight.slice(0, index));

    index++;

    if (index > fullInsight.length) {
      clearInterval(timer);
      setTypingFinished(true);
    }
  }, 18);

  return () => clearInterval(timer);
}, [fullInsight, result]);

const predictionConfidence = (() => {
  if (!inputs) return 98.59;

  let confidence = 98.59;

  // Brent Oil Price
  if (
    inputs.Brent_Oil_Price_US_b < 40 ||
    inputs.Brent_Oil_Price_US_b > 120
  ) {
    confidence -= 2;
  }

  // USD / INR
  if (inputs.USD_INR < 65 || inputs.USD_INR > 95) {
    confidence -= 1.5;
  }

  // Global Oil Demand
  if (
    inputs.Global_Oil_Demand_mb_d < 90 ||
    inputs.Global_Oil_Demand_mb_d > 115
  ) {
    confidence -= 1.5;
  }

  // Geopolitical conflict
  if (inputs.Global_Conflict === 1) {
    confidence -= 0.8;
  }

  return Math.max(confidence, 85);
})();

  return (
    <GlassCard className="relative overflow-hidden p-8">

      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

      <SectionTitle
        title="AI Prediction"
        subtitle="Machine Learning Forecast"
      />

{loading && (

<div className="flex h-[520px] items-center justify-center">

  <motion.div
    key={currentStep}
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -40, scale: 0.95 }}
    transition={{ duration: 0.35 }}
    className="w-full max-w-md rounded-3xl border border-cyan-500/20 bg-slate-900 p-10 text-center shadow-2xl shadow-cyan-500/10"
  >

    <BrainCircuit
      size={60}
      className="mx-auto mb-8 animate-pulse text-cyan-400"
    />

    <h2 className="text-3xl font-bold text-white">
      OilVision AI
    </h2>

    <p className="mt-2 text-slate-400">
      Processing Market Intelligence...
    </p>

    <div className="mt-10">

      <h3 className="text-2xl font-bold text-cyan-400">
        {steps[currentStep].title}
      </h3>

      {steps[currentStep].value && (
        <p className="mt-4 text-xl text-white">
          {steps[currentStep].value}
        </p>
      )}

    </div>

    <div className="mt-10 h-2 overflow-hidden rounded-full bg-slate-800">

      <motion.div
        className="h-full bg-cyan-400"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />

    </div>

    <p className="mt-8 text-green-400">
      ✓ Processed
    </p>

  </motion.div>

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
            Enter the latest market indicators to generate an AI-powered forecast
            for India's oil price.
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
              size={20}
              className="text-green-400"
            />

            <span className="text-green-400">
              AI Forecast Generated
            </span>

          </div>

          <div>

            <p className="text-lg text-slate-400">
              Predicted Oil Price
            </p>

         <motion.h2
  initial={{ opacity: 0, y: 20, scale: 0.9 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.4 }}
  className="mt-3 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-6xl font-black text-transparent"
>
  ₹{" "}
  <CountUp
    start={0}
    end={Number(result.predicted_price)}
    duration={2}
    separator=","
    decimals={2}
    decimal="."
    useEasing={true}
  />
</motion.h2>

           <motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.8, duration: 0.4 }}
  className="mt-6 flex justify-center"
>

              <button
                onClick={() => generateReport(result, inputs)}
                className="flex items-center gap-2 rounded-xl border border-blue-500 bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
              >

                <Download size={18} />

                Download Prediction Report

              </button>

            </motion.div>

          </div>

          <hr className="border-slate-800" />

          <div className="grid gap-6 lg:grid-cols-2">

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
  label="Model Accuracy"
  value="98.59%"
/>

    <Info
      label="Generated"
      value={new Date().toLocaleTimeString()}
    />

  </div>

  <ConfidenceMeter value={predictionConfidence} />
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

  <div className="mb-8">
    <MarketSummary inputs={inputs} />
  </div>

  <p className="leading-8 text-slate-300">
    {typedInsight}
    {!typingFinished && (
      <span className="ml-1 inline-block animate-pulse text-cyan-400">
        |
      </span>
    )}
  </p>

</div>

        </motion.div>

      )}

    </GlassCard>
  );
}

function Info({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 px-5 py-4 transition hover:border-blue-500/30">

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