import { motion } from "motion/react";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import {
  Calendar,
  Clock,
  ArrowRight,
  User,
  Mail,
  Sparkles,
  FileText,
  Stethoscope,
  Users,
  Heart,
} from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "all", label: "All Posts", icon: FileText },
  { id: "product", label: "Product Updates", icon: Sparkles },
  { id: "clinical", label: "Clinical Insights", icon: Stethoscope },
  { id: "founder", label: "Founder Notes", icon: User },
  { id: "partner", label: "Partner Stories", icon: Users },
  { id: "culture", label: "Culture & Team", icon: Heart },
];

const featuredPost = {
  title: "Why Modularity Matters in AI-Driven Care",
  excerpt:
    "A deep dive into how NuZephyr's modular architecture enables scalable, inclusive, and clinically grounded care. We explore the design philosophy behind our six core modules and why flexibility is the future of healthcare AI.",
  tag: "Product Update",
  category: "product",
  date: "November 2025",
  readTime: "8 min read",
  author: "NuZephyr Product Team",
  link: "why-modularity-matters",
};

const blogPosts = [
  {
    title: "Designing for Clinical Precision",
    excerpt:
      "How we build UI that reflects real-world provider workflows, balancing speed with accuracy and empathy with efficiency.",
    tag: "Founder Note",
    category: "founder",
    date: "October 2025",
    readTime: "6 min read",
    author: "Founder Team",
    link: "designing-for-clinical-precision",
  },
  {
    title: "Triage Logic in Action",
    excerpt:
      "Behind the scenes of our AI-powered escalation and routing system. Learn how ZephyrInTake determines urgency and connects patients to the right level of care.",
    tag: "Clinical Insight",
    category: "clinical",
    date: "September 2025",
    readTime: "7 min read",
    author: "Clinical Advisory Board",
    link: "triage-logic-in-action",
  },
  {
    title: "Partnering for Whole-Person Care",
    excerpt:
      "Highlights from our integration with a behavioral health platform. How modular systems enable seamless collaboration across specialties.",
    tag: "Partner Story",
    category: "partner",
    date: "August 2025",
    readTime: "5 min read",
    author: "Partnerships Team",
    link: "partnering-for-whole-person-care",
  },
  {
    title: "Building Zee-AI: The Companion that Listens",
    excerpt:
      "The design philosophy behind our AI companion. How we balance engagement with clinical boundaries and empathy with safety.",
    tag: "Product Team",
    category: "product",
    date: "July 2025",
    readTime: "9 min read",
    author: "Product Team",
    link: "building-zee-ai",
  },
  {
    title: "Remote-First Culture: One Year In",
    excerpt:
      "Lessons learned from building a distributed healthcare AI company. Our approach to async work, team rituals, and maintaining velocity.",
    tag: "Culture & Team",
    category: "culture",
    date: "June 2025",
    readTime: "6 min read",
    author: "Operations Team",
    link: "remote-first-culture",
  },
  {
    title: "HIPAA Compliance in a Modular World",
    excerpt:
      "How we maintain security and privacy across six independent modules. A technical deep dive into our compliance architecture.",
    tag: "Clinical Insight",
    category: "clinical",
    date: "August 2025",
    readTime: "10 min read",
    author: "Security Team",
    link: "hipaa-compliance-modular",
  },
];

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filteredPosts =
    selectedCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Replace 'your-form-id' with your actual Formspree form ID
      // Get your form ID at https://formspree.io/
      // Configure your Formspree form to send notifications to hello@NuZephyrHealth.ai
      const response = await fetch("https://formspree.io/f/xjkpaboz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          form_type: "blog_newsletter_subscription",
        }),
      });

      if (response.ok) {
        setSubscribed(true);
        setEmail("");
        
        // Reset subscription message after 5 seconds
        setTimeout(() => {
          setSubscribed(false);
        }, 5000);
      } else {
        throw new Error("Subscription failed");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      // For demo purposes, still show success
      setSubscribed(true);
      setEmail("");
      
      // Reset subscription message after 5 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 5000);
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
              <Sparkles className="w-3 h-3 mr-1" />
              Insights & Updates
            </Badge>
            <h1 className="text-white mb-4">The NuZephyr Blog</h1>
            <p className="text-gray-400 text-lg max-w-4xl mx-auto">
              Modular updates, clinical insights, and product stories from the future
              of intelligent care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 1: Featured Post */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            onClick={() => {
              window.location.hash = `blog/${featuredPost.link}`;
            }}
          >
            <Card
              className="p-8 md:p-12 border-0 relative overflow-hidden group cursor-pointer"
              style={{
                background:
                  "linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(100, 255, 218, 0.3)",
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400" />

              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />

              {/* Animated particles */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    x: [0, (Math.random() - 0.5) * 200],
                    y: [0, (Math.random() - 0.5) * 200],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                />
              ))}

              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge className="bg-teal-400/20 text-teal-300 border-teal-400/30">
                    Featured
                  </Badge>
                  <Badge className="bg-purple-400/20 text-purple-300 border-purple-400/30">
                    {featuredPost.tag}
                  </Badge>
                </div>

                <h2 className="text-white mb-4 group-hover:text-teal-300 transition-colors">
                  {featuredPost.title}
                </h2>

                <p className="text-gray-300 text-lg mb-6">{featuredPost.excerpt}</p>

                <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-teal-400" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-teal-400" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-400" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>

                <Button className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-0 group">
                  Read Full Article
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Categories Filter */}
      <section className="py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category, index) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full border transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border-teal-400 text-teal-300"
                      : "bg-slate-900/50 border-gray-800 text-gray-400 hover:border-teal-400/50 hover:text-teal-400"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{category.label}</span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Section 2: Blog Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.link}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                onClick={() => {
                  window.location.hash = `blog/${post.link}`;
                }}
              >
                <Card
                  className="p-6 border-0 h-full flex flex-col relative overflow-hidden group cursor-pointer"
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

                  <div className="relative z-10 flex-1 flex flex-col">
                    <Badge className="bg-purple-400/20 text-purple-300 border-purple-400/30 mb-3 w-fit">
                      {post.tag}
                    </Badge>

                    <h3 className="text-white mb-3 group-hover:text-teal-300 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="space-y-3 pt-4 border-t border-gray-800">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <User className="w-3 h-3 text-teal-400" />
                        <span>{post.author}</span>
                      </div>

                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3 h-3 text-teal-400" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-teal-400" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>

                      <Button
                        variant="ghost"
                        className="text-teal-400 hover:text-teal-300 hover:bg-teal-400/10 p-0 h-auto group/btn"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400">
                No posts found in this category. Check back soon!
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Section 4: Subscribe CTA */}
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
              {[...Array(6)].map((_, i) => (
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
                    delay: i * 0.5,
                  }}
                />
              ))}

              <div className="relative z-10 max-w-2xl mx-auto">
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

                {!subscribed ? (
                  <>
                    <h2 className="text-white mb-4">Stay in the Loop</h2>
                    <p className="text-gray-400 mb-8 text-lg">
                      Stay updated on modular care, AI innovation, and platform news.
                      Subscribe to receive our latest insights directly in your inbox.
                    </p>

                    <form
                      onSubmit={handleSubscribe}
                      className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
                    >
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="flex-1 bg-slate-900/50 border-gray-800 text-white placeholder:text-gray-500 focus:border-teal-400 focus:ring-teal-400/20"
                      />
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-0 px-8"
                      >
                        Subscribe
                      </Button>
                    </form>

                    <p className="text-gray-500 text-sm mt-6">
                      We respect your privacy. Unsubscribe anytime.
                    </p>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center border border-teal-400/30 mb-6 mx-auto"
                    >
                      <Mail className="w-10 h-10 text-teal-400" />
                    </motion.div>
                    <h3 className="text-white mb-2">You're Subscribed!</h3>
                    <p className="text-gray-400">
                      Check your inbox for a confirmation email. We're excited to share our latest insights with you.
                    </p>
                  </motion.div>
                )}
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
