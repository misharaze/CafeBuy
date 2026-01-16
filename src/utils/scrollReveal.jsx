import {  useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ScrollReveal({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-100px", once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotateX: 8 }}
      animate={
        inView
          ? { opacity: 1, y: 0, rotateX: 0 }
          : {}
      }
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
