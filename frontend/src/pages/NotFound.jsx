import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeftCircle } from "lucide-react";
import AnimatedBackground from "../components/ui/AnimatedBackground";

function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-6">

      <AnimatedBackground />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-2xl text-center"
      >
        <h1 className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-9xl font-black text-transparent">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold text-white">
          Lost in the Market?
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-400">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back to OilVision AI.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            to="/"
            className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600"
          >
            <Home size={20} />
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-7 py-4 font-semibold text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:text-cyan-400"
          >
            <ArrowLeftCircle size={20} />
            Go Back
          </button>

        </div>

        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur">
          <p className="text-sm text-slate-500">
            Error Code:
            <span className="ml-2 font-semibold text-cyan-400">
              HTTP 404
            </span>
          </p>
        </div>

      </motion.div>

    </div>
  );
}

export default NotFound;