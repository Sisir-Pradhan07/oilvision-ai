import { motion } from "framer-motion";
import { Code2, Brain, BarChart3 } from "lucide-react";
import GlassCard from "../ui/GlassCard";

function Developer() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-10 text-center md:p-12">

            <h2 className="text-3xl font-bold text-white md:text-4xl">
              About the Developer
            </h2>

            <h3 className="mt-5 text-2xl font-semibold text-blue-400">
              Sisir Pradhan
            </h3>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
              I am a B.Tech student with a strong interest in Machine Learning
              and Data Analytics. OilVision AI was built to apply machine
              learning concepts to a real-world prediction problem while
              creating an intuitive interface for exploring model predictions
              and market insights.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">

              <Skill
                icon={<Brain size={18} />}
                title="Machine Learning"
              />

              <Skill
                icon={<BarChart3 size={18} />}
                title="Data Analytics"
              />

              <Skill
                icon={<Code2 size={18} />}
                title="AI Web Development"
              />

            </div>

          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

function Skill({ icon, title }) {
  return (
    <div className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm text-slate-300">
      <span className="text-blue-400">{icon}</span>
      {title}
    </div>
  );
}

export default Developer;