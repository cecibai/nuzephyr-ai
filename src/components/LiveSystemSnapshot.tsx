import { motion, AnimatePresence } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Activity, Zap, Users, LayoutDashboard } from "lucide-react";
import { useEffect, useState } from "react";

const modules = [
  { name: "Intake Engine", icon: Users, baseCount: 1200, responseTime: 2.3, color: "blue" },
  { name: "AI Companion", icon: Zap, baseCount: 8700, responseTime: 1.2, color: "purple" },
  { name: "Provider Sync", icon: Activity, baseCount: 892, responseTime: 1.1, color: "teal" },
  { name: "Dashboard", icon: LayoutDashboard, baseCount: 3400, responseTime: 1.0, color: "cyan" },
];

export function LiveSystemSnapshot() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % modules.length);
    }, 3500); // Change every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-8 sm:py-16 md:py-20 px-6 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      {/* Animated mesh gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(at 20% 30%, rgba(59, 130, 246, 0.1) 0px, transparent 50%),
            radial-gradient(at 80% 70%, rgba(168, 85, 247, 0.1) 0px, transparent 50%),
            radial-gradient(at 40% 80%, rgba(14, 165, 233, 0.1) 0px, transparent 50%)
          `,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-full blur-3xl"
        animate={{
          y: [0, 50, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full blur-3xl"
        animate={{
          y: [0, -40, 0],
          x: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.5) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white border-0 mb-4 shadow-lg shadow-teal-200">
            Real-Time Metrics
          </Badge>
          <h2 className="bg-gradient-to-r from-slate-900 via-teal-700 to-cyan-700 bg-clip-text text-transparent mb-4">
            Live System Snapshot
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">Real-time infrastructure metrics across all modules</p>
        </motion.div>

        {/* Mobile: Cards only, Desktop: Monitor with Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Mobile: Direct card display */}
          <div className="sm:hidden flex items-center justify-center py-8">
            <div className="w-full max-w-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full"
                >
                  <ModuleCard module={modules[currentIndex]} />
                </motion.div>
              </AnimatePresence>
              
              {/* Progress Indicators */}
              <div className="flex gap-2 justify-center mt-6">
                {modules.map((_, index) => (
                  <motion.div
                    key={index}
                    className="rounded-full"
                    style={{
                      width: index === currentIndex ? "32px" : "8px",
                      height: "8px",
                      backgroundColor: index === currentIndex ? "#14b8a6" : "#cbd5e1",
                    }}
                    animate={{
                      width: index === currentIndex ? "32px" : "8px",
                    }}
                    transition={{ duration: 0.3 }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop: Computer Frame with Cards */}
          <div className="hidden sm:block relative px-2">
            {/* Computer Frame SVG */}
            <svg viewBox="0 0 1200 800" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="monitorGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#1e293b", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#0f172a", stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#f8fafc", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#e2e8f0", stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="standGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#334155", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#1e293b", stopOpacity: 1 }} />
                </linearGradient>
                <filter id="screenGlow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Monitor Body */}
              <motion.rect
                x="50" y="50" width="1100" height="620" rx="20"
                fill="url(#monitorGradient)"
                stroke="#334155"
                strokeWidth="3"
                animate={{
                  y: [50, 45, 50],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Monitor Inner Bezel */}
              <rect x="70" y="70" width="1060" height="560" rx="10" fill="#0a0f1a" stroke="#1e293b" strokeWidth="2"/>
              
              {/* Screen Area - Light background for content */}
              <rect x="90" y="90" width="1020" height="520" rx="5" fill="url(#screenGradient)"/>
              
              {/* Screen subtle inner shadow */}
              <rect x="90" y="90" width="1020" height="520" rx="5" fill="url(#screenGradient)" opacity="0.5"/>
              
              {/* Power Button */}
              <circle cx="600" cy="660" r="5" fill="#14b8a6" opacity="0.8">
                <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
              </circle>
              
              {/* Monitor Stand - Neck */}
              <motion.path
                d="M 550 670 L 580 720 L 620 720 L 650 670 Z"
                fill="url(#standGradient)"
                stroke="#1e293b"
                strokeWidth="2"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Monitor Stand - Base */}
              <motion.ellipse
                cx="600" cy="730" rx="150" ry="20"
                fill="url(#standGradient)"
                stroke="#1e293b"
                strokeWidth="2"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Base Shadow */}
              <ellipse cx="600" cy="750" rx="160" ry="15" fill="#0f172a" opacity="0.3"/>
            </svg>

            {/* Content Overlay - Cards positioned inside the screen */}
            <div 
              className="absolute top-[11.25%] left-[7.5%] w-[85%] h-[65%] flex items-center justify-center"
            >
              <div className="w-full h-full flex items-center justify-center overflow-hidden p-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full max-w-md"
                  >
                    <ModuleCard module={modules[currentIndex]} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Screen glow effect */}
            <motion.div
              className="absolute top-[11.25%] left-[7.5%] w-[85%] h-[65%] blur-xl opacity-20 pointer-events-none"
              animate={{
                opacity: [0.15, 0.25, 0.15],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-400" />
            </motion.div>

            {/* Progress Indicators */}
            <div 
              className="absolute flex gap-2 justify-center"
              style={{
                bottom: "8%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              {modules.map((_, index) => (
                <motion.div
                  key={index}
                  className="rounded-full"
                  style={{
                    width: index === currentIndex ? "32px" : "8px",
                    height: "8px",
                    backgroundColor: index === currentIndex ? "#14b8a6" : "#cbd5e1",
                  }}
                  animate={{
                    width: index === currentIndex ? "32px" : "8px",
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ModuleCard({ module }: { module: typeof modules[0] }) {
  const [count, setCount] = useState(module.baseCount);
  const Icon = module.icon;

  useEffect(() => {
    setCount(module.baseCount); // Reset count when module changes
    
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 10));
    }, 2000);

    return () => clearInterval(interval);
  }, [module]);

  const colorClasses = {
    blue: {
      bg: "from-blue-500 to-blue-600",
      iconBg: "from-blue-100 to-blue-200",
      iconColor: "text-blue-600",
      border: "border-blue-200",
      shadow: "shadow-blue-200/50",
      badge: "bg-blue-100 text-blue-700 border-blue-200",
      text: "text-blue-600",
    },
    purple: {
      bg: "from-purple-500 to-purple-600",
      iconBg: "from-purple-100 to-purple-200",
      iconColor: "text-purple-600",
      border: "border-purple-200",
      shadow: "shadow-purple-200/50",
      badge: "bg-purple-100 text-purple-700 border-purple-200",
      text: "text-purple-600",
    },
    teal: {
      bg: "from-teal-500 to-teal-600",
      iconBg: "from-teal-100 to-teal-200",
      iconColor: "text-teal-600",
      border: "border-teal-200",
      shadow: "shadow-teal-200/50",
      badge: "bg-teal-100 text-teal-700 border-teal-200",
      text: "text-teal-600",
    },
    cyan: {
      bg: "from-cyan-500 to-cyan-600",
      iconBg: "from-cyan-100 to-cyan-200",
      iconColor: "text-cyan-600",
      border: "border-cyan-200",
      shadow: "shadow-cyan-200/50",
      badge: "bg-cyan-100 text-cyan-700 border-cyan-200",
      text: "text-cyan-600",
    },
  };

  const colors = colorClasses[module.color as keyof typeof colorClasses];

  return (
    <Card className={`p-6 bg-white/95 backdrop-blur-sm border-2 ${colors.border} shadow-2xl ${colors.shadow} h-full flex flex-col justify-between`}>
      <div className="flex items-center justify-between mb-6">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.iconBg} flex items-center justify-center shadow-lg`}>
          <Icon className={`w-7 h-7 ${colors.iconColor}`} />
        </div>
        <Badge className={`${colors.badge}`}>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`inline-block w-2 h-2 ${colors.bg.split(' ')[0].replace('from-', 'bg-')} rounded-full mr-2`}
          />
          Active
        </Badge>
      </div>

      <h3 className="text-gray-900 mb-6">{module.name}</h3>

      <div className="space-y-4">
        <div>
          <div className="text-gray-500 mb-1">Throughput</div>
          <div className={`${colors.text}`}>
            {count.toLocaleString()}<span className="text-gray-500">/min</span>
          </div>
        </div>

        <div>
          <div className="text-gray-500 mb-1">Response Time</div>
          <div className={colors.text}>{module.responseTime}s</div>
        </div>
      </div>

      {/* Accent line */}
      <motion.div 
        className={`mt-6 h-1 rounded-full bg-gradient-to-r ${colors.bg}`}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </Card>
  );
}
