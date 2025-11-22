import { motion } from "motion/react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Heart,
  Target,
  Grid3x3,
  Eye,
  Zap,
  Briefcase,
  MapPin,
  Clock,
  Code,
  Palette,
  Stethoscope,
  Settings,
  Mail,
  Users,
  Sparkles,
} from "lucide-react";

const whyNuZephyr = [
  {
    icon: Grid3x3,
    title: "Modular AI Infrastructure",
    description:
      "Build cutting-edge healthcare solutions with real-world impact. Our modular approach enables scalable, flexible care delivery.",
  },
  {
    icon: Users,
    title: "Collaborative, Remote-First",
    description:
      "Work from anywhere with a globally distributed team. We prioritize async communication, flexibility, and work-life balance.",
  },
  {
    icon: Target,
    title: "Clinical-Grade Precision",
    description:
      "Merge design-led innovation with clinical rigor. Every feature is built with provider oversight and patient safety in mind.",
  },
  {
    icon: Zap,
    title: "Built for Scale",
    description:
      "Backed by providers and designed for growth. Join us in transforming how healthcare is delivered across platforms and populations.",
  },
];

const openRoles = [
  {
    title: "Product Designer",
    type: "Remote · Full-Time",
    icon: Palette,
    description: "Own UI/UX for modular care flows and design system evolution",
    responsibilities: [
      "Design intuitive interfaces for intake, triage, and documentation modules",
      "Collaborate with clinical and engineering teams",
      "Build and maintain design systems in Figma",
      "Champion accessibility and inclusive design",
    ],
    skills: ["Figma", "Systems Thinking", "Accessibility", "User Research"],
  },
  {
    title: "Backend Engineer",
    type: "Remote · Full-Time",
    icon: Code,
    description: "Build scalable APIs and HIPAA-compliant integration logic",
    responsibilities: [
      "Design and implement RESTful APIs for healthcare modules",
      "Ensure HIPAA compliance and data security",
      "Optimize database performance and query efficiency",
      "Build integration pipelines with EHR systems",
    ],
    skills: ["Node.js", "Python", "PostgreSQL", "Healthcare Standards"],
  },
  {
    title: "Clinical Advisor",
    type: "Part-Time · Remote",
    icon: Stethoscope,
    description: "Validate care logic and documentation flows with clinical expertise",
    responsibilities: [
      "Review and validate SOAP note generation accuracy",
      "Provide clinical input on triage and escalation logic",
      "Support training and quality assurance processes",
      "Collaborate with product team on feature development",
    ],
    skills: ["Licensed Provider", "US-Based", "Telehealth", "Documentation"],
  },
  {
    title: "Operations Lead",
    type: "Remote · Full-Time",
    icon: Settings,
    description: "Drive onboarding, compliance, and partner success initiatives",
    responsibilities: [
      "Design and optimize provider onboarding workflows",
      "Manage compliance documentation and audits",
      "Support partner integrations and customer success",
      "Build operational playbooks and SOPs",
    ],
    skills: ["Strategic Ops", "Health Tech", "Process Design", "Compliance"],
  },
];

const cultureValues = [
  {
    icon: Heart,
    title: "Empathy",
    description: "We design with compassion for patients, providers, and partners",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Clinical-grade accuracy in every line of code and every design decision",
  },
  {
    icon: Grid3x3,
    title: "Modularity",
    description: "Build flexible systems that adapt to diverse care environments",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Open communication, clear documentation, and honest feedback",
  },
  {
    icon: Zap,
    title: "Velocity",
    description: "Move fast without compromising quality or safety",
  },
];

export function Careers() {
  return (
    <div className="min-h-screen bg-slate-950 pt-24">
      {/* Page Header */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.05) 0%, transparent 50%)",
          }}
        />

        {/* Animated background pattern */}
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
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L35 25L60 30L35 35L30 60L25 35L0 30L25 25Z' fill='%2364FFDA'/%3E%3C/svg%3E")`,
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
              We're Hiring
            </Badge>
            <h1 className="text-white mb-4">Join the Team</h1>
            <p className="text-gray-400 text-lg max-w-4xl mx-auto">
              Help us build the future of intelligent care - modular, inclusive, and
              clinically grounded.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Why NuZephyr */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8 text-center"
          >
            Why NuZephyr?
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {whyNuZephyr.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <Card
                    className="p-8 border-0 h-full relative overflow-hidden group"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(100, 255, 218, 0.2)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />

                    <div className="relative z-10">
                      <motion.div
                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 mb-4"
                        whileHover={{
                          rotate: 360,
                          transition: { duration: 0.6 },
                        }}
                      >
                        <Icon className="w-7 h-7 text-teal-400" />
                      </motion.div>

                      <h3 className="text-white mb-3">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card
              className="p-8 md:p-12 border-0 text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(100, 255, 218, 0.3)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <div className="flex justify-center mb-6">
                  <Sparkles className="w-12 h-12 text-teal-400" />
                </div>
                <p className="text-white text-lg mb-6 italic">
                  We're building infrastructure that respects the complexity of care, not replacing providers, but empowering them with modular tools that adapt to their workflows, not the other way around.
                </p>
                <p className="text-teal-400">— NuZephyr Health</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Open Roles */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8 text-center"
          >
            Open Roles
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {openRoles.map((role, index) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <Card
                    className="p-8 border-0 h-full relative overflow-hidden group"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(100, 255, 218, 0.2)",
                    }}
                  >
                    <motion.div
                      className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-cyan-400"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{ transformOrigin: "left" }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />

                    <div className="relative z-10">
                      <div className="flex items-start gap-4 mb-4">
                        <motion.div
                          className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 flex-shrink-0"
                          whileHover={{
                            scale: 1.1,
                            rotate: 360,
                            transition: { duration: 0.6 },
                          }}
                        >
                          <Icon className="w-6 h-6 text-teal-400" />
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-white mb-1">{role.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span>{role.type}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4">{role.description}</p>

                      <div className="mb-4">
                        <div className="text-sm text-gray-400 mb-2">Key Responsibilities:</div>
                        <ul className="space-y-1">
                          {role.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 flex-shrink-0" />
                              <span className="text-gray-300">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill) => (
                          <Badge
                            key={skill}
                            className="bg-teal-400/10 text-teal-300 border-teal-400/20 text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Culture & Values */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8 text-center"
          >
            Culture & Values
          </motion.h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {cultureValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <Card
                    className="p-6 border-0 h-full text-center relative overflow-hidden group"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.5) 100%)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(100, 255, 218, 0.15)",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />

                    <div className="relative z-10">
                      <motion.div
                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 mb-4 mx-auto"
                        whileHover={{
                          rotate: 360,
                          transition: { duration: 0.5 },
                        }}
                      >
                        <Icon className="w-7 h-7 text-teal-400" />
                      </motion.div>

                      <h3 className="text-white mb-2">{value.title}</h3>
                      <p className="text-gray-400 text-sm">{value.description}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: How to Apply */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card
              className="p-12 md:p-16 border-0 text-center relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(100, 255, 218, 0.3)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10" />

              {/* Animated particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-teal-400 rounded-full"
                  initial={{
                    x: Math.random() * 100 + "%",
                    y: Math.random() * 100 + "%",
                    opacity: 0,
                  }}
                  animate={{
                    y: [null, "-100%"],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.6,
                  }}
                />
              ))}

              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 mb-6 mx-auto"
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <Mail className="w-8 h-8 text-teal-400" />
                </motion.div>

                <h2 className="text-white mb-4">How to Apply</h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg">
                  We review every application with care. Tell us why you're excited to
                  build with us.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-0 px-8 py-6"
                    onClick={() =>
                      (window.location.href = "mailto:hello@NuZephyrHealth.ai")
                    }
                  >
                    Apply Now
                  </Button>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800">
                  <p className="text-gray-400 text-sm">
                    We are an equal opportunity employer. We celebrate
                    diversity and are committed to creating an inclusive environment for
                    all employees.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
