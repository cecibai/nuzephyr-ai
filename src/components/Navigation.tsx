import { Button } from "./ui/button";
import { motion, AnimatePresence } from "motion/react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Modules", href: "/modules" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Live System", href: "/live-system" },
    { label: "Partners", href: "/partners" },
    { label: "About", href: "/about" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{
        background: "linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.8) 100%)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(100, 255, 218, 0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 mr-32">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-teal-400 transition-colors relative group"
              whileHover={{ y: -2 }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300" style={{ boxShadow: "0 0 8px rgba(100, 255, 218, 0.6)" }} />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-teal-400 hover:text-teal-300 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="pt-4 pb-2 space-y-2">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-300 hover:text-teal-400 transition-colors py-2 px-4 rounded-lg hover:bg-teal-400/10"
                  whileHover={{ x: 5 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
