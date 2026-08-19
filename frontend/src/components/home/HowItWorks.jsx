import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Database,
  Cpu,
  BrainCircuit,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: Database,
    title: "Market Data",
    description:
      "Collects Brent crude prices, USD/INR exchange rates, global demand and geopolitical indicators.",
  },
  {
    icon: Cpu,
    title: "Data Processing",
    description:
      "Prepares and scales the input features before sending them to the prediction model.",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    description:
      "The trained AI model analyzes market conditions and estimates the expected oil price.",
  },
  {
    icon: TrendingUp,
    title: "Forecast",
    description:
      "OilVision AI instantly generates the predicted Indian oil price with supporting insights.",
  },
];

function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  /*
   * One complete AI pipeline cycle.
   *
   * Stage 1 activates
   * → signal travels
   * → Stage 2 activates
   * → signal travels
   * → Stage 3 activates
   * → signal travels
   * → Stage 4 activates
   * → restart
   */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((previous) => (previous + 1) % steps.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white">
            How OilVision AI Works
          </h2>

          <p className="mt-4 text-slate-400">
            From market indicators to AI-powered forecasting in four simple steps.
          </p>
        </motion.div>

        {/* PIPELINE */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            const isActive = activeStep === index;

            return (
              <motion.div
                key={step.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="relative"
              >

                {/* CARD */}
                <motion.div
                  animate={{
                    borderColor: isActive
                      ? "rgba(59,130,246,0.45)"
                      : "rgba(30,41,59,1)",

                    boxShadow: isActive
                      ? "0 0 40px rgba(37,99,235,0.10)"
                      : "0 0 0px rgba(37,99,235,0)",
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                  className="group relative h-full overflow-visible rounded-3xl border bg-slate-900/60 p-8 backdrop-blur-xl"
                >

                  {/* ACTIVE CARD LIGHT */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 rounded-3xl"
                    animate={{
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{
                      duration: 0.7,
                      ease: "easeInOut",
                    }}
                    style={{
                      boxShadow:
                        "inset 0 0 35px rgba(59,130,246,0.06)",
                    }}
                  />

                  {/* ICON */}
                  <motion.div
                    className="relative mb-6 inline-flex rounded-2xl bg-blue-500/10 p-4 text-blue-400"
                    animate={{
                      scale: isActive ? 1.06 : 1,

                      backgroundColor: isActive
                        ? "rgba(59,130,246,0.18)"
                        : "rgba(59,130,246,0.10)",

                      color: isActive
                        ? "rgb(103,232,249)"
                        : "rgb(96,165,250)",

                      boxShadow: isActive
                        ? "0 0 30px rgba(34,211,238,0.28)"
                        : "0 0 0px rgba(34,211,238,0)",
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  >
                    <Icon size={28} />
                  </motion.div>

                  {/* TITLE */}
                  <h3 className="mb-3 text-xl font-semibold text-white">
                    {step.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="leading-7 text-slate-400">
                    {step.description}
                  </p>

                </motion.div>

                {/* NEURAL CONNECTION */}
                {index < steps.length - 1 && (
                  <NeuralConnection
                    active={activeStep === index}
                  />
                )}

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

/* =========================================================
   NEURAL NETWORK CONNECTION
   ========================================================= */

function NeuralConnection({ active }) {
  return (
    <div className="pointer-events-none absolute left-[calc(100%+4px)] top-[92px] z-20 hidden h-20 w-12 xl:block">
      <svg
        viewBox="0 0 48 80"
        className="h-full w-full overflow-visible"
        fill="none"
      >
        <defs>
          <linearGradient
            id="neuralGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
          >
            <stop
              offset="0%"
              stopColor="#2563EB"
              stopOpacity="0.15"
            />

            <stop
              offset="50%"
              stopColor="#22D3EE"
              stopOpacity="0.9"
            />

            <stop
              offset="100%"
              stopColor="#2563EB"
              stopOpacity="0.2"
            />
          </linearGradient>

          <filter
            id="signalGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur
              stdDeviation="3"
              result="blur"
            />

            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main neural path */}
        <path
          d="
            M 0 40
            C 10 40, 12 15, 24 15
            C 36 15, 36 40, 48 40
          "
          stroke="#334155"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.8"
        />

        {/* Lower branch */}
        <path
          d="
            M 0 40
            C 10 40, 12 65, 24 65
            C 36 65, 36 40, 48 40
          "
          stroke="#1E293B"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* ACTIVE ENERGY PATH */}
        <motion.path
          d="
            M 0 40
            C 10 40, 12 15, 24 15
            C 36 15, 36 40, 48 40
          "
          stroke="url(#neuralGradient)"
          strokeWidth={active ? 2.2 : 1}
          strokeLinecap="round"
          strokeDasharray="8 14"
          animate={{
            strokeDashoffset: active ? [0, -44] : 0,
            opacity: active ? [0.25, 1, 0.25] : 0.18,
          }}
          transition={{
            duration: active ? 1.6 : 0.5,
            repeat: active ? Infinity : 0,
            ease: "linear",
          }}
        />

        {/* LOWER ACTIVE BRANCH */}
        <motion.path
          d="
            M 0 40
            C 10 40, 12 65, 24 65
            C 36 65, 36 40, 48 40
          "
          stroke="#2563EB"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="5 18"
          animate={{
            strokeDashoffset: active ? [0, -46] : 0,
            opacity: active ? [0.15, 0.55, 0.15] : 0.08,
          }}
          transition={{
            duration: active ? 2 : 0.5,
            repeat: active ? Infinity : 0,
            ease: "linear",
          }}
        />

        {/* UPPER NEURAL NODE */}
        <circle
          cx="24"
          cy="15"
          r="2"
          fill="#3B82F6"
          opacity={active ? 1 : 0.25}
        >
          {active && (
            <>
              <animate
                attributeName="r"
                values="2;3.5;2"
                dur="1.4s"
                repeatCount="indefinite"
              />

              <animate
                attributeName="opacity"
                values="0.3;1;0.3"
                dur="1.4s"
                repeatCount="indefinite"
              />
            </>
          )}
        </circle>

        {/* LOWER NEURAL NODE */}
        <circle
          cx="24"
          cy="65"
          r="1.5"
          fill="#22D3EE"
          opacity={active ? 0.8 : 0.15}
        >
          {active && (
            <>
              <animate
                attributeName="r"
                values="1.5;3;1.5"
                dur="1.6s"
                repeatCount="indefinite"
              />

              <animate
                attributeName="opacity"
                values="0.2;0.8;0.2"
                dur="1.6s"
                repeatCount="indefinite"
              />
            </>
          )}
        </circle>

        {/* ENERGY SIGNAL */}
        <circle
          cx="0"
          cy="40"
          r="2.2"
          fill="#67E8F9"
          filter="url(#signalGlow)"
          opacity={active ? 1 : 0}
        >
          {active && (
            <>
              <animate
                attributeName="cx"
                values="0;12;24;36;48"
                dur="1.5s"
                repeatCount="indefinite"
              />

              <animate
                attributeName="cy"
                values="40;40;15;40;40"
                dur="1.5s"
                repeatCount="indefinite"
              />

              <animate
                attributeName="opacity"
                values="0;1;1;1;0"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </>
          )}
        </circle>
      </svg>
    </div>
  );
}

export default HowItWorks;