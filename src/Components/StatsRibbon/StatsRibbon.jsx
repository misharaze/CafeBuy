import { motion } from "framer-motion";
import "./StatsRibbon.scss";

const stats = [
  { value: "25+", label: "Boissons signature" },
  { value: "1 250+", label: "Clients satisfaits" },
  { value: "8+", label: "Années d’expérience" },
  { value: "100%", label: "Arabica" },
  { value: "12", label: "Baristas professionnels" },
  { value: "4,9 ★", label: "Note moyenne" }
];

export default function StatsRibbon() {
  return (
    <section className="stats-ribbon">
      <div className="ribbon-glow" />

      <motion.div
        className="stats-track"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...stats, ...stats].map((s, i) => (
          <div className="stat-item" key={i}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
