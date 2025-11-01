import { motion } from "motion/react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { FileText, Shield, GitBranch, MessageCircle, Stethoscope, TrendingUp } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

const pipelineSteps = [
  {
    step: 1,
    title: "Intake",
    icon: FileText,
    description: "AI-guided dynamic assessment adapts to symptoms, goals, and insurance",
    metric: "94% accuracy · 2.3s response time",
    gradient: "from-teal-600/40 via-teal-500/30 to-transparent",
    accentColor: "teal",
  },
  {
    step: 2,
    title: "Match",
    icon: GitBranch,
    description: "ML-based routing engine connects patients to optimal care modules",
    metric: "92% routing precision · 0.5s response time",
    gradient: "from-cyan-600/40 via-cyan-500/30 to-transparent",
    accentColor: "cyan",
  },
  {
    step: 3,
    title: "Care",
    icon: MessageCircle,
    description: "Persistent AI companion supports patients across sessions and devices",
    metric: "8.7k req/min · 1.2s response time",
    gradient: "from-blue-600/40 via-blue-500/30 to-transparent",
    accentColor: "blue",
  },
  {
    step: 4,
    title: "Triage",
    icon: Shield,
    description: "Real-time risk detection and escalation protocols",
    metric: "99% detection rate · 0.3s response time",
    gradient: "from-indigo-600/40 via-indigo-500/30 to-transparent",
    accentColor: "indigo",
  },
  {
    step: 5,
    title: "Documentation",
    icon: Stethoscope,
    description: "Real-time SOAP note generation with care plan synthesis",
    metric: "97% accuracy · 0.8s response time",
    gradient: "from-violet-600/40 via-violet-500/30 to-transparent",
    accentColor: "violet",
  },
  {
    step: 6,
    title: "Engagement",
    icon: TrendingUp,
    description: "Progress tracking and personalized prompts from 10,000+ clinical templates",
    metric: "96% adherence insight · 1.4s response time",
    gradient: "from-purple-600/40 via-purple-500/30 to-transparent",
    accentColor: "purple",
  },
];

const flowSummary = [
  { name: "Intake", icon: FileText, summary: "Adaptive assessment flows", metric: "94%" },
  { name: "Match", icon: GitBranch, summary: "ML-based patient routing", metric: "92%" },
  { name: "Care", icon: MessageCircle, summary: "AI companion support", metric: "8.7k/min" },
  { name: "Triage", icon: Shield, summary: "Risk detection & escalation", metric: "99%" },
  { name: "Documentation", icon: Stethoscope, summary: "SOAP note generation", metric: "97%" },
  { name: "Engagement", icon: TrendingUp, summary: "Progress & prompts", metric: "96%" },
];

export function HowItWorks() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24">
      {/* Page Header */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.05) 0%, transparent 50%)" }} />
        
        {/* Animated neural pulse */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.1) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white mb-4">How NuZephyr Works</h1>
            <p className="text-gray-400 text-lg max-w-4xl mx-auto">
              Six modular steps. One intelligent pipeline. Every moment powered by clinical-grade AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Modular AI Pipeline (Autoplay Swiper) */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 6000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {pipelineSteps.map((step, index) => (
                <CarouselItem key={step.step}>
                  <PipelineSlide step={step} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* Section 2: Pipeline Summary (Static Flow) */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8 text-center"
          >
            Complete Pipeline Overview
          </motion.h2>

          {/* Desktop Horizontal Flow */}
          <div className="hidden lg:flex items-center justify-between mb-12">
            {flowSummary.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="relative group cursor-pointer"
                  >
                    <Card
                      className="w-32 h-32 flex flex-col items-center justify-center p-4 border-0 relative overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(100, 255, 218, 0.2)",
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/0 to-cyan-400/0 group-hover:from-teal-400/10 group-hover:to-cyan-400/10 transition-all duration-300" />
                      <Icon className="w-8 h-8 text-teal-400 mb-2 relative z-10" />
                      <span className="text-white text-sm text-center relative z-10">{item.name}</span>
                      <Badge className="bg-teal-400/20 text-teal-300 border-teal-400/30 text-xs mt-2 relative z-10">
                        {item.metric}
                      </Badge>
                    </Card>

                    {/* Tooltip on hover */}
                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none w-48 z-20">
                      <Card className="p-3 border-0 text-center" style={{
                        background: "linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(100, 255, 218, 0.3)",
                      }}>
                        <p className="text-gray-300 text-xs">{item.summary}</p>
                      </Card>
                    </div>
                  </motion.div>

                  {index < flowSummary.length - 1 && (
                    <motion.div
                      className="w-12 h-1 mx-2 bg-gradient-to-r from-teal-400 to-cyan-400 relative overflow-hidden"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-white"
                        animate={{
                          x: ["-100%", "200%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        style={{ width: "50%" }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Vertical Flow */}
          <div className="lg:hidden space-y-4">
            {flowSummary.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className="p-4 border-0 flex items-center gap-4"
                    style={{
                      background: "linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(100, 255, 218, 0.2)",
                    }}
                  >
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 flex-shrink-0">
                      <Icon className="w-8 h-8 text-teal-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white mb-1">{item.name}</h3>
                      <p className="text-gray-400 text-sm mb-2">{item.summary}</p>
                      <Badge className="bg-teal-400/20 text-teal-300 border-teal-400/30 text-xs">
                        {item.metric}
                      </Badge>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function PipelineSlide({ step, index }: { step: typeof pipelineSteps[0]; index: number }) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative w-full h-[600px] rounded-2xl overflow-hidden"
    >
      {/* Background with gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${step.gradient}`}
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.6) 100%)`,
        }}
      />

      {/* Animated neural network pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(100, 255, 218, 0.3) 0%, transparent 50%),
                           radial-gradient(circle at 80% 50%, rgba(34, 211, 238, 0.3) 0%, transparent 50%)`,
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-teal-400/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Central icon */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div
          className={`w-32 h-32 rounded-2xl bg-gradient-to-br from-${step.accentColor}-400/20 to-${step.accentColor}-600/20 flex items-center justify-center border border-${step.accentColor}-400/30 backdrop-blur-md`}
          style={{
            boxShadow: `0 0 60px rgba(100, 255, 218, 0.4)`,
          }}
        >
          <Icon className="w-16 h-16 text-teal-400" />
        </div>
      </motion.div>

      {/* Overlay Panel */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute bottom-8 left-8 right-8 md:left-12 md:right-auto md:max-w-xl"
      >
        <Card
          className="p-8 border-0"
          style={{
            background: "linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.9) 100%)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(100, 255, 218, 0.3)",
            boxShadow: "0 0 40px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Badge className={`bg-${step.accentColor}-400/20 text-${step.accentColor}-300 border-${step.accentColor}-400/30`}>
              Step {step.step}
            </Badge>
            <motion.div
              className="h-px flex-1 bg-gradient-to-r from-teal-400/50 to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </div>

          <h2 className="text-white mb-3">{step.title}</h2>
          
          <p className="text-gray-300 mb-4">{step.description}</p>

          <div className="flex items-center gap-4 mb-6">
            <Badge className="bg-teal-400/10 text-teal-300 border-teal-400/20">
              {step.metric}
            </Badge>
          </div>

          <Button
            variant="outline"
            className="border-teal-400/30 text-teal-400 hover:bg-teal-400/10"
            onClick={() => window.location.hash = "modules"}
          >
            See Module
          </Button>
        </Card>
      </motion.div>

      {/* Step indicator */}
      <div className="absolute top-8 right-8">
        <div className="flex gap-2">
          {pipelineSteps.map((_, i) => (
            <motion.div
              key={i}
              className={`h-1 rounded-full ${i === index ? 'w-8 bg-teal-400' : 'w-4 bg-gray-600'}`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
