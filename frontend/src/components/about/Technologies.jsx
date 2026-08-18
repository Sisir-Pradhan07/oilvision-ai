import { motion } from "framer-motion";
import GlassCard from "../ui/GlassCard";

const technologies = [
  "Python",
  "Scikit-Learn",
  "Pandas",
  "NumPy",
  "FastAPI",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "Recharts",
];

function Technologies() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-6xl">

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-8 text-center text-3xl font-bold text-white"
        >
          Technologies Used
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -4,
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
            >
              <GlassCard className="p-6 text-center transition-colors duration-300 hover:border-blue-500/40">
                <p className="text-lg font-semibold text-white">
                  {tech}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Technologies;