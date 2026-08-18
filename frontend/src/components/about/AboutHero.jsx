import { motion } from "framer-motion";

function AboutHero() {
  return (
    <section className="px-6 pt-24 pb-24">
      <div className="mx-auto max-w-5xl text-center">

        <motion.h1
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.55,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="text-4xl font-black text-white sm:text-5xl md:text-6xl"
>
          About OilVision AI
        </motion.h1>

        <motion.p
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    delay: 0.12,
    duration: 0.55,
    ease: [0.22, 1, 0.36, 1],
  }}
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