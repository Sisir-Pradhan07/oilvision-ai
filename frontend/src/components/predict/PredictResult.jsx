function PredictResult({ result, loading }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl">

      <h2 className="mb-8 text-2xl font-bold text-white">
        AI Prediction
      </h2>

      {loading && (
        <p className="text-blue-400">
          Predicting...
        </p>
      )}

      {!loading && !result && (
        <p className="text-slate-400">
          Prediction will appear here.
        </p>
      )}

      {!loading && result && (
        <>

          <h3 className="text-5xl font-black text-blue-500">
            ₹ {result.predicted_price}
          </h3>

          <div className="mt-10 space-y-4">

            <Info
              label="Model"
              value={result.model}
            />

            <Info
              label="Version"
              value={result.version}
            />

          </div>

        </>
      )}

    </div>
  );
}

function Info({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-slate-950 p-4">

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