import "./AdvantagesPage.scss";
import { motion } from "framer-motion";
import { FaClock, FaMagic, FaCheckCircle, FaCogs, FaLeaf, FaHandshake, FaCoffee } from "react-icons/fa";

export default function AdvantagesPage() {
  return (
    <motion.div
      className="advantages-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <header>
        <h1>Почему нас выбирают</h1>
        <p>
          Мы стремимся создать не просто кофейню, а место, куда хочется возвращаться.
          Здесь ценят детали, качество и заботу.
        </p>
      </header>

      <section className="grid">

        <motion.div
          className="adv-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <FaClock className="icon" />
          <h3>Скорость и качество</h3>
          <p>
            Мы моделируем процессы, чтобы вы получали напиток и выпечку
            максимально быстро — без ущерба для вкуса.
          </p>
        </motion.div>

        <motion.div className="adv-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
          <FaMagic className="icon" />
          <h3>Уютная атмосфера</h3>
          <p>
            Винтажные интерьеры, спокойная музыка и живой аромат —
            идеальный фон для работы, встреч и отдыха.
          </p>
        </motion.div>

        <motion.div className="adv-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
          <FaCheckCircle className="icon" />
          <h3>Свежие продукты</h3>
          <p>
            Ингредиенты поставляются ежедневно — мы работаем только с проверенными
            поставщиками и фермерскими хозяйствами.
          </p>
        </motion.div>

        <motion.div className="adv-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
          <FaCogs className="icon" />
          <h3>Онлайн-заказ</h3>
          <p>
            Удобный предзаказ, самовывоз, корзина — всё на сайте и с мобильных устройств.
          </p>
        </motion.div>

        <motion.div className="adv-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
          <FaLeaf className="icon" />
          <h3>Экологичность</h3>
          <p>
            Мы используем биоразлагаемую упаковку и минимизируем отходы.
          </p>
        </motion.div>

        <motion.div className="adv-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
          <FaHandshake className="icon" />
          <h3>Дружелюбие</h3>
          <p>
            Мы встречаем каждого гостя с улыбкой и ценим постоянных клиентов.
          </p>
        </motion.div>

        <motion.div className="adv-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
          <FaCoffee className="icon" />
          <h3>Уникальные напитки</h3>
          <p>
            Мы разрабатываем авторские рецепты — каждый сезон у нас новые вкусы.
          </p>
        </motion.div>

      </section>

      <footer>
        <p>Мы работаем, чтобы ваш визит был не просто покупкой, а впечатлением.</p>
      </footer>
    </motion.div>
  );
}
