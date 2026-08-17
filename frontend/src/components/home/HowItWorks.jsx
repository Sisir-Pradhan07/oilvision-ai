import { motion } from "framer-motion";
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
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className="relative"
              >

                {/* CARD */}
                <div className="group relative h-full overflow-visible rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl">

                  {/* Very subtle active card glow */}
                  <motion.div
                    className="pointer-events-none absolute inset-0 -z-10 rounded-3xl"
                    animate={{
                      opacity: [0.15, 0.35, 0.15],
                    }}
                    transition={{
                      duration: 4,
                      delay: index * 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      boxShadow:
                        "0 0 55px rgba(59,130,246,0.10)",
                    }}
                  />

                  {/* ICON */}
<motion.div
  className="relative mb-6 inline-flex rounded-2xl bg-blue-500/10 p-4 text-blue-400"
  animate={{
    backgroundColor: [
      "rgba(59,130,246,0.10)",
      "rgba(59,130,246,0.14)",
      "rgba(59,130,246,0.20)",
      "rgba(59,130,246,0.14)",
      "rgba(59,130,246,0.10)",
    ],

    boxShadow: [
      "0 0 0px rgba(59,130,246,0)",
      "0 0 8px rgba(59,130,246,0.08)",
      "0 0 28px rgba(59,130,246,0.30)",
      "0 0 8px rgba(59,130,246,0.08)",
      "0 0 0px rgba(59,130,246,0)",
    ],

    color: [
      "rgb(96,165,250)",
      "rgb(96,165,250)",
      "rgb(103,232,249)",
      "rgb(96,165,250)",
      "rgb(96,165,250)",
    ],
  }}
  transition={{
    duration: 4.5,
    delay: index * 1.2,
    repeat: Infinity,
    ease: "easeInOut",
    times: [0, 0.25, 0.5, 0.75, 1],
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
                </div>

                {/* NEURAL CONNECTION */}
                {index < steps.length - 1 && (
                  <NeuralConnection delay={index * 1.2} />
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

function NeuralConnection({ delay }) {
  return (
    <div className="pointer-events-none absolute left-[calc(100%+4px)] top-[92px] z-20 hidden h-20 w-12 xl:block">

      <svg
        viewBox="0 0 48 80"
        className="h-full w-full overflow-visible"
        fill="none"
      >

        {/* -------------------------------------------------
            SOFT OUTER GLOW
        ------------------------------------------------- */}

        <motion.path
          d="M 0 40
             C 10 40, 12 15, 24 15
             C 36 15, 36 40, 48 40"
          stroke="#2563EB"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.12"
          filter="blur(6px)"
          animate={{
            opacity: [0.08, 0.22, 0.08],
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* -------------------------------------------------
            MAIN NEURAL PATH
        ------------------------------------------------- */}

        <motion.path
          d="M 0 40
             C 10 40, 12 15, 24 15
             C 36 15, 36 40, 48 40"
          stroke="#334155"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        <motion.path
          d="M 0 40
             C 10 40, 12 15, 24 15
             C 36 15, 36 40, 48 40"
          stroke="url(#neuralGradient)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeDasharray="8 14"
          animate={{
            strokeDashoffset: [0, -44],
          }}
          transition={{
            duration: 2.2,
            delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* -------------------------------------------------
            LOWER NEURAL BRANCH
        ------------------------------------------------- */}

        <motion.path
          d="M 0 40
             C 10 40, 12 65, 24 65
             C 36 65, 36 40, 48 40"
          stroke="#1E293B"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        <motion.path
          d="M 0 40
             C 10 40, 12 65, 24 65
             C 36 65, 36 40, 48 40"
          stroke="#2563EB"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="5 18"
          animate={{
            strokeDashoffset: [0, -46],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: 3,
            delay: delay + 0.3,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* -------------------------------------------------
            NEURAL NODE
        ------------------------------------------------- */}

        <motion.circle
          cx="24"
          cy="15"
          r="2.5"
          fill="#3B82F6"
          animate={{
            r: [2, 3.2, 2],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: 3,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.circle
          cx="24"
          cy="65"
          r="2"
          fill="#22D3EE"
          animate={{
            r: [1.5, 2.8, 1.5],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 3.5,
            delay: delay + 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* -------------------------------------------------
            ENERGY SIGNAL
        ------------------------------------------------- */}

        <motion.circle
          r="2.2"
          fill="#67E8F9"
          filter="url(#signalGlow)"
          animate={{
            cx: [0, 12, 24, 36, 48],
            cy: [40, 40, 15, 40, 40],
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            duration: 2.4,
            delay: delay + 0.7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* -------------------------------------------------
            GRADIENTS / FILTERS
        ------------------------------------------------- */}

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

      </svg>
    </div>
  );
}

export default HowItWorks;