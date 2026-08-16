import { useEffect, useState } from "react";
import LatestPredictionCard from "../components/dashboard/LatestPredictionCard";
import DashboardSkeleton from "../components/ui/DashboardSkeleton";
import PredictionHistoryCard from "../components/dashboard/PredictionHistoryCard";
import {
  getDashboardData,
  getPredictionHistory,
} from "../services/dashboard";
import { motion } from "framer-motion";
import AnimatedBackground from "../components/ui/AnimatedBackground";
import SectionTitle from "../components/ui/SectionTitle";
import ModelInfoCard from "../components/dashboard/ModelInfoCard";
import StatCard from "../components/dashboard/StatCard";
import LineChartCard from "../components/dashboard/LineChartCard";
import MetricsCard from "../components/dashboard/MetricsCard";

function Dashboard() {
const [dashboardData, setDashboardData] = useState(null);
const [history, setHistory] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
async function loadDashboard() {
  const start = Date.now();

  try {
    const [dashboard, predictionHistory] = await Promise.all([
      getDashboardData(),
      getPredictionHistory(),
    ]);

    const elapsed = Date.now() - start;

    // Keep skeleton visible for at least 600ms
    if (elapsed < 600) {
      await new Promise(resolve =>
        setTimeout(resolve, 600 - elapsed)
      );
    }

    setDashboardData(dashboard);
    setHistory(predictionHistory);

  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}

  loadDashboard();
}, []);
if (loading) {
  return (
    <div className="min-h-screen bg-slate-950">
      <AnimatedBackground />
      <DashboardSkeleton />
    </div>
  );
}
return (
 <div className="relative min-h-screen overflow-hidden bg-slate-950">
  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-b from-transparent to-slate-950" />
    <AnimatedBackground />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 px-4 py-12 sm:px-6 sm:py-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Dashboard Header */}
        <SectionTitle
          title="Analytics Dashboard"
          subtitle="Live insights generated from the latest trained Machine Learning model."
        />

        {/* Latest Prediction */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="mb-8"
        >
          <LatestPredictionCard
            latest={history.length ? history[0] : null}
          />
        </motion.div>

        {/* Dashboard Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mb-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4"
        >
          <StatCard
            title="Brent Oil"
            value={dashboardData?.summary?.brent_oil ?? 0}
            prefix="$"
          />

          <StatCard
            title="USD / INR"
            value={dashboardData?.summary?.usd_inr ?? 0}
            prefix="₹"
          />

          <StatCard
            title="Global Demand"
            value={dashboardData?.summary?.global_demand ?? 0}
            suffix=" mb/d"
          />

          <StatCard
            title="Model Accuracy"
            value={dashboardData?.summary?.model_accuracy ?? 0}
            suffix="%"
          />
        </motion.div>

        {/* Analytics */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {/* Historical Chart */}
          <div className="min-w-0 lg:col-span-2">
            <LineChartCard
              data={dashboardData.historical_prices}
            />
          </div>

          {/* Model Analytics */}
          <div className="space-y-6">
            <MetricsCard
              metrics={dashboardData.metrics}
            />

            <ModelInfoCard
              model={dashboardData.model}
            />
          </div>
        </motion.div>

        {/* Prediction History */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.4 }}
          className="mt-8"
        >
          <PredictionHistoryCard
            history={history}
          />
        </motion.div>

      </div>
    </motion.div>
  </div>
);
}

export default Dashboard;