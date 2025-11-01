import { motion } from "motion/react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Building2, Users, Shield, Package, Code, FileCheck } from "lucide-react";

const integrationPartners = [
  {
    name: "Zoom",
    integration: "Embedded companion and documentation modules",
    logo: "Z",
  },
  {
    name: "FHIR / HL7",
    integration: "Standards-based EHR integration",
    logo: "F/H7",
  },
  {
    name: "Stripe",
    integration: "Secure billing and licensing infrastructure",
    logo: "S",
  },
  {
    name: "Twilio / Vonage",
    integration: "Multilingual voice and SMS support",
    logo: "T/V",
  },
  {
    name: "Azure / OpenAI",
    integration: "Model orchestration and supervision",
    logo: "A/O",
  },
  {
    name: "Google Cloud",
    integration: "Data storage and AI model deployment",
    logo: "G",
  },
];

const partnerTypes = [
  {
    title: "Platform Partners",
    icon: Building2,
    description: "Embed NuZephyr modules into existing care platforms",
    features: ["API-ready", "HIPAA-compliant", "Modular licensing"],
    gradient: "from-teal-500/20 to-cyan-500/20",
  },
  {
    title: "Provider Networks",
    icon: Users,
    description: "Deploy across clinics, telehealth groups, and supervision models",
    features: ["SOAP documentation", "Intake & triage", "Patient engagement"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Payers & Plans",
    icon: Shield,
    description: "Integrate AI into care navigation, risk detection, and member support",
    features: ["Custom prompts", "Real-time escalation", "Longitudinal tracking"],
    gradient: "from-blue-500/20 to-indigo-500/20",
  },
];

const licensingOptions = [
  {
    title: "Embedded Modules",
    description: "Drop-in components for care platforms",
    icon: Package,
  },
  {
    title: "API Access",
    description: "Direct integration with backend systems",
    icon: Code,
  },
  {
    title: "White-label Companion",
    description: "Customizable patient-facing AI interface",
    icon: FileCheck,
  },
];

const pricingModels = [
  { model: "Per-module", description: "License specific functionality" },
  { model: "Per-provider", description: "Scale across clinical teams" },
  { model: "Per-member", description: "Enable payer-based deployment" },
];

const complianceFeatures = ["HIPAA-ready", "Audit trail logic", "Provider supervision support"];

export function Partners() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24">
      {/* Page Header */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.05) 0%, transparent 50%)" }} />
        
        {/* Animated connection lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <motion.line
            x1="10%" y1="10%" x2="90%" y2="90%"
            stroke="url(#gradient1)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <motion.line
            x1="90%" y1="10%" x2="10%" y2="90%"
            stroke="url(#gradient1)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1, repeat: Infinity, ease: "linear" }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64FFDA" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-white mb-4">Built to Integrate. Designed to Scale.</h1>
            <p className="text-gray-400 text-lg max-w-4xl mx-auto">
              We partner with platforms, providers, and payers to deliver modular AI across care ecosystems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Integration Ecosystem */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8 text-center"
          >
            Integration Ecosystem
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                <Card
                  className="p-6 border-0 h-full relative overflow-hidden group cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.5) 100%)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(100, 255, 218, 0.15)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <motion.div
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 mb-4 mx-auto"
                      whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                    >
                      <span className="text-teal-400">{partner.logo}</span>
                    </motion.div>

                    <h3 className="text-white mb-2 text-center">{partner.name}</h3>
                    <p className="text-gray-400 text-sm text-center">{partner.integration}</p>
                  </div>

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-cyan-400"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ transformOrigin: "left" }}
                  />
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Connection animation between cards */}
          <div className="mt-8 text-center">
            <Badge className="bg-teal-400/10 text-teal-300 border-teal-400/20">
              Seamlessly connected through standardized APIs
            </Badge>
          </div>
        </div>
      </section>

      {/* Section 2: Partner Types */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8 text-center"
          >
            Partner Types
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {partnerTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <Card
                    className="p-8 border-0 h-full relative overflow-hidden group"
                    style={{
                      background: "linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(100, 255, 218, 0.2)",
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${type.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <motion.div
                        className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 mb-6"
                        whileHover={{ scale: 1.1, rotate: 360, transition: { duration: 0.6 } }}
                      >
                        <Icon className="w-8 h-8 text-teal-400" />
                      </motion.div>

                      <h3 className="text-white mb-3">{type.title}</h3>
                      
                      <p className="text-gray-400 text-sm mb-6">{type.description}</p>

                      <div className="space-y-2">
                        {type.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-cyan-400"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ transformOrigin: "left" }}
                    />
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Licensing & Deployment */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8 text-center"
          >
            Licensing & Deployment
          </motion.h2>

          {/* Deployment Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {licensingOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className="p-6 border-0 text-center relative overflow-hidden group"
                    style={{
                      background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.5) 100%)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(100, 255, 218, 0.15)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />
                    
                    <div className="relative z-10">
                      <motion.div
                        className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 mb-4 mx-auto"
                        whileHover={{ scale: 1.1, rotate: 360, transition: { duration: 0.5 } }}
                      >
                        <Icon className="w-8 h-8 text-teal-400" />
                      </motion.div>

                      <h3 className="text-white mb-2">{option.title}</h3>
                      <p className="text-gray-400 text-sm">{option.description}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Pricing Models */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-white mb-6 text-center">Pricing Models</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {pricingModels.map((model, index) => (
                <motion.div
                  key={model.model}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
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
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-teal-400 mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="text-white mb-1">{model.model}</h4>
                        <p className="text-gray-400 text-sm">{model.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card
              className="p-8 border-0 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(100, 255, 218, 0.2)",
              }}
            >
              <h3 className="text-white mb-4">Enterprise-Grade Compliance</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {complianceFeatures.map((feature) => (
                  <Badge
                    key={feature}
                    className="bg-teal-400/10 text-teal-300 border-teal-400/20"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Partner CTA */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white mb-4">
              Ready to integrate NuZephyr into your platform or network?
            </h2>
            <p className="text-gray-400 mb-8">
              Join leading healthcare platforms delivering intelligent care with modular AI
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-0 px-8 py-6"
                onClick={() => window.location.hash = "contact"}
              >
                Become a Partner
              </Button>
              <Button
                variant="outline"
                className="border-teal-400/30 text-teal-400 hover:bg-teal-400/10 px-8 py-6"
                onClick={() => window.location.hash = "demo"}
              >
                Request Demo
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-3 gap-8 mt-16"
          >
            <div>
              <div className="text-teal-400 mb-2">5+</div>
              <div className="text-gray-400 text-sm">Platform Integrations</div>
            </div>
            <div>
              <div className="text-cyan-400 mb-2">8</div>
              <div className="text-gray-400 text-sm">Active AI Modules</div>
            </div>
            <div>
              <div className="text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">System Uptime</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
