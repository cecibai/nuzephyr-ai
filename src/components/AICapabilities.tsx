import { motion, useScroll, useTransform } from "motion/react";
import { Badge } from "./ui/badge";
import { Sparkles, Shield, TrendingUp, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

const capabilities = [
  {
    icon: Sparkles,
    title: "10,000+ Clinical Templates",
    description: "Personalized prompts for every care scenario",
    color: "from-yellow-400 to-orange-500",
    iconColor: "text-yellow-500",
    number: "01",
  },
  {
    icon: Shield,
    title: "99% Risk Detection",
    description: "Real-time clinical risk identification with validated accuracy",
    color: "from-emerald-400 to-teal-500",
    iconColor: "text-emerald-500",
    number: "02",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Continuous monitoring across mood, adherence, and outcomes",
    color: "from-blue-400 to-indigo-500",
    iconColor: "text-blue-500",
    number: "03",
  },
  {
    icon: CheckCircle2,
    title: "HIPAA Compliant",
    description: "Provider-validated, supervision-ready infrastructure",
    color: "from-purple-400 to-pink-500",
    iconColor: "text-purple-500",
    number: "04",
  },
];

export function AICapabilities() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-cyan-50" />

      {/* Large decorative text in background */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-[0.02]">
        <span className="text-[20rem] tracking-tight select-none pointer-events-none" style={{ fontWeight: 900 }}>
          AI
        </span>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full blur-3xl opacity-20"
      />

      {/* Animated line pattern */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(90deg, transparent 49%, rgba(168, 85, 247, 0.3) 49%, rgba(168, 85, 247, 0.3) 51%, transparent 51%)`,
          backgroundSize: '80px 80px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '80px 80px'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 mb-4 shadow-lg shadow-purple-200">
            Platform Features
          </Badge>
          <h2 className="bg-gradient-to-r from-slate-900 via-purple-700 to-teal-700 bg-clip-text text-transparent mb-4">
            AI Capabilities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Clinical-grade intelligence at every layer</p>
        </motion.div>

        {/* Bento grid layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {capabilities.map((capability, index) => (
            <CapabilityCard key={capability.title} capability={capability} index={index} scrollProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ capability, index, scrollProgress }: { capability: typeof capabilities[0]; index: number; scrollProgress: any }) {
  const y = useTransform(scrollProgress, [0, 1], [20 * (index % 2 === 0 ? 1 : -1), -20 * (index % 2 === 0 ? 1 : -1)]);

  return (
    <motion.div
      style={{ y }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="group relative"
    >
      {/* Main card container */}
      <div className="relative h-full bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-gray-200/50 hover:border-gray-300 transition-all duration-500 overflow-hidden">
        {/* Top gradient accent bar */}
        <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${capability.color}`} />
        
        {/* Large number in background */}
        <div className="absolute top-4 right-6 text-9xl opacity-[0.03] pointer-events-none select-none" style={{ fontWeight: 900 }}>
          {capability.number}
        </div>

        {/* Animated gradient blob on hover */}
        <motion.div
          className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${capability.color} rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`}
        />

        <div className="relative z-10">
          {/* Icon section */}
          <motion.div
            className="mb-6 relative inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${capability.color} rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-opacity`} />
            <div className="relative w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <capability.icon className={`w-8 h-8 ${capability.iconColor}`} />
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-3">
            <h3 className="text-gray-900 text-2xl">
              {capability.title}
            </h3>
            
            <p className="text-gray-600 text-base leading-relaxed">
              {capability.description}
            </p>

            {/* Animated underline */}
            <motion.div
              className={`h-0.5 bg-gradient-to-r ${capability.color} rounded-full`}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.8 }}
              style={{ transformOrigin: "left" }}
            />
          </div>

          {/* Hover arrow indicator */}
          <motion.button
            className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
            initial={{ x: -10 }}
            whileHover={{ x: 0 }}
            onClick={() => window.location.hash = "how-it-works"}
          >
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${capability.color} flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow`}>
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
