import { motion } from "framer-motion";

function AboutHero() {
  return (
    <section className="px-6 pt-36 pb-24">
      <div className="mx-auto max-w-5xl text-center">

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="text-6xl font-black text-white"
        >
          About OilVision AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .15 }}
          className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400"
        >
          OilVision AI is a machine learning project that predicts
          Indian oil prices using economic indicators and presents
          the results through an interactive web application.
        </motion.p>

      </div>
    </section>
  );
}

export default AboutHero;