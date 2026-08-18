import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";
import { CheckCircle2, Clock3 } from "lucide-react";

const roadmap = [
  {
    status: "done",
    title: "Machine Learning Prediction Engine",
  },
  {
    status: "done",
    title: "Interactive Analytics Dashboard",
  },
  {
    status: "done",
    title: "Prediction History",
  },
  {
    status: "planned",
    title: "Live Oil Market API Integration",
  },
  {
    status: "planned",
    title: "Support for Multiple ML Models",
  },
  {
    status: "planned",
    title: "Export Predictions (PDF / Excel)",
  },
  {
    status: "planned",
    title: "User Accounts & Saved Predictions",
  },
  {
    status: "planned",
    title: "Model Comparison Dashboard",
  },
];

function Roadmap() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Project Roadmap
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Planned enhancements and completed milestones shaping the future
            of OilVision AI.
          </p>
        </motion.div>

        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-5 top-0 h-full w-px bg-slate-800 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-8">
            {roadmap.map((item, index) => {
              const isDone = item.status === "done";

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 18,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`relative flex items-center md:w-1/2 ${
                    index % 2 === 0
                      ? "md:mr-auto md:pr-12"
                      : "md:ml-auto md:pl-12"
                  }`}
                >
                  <GlassCard
                    className={`ml-10 w-full p-5 transition-all duration-300 md:ml-0 ${
                      isDone
                        ? "hover:border-green-500/30"
                        : "hover:border-yellow-500/30"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">

                      <div className="flex min-w-0 items-center gap-4">

                        <div
                          className={`shrink-0 rounded-xl p-2 ${
                            isDone
                              ? "bg-green-500/10 text-green-400"
                              : "bg-yellow-500/10 text-yellow-400"
                          }`}
                        >
                          {isDone ? (
                            <CheckCircle2 size={20} />
                          ) : (
                            <Clock3 size={20} />
                          )}
                        </div>

                        <span className="text-base font-medium text-white">
                          {item.title}
                        </span>

                      </div>

                      <span
                        className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                          isDone
                            ? "bg-green-500/10 text-green-400"
                            : "bg-yellow-500/10 text-yellow-400"
                        }`}
                      >
                        {isDone ? "Completed" : "Planned"}
                      </span>

                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Roadmap;