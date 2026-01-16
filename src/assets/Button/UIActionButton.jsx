import { motion } from "framer-motion";
import "./UiActionButton.scss";

export default function UIActionButton({
    children,
    text,
    onClick,
    size = "md",
    className = ""
  }) {
    return (
      <motion.button
        className={`ui-action-btn ${size} ${className}`}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
      >
        <span className="glow" />
        <span className="label">{children || text}</span>
      </motion.button>
    );
  }
  
