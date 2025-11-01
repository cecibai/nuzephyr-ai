import { motion } from "motion/react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { FileText, Stethoscope, Brain, Activity, MessageCircle, Sparkles, TrendingUp, Shield } from "lucide-react";

const providerModules = [
  {
    name: "ZephyrInTake",
    icon: FileText,
    summary: "Adaptive intake flows based on symptoms, goals, and insurance",
    metrics: ["94% accuracy", "2.3s response time"],
    value: "Improves data quality, flags risk, reduces onboarding time",
  },
  {
    name: "ZephyrNotes",
    icon: Stethoscope,
    summary: "Real-time SOAP documentation with care plan synthesis",
    metrics: ["97% accuracy", "0.8s response time"],
    value: "Saves time, supports credentialing, enables billing-ready notes",
  },
  {
    name: "ZephyrMind",
    icon: Brain,
    summary: "AI-powered triage and smart routing for provider messages",
    metrics: ["92% accuracy", "0.5s response time"],
    value: "Reduces inbox burden, improves care continuity",
  },
  {
    name: "Provider Sync",
    icon: Activity,
    summary: "Clinical integration layer for EHR and supervision",
    metrics: ["Active", "HIPAA-compliant", "Feedback loops"],
    value: "Enables seamless provider workflows and audit trails",
  },
];

const patientModules = [
  {
    name: "Zee-AI Companion",
    icon: MessageCircle,
    summary: "Persistent, multilingual support across sessions and devices",
    metrics: ["8.7k req/min", "1.2s response time"],
    value: "Improves engagement, adherence, and health literacy",
  },
  {
    name: "Personalized Prompts",
    icon: Sparkles,
    summary: "Journaling prompts from 10,000+ clinical templates",
    metrics: ["89% relevance", "1.1s response time"],
    value: "Supports reflection, symptom tracking, and therapeutic engagement",
  },
  {
    name: "Progress Tracking",
    icon: TrendingUp,
    summary: "Mood and treatment analytics over time",
    metrics: ["96% accuracy", "1.4s response time"],
    value: "Enables longitudinal care insights and adaptive planning",
  },
  {
    name: "Risk Detection",
    icon: Shield,
    summary: "Real-time crisis detection with escalation protocols",
    metrics: ["99% detection rate", "0.3s response time"],
    value: "Supports safety, supervision, and timely intervention",
  },
];

const integrationPartners = [
  { name: "Zoom", logo: "Z" },
  { name: "FHIR", logo: "F" },
  { name: "HL7", logo: "H7" },
  { name: "Stripe", logo: "S" },
];

export function Modules() {
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
            <h1 className="text-white mb-4">Modular AI for Intelligent Care Delivery</h1>
            <p className="text-gray-400 text-lg max-w-4xl mx-auto">
              Each module is built to integrate, license, and scale — powering providers, patients, and platforms with clinical-grade intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Provider-Facing Modules */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-white mb-2 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-teal-400 to-cyan-400 rounded-full" />
              Provider-Facing Modules
            </h2>
            <p className="text-gray-400 ml-7">Clinical tools for efficiency, compliance, and quality of care</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {providerModules.map((module, index) => (
              <ModuleCard key={module.name} module={module} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Patient-Facing Modules */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-white mb-2 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full" />
              Patient-Facing Modules
            </h2>
            <p className="text-gray-400 ml-7">Engagement and support tools for continuous care</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {patientModules.map((module, index) => (
              <ModuleCard key={module.name} module={module} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Licensing & Integration */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-white mb-4">Licensing & Integration</h2>
            <p className="text-gray-400 max-w-3xl mx-auto mb-8">
              Modules are embeddable, licensable, and API-ready — built for Zoom, EHRs, and care platforms.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {integrationPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                  className="flex flex-col items-center gap-4 group cursor-pointer"
                >
                  <div
                    className="w-24 h-24 rounded-2xl flex items-center justify-center border border-gray-700 group-hover:border-teal-400 transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.4) 100%)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    <span className="text-gray-400 group-hover:text-teal-400 transition-colors duration-300">
                      {partner.logo}
                    </span>
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    {partner.name}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Button 
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-0 px-8 py-6"
                onClick={() => window.location.hash = "live-system"}
              >
                Explore Integration Options
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            <Card
              className="p-6 border-0"
              style={{
                background: "linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.4) 100%)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(100, 255, 218, 0.15)",
              }}
            >
              <h3 className="text-white mb-3">Embeddable</h3>
              <p className="text-gray-400 text-sm">
                Drop modules into existing platforms with minimal configuration
              </p>
            </Card>

            <Card
              className="p-6 border-0"
              style={{
                background: "linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.4) 100%)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(100, 255, 218, 0.15)",
              }}
            >
              <h3 className="text-white mb-3">Licensable</h3>
              <p className="text-gray-400 text-sm">
                Flexible licensing models for providers, platforms, and enterprises
              </p>
            </Card>

            <Card
              className="p-6 border-0"
              style={{
                background: "linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.4) 100%)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(100, 255, 218, 0.15)",
              }}
            >
              <h3 className="text-white mb-3">API-Ready</h3>
              <p className="text-gray-400 text-sm">
                RESTful APIs with comprehensive documentation and support
              </p>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function ModuleCard({ module, index }: { module: any; index: number }) {
  const Icon = module.icon;

  return (
    <motion.div
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
          <div className="flex items-start justify-between mb-4">
            <motion.div
              className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30"
              whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
            >
              <Icon className="w-7 h-7 text-teal-400" />
            </motion.div>
          </div>

          <h3 className="text-white mb-3">{module.name}</h3>
          
          <p className="text-gray-400 text-sm mb-4">{module.summary}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {module.metrics.map((metric: string) => (
              <Badge
                key={metric}
                className="bg-teal-400/10 text-teal-300 border-teal-400/20 text-xs"
              >
                {metric}
              </Badge>
            ))}
          </div>

          <div className="mb-6">
            <div className="text-gray-500 text-xs mb-2">Strategic Value</div>
            <p className="text-gray-400 text-sm">{module.value}</p>
          </div>

          <Button
            variant="outline"
            className="w-full border-teal-400/30 text-teal-400 hover:bg-teal-400/10"
            onClick={() => window.location.hash = "demo"}
          >
            Request Demo
          </Button>
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
  );
}
