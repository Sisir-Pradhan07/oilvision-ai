import { motion } from "framer-motion";

const particles = [
  {
    path: [
      ["8%", "22%"],
      ["24%", "12%"],
      ["38%", "24%"],
      ["55%", "15%"],
      ["72%", "28%"],
      ["88%", "18%"],
    ],
    duration: 18,
    delay: 0,
  },
  {
    path: [
      ["92%", "35%"],
      ["76%", "25%"],
      ["61%", "39%"],
      ["45%", "28%"],
      ["29%", "42%"],
      ["10%", "32%"],
    ],
    duration: 21,
    delay: 2,
  },
  {
    path: [
      ["15%", "55%"],
      ["31%", "45%"],
      ["48%", "57%"],
      ["66%", "44%"],
      ["84%", "58%"],
    ],
    duration: 17,
    delay: 1,
  },
  {
    path: [
      ["85%", "70%"],
      ["68%", "60%"],
      ["52%", "73%"],
      ["34%", "62%"],
      ["14%", "78%"],
    ],
    duration: 20,
    delay: 4,
  },
  {
    path: [
      ["5%", "88%"],
      ["23%", "72%"],
      ["42%", "84%"],
      ["61%", "68%"],
      ["80%", "82%"],
      ["96%", "70%"],
    ],
    duration: 23,
    delay: 3,
  },
  {
    path: [
      ["20%", "8%"],
      ["36%", "22%"],
      ["53%", "10%"],
      ["69%", "20%"],
      ["91%", "8%"],
    ],
    duration: 19,
    delay: 5,
  },
  {
    path: [
      ["78%", "92%"],
      ["62%", "78%"],
      ["45%", "90%"],
      ["27%", "76%"],
      ["8%", "92%"],
    ],
    duration: 22,
    delay: 2,
  },
  {
    path: [
      ["2%", "45%"],
      ["18%", "35%"],
      ["37%", "48%"],
      ["57%", "35%"],
      ["76%", "48%"],
      ["98%", "38%"],
    ],
    duration: 25,
    delay: 6,
  },
];

const dataStreams = [
  { top: "18%", duration: 12, delay: 0 },
  { top: "31%", duration: 15, delay: 3 },
  { top: "47%", duration: 11, delay: 1 },
  { top: "64%", duration: 17, delay: 5 },
  { top: "79%", duration: 13, delay: 2 },
];

function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* =========================================================
          AMBIENT AI LIGHT
      ========================================================= */}

      <motion.div
        className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-blue-600/[0.07] blur-[160px]"
        animate={{
          x: [0, 120, -40, 0],
          y: [0, 80, 30, 0],
          scale: [1, 1.12, 0.95, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full bg-cyan-500/[0.06] blur-[160px]"
        animate={{
          x: [0, -100, 40, 0],
          y: [0, -70, -20, 0],
          scale: [1, 1.1, 0.96, 1],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================================
          SUBTLE MOVING GRID
      ========================================================= */}

      <motion.div
        className="absolute -inset-[100px] opacity-[0.035]"
        animate={{
          x: [0, 60, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(59,130,246,0.35) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(59,130,246,0.35) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* =========================================================
          MOVING DATA STREAMS
      ========================================================= */}

      {dataStreams.map((stream, index) => (
        <motion.div
          key={`stream-${index}`}
          className="absolute left-0 h-px w-[180px] bg-gradient-to-r from-transparent via-blue-400/25 to-transparent"
          style={{ top: stream.top }}
          animate={{
            x: ["-200px", "calc(100vw + 200px)"],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: stream.duration,
            delay: stream.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* =========================================================
          FLOWING AI PARTICLES
      ========================================================= */}

      {particles.map((particle, index) => (
        <motion.div
          key={`particle-${index}`}
          className="absolute left-0 top-0"
          animate={{
            left: particle.path.map((point) => point[0]),
            top: particle.path.map((point) => point[1]),
            opacity: [0, 0.8, 0.65, 0.8, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="relative -translate-x-1/2 -translate-y-1/2">

            {/* Glow */}
            <div className="absolute -inset-2 rounded-full bg-cyan-400/10 blur-md" />

            {/* Particle */}
            <div className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.7)]" />

          </div>
        </motion.div>
      ))}

      {/* =========================================================
          SMALL SECONDARY PARTICLES
      ========================================================= */}

      <motion.div
        className="absolute left-[20%] top-[30%] h-1 w-1 rounded-full bg-blue-300/50"
        animate={{
          x: [0, 90, 170, 100, 0],
          y: [0, -30, 20, 70, 0],
          opacity: [0, 0.6, 0.3, 0.6, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-[70%] top-[40%] h-1 w-1 rounded-full bg-cyan-300/50"
        animate={{
          x: [0, -80, -150, -70, 0],
          y: [0, 50, 10, -40, 0],
          opacity: [0, 0.7, 0.3, 0.7, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute left-[45%] top-[75%] h-1 w-1 rounded-full bg-blue-400/50"
        animate={{
          x: [0, 70, 130, 60, 0],
          y: [0, -60, -20, 50, 0],
          opacity: [0, 0.6, 0.25, 0.6, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =========================================================
          AI SCANNING LIGHT
      ========================================================= */}

      <motion.div
        className="absolute left-[-20%] top-0 h-full w-[20%] bg-gradient-to-r from-transparent via-blue-400/[0.025] to-transparent blur-2xl"
        animate={{
          x: ["0vw", "140vw"],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
      />

    </div>
  );
}

export default AnimatedBackground;