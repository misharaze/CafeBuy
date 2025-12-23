import './About.scss';
import Interiors from '../../assets/img/interiors.jpg';
import { Link } from "react-router-dom";
import MagicButton from '../../assets/Button/Button';
import { motion } from "framer-motion";
import { Coffee, Heart, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <motion.section
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <motion.div
        className="card-container"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
   
        <div className="card-image">
          <img src={Interiors} alt="Интерьер кафе" />
          <Link to="/coffee-varieties">
            <MagicButton size="lg" text="Наши сорта кофе" />
          </Link>
        </div>

  
        <div className="card-text">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Добро пожаловать в наш кофейный рай
          </motion.h2>

          <motion.p
            className="intro"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            Café Nostalgie — это больше, чем просто кофейня.
            Это место, где утро начинается медленно,
            а каждый глоток возвращает к простым радостям жизни.
          </motion.p>


          <div className="about-features">
            {[
              {
                icon: <Coffee size={22} />,
                title: "Ручная обжарка",
                text: "Мы работаем только с отборными зернами и контролируем вкус на каждом этапе."
              },
              {
                icon: <Heart size={22} />,
                title: "Забота о гостях",
                text: "Мы создаём атмосферу, в которую хочется возвращаться снова и снова."
              },
              {
                icon: <Sparkles size={22} />,
                title: "Внимание к деталям",
                text: "От света и музыки до текстуры чашки — всё имеет значение."
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="about-feature"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
              >
                <span className="icon">{item.icon}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="story"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Мы вдохновляемся французскими кофейнями,
            где важны не скорость, а ощущения.
            Здесь можно остановиться, поговорить,
            поработать или просто побыть наедине с собой.
          </motion.p>

          <Link to="/process">
            <MagicButton  size="sm"  text="О процессе приготовления" />
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}
