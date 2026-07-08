import { motion } from "framer-motion";

const particles = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  x: Math.random() * 1600,
  y: Math.random() * 900,
  duration: 8 + Math.random() * 8,
  size: 2 + Math.random() * 3,
}));

function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-400/20"
          style={{
            width: particle.size,
            height: particle.size,
          }}
          initial={{
            x: particle.x,
            y: particle.y,
          }}
          animate={{
            y: particle.y - 120,
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default FloatingParticles;