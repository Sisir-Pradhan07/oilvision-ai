import { motion } from "framer-motion";
import {
  Database,
  Cpu,
  BrainCircuit,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Market Data",
    description:
      "Collects Brent crude prices, USD/INR exchange rates, global demand and geopolitical indicators.",
  },
  {
    icon: Cpu,
    title: "Data Processing",
    description:
      "Prepares and scales the input features before sending them to the prediction model.",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    description:
      "The trained AI model analyzes market conditions and estimates the expected oil price.",
  },
  {
    icon: TrendingUp,
    title: "Forecast",
    description:
      "OilVision AI instantly generates the predicted Indian oil price with supporting insights.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white">
            How OilVision AI Works
          </h2>

          <p className="mt-4 text-slate-400">
            From market indicators to AI-powered forecasting in four simple steps.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.2 },
                }}
                className="relative rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-blue-500/10 p-4 text-blue-400">
                  <Icon size={28} />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="leading-7 text-slate-400">
                  {step.description}
                </p>

                <div className="absolute -right-4 top-10 hidden text-3xl text-slate-700 xl:block">
                  →
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;