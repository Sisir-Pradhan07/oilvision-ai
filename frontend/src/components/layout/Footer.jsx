import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaReact,
  FaPython,
  FaEnvelope,
} from "react-icons/fa";
import { SiFastapi, SiScikitlearn } from "react-icons/si";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
const handleSamePageNavigation = (path) => {
  if (window.location.pathname === path) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};
  const linkClass =
    "inline-block transition-all duration-300 hover:translate-x-1 hover:text-cyan-400";

  return (
    <footer className="relative mt-24 border-t border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-black">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Main Footer */}
        <div className="grid gap-12 lg:grid-cols-6">

          {/* Brand */}
          <div className="lg:col-span-2">

            {/* Animated Brand Logo */}
            <Link
              to="/"
              className="group inline-flex items-center text-3xl font-extrabold tracking-wide text-white"
            >
              Oil<span className="text-blue-500">Vision</span>

              {/* Digital Ambient AI */}
              <span className="relative ml-3 inline-flex items-center justify-center">

                {/* Outer orbital ring */}
                <motion.span
                  className="absolute h-10 w-14 rounded-full border border-cyan-400/40"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.08, 1],
                    opacity: [0.45, 0.8, 0.45],
                  }}
                  transition={{
                    rotate: {
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                    opacity: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />

                {/* Inner orbital ring */}
                <motion.span
                  className="absolute h-11 w-13 rounded-full border border-violet-400/25"
                  animate={{
                    rotate: -360,
                    scale: [1, 0.94, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />

                {/* Moving energy dot */}
                <motion.span
                  className="absolute h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(34,211,238,0.9)]"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    transformOrigin: "28px 0px",
                  }}
                />

                {/* AI */}
                <span className="relative bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
                  AI
                </span>

              </span>
            </Link>

            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-500">
              Intelligent Energy Analytics
            </p>

            <p className="mt-5 max-w-md leading-7 text-slate-400">
              AI-powered Oil Price Prediction platform built using
              Machine Learning, React, FastAPI and Scikit-Learn.
              Analyze market trends, predict future prices and
              explore model insights through an interactive dashboard.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex gap-4">

              <a
                href="https://github.com/Sisir-Pradhan07"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-2xl border border-slate-700 bg-slate-900 p-3 text-2xl text-slate-300 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/sisir-pradhan-b5032724a"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-2xl border border-slate-700 bg-slate-900 p-3 text-2xl text-slate-300 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
              >
                <FaLinkedin />
              </a>

            </div>
          </div>

          {/* Mobile 2-column / Desktop original layout */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:contents">

            {/* Navigation */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                Navigation
              </h3>

              <ul className="space-y-3 text-sm text-slate-400">
  <li>
    <Link
      className={linkClass}
      to="/"
      onClick={() => handleSamePageNavigation("/")}
    >
      Home
    </Link>
  </li>

  <li>
    <Link
      className={linkClass}
      to="/predict"
      onClick={() => handleSamePageNavigation("/predict")}
    >
      Predict
    </Link>
  </li>

  <li>
    <Link
      className={linkClass}
      to="/dashboard"
      onClick={() => handleSamePageNavigation("/dashboard")}
    >
      Dashboard
    </Link>
  </li>

  <li>
    <Link
      className={linkClass}
      to="/about"
      onClick={() => handleSamePageNavigation("/about")}
    >
      About
    </Link>
  </li>
</ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                Resources
              </h3>

              <ul className="space-y-3 text-sm text-slate-400">
  <li>
    <a
      href={`${import.meta.env.VITE_API_URL}/docs`}
      className={linkClass}
    >
      API Docs
    </a>
  </li>

  <li>
    <Link
      className={linkClass}
      to="/dashboard"
      onClick={() => handleSamePageNavigation("/dashboard")}
    >
      Analytics
    </Link>
  </li>

  <li>
    <Link
      className={linkClass}
      to="/predict"
      onClick={() => handleSamePageNavigation("/predict")}
    >
      Prediction
    </Link>
  </li>

  <li>
    <Link
      className={linkClass}
      to="/dashboard"
      onClick={() => handleSamePageNavigation("/dashboard")}
    >
      History
    </Link>
  </li>
</ul>
            </div>

            {/* Technology */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                Technology
              </h3>

              <div className="space-y-4 text-sm text-slate-300">

                <div className="flex items-center gap-3">
                  <FaReact className="shrink-0 text-cyan-400" />
                  React
                </div>

                <div className="flex items-center gap-3">
                  <SiFastapi className="shrink-0 text-green-400" />
                  FastAPI
                </div>

                <div className="flex items-center gap-3">
                  <SiScikitlearn className="shrink-0 text-orange-400" />
                  Scikit-Learn
                </div>

                <div className="flex items-center gap-3">
                  <FaPython className="shrink-0 text-yellow-400" />
                  Python
                </div>

              </div>
            </div>

            {/* Connect */}
            <div>
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                Connect
              </h3>

              <div className="space-y-4 text-sm">

       <a
  href="mailto:contact.oilvisionai@gmail.com"
  className="flex items-center gap-3 whitespace-nowrap text-slate-400 transition-colors duration-300 hover:text-cyan-400"
>
  <FaEnvelope className="shrink-0 text-cyan-400" />

  <span className="text-sm lg:-translate-y-0.5">
    contact.oilvisionai@gmail.com
  </span>
</a>
                <a
                  href="https://github.com/Sisir-Pradhan07"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-slate-400 transition-colors duration-300 hover:text-cyan-400"
                >
                  <FaGithub className="shrink-0 text-slate-300" />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/sisir-pradhan-b5032724a"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-slate-400 transition-colors duration-300 hover:text-cyan-400"
                >
                  <FaLinkedin className="shrink-0 text-blue-400" />
                  LinkedIn
                </a>

              </div>
            </div>

          </div>
        </div>

        {/* Product Statement */}
        <div className="mt-10 rounded-2xl border border-blue-500/10 bg-blue-500/[0.03] px-6 py-5">

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm font-medium text-slate-300">
                Machine Learning • Market Intelligence • Data Analytics
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Built to explore how machine learning can be applied to
                real-world economic data.
              </p>
            </div>

           <Link
  to="/predict"
  onClick={() => handleSamePageNavigation("/predict")}
  className="shrink-0 text-sm font-semibold text-blue-400 transition-colors duration-300 hover:text-cyan-300"
>
  Start Predicting →
</Link>

          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 border-t border-slate-800 pt-6">

          <p className="mx-auto max-w-5xl text-center text-xs leading-6 text-slate-500">

            <span className="font-semibold text-slate-300">
              Disclaimer:
            </span>{" "}

            OilVision AI provides AI-based oil price predictions for
            educational, research, and demonstration purposes only.
            Predictions are generated using machine learning models and
            may not reflect actual market conditions. This platform
            should not be used as financial or investment advice.

          </p>

        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-5 border-t border-slate-800 pt-7 md:flex-row">

          <p className="text-center text-xs text-slate-500 md:text-left">
            © {new Date().getFullYear()} OilVision AI.
            <span className="mx-2 text-slate-700">•</span>
            Built by Sisir Pradhan.
          </p>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-2 rounded-full border border-cyan-500 bg-cyan-500/10 px-5 py-2.5 text-sm text-cyan-300 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-cyan-500 hover:text-white"
          >
            <FaArrowUp />
            Back to Top
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;