
import './ProcessPage.scss';
import { motion } from 'framer-motion';

export default function ProcessPage() {
  return (
    <motion.div
      className="process-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <header>
        <h1>Notre méthode de préparation</h1>
        <p>
          Nous croyons que le véritable plaisir commence par l’attention
          portée aux moindres détails, à chaque étape — du grain à la tasse.
        </p>
      </header>

      <section className="steps">

        <motion.div
          className="step"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>1. Sélection des grains</h2>
          <p>
            Nous utilisons des grains d’arabica soigneusement sélectionnés,
            cultivés sur des plantations d’Amérique du Sud et d’Afrique.
          </p>
        </motion.div>

        <motion.div
          className="step"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>2. Torréfaction</h2>
          <p>
            Chaque lot est torréfié en petites quantités afin de préserver
            toute la richesse des arômes et des saveurs.
          </p>
        </motion.div>

        <motion.div
          className="step"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>3. Mouture</h2>
          <p>
            Les grains sont moulus juste avant la préparation,
            pour une fraîcheur et un parfum incomparables.
          </p>
        </motion.div>

        <motion.div
          className="step"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>4. Préparation</h2>
          <p>
            Nos baristas choisissent la méthode idéale — espresso,
            pour-over ou presse française — selon l’origine et le profil du café.
          </p>
        </motion.div>

      </section>

      <footer>
        <p>Chaque tasse est une petite œuvre d’art.</p>
      </footer>
    </motion.div>
  );
}
