import GlassCard from "../ui/GlassCard";
import {
  BrainCircuit,
  BarChart3,
  History,
  ShieldCheck,
  LayoutDashboard,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Machine Learning Prediction",
    description:
      "Estimate Indian oil prices using historical market indicators.",
  },
  {
    icon: LayoutDashboard,
    title: "Interactive Dashboard",
    description:
      "View historical trends, model metrics, and recent predictions.",
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    description:
      "Understand market movements through clean and interactive charts.",
  },
  {
    icon: History,
    title: "Prediction History",
    description:
      "Stores the latest 20 predictions for quick reference.",
  },
  {
    icon: ShieldCheck,
    title: "Input Validation",
    description:
      "Frontend and backend validation help ensure realistic inputs.",
  },
  {
    icon: Zap,
    title: "Fast API Response",
    description:
      "Predictions are generated within seconds using an optimized backend.",
  },
];

function KeyFeatures() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-7xl">

        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Key Features
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <GlassCard
                key={feature.title}
                className="p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40"
              >
                <div className="mb-5 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-400">
                  <Icon size={24} />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-400">
                  {feature.description}
                </p>
              </GlassCard>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default KeyFeatures;