import GlassCard from "../ui/GlassCard";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const months = [
  "",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function LineChartCard({ data }) {
  console.log(data);
console.log(data[data.length - 1]);
  return (
    <GlassCard className="p-8">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Historical Oil Price Trend
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
  stroke="#1e293b"
  strokeDasharray="3 3"
  vertical={false}
/>

<XAxis
  dataKey="label"
  axisLine={false}
  tickLine={false}
  stroke="#94A3B8"
  tick={{ fontSize: 12 }}
  ticks={[
    "2003-01",
    "2005-01",
    "2007-01",
    "2009-01",
    "2011-01",
    "2013-01",
    "2015-01",
    "2017-01",
    "2019-01",
    "2021-01",
    "2023-01",
    "2025-01",
    "2026-01",
  ]}
  tickFormatter={(value) => value.split("-")[0]}
/>
<YAxis
  stroke="#94A3B8"
  axisLine={false}
  tickLine={false}
  tick={{ fontSize: 12 }}
/>

<Tooltip
  cursor={{
    stroke: "#3B82F6",
    strokeWidth: 1,
    strokeDasharray: "4 4",
  }}
  content={({ active, payload }) => {
    if (!active || !payload?.length) return null;

    const d = payload[0].payload;

    return (
      <div className="rounded-2xl border border-slate-700 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl">
        <h3 className="mb-3 text-lg font-bold text-white">
          {months[d.month]} {d.year}
        </h3>

        <div className="space-y-2 text-sm">

          <div className="flex justify-between gap-8">
            <span className="text-slate-400">Oil Price</span>
            <span className="font-semibold text-blue-400">
              ₹ {Number(d.price).toLocaleString("en-IN", {
  maximumFractionDigits: 2,
})}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">Brent</span>
            <span className="text-white">
              ${Number(d.brent).toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-slate-400">USD / INR</span>
            <span className="text-white">
              {Number(d.usd_inr).toFixed(2)}
            </span>
          </div>

        </div>
      </div>
    );
  }}
/>
<Line
  type="natural"
  dataKey="price"
  stroke="#3B82F6"
  strokeWidth={3}
  dot={false}
  activeDot={{
    r: 6,
    stroke: "#3B82F6",
    strokeWidth: 2,
    fill: "#ffffff",
  }}
  animationDuration={1500}
  animationEasing="ease-in-out"
/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  );
}

export default LineChartCard;