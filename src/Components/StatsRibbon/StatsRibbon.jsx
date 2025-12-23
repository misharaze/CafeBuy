import { motion } from "framer-motion";
import "./StatsRibbon.scss";

const stats = [
  { value: "25+", label: "Авторских напитков" },
  { value: "1 250+", label: "Довольных гостей" },
  { value: "8+", label: "Лет опыта" },
  { value: "100%", label: "Арабика" },
  { value: "12", label: "Бариста-профессионалов" },
  { value: "4.9 ★", label: "Средний рейтинг" }
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
