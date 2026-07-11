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
    <footer className="mt-24 border-t border-slate-800 bg-slate-950">

      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Top */}

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}

          <div className="lg:col-span-2">

            <h2 className="text-3xl font-bold text-white">
              OilVision AI
            </h2>

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
                className="rounded-xl bg-slate-900 p-3 text-2xl text-slate-300 transition hover:bg-blue-600 hover:text-white"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl bg-slate-900 p-3 text-2xl text-slate-300 transition hover:bg-blue-600 hover:text-white"
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
                <Link className="hover:text-blue-400" to="/">
                  Home
                </Link>
              </li>

              <li>
                <Link className="hover:text-blue-400" to="/predict">
                  Predict
                </Link>
              </li>

              <li>
                <Link className="hover:text-blue-400" to="/dashboard">
                  Dashboard
                </Link>
              </li>

              <li>
                <Link className="hover:text-blue-400" to="/about">
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
                <a href="http://127.0.0.1:8000/docs" className="hover:text-blue-400">
                  API Docs
                </a>
              </li>

              <li>
                <Link to="/dashboard" className="hover:text-blue-400">
                  Analytics
                </Link>
              </li>

              <li>
                <Link to="/predict" className="hover:text-blue-400">
                  Prediction
                </Link>
              </li>

              <li>
                <Link to="/dashboard" className="hover:text-blue-400">
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

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">

          <p className="text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} OilVision AI. Built by
            Sisir Pradhan.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
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