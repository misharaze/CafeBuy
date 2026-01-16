import './Reviews.scss';
import { motion } from "framer-motion";

const reviews = [
  {
    name: 'Émilie',
    text: 'Le latte ici est mon rituel du matin.',
    role: 'Cliente fidèle'
  },
  {
    name: 'Lucas',
    text: 'Un endroit parfait pour travailler et se détendre.',
    role: 'Freelance'
  },
  {
    name: 'Sophie',
    text: 'Un cappuccino parfait et une ambiance unique.',
    role: 'Amatrice de café'
  },
];

export default function Reviews() {
  return (
    <motion.section
      className="reviews-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="reviews-header">
        <h2>Avis de nos clients</h2>
        <p>Quelques mots de la part de nos visiteurs.</p>
      </div>

      <div className="reviews-grid">
        {reviews.map((r) => (
          <motion.div
            className="review-card"
            key={r.name}
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text">“{r.text}”</p>
            <p className="name">{r.name}</p>
            <p className="role">{r.role}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
