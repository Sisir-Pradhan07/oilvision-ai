function DashboardSkeleton() {
  return (
    <div className="animate-pulse px-6 py-24">
      <div className="mx-auto max-w-7xl space-y-8">

        <div className="h-10 w-72 rounded bg-slate-800"></div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[1,2,3,4].map(i=>(
            <div key={i} className="h-32 rounded-2xl bg-slate-800"></div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="h-[420px] rounded-2xl bg-slate-800 lg:col-span-2"></div>

          <div className="space-y-8">
            <div className="h-48 rounded-2xl bg-slate-800"></div>
            <div className="h-56 rounded-2xl bg-slate-800"></div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default DashboardSkeleton;