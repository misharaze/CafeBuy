import './About.scss';
import Interiors from '../../assets/img/interiors.jpg';
import { Link } from "react-router-dom";
//import MagicButton from '../../assets/Button/Button';
import { motion } from "framer-motion";
import { Coffee, Heart, Sparkles } from "lucide-react";
import UIActionButton from '../../assets/Button/UIActionButton';

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
          <img src={Interiors} alt="Intérieur du café" />
          <Link to="/coffee-varieties">
            <UIActionButton size="sm" text="Nos cafés" />
          </Link>
        </div>

        <div className="card-text">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Bienvenue dans notre paradis du café
          </motion.h2>

          <motion.p
            className="intro"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            Café Nostalgie, c’est bien plus qu’un simple café.
            C’est un lieu où les matins commencent lentement,
            et où chaque gorgée ramène aux plaisirs simples de la vie.
          </motion.p>

          <div className="about-features">
            {[
              {
                icon: <Coffee size={22} />,
                title: "Torréfaction artisanale",
                text: "Nous travaillons uniquement avec des grains sélectionnés et maîtrisons chaque étape du goût."
              },
              {
                icon: <Heart size={22} />,
                title: "Attention portée aux clients",
                text: "Nous créons une atmosphère dans laquelle on a envie de revenir encore et encore."
              },
              {
                icon: <Sparkles size={22} />,
                title: "Souci du détail",
                text: "De la lumière à la musique, jusqu’à la texture de la tasse — chaque détail compte."
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
            Nous nous inspirons des cafés français,
            où l’important n’est pas la vitesse, mais le ressenti.
            Ici, on peut s’arrêter, discuter,
            travailler ou simplement être avec soi-même.
          </motion.p>

          <Link to="/process">
            <UIActionButton size="sm" text="Notre méthode de préparation" />
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
}
