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
        <h1>Процесс приготовления</h1>
        <p>
          Мы верим, что настоящее удовольствие начинается 
          с внимания к деталям на каждом этапе — от зерна до чашки.
        </p>
      </header>

      <section className="steps">

        <motion.div
          className="step"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>1. Выбор зерна</h2>
          <p>
            Мы используем тщательно отобранные бобы арабики,
            произрастающие на плантациях Южной Америки и Африки.
          </p>
        </motion.div>

        <motion.div
          className="step"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>2. Обжарка</h2>
          <p>
            Каждая партия обжаривается малыми объёмами, 
            чтобы сохранить уникальный аромат и вкус.
          </p>
        </motion.div>

        <motion.div
          className="step"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>3. Помол</h2>
          <p>
            Молим зерна непосредственно перед приготовлением —
            для максимальной свежести и аромата.
          </p>
        </motion.div>

        <motion.div
          className="step"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>4. Приготовление</h2>
          <p>
            Бариста подбирают идеальную технологию — эспрессо,
            пуровер, френч-пресс — исходя из сорта и вкуса.
          </p>
        </motion.div>

      </section>

      <footer>
        <p>Каждая чашка — маленькое искусство.</p>
      </footer>
    </motion.div>
  );
}
