import { motion } from "framer-motion";
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
    <section className="px-6 py-12">
      <div className="mx-auto max-w-7xl">

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-8 text-center text-3xl font-bold text-white"
        >
          Key Features
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -4,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
              >
                <GlassCard className="h-full p-7 transition-colors duration-300 hover:border-blue-500/40">

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
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default KeyFeatures;