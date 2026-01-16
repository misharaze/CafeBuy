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
        <h1>Pourquoi nous choisir</h1>
        <p>
          Nous souhaitons créer bien plus qu’un simple café : un lieu où l’on a envie
          de revenir. Ici, chaque détail compte, tout comme la qualité et l’attention
          portée à nos clients.
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
          <h3>Rapidité et qualité</h3>
          <p>
            Nous optimisons chaque étape afin que vous receviez votre boisson et vos
            pâtisseries rapidement, sans jamais compromettre le goût.
          </p>
        </motion.div>

        <motion.div
          className="adv-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <FaMagic className="icon" />
          <h3>Ambiance chaleureuse</h3>
          <p>
            Intérieurs vintage, musique douce et arômes enveloppants —
            le cadre idéal pour travailler, se retrouver ou se détendre.
          </p>
        </motion.div>

        <motion.div
          className="adv-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <FaCheckCircle className="icon" />
          <h3>Produits frais</h3>
          <p>
            Nos ingrédients sont livrés chaque jour. Nous collaborons uniquement avec
            des fournisseurs fiables et des producteurs locaux.
          </p>
        </motion.div>

        <motion.div
          className="adv-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <FaCogs className="icon" />
          <h3>Commande en ligne</h3>
          <p>
            Précommande, retrait sur place, panier — tout est accessible sur le site
            et depuis votre mobile.
          </p>
        </motion.div>

        <motion.div
          className="adv-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <FaLeaf className="icon" />
          <h3>Engagement écologique</h3>
          <p>
            Nous utilisons des emballages biodégradables et réduisons au maximum
            notre impact environnemental.
          </p>
        </motion.div>

        <motion.div
          className="adv-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <FaHandshake className="icon" />
          <h3>Accueil convivial</h3>
          <p>
            Chaque client est accueilli avec le sourire, et nous attachons une
            importance particulière à nos habitués.
          </p>
        </motion.div>

        <motion.div
          className="adv-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <FaCoffee className="icon" />
          <h3>Boissons uniques</h3>
          <p>
            Nous créons des recettes signature — à chaque saison, de nouvelles
            saveurs à découvrir.
          </p>
        </motion.div>

      </section>

      <footer>
        <p>
          Nous travaillons pour que chaque visite soit bien plus qu’un achat :
          une véritable expérience.
        </p>
      </footer>
    </motion.div>
  );
}
