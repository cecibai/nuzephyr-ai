import { motion } from "motion/react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Activity, Zap, Shield, CheckCircle2, Lock, FileCheck, TrendingUp } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const systemOverview = {
  status: "Online",
  uptime: "99.9%",
  modelsActive: 8,
  avgResponseTime: "1.2s",
};

const modules = [
  { name: "Intake Engine", throughput: 1200, responseTime: 2.3, accuracy: "94%" },
  { name: "AI Companion", throughput: 8700, responseTime: 1.2, accuracy: "96%" },
  { name: "Provider Sync", throughput: 892, responseTime: 1.1, accuracy: "98%" },
  { name: "Dashboard", throughput: 3400, responseTime: 1.0, accuracy: "99%" },
  { name: "Risk Detection", throughput: 0, responseTime: 0.3, accuracy: "99%" },
  { name: "SOAP Notes", throughput: 0, responseTime: 0.8, accuracy: "97%" },
];

const apiEndpoints = [
  { name: "Intake API", requests: 1200, latency: 2.3 },
  { name: "Dashboard API", requests: 3400, latency: 1.0 },
  { name: "Companion API", requests: 8700, latency: 1.2 },
  { name: "Provider Sync API", requests: 892, latency: 1.1 },
];

const complianceItems = [
  { icon: Shield, title: "HIPAA-Compliant Architecture", description: "End-to-end encryption and secure data handling" },
  { icon: TrendingUp, title: "Provider Feedback Loops", description: "Continuous learning from clinical validation" },
  { icon: FileCheck, title: "Audit Trail Logic", description: "Complete transaction and access logging" },
  { icon: CheckCircle2, title: "Clinical Validation", description: "Ongoing validation with healthcare providers" },
];

const pipelineSteps = [
  { name: "Intake", color: "from-teal-400 to-teal-500" },
  { name: "Match", color: "from-teal-500 to-cyan-500" },
  { name: "Care", color: "from-cyan-500 to-cyan-600" },
  { name: "Triage", color: "from-cyan-600 to-blue-500" },
  { name: "Documentation", color: "from-blue-500 to-blue-600" },
  { name: "Engagement", color: "from-blue-600 to-indigo-500" },
];

export function LiveSystem() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;
    let isUserScrolling = false;
    let userScrollTimeout: NodeJS.Timeout;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isUserScrolling && scrollContainer) {
          const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
          const currentScroll = scrollContainer.scrollLeft;
          
          // Scroll by one card width (144px for w-36 + 12px gap)
          const scrollAmount = 156;
          const newScroll = currentScroll + scrollAmount;

          if (newScroll >= maxScroll) {
            // Reset to beginning smoothly
            scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollContainer.scrollTo({ left: newScroll, behavior: 'smooth' });
          }
        }
      }, 3000); // Auto-advance every 3 seconds
    };

    const handleUserScroll = () => {
      isUserScrolling = true;
      clearTimeout(userScrollTimeout);
      
      userScrollTimeout = setTimeout(() => {
        isUserScrolling = false;
      }, 5000); // Resume auto-scroll 5 seconds after user stops scrolling
    };

    scrollContainer.addEventListener('touchstart', handleUserScroll);
    scrollContainer.addEventListener('scroll', handleUserScroll);

    startAutoScroll();

    return () => {
      clearInterval(scrollInterval);
      clearTimeout(userScrollTimeout);
      scrollContainer.removeEventListener('touchstart', handleUserScroll);
      scrollContainer.removeEventListener('scroll', handleUserScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 pt-24">
      {/* Header */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.05) 0%, transparent 50%)" }} />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white mb-4">Live System Activity</h1>
            <p className="text-gray-400 text-lg max-w-4xl mx-auto">
              Real-time metrics from NuZephyrHealth.ai's modular AI infrastructure — powering intelligent care delivery across providers and patients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: System Overview Panel */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card
              className="p-8 border-0"
              style={{
                background: "linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(100, 255, 218, 0.2)",
              }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
                <div>
                  <div className="text-gray-400 text-sm mb-2">System Status</div>
                  <div className="flex items-center gap-2">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-green-400"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.7, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                    <span className="text-white">{systemOverview.status}</span>
                  </div>
                </div>

                <div>
                  <div className="text-gray-400 text-sm mb-2">Uptime</div>
                  <div className="text-teal-400">{systemOverview.uptime}</div>
                </div>

                <div>
                  <div className="text-gray-400 text-sm mb-2">AI Models Active</div>
                  <div className="text-cyan-400">{systemOverview.modelsActive}</div>
                </div>

                <div>
                  <div className="text-gray-400 text-sm mb-2">Avg Response Time</div>
                  <div className="text-blue-400">{systemOverview.avgResponseTime}</div>
                </div>

                <div>
                  <div className="text-gray-400 text-sm mb-2">Compliance</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-teal-400/20 text-teal-300 border-teal-400/30 text-xs">
                      HIPAA
                    </Badge>
                    <Badge className="bg-cyan-400/20 text-cyan-300 border-cyan-400/30 text-xs">
                      Validated
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Live Module Metrics Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8"
          >
            Live Module Metrics
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <ModuleMetricCard key={module.name} module={module} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Real-Time Pipeline Visualization */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8 text-center"
          >
            Real-Time Pipeline
          </motion.h2>

          <div className="hidden lg:flex items-center justify-between overflow-x-auto pb-4">
            {pipelineSteps.map((step, index) => (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center"
              >
                <div
                  className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center relative overflow-hidden`}
                  style={{ boxShadow: "0 0 30px rgba(100, 255, 218, 0.3)" }}
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                  />
                  <span className="text-white z-10">{step.name}</span>
                </div>

                {index < pipelineSteps.length - 1 && (
                  <motion.div
                    className="w-12 h-1 mx-2 bg-gradient-to-r from-teal-400 to-cyan-400 relative"
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
            ))}
          </div>

          <div ref={scrollRef} className="lg:hidden overflow-x-auto pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex items-center gap-3 min-w-max px-4">
              {pipelineSteps.map((step, index) => (
                <motion.div
                  key={step.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <div
                    className={`w-36 h-36 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center relative overflow-hidden flex-shrink-0 p-3`}
                    style={{ boxShadow: "0 0 20px rgba(100, 255, 218, 0.3)" }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3,
                      }}
                    />
                    <span className="text-white z-10 text-center break-words leading-tight">{step.name}</span>
                  </div>
                  
                  {index < pipelineSteps.length - 1 && (
                    <motion.div
                      className="w-8 h-1 mx-2 bg-gradient-to-r from-teal-400 to-cyan-400 relative flex-shrink-0"
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: API Activity Panel */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8"
          >
            API Activity
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {apiEndpoints.map((endpoint, index) => (
              <motion.div
                key={endpoint.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="p-6 border-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.4) 100%)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(100, 255, 218, 0.15)",
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white">{endpoint.name}</h3>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                      Active
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Requests/min</div>
                      <div className="text-teal-400 font-mono">{endpoint.requests.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Latency</div>
                      <div className="text-cyan-400 font-mono">{endpoint.latency}s</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Compliance & Validation */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8"
          >
            Compliance & Validation
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {complianceItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="p-6 border-0 h-full"
                  style={{
                    background: "linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.4) 100%)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(100, 255, 218, 0.15)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 flex-shrink-0">
                      <item.icon className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-white mb-2">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ModuleMetricCard({ module, index }: { module: typeof modules[0]; index: number }) {
  const [count, setCount] = useState(module.throughput);

  useEffect(() => {
    if (module.throughput === 0) return;

    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 10));
    }, 2000);

    return () => clearInterval(interval);
  }, [module.throughput]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card
        className="p-6 border-0 relative overflow-hidden group"
        style={{
          background: "linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 0 20px rgba(100, 255, 218, 0.1)",
          border: "1px solid rgba(100, 255, 218, 0.2)",
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white">{module.name}</h3>
          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"
            />
            Active
          </Badge>
        </div>

        <div className="space-y-3">
          {module.throughput > 0 && (
            <div>
              <div className="text-gray-400 text-sm mb-1">Throughput</div>
              <div className="text-teal-400">{count.toLocaleString()}/min</div>
            </div>
          )}

          <div>
            <div className="text-gray-400 text-sm mb-1">
              {module.name.includes("Risk") || module.name.includes("SOAP") ? "Accuracy" : "Response Time"}
            </div>
            <div className="text-cyan-400">
              {module.name.includes("Risk") || module.name.includes("SOAP") ? module.accuracy : `${module.responseTime}s`}
            </div>
          </div>

          {(module.name.includes("Risk") || module.name.includes("SOAP")) && (
            <div>
              <div className="text-gray-400 text-sm mb-1">Response Time</div>
              <div className="text-blue-400">{module.responseTime}s</div>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
