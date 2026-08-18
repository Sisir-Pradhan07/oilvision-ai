import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";

function ProjectOverview() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <GlassCard className="p-10">

            <h2 className="text-3xl font-bold text-white">
              Project Overview
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              OilVision AI was created to explore how machine learning
              can be applied to real-world economic data. The application
              estimates Indian oil prices using historical market
              information such as Brent crude oil prices, USD/INR exchange
              rates, global oil demand, and geopolitical conditions.
            </p>

            <p className="mt-5 leading-8 text-slate-300">
              The goal of this project is to combine data analysis,
              machine learning, and a simple user interface into a single
              application where users can explore historical trends,
              generate predictions, and understand model performance.
            </p>

          </GlassCard>
        </motion.div>

      </div>
    </section>
  );
}

export default ProjectOverview;