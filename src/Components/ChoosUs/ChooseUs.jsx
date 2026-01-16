import { FaClock, FaMagic, FaCheckCircle, FaCogs } from 'react-icons/fa';
import "./ChooseUs.scss";
import { Link } from 'react-router-dom';
import MagicButton from '../../assets/Button/Button';
import { motion } from "framer-motion";

function ChooseUs() {
  return (
    <motion.section
      className="why-choose-us"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="container">
        <div className="left">
          <h2>Pourquoi nous choisir</h2>
          <p>Nous prenons soin du goût, du confort et de chaque client.</p>
          <Link to="/advantages">
            <MagicButton size="sm" text="Tout découvrir" />
          </Link>
        </div>

        <motion.div
          className="right"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            show: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {[
            { icon: <FaClock />, title: "Service rapide", text: "Sans attente inutile" },
            { icon: <FaMagic />, title: "Ambiance", text: "Chaleur et musique" },
            { icon: <FaCheckCircle />, title: "Produits frais", text: "Ingrédients naturels" },
            { icon: <FaCogs />, title: "Commande en ligne", text: "Simple et efficace" },
          ].map((f) => (
            <motion.div
              className="feature"
              key={f.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <div className="icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ChooseUs;
