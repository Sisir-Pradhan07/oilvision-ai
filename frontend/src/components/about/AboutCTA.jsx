import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import PrimaryButton from "../ui/PrimaryButton";

function AboutCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.12),transparent_60%)]" />

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-4xl text-center"
      >
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
          <Sparkles size={15} />
          Explore OilVision AI
        </div>

        <h2 className="mt-7 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Ready to Try OilVision AI?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
          Explore the prediction system, analyze historical trends, and
          experience how machine learning can be applied to real-world
          economic data.
        </p>

        <div className="mt-10">
          <Link
            to="/predict"
            className="inline-flex items-center gap-2"
          >
            <PrimaryButton>
              <span className="flex items-center gap-2">
                Start Predicting
                <ArrowRight size={18} />
              </span>
            </PrimaryButton>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default AboutCTA;