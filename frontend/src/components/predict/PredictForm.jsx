import { useState } from "react";

function PredictForm({ onPredict, loading }) {
  const [formData, setFormData] = useState({
    Year: 2026,
    Brent_Oil_Price_US_b: 80,
    USD_INR: 85,
    Global_Oil_Demand_mb_d: 103,
    Global_Conflict: 0,
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    onPredict(formData);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl"
    >
      <h2 className="mb-8 text-2xl font-bold text-white">
        Market Inputs
      </h2>

      <div className="space-y-6">

        <Input
          label="Year"
          name="Year"
          value={formData.Year}
          onChange={handleChange}
        />

        <Input
          label="Brent Oil Price"
          name="Brent_Oil_Price_US_b"
          value={formData.Brent_Oil_Price_US_b}
          onChange={handleChange}
        />

        <Input
          label="USD / INR"
          name="USD_INR"
          value={formData.USD_INR}
          onChange={handleChange}
        />

        <Input
          label="Global Oil Demand"
          name="Global_Oil_Demand_mb_d"
          value={formData.Global_Oil_Demand_mb_d}
          onChange={handleChange}
        />

        <div>

          <label className="mb-3 block text-slate-300">
            Global Conflict
          </label>

          <div className="flex gap-6">

            <label className="flex items-center gap-2 text-slate-300">
              <input
                type="radio"
                name="Global_Conflict"
                value={0}
                checked={formData.Global_Conflict === 0}
                onChange={handleChange}
              />
              No
            </label>

            <label className="flex items-center gap-2 text-slate-300">
              <input
                type="radio"
                name="Global_Conflict"
                value={1}
                checked={formData.Global_Conflict === 1}
                onChange={handleChange}
              />
              Yes
            </label>

          </div>

        </div>

        <button
          disabled={loading}
          className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-500 disabled:opacity-60"
        >
          {loading ? "Predicting..." : "Predict Oil Price"}
        </button>

      </div>
    </form>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-slate-300">
        {label}
      </label>

      <input
        {...props}
        type="number"
        className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-blue-500"
      />
    </div>
  );
}

export default PredictForm;