import { Link } from "react-router-dom";
import PrimaryButton from "../ui/PrimaryButton";

function AboutCTA() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">

        <h2 className="text-4xl font-bold text-white">
          Ready to Try OilVision AI?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-slate-400">
          Explore the prediction system, analyze historical
          trends, and experience how machine learning can be
          applied to real-world economic data.
        </p>

        <div className="mt-10">
          <Link to="/predict">
            <PrimaryButton>
              Start Predicting
            </PrimaryButton>
          </Link>
        </div>

      </div>
    </section>
  );
}

export default AboutCTA;