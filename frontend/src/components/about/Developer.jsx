import GlassCard from "../ui/GlassCard";

function Developer() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <GlassCard className="p-10 text-center">

          <h2 className="text-3xl font-bold text-white">
            About the Developer
          </h2>

          <h3 className="mt-8 text-2xl font-semibold text-blue-400">
            Sisir Pradhan
          </h3>

          <p className="mt-4 leading-8 text-slate-300">
            I am a B.Tech student with a strong interest in
            Machine Learning and Data Analytics. OilVision AI
            was built to apply machine learning concepts to a
            real-world prediction problem while creating an
            intuitive interface for exploring model predictions
            and market insights.
          </p>

        </GlassCard>
      </div>
    </section>
  );
}

export default Developer;