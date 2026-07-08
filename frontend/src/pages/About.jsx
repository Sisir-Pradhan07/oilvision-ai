import AnimatedBackground from "../components/ui/AnimatedBackground";

import AboutHero from "../components/about/AboutHero";
import ProjectOverview from "../components/about/ProjectOverview";
import Technologies from "../components/about/Technologies";
import KeyFeatures from "../components/about/KeyFeatures";
import Roadmap from "../components/about/Roadmap";
import Developer from "../components/about/Developer";
import AboutCTA from "../components/about/AboutCTA";

function About() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <AnimatedBackground />

      <main className="relative z-10">

        <AboutHero />

        <ProjectOverview />

        <Technologies />

        <KeyFeatures />

        <Roadmap />

        <Developer />

        <AboutCTA />

      </main>
    </div>
  );
}

export default About;