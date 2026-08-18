import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
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
  const yearTicks = data
    ?.filter((item) => item.month === 1)
    .map((item) => item.label);

  const latest = data?.length ? data[data.length - 1] : null;

  return (
    <GlassCard className="p-8">

      {/* Header */}
      <div className="mb-6 flex items-start justify-between gap-4">

        <div>
          <h2 className="text-2xl font-bold text-white">
            Historical Oil Price Trend
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            India oil price history
          </p>
        </div>

        {/* Latest Value */}
        {latest && (
          <div className="hidden shrink-0 text-right sm:block">
            <p className="text-xs uppercase tracking-wider text-slate-500">
              Latest
            </p>

            <p className="mt-1 text-lg font-bold text-blue-400">
              ₹
              {Number(latest.price).toLocaleString("en-IN", {
                maximumFractionDigits: 2,
              })}
            </p>

            <p className="text-xs text-slate-500">
              {months[latest.month]} {latest.year}
            </p>
          </div>
        )}

      </div>

      {/* Chart */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 0.15,
          ease: "easeOut",
        }}
        className="h-80"
      >
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: 0,
              bottom: 0,
            }}
          >

            <defs>
              <linearGradient
                id="oilPriceGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#3B82F6"
                  stopOpacity={0.28}
                />

                <stop
                  offset="100%"
                  stopColor="#3B82F6"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

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
              ticks={yearTicks}
              tickFormatter={(value) =>
                value.split("-")[0]
              }
              interval="preserveStartEnd"
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              stroke="#94A3B8"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) =>
                `₹${Number(value).toLocaleString("en-IN")}`
              }
            />

            <Tooltip
              cursor={{
                stroke: "#3B82F6",
                strokeWidth: 1,
                strokeDasharray: "4 4",
              }}
              content={({ active, payload }) => {
                if (!active || !payload?.length) {
                  return null;
                }

                const d = payload[0].payload;

                return (
                  <div className="min-w-[210px] rounded-2xl border border-slate-700 bg-slate-900/95 p-4 shadow-2xl backdrop-blur-xl">

                    <div className="mb-3 flex items-center justify-between gap-6">
                      <h3 className="text-base font-bold text-white">
                        {months[d.month]} {d.year}
                      </h3>

                      <span className="rounded-full bg-blue-500/10 px-2 py-1 text-[10px] font-medium text-blue-400">
                        Historical
                      </span>
                    </div>

                    <div className="space-y-2.5 text-sm">

                      <div className="flex items-center justify-between gap-6">
                        <span className="text-slate-400">
                          Oil Price
                        </span>

                        <span className="font-semibold text-blue-400">
                          ₹
                          {Number(d.price).toLocaleString(
                            "en-IN",
                            {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            }
                          )}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-6">
                        <span className="text-slate-400">
                          Brent
                        </span>

                        <span className="text-white">
                          $
                          {Number(d.brent).toFixed(2)}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-6">
                        <span className="text-slate-400">
                          USD / INR
                        </span>

                        <span className="text-white">
                          ₹
                          {Number(d.usd_inr).toFixed(2)}
                        </span>
                      </div>

                    </div>
                  </div>
                );
              }}
            />

            <Area
              type="natural"
              dataKey="price"
              stroke="#3B82F6"
              strokeWidth={3}
              fill="url(#oilPriceGradient)"
              dot={false}
              activeDot={{
                r: 6,
                stroke: "#3B82F6",
                strokeWidth: 2,
                fill: "#ffffff",
              }}
              isAnimationActive={true}
              animationBegin={150}
              animationDuration={1800}
              animationEasing="ease-in-out"
            />

          </AreaChart>
        </ResponsiveContainer>
      </motion.div>

    </GlassCard>
  );
}

export default LineChartCard;