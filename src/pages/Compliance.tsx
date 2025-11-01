import { motion } from "motion/react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Shield, Lock, FileCheck, Eye, GitBranch, CheckCircle2, FileText, Brain } from "lucide-react";

const hipaaFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All patient data encrypted in transit (TLS 1.3) and at rest (AES-256)",
  },
  {
    icon: Eye,
    title: "Role-Based Access Controls",
    description: "Granular permissions with multi-factor authentication for all users",
  },
  {
    icon: Shield,
    title: "Secure Storage & Transmission",
    description: "HIPAA-compliant infrastructure with SOC 2 Type II certification",
  },
  {
    icon: FileCheck,
    title: "Provider Supervision & Audit Trails",
    description: "Complete logging of all interactions with tamper-proof audit trails",
  },
];

const auditTrailSteps = [
  {
    title: "AI Output Generation",
    description: "Timestamped logs of all AI-generated outputs with model version and confidence scores",
  },
  {
    title: "Provider Review Checkpoints",
    description: "Required review points for clinical content before patient delivery",
  },
  {
    title: "Escalation Triggers",
    description: "Automated flags for high-risk content requiring immediate provider attention",
  },
  {
    title: "Exportable Audit Logs",
    description: "Compliance-ready exports for regulatory audits and credentialing",
  },
];

const supervisionFeatures = [
  {
    title: "Reviewable & Overrideable Outputs",
    description: "All clinical outputs can be reviewed, edited, or overridden by licensed providers",
  },
  {
    title: "SOAP Note Attribution",
    description: "Complete edit history with provider attribution and version control",
  },
  {
    title: "Logged Companion Interactions",
    description: "All AI companion conversations logged and retrievable for provider review",
  },
  {
    title: "Credentialing & Billing Support",
    description: "Documentation workflows support credentialing requirements and billing compliance",
  },
];

const integrationStandards = [
  { name: "FHIR", description: "Fast Healthcare Interoperability Resources" },
  { name: "HL7", description: "Health Level Seven International" },
  { name: "Zoom", description: "Video integration for telehealth" },
  { name: "EHR", description: "Electronic Health Records compatibility" },
  { name: "Stripe", description: "Secure billing and payment processing" },
  { name: "Azure/OpenAI", description: "Model orchestration and supervision" },
];

const legalResources = [
  {
    title: "Privacy Policy",
    description: "How we collect, store, and protect your data",
    link: "/legal#privacy-policy",
    icon: Lock,
  },
  {
    title: "AI Usage",
    description: "How AI powers our platform with clinical oversight",
    link: "/legal#ai-usage",
    icon: Brain,
  },
  {
    title: "Terms of Use",
    description: "Your rights and responsibilities using our platform",
    link: "/legal#terms-of-use",
    icon: FileText,
  },
  {
    title: "HIPAA Notice",
    description: "Our commitment to healthcare privacy standards",
    link: "/legal#hipaa-notice",
    icon: Shield,
  },
];

export function Compliance() {
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
            <h1 className="text-white mb-4">Compliance & Clinical Integrity</h1>
            <p className="text-gray-400 text-lg max-w-4xl mx-auto">
              Built for HIPAA. Designed for supervision. Engineered for auditability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: HIPAA Compliance */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8 text-center"
          >
            HIPAA Compliance
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {hipaaFeatures.map((feature, index) => {
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
                    
                    <div className="relative z-10">
                      <motion.div
                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 mb-4"
                        whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                      >
                        <Icon className="w-7 h-7 text-teal-400" />
                      </motion.div>

                      <h3 className="text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
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
            className="text-center"
          >
            <Button
              variant="outline"
              className="border-teal-400/30 text-teal-400 hover:bg-teal-400/10"
              onClick={() => window.location.hash = "legal#hipaa-notice"}
            >
              View HIPAA Notice
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Audit Trail Logic */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8 text-center"
          >
            Audit Trail Logic
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-teal-400 via-cyan-400 to-blue-400 hidden md:block" />

              <div className="space-y-8">
                {auditTrailSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-start gap-6">
                      {/* Timeline dot */}
                      <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border-4 border-slate-950 relative flex-shrink-0" style={{ boxShadow: "0 0 20px rgba(100, 255, 218, 0.3)" }}>
                        <span className="text-teal-400 z-10">{index + 1}</span>
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full opacity-20" />
                      </div>

                      <Card
                        className="flex-1 p-6 border-0"
                        style={{
                          background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.5) 100%)",
                          backdropFilter: "blur(12px)",
                          border: "1px solid rgba(100, 255, 218, 0.15)",
                        }}
                      >
                        <h3 className="text-white mb-2">{step.title}</h3>
                        <p className="text-gray-400 text-sm">{step.description}</p>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Provider Supervision */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8 text-center"
          >
            Provider Supervision
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {supervisionFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className="p-6 border-0"
                    style={{
                      background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.5) 100%)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(100, 255, 218, 0.15)",
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card
                className="p-8 border-0 h-full flex flex-col justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(100, 255, 218, 0.2)",
                }}
              >
                <div className="text-center">
                  <motion.div
                    className="w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 mx-auto mb-6"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    <Eye className="w-12 h-12 text-teal-400" />
                  </motion.div>
                  
                  <h3 className="text-white mb-4">Clinical Oversight</h3>
                  <p className="text-gray-400 mb-6">
                    Every AI interaction is designed to support, not replace, clinical judgment. 
                    Providers maintain full control over all patient-facing content and decisions.
                  </p>

                  <div className="space-y-2">
                    <Badge className="bg-teal-400/10 text-teal-300 border-teal-400/20">
                      100% Provider Reviewable
                    </Badge>
                    <br />
                    <Badge className="bg-cyan-400/10 text-cyan-300 border-cyan-400/20">
                      Full Edit History
                    </Badge>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Standards-Based Integration */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8 text-center"
          >
            Standards-Based Integration
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {integrationStandards.map((standard, index) => (
              <motion.div
                key={standard.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <Card
                  className="p-6 border-0 text-center relative overflow-hidden group cursor-pointer"
                  style={{
                    background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.5) 100%)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(100, 255, 218, 0.15)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 mx-auto mb-4">
                      <GitBranch className="w-8 h-8 text-teal-400" />
                    </div>
                    
                    <h3 className="text-white mb-2">{standard.name}</h3>
                    <p className="text-gray-400 text-sm">{standard.description}</p>
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
        </div>
      </section>

      {/* Section 5: Linked Legal Resources */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8 text-center"
          >
            Legal Resources
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {legalResources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.a
                  key={resource.title}
                  href={resource.link}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="block"
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
                    
                    <div className="relative z-10 flex items-start gap-4">
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 flex-shrink-0"
                        whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                      >
                        <Icon className="w-6 h-6 text-teal-400" />
                      </motion.div>

                      <div className="flex-1">
                        <h3 className="text-white mb-2 group-hover:text-teal-400 transition-colors">
                          {resource.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{resource.description}</p>
                      </div>
                    </div>

                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-cyan-400"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ transformOrigin: "left" }}
                    />
                  </Card>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance Certifications */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
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
                <h2 className="text-white mb-4">Enterprise-Ready Compliance</h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  NuZephyrHealth.ai meets the highest standards for healthcare data security and regulatory compliance.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <Badge className="bg-teal-400/10 text-teal-300 border-teal-400/20 px-6 py-2">
                    HIPAA Compliant
                  </Badge>
                  <Badge className="bg-cyan-400/10 text-cyan-300 border-cyan-400/20 px-6 py-2">
                    SOC 2 Type II
                  </Badge>
                  <Badge className="bg-blue-400/10 text-blue-300 border-blue-400/20 px-6 py-2">
                    AES-256 Encryption
                  </Badge>
                  <Badge className="bg-indigo-400/10 text-indigo-300 border-indigo-400/20 px-6 py-2">
                    TLS 1.3
                  </Badge>
                  <Badge className="bg-purple-400/10 text-purple-300 border-purple-400/20 px-6 py-2">
                    FHIR Compatible
                  </Badge>
                  <Badge className="bg-violet-400/10 text-violet-300 border-violet-400/20 px-6 py-2">
                    HL7 Ready
                  </Badge>
                </div>

                <Button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-0 px-8 py-6">
                  Request Compliance Documentation
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
