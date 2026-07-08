import GlassCard from "../ui/GlassCard";
import { Cpu, Tag, Layers } from "lucide-react";

function ModelInfoCard({ model }) {
  const items = [
    {
      icon: <Cpu size={18} />,
      label: "Algorithm",
      value: model.algorithm,
    },
    {
      icon: <Tag size={18} />,
      label: "Version",
      value: model.version,
    },
    {
      icon: <Layers size={18} />,
      label: "Features",
      value: model.features.length,
    },
  ];

  return (
    <GlassCard className="p-8">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Model Information
      </h2>

      <div className="space-y-5">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between rounded-xl bg-slate-950 p-4"
          >
            <div className="flex items-center gap-3 text-slate-300">
              {item.icon}
              <span>{item.label}</span>
            </div>

            <span className="font-semibold text-white">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

export default ModelInfoCard;