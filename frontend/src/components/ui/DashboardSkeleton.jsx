function DashboardSkeleton() {
  return (
    <div className="px-6 py-24 animate-pulse">
      <div className="mx-auto max-w-7xl space-y-10">

        {/* Title */}
        <div className="space-y-4">
          <div className="h-10 w-80 rounded-xl bg-slate-800" />
          <div className="h-4 w-64 rounded bg-slate-800" />
        </div>

        {/* Latest Prediction */}
        <div className="h-40 rounded-3xl bg-slate-800" />

        {/* Stat Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-36 rounded-3xl border border-slate-700 bg-slate-800"
            />
          ))}
        </div>

        {/* Chart + Side Cards */}
        <div className="grid gap-8 lg:grid-cols-3">

          <div className="h-[430px] rounded-3xl border border-slate-700 bg-slate-800 lg:col-span-2" />

          <div className="space-y-8">

            <div className="h-56 rounded-3xl border border-slate-700 bg-slate-800" />

            <div className="h-64 rounded-3xl border border-slate-700 bg-slate-800" />

          </div>

        </div>

        {/* Prediction History */}
        <div className="space-y-4 rounded-3xl border border-slate-700 bg-slate-800 p-8">

          <div className="h-6 w-52 rounded bg-slate-700" />

          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="h-12 rounded-xl bg-slate-700"
            />
          ))}

        </div>

      </div>
    </div>
  );
}

export default DashboardSkeleton;