import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Features from "../components/home/Features";
import CTA from "../components/home/CTA";
import AnimatedBackground from "../components/ui/AnimatedBackground";
import HowItWorks from "../components/home/HowItWorks";
import TechStack from "../components/home/TechStack";
import DeveloperMessage from "../components/home/DeveloperMessage";

function Home() {
  return (
    <div className="relative overflow-hidden bg-slate-950">
      <AnimatedBackground />

      <div className="relative z-10">
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <TechStack />
        <DeveloperMessage />
        <CTA />
      </div>
    </div>
  );
}

export default Home;