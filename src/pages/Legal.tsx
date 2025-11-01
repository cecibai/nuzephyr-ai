import { motion } from "motion/react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Shield, Lock, FileText, Brain, Eye, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";

const sections = [
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    icon: Lock,
    summary: "How we collect, store, and protect your data with industry-leading security measures.",
    content: [
      {
        heading: "Data Collection",
        text: "We collect only the minimum data necessary to provide our services. This includes user-provided information during intake, session data for AI companion interactions, and usage analytics to improve our platform.",
      },
      {
        heading: "Data Storage & Protection",
        text: "All data is encrypted both in transit (TLS 1.3) and at rest (AES-256). We use enterprise-grade cloud infrastructure with SOC 2 Type II compliance. Data is stored in HIPAA-compliant facilities within the United States.",
      },
      {
        heading: "HIPAA Compliance",
        text: "NuZephyrHealth.ai is fully HIPAA-compliant. We maintain Business Associate Agreements (BAAs) with all covered entities and implement comprehensive safeguards including access controls, audit logging, and breach notification procedures.",
      },
      {
        heading: "Third-Party Integrations",
        text: "We integrate with trusted partners including Zoom (video), Stripe (billing), Twilio/Vonage (communications), and Azure/OpenAI (AI models). All integrations are vetted for security and HIPAA compliance where applicable.",
      },
      {
        heading: "Data Retention & Deletion",
        text: "User data is retained only as long as necessary to provide services or as required by law. Users and providers can request data deletion at any time, subject to legal retention requirements.",
      },
    ],
  },
  {
    id: "ai-usage",
    title: "AI Usage",
    icon: Brain,
    summary: "How AI powers our platform while maintaining clinical oversight and transparency.",
    content: [
      {
        heading: "AI Across Modules",
        text: "NuZephyrHealth.ai uses AI to power six core modules: ZephyrInTake (adaptive assessment), ZephyrNotes (SOAP documentation), ZephyrMind (triage and routing), Zee-AI Companion (patient support), Personalized Prompts (therapeutic engagement), and Risk Detection (crisis identification).",
      },
      {
        heading: "Model Supervision & Oversight",
        text: "All AI outputs are designed to augment, not replace, clinical judgment. Provider supervision is built into our architecture. Clinical validation loops ensure model performance aligns with evidence-based practices.",
      },
      {
        heading: "No Diagnostic Substitution",
        text: "Our AI does not diagnose medical conditions or prescribe treatment. It provides decision support, documentation assistance, and engagement tools under the supervision of licensed healthcare providers.",
      },
      {
        heading: "Continuous Learning & Audit Trails",
        text: "Our models continuously improve through provider feedback loops and clinical validation. Every AI interaction is logged with full audit trails, including model version, confidence scores, and provider overrides.",
      },
      {
        heading: "Transparency & Explainability",
        text: "We prioritize explainable AI. Providers can access model reasoning, confidence levels, and data sources for all AI-generated outputs. We maintain comprehensive documentation on model architecture and training data.",
      },
    ],
  },
  {
    id: "terms-of-use",
    title: "Terms of Use",
    icon: FileText,
    summary: "Your rights and responsibilities when using NuZephyrHealth.ai platform.",
    content: [
      {
        heading: "Platform Access",
        text: "Access to NuZephyrHealth.ai is provided under a license agreement. Users must be authorized healthcare providers, patients referred by providers, or platform partners with valid licensing agreements.",
      },
      {
        heading: "User Responsibilities",
        text: "Users agree to: (1) provide accurate information, (2) maintain account security, (3) use the platform in compliance with applicable laws and regulations, (4) not attempt to reverse-engineer or exploit our systems, and (5) respect the intellectual property rights of NuZephyr and third parties.",
      },
      {
        heading: "Licensing Terms",
        text: "Our modular licensing allows per-module, per-provider, or per-member deployment. License terms vary by agreement type. All licenses are non-transferable and subject to compliance with our acceptable use policy.",
      },
      {
        heading: "Service Availability",
        text: "We strive for 99.9% uptime but do not guarantee uninterrupted service. Scheduled maintenance will be communicated in advance. We are not liable for service interruptions beyond our reasonable control.",
      },
      {
        heading: "Limitations of Liability",
        text: "NuZephyrHealth.ai provides tools and infrastructure for care delivery but is not liable for clinical decisions, patient outcomes, or damages arising from use of the platform. Clinical responsibility remains with licensed providers.",
      },
      {
        heading: "Termination",
        text: "Either party may terminate service with 30 days notice. Upon termination, user data will be made available for export and then deleted according to our retention policy.",
      },
    ],
  },
  {
    id: "hipaa-notice",
    title: "HIPAA Notice",
    icon: Shield,
    summary: "Our commitment to healthcare privacy and security standards.",
    content: [
      {
        heading: "HIPAA Compliance Framework",
        text: "NuZephyrHealth.ai implements all required HIPAA safeguards including administrative (policies, training), physical (data center security), and technical (encryption, access controls) measures.",
      },
      {
        heading: "Data Handling",
        text: "Protected Health Information (PHI) is: (1) encrypted in transit and at rest, (2) accessible only to authorized users with multi-factor authentication, (3) logged with comprehensive audit trails, and (4) stored in HIPAA-compliant infrastructure.",
      },
      {
        heading: "Provider Supervision",
        text: "All AI-generated content involving PHI is subject to provider review and approval. Providers maintain full control over patient data and clinical decisions. Our AI serves as a tool under provider supervision.",
      },
      {
        heading: "Audit Trail Logic",
        text: "We maintain detailed audit logs including: user access times, data modifications, AI model interactions, provider overrides, and system events. Logs are tamper-proof and retained for minimum 6 years.",
      },
      {
        heading: "Business Associate Agreements",
        text: "We execute BAAs with all covered entities and ensure our subcontractors (cloud providers, AI model hosts) also maintain HIPAA compliance and sign appropriate agreements.",
      },
      {
        heading: "Breach Notification",
        text: "In the unlikely event of a data breach, we will notify affected parties within 60 days as required by HIPAA, provide details of the breach, and outline remediation steps taken.",
      },
    ],
  },
];

export function Legal() {
  useEffect(() => {
    // Handle anchor links
    const handleScroll = () => {
      const fullHash = window.location.hash.slice(1); // e.g., "legal#privacy-policy"
      
      // Extract section ID from hash
      let sectionId = "";
      if (fullHash.includes("#")) {
        // Hash format: "legal#privacy-policy"
        sectionId = fullHash.split("#")[1];
      } else if (fullHash && !fullHash.includes("legal")) {
        // Hash format: "privacy-policy" (direct hash)
        sectionId = fullHash;
      }
      
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    };

    // Handle initial load and hash changes
    handleScroll();
    window.addEventListener("hashchange", handleScroll);
    
    return () => {
      window.removeEventListener("hashchange", handleScroll);
    };
  }, []);

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
            <h1 className="text-white mb-4">Legal & Compliance</h1>
            <p className="text-gray-400 text-lg max-w-4xl mx-auto">
              Our commitment to transparency, safety, and clinical-grade integrity across every interaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <motion.a
                  key={section.id}
                  href={`#${section.id}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card
                    className="px-6 py-3 border-0 cursor-pointer group"
                    style={{
                      background: "linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.5) 100%)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(100, 255, 218, 0.15)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-teal-400 group-hover:text-teal-300 transition-colors" />
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {section.title}
                      </span>
                    </div>
                  </Card>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Legal Sections */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="scroll-mt-32"
              >
                <Card
                  className="p-8 md:p-12 border-0 relative overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)",
                    backdropFilter: "blur(12px)",
                    border: "1px solid rgba(100, 255, 218, 0.2)",
                  }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-cyan-400" />
                  
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 flex-shrink-0"
                      whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                    >
                      <Icon className="w-7 h-7 text-teal-400" />
                    </motion.div>
                    
                    <div className="flex-1">
                      <h2 className="text-white mb-2">{section.title}</h2>
                      <p className="text-gray-400">{section.summary}</p>
                    </div>
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                    {section.content.map((item, itemIndex) => (
                      <AccordionItem 
                        key={itemIndex} 
                        value={`item-${itemIndex}`}
                        className="border-0"
                      >
                        <AccordionTrigger className="text-white hover:text-teal-400 transition-colors hover:no-underline">
                          <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-teal-400" />
                            <span>{item.heading}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300 pl-8">
                          {item.text}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                  <div className="mt-8 pt-8 border-t border-gray-800">
                    <Button
                      variant="outline"
                      className="border-teal-400/30 text-teal-400 hover:bg-teal-400/10"
                      onClick={() => {
                        const element = document.getElementById(section.id);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }}
                    >
                      View Full {section.title}
                    </Button>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Compliance Badges */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
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
              <h3 className="text-white mb-6">Compliance & Certifications</h3>
              <div className="flex flex-wrap justify-center gap-4">
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
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white mb-4">Questions About Our Legal Policies?</h3>
            <p className="text-gray-400 mb-6">
              Our legal and compliance team is here to help answer any questions you may have.
            </p>
            <Button 
              className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-0 px-8 py-6"
              onClick={() => window.location.hash = "contact"}
            >
              Contact Legal Team
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
