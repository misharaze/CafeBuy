import { motion } from "framer-motion";
import "./GlassButton.scss";

export default function GlassButton({
  text = "УЗНАТЬ БОЛЬШЕ",
  size = "md"
}) {
  return (
    <motion.button
      className={`glass-button glass-${size}`}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="light-orb" />
      <span className="label">{text}</span>
      <span className="arrow">→</span>
    </motion.button>
  );
}
