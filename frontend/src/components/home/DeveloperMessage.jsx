import GlassCard from "../ui/GlassCard";
import { Quote } from "lucide-react";

function DeveloperMessage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <GlassCard className="relative overflow-hidden p-10">

          {/* Background Glow */}
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

          {/* Quote Icon */}
          <Quote
            size={34}
            className="text-blue-400"
          />

          {/* Accent Line */}
          <div className="mt-3 mb-8 h-1 w-20 rounded-full bg-blue-500" />

          {/* Heading */}
          <h2 className="mb-8 text-4xl font-black text-white">
           Developer's Note..
          </h2>

          {/* Paragraph 1 */}
          <p className="text-lg italic leading-9 text-slate-300">
            <span className="font-semibold not-italic text-white">
              OilVision AI
            </span>{" "}
            began as a machine learning project to better understand how
            global economic indicators influence India's oil prices. My goal
            was not only to build an{" "}
            <span className="font-semibold not-italic text-white">
              accurate prediction model
            </span>
            , but also to transform it into a{" "}
            <span className="font-semibold not-italic text-white">
              complete analytics application
            </span>{" "}
            that demonstrates the full workflow—from{" "}
            <span className="font-semibold not-italic text-white">
              data preprocessing
            </span>{" "}
            and{" "}
            <span className="font-semibold not-italic text-white">
              model training
            </span>{" "}
            to{" "}
            <span className="font-semibold not-italic text-white">
              deployment
            </span>{" "}
            and{" "}
            <span className="font-semibold not-italic text-white">
              interactive visualization
            </span>
            .
          </p>

          {/* Paragraph 2 */}
          <p className="mt-8 text-lg italic leading-9 text-slate-300">
            I hope this project demonstrates how machine learning can be
            presented in a{" "}
            <span className="font-semibold not-italic text-white">
              practical
            </span>
            ,{" "}
            <span className="font-semibold not-italic text-white">
              user-friendly
            </span>{" "}
            and{" "}
            <span className="font-semibold not-italic text-white">
              real-world
            </span>{" "}
            way for analysis and informed decision-making.
          </p>

          {/* Signature */}
          <div className="mt-10 border-t border-slate-800 pt-6">
            <h3 className="text-2xl font-bold text-white">
              Sisir Pradhan
            </h3>

            <p className="mt-2 text-slate-400">
              Machine Learning & Data Analytics
            </p>

            <p className="mt-1 text-sm italic text-slate-500">
              Building practical AI solutions through Machine Learning.
            </p>
          </div>

        </GlassCard>
      </div>
    </section>
  );
}

export default DeveloperMessage;