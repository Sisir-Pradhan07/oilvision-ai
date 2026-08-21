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

function LineChartCard({ data = [] }) {
  const yearTicks = data
    .filter((item) => item.month === 1)
    .map((item) => item.label);

  const latest = data.length ? data[data.length - 1] : null;

  // ==========================================
  // YEAR-OVER-YEAR PRICE CHANGE
  // Compare latest data with the same month
  // from the previous year
  // ==========================================

  const previousYearData = latest
    ? data.find(
        (item) =>
          Number(item.year) === Number(latest.year) - 1 &&
          Number(item.month) === Number(latest.month)
      )
    : null;

  // If the exact same month from the previous
  // year is unavailable, use the closest
  // available previous-year data.
  const fallbackPreviousYearData =
    !previousYearData && latest
      ? [...data]
          .reverse()
          .find(
            (item) =>
              Number(item.year) === Number(latest.year) - 1
          )
      : null;

  const comparisonData =
    previousYearData || fallbackPreviousYearData;

  // Mathematical calculation:
  //
  // Price Change = Latest Price - Previous Year Price
  //
  // Percentage Change =
  // ((Latest - Previous Year) / Previous Year) × 100

  const priceChange =
    latest && comparisonData
      ? Number(latest.price) - Number(comparisonData.price)
      : 0;

  const percentageChange =
    comparisonData && Number(comparisonData.price) !== 0
      ? (priceChange / Number(comparisonData.price)) * 100
      : 0;

  const isPositive = priceChange >= 0;

  return (
    <GlassCard className="p-8">
      {/* Header */}

      <div className="mb-6 flex flex-wrap items-start justify-between gap-5">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Historical Oil Price Trend
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Historical India oil price movement
          </p>
        </div>

        {latest && (
          <div className="flex gap-6 text-right">
            {/* Year-over-Year Change */}

            {comparisonData && (
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500">
                  Year-over-Year Change
                </p>

                <p
                  className={`mt-1 text-lg font-bold ${
                    isPositive
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                >
                  {isPositive ? "+" : ""}
                  {percentageChange.toFixed(2)}%
                </p>

                <p className="text-xs text-slate-500">
                  {isPositive ? "+" : "-"}₹
                  {Math.abs(priceChange).toLocaleString(
                    "en-IN",
                    {
                      maximumFractionDigits: 2,
                    }
                  )}
                </p>

                <p className="mt-1 text-[10px] text-slate-600">
                  vs {months[comparisonData.month]}{" "}
                  {comparisonData.year}
                </p>
              </div>
            )}

            {/* Latest Value */}

            <div>
              <p className="text-xs uppercase tracking-wider text-slate-500">
                Latest
              </p>

              <p className="mt-1 text-lg font-bold text-blue-400">
                ₹
                {Number(latest.price).toLocaleString(
                  "en-IN",
                  {
                    maximumFractionDigits: 2,
                  }
                )}
              </p>

              <p className="text-xs text-slate-500">
                {months[latest.month]} {latest.year}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Empty State */}

      {!data.length ? (
        <div className="flex h-80 items-center justify-center text-slate-500">
          Historical price data is unavailable.
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-80"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 15,
                right: 15,
                left: 8,
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
                    stopOpacity={0.3}
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
                  String(value).split("-")[0]
                }
                interval="preserveStartEnd"
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                stroke="#94A3B8"
                tick={{ fontSize: 12 }}
                width={72}
                domain={[
                  (dataMin) =>
                    Math.floor(dataMin * 0.95),
                  (dataMax) =>
                    Math.ceil(dataMax * 1.05),
                ]}
                tickFormatter={(value) =>
                  `₹${Number(value).toLocaleString(
                    "en-IN"
                  )}`
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
                            ${Number(d.brent).toFixed(2)}
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
                  r: 5,
                  strokeWidth: 3,
                  fill: "#0f172a",
                  stroke: "#3B82F6",
                }}
                isAnimationActive={true}
                animationBegin={200}
                animationDuration={3200}
                animationEasing="ease-in-out"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      )}
    </GlassCard>
  );
}

export default LineChartCard;