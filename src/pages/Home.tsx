import { Hero } from "../components/Hero";
import { LiveSystemSnapshot } from "../components/LiveSystemSnapshot";
import { CoreModules } from "../components/CoreModules";
import { AICapabilities } from "../components/AICapabilities";
import { HowItWorks } from "../components/HowItWorks";
import { Partners } from "../components/Partners";

export function Home() {
  return (
    <>
      <Hero />
      <LiveSystemSnapshot />
      <CoreModules />
      <AICapabilities />
      <HowItWorks />
      <Partners />
    </>
  );
}
