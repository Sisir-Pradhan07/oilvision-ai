import { useState } from "react";
import toast from "react-hot-toast";
import PredictForm from "../components/predict/PredictForm";
import PredictResult from "../components/predict/PredictResult";
import AnimatedBackground from "../components/ui/AnimatedBackground";

import api from "../services/api";

function Predict() {
  const [loading, setLoading] = useState(false);
const [result, setResult] = useState(null);
const [lastInputs, setLastInputs] = useState(null);

 async function handlePredict(data) {
  setLoading(true);
  setResult(null);
  setLastInputs(data); // <-- Move here

  const startTime = Date.now();

  try {
    const response = await api.post("/predict", data);

    const elapsed = Date.now() - startTime;

    if (elapsed < 3000) {
      await new Promise((resolve) =>
        setTimeout(resolve, 3000 - elapsed)
      );
    }

    setResult(response.data);

    toast.success("Prediction completed!");

  } catch (error) {
    console.error(error);
    toast.error("Prediction failed. Please try again.");
  } finally {
    setLoading(false);
  }
}

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <AnimatedBackground />

      <div className="relative z-10">
        <section className="px-6 py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <h1 className="text-5xl font-black text-white">
                Predict Oil Price
              </h1>

              <p className="mt-4 text-slate-400">
                Enter market indicators and let OilVision AI forecast the price.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <PredictForm
                onPredict={handlePredict}
                loading={loading}
              />

              <PredictResult
  result={result}
  loading={loading}
  inputs={lastInputs}
/>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Predict;