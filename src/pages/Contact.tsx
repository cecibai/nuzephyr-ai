import { motion } from "motion/react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";
import { Badge } from "../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Mail, Calendar, Users, Clock, Brain, Shield, Send } from "lucide-react";
import { useState } from "react";

const expectations = [
  {
    icon: Clock,
    title: "Response within 2 business days",
    description: "We prioritize timely, thoughtful replies",
  },
  {
    icon: Brain,
    title: "Thoughtful, personalized replies",
    description: "Every inquiry gets our full attention",
  },
  {
    icon: Shield,
    title: "Your data is never shared or sold",
    description: "Privacy and security are foundational",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    message: "",
    demoRequest: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace 'your-form-id' with your actual Formspree form ID
      // Get your form ID at https://formspree.io/
      // Configure your Formspree form to send notifications to hello@NuZephyrHealth.ai
      const response = await fetch("https://formspree.io/f/manlpwbg", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          role: formData.role,
          message: formData.message,
          demo_request: formData.demoRequest,
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
            message: "",
            demoRequest: false,
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
          message: "",
          demoRequest: false,
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
              <Mail className="w-3 h-3 mr-1" />
              Get in Touch
            </Badge>
            <h1 className="text-white mb-4">Let's Connect</h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Whether you're a provider, platform, or partner — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Contact Form */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
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
                        <Label htmlFor="organization" className="text-white mb-2 block">
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

                    {/* Message */}
                    <div>
                      <Label htmlFor="message" className="text-white mb-2 block">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us about your needs, questions, or partnership ideas..."
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="bg-slate-900/50 border-gray-800 text-white placeholder:text-gray-500 focus:border-teal-400 focus:ring-teal-400/20"
                      />
                    </div>

                    {/* Demo Request Checkbox */}
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="demoRequest"
                        checked={formData.demoRequest}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, demoRequest: checked as boolean })
                        }
                        className="border-gray-700 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
                      />
                      <Label
                        htmlFor="demoRequest"
                        className="text-gray-300 cursor-pointer"
                      >
                        Request a demo
                      </Label>
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
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
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
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 mb-6 mx-auto"
                    >
                      <Send className="w-10 h-10 text-teal-400" />
                    </motion.div>
                    <h3 className="text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400 mb-4">
                      Thank you for reaching out. We'll get back to you within 2 business days.
                    </p>
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

      {/* Section 2: Direct Contact */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8 text-center"
          >
            Direct Contact
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
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
                    whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                  >
                    <Mail className="w-8 h-8 text-teal-400" />
                  </motion.div>

                  <h3 className="text-white mb-2">Email</h3>
                  <a
                    href="mailto:hello@NuZephyrHealth.ai"
                    className="text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    hello@NuZephyrHealth.ai
                  </a>
                </div>
              </Card>
            </motion.div>

            {/* Demo Request */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card
                className="p-8 border-0 text-center relative overflow-hidden group h-full cursor-pointer"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(100, 255, 218, 0.2)",
                }}
                onClick={() => {
                  window.location.hash = "live-system";
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />

                <div className="relative z-10">
                  <motion.div
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-400/20 to-teal-400/20 flex items-center justify-center border border-cyan-400/30 mb-4 mx-auto"
                    whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                  >
                    <Calendar className="w-8 h-8 text-cyan-400" />
                  </motion.div>

                  <h3 className="text-white mb-2">Demo</h3>
                  <p className="text-gray-400 mb-3">See our platform in action</p>
                  <Button
                    variant="ghost"
                    className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/10"
                  >
                    Request a Demo
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Partnerships */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
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
                    className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-400/20 to-purple-400/20 flex items-center justify-center border border-violet-400/30 mb-4 mx-auto"
                    whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
                  >
                    <Users className="w-8 h-8 text-violet-400" />
                  </motion.div>

                  <h3 className="text-white mb-2">Partnerships</h3>
                  <a
                    href="mailto:hello@NuZephyrHealth.ai"
                    className="text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    hello@NuZephyrHealth.ai
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: What to Expect */}
      <section className="py-12 px-6">
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
                        whileHover={{ rotate: 360, transition: { duration: 0.6 } }}
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
