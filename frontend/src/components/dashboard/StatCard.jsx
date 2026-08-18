import { motion } from "framer-motion";
import {
  TrendingUp,
  DollarSign,
  Globe,
  Target,
} from "lucide-react";

import GlassCard from "../ui/GlassCard";
import CountUp from "../ui/CountUp";

function StatCard({ title, value, prefix = "", suffix = "" }) {
  const getIcon = () => {
    switch (title) {
      case "Brent Oil":
        return <TrendingUp size={20} />;

      case "USD / INR":
        return <DollarSign size={20} />;

      case "Global Demand":
        return <Globe size={20} />;

      case "R² Score":
  return <Target size={20} />;

      default:
        return <TrendingUp size={20} />;
    }
  };

  const getDescription = () => {
    switch (title) {
      case "Brent Oil":
        return "Current benchmark price";

      case "USD / INR":
        return "Current exchange rate";

      case "Global Demand":
        return "Global daily demand";

     case "R² Score":
  return "Model test-set performance";

      default:
        return "Latest available data";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -6,
        transition: { duration: 0.2 },
      }}
      transition={{
        duration: 0.65,
        ease: "easeOut",
      }}
    >
      <GlassCard className="group relative h-full overflow-hidden border border-slate-800 p-6 transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10">

        {/* Accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="absolute left-0 top-0 h-px w-full origin-left bg-blue-500/50"
        />

        <div className="mb-5 flex items-center justify-between">
          <h3 className="text-sm font-medium tracking-wide text-slate-400">
            {title}
          </h3>

          <div className="rounded-xl bg-blue-500/10 p-2 text-blue-400 transition duration-300 group-hover:scale-110 group-hover:bg-blue-500/15">
            {getIcon()}
          </div>
        </div>

        <div
          className="mb-2 text-3xl font-bold text-white"
          style={{
            fontVariantNumeric: "tabular-nums",
            minHeight: "40px",
          }}
        >
          {typeof value === "number" ? (
            <CountUp
              end={value}
              prefix={prefix}
              suffix={suffix}
            />
          ) : (
            value
          )}
        </div>

        <p className="text-xs tracking-wide text-slate-500">
          {getDescription()}
        </p>

      </GlassCard>
    </motion.div>
  );
}

export default StatCard;