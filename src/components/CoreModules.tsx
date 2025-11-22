import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { FileText, Stethoscope, Brain, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const allModules = [
  {
    name: "ZephyrInTake",
    icon: FileText,
    category: "Provider Solution",
    description: "Adaptive intake flows based on symptoms, goals, and insurance",
    stats: ["10,000+ templates", "99% accuracy", "Multi-language"],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-950 to-cyan-950",
  },
  {
    name: "ZephyrNotes",
    icon: Stethoscope,
    category: "Provider Solution",
    description: "Real-time SOAP documentation with care plan synthesis",
    stats: ["Auto-generated notes", "EHR integration", "Compliance-ready"],
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-950 to-teal-950",
  },
  {
    name: "ZephyrMind",
    icon: Brain,
    category: "Provider Solution",
    description: "AI triage and smart routing for provider messages",
    stats: ["Risk detection", "Smart routing", "Priority flagging"],
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-950 to-pink-950",
  },
  {
    name: "Zee-AI Companion",
    icon: MessageCircle,
    category: "Patient Solution",
    description: "Persistent, multilingual support across sessions and devices",
    stats: ["24/7 availability", "50+ languages", "Context-aware"],
    gradient: "from-orange-500 to-rose-500",
    bgGradient: "from-orange-950 to-rose-950",
  },
];

export function CoreModules() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const scrollPrev = useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = useCallback(() => {
    api?.scrollNext();
  }, [api]);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative w-full overflow-hidden py-20" style={{ background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)" }} id="modules">
      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Badge className="bg-teal-500/20 text-teal-300 border-teal-500/30 mb-4">
            Platform Modules
          </Badge>
          <h2 className="text-white mb-4">Core Modules</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive AI infrastructure for every care touchpoint</p>
        </motion.div>
      </div>

      {/* Full-width Carousel */}
      <div className="relative w-full">
        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {allModules.map((module, index) => (
              <CarouselItem key={module.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <ModuleCard module={module} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-teal-400 transition-colors" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-teal-400 transition-colors" />
          </button>
        </Carousel>

        {/* Progress Dots */}
        <div className="flex items-center justify-center gap-3 mt-8 relative z-10">
          {allModules.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className="group"
            >
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "bg-teal-400 w-8"
                    : "bg-white/30 hover:bg-white/60 w-2"
                }`}
                style={
                  current === index
                    ? { boxShadow: "0 0 10px rgba(100, 255, 218, 0.6)" }
                    : {}
                }
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleCard({ module, index }: { module: typeof allModules[0]; index: number }) {
  const Icon = module.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="h-full"
    >
      <Card
        className="p-8 border-0 h-full relative overflow-hidden group cursor-pointer"
        style={{
          background: `linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%)`,
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(100, 255, 218, 0.2)",
        }}
      >
        {/* Animated gradient background */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${module.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
        />
        
        {/* Glow effect on hover */}
        <motion.div
          className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${module.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
        />
        
        <div className="relative z-10">
          {/* Category badge */}
          <Badge className={`bg-gradient-to-r ${module.gradient} text-white border-0 mb-4`}>
            {module.category}
          </Badge>

          {/* Icon with gradient background */}
          <motion.div
            className="mb-6"
            whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
          >
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.gradient} p-0.5`}>
              <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center">
                <Icon className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>

          <h3 className="text-white mb-3 text-2xl">{module.name}</h3>
          <p className="text-gray-300 mb-6 text-base leading-relaxed">{module.description}</p>

          {/* Stats with enhanced styling */}
          <div className="space-y-2">
            {module.stats.map((stat: string) => (
              <div
                key={stat}
                className="flex items-center gap-2 text-sm"
              >
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${module.gradient}`} />
                <span className="text-gray-300">{stat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${module.gradient}`}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "left" }}
        />
      </Card>
    </motion.div>
  );
}
