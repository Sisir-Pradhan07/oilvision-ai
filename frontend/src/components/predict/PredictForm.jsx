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
        </div>
      </form>
    </GlassCard>
  );
}

export default PredictForm;