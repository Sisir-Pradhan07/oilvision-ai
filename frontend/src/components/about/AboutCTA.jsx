import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import PrimaryButton from "../ui/PrimaryButton";

function AboutCTA() {
  return (
    <section className="relative px-6 py-12">
      {/* Bottom Fade */}
<div className="pointer-events-none absolute inset-x-0 -bottom-1 h-32 bg-gradient-to-b from-transparent to-slate-950" />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
}}
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
          <Link to="/predict">
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