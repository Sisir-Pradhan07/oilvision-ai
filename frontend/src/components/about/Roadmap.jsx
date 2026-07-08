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
    <section className="px-6 py-16">
      <div className="mx-auto max-w-5xl">

        <h2 className="mb-12 text-center text-3xl font-bold text-white">
          Project Roadmap
        </h2>

        <p className="mb-10 text-center text-slate-400">
          Planned enhancements for future versions of OilVision AI.
        </p>

        <div className="space-y-5">

          {roadmap.map((item) => (
            <GlassCard
              key={item.title}
              className="flex items-center justify-between p-6 transition-all duration-300 hover:border-blue-500/40"
            >
              <div className="flex items-center gap-4">

                {item.status === "done" ? (
                  <CheckCircle2 className="text-green-400" size={24} />
                ) : (
                  <Clock3 className="text-yellow-400" size={24} />
                )}

                <span className="text-lg text-white">
                  {item.title}
                </span>

              </div>

              <span
                className={`rounded-full px-4 py-1 text-sm ${
                  item.status === "done"
                    ? "bg-green-500/10 text-green-400"
                    : "bg-yellow-500/10 text-yellow-400"
                }`}
              >
                {item.status === "done"
                  ? "Completed"
                  : "Planned"}
              </span>

            </GlassCard>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Roadmap;