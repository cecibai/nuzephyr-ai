import { Button } from "./ui/button";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationId: number;

    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      pulsePhase: number;
      pulseSpeed: number;
      hue: number;
    }

    let nodes: Node[] = [];
    let time = 0;

    const initCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      const scale = window.devicePixelRatio;
      canvas.width = Math.floor(width * scale);
      canvas.height = Math.floor(height * scale);

      ctx.scale(scale, scale);

      // Create neural network nodes
      nodes = [];
      // Reduce node count on mobile for less cluttered appearance
      const isMobile = width < 768;
      const nodeCount = isMobile ? 50 : 120;
      const baseSize = isMobile ? 0.8 : 1;
      
      for (let i = 0; i < nodeCount; i++) {
        const size = (Math.random() * 2 + 1) * baseSize;
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 1.2,
          vy: (Math.random() - 0.5) * 1.2,
          size: size,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseSpeed: Math.random() * 0.02 + 0.01,
          hue: Math.random() > 0.5 ? 175 : 190,
        });
      }
    };

    const drawNode = (node: Node) => {
      const pulse = Math.sin(time * node.pulseSpeed + node.pulsePhase) * 0.2 + 0.4;
      const currentSize = node.size * pulse;
      
      // Further reduce brightness on mobile
      const isMobile = width < 768;
      const brightnessMultiplier = isMobile ? 0.6 : 1;

      const outerGlow = ctx.createRadialGradient(
        node.x,
        node.y,
        0,
        node.x,
        node.y,
        currentSize * 4
      );
      outerGlow.addColorStop(0, `hsla(${node.hue}, 80%, 60%, ${0.12 * pulse * brightnessMultiplier})`);
      outerGlow.addColorStop(0.5, `hsla(${node.hue}, 80%, 55%, ${0.08 * pulse * brightnessMultiplier})`);
      outerGlow.addColorStop(1, `hsla(${node.hue}, 80%, 50%, 0)`);

      ctx.fillStyle = outerGlow;
      ctx.beginPath();
      ctx.arc(node.x, node.y, currentSize * 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `hsla(${node.hue}, 90%, 70%, ${0.25 * pulse * brightnessMultiplier})`;
      ctx.beginPath();
      ctx.arc(node.x, node.y, currentSize, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = `rgba(100, 255, 218, ${0.2 * pulse * brightnessMultiplier})`;
      ctx.beginPath();
      ctx.arc(node.x, node.y, currentSize * 0.5, 0, Math.PI * 2);
      ctx.fill();
    };

    const drawConnection = (node1: Node, node2: Node, distance: number, maxDistance: number) => {
      // Reduce connection opacity further on mobile
      const isMobile = width < 768;
      const baseOpacity = isMobile ? 0.08 : 0.12;
      const opacity = (1 - distance / maxDistance) * baseOpacity;
      
      const gradient = ctx.createLinearGradient(node1.x, node1.y, node2.x, node2.y);
      gradient.addColorStop(0, `hsla(${node1.hue}, 70%, 55%, ${opacity * 0.8})`);
      gradient.addColorStop(0.5, `hsla(180, 70%, 60%, ${opacity})`);
      gradient.addColorStop(1, `hsla(${node2.hue}, 70%, 55%, ${opacity * 0.8})`);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(node1.x, node1.y);
      ctx.lineTo(node2.x, node2.y);
      ctx.stroke();

      if (Math.random() < 0.003) {
        const t = Math.random();
        const px = node1.x + (node2.x - node1.x) * t;
        const py = node1.y + (node2.y - node1.y) * t;
        
        const particleGlow = ctx.createRadialGradient(px, py, 0, px, py, 3);
        particleGlow.addColorStop(0, `rgba(100, 255, 218, ${opacity * 2.5})`);
        particleGlow.addColorStop(0.5, `rgba(100, 255, 218, ${opacity * 1.2})`);
        particleGlow.addColorStop(1, `rgba(100, 255, 218, 0)`);
        
        ctx.fillStyle = particleGlow;
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const animate = () => {
      time += 1;

      ctx.fillStyle = "rgba(15, 23, 42, 0.15)";
      ctx.fillRect(0, 0, width, height);

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) {
          node.vx *= -1;
          node.x = Math.max(0, Math.min(width, node.x));
        }
        if (node.y < 0 || node.y > height) {
          node.vy *= -1;
          node.y = Math.max(0, Math.min(height, node.y));
        }

        if (Math.random() < 0.02) {
          node.vx += (Math.random() - 0.5) * 0.1;
          node.vy += (Math.random() - 0.5) * 0.1;
          
          const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
          const maxSpeed = 2;
          if (speed > maxSpeed) {
            node.vx = (node.vx / speed) * maxSpeed;
            node.vy = (node.vy / speed) * maxSpeed;
          }
        }
      });

      // Reduce connection distance on mobile to reduce visual clutter
      const maxConnectionDistance = width < 768 ? 100 : 150;
      const connections: Array<[Node, Node, number]> = [];

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxConnectionDistance) {
            connections.push([nodes[i], nodes[j], distance]);
          }
        }
      }

      connections.sort((a, b) => b[2] - a[2]);

      connections.forEach(([node1, node2, distance]) => {
        drawConnection(node1, node2, distance, maxConnectionDistance);
      });

      nodes.forEach((node) => {
        drawNode(node);
      });

      if (Math.random() < 0.002) {
        const burstNode = nodes[Math.floor(Math.random() * nodes.length)];
        const burstGradient = ctx.createRadialGradient(
          burstNode.x,
          burstNode.y,
          0,
          burstNode.x,
          burstNode.y,
          40
        );
        burstGradient.addColorStop(0, `rgba(100, 255, 218, 0.15)`);
        burstGradient.addColorStop(0.5, `rgba(100, 255, 218, 0.07)`);
        burstGradient.addColorStop(1, `rgba(100, 255, 218, 0)`);

        ctx.fillStyle = burstGradient;
        ctx.beginPath();
        ctx.arc(burstNode.x, burstNode.y, 40, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    initCanvas();
    animate();

    const handleResize = () => {
      initCanvas();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20 md:pt-20 md:pb-0" 
      style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)" }}
    >
      <div className="absolute inset-0">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full block"
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/3 md:top-1/4 left-1/3 md:left-1/4 w-48 md:w-64 h-48 md:h-64 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(100, 255, 218, 0.03) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.08, 0.15, 0.08],
            x: [0, 25, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 md:bottom-1/4 right-1/3 md:right-1/4 w-48 md:w-64 h-48 md:h-64 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(34, 211, 238, 0.03) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.08, 0.15, 0.08],
            x: [0, -20, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />
        <motion.div
          className="absolute top-2/3 left-1/2 -translate-x-1/2 md:top-1/2 md:left-1/6 w-40 md:w-56 h-40 md:h-56 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(100, 255, 218, 0.025) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.06, 0.12, 0.06],
            x: [0, 15, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-white mb-6 px-6 md:px-0 text-4xl md:text-[3.5rem]" style={{ lineHeight: "1.1" }}>
            The Infrastructure for{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Intelligent Care Delivery
            </span>
          </h1>
          <p className="text-gray-300 mb-8 text-lg md:text-xl px-6 md:px-0">
            Modular, compliant, and clinically validated - powering intake, triage, documentation, and engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <Button 
              className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white border-0 px-8 py-6 w-48"
              onClick={() => window.location.hash = "demo"}
            >
              Request Demo
            </Button>
            <Button 
              variant="outline" 
              className="border-teal-400 text-teal-400 hover:bg-teal-400/10 px-8 py-6 w-48"
              onClick={() => window.location.hash = "modules"}
            >
              Explore Modules
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block"
        >
          <div className="relative w-full h-96 flex items-center justify-center">
            <motion.div
              className="absolute"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <svg width="525" height="525" viewBox="0 0 525 525">
                <motion.polygon
                  points="262.5,45 420,142.5 420,337.5 262.5,435 105,337.5 105,142.5"
                  fill="none"
                  stroke="rgba(100, 255, 218, 0.35)"
                  strokeWidth="1.5"
                  animate={{
                    strokeWidth: [1.5, 2, 1.5],
                    opacity: [0.35, 0.6, 0.35],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.circle cx="262.5" cy="45" r="3" fill="rgba(100, 255, 218, 0.7)"
                  animate={{ r: [3, 5, 3], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  style={{ filter: "drop-shadow(0 0 6px rgba(100, 255, 218, 0.6))" }}
                />
                <motion.circle cx="420" cy="142.5" r="3" fill="rgba(34, 211, 238, 0.7)"
                  animate={{ r: [3, 5, 3], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  style={{ filter: "drop-shadow(0 0 6px rgba(34, 211, 238, 0.6))" }}
                />
                <motion.circle cx="420" cy="337.5" r="3" fill="rgba(100, 255, 218, 0.7)"
                  animate={{ r: [3, 5, 3], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  style={{ filter: "drop-shadow(0 0 6px rgba(100, 255, 218, 0.6))" }}
                />
                <motion.circle cx="262.5" cy="435" r="3" fill="rgba(34, 211, 238, 0.7)"
                  animate={{ r: [3, 5, 3], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                  style={{ filter: "drop-shadow(0 0 6px rgba(34, 211, 238, 0.6))" }}
                />
                <motion.circle cx="105" cy="337.5" r="3" fill="rgba(100, 255, 218, 0.7)"
                  animate={{ r: [3, 5, 3], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                  style={{ filter: "drop-shadow(0 0 6px rgba(100, 255, 218, 0.6))" }}
                />
                <motion.circle cx="105" cy="142.5" r="3" fill="rgba(34, 211, 238, 0.7)"
                  animate={{ r: [3, 5, 3], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  style={{ filter: "drop-shadow(0 0 6px rgba(34, 211, 238, 0.6))" }}
                />
              </svg>
            </motion.div>

            <motion.div
              className="absolute"
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            >
              <svg width="200" height="200" viewBox="0 0 200 200">
                <motion.circle
                  cx="100"
                  cy="100"
                  r="72"
                  fill="none"
                  stroke="rgba(34, 211, 238, 0.25)"
                  strokeWidth="1"
                  strokeDasharray="4,8"
                  animate={{
                    strokeWidth: [1, 1.5, 1],
                    opacity: [0.25, 0.4, 0.25],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.circle cx="172" cy="100" r="2" fill="rgba(34, 211, 238, 0.6)"
                  animate={{ r: [2, 3, 2], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ filter: "drop-shadow(0 0 4px rgba(34, 211, 238, 0.5))" }}
                />
                <motion.circle cx="28" cy="100" r="2" fill="rgba(100, 255, 218, 0.6)"
                  animate={{ r: [2, 3, 2], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.75 }}
                  style={{ filter: "drop-shadow(0 0 4px rgba(100, 255, 218, 0.5))" }}
                />
              </svg>
            </motion.div>

            <motion.div
              className="absolute w-20 h-20 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(100, 255, 218, 0.2) 0%, rgba(34, 211, 238, 0.1) 50%, transparent 100%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute w-4 h-4 rounded-full"
              style={{
                background: "rgba(100, 255, 218, 0.7)",
                boxShadow: "0 0 8px rgba(100, 255, 218, 0.6), 0 0 16px rgba(100, 255, 218, 0.4), 0 0 24px rgba(34, 211, 238, 0.3)",
              }}
              animate={{
                scale: [1, 1.15, 1],
                boxShadow: [
                  "0 0 8px rgba(100, 255, 218, 0.6), 0 0 16px rgba(100, 255, 218, 0.4), 0 0 24px rgba(34, 211, 238, 0.3)",
                  "0 0 12px rgba(100, 255, 218, 0.8), 0 0 24px rgba(100, 255, 218, 0.5), 0 0 36px rgba(34, 211, 238, 0.4)",
                  "0 0 8px rgba(100, 255, 218, 0.6), 0 0 16px rgba(100, 255, 218, 0.4), 0 0 24px rgba(34, 211, 238, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
