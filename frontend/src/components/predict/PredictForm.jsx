import { useState } from "react";
import {
  CalendarDays,
  DollarSign,
  Globe2,
  Fuel,
  AlertTriangle,
} from "lucide-react";
import toast from "react-hot-toast";
import GlassCard from "../ui/GlassCard";
import InputField from "../ui/InputField";
import PrimaryButton from "../ui/PrimaryButton";
import SectionTitle from "../ui/SectionTitle";

function PredictForm({ onPredict, loading }) {
  const defaultValues = {
  Year: 2026,
  Brent_Oil_Price_US_b: 80,
  USD_INR: 85,
  Global_Oil_Demand_mb_d: 103,
  Global_Conflict: 0,
};

const [formData, setFormData] = useState(defaultValues);

function handleReset() {
  setFormData(defaultValues);
}

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  }

  function handleSubmit(e) {
  e.preventDefault();

  if (formData.Year < 2003 || formData.Year > 2035) {
    toast.error("Year must be between 2003 and 2035.");
    return;
  }

  if (formData.Brent_Oil_Price_US_b < 20 || formData.Brent_Oil_Price_US_b > 200) {
    toast.error("Brent Oil Price must be between 20 and 200.");
    return;
  }

  if (formData.USD_INR < 50 || formData.USD_INR > 120) {
    toast.error("USD/INR must be between 50 and 120.");
    return;
  }

  if (
    formData.Global_Oil_Demand_mb_d < 80 ||
    formData.Global_Oil_Demand_mb_d > 130
  ) {
    toast.error("Global Oil Demand must be between 80 and 130.");
    return;
  }

  onPredict(formData);
}

  return (
    <GlassCard className="p-8">
      <form onSubmit={handleSubmit}>
        <SectionTitle
          title="Market Inputs"
          subtitle="Provide market indicators for prediction."
        />

        <div className="space-y-6">
          <InputField
  icon={CalendarDays}
  label="Year"
  name="Year"
  type="number"
  min={2003}
  max={2035}
  step={1}
  value={formData.Year}
  onChange={handleChange}
/>

          <InputField
            icon={Fuel}
            label="Brent Oil Price (USD/barrel)"
            name="Brent_Oil_Price_US_b"
            type="number"
            min={20}
            max={200}
            value={formData.Brent_Oil_Price_US_b}
            onChange={handleChange}
          />

          <InputField
            icon={DollarSign}
            label="USD / INR Exchange Rate"
            min={50}
            max={120}
            name="USD_INR"
            type="number"
            value={formData.USD_INR}
            onChange={handleChange}
          />

          <InputField
            icon={Globe2}
            label="Global Oil Demand (mb/d)"
            name="Global_Oil_Demand_mb_d"
            min={80}
max={130}
            type="number"
            value={formData.Global_Oil_Demand_mb_d}
            onChange={handleChange}
          />

          <div>
            <div className="mb-3 flex items-center gap-2">
              <AlertTriangle size={18} className="text-yellow-400" />
              <label className="text-slate-300 font-medium">
                Global Conflict
              </label>
            </div>

            <div className="flex gap-6 rounded-xl border border-slate-700 bg-slate-950 p-4">
              <label className="flex cursor-pointer items-center gap-2 text-slate-300">
                <input
                  type="radio"
                  name="Global_Conflict"
                  value={0}
                  checked={formData.Global_Conflict === 0}
                  onChange={handleChange}
                />
                No Conflict
              </label>

              <label className="flex cursor-pointer items-center gap-2 text-slate-300">
                <input
                  type="radio"
                  name="Global_Conflict"
                  value={1}
                  checked={formData.Global_Conflict === 1}
                  onChange={handleChange}
                />
                Conflict
              </label>
            </div>
          </div>

          <div className="flex gap-4">
  <PrimaryButton
    loading={loading}
    type="submit"
    className="flex-1"
  >
    Predict Oil Price
  </PrimaryButton>

  <button
    type="button"
    onClick={handleReset}
    className="rounded-xl border border-slate-700 px-6 py-3 text-slate-300 transition hover:border-blue-500 hover:text-white"
  >
    Reset
  </button>
</div>
{/* Prediction Engine */}
<div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5">

  <div className="flex items-center gap-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
      <Globe2 size={20} />
    </div>

    <div>
      <h3 className="font-semibold text-white">
        Prediction Engine
      </h3>

      <p className="text-xs text-slate-500">
        Market indicators → Machine Learning → Forecast
      </p>
    </div>
  </div>

  <div className="mt-5 grid grid-cols-2 gap-3">

    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
      <p className="text-xs text-slate-500">
        Model
      </p>
      <p className="mt-1 text-sm font-semibold text-white">
        Linear Regression
      </p>
    </div>

    <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-3">
      <p className="text-xs text-slate-500">
        Features
      </p>
      <p className="mt-1 text-sm font-semibold text-white">
        5 Market Indicators
      </p>
    </div>

  </div>

  <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
    <span className="h-2 w-2 rounded-full bg-emerald-400" />
    Ready to analyze your market inputs
  </div>

</div>
{/* Prediction Flow */}
<div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/40 p-5">

  <div className="mb-5">
    <h3 className="font-semibold text-white">
      How the Prediction Works
    </h3>

    <p className="mt-1 text-xs text-slate-500">
      From market inputs to the final oil price forecast
    </p>
  </div>

  <div className="grid grid-cols-4 gap-2">

    <FlowStep
      number="01"
      title="Inputs"
      description="Market Data"
    />

    <FlowConnector />

    <FlowStep
      number="02"
      title="Scaling"
      description="Preprocessing"
    />

    <FlowConnector />

    <FlowStep
      number="03"
      title="ML Model"
      description="Regression"
    />

    <FlowConnector />

    <FlowStep
      number="04"
      title="Forecast"
      description="Oil Price"
    />

  </div>

</div>

        </div>
      </form>
    </GlassCard>
  );
}function FlowStep({ number, title, description }) {
  return (
    <div className="min-w-0 text-center">

      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-xs font-semibold text-blue-400">
        {number}
      </div>

      <p className="mt-2 truncate text-xs font-semibold text-white">
        {title}
      </p>

      <p className="mt-1 truncate text-[10px] text-slate-500">
        {description}
      </p>

    </div>
  );
}

function FlowConnector() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-px w-full bg-gradient-to-r from-blue-500/10 via-blue-500/40 to-blue-500/10" />
    </div>
  );
}
export default PredictForm;