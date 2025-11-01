import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";

interface BlogPostTemplateProps {
  title: string;
  date: string;
  tag: string;
  readTime: string;
  author: string;
  excerpt: string;
  content: string | React.ReactNode;
  onBack?: () => void;
}

const tagColors: Record<string, string> = {
  "Product Update": "bg-indigo-400/20 text-indigo-300 border-indigo-400/30",
  "Clinical Insight": "bg-teal-400/20 text-teal-300 border-teal-400/30",
  "Founder Note": "bg-yellow-400/20 text-yellow-300 border-yellow-400/30",
  "Partner Story": "bg-violet-400/20 text-violet-300 border-violet-400/30",
  "Culture & Team": "bg-orange-400/20 text-orange-300 border-orange-400/30",
  "Product Team": "bg-indigo-400/20 text-indigo-300 border-indigo-400/30",
};

export function BlogPostTemplate({
  title,
  date,
  tag,
  readTime,
  author,
  excerpt,
  content,
  onBack,
}: BlogPostTemplateProps) {
  const tagColorClass = tagColors[tag] || "bg-purple-400/20 text-purple-300 border-purple-400/30";

  return (
    <div className="min-h-screen bg-slate-950 pt-24">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            className="text-teal-400 hover:text-teal-300 hover:bg-teal-400/10 p-0"
            onClick={onBack || (() => window.history.back())}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </motion.div>

        {/* Article Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Badge className={`${tagColorClass} mb-4`}>{tag}</Badge>
          
          <h1 className="text-white mb-6">{title}</h1>
          
          <p className="text-gray-300 text-xl mb-6 italic">{excerpt}</p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-teal-400" />
              <span>{author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-teal-400" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-teal-400" />
              <span>{readTime}</span>
            </div>
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card
            className="p-8 md:p-12 border-0 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.6) 100%)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(100, 255, 218, 0.2)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-cyan-400" />
            
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="text-gray-300 leading-relaxed space-y-6">
                {typeof content === 'string' ? (
                  content.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))
                ) : (
                  content
                )}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Share & Subscribe CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Card
            className="p-8 border-0 text-center relative overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.8) 100%)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(100, 255, 218, 0.3)",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-cyan-500/10" />
            
            <div className="relative z-10">
              <h3 className="text-white mb-3">Enjoyed this article?</h3>
              <p className="text-gray-400 mb-6">
                Subscribe to receive our latest insights on modular care, AI innovation, and
                platform news.
              </p>
              <Button
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-0 px-8"
                onClick={() => {
                  window.location.hash = "subscribe";
                }}
              >
                Subscribe to Our Newsletter
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
