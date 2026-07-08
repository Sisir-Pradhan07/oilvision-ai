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
        <h2 className="mb-8 text-center text-3xl font-bold text-white">
          Technologies Used
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {technologies.map((tech) => (
            <GlassCard
              key={tech}
              className="p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40"
            >
              <p className="text-lg font-semibold text-white">{tech}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Technologies;