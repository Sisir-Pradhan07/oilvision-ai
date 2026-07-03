import { motion } from "framer-motion";

const stats = [
  {
    value: "98.59%",
    label: "R² Score",
  },
  {
    value: "210.52",
    label: "RMSE",
  },
  {
    value: "160.49",
    label: "MAE",
  },
  {
    value: "5",
    label: "Prediction Features",
  },
];

function Stats() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mb-14 text-center"
        >

          <h2 className="text-4xl font-bold text-white">
            Model Performance
          </h2>

          <p className="mt-4 text-slate-400">
            Evaluated using real-world historical oil price data.
          </p>

        </motion.div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => (

            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
              className="group rounded-3xl border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-blue-500/50"
            >

              <h3 className="text-5xl font-black text-blue-500">
                {item.value}
              </h3>

              <p className="mt-3 text-slate-400">
                {item.label}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;