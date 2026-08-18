function DashboardSkeleton() {
  return (
    <div className="animate-pulse px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Dashboard Header */}
        <div className="space-y-4">
          <div className="h-10 w-80 rounded-xl bg-slate-800" />
          <div className="h-4 w-96 max-w-full rounded bg-slate-800" />
        </div>

        {/* Latest Prediction */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">

            {/* Prediction Side */}
            <div className="space-y-5">
              <div className="h-5 w-40 rounded bg-slate-800" />

              <div className="h-14 w-72 rounded-xl bg-slate-800" />

              <div className="h-4 w-64 rounded bg-slate-800" />

              <div className="h-3 w-40 rounded bg-slate-800" />
            </div>

            {/* Prediction Context */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-5">

              <div className="mb-4 h-5 w-44 rounded bg-slate-800" />

              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-16 rounded-xl bg-slate-800"
                  />
                ))}
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-slate-800 pt-4">
                <div className="space-y-2">
                  <div className="h-3 w-12 rounded bg-slate-800" />
                  <div className="h-4 w-32 rounded bg-slate-800" />
                </div>

                <div className="space-y-2 text-right">
                  <div className="ml-auto h-3 w-14 rounded bg-slate-800" />
                  <div className="ml-auto h-4 w-16 rounded bg-slate-800" />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Dashboard Statistics */}
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-36 rounded-3xl border border-slate-800 bg-slate-900/60 p-6"
            >
              <div className="h-4 w-24 rounded bg-slate-800" />
              <div className="mt-5 h-8 w-32 rounded bg-slate-800" />
            </div>
          ))}
        </div>

        {/* Analytics */}
        <div className="grid gap-6 lg:grid-cols-3">

          {/* Historical Chart */}
          <div className="h-[430px] rounded-3xl border border-slate-800 bg-slate-900/60 p-6 lg:col-span-2">
            <div className="h-5 w-48 rounded bg-slate-800" />

            <div className="mt-8 h-[320px] rounded-2xl bg-slate-800/60" />
          </div>

          {/* Model Analytics */}
          <div className="space-y-6">

            {/* Metrics */}
            <div className="h-56 rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="h-5 w-44 rounded bg-slate-800" />

              <div className="mt-6 space-y-4">
                <div className="h-4 w-full rounded bg-slate-800" />
                <div className="h-4 w-4/5 rounded bg-slate-800" />
                <div className="h-4 w-3/5 rounded bg-slate-800" />
              </div>
            </div>

            {/* Model Info */}
            <div className="h-64 rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="h-5 w-40 rounded bg-slate-800" />

              <div className="mt-6 space-y-4">
                <div className="h-4 w-full rounded bg-slate-800" />
                <div className="h-4 w-4/5 rounded bg-slate-800" />
                <div className="h-4 w-3/5 rounded bg-slate-800" />
              </div>
            </div>

          </div>
        </div>

        {/* Prediction History */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">

          <div className="h-6 w-52 rounded bg-slate-800" />

          <div className="mt-6 space-y-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-12 rounded-xl bg-slate-800"
              />
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}

export default DashboardSkeleton;