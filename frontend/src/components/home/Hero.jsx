import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-slate-950">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.25),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_bottom,rgba(15,23,42,0.9),transparent_70%)]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:55px_55px]" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
        >

          <div className="mb-8 inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-400">
            AI Powered Energy Intelligence
          </div>

          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
            Predict
            <span className="text-blue-500"> Oil Prices </span>
            Before The Market Moves.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            OilVision AI combines machine learning with economic indicators
            to forecast India's oil prices through an intelligent analytics platform.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              to="/predict"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-500"
            >
              Start Prediction
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/dashboard"
              className="rounded-xl border border-slate-700 px-7 py-4 text-slate-300 transition hover:border-blue-500 hover:text-white"
            >
              View Dashboard
            </Link>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8, delay: .2 }}
          className="flex items-center justify-center"
        >

          <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl shadow-2xl">

            <h3 className="mb-8 text-xl font-semibold text-white">
              Live Market Snapshot
            </h3>

            <div className="space-y-6">

              <Card title="Brent Oil" value="$82.45" />

              <Card title="USD / INR" value="₹85.31" />

              <Card title="Global Demand" value="103.8 mb/d" />

              <Card title="Model Accuracy" value="98.59%" />

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

function Card({ title, value }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950 p-5">

      <span className="text-slate-400">
        {title}
      </span>

      <span className="font-bold text-blue-400">
        {value}
      </span>

    </div>
  );
}

export default Hero;