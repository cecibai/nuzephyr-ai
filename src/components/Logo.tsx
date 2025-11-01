import { motion } from "motion/react";
import logoImage from "figma:asset/0c944e67205a377287222911c8b2743e3e8d5682.png";

interface LogoProps {
  className?: string;
  showText?: boolean;
  animated?: boolean;
}

export function Logo({ className = "", showText = true, animated = true }: LogoProps) {
  const LogoImage = animated ? motion.img : "img";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoImage
        src={logoImage}
        alt="NuZephyr Logo"
        className="relative"
        style={{
          width: "40px",
          height: "40px",
          filter: "hue-rotate(-90deg) saturate(1.5) brightness(1.4)",
        }}
        {...(animated && {
          animate: {
            rotate: [0, 5, -5, 0],
          },
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        })}
      />

      {showText && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent tracking-tight text-xl font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
            NuZephyr
          </span>
        </motion.div>
      )}
    </div>
  );
}
