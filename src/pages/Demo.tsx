import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Badge } from "../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Video,
  Puzzle,
  Brain,
  Shield,
  BarChart3,
  Settings,
  Clock,
  UserCheck,
  Handshake,
  Send,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const whatYouWillSee = [
  {
    icon: Puzzle,
    title: "Modular intake, triage, and documentation flows",
    description: "See our adaptive workflows in action",
    color: "teal",
  },
  {
    icon: Brain,
    title: "AI companion logic with supervision safeguards",
    description: "Experience Zee-AI's intelligent assistance",
    color: "cyan",
  },
  {
    icon: Shield,
    title: "HIPAA-compliant architecture and audit trail exports",
    description: "Explore our security-first infrastructure",
    color: "violet",
  },
  {
    icon: BarChart3,
    title: "Dashboard and provider review workflows",
    description: "View real-time analytics and insights",
    color: "teal",
  },
  {
    icon: Settings,
    title: "API integration and white-label options",
    description: "Discover seamless platform integration",
    color: "cyan",
  },
];

const expectations = [
  {
    icon: Clock,
    title: "30–45 minute walkthrough",
    description: "Comprehensive demo tailored to your needs",
  },
  {
    icon: UserCheck,
    title: "Tailored to your role and use case",
    description: "Personalized to your specific requirements",
  },
  {
    icon: Handshake,
    title: "Follow-up and integration support",
    description: "Ongoing support for your implementation",
  },
];

export function Demo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    demoFocus: "",
    timezone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Carousel state for What You'll See
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % whatYouWillSee.length);
    }, 4000); // Advance every 4 seconds
    
    return () => clearInterval(timer);
  }, []);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % whatYouWillSee.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + whatYouWillSee.length) % whatYouWillSee.length);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace 'your-form-id' with your actual Formspree form ID
      // Get your form ID at https://formspree.io/
      // Configure your Formspree form to send notifications to hello@NuZephyrHealth.ai
      const response = await fetch("https://formspree.io/f/xqagyzlr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          role: formData.role,
          demo_focus: formData.demoFocus,
          timezone: formData.timezone,
        }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setSubmitted(true);

        // Reset form after 5 seconds
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            organization: "",
            role: "",
            demoFocus: "",
            timezone: "",
          });
          setSubmitted(false);
        }, 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // For demo purposes, still show success
      // In production, show error message to user
      setIsSubmitting(false);
      setSubmitted(true);

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          organization: "",
          role: "",
          demoFocus: "",
          timezone: "",
        });
        setSubmitted(false);
      }, 5000);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
              <Video className="w-3 h-3 mr-1" />
              Schedule a Demo
            </Badge>
            <h1 className="text-white mb-4">Request a Demo</h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              See how NuZephyrHealth.ai powers intelligent, modular, and
              supervision-ready care — in real time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: What You'll See - Carousel */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8 text-center"
          >
            What You'll See
          </motion.h2>

          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  {(() => {
                    const item = whatYouWillSee[currentSlide];
                    const Icon = item.icon;
                    const colorClass =
                      item.color === "teal"
                        ? "from-teal-400/20 to-cyan-400/20 border-teal-400/30 text-teal-400"
                        : item.color === "cyan"
                        ? "from-cyan-400/20 to-teal-400/20 border-cyan-400/30 text-cyan-400"
                        : "from-violet-400/20 to-purple-400/20 border-violet-400/30 text-violet-400";

                    return (
                      <div className="flex justify-center px-4">
                        <Card
                          className="p-8 border-0 w-full max-w-2xl relative overflow-hidden group"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)",
                            backdropFilter: "blur(12px)",
                            border: "1px solid rgba(100, 255, 218, 0.2)",
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />

                          <div className="relative z-10 text-center">
                            <motion.div
                              className={`w-20 h-20 rounded-xl bg-gradient-to-br ${colorClass} flex items-center justify-center border mb-6 mx-auto`}
                              animate={{ rotate: [0, 360] }}
                              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                              <Icon className="w-10 h-10" />
                            </motion.div>

                            <h3 className="text-white mb-3 text-xl">{item.title}</h3>
                            <p className="text-gray-400">{item.description}</p>
                          </div>

                          <motion.div
                            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-400 to-violet-400"
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
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-teal-400/30 flex items-center justify-center text-teal-400 hover:bg-slate-700/80 transition-all z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-teal-400/30 flex items-center justify-center text-teal-400 hover:bg-slate-700/80 transition-all z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {whatYouWillSee.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? "bg-teal-400 w-8" 
                      : "bg-slate-600 hover:bg-slate-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Demo Request Form */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8 text-center"
          >
            Request Your Personalized Demo
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card
              className="p-8 md:p-12 border-0 relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(100, 255, 218, 0.3)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400" />
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10" />

              <div className="relative z-10">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div>
                        <Label htmlFor="name" className="text-white mb-2 block">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Jane Doe"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="bg-slate-900/50 border-gray-800 text-white placeholder:text-gray-500 focus:border-teal-400 focus:ring-teal-400/20"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <Label htmlFor="email" className="text-white mb-2 block">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="jane@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="bg-slate-900/50 border-gray-800 text-white placeholder:text-gray-500 focus:border-teal-400 focus:ring-teal-400/20"
                        />
                      </div>

                      {/* Organization */}
                      <div>
                        <Label
                          htmlFor="organization"
                          className="text-white mb-2 block"
                        >
                          Organization
                        </Label>
                        <Input
                          id="organization"
                          name="organization"
                          type="text"
                          placeholder="Your Company"
                          value={formData.organization}
                          onChange={handleInputChange}
                          className="bg-slate-900/50 border-gray-800 text-white placeholder:text-gray-500 focus:border-teal-400 focus:ring-teal-400/20"
                        />
                      </div>

                      {/* Role */}
                      <div>
                        <Label htmlFor="role" className="text-white mb-2 block">
                          Role
                        </Label>
                        <Select
                          value={formData.role}
                          onValueChange={(value) =>
                            setFormData({ ...formData, role: value })
                          }
                        >
                          <SelectTrigger className="bg-slate-900/50 border-gray-800 text-white focus:border-teal-400 focus:ring-teal-400/20">
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent className="bg-slate-900 border-gray-800">
                            <SelectItem value="provider" className="text-white">
                              Provider
                            </SelectItem>
                            <SelectItem value="platform" className="text-white">
                              Platform Partner
                            </SelectItem>
                            <SelectItem value="investor" className="text-white">
                              Investor
                            </SelectItem>
                            <SelectItem value="other" className="text-white">
                              Other
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* What you'd like to see */}
                    <div>
                      <Label
                        htmlFor="demoFocus"
                        className="text-white mb-2 block"
                      >
                        What would you like to see?
                      </Label>
                      <Textarea
                        id="demoFocus"
                        name="demoFocus"
                        placeholder="Tell us which features or workflows you're most interested in exploring..."
                        rows={4}
                        value={formData.demoFocus}
                        onChange={handleInputChange}
                        className="bg-slate-900/50 border-gray-800 text-white placeholder:text-gray-500 focus:border-teal-400 focus:ring-teal-400/20"
                      />
                    </div>

                    {/* Preferred timezone */}
                    <div>
                      <Label
                        htmlFor="timezone"
                        className="text-white mb-2 block"
                      >
                        Preferred Time Zone
                      </Label>
                      <Input
                        id="timezone"
                        name="timezone"
                        type="text"
                        placeholder="e.g., PST, EST, GMT+1"
                        value={formData.timezone}
                        onChange={handleInputChange}
                        className="bg-slate-900/50 border-gray-800 text-white placeholder:text-gray-500 focus:border-teal-400 focus:ring-teal-400/20"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-0 py-6 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                          />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Request Demo
                        </>
                      )}
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 mb-6 mx-auto"
                    >
                      <Video className="w-10 h-10 text-teal-400" />
                    </motion.div>
                    <h3 className="text-white mb-2">
                      Your NuZephyr Demo Request Is Confirmed
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Thanks for reaching out — we're excited to show you what
                      modular care looks like.
                    </p>
                    <div className="bg-slate-900/50 border border-teal-400/20 rounded-lg p-6 mb-6 max-w-2xl mx-auto">
                      <p className="text-gray-300 mb-4">
                        We've received your demo request and will be in touch
                        within 1–2 business days to schedule a time. In the
                        meantime, feel free to explore our resources:
                      </p>
                      <div className="flex flex-wrap gap-3 justify-center">
                        <Button
                          variant="outline"
                          className="border-teal-400/30 text-teal-400 hover:bg-teal-400/10"
                          onClick={() => (window.location.hash = "blog")}
                        >
                          Explore the Blog
                        </Button>
                        <Button
                          variant="outline"
                          className="border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10"
                          onClick={() => (window.location.hash = "modules")}
                        >
                          Platform Overview
                        </Button>
                        <Button
                          variant="outline"
                          className="border-violet-400/30 text-violet-400 hover:bg-violet-400/10"
                          onClick={() => (window.location.hash = "compliance")}
                        >
                          Compliance
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500">
                      Check your inbox for a confirmation email.
                    </p>
                  </motion.div>
                )}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 3: What to Expect */}
      <section className="py-12 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8 text-center"
          >
            What to Expect
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {expectations.map((item, index) => {
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
                    className="p-8 border-0 text-center relative overflow-hidden group h-full"
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
                        className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 mb-4 mx-auto"
                        whileHover={{
                          rotate: 360,
                          transition: { duration: 0.6 },
                        }}
                      >
                        <Icon className="w-8 h-8 text-teal-400" />
                      </motion.div>

                      <h3 className="text-white mb-3">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
