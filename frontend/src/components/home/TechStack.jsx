import { motion } from "framer-motion";
import {
  Atom,
  Database,
  Server,
  Cloud,
} from "lucide-react";

const techs = [
  { name: "React", color: "text-cyan-400", icon: Atom },
  { name: "FastAPI", color: "text-green-400", icon: Server },
  { name: "Python", color: "text-yellow-400", icon: Database },
  { name: "Scikit-Learn", color: "text-orange-400", icon: Database },
  { name: "Pandas", color: "text-purple-400", icon: Database },
  { name: "NumPy", color: "text-blue-400", icon: Database },
  { name: "Tailwind CSS", color: "text-sky-400", icon: Atom },
  { name: "Framer Motion", color: "text-pink-400", icon: Atom },
  { name: "Vercel", color: "text-white", icon: Cloud },
  { name: "Render", color: "text-indigo-400", icon: Cloud },
];

function TechStack() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-white">
            Technology Stack
          </h2>

          <p className="mt-4 text-slate-400">
            Built with modern tools for machine learning and web development.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {techs.map((tech, index) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.4,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center backdrop-blur-xl"
              >
                <Icon
                  className={`mx-auto mb-4 ${tech.color}`}
                  size={34}
                />

                <h3 className="font-semibold text-white">
                  {tech.name}
                </h3>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default TechStack;