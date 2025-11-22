import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useRef } from "react";

const partners = [
  { name: "Zoom", logo: "Z", color: "from-blue-500 to-blue-600" },
  { name: "FHIR", logo: "F", color: "from-teal-500 to-teal-600" },
  { name: "HL7", logo: "H7", color: "from-purple-500 to-purple-600" },
  { name: "Stripe", logo: "S", color: "from-indigo-500 to-indigo-600" },
];

export function Partners() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="py-20 px-6 relative overflow-hidden" id="partners">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-white to-blue-50" />

      {/* Dynamic mesh gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(at 40% 20%, rgba(59, 130, 246, 0.15) 0px, transparent 50%),
            radial-gradient(at 80% 60%, rgba(20, 184, 166, 0.15) 0px, transparent 50%),
            radial-gradient(at 20% 80%, rgba(99, 102, 241, 0.15) 0px, transparent 50%)
          `,
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Floating orbs with parallax */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan-200 to-teal-200 rounded-full blur-3xl opacity-25"
      />

      {/* Animated circles */}
      <motion.div
        className="absolute top-1/3 left-1/3 w-40 h-40 border-2 border-blue-200 rounded-full opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Dotted pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, rgb(14, 165, 233) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      <motion.div style={{ scale, opacity }} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 mb-4 shadow-lg shadow-blue-200">
            Integrations
          </Badge>
          <h2 className="bg-gradient-to-r from-slate-900 via-blue-700 to-cyan-700 bg-clip-text text-transparent mb-4">
            Partners & Integrations
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">Built to integrate seamlessly with industry-leading platforms</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {partners.map((partner, index) => (
              <PartnerCard key={partner.name} partner={partner} index={index} scrollProgress={scrollYProgress} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button 
              className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-0 px-8 py-6 shadow-lg shadow-teal-200 hover:shadow-xl hover:shadow-teal-300 transition-all" 
              onClick={() => window.location.hash = "contact"}
            >
              Explore Integration Options
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function PartnerCard({ partner, index, scrollProgress }: { partner: typeof partners[0]; index: number; scrollProgress: any }) {
  const y = useTransform(scrollProgress, [0, 1], [40 * (index % 2 === 0 ? 1 : -1), -40 * (index % 2 === 0 ? 1 : -1)]);

  return (
    <motion.div
      style={{ y }}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      className="flex flex-col items-center gap-4 group cursor-pointer"
    >
      <div className="relative">
        {/* Glow effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${partner.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        
        {/* Card */}
        <div className="relative w-24 h-24 rounded-2xl flex items-center justify-center bg-white/80 backdrop-blur-sm border-2 border-gray-200 group-hover:border-transparent group-hover:shadow-xl transition-all duration-300 overflow-hidden">
          {/* Gradient border on hover */}
          <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
          <div className="absolute inset-[2px] bg-white rounded-xl" />
          
          <span className={`relative text-3xl bg-gradient-to-br ${partner.color} bg-clip-text text-transparent transition-all duration-300 group-hover:scale-110`}>
            {partner.logo}
          </span>
        </div>
      </div>
      
      <span className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
        {partner.name}
      </span>
    </motion.div>
  );
}
