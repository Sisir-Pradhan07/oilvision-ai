import { motion } from "framer-motion";
import {
  BrainCircuit,
  Database,
  BarChart3,
  Cloud,
  Activity,
  Cpu,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    description:
      "Predicts India's oil prices using a trained regression model with high accuracy.",
  },
  {
    icon: Database,
    title: "Economic Indicators",
    description:
      "Uses Brent crude price, USD/INR exchange rate, demand and conflict data.",
  },
  {
    icon: BarChart3,
    title: "Interactive Dashboard",
    description:
      "Visualize predictions, model performance and historical trends beautifully.",
  },
  {
    icon: Activity,
    title: "Fast Prediction",
    description:
      "Receive predictions instantly through a FastAPI backend and React frontend.",
  },
  {
    icon: Cpu,
    title: "Production Ready",
    description:
      "Clean architecture with separate ML training, backend API and frontend.",
  },
  {
    icon: Cloud,
    title: "Cloud Deployment",
    description:
      "Designed for deployment on Render and Vercel with future model updates.",
  },
];

function Features() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white">
            Why OilVision AI?
          </h2>

          <p className="mt-4 text-slate-400">
            Built like a real AI product, not just a machine learning notebook.
          </p>
        </motion.div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.12,
                }}
                className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/15 text-blue-500">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default Features;