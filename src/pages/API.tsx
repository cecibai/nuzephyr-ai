import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { 
  Code, 
  FileJson, 
  Shield, 
  Zap, 
  FileText, 
  AlertTriangle, 
  Stethoscope, 
  MessageCircle, 
  BarChart3,
  Lock,
  Key,
  BookOpen,
  FileCode,
  Box,
  TrendingUp,
  Download,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const apiFeatures = [
  {
    icon: Code,
    title: "RESTful Architecture",
    description: "Clean, predictable endpoints following REST best practices",
  },
  {
    icon: Shield,
    title: "HIPAA-Compliant Endpoints",
    description: "Built-in compliance with healthcare data protection standards",
  },
  {
    icon: FileJson,
    title: "JSON-Based Payloads",
    description: "Standard JSON format for all requests and responses",
  },
  {
    icon: Zap,
    title: "Real-Time Response Logic",
    description: "Sub-second response times with intelligent caching",
  },
];

const endpointCategories = [
  {
    name: "Intake API",
    icon: FileText,
    description: "Dynamic question sets, symptom parsing, and insurance logic",
    features: [
      "Adaptive assessment flows",
      "Symptom-based routing",
      "Insurance verification",
      "94% accuracy · 2.3s response",
    ],
    gradient: "from-teal-500/20 to-cyan-500/20",
  },
  {
    name: "Triage API",
    icon: AlertTriangle,
    description: "Risk detection, escalation triggers, and routing logic",
    features: [
      "Real-time crisis detection",
      "Automated escalation",
      "Provider routing",
      "99% detection rate · 0.3s",
    ],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    name: "Documentation API",
    icon: Stethoscope,
    description: "SOAP note generation, attribution, and billing-ready formatting",
    features: [
      "Auto-generated SOAP notes",
      "Provider attribution",
      "Edit history tracking",
      "97% accuracy · 0.8s",
    ],
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
  {
    name: "Companion API",
    icon: MessageCircle,
    description: "Multilingual support, session continuity, and prompt personalization",
    features: [
      "Multi-language support",
      "Session persistence",
      "Custom prompt library",
      "8.7k req/min · 1.2s",
    ],
    gradient: "from-indigo-500/20 to-violet-500/20",
  },
  {
    name: "Dashboard API",
    icon: BarChart3,
    description: "Metrics aggregation, provider supervision, and audit trail export",
    features: [
      "Real-time analytics",
      "Provider dashboards",
      "Audit trail export",
      "3.4k req/min · 1.0s",
    ],
    gradient: "from-violet-500/20 to-purple-500/20",
  },
];

const securityFeatures = [
  {
    icon: Key,
    title: "OAuth 2.0 & Token-Based Access",
    description: "Industry-standard authentication with secure token management",
  },
  {
    icon: Shield,
    title: "Role-Based Permissions",
    description: "Granular access controls for different user types and modules",
  },
  {
    icon: Lock,
    title: "Encrypted Transmission",
    description: "TLS 1.3 encryption for all data in transit",
  },
  {
    icon: FileCode,
    title: "Audit-Ready Logging",
    description: "Complete request/response logging for compliance and debugging",
  },
];

const developerResources = [
  {
    icon: BookOpen,
    title: "API Documentation",
    description: "Comprehensive guides with examples and best practices",
  },
  {
    icon: Download,
    title: "Postman Collection",
    description: "Pre-built collection for rapid testing and integration",
  },
  {
    icon: FileCode,
    title: "Integration Guide",
    description: "Step-by-step tutorials for common use cases",
  },
  {
    icon: TrendingUp,
    title: "Rate Limits & SLA",
    description: "Transparent limits and guaranteed uptime commitments",
  },
  {
    icon: Box,
    title: "Sandbox Access",
    description: "Test environment with sample data for development",
  },
];

export function API() {
  // Carousel state for Endpoint Categories
  const [currentEndpointSlide, setCurrentEndpointSlide] = useState(0);
  
  // Carousel state for Developer Resources
  const [currentResourceSlide, setCurrentResourceSlide] = useState(0);
  
  // Auto-advance Endpoint Categories carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentEndpointSlide((prev) => (prev + 1) % endpointCategories.length);
    }, 4000); // Advance every 4 seconds
    
    return () => clearInterval(timer);
  }, []);
  
  // Auto-advance Developer Resources carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentResourceSlide((prev) => (prev + 1) % developerResources.length);
    }, 4000); // Advance every 4 seconds
    
    return () => clearInterval(timer);
  }, []);
  
  const nextEndpointSlide = () => {
    setCurrentEndpointSlide((prev) => (prev + 1) % endpointCategories.length);
  };
  
  const prevEndpointSlide = () => {
    setCurrentEndpointSlide((prev) => (prev - 1 + endpointCategories.length) % endpointCategories.length);
  };
  
  const nextResourceSlide = () => {
    setCurrentResourceSlide((prev) => (prev + 1) % developerResources.length);
  };
  
  const prevResourceSlide = () => {
    setCurrentResourceSlide((prev) => (prev - 1 + developerResources.length) % developerResources.length);
  };
  
  return (
    <div className="min-h-screen bg-slate-950 pt-24">
      {/* Page Header */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.05) 0%, transparent 50%)" }} />
        
        {/* Animated code brackets */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='10' y='40' fill='%2364FFDA' font-size='40' font-family='monospace'%3E%7B%7D%3C/text%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-teal-400/10 text-teal-300 border-teal-400/20 mb-4">
              Developer API
            </Badge>
            <h1 className="text-white mb-4">Modular API for Intelligent Care</h1>
            <p className="text-gray-400 text-lg max-w-4xl mx-auto">
              Secure, scalable, and supervision-ready APIs for platforms, providers, and payers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: API Overview */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8 text-center"
          >
            API Overview
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {apiFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
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
                    
                    <div className="relative z-10 text-center">
                      <motion.div
                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 mb-4 mx-auto"
                        whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                      >
                        <Icon className="w-7 h-7 text-teal-400" />
                      </motion.div>

                      <h3 className="text-white mb-2 text-sm">{feature.title}</h3>
                      <p className="text-gray-400 text-xs">{feature.description}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card
              className="p-8 border-0"
              style={{
                background: "linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(100, 255, 218, 0.2)",
              }}
            >
              <h3 className="text-white mb-4">Integration Capabilities</h3>
              <p className="text-gray-400 mb-4">
                NuZephyrHealth.ai APIs support embedded modules, white-label flows, and backend orchestration. 
                Whether you're building a patient-facing application, provider platform, or care management system, 
                our modular endpoints adapt to your architecture.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-teal-400/10 text-teal-300 border-teal-400/20">
                  Embedded Modules
                </Badge>
                <Badge className="bg-cyan-400/10 text-cyan-300 border-cyan-400/20">
                  White-Label Flows
                </Badge>
                <Badge className="bg-blue-400/10 text-blue-300 border-blue-400/20">
                  Backend Orchestration
                </Badge>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Endpoint Categories - Carousel */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8 text-center"
          >
            Endpoint Categories
          </motion.h2>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentEndpointSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  {(() => {
                    const category = endpointCategories[currentEndpointSlide];
                    const Icon = category.icon;
                    return (
                      <div className="flex justify-center px-4">
                        <Card
                          className="p-8 border-0 w-full max-w-2xl relative overflow-hidden group"
                          style={{
                            background: "linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)",
                            backdropFilter: "blur(12px)",
                            border: "1px solid rgba(100, 255, 218, 0.2)",
                          }}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-50`} />
                          
                          <div className="relative z-10">
                            <motion.div
                              className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 mb-6 mx-auto"
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                              <Icon className="w-8 h-8 text-teal-400" />
                            </motion.div>

                            <h3 className="text-white mb-3 text-center text-xl">{category.name}</h3>
                            <p className="text-gray-400 mb-6 text-center">{category.description}</p>

                            <div className="grid md:grid-cols-2 gap-3">
                              {category.features.map((feature) => (
                                <div key={feature} className="flex items-start gap-3 bg-slate-900/40 p-3 rounded-lg">
                                  <div className="w-2 h-2 rounded-full bg-teal-400 mt-1.5 flex-shrink-0" />
                                  <span className="text-gray-300 text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <motion.div
                            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-cyan-400"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 4 }}
                            style={{ transformOrigin: "left" }}
                          />
                        </Card>
                      </div>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevEndpointSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-teal-400/30 flex items-center justify-center text-teal-400 hover:bg-slate-700/80 transition-all z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextEndpointSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-teal-400/30 flex items-center justify-center text-teal-400 hover:bg-slate-700/80 transition-all z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {endpointCategories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentEndpointSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentEndpointSlide 
                      ? "bg-teal-400 w-8" 
                      : "bg-slate-600 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Authentication & Security */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8 text-center"
          >
            Authentication & Security
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className="p-6 border-0 h-full"
                    style={{
                      background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.5) 100%)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(100, 255, 218, 0.15)",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 flex-shrink-0">
                        <Icon className="w-6 h-6 text-teal-400" />
                      </div>
                      <div>
                        <h3 className="text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Card
              className="p-8 border-0 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(100, 255, 218, 0.2)",
              }}
            >
              <div className="flex flex-wrap justify-center gap-4">
                <Badge className="bg-teal-400/10 text-teal-300 border-teal-400/20 px-6 py-2">
                  OAuth 2.0
                </Badge>
                <Badge className="bg-cyan-400/10 text-cyan-300 border-cyan-400/20 px-6 py-2">
                  TLS 1.3
                </Badge>
                <Badge className="bg-blue-400/10 text-blue-300 border-blue-400/20 px-6 py-2">
                  HIPAA Compliant
                </Badge>
                <Badge className="bg-indigo-400/10 text-indigo-300 border-indigo-400/20 px-6 py-2">
                  SOC 2 Type II
                </Badge>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Developer Resources - Carousel */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8 text-center"
          >
            Developer Resources
          </motion.h2>

          <div className="relative mb-12">
            {/* Carousel Container */}
            <div className="overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentResourceSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  {(() => {
                    const resource = developerResources[currentResourceSlide];
                    const Icon = resource.icon;
                    return (
                      <div className="flex justify-center px-4">
                        <Card
                          className="p-8 border-0 w-full max-w-xl relative overflow-hidden group cursor-pointer"
                          style={{
                            background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.5) 100%)",
                            backdropFilter: "blur(12px)",
                            border: "1px solid rgba(100, 255, 218, 0.15)",
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />
                          
                          <div className="relative z-10 text-center">
                            <motion.div
                              className="w-20 h-20 rounded-xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 mb-6 mx-auto"
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                              <Icon className="w-10 h-10 text-teal-400" />
                            </motion.div>

                            <h3 className="text-white mb-3 text-xl">{resource.title}</h3>
                            <p className="text-gray-400">{resource.description}</p>
                          </div>

                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-cyan-400"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 4 }}
                            style={{ transformOrigin: "left" }}
                          />
                        </Card>
                      </div>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevResourceSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-teal-400/30 flex items-center justify-center text-teal-400 hover:bg-slate-700/80 transition-all z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextResourceSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-teal-400/30 flex items-center justify-center text-teal-400 hover:bg-slate-700/80 transition-all z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {developerResources.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentResourceSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentResourceSlide 
                      ? "bg-teal-400 w-8" 
                      : "bg-slate-600 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card
              className="p-12 border-0 text-center relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(100, 255, 218, 0.3)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10" />
              
              <div className="relative z-10">
                <h2 className="text-white mb-4">Ready to Build with NuZephyr?</h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Get started with our API today. Access comprehensive documentation, sandbox environment, and dedicated developer support.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-0 px-8 py-6"
                    onClick={() => window.location.hash = "contact"}
                  >
                    Request API Access
                  </Button>
                  <Button
                    variant="outline"
                    className="border-teal-400/30 text-teal-400 hover:bg-teal-400/10 px-8 py-6"
                    onClick={() => window.location.hash = "docs"}
                  >
                    View Documentation
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
                  <div>
                    <div className="text-teal-400 mb-2">99.9%</div>
                    <div className="text-gray-400 text-sm">API Uptime</div>
                  </div>
                  <div>
                    <div className="text-cyan-400 mb-2">{"<"}1.5s</div>
                    <div className="text-gray-400 text-sm">Avg Response</div>
                  </div>
                  <div>
                    <div className="text-blue-400 mb-2">5</div>
                    <div className="text-gray-400 text-sm">Core Endpoints</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
