import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaReact,
  FaPython,
} from "react-icons/fa";
import { SiFastapi, SiScikitlearn } from "react-icons/si";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative mt-24 border-t border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950 to-black">

      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Top */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}

          <div className="lg:col-span-2">

          <h2 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-3xl font-extrabold text-transparent">
  OilVision AI
</h2>

<p className="mt-2 text-sm uppercase tracking-[0.3em] text-slate-500">
  AI Powered Forecasting Platform
</p>

            <p className="mt-4 max-w-md text-slate-400 leading-7">
              AI-powered Oil Price Prediction platform built using
              Machine Learning, React, FastAPI and Scikit-Learn.
              Analyze market trends, predict future prices and
              explore model insights through an interactive dashboard.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="https://github.com/Sisir-Pradhan07"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-700 bg-slate-900 p-3 text-2xl text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-slate-700 bg-slate-900 p-3 text-2xl text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500 hover:text-white"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Navigation
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <Link className="transition hover:translate-x-1 hover:text-cyan-400" to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link className="transition hover:translate-x-1 hover:text-cyan-400" to="/predict">
                  Predict
                </Link>
              </li>

              <li>
                <Link className="transition hover:translate-x-1 hover:text-cyan-400" to="/dashboard">
                  Dashboard
                </Link>
              </li>

              <li>
                <Link className="transition hover:translate-x-1 hover:text-cyan-400" to="/about">
                  About
                </Link>
              </li>

            </ul>

          </div>

          {/* Resources */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Resources
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <a href={`${import.meta.env.VITE_API_URL}/docs`} className="transition hover:translate-x-1 hover:text-cyan-400">
                  API Docs
                </a>
              </li>

              <li>
                <Link to="/dashboard" className="transition hover:translate-x-1 hover:text-cyan-400">
                  Analytics
                </Link>
              </li>

              <li>
                <Link to="/predict" className="transition hover:translate-x-1 hover:text-cyan-400">
                  Prediction
                </Link>
              </li>

              <li>
                <Link to="/dashboard" className="transition hover:translate-x-1 hover:text-cyan-400">
                  History
                </Link>
              </li>

            </ul>

          </div>

          {/* Technology */}

          <div>

            <h3 className="mb-5 text-lg font-semibold text-white">
              Technology
            </h3>

            <div className="space-y-4 text-slate-300">

              <div className="flex items-center gap-3">
                <FaReact className="text-cyan-400" />
                React
              </div>

              <div className="flex items-center gap-3">
                <SiFastapi className="text-green-400" />
                FastAPI
              </div>

              <div className="flex items-center gap-3">
                <SiScikitlearn className="text-orange-400" />
                Scikit-Learn
              </div>

              <div className="flex items-center gap-3">
                <FaPython className="text-yellow-400" />
                Python
              </div>

            </div>

          </div>

        </div>

        {/* Disclaimer */}

<div className="mt-16 border-t border-slate-800 pt-6">
  <p className="mx-auto max-w-4xl text-center text-sm leading-6 text-slate-500">
    <span className="font-semibold text-slate-300">Disclaimer:</span>{" "}
    OilVision AI provides AI-based oil price predictions for educational,
    research, and demonstration purposes only. Predictions are generated
    using machine learning models and may not reflect actual market
    conditions. This platform should not be used as financial or investment
    advice.
  </p>
</div>

{/* Bottom */}

<div className="mt-8 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">

          <p className="text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} OilVision AI. Built by
            Sisir Pradhan.
          </p>

          <button
            onClick={scrollToTop}
           className="flex items-center gap-2 rounded-full border border-cyan-500 bg-cyan-500/10 px-5 py-3 text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:text-white"
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