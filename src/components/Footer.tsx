import { motion } from "motion/react";
import { Logo } from "./Logo";
import { MapPin, Phone, Mail } from "lucide-react";

const footerSections = {
  Company: ["About", "Careers", "Contact", "Blog"],
  Platform: ["Modules", "API", "Compliance", "Partners"],
  Legal: ["Privacy Policy", "AI Usage", "Terms of Use", "HIPAA Notice"],
};

export function Footer() {
  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          background: "linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.9) 50%, rgba(15, 23, 42, 0.9) 100%)",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <Logo animated={false} className="mb-4" />
            </div>
            <p className="text-gray-400 text-sm mb-6 pb-4">Delivering intelligent care with modular AI, HIPAA compliance, and real-time clinical insight.</p>
            
            <div className="space-y-3">
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-start gap-3 text-gray-400 text-sm group justify-center md:justify-start"
              >
                <MapPin className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="group-hover:text-teal-400 transition-colors">
                  <span className="md:hidden">2261 Market Street<br />San Francisco, CA 94114</span>
                  <span className="hidden md:inline">2261 Market Street, San Francisco, CA 94114</span>
                </span>
              </motion.div>

              <motion.a
                href="tel:540-324-9598"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 text-gray-400 text-sm hover:text-teal-400 transition-colors group justify-center md:justify-start"
              >
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>540-324-9598</span>
              </motion.a>

              <motion.a
                href="mailto:hello@NuZephyrHealth.ai"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 text-gray-400 text-sm hover:text-teal-400 transition-colors group justify-center md:justify-start"
              >
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>hello@NuZephyrHealth.ai</span>
              </motion.a>
            </div>
          </div>

          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title} className="text-center md:text-left">
              <h4 className="text-white mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => {
                  const getHref = (linkText: string) => {
                    if (linkText === "About") return "/about";
                    if (linkText === "Careers") return "/careers";
                    if (linkText === "Contact") return "/contact";
                    if (linkText === "Blog") return "/blog";
                    if (linkText === "Modules") return "/modules";
                    if (linkText === "API") return "/api";
                    if (linkText === "Partners") return "/partners";
                    if (linkText === "Compliance") return "/compliance";
                    if (linkText === "Privacy Policy") return "/legal#privacy-policy";
                    if (linkText === "AI Usage") return "/legal#ai-usage";
                    if (linkText === "Terms of Use") return "/legal#terms-of-use";
                    if (linkText === "HIPAA Notice") return "/legal#hipaa-notice";
                    return "#";
                  };

                  return (
                    <motion.li
                      key={link}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <a 
                        href={getHref(link)} 
                        className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm text-center">
            © 2025 NuZephyr Health AI. All rights reserved.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-400/50 to-transparent" />
    </footer>
  );
}
