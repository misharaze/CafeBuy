import './VarietiesPage.scss';
import { motion } from 'framer-motion';

const varieties = [
  {
    name: "Эфиопия",
    notes: "Ягодные оттенки, лёгкая кислинка",
  },
  {
    name: "Бразилия",
    notes: "Орехи, молочный шоколад, карамель",
  },
  {
    name: "Колумбия",
    notes: "Цитрусовые нотки, ягодная сладость",
  },
  {
    name: "Кения",
    notes: "Винные оттенки, яркая кислотность",
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
        <h1>Наши сорта кофе</h1>
        <p>
          Мы работаем с небольшими фермерскими хозяйствами 
          и тщательно отбираем каждую партию.
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
