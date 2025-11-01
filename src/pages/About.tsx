import { motion } from "motion/react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Blocks, Heart, Scale, TrendingUp, Eye, Brain } from "lucide-react";

const philosophyPillars = [
  {
    title: "Modularity",
    icon: Blocks,
    description: "Composable AI systems that integrate seamlessly into any care ecosystem",
  },
  {
    title: "Clinical Integrity",
    icon: Scale,
    description: "Evidence-based models validated by healthcare providers",
  },
  {
    title: "Whole-Person Care",
    icon: Heart,
    description: "Supporting mental, physical, and social dimensions of health",
  },
  {
    title: "Scalability",
    icon: TrendingUp,
    description: "Infrastructure built to serve one patient or one million",
  },
  {
    title: "Transparency",
    icon: Eye,
    description: "Open documentation, audit trails, and explainable AI decisions",
  },
  {
    title: "Cognitive Clarity",
    icon: Brain,
    description: "Interfaces designed to reduce cognitive load, surface what matters, and guide users with precision",
  },
];

const pictures = [
  {
    category: "Founding & Team",
    images: [
      {
        url: "https://images.unsplash.com/photo-1624555130296-e551faf8969b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMG1lZXRpbmclMjBzdGFydHVwfGVufDF8fHx8MTc2MTQ0NjEwN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "Our founding team",
      },
      {
        url: "https://images.unsplash.com/photo-1664943861653-609134fb6b3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsYWJvcmF0aXZlJTIwd29ya3NwYWNlJTIwdGVjaHxlbnwxfHx8fDE3NjE0NDYxMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "Collaborative workspace",
      },
    ],
  },
  {
    category: "Product in Action",
    images: [
      {
        url: "https://images.unsplash.com/photo-1747224317356-6dd1a4a078fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NjEzNDY3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "Healthcare technology interface",
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwYW5hbHl0aWNzJTIwZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzYxOTE0NDA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "Real-time analytics dashboard",
      },
    ],
  },
  {
    category: "Mission & Culture",
    images: [
      {
        url: "https://images.unsplash.com/photo-1571946805638-3cc11f7ea1bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXNzaW9uJTIwcHVycG9zZSUyMGlubm92YXRpb258ZW58MXx8fHwxNzYxNDQ2MTA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "Driven by mission and innovation",
      },
      {
        url: "https://images.unsplash.com/photo-1758691737387-a89bb8adf768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY3VsdHVyZSUyMG9mZmljZXxlbnwxfHx8fDE3NjE0NDYxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "Building together",
      },
    ],
  },
  {
    category: "Events & Recognition",
    images: [
      {
        url: "https://images.unsplash.com/photo-1582192904915-d89c7250b235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NjE0MzU3NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "Conference presentation",
      },
      {
        url: "https://images.unsplash.com/photo-1757365225475-97bce502c296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2hpZXZlbWVudCUyMGF3YXJkJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NjE0NDYxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        caption: "Recognition and achievements",
      },
    ],
  },
];

export function About() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24">
      {/* Page Header */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.05) 0%, transparent 50%)" }} />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white mb-4">About Us</h1>
            <p className="text-gray-400 text-lg max-w-4xl mx-auto">
              Reimagining care delivery with modular AI - built for providers, patients, and platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Our Mission */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <h2 className="text-white mb-6">Our Mission</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  We aim to make intelligent care delivery scalable, inclusive, and clinically grounded.
                </p>
                <p>
                  We build modular AI infrastructure that adapts to every care setting - from intake to documentation, triage to engagement - with precision, empathy, and interoperability at its core.
                </p>
                <p>
                  Our vision is a healthcare system where technology amplifies human care, where every patient receives personalized support, and where providers have the tools they need to deliver exceptional outcomes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card
                className="p-8 border-0 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(100, 255, 218, 0.2)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10" />
                <div className="relative z-10 space-y-6">
                  <div>
                    <div className="text-teal-400 mb-2">Our Goal</div>
                    <p className="text-gray-300 text-sm">
                      Transform healthcare delivery through modular, clinical-grade AI
                    </p>
                  </div>
                  <div>
                    <div className="text-cyan-400 mb-2">Our Approach</div>
                    <p className="text-gray-300 text-sm">
                      Build interoperable modules that integrate seamlessly into existing ecosystems
                    </p>
                  </div>
                  <div>
                    <div className="text-blue-400 mb-2">Our Commitment</div>
                    <p className="text-gray-300 text-sm">
                      Maintain the highest standards of clinical integrity, privacy, and compliance
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Our Origin */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-white mb-6">Our Origin</h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-gradient-to-b from-teal-400 via-cyan-400 to-blue-400 hidden lg:block" />

            <div className="space-y-12">
              <TimelineItem
                side="left"
                title="The Problem"
                description="Founded to solve fragmentation in digital health. We saw providers overwhelmed by disconnected systems, patients lost in the gaps, and platforms struggling to scale quality care."
                delay={0}
              />

              <TimelineItem
                side="right"
                title="The Inspiration"
                description="Inspired by real-world provider workflows and patient needs. Built on insights from clinicians, therapists, and care coordinators working on the frontlines."
                delay={0.2}
              />

              <TimelineItem
                side="left"
                title="The Solution"
                description="Designed to unify care logic, backend integration, and clinical documentation in one modular platform that adapts to any care model or technology stack."
                delay={0.4}
              />

              <TimelineItem
                side="right"
                title="The Team"
                description="Built by a multidisciplinary team of designers, engineers, and clinicians who believe in the power of AI to amplify human care, not replace it."
                delay={0.6}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Philosophy */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8 text-center"
          >
            Our Philosophy
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {philosophyPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <Card
                    className="p-6 border-0 h-full relative overflow-hidden group"
                    style={{
                      background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.5) 100%)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(100, 255, 218, 0.15)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />
                    
                    <div className="relative z-10">
                      <motion.div
                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 mb-4"
                        whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                      >
                        <Icon className="w-7 h-7 text-teal-400" />
                      </motion.div>

                      <h3 className="text-white mb-3">{pillar.title}</h3>
                      <p className="text-gray-400 text-sm">{pillar.description}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Pictures of NuZephyr */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8 text-center"
          >
            Pictures of NuZephyr
          </motion.h2>

          <div className="space-y-12">
            {pictures.map((section, sectionIndex) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <h3 className="text-white mb-6 flex items-center gap-3 justify-center md:justify-start">
                  <div className="w-1 h-6 bg-gradient-to-b from-teal-400 to-cyan-400 rounded-full" />
                  {section.category}
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                  {section.images.map((image, imageIndex) => (
                    <motion.div
                      key={imageIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: imageIndex * 0.1 }}
                      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                      className="group cursor-pointer"
                    >
                      <Card className="border-0 overflow-hidden relative" style={{ border: "1px solid rgba(100, 255, 218, 0.2)" }}>
                        <div className="aspect-video relative overflow-hidden">
                          <ImageWithFallback
                            src={image.url}
                            alt={image.caption}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-white text-sm">{image.caption}</p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card
              className="p-12 border-0 relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(100, 255, 218, 0.3)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10" />
              
              <div className="relative z-10">
                <h2 className="text-white mb-4">Want to partner, invest, or build with us?</h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  We're looking for collaborators who share our vision of intelligent, scalable, and compassionate care delivery.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-0 px-8 py-6"
                    onClick={() => window.location.hash = "contact"}
                  >
                    Get in Touch
                  </Button>
                  <Button
                    variant="outline"
                    className="border-teal-400/30 text-teal-400 hover:bg-teal-400/10 px-8 py-6"
                    onClick={() => window.location.hash = "demo"}
                  >
                    Request Demo
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function TimelineItem({
  side,
  title,
  description,
  delay,
}: {
  side: "left" | "right";
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: side === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`lg:grid lg:grid-cols-2 gap-8 items-center ${side === "right" ? "lg:text-right" : ""}`}
    >
      {side === "left" && (
        <>
          <Card
            className="p-6 border-0 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.5) 100%)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(100, 255, 218, 0.15)",
            }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-cyan-400" />
            <div className="pl-4 text-center lg:text-left">
              <h3 className="text-white mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">{description}</p>
            </div>
          </Card>
          <div className="hidden lg:block" />
        </>
      )}
      
      {side === "right" && (
        <>
          <div className="hidden lg:block" />
          <Card
            className="p-6 border-0 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.5) 100%)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(100, 255, 218, 0.15)",
            }}
          >
            <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-blue-400" />
            <div className="pr-4 text-center lg:text-left">
              <h3 className="text-white mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">{description}</p>
            </div>
          </Card>
        </>
      )}

      {/* Timeline dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-teal-400 border-4 border-slate-950 hidden lg:block" style={{ boxShadow: "0 0 20px rgba(100, 255, 218, 0.5)" }} />
    </motion.div>
  );
}
