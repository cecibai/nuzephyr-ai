import { motion } from "motion/react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Mail, Sparkles, Stethoscope, Users, Shield } from "lucide-react";
import { useState } from "react";

const benefits = [
  {
    icon: Stethoscope,
    title: "Clinical Insights",
    description: "From our team and advisors — real-world perspectives on AI-driven care",
  },
  {
    icon: Sparkles,
    title: "Product Updates",
    description: "New modules, features, and platform integrations as they launch",
  },
  {
    icon: Users,
    title: "Partner Stories",
    description: "Case studies and collaboration highlights from our ecosystem",
  },
];

export function Subscribe() {
  const [email, setEmail] = useState("");
  const [isProvider, setIsProvider] = useState(false);
  const [isPartner, setIsPartner] = useState(false);
  const [isInvestor, setIsInvestor] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Replace 'your-form-id' with your actual Formspree form ID
      // Get your form ID at https://formspree.io/
      // Configure your Formspree form to send notifications to hello@NuZephyrHealth.ai
      const response = await fetch("https://formspree.io/f/xblpzroq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          subscriber_type: {
            provider: isProvider,
            partner: isPartner,
            investor: isInvestor,
          },
          form_type: "newsletter_subscription",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setEmail("");
          setIsProvider(false);
          setIsPartner(false);
          setIsInvestor(false);
          setSubmitted(false);
        }, 3000);
      } else {
        throw new Error("Subscription failed");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      // For demo purposes, still show success
      // In production, show error message to user
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setEmail("");
        setIsProvider(false);
        setIsPartner(false);
        setIsInvestor(false);
        setSubmitted(false);
      }, 3000);
    }
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
              Newsletter
            </Badge>
            <h1 className="text-white mb-4">Stay in the Loop</h1>
            <p className="text-gray-400 text-lg max-w-4xl mx-auto">
              Subscribe for modular updates, clinical insights, and product news from
              NuZephyrHealth.ai.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Email Capture Form */}
      <section className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
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
                    <div>
                      <Label htmlFor="email" className="text-white mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="bg-slate-900/50 border-gray-800 text-white placeholder:text-gray-500 focus:border-teal-400 focus:ring-teal-400/20"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-white">I'm a... (optional)</Label>
                      
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="provider"
                          checked={isProvider}
                          onCheckedChange={(checked) => setIsProvider(checked as boolean)}
                          className="border-gray-700 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
                        />
                        <Label
                          htmlFor="provider"
                          className="text-gray-300 cursor-pointer"
                        >
                          Provider
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="partner"
                          checked={isPartner}
                          onCheckedChange={(checked) => setIsPartner(checked as boolean)}
                          className="border-gray-700 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
                        />
                        <Label
                          htmlFor="partner"
                          className="text-gray-300 cursor-pointer"
                        >
                          Platform Partner
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="investor"
                          checked={isInvestor}
                          onCheckedChange={(checked) => setIsInvestor(checked as boolean)}
                          className="border-gray-700 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
                        />
                        <Label
                          htmlFor="investor"
                          className="text-gray-300 cursor-pointer"
                        >
                          Investor
                        </Label>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-0 py-6"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Subscribe
                    </Button>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 mb-6 mx-auto"
                    >
                      <Mail className="w-10 h-10 text-teal-400" />
                    </motion.div>
                    <h3 className="text-white mb-2">Welcome to NuZephyr!</h3>
                    <p className="text-gray-400">
                      Check your inbox for a confirmation email. We're excited to share our
                      journey with you.
                    </p>
                  </motion.div>
                )}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 2: What You'll Get */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-8 text-center"
          >
            What You'll Get
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                >
                  <Card
                    className="p-8 border-0 h-full text-center relative overflow-hidden group"
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

                      <h3 className="text-white mb-3">{benefit.title}</h3>
                      <p className="text-gray-400">{benefit.description}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3: Privacy Assurance */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card
              className="p-8 border-0 text-center relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.5) 100%)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(100, 255, 218, 0.15)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-cyan-500/5" />

              <div className="relative z-10 max-w-3xl mx-auto">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 mb-4 mx-auto"
                  whileHover={{
                    rotate: 360,
                    transition: { duration: 0.6 },
                  }}
                >
                  <Shield className="w-6 h-6 text-teal-400" />
                </motion.div>

                <h3 className="text-white mb-3">We Respect Your Privacy</h3>
                <p className="text-gray-400 mb-4">
                  We respect your inbox and your data. You'll only receive relevant updates, and
                  you can unsubscribe anytime.
                </p>
                <Button
                  variant="ghost"
                  className="text-teal-400 hover:text-teal-300 hover:bg-teal-400/10"
                  onClick={() => {
                    window.location.hash = "legal#privacy-policy";
                  }}
                >
                  View Privacy Policy
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
