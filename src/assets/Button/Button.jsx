import { motion, useMotionValue, useTransform } from "framer-motion";
import "./Button.scss";

export default function MagicButton({ text }) {

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-20, 20], [15, -15]);
  const rotateY = useTransform(x, [-20, 20], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      className="magic-button"
      style={{
        rotateX,
        rotateY,
      }}
      whileHover={{
        scale: 1.08,
        boxShadow: "0 0 25px rgba(198,156,109,0.45)"
      }}
      whileTap={{
        scale: 0.97
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
    >
      <span>{text}</span>
      <motion.div
        className="glow"
        animate={{
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
    </motion.button>
  );
}
