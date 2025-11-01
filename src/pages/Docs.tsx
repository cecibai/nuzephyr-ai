import { motion } from "motion/react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  FileText,
  AlertTriangle,
  Stethoscope,
  MessageCircle,
  Shield,
  Activity,
  BarChart3,
  Key,
  Clock,
  Database,
  Lock,
  CheckCircle2,
  Code,
} from "lucide-react";

const apiModules = [
  { name: "Intake API", icon: FileText },
  { name: "Triage API", icon: AlertTriangle },
  { name: "Documentation API", icon: Stethoscope, subtitle: "ZephyrNotes, SOAP parsing" },
  { name: "Companion API", icon: MessageCircle, subtitle: "Zee-AI" },
  { name: "Escalation & Supervision API", icon: Shield },
  { name: "Provider Dashboard API", icon: Activity },
  { name: "Audit Trail & Export API", icon: BarChart3 },
];

const apiOverview = [
  {
    icon: Key,
    title: "Authentication",
    value: "API key (JWT) via secure partner portal",
  },
  {
    icon: Code,
    title: "Versioning",
    value: "/v1/ namespace",
  },
  {
    icon: Clock,
    title: "Rate Limits",
    value: "1000 requests/minute (customizable for enterprise)",
  },
  {
    icon: Lock,
    title: "Compliance",
    value: "HIPAA-compliant, supervision-ready, audit-trail enabled",
  },
];

export function Docs() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24">
      {/* Page Header */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.05) 0%, transparent 50%)" }} />
        
        {/* Animated code pattern */}
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
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='5' y='40' fill='%2364FFDA' font-size='30' font-family='monospace'%3E%7B%7D%3C/text%3E%3C/svg%3E")`,
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
              API Documentation
            </Badge>
            <h1 className="text-white mb-4">NuZephyr API Documentation</h1>
            <p className="text-gray-400 text-lg max-w-4xl mx-auto">
              Modular endpoints, clinical safeguards, and integration logic — built for intelligent care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Overview */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8"
          >
            Overview
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Card
              className="p-8 border-0"
              style={{
                background: "linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(100, 255, 218, 0.2)",
              }}
            >
              <p className="text-gray-300 mb-6">
                NuZephyr's API is designed for modular integration across intake, triage, documentation, and engagement workflows.
              </p>
              <p className="text-gray-300 mb-6">
                All endpoints are HIPAA-compliant, supervision-ready, and audit-trail enabled.
              </p>
              <div className="flex items-center gap-2 text-teal-400">
                <CheckCircle2 className="w-5 h-5" />
                <span className="text-sm">Full documentation available upon request or under NDA</span>
              </div>
            </Card>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {apiOverview.map((item, index) => {
              const Icon = item.icon;
              return (
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
                        <h3 className="text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.value}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Available Modules */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8"
          >
            Available Modules
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {apiModules.map((module, index) => {
              const Icon = module.icon;
              return (
                <motion.div
                  key={module.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
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

                      <h3 className="text-white mb-1">{module.name}</h3>
                      {module.subtitle && (
                        <p className="text-gray-400 text-xs">{module.subtitle}</p>
                      )}
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
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Sample Endpoint */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8"
          >
            Sample Endpoint
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card
              className="border-0 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(100, 255, 218, 0.2)",
              }}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-white mb-2">Submit Intake Form</h3>
                    <div className="flex items-center gap-3">
                      <Badge className="bg-teal-400/20 text-teal-300 border-teal-400/30">
                        POST
                      </Badge>
                      <code className="text-gray-300 text-sm">/v1/intake/submit</code>
                    </div>
                  </div>
                  <Database className="w-8 h-8 text-teal-400" />
                </div>

                <p className="text-gray-400 mb-6">
                  Submits a structured intake form for triage and documentation parsing.
                </p>

                {/* Request Section */}
                <div className="mb-6">
                  <h4 className="text-white mb-3 flex items-center gap-2">
                    <div className="w-1 h-4 bg-teal-400 rounded-full" />
                    Request
                  </h4>
                  <div
                    className="p-4 rounded-lg overflow-x-auto"
                    style={{
                      background: "rgba(15, 23, 42, 0.8)",
                      border: "1px solid rgba(100, 255, 218, 0.1)",
                    }}
                  >
                    <pre className="text-gray-300 text-sm">
                      <code>{`POST /v1/intake/submit
Headers:
  Authorization: Bearer YOUR_API_KEY
  Content-Type: application/json

Body:
{
  "patient_id": "abc123",
  "responses": {
    "mood": "anxious",
    "sleep": "poor",
    "goals": "reduce stress"
  },
  "submitted_at": "2025-10-25T14:32:00Z"
}`}</code>
                    </pre>
                  </div>
                </div>

                {/* Response Section */}
                <div>
                  <h4 className="text-white mb-3 flex items-center gap-2">
                    <div className="w-1 h-4 bg-cyan-400 rounded-full" />
                    Response
                  </h4>
                  <div
                    className="p-4 rounded-lg overflow-x-auto"
                    style={{
                      background: "rgba(15, 23, 42, 0.8)",
                      border: "1px solid rgba(100, 255, 218, 0.1)",
                    }}
                  >
                    <pre className="text-gray-300 text-sm">
                      <code>{`{
  "status": "received",
  "triage_level": "moderate",
  "escalation_flag": false,
  "next_steps": ["assign_provider", "generate_initial_note"]
}`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Request Full Documentation */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
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
                <h2 className="text-white mb-4">Request Full Documentation</h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Need full specs, sandbox access, or integration support?
                </p>

                <Button 
                  className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-0 px-8 py-6"
                  onClick={() => window.location.hash = "contact"}
                >
                  Request Full API Access
                </Button>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Badge className="bg-teal-400/10 text-teal-300 border-teal-400/20">
                    Full Endpoint Specs
                  </Badge>
                  <Badge className="bg-cyan-400/10 text-cyan-300 border-cyan-400/20">
                    Sandbox Access
                  </Badge>
                  <Badge className="bg-blue-400/10 text-blue-300 border-blue-400/20">
                    Integration Support
                  </Badge>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
