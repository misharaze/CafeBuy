import './Gallery.scss';
import img1 from '../../assets/img/coffeerelax.png';
import img2 from '../../assets/img/interiors.jpg';
import img3 from '../../assets/img/coffedesert.jpg';
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <motion.section
      className="gallery-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="gallery-header">
        <h2>L’atmosphère de Café Nostalgie</h2>
        <p>
          Chaque détail de notre espace est pensé pour le confort
          et le plaisir de savourer l’instant.
        </p>
      </div>

      <div className="gallery-grid">
        {[img1, img2, img3].map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt="Galerie Café Nostalgie"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        ))}
      </div>
    </motion.section>
  );
}
