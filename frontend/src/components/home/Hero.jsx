import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Activity, TrendingUp, Globe2, Target } from "lucide-react";

function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-slate-950">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.25),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_bottom,rgba(15,23,42,0.9),transparent_70%)]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:55px_55px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400"
          >
            <Activity size={15} />
            AI Powered Energy Intelligence
          </motion.div>

          {/* Heading */}
          <h1 className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl">
            Predict
            <span className="text-blue-500"> Oil Prices </span>
            Before The Market Moves.
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            OilVision AI combines machine learning with economic indicators
            to forecast India's oil prices through an intelligent analytics
            platform.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/predict"
              className="group flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/30"
            >
              Start Prediction

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/dashboard"
              className="rounded-xl border border-slate-700 bg-slate-900/40 px-7 py-4 font-semibold text-slate-300 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/60 hover:bg-slate-900 hover:text-white"
            >
              View Dashboard
            </Link>

          </div>

          {/* Trust indicators */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
            <span>Machine Learning</span>
            <span className="text-slate-700">•</span>
            <span>Economic Indicators</span>
            <span className="text-slate-700">•</span>
            <span>Historical Market Data</span>
          </div>

        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex items-center justify-center"
        >

          <div className="relative w-full max-w-md">

            {/* Glow */}
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/10 blur-3xl" />

            <div className="relative rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">

              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">
                    Live Analytics
                  </p>

                  <h3 className="mt-1 text-xl font-semibold text-white">
                    Market Snapshot
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs text-emerald-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                  Live
                </div>
              </div>

              <div className="space-y-3">

                <Card
                  icon={<TrendingUp size={18} />}
                  title="Brent Oil"
                  value="$82.45"
                />

                <Card
                  icon={<Activity size={18} />}
                  title="USD / INR"
                  value="₹85.31"
                />

                <Card
                  icon={<Globe2 size={18} />}
                  title="Global Demand"
                  value="103.8 mb/d"
                />

                <Card
                  icon={<Target size={18} />}
                  title="Model Accuracy"
                  value="98.59%"
                />

              </div>

              <div className="mt-6 border-t border-slate-800 pt-5">
                <p className="text-xs text-slate-500">
                  Powered by the latest trained OilVision AI model
                </p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

function Card({ icon, title, value }) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
      className="group flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/80 p-4 transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-900"
    >
      <div className="flex items-center gap-3">

        <div className="rounded-xl bg-blue-500/10 p-2 text-blue-400 transition group-hover:bg-blue-500/15">
          {icon}
        </div>

        <span className="text-sm text-slate-400">
          {title}
        </span>

      </div>

      <span className="font-semibold tabular-nums text-blue-400">
        {value}
      </span>
    </motion.div>
  );
}

export default Hero;