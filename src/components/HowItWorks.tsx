import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    step: "Step 1: Intake",
    title: "Intake",
    description: "AI-guided dynamic assessment adapts to symptoms, goals, and insurance",
    metric: "94% accuracy · 2.3s response time",
    background: "https://images.unsplash.com/photo-1758691462651-611d730c5272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGluaWNhbCUyMGhlYWx0aGNhcmUlMjBzZXR0aW5nfGVufDF8fHx8MTc2MTkzNDUwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    step: "Step 2: Match",
    title: "Match",
    description: "ML-based routing engine connects patients to optimal care modules",
    metric: "92% routing precision · 0.5s response time",
    background: "https://images.unsplash.com/photo-1691807714620-2c540def3257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbmV0d29yayUyMGNvbm5lY3Rpb258ZW58MXx8fHwxNzYxNDQzMTg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    step: "Step 3: Care",
    title: "Care",
    description: "Persistent AI companion supports patients across sessions and devices",
    metric: "8.7k req/min · 1.2s response time",
    background: "https://images.unsplash.com/photo-1645066928295-2506defde470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwd2hpdGUlMjBjb2F0JTIwY29udmVyc2F0aW9ufGVufDF8fHx8MTc2MjAwMTQ5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    step: "Step 4: Triage",
    title: "Triage",
    description: "Real-time risk detection and escalation protocols",
    metric: "99% detection rate · 0.3s response time",
    background: "https://images.unsplash.com/photo-1758404958502-44f156617bae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdHJpYWdlJTIwZW1lcmdlbmN5JTIwaGVhbHRoY2FyZXxlbnwxfHx8fDE3NjE0NDMxODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    step: "Step 5: Documentation",
    title: "Documentation",
    description: "Real-time SOAP note generation with care plan synthesis",
    metric: "97% accuracy · 0.8s response time",
    background: "https://images.unsplash.com/photo-1758691461990-03b49d969495?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZG9jdW1lbnRhdGlvbiUyMHdyaXRpbmd8ZW58MXx8fHwxNzYxNDQzMTkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    step: "Step 6: Engagement",
    title: "Engagement",
    description: "Progress tracking and personalized prompts from 10,000+ clinical templates",
    metric: "96% adherence insight · 1.4s response time",
    background: "https://images.unsplash.com/photo-1758875568756-37a9c5c1a4f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGglMjB0cmFja2luZyUyMHByb2dyZXNzJTIwd2VsbG5lc3N8ZW58MXx8fHwxNzYxNDQzMTkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function HowItWorks() {
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
    <section className="relative w-full overflow-hidden bg-slate-950" id="how-it-works">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center py-16 px-6 relative z-10"
      >
        <h2 className="text-white mb-4">How It Works</h2>
        <p className="text-gray-400">End-to-end intelligent care workflow</p>
      </motion.div>

      <div className="relative">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 6000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-0">
            {slides.map((slide, index) => (
              <CarouselItem key={slide.step} className="pl-0">
                <div className="relative w-full h-[600px] md:h-[700px]">
                  {/* Background Image with lighter overlay */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700"
                    style={{
                      backgroundImage: `url(${slide.background})`,
                    }}
                  >
                    {/* Much lighter gradient overlay - 50% instead of 90% */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-slate-950/30 to-transparent" />
                  </div>

                  {/* Content Overlay */}
                  <div className="relative h-full flex items-center px-6 md:px-12 lg:px-24">
                    <motion.div
                      key={`content-${index}`}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="max-w-2xl"
                    >
                      {/* Dark glassmorphic panel */}
                      <div
                        className="p-8 md:p-10 rounded-3xl relative overflow-hidden"
                        style={{
                          background: "rgba(15, 23, 42, 0.85)",
                          backdropFilter: "blur(20px)",
                          border: "1px solid rgba(100, 255, 218, 0.2)",
                          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), 0 0 60px rgba(100, 255, 218, 0.1)",
                        }}
                      >
                        {/* Animated Border Glow */}
                        <motion.div
                          className="absolute inset-0 rounded-3xl pointer-events-none"
                          style={{
                            background: "linear-gradient(90deg, rgba(100, 255, 218, 0) 0%, rgba(100, 255, 218, 0.3) 50%, rgba(100, 255, 218, 0) 100%)",
                          }}
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />

                        <div className="relative z-10">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="inline-block px-4 py-1 rounded-full bg-teal-500 text-white text-sm mb-4 shadow-lg"
                          >
                            {slide.step}
                          </motion.div>

                          <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-white mb-4"
                          >
                            {slide.title}
                          </motion.h3>

                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-gray-300 text-lg mb-6 leading-relaxed"
                          >
                            {slide.description}
                          </motion.p>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex items-center gap-2 text-teal-400 mb-6"
                          >
                            <motion.div
                              className="w-2 h-2 rounded-full bg-teal-400"
                              animate={{
                                scale: [1, 1.5, 1],
                                opacity: [1, 0.5, 1],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                            />
                            <span className="font-medium">{slide.metric}</span>
                          </motion.div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                          >
                            <Button 
                              className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-0 shadow-lg"
                              onClick={() => window.location.hash = "modules"}
                            >
                              See Module
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Custom Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 hover:shadow-lg transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-teal-400 transition-colors" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 hover:shadow-lg transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-teal-400 transition-colors" />
          </button>

          {/* Progress Dots */}
          <div className="absolute bottom-8 left-0 right-0 z-20 flex items-center justify-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className="group"
              >
                <div
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index
                      ? "bg-teal-400 w-8 shadow-lg shadow-teal-400/50"
                      : "bg-white/40 hover:bg-white/70 w-2"
                  }`}
                />
              </button>
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
}
