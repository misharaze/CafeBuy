import './VarietiesPage.scss';
import { motion } from 'framer-motion';

const varieties = [
  {
    name: "Éthiopie",
    notes: "Notes fruitées, acidité légère",
  },
  {
    name: "Brésil",
    notes: "Noisette, chocolat au lait, caramel",
  },
  {
    name: "Colombie",
    notes: "Touches d’agrumes, douceur fruitée",
  },
  {
    name: "Kenya",
    notes: "Notes vineuses, acidité vive",
  }
];

export default function VarietiesPage() {
  return (
    <motion.div
      className="varieties-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <header>
        <h1>Nos variétés de café</h1>
        <p>
          Nous travaillons avec de petites exploitations agricoles
          et sélectionnons chaque lot avec le plus grand soin.
        </p>
      </header>

      <section className="grid">
        {varieties.map((v) => (
          <motion.div
            className="variety-card"
            key={v.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>{v.name}</h2>
            <p>{v.notes}</p>
          </motion.div>
        ))}
      </section>
    </motion.div>
  );
}
