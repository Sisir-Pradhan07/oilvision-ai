import { useEffect, useState } from "react";
import LatestPredictionCard from "../components/dashboard/LatestPredictionCard";
import DashboardSkeleton from "../components/ui/DashboardSkeleton";
import PredictionHistoryCard from "../components/dashboard/PredictionHistoryCard";
import {
  getDashboardData,
  getPredictionHistory,
} from "../services/dashboard";
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
      <AnimatedBackground />

      <div className="relative z-10 px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <SectionTitle
          
            title="Analytics Dashboard"
            subtitle="Live insights generated from the latest trained Machine Learning model."
          />
          <LatestPredictionCard
  latest={history.length ? history[0] : null}
/>

          <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

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

          </div>

         <div className="grid gap-8 lg:grid-cols-3">

  <div className="lg:col-span-2">
    <LineChartCard
      data={dashboardData.historical_prices}
    />
  </div>

  <div className="space-y-8">

    <MetricsCard
      metrics={dashboardData.metrics}
    />

    <ModelInfoCard
      model={dashboardData.model}
    />

  </div>

</div>

<div className="mt-8">
  <PredictionHistoryCard history={history} />
</div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;